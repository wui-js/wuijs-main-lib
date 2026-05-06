#!/usr/bin/env python3
"""
docs-check.py — WUI/JS Documentation Check
Validates version consistency between source files and documentation.

Usage:
  python docs-check.py                 → all components, English (default)
  python docs-check.py en              → all components, English
  python docs-check.py es              → all components, Spanish
  python docs-check.py en button       → single component, English
  python docs-check.py es button,modal → multiple components, Spanish
  python docs-check.py button          → single component, English (default)
"""

import sys, os, re, glob

# ── ANSI colors ───────────────────────────────────────────────────────────────
CYAN  = "\033[96m"
GREEN = "\033[92m"
RED   = "\033[91m"
RESET = "\033[0m"

# ── Paths ─────────────────────────────────────────────────────────────────────
REPO   = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MAIN   = os.path.join(REPO, "src", "wui-js", "main")
WUI_JS = os.path.join(MAIN, "wui.js")


def get_lib_version():
    if not os.path.isfile(WUI_JS):
        return "?"
    for line in open(WUI_JS, encoding="utf-8"):
        m = re.search(r'const version\s*=\s*"([^"]+)"', line)
        if m:
            return m.group(1)
    return "?"


def comp_to_class(comp):
    return "WUI" + comp[0].upper() + comp[1:]


def get_source_version(comp):
    comp_dir = os.path.join(MAIN, comp)
    for ext in ("js", "css"):
        files = [f for f in glob.glob(os.path.join(comp_dir, f"wui-{comp}-*.{ext}"))
                 if ".root." not in f]
        if files:
            m = re.search(rf"wui-{comp}-([0-9.]+)\.{ext}$", os.path.basename(files[0]))
            if m:
                return m.group(1)
    return None


def get_doc_order(doc_path):
    """Return component names in class table order."""
    order, seen = [], set()
    for line in open(doc_path, encoding="utf-8"):
        m = re.match(r'\|\s*\[?(WUI(\w+))\]?[^|]*\|\s*`[0-9.]+`', line)
        if m:
            comp = m.group(2).lower()
            if comp not in seen:
                seen.add(comp)
                order.append(comp)
    return order


def comp_to_anchor(comp):
    """Convert component directory name to anchor id: button → wui-button."""
    return f"wui-{comp}"

def get_section(lines, comp):
    """Return (start_idx, end_idx) of component section in doc lines."""
    anchor = comp_to_anchor(comp)
    start = None
    for i, line in enumerate(lines):
        if re.search(rf'<a name="{anchor}"', line):
            start = i
            break
    if start is None:
        return None, None
    for i in range(start + 1, len(lines)):
        if re.search(r'<a name="wui-\w[\w-]*"', lines[i]):
            return start, i
    return start, len(lines)


def ok(text):
    return f"  [{GREEN}pass{RESET}] {text}"

def fail(text):
    return f"  [{RED}fail{RESET}] {text}"

def fail_detail(lineno, value, expected):
    return f"    {RED}line {lineno}: '{value}' (expected '{expected}'){RESET}"


def check_component(comp, lang, lines, src_ver, summary=False):
    cls = comp_to_class(comp)

    # ── 1. Class documentation ─────────────────────────────────────────────
    section_start, section_end = get_section(lines, comp)
    has_section = section_start is not None
    doc_fails = not has_section

    # ── 2. Class table version ─────────────────────────────────────────────
    table_fails = []
    in_table = False
    for i, line in enumerate(lines):
        if re.search(r'\|\s*(Class name|Clase)', line, re.IGNORECASE):
            in_table = True
        if not in_table:
            continue
        if in_table and line.strip() == "":
            in_table = False
            continue
        m = re.match(rf'\|\s*\[?{cls}\]?[^|]*\|\s*`([0-9.]+)`', line)
        if m:
            if m.group(1) != src_ver:
                table_fails.append((i + 1, m.group(1)))
            break

    # ── 3. Field version ───────────────────────────────────────────────────
    field_fails = []
    if has_section:
        section_lines = lines[section_start:section_end]
        offset = section_start
        for i, line in enumerate(section_lines):
            m = re.match(r'\s*Versi[oó]n:\s*`([0-9.]+)`', line, re.IGNORECASE) or \
                re.match(r'\s*Version:\s*`([0-9.]+)`', line, re.IGNORECASE)
            if m and m.group(1) != src_ver:
                field_fails.append((offset + i + 1, m.group(1)))

    # ── 4. Files name version ──────────────────────────────────────────────
    file_fails = []
    if has_section:
        file_pattern = re.compile(rf'wui-{comp}-([0-9.]+)\.(root\.css|css|js)')
        for i, line in enumerate(section_lines):
            seen_in_line = set()
            for m in file_pattern.finditer(line):
                match_str = m.group(0)
                if m.group(1) != src_ver and match_str not in seen_in_line:
                    seen_in_line.add(match_str)
                    file_fails.append((offset + i + 1, match_str))

    # ── 5/6/7: root.css vs documentation CSS variables (pre-compute) ──────────
    only_doc = only_root_v = value_fails = []
    doc_vars = doc_defaults = root_vars = {}
    if has_section:
        root_path = os.path.join(MAIN, comp, f"wui-{comp}-{src_ver}.root.css")
        root_vars = {}
        if os.path.isfile(root_path):
            for line in open(root_path, encoding="utf-8"):
                m = re.match(r'\s*(--wui-[a-zA-Z0-9_-]+)\s*:\s*([^;]+);', line)
                if m:
                    root_vars[m.group(1).strip()] = m.group(2).strip()

        doc_vars = set()
        for line in section_lines:
            m = re.match(r'\|\s*`(--wui-[a-zA-Z0-9_-]+)`', line)
            if m:
                doc_vars.add(m.group(1))

        doc_defaults = {}
        in_root = False
        for line in section_lines:
            if re.search(r':root\s*\{', line):
                in_root = True; continue
            if in_root and re.search(r'^\s*\}', line):
                in_root = False; continue
            if in_root:
                m = re.match(r'\s*(--wui-[a-zA-Z0-9_-]+)\s*:\s*([^;]+);', line)
                if m:
                    doc_defaults[m.group(1).strip()] = m.group(2).strip()

        root_var_set = set(root_vars.keys())
        only_doc    = sorted(doc_vars - root_var_set)
        only_root_v = sorted(root_var_set - doc_vars)
        value_fails = [(v, root_vars[v], doc_defaults[v])
                       for v in root_vars if v in doc_defaults and doc_defaults[v] != root_vars[v]]

    any_fail = bool(doc_fails or table_fails or field_fails or file_fails
                    or only_doc or only_root_v or value_fails)
    if summary and not any_fail:
        return

    print(f"\n{CYAN}{comp}{RESET}")
    print(f"  version: {src_ver or '?'}")

    if src_ver is None:
        print(f"  [{RED}error{RESET}] no versioned file found in src/wui-js/main/{comp}/")
        return

    if not summary or doc_fails:
        if has_section:
            print(ok("class documentation."))
        else:
            print(fail("class documentation."))
            print(f"    {RED}<a name=\"{comp_to_anchor(comp)}\"> not found in README{RESET}")

    if not summary or table_fails:
        if not table_fails:
            print(ok("class table version."))
        else:
            print(fail("class table version."))
            for lineno, val in table_fails:
                print(fail_detail(lineno, val, src_ver))

    if has_section:
        if not summary or field_fails:
            if not field_fails:
                print(ok("field version."))
            else:
                print(fail("field version."))
                for lineno, val in field_fails:
                    print(fail_detail(lineno, val, src_ver))

        if not summary or file_fails:
            if not file_fails:
                print(ok("files name version."))
            else:
                print(fail("files name version."))
                for lineno, val in file_fails:
                    print(f"    {RED}line {lineno}: '{val}' (expected version {src_ver}){RESET}")

        # ── 5. css vars doc → root.css ────────────────────────────────────────
        if not summary or only_doc:
            if not only_doc:
                print(ok("css vars doc → root.css."))
            else:
                print(fail("css vars doc → root.css."))
                for var in only_doc:
                    print(f"    {RED}'{var}' documented but not in .root.css{RESET}")

        # ── 6. css vars root.css → doc ────────────────────────────────────────
        if not summary or only_root_v:
            if not only_root_v:
                print(ok("css vars root.css → doc."))
            else:
                print(fail("css vars root.css → doc."))
                for var in only_root_v:
                    print(f"    {RED}'{var}' in .root.css but not documented{RESET}")

        # ── 7. css default values ─────────────────────────────────────────────
        if not summary or value_fails:
            if not value_fails:
                print(ok("css default values."))
            else:
                print(fail("css default values."))
                for var, root_val, doc_val in value_fails:
                    print(f"    {RED}'{var}'{RESET}")
                    print(f"      root.css : {root_val}")
                    print(f"      doc      : {doc_val}")


HELP = """
docs-check.py — WUI/JS Documentation Check

Usage:
  python docs-check.py [options] [lang] [component,...]

Arguments:
  lang         Documentation language: en (default) or es.
  component    Component name(s), comma or space separated.
               Use * or omit to check all components.

Options:
  -s, --summary  Show only [fail] results.
  -h, --help     Show this help message.

Examples:
  python docs-check.py
  python docs-check.py es
  python docs-check.py en button
  python docs-check.py -s
  python docs-check.py -s es button,modal
"""

def main():
    args = sys.argv[1:]
    if "-h" in args or "--help" in args:
        print(HELP)
        sys.exit(0)
    summary = "-s" in args or "--summary" in args
    args = [a for a in args if a not in ("-s", "--summary")]

    # Detect if first arg is a language code or a component name
    lang = "en"
    if args and args[0].lower() in ("en", "es"):
        lang = args[0].lower()
        args = args[1:]

    doc_path = os.path.join(REPO, "docs", f"README-{lang}.md")
    if not os.path.isfile(doc_path):
        print(f"File not found: {doc_path}")
        sys.exit(1)

    lines = [l.rstrip("\n") for l in open(doc_path, encoding="utf-8")]
    doc_order = get_doc_order(doc_path)

    raw_comps = " ".join(args).replace(",", " ").split()
    src_dirs = {d for d in os.listdir(MAIN)
                if os.path.isdir(os.path.join(MAIN, d)) and not d.startswith(".")}
    src_dirs -= {"LICENSE", "wui.js"}

    if not raw_comps or raw_comps == ["*"]:
        order_idx = {c: i for i, c in enumerate(doc_order)}
        selected = sorted(src_dirs, key=lambda c: order_idx.get(c, 999))
    else:
        selected = raw_comps

    lib_ver = get_lib_version()
    print(f"\nWUI/JS - Docs check{' [summary]' if summary else ''}")
    print(f"lib version: {lib_ver}")
    print(f"language: {lang}")

    for comp in selected:
        if not os.path.isdir(os.path.join(MAIN, comp)):
            print(f"\n[{RED}error{RESET}] component not found: '{comp}'")
            continue
        src_ver = get_source_version(comp)
        check_component(comp, lang, lines, src_ver, summary=summary)

    print()


if __name__ == "__main__":
    main()

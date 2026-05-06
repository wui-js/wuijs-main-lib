#!/usr/bin/env python3
"""
css-root-check.py — WUI/JS CSS root.css Variables Check
Validates that every variable defined in .root.css exists in .css and/or .js.

Usage:
  python css-root-check.py             → all components
  python css-root-check.py *           → all components
  python css-root-check.py button      → single component
  python css-root-check.py button,modal → multiple components
"""

import sys, os, re, glob

# ── ANSI colors ───────────────────────────────────────────────────────────────
CYAN   = "\033[96m"
GREEN  = "\033[92m"
RED    = "\033[91m"
YELLOW = "\033[93m"
WHITE  = "\033[1;97m"   # bold bright white  → enabled
DIM    = "\033[2;37m"   # dim normal white   → disabled (clearly muted)
RESET  = "\033[0m"

# ── Paths ─────────────────────────────────────────────────────────────────────
REPO   = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MAIN   = os.path.join(REPO, "src", "wui-js", "main")
WUI_JS = os.path.join(MAIN, "wui.js")
DOC_EN = os.path.join(REPO, "docs", "README-en.md")


def get_lib_version():
    if not os.path.isfile(WUI_JS):
        return "?"
    for line in open(WUI_JS, encoding="utf-8"):
        m = re.search(r'const version\s*=\s*"([^"]+)"', line)
        if m:
            return m.group(1)
    return "?"


def get_doc_order():
    """Return component names in the order they appear in the class table."""
    if not os.path.isfile(DOC_EN):
        return []
    order, seen = [], set()
    for line in open(DOC_EN, encoding="utf-8"):
        m = re.match(r'\|\s*\[?(WUI(\w+))\]?[^|]*\|\s*`[0-9.]+`', line)
        if m:
            comp = m.group(2).lower()
            if comp not in seen:
                seen.add(comp)
                order.append(comp)
    return order


def get_comp_version(comp):
    comp_dir = os.path.join(MAIN, comp)
    for ext in ("js", "css"):
        files = [f for f in glob.glob(os.path.join(comp_dir, f"wui-{comp}-*.{ext}"))
                 if ".root." not in f]
        if files:
            m = re.search(rf"wui-{comp}-([0-9.]+)\.{ext}$", os.path.basename(files[0]))
            if m:
                return m.group(1)
    return None


def extract_vars(content):
    candidates = re.findall(r"--wui-[a-zA-Z0-9][a-zA-Z0-9_-]*[a-zA-Z0-9]", content)
    return set(v for v in candidates if v.count("-") >= 4)


def check_component(comp, summary=False):
    comp_dir = os.path.join(MAIN, comp)
    version = get_comp_version(comp)

    if not version:
        if not summary:
            print(f"\n{CYAN}{comp}{RESET}")
            print(f"  version: ?")
            print(f"  [{RED}error{RESET}] no versioned file found in src/wui-js/main/{comp}/")
        return False

    # Locate .root.css
    root_path = os.path.join(comp_dir, f"wui-{comp}-{version}.root.css")
    # Load .css and .js content (always needed)
    css_path = os.path.join(comp_dir, f"wui-{comp}-{version}.css")
    js_path  = os.path.join(comp_dir, f"wui-{comp}-{version}.js")
    css_vars = extract_vars(open(css_path, encoding="utf-8").read()) if os.path.isfile(css_path) else set()
    js_content = open(js_path, encoding="utf-8").read() if os.path.isfile(js_path) else ""
    js_vars = extract_vars(js_content)
    # Derive icon-src variables from static #icons = { "key": ... }
    in_icons = False
    for line in js_content.splitlines():
        if re.search(r'static\s+#icons\s*=\s*\{', line):
            in_icons = True
            continue
        if in_icons:
            if re.match(r'\s*\};?', line) and line.strip() in ('};', '}'):
                break
            m = re.match(r'\s*"([^"]+)"\s*:', line)
            if m:
                js_vars.add(f"--wui-{comp}-{m.group(1)}icon-src")

    def print_var(var, in_root, in_css, in_js, force_status=None):
        ok = (in_css or in_js) if force_status is None else force_status
        if summary and ok:
            return
        f_root = f"{WHITE}root{RESET}" if in_root else f"{DIM}root{RESET}"
        f_css  = f"{WHITE}css{RESET}"  if in_css  else f"{DIM}css{RESET}"
        f_js   = f"{WHITE}js{RESET}"   if in_js   else f"{DIM}js{RESET}"
        status = f"{GREEN}pass{RESET}" if ok else f"{RED}fail{RESET}"
        print(f"  [{f_root} {f_css} {f_js}] [{status}] {CYAN}{var}{RESET}")

    if not os.path.isfile(root_path):
        all_code_vars = sorted(css_vars | js_vars)
        if not all_code_vars:
            return False
        print(f"\n{CYAN}{comp}{RESET}")
        print(f"  version: {version}")
        print(f"  [{YELLOW}warning{RESET}] wui-{comp}-{version}.root.css not found. listing from .css/.js")
        for var in all_code_vars:
            print_var(var, False, var in css_vars, var in js_vars)
        return True

    root_var_set = set(extract_vars(open(root_path, encoding="utf-8").read()))
    root_vars = sorted(root_var_set)
    if not root_vars:
        return False

    root_fails  = [v for v in root_vars if not (v in css_vars or v in js_vars)]
    extra       = sorted((css_vars | js_vars) - root_var_set)
    own_missing = [v for v in extra if v.startswith(f"--wui-{comp}-")]
    ext_refs    = [v for v in extra if not v.startswith(f"--wui-{comp}-")]

    any_fail = bool(root_fails or own_missing)
    if summary and not any_fail:
        return True

    print(f"\n{CYAN}{comp}{RESET}")
    print(f"  version: {version}")

    # root.css vars vs code
    if not summary or root_fails:
        print(f"  root css vars:")
    for var in root_vars:
        print_var(var, True, var in css_vars, var in js_vars)

    # own vars in code NOT in root.css → always fail
    if own_missing or not summary:
        print(f"  untracked own vars:")
    for var in own_missing:
        print_var(var, False, var in css_vars, var in js_vars, force_status=False)

    # external component vars referenced in this component's code
    if ext_refs and not summary:
        print(f"  external vars:")
        for var in ext_refs:
            print_var(var, False, var in css_vars, var in js_vars, force_status=True)

    return True


HELP = """
css-root-check.py — WUI/JS CSS root.css Variables Check

Usage:
  python css-root-check.py [options] [component,...]

Arguments:
  component    Component name(s), comma or space separated.
               Use * or omit to check all components.

Options:
  -s, --summary  Show only [fail] results.
  -h, --help     Show this help message.

Examples:
  python css-root-check.py
  python css-root-check.py button
  python css-root-check.py -s
  python css-root-check.py -s button,modal
"""

def main():
    args = sys.argv[1:]
    if "-h" in args or "--help" in args:
        print(HELP)
        sys.exit(0)
    summary = "-s" in args or "--summary" in args
    args = [a for a in args if a not in ("-s", "--summary")]

    raw = " ".join(args).replace(",", " ").split()
    doc_order = get_doc_order()
    all_comps = [c for c in doc_order if os.path.isdir(os.path.join(MAIN, c))]

    if not raw or raw == ["*"]:
        selected = all_comps
    else:
        order_set = {c: i for i, c in enumerate(doc_order)}
        valid = [c for c in raw if os.path.isdir(os.path.join(MAIN, c))]
        invalid = [c for c in raw if not os.path.isdir(os.path.join(MAIN, c))]
        for c in invalid:
            print(f"Component not found: '{c}'")
        selected = sorted(valid, key=lambda c: order_set.get(c, 999))

    lib_ver = get_lib_version()
    print(f"\nWUI/JS - CSS root check{' [summary]' if summary else ''}")
    print(f"lib version: {lib_ver}")

    audited = 0
    for comp in selected:
        result = check_component(comp, summary=summary)
        if result is not False:
            audited += 1

    print(f"\n── {audited} component(s) checked ──\n")


if __name__ == "__main__":
    main()

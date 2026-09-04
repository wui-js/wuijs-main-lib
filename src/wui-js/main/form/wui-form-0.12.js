/*
 * @file wui-form-0.12.js
 * @class WUIForm
 * @version 0.12
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUIForm {

	static version = "0.12";
	static #defaults = {
		selector: ".wui-form",
		submit: true,
		onScrolling: null,
		onSubmit: null
	};
	static #icons = {
		"date-opener-open": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z'/></svg>",
		"date-opener-close": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z'/></svg>",
		"time-opener-open": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z'/></svg>",
		"time-opener-close": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z'/></svg>",
		"select-opener-open": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z'/></svg>",
		"select-opener-close": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z'/></svg>"
	};

	#properties = {};
	#htmlElement;
	#htmlElements = {
		form: null,
		header: null,
		body: null,
		footer: null
	};
	#colorScheme;
	#darkModeCleanup;

	constructor(properties = {}) {
		const defaults = structuredClone(WUIForm.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
		this.#colorScheme = null;
	}

	get selector() {
		return this.#properties.selector;
	}

	get submit() {
		return this.#properties.submit;
	}

	get onScrolling() {
		return this.#properties.onScrolling;
	}

	get onSubmit() {
		return this.#properties.onSubmit;
	}

	set selector(value) {
		if (typeof (value) === "string" && value !== "") {
			this.#properties.selector = value;
			this.#htmlElement = document.querySelector(value);
			const htmlElement = this.#htmlElement;
			this.#htmlElements.form = htmlElement.localName === "form" ? htmlElement : htmlElement.querySelector("form");
			this.#loadHtmlElements();
		}
	}

	set submit(value) {
		if (typeof (value) === "boolean") {
			this.#properties.submit = value;
		}
	}

	set onScrolling(value) {
		if (typeof (value) === "function" || value === null) {
			this.#properties.onScrolling = value;
		}
	}

	set onSubmit(value) {
		if (typeof (value) === "function" || value === null) {
			this.#properties.onSubmit = value;
		}
	}

	getElement() {
		return this.#htmlElement;
	}

	getForm() {
		return this.#htmlElements.form;
	}

	getFormData() {
		return new FormData(this.#htmlElements.form instanceof HTMLFormElement ? this.#htmlElements.form : null);
	}

	getHeader() {
		return this.#htmlElements.header;
	}

	getBody() {
		return this.#htmlElements.body;
	}

	getFooter() {
		return this.#htmlElements.footer;
	}

	#getNode(name, type, position = 0) {
		const root = this.#htmlElements.form || this.#htmlElement;
		const input = root.querySelectorAll(`[name="${name}"]`)[position];
		if (!input) return null;
		const field = input.closest(".field");
		if (!field) return null;
		switch (type) {
			case "field": return field;
			case "icon": return field.querySelector(":scope > .icon");
			case "righticon": const icons = field.querySelectorAll(":scope > .icon"); return icons?.[icons.length - 1] ?? null;
			case "label": return field.querySelector(":scope > label");
			case "input": return field.querySelector(":scope > input, :scope > select, :scope > textarea, :scope > div > input");
			case "data": return field.querySelector(":scope > data");
			default: return null;
		}
	}

	getField(name, position = 0) {
		return this.#getNode(name, "field", position);
	}

	getIcon(name, position = 0) {
		return this.#getNode(name, "icon", position);
	}

	getRightIcon(name, position = 0) {
		return this.#getNode(name, "righticon", position);
	}

	getLabel(name, position = 0) {
		return this.#getNode(name, "label", position);
	}

	getInput(name, position = 0) {
		const input = this.#htmlElements.form[name];
		if (name.match(/\[\]$/)) {
			return input instanceof RadioNodeList ? input[position] : position === 0 ? input : null;
		}
		return input;
	}

	getData(name, position = 0) {
		return this.#getNode(name, "data", position);
	}

	getText(name, position = 0) {
		return this.#getNode(name, "text", position);
	}

	getValue(name, position = 0) {
		const input = this.getInput(name, position);
		const data = this.getData(name, position);
		return input instanceof HTMLInputElement || input instanceof HTMLSelectElement || input instanceof HTMLTextAreaElement ? input.value : data instanceof HTMLDataElement ? (data.value || data.innerHTML) : "";
	}

	#getSrcIcon(input, name) {
		const element = input || this.#htmlElements.form || this.#htmlElement || document.documentElement;
		const src = getComputedStyle(element).getPropertyValue("--wui-form-" + name + "icon-src");
		return src !== "" && !src.match(/^(none|url\(\))$/) ? src : "url(\"data:image/svg+xml," + WUIForm.#icons[name] + "\")";
	}

	setType = (name, type, position = 0) => {
		const input = this.getInput(name, position);
		if (input instanceof HTMLInputElement) {
			input.type = type.toLowerCase();
		}
	}

	setValue = (name, value, position = 0) => {
		const label = this.getLabel(name, position);
		const input = this.getInput(name, position);
		const type = input instanceof HTMLElement && typeof (input.type) !== "undefined" ? input.type.toLowerCase() : "";
		if (label instanceof HTMLLabelElement && type !== "hidden") {
			if (value !== "" || type.match(/date|time/)) {
				label.classList.add("notempty");
			} else {
				label.classList.remove("notempty");
			}
		}
		if (input instanceof HTMLInputElement || input instanceof HTMLSelectElement || input instanceof HTMLTextAreaElement) {
			input.value = value;
		}
		return input;
	}

	setData(name, value, position = 0) {
		const label = this.getLabel(name, position);
		const data = this.getData(name, position);
		if (label instanceof HTMLLabelElement) {
			if (value !== "") {
				label.classList.add("notempty");
			} else {
				label.classList.remove("notempty");
			}
		}
		if (data instanceof HTMLDataElement) {
			data.value = value instanceof HTMLElement ? value.textContent : value;
			data.innerHTML = value;
		}
		return data;
	}

	setText(name, value, position = 0) {
		const text = this.getText(name, position);
		if (text instanceof HTMLElement) {
			text.innerHTML = value;
		}
		return text;
	}

	setEnabled = (name, value, position = 0) => {
		const icon = this.getIcon(name, position);
		const input = this.getInput(name, position);
		const data = this.getData(name, position);
		if (icon instanceof HTMLElement) {
			if (value) {
				icon.classList.remove("disabled");
			} else {
				icon.classList.add("disabled");
			}
		}
		if (input instanceof HTMLInputElement || input instanceof HTMLSelectElement || input instanceof HTMLTextAreaElement) {
			input.disabled = !value;
		} else if (data instanceof HTMLDataElement) {
			if (value) {
				data.classList.remove("disabled");
			} else {
				data.classList.add("disabled");
			}
		}
	}

	#loadHtmlElements() {
		this.#htmlElements.header = document.querySelector(this.selector + " > .header");
		this.#htmlElements.body = document.querySelector(this.selector + " > .body");
		this.#htmlElements.footer = document.querySelector(this.selector + " > .footer");
	}

	init() {
		const htmlElement = this.#htmlElement;
		const debounce = (fn) => {
			let frame;
			return (...params) => {
				if (frame) {
					cancelAnimationFrame(frame);
				}
				frame = requestAnimationFrame(() => {
					fn(...params);
				});
			}
		};
		this.#loadHtmlElements();
		const { form, body } = this.#htmlElements;
		if (form instanceof HTMLFormElement) {
			form.addEventListener("submit", event => {
				if (!this.submit) {
					event.preventDefault();
				}
				if (typeof (this.onSubmit) === "function") {
					this.onSubmit();
				}
			});
		}
		if (htmlElement instanceof HTMLElement && body instanceof HTMLElement) {
			htmlElement.dataset.scrollBody = 0;
			if (body.classList.contains("scroll")) {
				["scroll", "touchmove"].forEach(type => {
					body.addEventListener(type, debounce(() => {
						let top = body.scrollTop;
						if (top < 0) {
							top = 0;
						}
						htmlElement.dataset.scrollBody = top;
						if (typeof (this.onScrolling) === "function") {
							this.onScrolling(top);
						}
					}), { passive: true });
				});
			}
		}
		htmlElement.querySelectorAll(".field > label").forEach(label => {
			label.addEventListener("click", () => {
				const field = label.parentNode;
				const input = field.querySelector("input, select, textarea");
				if (input instanceof HTMLInputElement || input instanceof HTMLSelectElement || input instanceof HTMLTextAreaElement) {
					input.focus();
				}
			});
		});
		htmlElement.querySelectorAll("input, select, textarea, data").forEach(input => {
			const field = input.closest(".field");
			const label = field ? field.querySelector(":scope > label") : null;
			const tag = input.localName.toLowerCase();
			const type = typeof (input.type) !== "undefined" ? input.type.toLowerCase() : "";
			if (tag === "select" || type.match(/^(date|time)$/)) {
				if (!input.parentNode.classList.contains("wui-selectpicker") &&
					!input.parentNode.classList.contains("wui-datepicker") &&
					!input.parentNode.classList.contains("wui-timepicker")
				) {
					const opener = document.createElement("div");
					opener.className = "opener";
					opener.style.maskImage = this.#getSrcIcon(input, type.replace(/-(one|multiple)/, "") + "-opener-open");
					input.after(opener);
				}
				["mouseover", "mouseout", "focus", "blur"].forEach(eventName => {
					input.addEventListener(eventName, () => {
						if (label instanceof HTMLLabelElement) {
							if (input.value !== "" || type.match(/date|time/) || eventName.match(/mouseover|focus/)) {
								label.classList.add("notempty");
							} else {
								label.classList.remove("notempty");
							}
						}
						if (eventName === "focus") {
							const event = new MouseEvent("mousedown");
							input.dispatchEvent(event);
						}
					});
				});
			} else if (tag === "textarea" && field.classList.contains("autosize")) {
				const resize = () => {
					this.autosize(input.name);
				}
				input.addEventListener("change", resize);
				["cut", "paste", "drop", "keydown"].forEach(name => {
					input.addEventListener(name, () => {
						window.setTimeout(resize, 0);
					});
				});
				if (input.value !== "") {
					resize();
				}
			}
			if (label instanceof HTMLLabelElement) {
				if (tag === "data" || type.match(/^(date|time|range)$/)) {
					label.classList.add("fixed");
				}
				if (input.value !== "" || type.match(/date|time/)) {
					label.classList.add("notempty");
				}
				input.addEventListener("change", () => {
					if (input.value !== "" || type.match(/date|time/)) {
						label.classList.add("notempty");
					} else {
						label.classList.remove("notempty");
					}
				});
			}
		});
		this.#darkModeListener(() => {
			htmlElement.querySelectorAll("input, select").forEach(input => {
				const tag = input.localName.toLowerCase();
				const type = typeof (input.type) !== "undefined" ? input.type.toLowerCase() : "";
				if (tag === "select" || type.match(/^(date|time)$/)) {
					input.style.maskImage = this.#getSrcIcon(input, (type || tag) + "-opener-open");
				}
			});
		});
	}

	reset() {
		const htmlElement = this.#htmlElement;
		const { form } = this.#htmlElements;
		if (form instanceof HTMLFormElement) {
			form.reset();
		}
		const positions = new Map();
		htmlElement.querySelectorAll("input,select,textarea").forEach(input => {
			const position = positions.get(input.name) || 0;
			positions.set(input.name, position + 1);
			const field = input.parentNode.querySelector(".field") || input.parentNode.parentNode.querySelector(".field") || input.name !== "" ? this.getField(input.name, position) : null;
			const label = input.parentNode.querySelector("label") || input.parentNode.parentNode.querySelector("label") || input.name !== "" ? this.getLabel(input.name, position) : null;
			if (field instanceof HTMLElement) {
				field.classList.remove("invalid");
			}
			if (label instanceof HTMLLabelElement) {
				label.classList.remove("notempty");
			}
			input.value = "";
		});
	}

	focus(name, position = 0) {
		const input = this.getInput(name, position);
		if (input instanceof HTMLElement) {
			input.focus();
		}
	}

	blur(name, position = 0) {
		const input = this.getInput(name, position);
		if (input instanceof HTMLElement) {
			input.blur();
		}
	}

	closeKeyboard() {
		document.activeElement.blur();
	}

	change(name, position = 0) {
		const input = this.getInput(name, position);
		if (input instanceof HTMLElement) {
			const event = new Event("change");
			input.dispatchEvent(event);
		}
	}

	autosize(name, position = 0) {
		const input = this.getInput(name, position);
		if (input instanceof HTMLTextAreaElement) {
			input.style.height = "auto";
			input.style.height = input.scrollHeight + "px";
		}
	}

	#darkModeListener(callback) {
		const observer = new MutationObserver(() => {
			const colorScheme = getComputedStyle(document.documentElement).getPropertyValue("color-scheme").trim();
			if (this.#colorScheme !== colorScheme) {
				this.#colorScheme = colorScheme;
				callback();
			}
		});
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["style", "class"],
			subtree: false
		});
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		mediaQuery.addEventListener("change", callback);
		this.#darkModeCleanup = () => {
			observer.disconnect();
			mediaQuery.removeEventListener("change", callback);
		};
	}

	destroy() {
		const htmlElement = this.#htmlElement;
		if (typeof this.#darkModeCleanup === "function") {
			this.#darkModeCleanup();
			this.#darkModeCleanup = undefined;
		}
		if (htmlElement instanceof HTMLElement) {
			Object.entries(this.#htmlElements).forEach(([key, element]) => {
				if (element) {
					element.remove();
				}
				this.#htmlElements[key] = null;
			});
			htmlElement.innerHTML = "";
			htmlElement.remove();
		}
		Object.keys(this.#properties).forEach(name => {
			delete this.#properties[name];
		});
		this.#colorScheme = undefined;
	}
}

/*
HTML output:
<form name="form" class="wui-form (fill|line|border [curve]) [mobile]">
	<input type="hidden" name="hidden">
	<div class="header">Header</div>
	<div class="body [scroll|scroll-x|scroll-y]">
		<fieldset>
			<legend>Fieldset</legend>
			<div class="field icon-left">
				<div class="icon"></div>
				<label>Text</label>
				<input type="text" name="text">
			</div>
			<div class="field icon-left">
				<div class="icon"></div>
				<label>Select</label>
				<select name="select">
					<option value="value1">value 1</option>
					[...]
				</select>
			</div>
			<div class="field icon-left">
				<div class="icon"></div>
				<label>Date</label>
				<input type="date" name="date">
			</div>
			<div class="field icon-left">
				<div class="icon"></div>
				<label>Time</label>
				<input type="time" name="time">
			</div>
			<div class="field icon-left inline noborder">
				<div class="icon"></div>
				<label>Color</label>
				<input type="color" name="color">
			</div>
			<div class="field icon-left noborder">
				<div class="icon"></div>
				<label>Range</label>
				<input type="range" name="range">
			</div>
			<div class="field icon-left [autosize]">
				<div class="icon"></div>
				<label for="wuiTextarea">Text area</label>
				<textarea name="textarea [noresize|vresize|hresize]"></textarea>
			</div>
			<div class="field icon-left inline noborder">
				<div class="icon"></div>
				<label for="checkbox" class="pointer">Checkbox</label>
				<input id="checkbox" type="checkbox" name="checkbox" value="1">
			</div>
			<div class="field icon-left">
				<div class="icon"></div>
				<label>Data</label>
				<data class="name" value=""></data>
			</div>
			<div class="text name [disabled|center]">
				[<p></p>]
			</div>
			<div class="message [highlight|center]">
				[<p></p>]
			</div>
		</fieldset>
		<legend>WUI Inputs Fieldset</legend>
		<fieldset>
			<div class="field icon-left">
				<div class="icon"></div>
				<label>WUI Selectpicker</label>
				<div class="wui-selectpicker">
					<select name="wuiSelect">
						<option value="value1">value 1</option>
						[...]
					</select>
				</div>
			</div>
			<div class="field icon-left">
				<div class="icon"></div>
				<label>WUI Datepicker</label>
				<div class="wui-datepicker"><input type="date" name="wuiDate" value=""></div>
			</div>
			<div class="field icon-left">
				<div class="icon"></div>
				<label>WUI Timepicker</label>
				<div class="wui-timepicker"><input type="time" name="wuiTime" value=""></div>
			</div>
			<div class="field icon-left inline noborder">
				<div class="icon"></div>
				<label>WUI Colorpicker</label>
				<div class="wui-colorpicker"><input type="color" name="wuiColor" value=""></div>
			</div>
			<div class="field icon-left inline noborder">
				<div class="icon"></div>
				<label for="wuiSwitch">WUI Switch</label>
				<div class="wui-switch"><input id="wuiSwitch" type="checkbox" name="wuiSwitch" value="1"></div>
			</div>
		</fieldset>
	</div>
	<div class="footer">
		<button class="wui-button cancel">cancel</button>
		<button class="wui-button submit">submit</button>
	</div>
</form>
*/
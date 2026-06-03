/*
 * @file wui-selectpicker-0.10.js
 * @class WUISelectpicker
 * @version 0.10
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUISelectpicker {

	static version = "0.10";
	static #defaults = {
		selector: ".wui-selectpicker",
		lang: "en",
		options: [],
		value: "",
		texts: {},
		openDirection: "down",
		boxAlign: "center",
		required: true,
		hidden: false,
		autochange: true,
		multiple: false,
		separatorValue: ",",
		separatorText: ", ",
		filterable: true,
		viewicon: false,
		viewtext: true,
		enabled: true,
		onOpen: null,
		onChange: null,
		onClose: null
	};
	static #icons = {
		"opener-open": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z'/></svg>",
		"opener-close": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z'/></svg>",
		"box-option-check": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor'><path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z'/></svg>"
	};
	static #texts = {
		de: {
			empty: "leer",
			cancel: "stornieren",
			accept: "akzeptieren"
		},
		en: {
			empty: "empty",
			cancel: "cancel",
			accept: "accept"
		},
		es: {
			empty: "vacío",
			cancel: "cancelar",
			accept: "aceptar"
		}
	};
	static #active = null;

	#properties = {};
	#htmlElement;
	#htmlElements = {
		input: null,
		opener: null,
		inputIcon: null,
		inputText: null,
		overlay: null,
		box: null,
		options: null,
		footer: null,
		cancelButton: null,
		acceptButton: null
	};
	#targetValue;
	#cancelValue;
	#colorScheme;
	#darkModeCleanup;

	static _initClass() {
		document.addEventListener("keydown", event => {
			const active = WUISelectpicker.#active;
			const keys = {
				up: Boolean(event.key === "ArrowUp"),
				down: Boolean(event.key === "ArrowDown"),
				intro: Boolean(event.key === "Enter"),
				esc: Boolean(event.key === "Escape")
			};
			if (active !== null && active.enabled && (keys.up || keys.down || keys.intro || keys.esc)) {
				if (!active.isOpen()) {
					if (keys.down) {
						active.open();
					}
				} else {
					const activeOptions = active.getBox().querySelector(".options");
					const focusOption = activeOptions.querySelector(".option.focus");
					if (keys.up || keys.down) {
						const options = Array.from(activeOptions.querySelectorAll(".option")).filter(option => !option.classList.contains("hidden"));
						const focusIndex = options.indexOf(focusOption);
						const nextIndex =
							options.length === 0 ? (null
							) : keys.up && focusOption === null ? (options.length - 1
							) : keys.up && focusOption !== null ? (focusIndex - 1
							) : keys.down && focusOption === null ? (0
							) : keys.down && focusOption !== null ? (focusIndex + 1
							) : (null);
						const nextOption = nextIndex !== null ? options[nextIndex] : null;
						if (focusOption !== null) {
							focusOption.classList.remove("focus");
						}
						if (nextOption !== null) {
							activeOptions.scrollTop = nextOption.offsetTop - parseInt(activeOptions.clientHeight / 2);
							nextOption.classList.add("focus");
						}
					} else if (keys.intro) {
						if (focusOption !== null) {
							const value = focusOption.dataset.value;
							active.value = value;
							active.close();
						}
					} else if (keys.esc) {
						active.close();
					}
				}
			}
		});
	}

	constructor(properties = {}) {
		const defaults = structuredClone(WUISelectpicker.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
		this.#targetValue = null;
		this.#cancelValue = null;
		this.#colorScheme = null;
		this.#initHTML();
	}

	get selector() {
		return this.#properties.selector;
	}

	get lang() {
		return this.#properties.lang;
	}

	get options() {
		return this.#properties.options;
	}

	get value() {
		return this.#getValue();
	}

	get text() {
		return this.#getText();
	}

	get texts() {
		return this.#properties.texts;
	}

	get openDirection() {
		return this.#properties.openDirection;
	}

	get boxAlign() {
		return this.#properties.boxAlign;
	}

	get required() {
		return this.#properties.required;
	}

	get hidden() {
		return this.#properties.hidden;
	}

	get autochange() {
		return this.#properties.autochange;
	}

	get multiple() {
		return this.#properties.multiple;
	}

	get separatorValue() {
		return this.#properties.separatorValue;
	}

	get separatorText() {
		return this.#properties.separatorText;
	}

	get filterable() {
		return this.#properties.filterable;
	}

	get viewicon() {
		return this.#properties.viewicon;
	}

	get viewtext() {
		return this.#properties.viewtext;
	}

	get enabled() {
		return this.#properties.enabled;
	}

	get onOpen() {
		return this.#properties.onOpen;
	}

	get onChange() {
		return this.#properties.onChange;
	}

	get onClose() {
		return this.#properties.onClose;
	}

	set selector(value) {
		if (typeof (value) === "string" && value !== "") {
			this.#properties.selector = value;
		}
	}

	set lang(value) {
		if (typeof (value) === "string" && value.match(/^\w{2}$/)) {
			this.#properties.lang = value.toLowerCase();
		}
	}

	set options(value) {
		if (Array.isArray(value)) {
			this.#properties.options = value;
		}
	}

	set value(value) {
		if (typeof (value).toString().match(/string|number/) && (typeof (this.#properties.enabled) === "undefined" || this.#properties.enabled)) {
			value = value.toString().trim();
			this.#properties.value = value;
			if (this.#properties.enabled) {
				this.#setValue(value);
				this.#refreshView();
				this.#prepare();
			}
		}
	}

	set texts(value) {
		if (typeof (value) === "object" && !Array.isArray(value) && value !== null) {
			Object.keys(WUISelectpicker.#texts.en).forEach(text => {
				if (!(text in value)) {
					value[text] = "";
				}
			});
			this.#properties.texts = value;
		}
	}

	set openDirection(value) {
		if (typeof (value) === "string" && value.match(/^(up|down)$/i)) {
			this.#properties.openDirection = value.toLowerCase();
		}
	}

	set boxAlign(value) {
		if (typeof (value) === "string" && value.match(/^(left|center|right)$/i)) {
			this.#properties.boxAlign = value.toLowerCase();
		}
	}

	set required(value) {
		if (typeof (value) === "boolean") {
			this.#properties.required = value;
		}
	}

	set hidden(value) {
		if (typeof (value) === "boolean") {
			this.#properties.hidden = value;
		}
	}

	set autochange(value) {
		if (typeof (value) === "boolean") {
			this.#properties.autochange = value;
		}
	}

	set multiple(value) {
		if (typeof (value) === "boolean") {
			const { input } = this.#htmlElements;
			this.#properties.multiple = value;
			if (input instanceof HTMLSelectElement) {
				if (value) {
					input.setAttribute("multiple", "true");
				} else {
					input.removeAttribute("multiple");
				}
			}
		}
	}

	set separatorValue(value) {
		if (typeof (value) === "string") {
			this.#properties.separatorValue = value;
		}
	}

	set separatorText(value) {
		if (typeof (value) === "string") {
			this.#properties.separatorText = value;
		}
	}

	set filterable(value) {
		if (typeof (value) === "boolean") {
			const { inputText } = this.#htmlElements;
			this.#properties.filterable = value;
			if (inputText instanceof HTMLInputElement) {
				inputText.readOnly = !value;
				inputText.style.cursor = value ? "default" : "pointer";
				if (value) {
					inputText.removeAttribute("readonly");
				} else {
					inputText.setAttribute("readonly", "true");
				}
			}
		}
	}

	set viewicon(value) {
		if (typeof (value) === "boolean") {
			this.#properties.viewicon = value && !this.#properties.multiple && !this.#properties.filterable;
			this.#refreshView();
		}
	}

	set viewtext(value) {
		if (typeof (value) === "boolean") {
			this.#properties.viewtext = !this.#properties.multiple && !this.#properties.filterable ? value : true;
			this.#refreshView();
		}
	}

	set enabled(value) {
		if (typeof (value) === "boolean") {
			const { input, inputText } = this.#htmlElements;
			this.#properties.enabled = value;
			if (input instanceof HTMLInputElement) {
				input.disabled = !value;
			}
			if (inputText instanceof HTMLInputElement) {
				inputText.disabled = !value;
				if (value) {
					inputText.removeAttribute("disabled");
				} else {
					inputText.setAttribute("disabled", "true");
				}
			}
			this.#setStyle();
		}
	}

	set onOpen(value) {
		if (typeof (value) === "function" || value == null) {
			this.#properties.onOpen = value;
		}
	}

	set onChange(value) {
		if (typeof (value) === "function" || value == null) {
			this.#properties.onChange = value;
		}
	}

	set onClose(value) {
		if (typeof (value) === "function" || value == null) {
			this.#properties.onClose = value;
		}
	}

	#loadHTML() {
		const sel = this.selector;
		this.#htmlElement = document.querySelector(sel);
		this.#htmlElements = {
			input: document.querySelector(sel + " > select"),
			opener: document.querySelector(sel + " > .opener"),
			inputIcon: document.querySelector(sel + " > .icon"),
			inputText: document.querySelector(sel + " > input[type='text']"),
			overlay: document.querySelector(sel + " > .overlay"),
			box: document.querySelector(sel + " > .box"),
			options: document.querySelector(sel + " > .box > .options"),
			footer: document.querySelector(sel + " > .box > .footer"),
			cancelButton: document.querySelector(sel + " > .box > .footer > .cancel"),
			acceptButton: document.querySelector(sel + " > .box > .footer > .accept")
		};
		if (this.#htmlElements.input) {
			this.#htmlElements.input.querySelectorAll("option").forEach(option => {
				if (!this.options.some(opt => opt.value === option.value)) {
					const opt = {
						text: option.text,
						value: option.value,
						selected: option.selected
					};
					if (option.dataset && option.dataset.iconClass && option.dataset.iconClass !== "") {
						opt.iconClass = option.dataset.iconClass;
					}
					if (option.className.trim() !== "") {
						opt.textClass = option.className;
					}
					if (option.dataset) {
						opt.textData = {};
						Object.keys(option.dataset).forEach(key => {
							opt.textData[key] = option.dataset[key];	
						});
					}
					this.options.push(opt);
				}
			});
		}
	}

	#buildHTML() {
		if (this.#htmlElement instanceof HTMLDivElement) {
			if (!this.#htmlElements.input) {
				this.#htmlElements.input = document.createElement("select");
				this.#htmlElement.appendChild(this.#htmlElements.input);
			}
			if (!this.hidden) {
				if (!this.#htmlElements.opener) {
					this.#htmlElements.opener = document.createElement("div");
					this.#htmlElements.opener.className = "opener";
					this.#htmlElement.appendChild(this.#htmlElements.opener);
				}
				if (!this.#htmlElements.inputIcon) {
					this.#htmlElements.inputIcon = document.createElement("div");
					this.#htmlElements.inputIcon.className = "icon";
					this.#htmlElement.appendChild(this.#htmlElements.inputIcon);
				}
				if (!this.#htmlElements.inputText) {
					this.#htmlElements.inputText = document.createElement("input");
					this.#htmlElements.inputText.type = "text";
					this.#htmlElement.appendChild(this.#htmlElements.inputText);
				}
			}
			if (!this.#htmlElements.overlay) {
				this.#htmlElements.overlay = document.createElement("div");
				this.#htmlElements.overlay.className = "overlay";
				this.#htmlElement.appendChild(this.#htmlElements.overlay);
			}
			if (!this.#htmlElements.box) {
				this.#htmlElements.box = document.createElement("div");
				this.#htmlElements.box.className = "box";
				this.#htmlElement.appendChild(this.#htmlElements.box);
			}
			if (!this.#htmlElements.options) {
				this.#htmlElements.options = document.createElement("div");
				this.#htmlElements.options.className = "options";
				this.#htmlElements.box.appendChild(this.#htmlElements.options);
			}
			if (!this.#htmlElements.footer) {
				this.#htmlElements.footer = document.createElement("div");
				this.#htmlElements.footer.className = "footer";
				this.#htmlElements.box.appendChild(this.#htmlElements.footer);
			}
			if (!this.#htmlElements.cancelButton) {
				this.#htmlElements.cancelButton = document.createElement("button");
				this.#htmlElements.cancelButton.className = "cancel";
				this.#htmlElements.footer.appendChild(this.#htmlElements.cancelButton);
			}
			if (!this.#htmlElements.acceptButton) {
				this.#htmlElements.acceptButton = document.createElement("button");
				this.#htmlElements.acceptButton.className = "accept";
				this.#htmlElements.footer.appendChild(this.#htmlElements.acceptButton);
			}
		}
	}

	#initHTML() {
		this.#loadHTML();
		this.#buildHTML();
	}

	getElement() {
		return this.#htmlElement;
	}

	getBox() {
		return this.#htmlElements.box;
	}

	getViewElements() {
		return [this.#htmlElements.inputText];
	}

	getInput() {
		return this.#htmlElements.input;
	}

	#getSelectedOptions() {
		return Array.from(this.#htmlElements.input.options).filter(opt => opt.selected);
	}

	#getValue() {
		return this.#getSelectedOptions().map(opt => opt.value).join(this.separatorValue) || this.#properties.value || "";
	}

	#getText() {
		return this.#getSelectedOptions().map(opt => opt.text).join(this.separatorText) || "";
	}

	#getSRCIcon(name) {
		const element = this.#htmlElement || document.documentElement;
		const src = getComputedStyle(element).getPropertyValue("--wui-selectpicker-" + name + "icon-src");
		return src !== "" && !src.match(/^(none|url\(\))$/) ? src : "url(\"data:image/svg+xml," + WUISelectpicker.#icons[name] + "\")";
	}

	#setValue(value) {
		const valores = value.split(this.separatorValue);
		const { input } = this.#htmlElements;
		if (!this.multiple) {
			this.#properties.value = value;
		}
		if (input instanceof HTMLSelectElement) {
			Array.from(input.options).forEach(opt => {
				const selected = valores.includes(opt.value);
				opt.selected = selected;
				if (selected) {
					opt.setAttribute("selected", "true");
				} else {
					opt.removeAttribute("selected");
				}
			});
			input.dispatchEvent(new Event("change"));
		}
	}

	setOptions(options = this.options) {
		this.clearOptions();
		this.options = options;
		this.options.forEach(opt => {
			this.addOption(opt);
		});
		this.#refreshView();
		this.close();
	}

	#setStyle() {
		const htmlElement = this.#htmlElement;
		const { input } = this.#htmlElements;
		if (htmlElement instanceof HTMLDivElement && input instanceof HTMLSelectElement) {
			const disabled = input.disabled;
			if (disabled) {
				htmlElement.classList.add("disabled");
			} else {
				htmlElement.classList.remove("disabled");
			}
		}
	}

	init() {
		const htmlElement = this.#htmlElement;
		const { input, opener, inputText, overlay, box, options, cancelButton, acceptButton } = this.#htmlElements;
		if (htmlElement instanceof HTMLDivElement && input instanceof HTMLSelectElement) {
			if (this.hidden) {
				htmlElement.classList.add("hidden");
			} else {
				opener.style.maskImage = this.#getSRCIcon("opener-open");
				inputText.name = input.name + "Text";
				inputText.readOnly = !this.filterable;
				inputText.style.cursor = this.filterable ? "default" : "pointer";
				inputText.addEventListener("focus", () => {
					if (this.enabled) {
						setTimeout(() => {
							WUISelectpicker.#active = this;
						}, 10)
					}
				});
				inputText.addEventListener("blur", () => {
					if (this.enabled) {
						WUISelectpicker.#active = null;
					}
				});
				inputText.addEventListener("click", () => {
					if (this.enabled) {
						const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
						if (!mobile && this.filterable) {
							if (!this.isOpen()) {
								this.open();
							}
						} else {
							this.toggle();
						}
					}
				});
				inputText.addEventListener("keyup", (event) => {
					const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
					if (!mobile && this.filterable && !event.key.match(/^(ArrowUp|ArrowDown|Enter|Escape)$/)) {
						const prepare = str => str.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ñ/g, "n").replace(/\W+/g, "");
						const key = inputText.value;
						const regexp = new RegExp(prepare(key));
						options.querySelectorAll(".option").forEach(option => {
							const value = option.dataset.value;
							const text = input.querySelector("option[value='" + value + "']").text.trim().toLowerCase();
							if (regexp.test(prepare(text))) {
								option.classList.remove("hidden");
							} else {
								option.classList.add("hidden");
							}
						});
						if (!this.isOpen()) {
							this.open();
						}
					}
				});
			}
			if (this.multiple) {
				input.setAttribute("multiple", "true");
			} else {
				input.removeAttribute("multiple");
			}
			if (!this.enabled) {
				htmlElement.classList.add("disabled");
				input.setAttribute("disabled", "true");
			} else {
				input.removeAttribute("disabled");
			}
			htmlElement.addEventListener("click", event => {
				if (this.enabled && (event.target.classList.contains("wui-selectpicker") || (this.viewicon && event.target.classList.contains("icon")) || event.target.classList.contains("opener"))) {
					this.toggle();
				}
			});
			if (input.getAttribute("style") !== null) {
				input.removeAttributeNode(input.getAttributeNode("style"));
			}
			this.#properties.value = this.#properties.value || "";
			input.addEventListener("change", () => {
				const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
				if ((!(mobile || this.hidden) || this.autochange) && typeof (this.onChange) === "function") {
					this.onChange(this.value);
				}
			});
			options.innerHTML = "";
			Array.from(input.options).forEach(opt => {
				this.#addHTMLOption(opt);
			});
			overlay.classList.add("hidden");
			box.classList.add(this.boxAlign, this.openDirection, "hidden");
			cancelButton.addEventListener("click", () => { this.cancel(); });
			acceptButton.addEventListener("click", () => { this.accept(); });
			this.#prepare();
			this.setOptions();
			this.#setStyle();
			this.#darkModeListener(() => {
				this.#setStyle();
			});
			if (this.#properties.value !== "") {
				this.value = this.#properties.value;
			}
		}
	}

	#prepare(saveCancel = false) {
		const texts = WUISelectpicker.#texts;
		const lang = this.lang;
		const { cancelButton, acceptButton } = this.#htmlElements;
		this.#targetValue = this.#properties.value || "";
		if (saveCancel) {
			this.#cancelValue = this.#targetValue;
		}
		if (cancelButton instanceof HTMLButtonElement && acceptButton instanceof HTMLButtonElement) {
			cancelButton.textContent = this.texts.cancel !== "" ? this.texts.cancel : lang in texts ? texts[lang].cancel : "";
			acceptButton.textContent = this.texts.accept !== "" ? this.texts.accept : lang in texts ? texts[lang].accept : "";
		}
		this.#refreshView();
	}

	#refreshView() {
		const htmlElement = this.#htmlElement;
		if (htmlElement instanceof HTMLDivElement && !this.hidden) {
			const { input, inputIcon, inputText } = this.#htmlElements;
			if (inputText instanceof HTMLInputElement) {
				const hideText = !this.filterable && !this.viewtext && !this.multiple;
				inputText.value = hideText ? "" : this.#getText();
				inputText.style.visibility = hideText ? "hidden" : "";
			}
			if (input instanceof HTMLSelectElement && inputIcon instanceof HTMLDivElement) {
				const active = !this.multiple && !this.filterable && this.viewicon;
				if (active) {
					const selected = input instanceof HTMLSelectElement ? Array.from(input.options).find(opt => opt.selected) : null;
					const iconClass = selected?.dataset.iconClass || "";
					inputIcon.className = "icon" + (iconClass ? " " + iconClass : "");
					htmlElement.classList.toggle("viewicon", Boolean(iconClass));
				} else {
					inputIcon.className = "icon";
					htmlElement.classList.remove("viewicon");
				}
			}
		}
	}

	addOption(opt) {
		this.#addSelectOption(opt);
		this.#addHTMLOption(opt);
	}

	#addSelectOption(opt) {
		const { input } = this.#htmlElements;
		if (input instanceof HTMLSelectElement) {
			const selected = typeof (opt.selected) === "boolean" ? opt.selected : false;
			const option = new Option(opt.text || "", opt.value || "", selected);
			if (typeof (opt.iconClass) === "string" && opt.iconClass !== "") {
				option.dataset.iconClass = opt.iconClass;
			}
			if (typeof (opt.textClass) === "string" && opt.textClass !== "") {
				option.className = opt.textClass;
			}
			if (typeof (opt.textData) === "object" && opt.textData !== null) {
				Object.keys(opt.textData).forEach(key => {
					option.dataset[key] = opt.textData[key];	
				});
			}
			input.appendChild(option);
		}
	}

	#addHTMLOption(opt) {
		const { options } = this.#htmlElements;
		if (options instanceof HTMLElement) {
			const option = document.createElement("div");
			const icon = document.createElement("div");
			const text = document.createElement("div");
			const selected = Boolean(opt.selected);
			const iconClass = typeof (opt.iconClass) === "string" ? opt.iconClass : (opt.dataset?.iconClass || "");
			const textClass = typeof (opt.textClass) === "string" ? opt.textClass : (opt.dataset?.textClass || "");
			const customIcon = Boolean(iconClass !== "");
			icon.className = "icon " + (customIcon ? iconClass + " visible" : "check");
			if (!customIcon) {
				icon.style.maskImage = this.#getSRCIcon("box-option-check", selected ? "focus" : "out");
			}
			text.className = "text" + (opt.value === "" ? " empty" : this._selecteableText ? " selecteable" : "") + (textClass ? " " + textClass : "");
			text.innerHTML = opt.value === "" ? (this.texts.empty !== "" ? this.texts.empty : this.lang in WUISelectpicker.#texts ? WUISelectpicker.#texts[this.lang].empty : "") : opt.text;
			Object.keys(opt.textData || []).forEach(key => {
				text.dataset[key] = opt.textData[key];
			});
			option.className = "option" + (selected ? " selected" : "");
			option.dataset.value = opt.value;
			Object.keys(opt.dataset || []).forEach(key => {
				option.dataset[key] = opt.dataset[key];
			});
			option.appendChild(icon);
			option.appendChild(text);
			option.addEventListener("mouseover", () => { option.classList.add("focus"); });
			option.addEventListener("mouseout", () => { option.classList.remove("focus"); });
			option.addEventListener("click", () => {
				const isCurrentlySelected = option.classList.contains("selected");
				if (this.required && isCurrentlySelected) {
					if (!this.multiple) return;
					const selectedCount = options.querySelectorAll(".option.selected").length;
					if (selectedCount <= 1) return;
				}
				const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
				const selected = !isCurrentlySelected;
				const targetValue = option.dataset.value || "";
				const values = [];
				let value = "";
				option.classList.toggle("selected");
				options.scrollTop = option.offsetTop - parseInt(options.clientHeight / 2);
				options.querySelectorAll(".option").forEach(option => {
					if (typeof (option.dataset.value) !== "undefined") {
						option.classList.remove("focus");
						if (!this.multiple && option.dataset.value !== targetValue) {
							option.classList.remove("selected");
						}
						if (this.multiple && option.classList.contains("selected")) {
							values.push(option.dataset.value);
						}
					}
				});
				value = this.multiple ? values.join(this.separatorValue) : selected ? targetValue : "";
				option.classList.add("focus");
				this.#targetValue = value;
				this.value = value;
				if (!this.multiple && !(mobile || this.hidden)) {
					this.close();
				}
			});
			options.appendChild(option);
		}
	}

	#loadBox() {
		const { input, options } = this.#htmlElements;
		Array.from(input.options).forEach((opt, i) => {
			const option = options.querySelector(".option:nth-child(" + (i + 1) + ")");
			if (option instanceof HTMLDivElement && typeof (option.dataset.value) !== "undefined") {
				if (opt.selected) {
					options.scrollTop = option.offsetTop - parseInt((options.clientHeight - option.clientHeight) / 2);
					option.classList.add("selected");
				} else {
					option.classList.remove("selected", "focus");
				}
			}
		});
	}

	clearOptions() {
		const { input, options } = this.#htmlElements;
		this.options = [];
		if (input instanceof HTMLSelectElement) {
			input.innerHTML = "";
			options.innerHTML = "";
		}
	}

	open() {
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		const { input, opener, overlay, box } = this.#htmlElements;
		if ((this.hidden || opener instanceof HTMLDivElement) && overlay instanceof HTMLDivElement && box instanceof HTMLDivElement) {
			if (input.options.length === 0) return;
			if (!this.hidden) {
				opener.style.maskImage = this.#getSRCIcon("opener-close");
			}
			overlay.style.zIndex = 101;
			overlay.classList.remove("hidden");
			box.className = `box ${this.boxAlign} ${this.openDirection}`;
			box.style.marginBottom = !mobile && !this.hidden && this.openDirection === "up" ? this.#htmlElement.clientHeight + "px" : "auto";
			this.#prepare(true);
			this.#loadBox();
			if (typeof (this.onOpen) === "function") {
				this.onOpen(this.value);
			}
			WUISelectpicker.#active = this;
		}
	}

	close() {
		const { opener, overlay, box, options } = this.#htmlElements;
		if ((this.hidden || opener instanceof HTMLDivElement) && overlay instanceof HTMLDivElement && box instanceof HTMLDivElement) {
			if (!this.hidden) {
				opener.style.maskImage = this.#getSRCIcon("opener-open");
			}
			overlay.classList.add("hidden");
			overlay.style.zIndex = 100;
			box.classList.add("hidden");
			options.querySelectorAll(".option").forEach(option => {
				option.classList.remove("hidden");
			});
			if (typeof (this.onClose) === "function") {
				this.onClose(this.value);
			}
		}
	}

	toggle() {
		const { box } = this.#htmlElements;
		if (box instanceof HTMLDivElement) {
			if (box.classList.contains("hidden")) {
				this.open();
			} else {
				this.close();
			}
		}
	}

	cancel() {
		this.value = this.#cancelValue;
		this.close();
	}

	accept() {
		if (typeof (this.onChange) === "function") {
			this.onChange(this.value);
		}
		this.close();
	}

	isOpen() {
		const { box } = this.#htmlElements;
		return Boolean(box instanceof HTMLDivElement ? !box.classList.contains("hidden") : false);
	}

	isEmpty() {
		const { inputText } = this.#htmlElements;
		return Boolean(inputText instanceof HTMLInputElement ? this.#properties.value === "" || inputText.value === "" : false);
	}

	isValid() {
		const { input, inputText } = this.#htmlElements;
		return Boolean(input instanceof HTMLSelectElement ? (Array.from(input.options).filter(opt => opt.text === inputText.value).length > 0) : false);
	}

	#darkModeListener(callback) {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
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
		mediaQuery.addEventListener("change", callback);
		this.#darkModeCleanup = () => {
			observer.disconnect();
			mediaQuery.removeEventListener("change", callback);
		};
	}

	destroy() {
		const htmlElement = this.#htmlElement;
		this.close();
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
		this.#targetValue = undefined;
		this.#cancelValue = undefined;
		this.#colorScheme = undefined;
	}
}

WUISelectpicker._initClass();

/*
HTML output:
<div class="wui-selector">
	<select name="(name)">
		<option value="value1">value 1</option>
		[...]
	</select>
	<div class="opener"></div>
	<input type="text" value="(name)Text" value="">
	<div class="overlay"></div>
	<div class="box">
		<div class="options">
			<div class="option" data-value="value1">value 1</div>
			[...]
		</div>
		<div class="footer">
			<button class="cancel"></button>
			<button class="accept"></button>
		</div>
	</div>
</div>
*/
/*
 * @file wui-timepicker-0.10.js
 * @class WUITimepicker
 * @version 0.10
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUITimepicker {

	static version = "0.10";
	static #defaults = {
		selector: ".wui-timepicker",
		lang: "en",
		value: "",
		min: "00:00",
		max: "23:59",
		texts: {},
		openDirection: "down",
		boxAlign: "left",
		hidden: false,
		enabled: true,
		onOpen: null,
		onChange: null,
		onClose: null
	};
	static #icons = {
		"opener-open": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z'/></svg>",
		"opener-close": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z'/></svg>"
	};
	static #texts = {
		de: {
			cancel: "stornieren",
			accept: "akzeptieren"
		},
		en: {
			cancel: "cancel",
			accept: "accept"
		},
		es: {
			cancel: "cancelar",
			accept: "aceptar"
		}
	};

	#properties = {};
	#htmlElement;
	#htmlElements = {
		input: null,
		opener: null,
		inputs: null,
		inputHours: null,
		inputSeparator: null,
		inputMinutes: null,
		overlay: null,
		box: null,
		lists: null,
		listHours: null,
		listMinutes: null,
		footer: null,
		cancelButton: null,
		acceptButton: null
	};
	#nowValue;
	#nowHours;
	#nowMinutes;
	#targetValue;
	#targetTime;
	#cancelValue;
	#cancelTime;
	#colorScheme;
	#darkModeCleanup;

	constructor(properties = {}) {
		const defaults = structuredClone(WUITimepicker.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
		this.#colorScheme = null;
		this.#initHTML();
	}

	get selector() {
		return this.#properties.selector;
	}

	get lang() {
		return this.#properties.lang;
	}

	get value() {
		return (this.#htmlElements.input instanceof HTMLInputElement ? this.#htmlElements.input.value : this.#properties.value);
	}

	get min() {
		return (this.#htmlElements.input instanceof HTMLInputElement ? this.#htmlElements.input.min : this.#properties.min);
	}

	get max() {
		return (this.#htmlElements.input instanceof HTMLInputElement ? this.#htmlElements.input.max : this.#properties.max);
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

	get hidden() {
		return this.#properties.hidden;
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

	set value(value) {
		if (typeof (value) === "string" && value.match(/^(\d{2}:\d{2})?$/) && (typeof (this.#properties.enabled) === "undefined" || this.#properties.enabled)) {
			this.#setValue(value);
			this.#prepare();
		}
	}

	set min(value) {
		if (typeof (value) === "string" && value.match(/^(\d{2}:\d{2})?$/)) {
			this.#properties.min = value;
			if (this.#htmlElements.input instanceof HTMLInputElement) {
				this.#htmlElements.input.min = value;
			}
		}
	}

	set max(value) {
		if (typeof (value) === "string" && value.match(/^(\d{2}:\d{2})?$/)) {
			this.#properties.max = value;
			if (this.#htmlElements.input instanceof HTMLInputElement) {
				this.#htmlElements.input.max = value;
			}
		}
	}

	set texts(value) {
		if (typeof (value) === "object" && !Array.isArray(value) && value !== null) {
			Object.keys(WUITimepicker.#texts.en).forEach(text => {
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

	set hidden(value) {
		if (typeof (value) === "boolean") {
			this.#properties.hidden = value;
		}
	}

	set enabled(value) {
		if (typeof (value) === "boolean") {
			const { input, inputHours, inputMinutes } = this.#htmlElements;
			this.#properties.enabled = value;
			if (input instanceof HTMLInputElement) {
				input.disabled = !value;
			}
			if (inputHours instanceof HTMLInputElement && inputMinutes instanceof HTMLInputElement) {
				inputHours.disabled = !value;
				inputMinutes.disabled = !value;
				if (value) {
					inputHours.removeAttribute("disabled");
					inputMinutes.removeAttribute("disabled");
				} else {
					inputHours.setAttribute("disabled", "true");
					inputMinutes.setAttribute("disabled", "true");
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
		const sel = this.#properties.selector;
		this.#htmlElement = document.querySelector(sel);
		this.#htmlElements = {
			input: document.querySelector(sel + " > input[type='time']"),
			opener: document.querySelector(sel + " > .opener"),
			inputs: document.querySelector(sel + " > .inputs"),
			inputHours: document.querySelector(sel + " > .inputs > .hours"),
			inputSeparator: document.querySelector(sel + " > .inputs > span"),
			inputMinutes: document.querySelector(sel + " > .inputs > .minutes"),
			overlay: document.querySelector(sel + " > .overlay"),
			box: document.querySelector(sel + " > .box"),
			lists: document.querySelector(sel + " > .box > .lists"),
			listHours: document.querySelector(sel + " > .box > .lists > .hours"),
			listMinutes: document.querySelector(sel + " > .box > .lists > .minutes"),
			footer: document.querySelector(sel + " > .box > .footer"),
			cancelButton: document.querySelector(sel + " > .box > .footer > .cancel"),
			acceptButton: document.querySelector(sel + " > .box > .footer > .accept")
		};
	}

	#buildHTML() {
		if (this.#htmlElement instanceof HTMLDivElement) {
			if (!this.#htmlElements.input) {
				this.#htmlElements.input = document.createElement("input");
				this.#htmlElements.input.type = "time";
				this.#htmlElement.appendChild(this.#htmlElements.input);
			}
			if (!this.hidden) {
				if (!this.#htmlElements.opener) {
					this.#htmlElements.opener = document.createElement("div");
					this.#htmlElements.opener.className = "opener";
					this.#htmlElement.appendChild(this.#htmlElements.opener);
				}
				if (!this.#htmlElements.inputs) {
					this.#htmlElements.inputs = document.createElement("div");
					this.#htmlElements.inputs.className = "inputs";
					this.#htmlElement.appendChild(this.#htmlElements.inputs);
				}
				if (!this.#htmlElements.inputHours) {
					this.#htmlElements.inputHours = document.createElement("input");
					this.#htmlElements.inputHours.className = "hours";
					this.#htmlElements.inputs.appendChild(this.#htmlElements.inputHours);
				}
				if (!this.#htmlElements.inputSeparator) {
					this.#htmlElements.inputSeparator = document.createElement("span");
					this.#htmlElements.inputSeparator.textContent = ":";
					this.#htmlElements.inputs.appendChild(this.#htmlElements.inputSeparator);
				}
				if (!this.#htmlElements.inputMinutes) {
					this.#htmlElements.inputMinutes = document.createElement("input");
					this.#htmlElements.inputMinutes.className = "minutes";
					this.#htmlElements.inputs.appendChild(this.#htmlElements.inputMinutes);
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
			if (!this.#htmlElements.lists) {
				this.#htmlElements.lists = document.createElement("div");
				this.#htmlElements.lists.className = "lists";
				this.#htmlElements.box.appendChild(this.#htmlElements.lists);
			}
			if (!this.#htmlElements.listHours) {
				this.#htmlElements.listHours = document.createElement("ul");
				this.#htmlElements.listHours.className = "hours";
				this.#htmlElements.lists.appendChild(this.#htmlElements.listHours);
			}
			if (!this.#htmlElements.listMinutes) {
				this.#htmlElements.listMinutes = document.createElement("ul");
				this.#htmlElements.listMinutes.className = "minutes";
				this.#htmlElements.lists.appendChild(this.#htmlElements.listMinutes);
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

	getViewElements() {
		return [this.#htmlElements.inputHours, this.#htmlElements.inputMinutes];
	}

	getInput() {
		return this.#htmlElements.input;
	}

	#getSRCIcon(name) {
		const element = this.#htmlElement || document.documentElement;
		const src = getComputedStyle(element).getPropertyValue("--wui-timepicker-" + name + "icon-src");
		return src !== "" && !src.match(/^(none|url\(\))$/) ? src : "url(\"data:image/svg+xml," + WUITimepicker.#icons[name] + "\")";
	}

	#setValue(value) {
		const { input } = this.#htmlElements;
		this.#properties.value = value;
		if (input instanceof HTMLInputElement) {
			input.value = value;
			input.dispatchEvent(new Event("change"));
		}
	}

	#loadValue() {
		const { input, inputHours, inputMinutes } = this.#htmlElements;
		if (input instanceof HTMLInputElement && inputHours instanceof HTMLInputElement && inputMinutes instanceof HTMLInputElement) {
			const value = input.value;
			const hours = inputHours.value;
			const minutes = inputMinutes.value;
			this.#setValue(hours !== "" && minutes !== "" ? ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) : "");
			if (input.value !== value && typeof (this.onChange) === "function") {
				this.onChange(this.value);
			}
		}
	}

	#setStyle() {
		const htmlElement = this.#htmlElement;
		const { input } = this.#htmlElements;
		if (htmlElement instanceof HTMLDivElement && input instanceof HTMLInputElement) {
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
		const { input, opener, overlay, box, inputHours, inputMinutes, listHours, listMinutes, cancelButton, acceptButton } = this.#htmlElements;
		const partInputs = { Hours: inputHours, Minutes: inputMinutes };
		const partLists = { Hours: listHours, Minutes: listMinutes };
		if (htmlElement instanceof HTMLDivElement && input instanceof HTMLInputElement) {
			if (this.hidden) {
				htmlElement.classList.add("hidden");
			} else {
				opener.style.maskImage = this.#getSRCIcon("opener-open");
				["hours", "minutes"].forEach(part => {
					const name = part.charAt(0).toUpperCase() + part.slice(1);
					const partInput = partInputs[name];
					partInput.type = "text";
					partInput.name = input.name + name;
					partInput.placeholder = part === "hours" ? "hh" : "mm";
					partInput.maxLength = 2;
					partInput.addEventListener("click", () => { this.toggle(); });
					partInput.addEventListener("keyup", event => {
						const value = event.target.value;
						const partName = event.target.className;
						const min = 0;
						const maxVal = partName === "hours" ? 23 : 59;
						event.target.value = parseInt(value) > maxVal ? maxVal : parseInt(value) < min ? min : value;
						this.#loadValue();
					});
				});
			}
			if (!this.enabled) {
				input.setAttribute("disabled", "true");
			} else {
				input.removeAttribute("disabled");
			}
			htmlElement.addEventListener("click", event => {
				if (this.enabled && (event.target.classList.contains("wui-timepicker") || event.target.classList.contains("opener"))) {
					this.toggle();
				}
			});
			["min", "max", "style"].forEach(name => {
				if (input.hasAttribute(name)) {
					if (name.match(/(min|max)/)) {
						this[name] = input[name];
					}
					if (input.getAttribute(name) !== null) {
						input.removeAttributeNode(input.getAttributeNode(name));
					}
				}
			});
			["hours", "minutes"].forEach(part => {
				const name = part.charAt(0).toUpperCase() + part.slice(1);
				const partList = partLists[name];
				const max = part === "hours" ? 23 : 59;
				partList.innerHTML = "";
				for (let i = 0; i <= max; i++) {
					const option = document.createElement("li");
					option.dataset.value = i;
					option.textContent = i;
					option.addEventListener("click", () => {
						const selected = !Boolean(option.classList.contains("selected"));
						const targetValue =
							part === "hours" ? ("0" + i).slice(-2) + ":" + ("0" + inputMinutes.value).slice(-2) :
								part === "minutes" ? ("0" + inputHours.value).slice(-2) + ":" + ("0" + i).slice(-2) :
									"";
						const value = selected ? targetValue : "";
						const time = selected ? new Date("1970-01-01T" + targetValue + ":00") : null;
						partList.scrollTop = option.offsetTop - parseInt(partList.clientHeight / 2);
						partList.querySelectorAll("li").forEach(li => {
							if (typeof (li.dataset.value) !== "undefined" && li.dataset.value !== String(i)) {
								li.classList.remove("selected");
							}
						});
						option.classList.toggle("selected");
						this.#targetValue = value;
						this.#targetTime = time;
						this.#setValue(value);
						this.#refreshView();
					});
					partList.appendChild(option);
				}
			});
			overlay.classList.add("hidden");
			box.classList.add(this.boxAlign, this.openDirection, "hidden");
			cancelButton.addEventListener("click", () => { this.cancel(); });
			acceptButton.addEventListener("click", () => { this.accept(); });
			this.#prepare();
			this.#setStyle();
			this.#darkModeListener(() => {
				this.#setStyle();
			});
			if (this.#properties.value !== "") {
				this.value = this.#properties.value;
			}
		}
	}

	#prepare() {
		const { cancelButton, acceptButton } = this.#htmlElements;
		const texts = WUITimepicker.#texts;
		const lang = this.lang;
		const now = (() => {
			const date = new Date();
			const offset = date.getTimezoneOffset();
			return new Date(date.getTime() - offset * 60 * 1000).toISOString().split("T")[1].slice(0, 5);
		})();
		this.#nowValue = now;
		this.#nowHours = parseInt(this.#nowValue.split(":")[0]);
		this.#nowMinutes = parseInt(this.#nowValue.split(":")[1]);
		this.#targetValue = this.#htmlElements.input instanceof HTMLInputElement ? this.#htmlElements.input.value : now;
		this.#targetTime = new Date("1970-01-01T" + this.#targetValue + ":00");
		this.#cancelValue = this.#targetValue;
		this.#cancelTime = new Date("1970-01-01T" + this.#targetValue + ":00");
		if (cancelButton instanceof HTMLButtonElement && acceptButton instanceof HTMLButtonElement) {
			const instanceTexts = this.texts;
			cancelButton.textContent = instanceTexts.cancel !== "" ? instanceTexts.cancel : lang in texts ? texts[lang].cancel : "";
			acceptButton.textContent = instanceTexts.accept !== "" ? instanceTexts.accept : lang in texts ? texts[lang].accept : "";
		}
		this.#refreshView();
	}

	#refreshView() {
		const { inputHours, inputMinutes } = this.#htmlElements;
		if (inputHours instanceof HTMLInputElement && inputMinutes instanceof HTMLInputElement) {
			const time = this.#targetTime;
			inputHours.value = time instanceof Date ? ("0" + time.getHours()).slice(-2) : "";
			inputMinutes.value = time instanceof Date ? ("0" + time.getMinutes()).slice(-2) : "";
		}
	}

	#loadBox() {
		const hours = this.#targetTime.getHours();
		const minutes = this.#targetTime.getMinutes();
		["hours", "minutes"].forEach(part => {
			const name = part.charAt(0).toUpperCase() + part.slice(1);
			const list = this.#htmlElements["list" + name];
			const value = part === "hours" ? hours : minutes;
			const nowValue = part === "hours" ? this.#nowHours : this.#nowMinutes;
			if (list instanceof HTMLUListElement) {
				list.querySelectorAll("li").forEach((li, i) => {
					if (i === nowValue) {
						li.classList.add("now");
					} else {
						li.classList.remove("now");
					}
					if (i === value) {
						list.scrollTop = li.offsetTop - parseInt(list.clientHeight / 2);
						li.classList.add("selected");
					} else {
						li.classList.remove("selected");
					}
				});
			}
		});
	}

	open() {
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		const { opener, overlay, box } = this.#htmlElements;
		if ((this.hidden || opener instanceof HTMLDivElement) && overlay instanceof HTMLDivElement && box instanceof HTMLDivElement) {
			if (!this.hidden) {
				opener.style.maskImage = this.#getSRCIcon("opener-close");
			}
			overlay.style.zIndex = 101;
			overlay.classList.remove("hidden");
			box.className = `box ${this.boxAlign} ${this.openDirection}`;
			box.style.marginBottom = !mobile && this.openDirection === "up" ? this.#htmlElement.clientHeight + "px" : "auto";
			this.#prepare();
			this.#loadBox();
			if (typeof (this.onOpen) === "function") {
				this.onOpen(this.value);
			}
		}
	}

	close() {
		const { opener, overlay, box } = this.#htmlElements;
		if ((this.hidden || opener instanceof HTMLDivElement) && overlay instanceof HTMLDivElement && box instanceof HTMLDivElement) {
			if (!this.hidden) {
				opener.style.maskImage = this.#getSRCIcon("opener-open");
			}
			overlay.classList.add("hidden");
			overlay.style.zIndex = 100;
			box.classList.add("hidden");
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
		this.#targetTime = this.#cancelTime;
		this.#setValue(this.#cancelValue);
		this.#refreshView();
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
		const { input, inputHours, inputMinutes } = this.#htmlElements;
		return Boolean(input instanceof HTMLInputElement && inputHours instanceof HTMLInputElement && inputMinutes instanceof HTMLInputElement ? (input.value === "" || inputHours.value === "" || inputMinutes.value === "") : false);
	}

	isValid() {
		const { input } = this.#htmlElements;
		return Boolean(input instanceof HTMLInputElement ? input.value.match(/^(\d{2}:\d{2})?$/) : false);
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
		this.close();
		if (typeof this.#darkModeCleanup === "function") {
			this.#darkModeCleanup();
			this.#darkModeCleanup = undefined;
		}
		const htmlElement = this.#htmlElement;
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
		this.#nowValue = undefined;
		this.#nowHours = undefined;
		this.#nowMinutes = undefined;
		this.#targetValue = undefined;
		this.#targetTime = undefined;
		this.#cancelValue = undefined;
		this.#cancelTime = undefined;
		this.#colorScheme = undefined;
	}
}

/*
HTML output:
<div class="wui-timepicker">
	<input type="time" name="(name)" value="">
	<div class="opener"></div>
	<div class="inputs">
		<input type="text" name="(name))Hours" class="hours">
		<span></span>
		<input type="text" name="(name)Minutes" class="minutes">
	</div>
	<div class="overlay[ hidden]"></div>
	<div class="box[ hidden]">
		<div class="select">
			<ul class="hours">
				<li></li>
				[...]
			</ul>
			<ul class="minutes">
				<li></li>
				[...]
			</ul>
		</div>
		<div class="footer">
			<button class="cancel"></button>
			<button class="accept"></button>
		</div>
	</div>
</div>
*/

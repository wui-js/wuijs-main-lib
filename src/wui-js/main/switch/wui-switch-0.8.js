/*
 * @file wui-switch-0.8.js
 * @class WUISwitch
 * @version 0.8
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUISwitch {

	static version = "0.8";
	static #defaults = {
		selector: ".wui-switch",
		value: "1",
		activated: false,
		enabled: true,
		onChange: null
	};

	#properties = {};
	#htmlElement;
	#htmlElements = {
		input: null
	};
	#drag;
	#dragInitX;
	#dragDirection;

	constructor(properties = {}) {
		const defaults = structuredClone(WUISwitch.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
		this.#initHTML();
	}

	get selector() {
		return this.#properties.selector;
	}

	get value() {
		return (this.#htmlElements.input instanceof HTMLInputElement ? this.#htmlElements.input.value : this.#properties.value);
	}

	get activated() {
		return (this.#htmlElements.input instanceof HTMLInputElement ? this.#htmlElements.input.checked : this.#properties.activated);
	}

	get enabled() {
		return this.#properties.enabled;
	}

	get onChange() {
		return this.#properties.onChange;
	}

	set selector(value) {
		if (typeof (value) === "string" && value !== "") {
			this.#properties.selector = value;
		}
	}

	set value(value) {
		if (typeof (value).toString().match(/string|number/) && (typeof (this.#properties.enabled) === "undefined" || this.#properties.enabled)) {
			this.#properties.value = value;
			const { input } = this.#htmlElements;
			if (input instanceof HTMLInputElement) {
				input.value = value;
			}
		}
	}

	set activated(value) {
		if (typeof (value) === "boolean" && (typeof (this.#properties.enabled) === "undefined" || this.#properties.enabled)) {
			const { input } = this.#htmlElements;
			this.#properties.activated = value;
			if (input instanceof HTMLInputElement) {
				input.checked = value;
				if (value) {
					input.setAttribute("checked", "true");
				} else {
					input.removeAttribute("checked");
				}
				this.#setStyle();
			}
		}
	}

	set enabled(value) {
		if (typeof (value) === "boolean") {
			const { input } = this.#htmlElements;
			this.#properties.enabled = value;
			if (input instanceof HTMLInputElement) {
				input.disabled = !value;
				if (value) {
					input.removeAttribute("disabled");
				} else {
					input.setAttribute("disabled", "true");
				}
			}
			this.#setStyle();
		}
	}

	set onChange(value) {
		if (typeof (value) === "function" || value == null) {
			this.#properties.onChange = value;
		}
	}

	#loadHTML() {
		const sel = this.#properties.selector;
		this.#htmlElement = document.querySelector(sel);
		this.#htmlElements = {
			input: document.querySelector(sel + " > input[type='checkbox']")
		};
	}

	#buildHTML() {
		if (this.#htmlElement instanceof HTMLDivElement) {
			if (!this.#htmlElements.input) {
				this.#htmlElements.input = document.createElement("input");
				this.#htmlElements.input.type = "checkbox";
				this.#htmlElement.appendChild(this.#htmlElements.input);
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
		return [this.#htmlElements.input];
	}

	getInput() {
		return this.#htmlElements.input;
	}

	#setStyle() {
		const htmlElement = this.#htmlElement;
		const { input } = this.#htmlElements;
		if (htmlElement instanceof HTMLDivElement && input instanceof HTMLInputElement) {
			const activated = input.checked;
			const disabled = input.disabled;
			if (activated) {
				htmlElement.classList.add("activated");
			} else {
				htmlElement.classList.remove("activated");
			}
			if (disabled) {
				htmlElement.classList.add("disabled");
			} else {
				htmlElement.classList.remove("disabled");
			}
		}
	}

	init() {
		const htmlElement = this.#htmlElement;
		const { input } = this.#htmlElements;
		this.#drag = false;
		this.#dragInitX = null;
		this.#dragDirection = null;
		if (htmlElement instanceof HTMLDivElement && input instanceof HTMLInputElement) {
			if (!this.enabled) {
				input.setAttribute("disabled", "true");
			} else {
				input.removeAttribute("disabled");
			}
			["touchstart", "mousedown"].forEach(type => {
				htmlElement.addEventListener(type, event => {
					if (!this.#drag) {
						const initX = (event.type === "touchstart" ? event.touches[0].clientX : event.clientX || event.pageX) - event.target.offsetParent.offsetLeft;
						this.#drag = Boolean(type === "touchstart" || event.buttons === 1);
						this.#dragInitX = initX;
					}
				});
			});
			["touchmove", "mousemove"].forEach(type => {
				htmlElement.addEventListener(type, event => {
					if (this.#drag) {
						const initX = parseFloat(this.#dragInitX);
						const moveX = (event.type === "touchmove" ? event.touches[0].clientX : event.clientX || event.pageX) - event.target.offsetParent.offsetLeft;
						const diffX = moveX - initX;
						this.#dragDirection = diffX > 10 ? "right" : diffX < -10 ? "left" : null;
					}
				});
			});
			["touchend", "mouseup"].forEach(type => {
				document.addEventListener(type, () => {
					if (this.#drag) {
						this.#drag = false;
						this.#dragInitX = null;
						if (this.#dragDirection !== null) {
							const event = new Event("change");
							this.activated = this.#dragDirection === "left" ? false : this.#dragDirection === "right" ? true : false;
							input.dispatchEvent(event);
							setTimeout(() => {
								this.#dragDirection = null;
							}, 400);
						}
					}
				});
			});
			htmlElement.addEventListener("click", event => {
				if (event.target.classList.contains("wui-switch")) {
					setTimeout(() => {
						const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
						if (!mobile && this.#dragDirection === null) {
							const event = new Event("change");
							this.activated = !this.activated;
							input.dispatchEvent(event);
						}
					}, 10);
				}
			});
			input.addEventListener("change", () => {
				this.#setStyle();
				if (typeof (this.onChange) === "function") {
					this.onChange(this.value, this.activated);
				}
			});
			this.#setStyle();
		}
	}

	toggle() {
		const { input } = this.#htmlElements;
		if (input instanceof HTMLInputElement) {
			this.activated = !input.checked;
		}
	}

	destroy() {
		const htmlElement = this.#htmlElement;
		if (htmlElement instanceof HTMLDivElement) {
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
		this.#drag = undefined;
		this.#dragInitX = undefined;
		this.#dragDirection = undefined;
	}
}

/*
HTML output:
<div class="wui-switch">
	<input type="checkbox" value="1">
</div>
*/

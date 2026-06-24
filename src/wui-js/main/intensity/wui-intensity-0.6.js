/*
 * @file wui-intensity-0.6.js
 * @class WUIIntensity
 * @version 0.6
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUIIntensity {

	static version = "0.6";
	static #defaults = {
		selector: ".wui-intensity",
		value: 0,
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
	#dragDiffX;

	constructor(properties = {}) {
		const defaults = structuredClone(WUIIntensity.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
		this.#drag = false;
		this.#dragInitX = null;
		this.#dragDiffX = 0;
		this.#initHTML();
	}

	get selector() {
		return this.#properties.selector;
	}

	get value() {
		const { input } = this.#htmlElements;
		return (input instanceof HTMLInputElement ? input.value : this.#properties.value);
	}

	get enabled() {
		return this.#properties.enabled;
	}

	get onChange() {
		return this.#properties.onChange;
	}

	set selector(value) {
		if (typeof value === "string" && value !== "") {
			this.#properties.selector = value;
		}
	}

	set value(value) {
		if ((typeof value === "string" || typeof value === "number") && value.toString().match(/^(0|1|2|3|none|low|half|high)$/i) && (this.#properties.enabled === undefined || this.#properties.enabled)) {
			const htmlElement = this.#htmlElement;
			const { input } = this.#htmlElements;
			switch (value.toString().toLowerCase()) {
				case "none": value = 0; break;
				case "low": value = 1; break;
				case "half": value = 2; break;
				case "high": value = 3; break;
				default: value = parseInt(value); break;
			}
			this.#properties.value = value;
			if (htmlElement instanceof HTMLDivElement && input instanceof HTMLInputElement) {
				let intensity = "";
				switch (value) {
					case 0: intensity = "none"; break;
					case 1: intensity = "low"; break;
					case 2: intensity = "half"; break;
					case 3: intensity = "high"; break;
				}
				htmlElement.dataset.value = intensity;
				input.value = value;
			}
		}
	}

	set enabled(value) {
		if (typeof value === "boolean") {
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
		if (typeof value === "function" || value == null) {
			this.#properties.onChange = value;
		}
	}

	#loadHTML() {
		const sel = this.#properties.selector;
		this.#htmlElement = document.querySelector(sel);
		this.#htmlElements = {
			input: document.querySelector(sel + " > input[type='range']")
		};
	}

	#buildHTML() {
		const htmlElement = this.#htmlElement;
		if (htmlElement instanceof HTMLDivElement) {
			if (!this.#htmlElements.input) {
				const input = document.createElement("input");
				input.type = "range";
				htmlElement.appendChild(input);
				this.#htmlElements.input = input;
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
		const { input } = this.#htmlElements;
		if (htmlElement instanceof HTMLDivElement && input instanceof HTMLInputElement) {
			input.min = 0;
			input.max = 3;
			input.step = 1;
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
						this.#dragDiffX = moveX - initX;
					}
				});
			});
			["touchend", "mouseup"].forEach(type => {
				document.addEventListener(type, () => {
					if (this.#drag) {
						this.#drag = false;
						this.#dragInitX = null;
						if (Math.abs(this.#dragDiffX) > 10) {
							const event = new Event("input");
							const iniValue = parseInt(input.value);
							let endValue = iniValue + parseInt(this.#dragDiffX / 40);
							if (endValue < 0) {
								endValue = 0;
							} else if (endValue > 3) {
								endValue = 3;
							}
							this.value = endValue;
							input.dispatchEvent(event);
							setTimeout(() => {
								this.#dragDiffX = 0;
							}, 400);
						}
					}
				});
			});
			input.addEventListener("input", event => {
				const value = parseInt(event.target.value);
				let intensity = "";
				switch (value) {
					case 0: intensity = "none"; break;
					case 1: intensity = "low"; break;
					case 2: intensity = "half"; break;
					case 3: intensity = "high"; break;
				}
				htmlElement.dataset.value = intensity;
				if (typeof this.onChange === "function") {
					this.onChange(value, intensity);
				}
			});
			this.#setStyle();
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
		this.#dragDiffX = undefined;
	}
}

/*
HTML output:
<div class="wui-intensity">
	<input type="range" value="0" min="0" max="3" step="1">
</div>
*/

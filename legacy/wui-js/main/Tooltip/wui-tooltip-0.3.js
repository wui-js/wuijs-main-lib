/*
 * @file wui-tooltip-0.3.js
 * @class WUITooltip
 * @version 0.3
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUITooltip {

	static version = "0.3";
	static #defaults = {
		selector: ".wui-tooltip-target"
	};
	static #selectors = [
		".wui-tooltip",
		".wui-tooltip-top",
		".wui-tooltip-left",
		".wui-tooltip-right",
		".wui-tooltip-bottom"
	].join(",");

	#properties = {};
	#handlers = [];
	#htmlElements = [];

	constructor(properties) {
		const defaults = structuredClone(WUITooltip.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
	}

	get selector() {
		return this.#properties.selector;
	}

	set selector(value) {
		if (typeof (value) == "string" && value != "") {
			this.#properties.selector = value;
			this.#htmlElements = document.querySelectorAll(value);
		}
	}

	getElements() {
		return this.#htmlElements;
	}

	init() {
		this.#handlers = [];
		this.#htmlElements = document.querySelectorAll(this.#properties.selector);
		this.#htmlElements.forEach(target => {
			const handler = () => {
				target.querySelectorAll(WUITooltip.#selectors).forEach(tooltip => {
					tooltip.classList.toggle("opened");
				});
			};
			["mouseover", "mouseout"].forEach(type => {
				target.addEventListener(type, handler);
			});
			this.#handlers.push({ target, handler });
		});
	}

	lock() {
		this.#htmlElements.forEach(target => {
			target.querySelectorAll(WUITooltip.#selectors).forEach(tooltip => {
				tooltip.classList.add("locked");
			});
		});
	}

	unlock() {
		this.#htmlElements.forEach(target => {
			target.querySelectorAll(WUITooltip.#selectors).forEach(tooltip => {
				tooltip.classList.remove("locked");
			});
		});
	}

	destroy() {
		if (this.#handlers) {
			this.#handlers.forEach(({ target, handler }) => {
				target.removeEventListener("mouseover", handler);
				target.removeEventListener("mouseout", handler);
			});
			this.#handlers = undefined;
		}
		this.#htmlElements = undefined;
	}
}

/*
HTML code:
<div class="wui-tooltip-target">
	<div class="wui-tooltip (top|left|right|bottom)"></div>
</div>
<div class="wui-tooltip-target">
	<div class="wui-tooltip-(top|left|right|bottom)"></div>
</div>
*/
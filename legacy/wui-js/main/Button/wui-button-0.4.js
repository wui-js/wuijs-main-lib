/*
 * @file wui-button-0.4.js
 * @class WUIButton
 * @version 0.4
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUIButton {

	static version = "0.4";
	static #defaults = {
		selector: ".wui-button",
		text: "",
		textClass: null,
		textData: null,
		iconClass: null,
		iconImage: null,
		submit: false,
		warning: false,
		flat: false,
		selectable: false,
		locked: false,
		enabled: true,
		onClick: null,
		onDblClick: null
	};

	#properties = {};
	#htmlElement;
	#htmlBuilt = false;

	constructor(properties = {}) {
		const defaults = structuredClone(WUIButton.#defaults);
		const syncedFromElement = ["submit", "warning", "flat"];
		Object.entries(defaults).forEach(([name, value]) => {
			if (name == "text" && this.#htmlBuilt) return;
			if (syncedFromElement.includes(name) && !(name in properties) && this.#properties[name] === true) return;
			this[name] = name in properties ? properties[name] : value;
		});
	}

	get selector() {
		return this.#properties.selector;
	}

	get text() {
		return this.#properties.text;
	}

	get textClass() {
		return this.#properties.textClass;
	}

	get textData() {
		return this.#properties.textData;
	}

	get iconClass() {
		return this.#properties.iconClass;
	}

	get iconImage() {
		return this.#properties.iconImage;
	}

	get submit() {
		return this.#properties.submit;
	}

	get warning() {
		return this.#properties.warning;
	}

	get flat() {
		return this.#properties.flat;
	}

	get selectable() {
		return this.#properties.selectable;
	}

	get locked() {
		return this.#properties.locked;
	}

	get enabled() {
		return this.#properties.enabled;
	}

	get onClick() {
		return this.#properties.onClick;
	}

	get onDblClick() {
		return this.#properties.onDblClick;
	}

	set selector(value) {
		if (typeof (value) == "string" && value != "") {
			this.#properties.selector = value;
			this.#htmlElement = document.querySelector(value);
			if (this.#htmlElement instanceof HTMLButtonElement) {
				if (this.#htmlElement.hasChildNodes()) this.#htmlBuilt = true;
				if (this.#htmlElement.classList.contains("submit")) this.#properties.submit = true;
				if (this.#htmlElement.classList.contains("warning")) this.#properties.warning = true;
				if (this.#htmlElement.classList.contains("flat")) this.#properties.flat = true;
			}
		}
	}

	set text(value) {
		if (typeof (value) == "string") {
			this.#properties.text = value;
			this.#buildHTML();
		}
	}

	set textClass(value) {
		if (typeof (value) == "string" || value === null) {
			this.#properties.textClass = value;
		}
	}

	set textData(value) {
		if (Array.isArray(value) || value === null) {
			this.#properties.textData = value;
		}
	}

	set iconClass(value) {
		if (typeof (value) == "string" || value === null) {
			this.#properties.iconClass = value;
		}
	}

	set iconImage(value) {
		if (typeof (value) == "string" || value === null) {
			this.#properties.iconImage = value;
		}
	}

	set submit(value) {
		if (typeof (value) == "boolean") {
			this.#properties.submit = value;
		}
	}

	set warning(value) {
		if (typeof (value) == "boolean") {
			this.#properties.warning = value;
		}
	}

	set flat(value) {
		if (typeof (value) == "boolean") {
			this.#properties.flat = value;
		}
	}

	set selectable(value) {
		if (typeof (value) == "boolean") {
			this.#properties.selectable = value;
		}
	}

	set locked(value) {
		if (typeof (value) == "boolean") {
			this.#properties.locked = value;
		}
	}

	set enabled(value) {
		if (typeof (value) == "boolean") {
			this.#properties.enabled = value;
			if (this.#htmlElement instanceof HTMLButtonElement) {
				this.#htmlElement.disabled = !value;
				if (value) {
					this.#htmlElement.removeAttribute("disabled");
				} else {
					this.#htmlElement.setAttribute("disabled", "true");
				}
				this.#setStyle();
			}
		}
	}

	set onClick(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onClick = value;
		}
	}

	set onDblClick(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onDblClick = value;
		}
	}

	getElement() {
		return this.#htmlElement;
	}

	#buildHTML() {
		if (!(this.#htmlElement instanceof HTMLButtonElement)) return;
		let html = "";
		if (this.#properties.iconClass != null) {
			html += `<div class="${this.#properties.iconClass}"></div>`;
		} else if (this.#properties.iconImage != null) {
			html += `<img src="${this.#properties.iconImage}">`;
		}
		if (this.#properties.textClass != null) {
			let dataAttrs = "";
			if (Array.isArray(this.#properties.textData)) {
				this.#properties.textData.forEach(([key, value]) => {
					dataAttrs += ` data-${key}="${value}"`;
				});
			}
			html += `<span class="${this.#properties.textClass}"${dataAttrs}></span>`;
		} else {
			html += this.#properties.text;
		}
		this.#htmlElement.innerHTML = html;
	}

	#setStyle() {
		if (this.#htmlElement instanceof HTMLButtonElement) {
			if (!this.#properties.submit) {
				this.#htmlElement.classList.remove("submit");
			} else if (!this.#properties.warning) {
				this.#htmlElement.classList.add("submit");
			}
			if (this.#properties.warning) {
				this.#htmlElement.classList.add("warning");
			} else {
				this.#htmlElement.classList.remove("warning");
			}
			if (this.#properties.flat) {
				this.#htmlElement.classList.add("flat");
			} else {
				this.#htmlElement.classList.remove("flat");
			}
			if (this.#htmlElement.disabled) {
				this.#htmlElement.classList.add("disabled");
			} else {
				this.#htmlElement.classList.remove("disabled");
			}
		}
	}

	init() {
		if (this.#htmlElement instanceof HTMLButtonElement) {
			if (this.#htmlBuilt && !this.#properties.textClass && !this.#properties.iconClass && !this.#properties.iconImage) {
				this.#properties.text = this.#htmlElement.innerHTML;
			}
			this.#buildHTML();
			if (this.#properties.submit) {
				this.#htmlElement.type = "submit";
			} else {
				this.#htmlElement.type = "button";
			}
			this.#htmlElement.addEventListener("click", () => {
				this.#setStyle();
				if (this.#properties.selectable && this.#properties.enabled) {
					this.#htmlElement.classList.toggle("selected");
				}
				if (!this.#properties.locked && this.#properties.enabled && typeof (this.#properties.onClick) == "function") {
					this.#properties.onClick();
				}
			});
			this.#htmlElement.addEventListener("dblclick", () => {
				this.#setStyle();
				if (!this.#properties.locked && this.#properties.enabled && typeof (this.#properties.onDblClick) == "function") {
					this.#properties.onDblClick();
				}
			});
			this.#setStyle();
		}
	}

	focus() {
		if (this.#htmlElement instanceof HTMLButtonElement) {
			this.#htmlElement.focus();
		}
	}

	select() {
		if (this.#htmlElement instanceof HTMLButtonElement && this.#properties.selectable && this.#properties.enabled) {
			this.#htmlElement.classList.add("selected");
		}
	}

	unselect() {
		if (this.#htmlElement instanceof HTMLButtonElement && this.#properties.selectable && this.#properties.enabled) {
			this.#htmlElement.classList.remove("selected");
		}
	}

	isSelected() {
		if (this.#htmlElement instanceof HTMLButtonElement && this.#properties.selectable && this.#properties.enabled) {
			return this.#htmlElement.classList.contains("selected");
		}
		return false;
	}
}

/*
HTML output:

Default:
<button class="wui-button [submit|warning] [flat] [selectable] [locked] [enabled]">text</button>

With textClass:
<button class="wui-button">
  <span class="{textClass}" data-{key1}="{value1}" ...></span>
</button>

With iconClass + textClass:
<button class="wui-button">
  <div class="{iconClass}"></div>
  <span class="{textClass}" data-{key1}="{value1}" ...></span>
</button>

With iconImage + textClass:
<button class="wui-button">
  <img src="{iconImage}">
  <span class="{textClass}" data-{key1}="{value1}" ...></span>
</button>
*/

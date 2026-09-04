/*
 * @file wui-button-0.14.js
 * @class WUIButton
 * @version 0.14
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUIButton {

	static version = "0.14";
	static #defaults = {
		selector: ".wui-button",
		iconClass: null,
		iconImage: null,
		text: "",
		textClass: null,
		textData: null,
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
	#htmlElements = {
		iconClassBox: null,
		iconImgageBox: null,
		textBox: null
	};

	constructor(properties = {}) {
		const defaults = structuredClone(WUIButton.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
		this.#initHtml();
	}

	get selector() {
		return this.#properties.selector;
	}

	get iconClass() {
		return this.#properties.iconClass;
	}

	get iconImage() {
		return this.#properties.iconImage;
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
		if (typeof value === "string" && value !== "") {
			this.#properties.selector = value;
		}
	}

	set iconClass(value) {
		if (typeof value === "string" || value === null) {
			this.#properties.iconClass = value;
		}
	}

	set iconImage(value) {
		if (typeof value === "string" || value === null) {
			this.#properties.iconImage = value;
		}
	}

	set text(value) {
		if (typeof value === "string") {
			this.#properties.text = value;
		}
	}

	set textClass(value) {
		if (typeof value === "string" || value === null) {
			this.#properties.textClass = value;
		}
	}

	set textData(value) {
		if ((typeof value === "object" && !Array.isArray(value)) || value === null) {
			this.#properties.textData = value;
		}
	}

	set submit(value) {
		if (typeof value === "boolean") {
			this.#properties.submit = value;
		}
	}

	set warning(value) {
		if (typeof value === "boolean") {
			this.#properties.warning = value;
		}
	}

	set flat(value) {
		if (typeof value === "boolean") {
			this.#properties.flat = value;
		}
	}

	set selectable(value) {
		if (typeof value === "boolean") {
			this.#properties.selectable = value;
		}
	}

	set locked(value) {
		if (typeof value === "boolean") {
			this.#properties.locked = value;
		}
	}

	set enabled(value) {
		if (typeof value === "boolean") {
			const htmlElement = this.#htmlElement;
			this.#properties.enabled = value;
			if (htmlElement instanceof HTMLButtonElement) {
				htmlElement.disabled = !value;
				if (value) {
					htmlElement.removeAttribute("disabled");
				} else {
					htmlElement.setAttribute("disabled", "true");
				}
			}
		}
	}

	set onClick(value) {
		if (typeof value === "function" || value == null) {
			this.#properties.onClick = value;
		}
	}

	set onDblClick(value) {
		if (typeof value === "function" || value == null) {
			this.#properties.onDblClick = value;
		}
	}

	#loadHtml() {
		const sel = this.selector;
		this.#htmlElement = document.querySelector(sel);
		this.#htmlElements = {
			iconClassBox: document.querySelector(sel + " > div"),
			iconImgageBox: document.querySelector(sel + " > img"),
			textBox: document.querySelector(sel + " > span")
		};
		if (this.#htmlElement instanceof HTMLButtonElement) {
			const htmlElement = this.#htmlElement;
			const { iconClassBox, iconImgageBox, textBox } = this.#htmlElements;
			if (iconClassBox) {
				this.iconClass = iconClassBox.className;
			}
			if (iconImgageBox) {
				this.iconImage = iconImgageBox.src;
			}
			if (textBox) {
				const span = textBox;
				this.text = span.innerHTML;
				if (span.className.trim() !== "") {
					this.textClass = span.className;
				}
				if (span.dataset) {
					this.textData = {};
					Object.keys(span.dataset).forEach(key => {
						this.textData[key] = span.dataset[key];	
					});
				}
			} else {
				this.text = htmlElement.innerHTML;
			}
			if (htmlElement.classList.contains("submit")) {
				this.submit = true;
			}
			if (htmlElement.classList.contains("warning")) {
				this.warning = true;
			}
			if (htmlElement.classList.contains("flat")) {
				this.flat = true;
			}
		}
	}

	#buildHtml() {
		const htmlElement = this.#htmlElement;
		if (htmlElement instanceof HTMLButtonElement) {
			if (this.iconClass !== null) {
				if (!this.#htmlElements.iconClassBox) {
					this.#htmlElements.iconClassBox = document.createElement("div");
					htmlElement.append(this.#htmlElements.iconClassBox);
				}
			} else if (this.iconImage !== null) {
				if (!this.#htmlElements.iconImgageBox) {
					this.#htmlElements.iconImgageBox = document.createElement("img");
					htmlElement.appendChild(this.#htmlElements.iconImgageBox);
				}
			}
			if (this.textClass !== null) {
				if (!this.#htmlElements.textBox) {
					this.#htmlElements.textBox = document.createElement("span");
					htmlElement.appendChild(this.#htmlElements.textBox);
				}
			}
		}
	}

	#initHtml() {
		this.#loadHtml();
		this.#buildHtml();
	}

	getElement() {
		return this.#htmlElement;
	}

	getIcon() {
		const { iconClassBox, iconImgageBox } = this.#htmlElements;
		return iconClassBox || iconImgageBox;
	}

	getText() {
		const htmlElement = this.#htmlElement;
		const { textBox } = this.#htmlElements;
		return textBox || htmlElement;
	}

	#setStyle() {
		const htmlElement = this.#htmlElement;
		if (htmlElement instanceof HTMLButtonElement) {
			if (!this.submit) {
				htmlElement.classList.remove("submit");
			} else if (!this.warning) {
				htmlElement.classList.add("submit");
			}
			if (this.warning) {
				htmlElement.classList.add("warning");
			} else {
				htmlElement.classList.remove("warning");
			}
			if (this.flat) {
				htmlElement.classList.add("flat");
			} else {
				htmlElement.classList.remove("flat");
			}
		}
	}

	init() {
		const htmlElement = this.#htmlElement;
		const { iconClassBox, iconImgageBox, textBox } = this.#htmlElements;
		if (htmlElement instanceof HTMLButtonElement) {
			if (iconClassBox instanceof HTMLDivElement) {
				iconClassBox.className = this.iconClass;
			} else if (iconImgageBox instanceof HTMLImageElement) {
				iconImgageBox.src = this.iconImage;
			}
			if (textBox instanceof HTMLSpanElement) {
				textBox.innerHTML = this.text;
				if (this.textClass !== null) {
					textBox.className = this.textClass;
				}
				if (typeof (this.textData) === "object" && this.textData !== null) {
					Object.keys(this.textData).forEach(key => {
						textBox.dataset[key] = this.textData[key];	
					});
				}
			} else if (iconClassBox instanceof HTMLDivElement) {
				iconClassBox.insertAdjacentText("afterend", " " + this.text);
			} else if (iconImgageBox instanceof HTMLImageElement) {
				iconImgageBox.insertAdjacentText("afterend", " " + this.text);
			} else {
				htmlElement.innerHTML = this.text;
			}
			htmlElement.type = this.submit ? "submit" : "button";
			htmlElement.disabled = !this.enabled;
			htmlElement.addEventListener("click", () => {
				this.#setStyle();
				if (this.selectable && this.enabled) {
					htmlElement.classList.toggle("selected");
				}
				if (!this.locked && this.enabled && typeof this.onClick === "function") {
					const selected = this.selectable ? htmlElement.classList.contains("selected") : null;
					this.onClick(selected);
				}
			});
			htmlElement.addEventListener("dblclick", () => {
				this.#setStyle();
				if (!this.locked && this.enabled && typeof this.onDblClick === "function") {
					const selected = this.selectable ? htmlElement.classList.contains("selected") : null;
					this.onDblClick(selected);
				}
			});
			this.#setStyle();
		}
	}

	focus() {
		const htmlElement = this.#htmlElement;
		if (htmlElement instanceof HTMLButtonElement) {
			htmlElement.focus();
		}
	}

	select() {
		const htmlElement = this.#htmlElement;
		if (htmlElement instanceof HTMLButtonElement && this.selectable && this.enabled) {
			htmlElement.classList.add("selected");
		}
	}

	unselect() {
		const htmlElement = this.#htmlElement;
		if (htmlElement instanceof HTMLButtonElement && this.selectable && this.enabled) {
			htmlElement.classList.remove("selected");
		}
	}

	isSelected() {
		const htmlElement = this.#htmlElement;
		if (htmlElement instanceof HTMLButtonElement && this.selectable && this.enabled) {
			return htmlElement.classList.contains("selected");
		}
		return false;
	}

	destroy() {
		const htmlElement = this.#htmlElement;
		if (htmlElement instanceof HTMLButtonElement) {
			htmlElement.innerHTML = "";
			htmlElement.remove();
		}
		Object.keys(this.#properties).forEach(name => {
			delete this.#properties[name];
		});
		Object.keys(this.#htmlElements).forEach(key => {
			this.#htmlElements[key] = null;
		});
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

/*
 * @file wui-menubar-0.7.js
 * @class WUIMenubar
 * @version 0.7
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUIMenubar {

	static version = "0.7";
	static #defaults = {
		selector: ".wui-menubar",
		centered: true,
		separations: false,
		compacted: false,
		expansive: true,
		autoClose: true,
		hiddenPassiveBorder: false,
		topButtons: [],
		mainButtons: [],
		bottomButtons: [],
		onClick: null,
		onSelect: null
	};
	static #icons = {
		"expander-expand": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42z'/></svg>",
		"expander-contract": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M14.71 15.88L10.83 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0c.38-.39.39-1.03 0-1.42z'/></svg>",
		"opener-open": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42z'/></svg>",
		"opener-close": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M14.71 15.88L10.83 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0c.38-.39.39-1.03 0-1.42z'/></svg>",
		"mobile-opener-close": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z'/></svg>"
	};

	#properties = {};
	#htmlElement;
	#htmlElements = {
		bar: null,
		barHeader: null,
		barTop: null,
		barMain: null,
		barBottom: null,
		submenu: null,
		submenuMain: null,
		expander: null,
		expanderIcon: null
	};
	#buttons;

	constructor(properties = {}) {
		const defaults = structuredClone(WUIMenubar.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
		this.#buttons = null;
		this.#initHTML();
	}

	get selector() {
		return this.#properties.selector;
	}

	get centered() {
		return this.#properties.centered;
	}

	get separations() {
		return this.#properties.separations;
	}

	get compacted() {
		return this.#properties.compacted;
	}

	get expansive() {
		return this.#properties.expansive;
	}

	get autoClose() {
		return this.#properties.autoClose;
	}

	get hiddenPassiveBorder() {
		return this.#properties.hiddenPassiveBorder;
	}

	get topButtons() {
		return this.#properties.topButtons;
	}

	get mainButtons() {
		return this.#properties.mainButtons;
	}

	get bottomButtons() {
		return this.#properties.bottomButtons;
	}

	get onClick() {
		return this.#properties.onClick;
	}

	get onSelect() {
		return this.#properties.onSelect;
	}

	set selector(value) {
		if (typeof (value) === "string" && value !== "") {
			this.#properties.selector = value;
			this.#htmlElement = document.querySelector(value);
		}
	}

	set centered(value) {
		if (typeof (value) === "boolean") {
			this.#properties.centered = value;
		}
	}

	set separations(value) {
		if (typeof (value) === "boolean") {
			this.#properties.separations = value;
		}
	}

	set compacted(value) {
		if (typeof (value) === "boolean") {
			this.#properties.compacted = value;
		}
	}

	set expansive(value) {
		if (typeof (value) === "boolean") {
			this.#properties.expansive = value;
		}
	}

	set autoClose(value) {
		if (typeof (value) === "boolean") {
			this.#properties.autoClose = value;
		}
	}

	set hiddenPassiveBorder(value) {
		if (typeof (value) === "boolean") {
			this.#properties.hiddenPassiveBorder = value;
		}
	}

	set topButtons(value) {
		if (Array.isArray(value)) {
			this.#properties.topButtons = value;
		}
	}

	set mainButtons(value) {
		if (Array.isArray(value)) {
			this.#properties.mainButtons = value;
		}
	}

	set bottomButtons(value) {
		if (Array.isArray(value)) {
			this.#properties.bottomButtons = value;
		}
	}

	set onClick(value) {
		if (typeof (value) === "function" || value == null) {
			this.#properties.onClick = value;
		}
	}

	set onSelect(value) {
		if (typeof (value) === "function" || value == null) {
			this.#properties.onSelect = value;
		}
	}

	#loadHTML() {
		const sel = this.selector;
		this.#htmlElement = document.querySelector(sel);
		this.#htmlElements = {
			bar: document.querySelector(sel + " > .bar"),
			barHeader: document.querySelector(sel + " > .bar > .header"),
			barTop: document.querySelector(sel + " > .bar > .top"),
			barMain: document.querySelector(sel + " > .bar > .main"),
			barBottom: document.querySelector(sel + " > .bar > .bottom"),
			submenu: document.querySelector(sel + " > .submenu"),
			submenuHeader: document.querySelector(sel + " > .submenu > .header"),
			submenuMain: document.querySelector(sel + " > .submenu > .main")
		};
	}

	#buildHTML() {
		if (this.#htmlElement instanceof HTMLDivElement) {
			this.#htmlElements.bar = document.createElement("div");
			this.#htmlElements.barHeader = document.createElement("div");
			this.#htmlElements.barTop = document.createElement("div");
			this.#htmlElements.barMain = document.createElement("div");
			this.#htmlElements.barBottom = document.createElement("div");
			this.#htmlElements.submenu = document.createElement("div");
			this.#htmlElements.submenuHeader = document.createElement("div");
			this.#htmlElements.submenuMain = document.createElement("div");
		}
	}

	#initHTML() {
		this.#loadHTML();
		this.#buildHTML();
	}

	getElement() {
		return this.#htmlElement;
	}

	getButton(id = "") {
		return (this.#buttons.find(options => options.id === id) || null);
	}

	#getSRCIcon(name) {
		const element = this.#htmlElement || document.documentElement;
		const src = getComputedStyle(element).getPropertyValue("--wui-menubar-" + name + "icon-src");
		return src !== "" && !src.match(/^(none|url\(\))$/) ? src : "url(\"data:image/svg+xml," + WUIMenubar.#icons[name] + "\")";
	}

	init() {
		const htmlElement = this.#htmlElement;
		this.#buttons = [];
		if (htmlElement instanceof HTMLElement) {
			const { bar, barHeader, barTop, barMain, barBottom, submenu, submenuMain } = this.#htmlElements;
			const submenuHeader = this.#htmlElements.submenuHeader;
			const loadButtons = (buttons, parentId = "") => {
				for (const options of buttons) {
					options.parentId = parentId;
					this.#buttons.push(options);
					if (Array.isArray(options.buttons) && options.buttons.length > 0) {
						loadButtons(options.buttons, options.id);
					}
				}
			}
			htmlElement.append(bar);
			htmlElement.append(submenu);
			if (this.centered) {
				htmlElement.classList.add("centered");
			}
			if (this.compacted) {
				htmlElement.classList.add("compacted");
			}
			bar.className = "bar" + (this.hiddenPassiveBorder ? " hidden-passive-border" : "");
			bar.append(barHeader);
			bar.append(barTop);
			bar.append(barMain);
			bar.append(barBottom);
			barHeader.className = "header";
			if (!this.expansive) {
				barHeader.style.display = "none";
			}
			barTop.className = "top" + (this.separations && this.topButtons.length > 0 && this.mainButtons.length > 0 ? " border" : "");
			if (this.topButtons.length === 0) {
				barTop.style.display = "none";
			}
			barMain.className = "main";
			if (this.mainButtons.length === 0) {
				barMain.style.display = "none";
			}
			barBottom.className = "bottom" + (this.separations && this.mainButtons.length > 0 && this.bottomButtons.length > 0 ? " border" : "");
			if (this.bottomButtons.length === 0) {
				barBottom.style.display = "none";
			}
			submenu.className = "submenu";
			submenu.append(submenuHeader);
			submenu.append(submenuMain);
			submenuHeader.className = "header";
			submenuMain.className = "main";
			if (this.expansive) {
				this.#htmlElements.expander = document.createElement("div");
				this.#htmlElements.expanderIcon = document.createElement("div");
				const { expander, expanderIcon } = this.#htmlElements;
				expander.append(expanderIcon);
				expander.className = "expander";
				expanderIcon.className = "icon";
				expanderIcon.style.maskImage = this.#getSRCIcon("expander-expand");
				expander.addEventListener("click", () => {
					const expanded = htmlElement.classList.contains("expanded");
					htmlElement.classList.toggle("expanded");
					expanderIcon.style.maskImage = this.#getSRCIcon("expander-" + (expanded ? "expand" : "contract"));
				});
				barHeader.append(expander);
			}
			if (!this.autoClose) {
				this.#htmlElements.close = document.createElement("div");
				this.#htmlElements.closeIcon = document.createElement("div");
				this.#htmlElements.closeMobileIcon = document.createElement("div");
				const { close, closeIcon, closeMobileIcon } = this.#htmlElements;
				close.append(closeIcon);
				close.append(closeMobileIcon);
				close.className = "close";
				closeIcon.className = "icon";
				closeIcon.style.maskImage = this.#getSRCIcon("opener-close");
				closeMobileIcon.className = "icon mobile";
				closeMobileIcon.style.maskImage = this.#getSRCIcon("mobile-opener-close");
				close.addEventListener("click", () => {
					this.close();
				});
				submenuHeader.append(close);
			}
			loadButtons(this.topButtons);
			loadButtons(this.mainButtons);
			loadButtons(this.bottomButtons);
			this.topButtons.forEach(options => {
				barTop.append(this.#addButton(options));
			});
			this.mainButtons.forEach(options => {
				barMain.append(this.#addButton(options));
			});
			this.bottomButtons.forEach(options => {
				barBottom.append(this.#addButton(options));
			});
		}
	}

	#addButton(options) {
		const button = document.createElement("div");
		const icon = document.createElement(options.iconImage ? "img" : "div");
		const photo = document.createElement("div");
		const text = document.createElement("div");
		const tooltip = document.createElement("div");
		const bubble = document.createElement("div");
		if (options.iconImage) {
			icon.src = options.iconImage;
		} else {
			icon.className = "icon";
			(options.iconClass || "").split(/\s+/).forEach(name => {
				icon.classList.add(name);
			});
		}
		text.innerHTML = options.label || "";
		text.className = "text";
		tooltip.className = "tooltip" + (!options.label || (typeof (options.tooltipable) === "boolean" && !options.tooltipable) ? " hidden" : "");
		tooltip.innerHTML = options.label || "";
		bubble.className = "bubble hidden";
		bubble.innerText = 0;
		button.append(icon);
		if (typeof (options.photoImage) === "string") {
			photo.className = "photo";
			photo.style.backgroundImage = "url(" + options.photoImage + ")";
			button.append(photo);
		}
		button.append(text);
		button.append(tooltip);
		button.append(bubble);
		button.dataset.id = options.id;
		button.className = "button" + (typeof (options.hoverable) === "undefined" || options.hoverable ? " hoverable" : "") + (options.selected ? " selected" : "") + (options.enabled === false ? " disabled" : "");
		if (typeof (options.buttons) === "object" && Array.isArray(options.buttons) && options.buttons.length > 0) {
			const opener = document.createElement("div");
			opener.className = "opener";
			opener.style.maskImage = this.#getSRCIcon("opener-open");
			button.append(opener);
		}
		button.addEventListener("click", () => {
			if (!button.classList.contains("disabled")) {
				this.selectButton(options.id);
			}
		});
		if (typeof (options.selected) === "boolean" && options.selected) {
			this.selectButton(options.id);
		}
		return button;
	}

	setPhoto(id = "", src = "") {
		if (id !== "") {
			const photo = this.#htmlElement.querySelector(`[data-id='${id}'].button > .photo`);
			this.getButton(id).photoImage = src;
			if (photo instanceof HTMLElement) {
				photo.style.backgroundImage = "url(" + src + ")";
			}
		}
	}

	setBubble(id = "", number = 0) {
		if (id !== "") {
			const bubble = this.#htmlElement.querySelector(`[data-id='${id}'].button > .bubble`);
			this.getButton(id).bubbleNumber = number;
			if (bubble instanceof HTMLElement) {
				bubble.textContent = number;
				if (number > 0) {
					bubble.classList.remove("hidden");
				} else {
					bubble.classList.add("hidden");
				}
			}
		}
	}

	selectButton(id = "", selected = true, runCallback = true) {
		if (id !== "") {
			const htmlElement = this.#htmlElement;
			const options = this.getButton(id);
			const parentId = options.parentId;
			const hasChildren = Boolean(Array.isArray(options.buttons) && options.buttons.length > 0);
			const button = htmlElement.querySelector(`[data-id='${id}'].button`);
			const prevSelected = options.selected;
			if (selected && typeof (options.radioMode) === "boolean" && !options.radioMode) {
				selected = !prevSelected;
			}
			this.getButton(id).selected = selected;
			if (button instanceof HTMLElement && !button.classList.contains("disabled")) {
				if (parentId === "" || this.autoClose) {
					this.close();
				}
				if (selected) {
					if (typeof (options.radioMode) === "boolean" && !options.radioMode) {
						if (!prevSelected) {
							button.classList.add("selected");
						} else {
							button.classList.remove("selected");
						}
					} else if (typeof (options.selectable) === "undefined" || options.selectable) {
						this.#buttons.filter(opt => opt.id !== id && opt.id !== parentId && opt.parentId !== id).forEach(opt => {
							const btn = htmlElement.querySelector(`[data-id='${opt.id}'].button`);
							if (btn instanceof HTMLElement && !btn.classList.contains("disabled")) {
								btn.classList.remove("selected");
								this.getButton(opt.id).selected = false;
							}
						});
						button.classList.add("selected");
						if (hasChildren) {
							this.#open(options.id);
						}
					}
				} else {
					button.classList.remove("selected");
				}
				if (runCallback) {
					if (options.onClick && typeof (options.onClick) === "function") {
						options.onClick();
					} else if (this.onClick && typeof (this.onClick) === "function") {
						this.onClick(id);
					}
					if (selected && (typeof (options.selectable) === "undefined" || options.selectable) && this.onSelect && typeof (this.onSelect) === "function") {
						this.onSelect(id);
					}
				}
			}
		}
	}

	enableButton(id = "", enabled = true) {
		if (id !== "") {
			const button = this.#htmlElement.querySelector(`[data-id='${id}'].button`);
			this.getButton(id).enabled = enabled;
			if (button instanceof HTMLElement) {
				if (enabled) {
					button.classList.remove("disabled");
				} else {
					button.classList.add("disabled");
				}
			}
		}
	}

	#open(id) {
		const { submenu, submenuMain } = this.#htmlElements;
		const buttons = this.getButton(id).buttons || [];
		submenuMain.innerHTML = "";
		buttons.forEach(options => {
			submenuMain.append(this.#addButton(options));
		});
		submenu.classList.add("opened");
	}

	close() {
		this.#htmlElements.submenu.classList.remove("opened");
	}

	destroy() {
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
		this.#buttons = undefined;
	}
}

/*
HTML output:
<div class="wui-menubar [centered|compacted]">
	<div class="bar">
		<div class="header">
			<div class="expander">
				<div class="icon"></div>
			</div>
		</div>
		<div class="top">
			<div class="button">
				[<div class="icon"></div>|<img>]
				<div class="text"></div>
				<div class="tooltip"></div>
				<div class="bubble"></div>
			</div>
			[...]
		</div>
		<div class="main">
			<div class="button">
				[<div class="icon"></div>|<img>]
				<div class="text"></div>
				<div class="tooltip"></div>
				<div class="bubble"></div>
			</div>
			[...]
		</div>
		<div class="bottom">
			<div class="button">
				[<div class="icon"></div>|<img>]
				<div class="text"></div>
				<div class="tooltip"></div>
				<div class="bubble"></div>
			</div>
			[...]
		</div>
	</div>
	<div class="submenu">
		<div class="header">
			<div class="close">
				<div class="icon"></div>
			</div>
		</div>
		<div class="main">
			<div class="button">
				[<div class="icon"></div>|<img>]
				<div class="text"></div>
				<div class="tooltip"></div>
				<div class="bubble"></div>
			</div>
			[...]
		</div>
	</div>
</div>
 */

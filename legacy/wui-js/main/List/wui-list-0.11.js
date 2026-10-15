/*
 * @file wui-list-0.11.js
 * @class WUIList
 * @version 0.11
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUIList {

	static version = "0.11";
	static #defaults = {
		selector: ".wui-list",
		paging: 0,
		columns: [],
		rows: [],
		buttons: [],
		buttonsStyle: "round",
		onPrint: null,
		onClick: null
	};

	#properties = {};
	#htmlElement;
	#strips;
	#transitionCleanups = new Map();

	constructor(properties = {}) {
		const defaults = structuredClone(WUIList.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
		this.#properties.page = 0;
		this.#strips = null;
		this.#initHtml();
	}

	get selector() {
		return this.#properties.selector;
	}

	get paging() {
		return this.#properties.paging;
	}

	get page() {
		return this.#properties.page;
	}

	get pages() {
		return this.#properties.paging === 0 ? 1 : Math.ceil(this.#properties.rows.length / this.#properties.paging);
	}

	get total() {
		return this.#properties.rows.length;
	}

	get columns() {
		return this.#properties.columns;
	}

	get rows() {
		return this.#properties.rows;
	}

	get buttons() {
		return this.#properties.buttons;
	}

	get buttonsStyle() {
		return this.#properties.buttonsStyle;
	}

	get onPrint() {
		return this.#properties.onPrint;
	}

	get onClick() {
		return this.#properties.onClick;
	}

	set selector(value) {
		if (typeof (value) === "string" && value !== "") {
			this.#properties.selector = value;
			this.#htmlElement = document.querySelector(value);
		}
	}

	set paging(value) {
		if (typeof (value) === "number" || (typeof (value) === "string" && value.match(/^\d+$/))) {
			this.#properties.paging = parseInt(value);
		}
	}

	set columns(value) {
		if (Array.isArray(value)) {
			this.#properties.columns = value;
		}
	}

	set rows(value) {
		if (Array.isArray(value)) {
			this.#properties.rows = value;
		}
	}

	set buttons(value) {
		if (Array.isArray(value)) {
			this.#properties.buttons = value;
		}
	}

	set buttonsStyle(value) {
		if (typeof (value) === "string" && value.match(/^(round|stretch)$/i)) {
			this.#properties.buttonsStyle = value.toLowerCase();
		}
	}

	set onPrint(value) {
		if (typeof (value) === "function" || value == null) {
			this.#properties.onPrint = value;
		}
	}

	set onClick(value) {
		if (typeof (value) === "function" || value == null) {
			this.#properties.onClick = value;
		}
	}

	#loadHtml() {
		this.#htmlElement = document.querySelector(this.selector);
	}

	#initHtml() {
		this.#loadHtml();
	}

	getElement() {
		return this.#htmlElement;
	}

	#runTransition(element, property, onEnd) {
		const duration = element instanceof HTMLElement ? parseFloat(getComputedStyle(element).transitionDuration) * 1000 || 0 : 0;
		const finish = () => {
			this.#cancelTransition(element);
			onEnd();
		};
		const onTransitionEnd = event => {
			if (event.target === element && event.propertyName === property) {
				finish();
			}
		};
		this.#cancelTransition(element);
		if (duration > 0) {
			const timeout = setTimeout(finish, duration + 50);
			element.addEventListener("transitionend", onTransitionEnd);
			this.#transitionCleanups.set(element, () => {
				clearTimeout(timeout);
				element.removeEventListener("transitionend", onTransitionEnd);
				this.#transitionCleanups.delete(element);
			});
		} else {
			onEnd();
		}
	}

	#cancelTransition(element) {
		const cleanup = this.#transitionCleanups.get(element);
		if (typeof (cleanup) === "function") {
			cleanup();
		}
	}

	#cancelTransitions() {
		Array.from(this.#transitionCleanups.values()).forEach(cleanup => cleanup());
	}

	init() {
		this.#strips = [];
		if (this.rows.length > 0) {
			this.print();
		}
	}

	addColumn(options) {
		this.columns.push(options);
	}

	addRow(options) {
		this.rows.push(options);
	}

	addButton(options) {
		this.buttons.push(options);
	}

	print(page = this.page) {
		const htmlElement = this.#htmlElement;
		const paging = this.paging === 0 ? this.rows.length : this.paging;
		this.#strips = [];
		this.#cancelTransitions();
		if (htmlElement instanceof HTMLElement) {
			htmlElement.innerHTML = "";
		}
		if (htmlElement instanceof HTMLElement && page * paging >= 0 && page * paging < this.rows.length) {
			const ini = page * paging;
			const end = (page + 1) * paging > this.rows.length ? this.rows.length : (page + 1) * paging;
			for (let i = ini; i < end; i++) {
				const rowOptions = this.rows[i];
				const row = document.createElement("div");
				const strip = document.createElement("div");
				const id = "id" in rowOptions ? rowOptions.id : null;
				const enabled = "enabled" in rowOptions ? rowOptions.enabled : true;
				row.dataset.index = i;
				if (id !== null) {
					row.dataset.id = id;
				}
				row.className = "row" + (this.buttons.length > 0 ? " slider" : "") + (!enabled ? " disabled" : "");
				row.append(strip);
				strip.className = "strip";
				this.columns.forEach((colOptions, j) => {
					const cell = document.createElement("div");
					cell.className = "cell";
					cell.classList.add(colOptions.align || "left");
					if (typeof (colOptions.width) === "number") {
						cell.style.width = colOptions.width + "px";
					} else {
						cell.style.flex = "1";
					}
					cell.style.textAlign = colOptions.align || "left";
					cell.innerHTML = rowOptions.data[j] || "";
					strip.append(cell);
				});
				strip.addEventListener("click", () => {
					const dragged = this.buttons.length > 0 && this.#strips[i].direction !== null;
					if (this.buttons.length > 0) {
						this.#strips[i].direction = null;
					}
					if (!dragged) {
						if (typeof (this.onClick) === "function") {
							this.onClick(i, id, !row.classList.contains("disabled"), rowOptions);
						}
						this.#strips.forEach((str, s) => {
							if (str.open) {
								htmlElement.querySelector(".row:nth-of-type(" + (s + 1) + ") > .strip").style.marginRight = "0px";
								this.#strips[s].open = false;
							}
						});
					}
				});
				if (this.buttons.length > 0) {
					const buttons = document.createElement("div");
					buttons.className = "buttons under";
					this.#strips[i] = {
						drag: false,
						initX: null,
						direction: null,
						open: false
					};
					this.buttons.forEach(btnOptions => {
						const button = document.createElement("div");
						const icon = document.createElement("div");
						const iconClass = typeof (btnOptions.iconClass) === "string" ? btnOptions.iconClass : typeof (btnOptions.iconClass) === "function" ? btnOptions.iconClass(i, id) : "";
						const bgcolor = typeof (btnOptions.bgcolor) === "string" ? btnOptions.bgcolor : typeof (btnOptions.bgcolor) === "function" ? btnOptions.bgcolor(i, id) : "";
						const enabled = typeof (btnOptions.enabled) === "undefined" || (typeof (btnOptions.enabled) === "boolean" && btnOptions.enabled) || (typeof (btnOptions.enabled) === "function" && btnOptions.enabled(i, id)) ? true : false;
						button.className = `button ${this.buttonsStyle}`;
						icon.className = "icon";
						if (!enabled) {
							button.classList.add("disabled");
						} else if (bgcolor !== "") {
							button.style.backgroundColor = bgcolor;
						}
						if (iconClass !== "") {
							iconClass.split(/\s+/).forEach(name => {
								icon.classList.add(name);
							});
						}
						button.addEventListener("click", () => {
							const strip = htmlElement.querySelector(".row:nth-of-type(" + (i + 1) + ") > .strip");
							if (enabled && typeof (btnOptions.onClick) === "function") {
								btnOptions.onClick(i, id);
							}
							if (strip instanceof HTMLElement) {
								strip.style.marginRight = "0px";
							}
						});
						button.append(icon);
						buttons.append(button);
						["touchstart", "mousedown"].forEach(type => {
							strip.addEventListener(type, event => {
								if (!row.classList.contains("disabled") && !this.#strips[i].drag) {
									const initX = (event.type === "touchstart" ? event.touches[0].clientX : event.clientX || event.clientX) - event.target.offsetParent.offsetLeft;
									this.#strips[i].initX = initX;
									this.#strips[i].drag = Boolean(type === "touchstart" || event.buttons === 1);
									this.#strips[i].direction = null;
									buttons.classList.remove("under");
								}
							});
						});
						["touchmove", "mousemove"].forEach(type => {
							strip.addEventListener(type, event => {
								if (this.#strips[i].drag) {
									const initX = parseFloat(this.#strips[i].initX);
									const moveX = (event.type === "touchmove" ? event.touches[0].clientX : event.clientX || event.clientX) - event.target.offsetParent.offsetLeft;
									const diffX = moveX - initX;
									const direction = diffX > 10 ? "right" : diffX < -10 ? "left" : null;
									if (direction === "left") {
										this.#strips.forEach((_, s) => {
											if (this.#strips[s].open && s !== i) {
												htmlElement.querySelector(".row:nth-of-type(" + (s + 1) + ") > .strip").style.marginRight = "0px";
												this.#strips[s].open = false;
											}
										});
									}
									this.#strips[i].direction = direction;
								}
							});
						});
						["touchend", "mouseup"].forEach(type => {
							strip.addEventListener(type, () => {
								if (this.#strips[i].drag) {
									this.#strips[i].drag = false;
									this.#strips[i].initX = null;
									if (this.#strips[i].direction !== null) {
										if (this.#strips[i].direction === "left") {
											strip.style.marginRight = buttons.clientWidth + "px";
											this.#strips[i].open = true;
										} else if (this.#strips[i].direction === "right") {
											strip.style.marginRight = "0px";
											this.#strips[i].open = false;
										}
										this.#runTransition(strip, "margin-right", () => {
											if (!this.#strips[i].open) {
												buttons.classList.add("under");
											}
										});
									}
								}
							});
						});
					});
					row.append(buttons);
				}
				htmlElement.append(row);
				if ("innerContent" in rowOptions && typeof (rowOptions.innerContent) === "string" && rowOptions.innerContent.trim() !== "") {
					const innerRow = document.createElement("div");
					const opened = Boolean("innerOpened" in rowOptions && rowOptions.innerOpened);
					innerRow.dataset.index = i;
					innerRow.className = "inner-row" + (!opened ? " hidden" : "");
					innerRow.innerHTML = rowOptions.innerContent;
					htmlElement.append(innerRow);
				}
			}
			this.#properties.page = page;
			if (typeof (this.onPrint) === "function") {
				this.onPrint(page, this.pages, this.total);
			}
		}
	}

	enableRow(index, enabled = true) {
		const htmlElement = this.#htmlElement;
		if (index >= 0 && index < this.rows.length && htmlElement instanceof HTMLDivElement) {
			const row = htmlElement.querySelector(".row:nth-of-type(" + (index + 1) + ")");
			if (row instanceof HTMLElement) {
				if (enabled) {
					row.classList.remove("disabled");
				} else {
					row.classList.add("disabled");
				}
			}
			this.rows[index].enabled = enabled;
		}
	}

	openInnerRow(index, open = true) {
		const htmlElement = this.#htmlElement;
		if (index >= 0 && index < this.rows.length && "innerContent" in this.rows[index] && typeof (this.rows[index].innerContent) === "string" && this.rows[index].innerContent.trim() !== "" && htmlElement instanceof HTMLDivElement) {
			const innerRow = htmlElement.querySelector(".inner-row:nth-of-type(" + (index + 1) + ")");
			if (innerRow instanceof HTMLElement) {
				if (open) {
					innerRow.classList.remove("hidden");
				} else {
					innerRow.classList.add("hidden");
				}
			}
		}
	}

	firstPage() {
		this.print(0);
	}

	lastPage() {
		const page = this.paging === 0 ? 0 : Math.ceil(this.rows.length / this.paging) - 1;
		this.print(page);
	}

	prevPage() {
		this.print(this.page - 1);
	}

	nextPage() {
		this.print(this.page + 1);
	}

	hasPrevPage() {
		const paging = this.paging === 0 ? this.rows.length : this.paging;
		return Boolean((this.page - 1) * paging >= 0);
	}

	hasNextPage() {
		const paging = this.paging === 0 ? this.rows.length : this.paging;
		return Boolean((this.page + 1) * paging < this.rows.length);
	}

	destroy() {
		const htmlElement = this.#htmlElement;
		this.#cancelTransitions();
		if (htmlElement instanceof HTMLElement) {
			htmlElement.innerHTML = "";
			htmlElement.remove();
		}
		Object.keys(this.#properties).forEach(name => {
			delete this.#properties[name];
		});
		this.#strips = undefined;
	}
}

/*
HTML output:
<div class="wui-list">
	<div class="row">
		<div class="strip">
			<div class="cell"></div>
			[...]
		</div>
		<div class="buttons">
			<div class="button edit"></div>
			<div class="button delete"></div>
			[...]
		</div>
	</div>
	<div class="inner-row hidden">
		[...]
	</div>
	[...]
</div>
*/

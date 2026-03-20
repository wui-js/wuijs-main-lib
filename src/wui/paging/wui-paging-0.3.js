/*
 * WUIPaging - v0.2
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
 */

class WUIPaging {

	static version = "0.2";
	static #defaults = {
		selector: "",
		index: null,
		dataTarget: "target",
		onSelect: null,
		onChange: null,
		onBack: null,
		onScrolling: null
	};

	#properties = {};
	#htmlElement;
	#target;
	#history;

	constructor(properties) {
		const defaults = structuredClone(WUIPaging.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
		this.#target = null;
		this.#history = [];
	}

	get selector() {
		return this.#properties.selector;
	}

	get index() {
		return this.#properties.index;
	}

	get target() {
		return this.#target;
	}

	get dataTarget() {
		return this.#properties.dataTarget;
	}

	get onSelect() {
		return this.#properties.onSelect;
	}

	get onChange() {
		return this.#properties.onChange;
	}

	get onBack() {
		return this.#properties.onBack;
	}

	get onScrolling() {
		return this.#properties.onScrolling;
	}

	set selector(value) {
		if (typeof (value) == "string" && value != "") {
			this.#properties.selector = value;
			this.#htmlElement = document.querySelector(value);
		}
	}

	set index(value) {
		if (typeof (value) == "number") {
			this.#properties.index = value;
		}
	}

	set dataTarget(value) {
		if (typeof (value) == "string") {
			this.#properties.dataTarget = value;
		}
	}

	set onSelect(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onSelect = value;
		}
	}

	set onChange(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onChange = value;
		}
	}

	set onBack(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onBack = value;
		}
	}

	set onScrolling(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onScrolling = value;
		}
	}

	#target2index(target) {
		let index = 0;
		if (typeof (target) == "number" && target > 0) {
			index = target;
		} else if (typeof (target) == "string" && target != "") {
			Array.from(this.getPages()).every((page, i) => {
				if (page.dataset[this.dataTarget] == target) {
					index = i;
					return false;
				}
				return true;
			});
		}
		return index;
	}

	#index2target(index) {
		let target = "";
		if (typeof (index) == "number" && index > -1) {
			Array.from(this.getPages()).every((page, i) => {
				if (i == this.index) {
					target = page.dataset[this.dataTarget];
					return true;
				}
				return false;
			});
		} else if (typeof (index) == "string" && index != "") {
			target = index;
		}
		return target;
	}

	#getDelay() {
		const time = getComputedStyle(document.body).getPropertyValue("--wui-paging-page-transition-time");
		const factor = time.match(/ms$/) ? 1 : time.match(/s$/) ? 1000 : 0;
		const delay = factor * parseFloat(time.replace(/\D$/, ""));
		return delay;
	}

	getElement() {
		return this.#htmlElement;
	}

	getIndex(target = this.target) {
		return this.#target2index(target);
	}

	getTarget(index = this.index) {
		return this.#index2target(index);
	}

	getPages() {
		return this.#htmlElement.querySelectorAll(".page") || [];
	}

	getPage(target) {
		const index = this.getIndex(target);
		return this.getPages()[index] || null;
	}

	init() {
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
		if (this.getPages().length > 0) {
			const index = this.index || 0;
			this.getPages().forEach((page, i) => {
				if (i == index) {
					page.classList.add("selected");
					this.#target = page.dataset[this.dataTarget];
				} else if (i < index) {
					page.classList.add("left");
				} else if (i > index) {
					page.classList.add("right");
				}
				page.dataset.scrollPage = 0;
				if (page.classList.contains("scroll")) {
					["scroll", "touchmove"].forEach(type => {
						page.addEventListener(type, debounce(() => {
							const top = page.scrollTop;
							const scroll = top >= 0 ? top : 0;
							page.dataset.scrollPage = scroll;
							if (typeof (this.onScrolling) == "function") {
								this.onScrolling(scroll);
							}
						}), { passive: true });
					});
				}
			});
			this.index = index;
		}
	}

	select(target, onChange = this.onChange) {
		const index = this.#target2index(target);
		if (this.index != index) {
			const inputIndex = index;
			const inputPage = this.getPage(index);
			const outputIndex = this.index;
			const outputPage = this.getPage(this.index);
			const delay = this.#getDelay();
			inputPage.classList.remove("left", "right");
			inputPage.classList.add("selected");
			if (this.index < index) {
				outputPage.classList.add("left");
			} else if (this.index > index) {
				outputPage.classList.add("right");
			}
			this.#history.push({
				index: this.index,
				target: this.#target
			});
			if (typeof (this.onSelect) == "function") {
				this.onSelect(index, target, this.index, this.#target);
			}
			this.index = index;
			this.#target = target;
			setTimeout(() => {
				if (outputPage != null) {
					outputPage.classList.remove("selected");
				}
				this.getPages().forEach((page, i) => {
					if (i != inputIndex && i != outputIndex) {
						if (i < index) {
							page.classList.remove("right");
							page.classList.add("left");
						} else if (i > index) {
							page.classList.remove("left");
							page.classList.add("right");
						}
					}
				});
				if (typeof (onChange) == "function") {
					onChange(index, target);
				}
			}, delay);
		}
	}

	setHistory(history = []) {
		if (Array.isArray(history)) {
			this.#history = [];
			history.forEach(item => {
				let index = 0;
				let target = "";
				if (typeof (item) == "number") {
					index = item;
					target = this.#index2target(item);
				} else if (typeof (item) == "string") {
					index = this.#target2index(item);
					target = item;
				}
				this.#history.push({ index, target });
			});
		}
	}

	back(onBack = this.onBack) {
		if (this.#history.length > 0) {
			const back = this.#history.pop();
			const delay = this.#getDelay();
			this.select(back.target);
			this.#history.pop();
			setTimeout(() => {
				if (typeof (onBack) == "function") {
					onBack(back.index, back.target);
				}
			}, delay);
		}
	}

	reset() {
		if (this.getPages().length > 0) {
			this.select(0);
			this.index = 0;
			this.#target = null;
		}
	}
}

/*
HTML output:
<div class="wui-paging">
	<div class="page selected" data-target="page1"></div>
	<div class="page" data-target="page2"></div>
	[...]
</div>
*/
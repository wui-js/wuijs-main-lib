/*
 * @file wui-paging-0.12.js
 * @class WUIPaging
 * @version 0.12
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUIPaging {

	static version = "0.12";
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
	#transitionCleanup = null;
	#transitionFinish = null;

	constructor(properties = {}) {
		const defaults = structuredClone(WUIPaging.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
		this.#target = null;
		this.#history = [];
		this.#initHtml();
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
		if (typeof (value) === "string" && value !== "") {
			this.#properties.selector = value;
		}
	}

	set index(value) {
		if (typeof (value) === "number") {
			this.#properties.index = value;
		}
	}

	set dataTarget(value) {
		if (typeof (value) === "string") {
			this.#properties.dataTarget = value;
		}
	}

	set onSelect(value) {
		if (typeof (value) === "function" || value == null) {
			this.#properties.onSelect = value;
		}
	}

	set onChange(value) {
		if (typeof (value) === "function" || value == null) {
			this.#properties.onChange = value;
		}
	}

	set onBack(value) {
		if (typeof (value) === "function" || value == null) {
			this.#properties.onBack = value;
		}
	}

	set onScrolling(value) {
		if (typeof (value) === "function" || value == null) {
			this.#properties.onScrolling = value;
		}
	}

	#loadHtml() {
		const sel = this.#properties.selector;
		this.#htmlElement = typeof (sel) === "string" && sel !== "" ? document.querySelector(sel) : null;
	}

	#initHtml() {
		this.#loadHtml();
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
		const htmlElement = this.#htmlElement;
		return htmlElement instanceof HTMLElement ? htmlElement.querySelectorAll(".page") : [];
	}

	getPage(target) {
		const index = this.getIndex(target);
		return this.getPages()[index] || null;
	}

	#target2index(target) {
		let index = 0;
		if (typeof (target) === "number" && target > 0) {
			index = target;
		} else if (typeof (target) === "string" && target !== "") {
			Array.from(this.getPages()).every((page, i) => {
				if (page.dataset[this.dataTarget] === target) {
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
		if (typeof (index) === "number" && index > -1) {
			Array.from(this.getPages()).every((page, i) => {
				if (i === index) {
					target = page.dataset[this.dataTarget];
					return false;
				}
				return true;
			});
		} else if (typeof (index) === "string" && index !== "") {
			target = index;
		}
		return target;
	}

	#runTransition(element, property, onEnd) {
		const duration = element instanceof HTMLElement ? parseFloat(getComputedStyle(element).transitionDuration) * 1000 || 0 : 0;
		const finish = () => {
			this.#cancelTransition();
			onEnd();
		};
		const onTransitionEnd = event => {
			if (event.target === element && event.propertyName === property) {
				finish();
			}
		};
		this.#cancelTransition();
		if (duration > 0) {
			const timeout = setTimeout(finish, duration + 50);
			element.addEventListener("transitionend", onTransitionEnd);
			this.#transitionFinish = finish;
			this.#transitionCleanup = () => {
				clearTimeout(timeout);
				element.removeEventListener("transitionend", onTransitionEnd);
				this.#transitionCleanup = null;
				this.#transitionFinish = null;
			};
		} else {
			onEnd();
		}
	}

	#cancelTransition() {
		if (typeof (this.#transitionCleanup) === "function") {
			this.#transitionCleanup();
		}
	}

	#completeTransition() {
		if (typeof (this.#transitionFinish) === "function") {
			this.#transitionFinish();
		}
	}

	init() {
		if (this.getPages().length > 0) {
			const index = this.index || 0;
			const rafThrottle = (fn) => {
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
			this.getPages().forEach((page, i) => {
				if (i === index) {
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
						page.addEventListener(type, rafThrottle(() => {
							const top = page.scrollTop;
							const scroll = top >= 0 ? top : 0;
							page.dataset.scrollPage = scroll;
							if (typeof (this.onScrolling) === "function") {
								this.onScrolling(scroll);
							}
						}), { passive: true });
					});
				}
			});
			this.index = index;
		}
	}

	select(target = 0, onChange = this.onChange, instant = false) {
		const index = this.#target2index(target);
		const inputPage = this.getPage(index);
		if (this.index !== index && inputPage instanceof HTMLElement) {
			target = this.#index2target(index);
			this.#completeTransition();
			const inputIndex = index;
			const outputIndex = this.index;
			const outputPage = this.getPage(this.index);
			const finish = () => {
				if (outputPage !== null) {
					outputPage.classList.remove("selected");
				}
				inputPage.style.removeProperty("visibility");
				this.getPages().forEach((page, i) => {
					if (i !== inputIndex && i !== outputIndex) {
						if (i < index) {
							page.classList.remove("right");
							page.classList.add("left");
						} else if (i > index) {
							page.classList.remove("left");
							page.classList.add("right");
						}
					}
				});
				if (typeof (onChange) === "function") {
					onChange(index, target);
				}
			};
			if (instant) {
				inputPage.classList.add("static");
				if (outputPage !== null) {
					outputPage.classList.add("static");
				}
			}
			inputPage.style.visibility = "visible";
			inputPage.getBoundingClientRect();
			inputPage.classList.remove("left", "right");
			inputPage.classList.add("selected");
			if (outputPage !== null) {
				outputPage.classList.add(this.index < index ? "left" : "right");
			}
			this.#history.push({
				index: this.index,
				target: this.#target
			});
			if (typeof (this.onSelect) === "function") {
				this.onSelect(index, target, this.index, this.#target);
			}
			this.index = index;
			this.#target = this.#index2target(index);
			if (instant) {
				inputPage.getBoundingClientRect();
				inputPage.classList.remove("static");
				if (outputPage !== null) {
					outputPage.classList.remove("static");
				}
				finish();
			} else {
				this.#runTransition(inputPage, "transform", finish);
			}
		}
	}

	setHistory(history = []) {
		if (Array.isArray(history)) {
			this.#history = [];
			history.forEach(item => {
				let index = 0;
				let target = "";
				if (typeof (item) === "number") {
					index = item;
					target = this.#index2target(item);
				} else if (typeof (item) === "string") {
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
			const onChange = this.onChange;
			this.select(back.index, (index, target) => {
				if (typeof (onChange) === "function") {
					onChange(index, target);
				}
				if (typeof (onBack) === "function") {
					onBack(back.index, back.target);
				}
			});
			this.#history.pop();
		}
	}

	reset() {
		if (this.getPages().length > 0) {
			this.select(0, null, true);
			this.index = 0;
			this.#target = null;
		}
	}

	destroy() {
		const htmlElement = this.#htmlElement;
		this.#cancelTransition();
		if (htmlElement instanceof HTMLElement) {
			htmlElement.innerHTML = "";
			htmlElement.remove();
		}
		Object.keys(this.#properties).forEach(name => {
			delete this.#properties[name];
		});
		this.#target = undefined;
		this.#history = undefined;
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

/*
 * @file wui-slider-0.10.js
 * @class WUISlider
 * @version 0.10
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUISlider {

	static version = "0.10";
	static #defaults = {
		selector: ".wui-slider",
		transitionDelay: 200,
		onChange: null
	};

	#properties = {};
	#htmlElement;
	#htmlElements = {
		body: null,
		paging: null
	};
	#index;
	#data;
	#transitionCleanup = null;

	constructor(properties = {}) {
		const defaults = structuredClone(WUISlider.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
		this.#index = null;
		this.#data = [];
		this.#initHtml();
	}

	get selector() {
		return this.#properties.selector;
	}

	get transitionDelay() {
		return this.#properties.transitionDelay;
	}

	get onChange() {
		return this.#properties.onChange;
	}

	set selector(value) {
		if (typeof (value) === "string" && value !== "") {
			this.#properties.selector = value;
		}
	}

	set transitionDelay(value) {
		if (typeof (value) === "number" && value >= 0) {
			this.#properties.transitionDelay = value;
		}
	}

	set onChange(value) {
		if (typeof (value) === "function" || value == null) {
			this.#properties.onChange = value;
		}
	}

	#loadHtml() {
		const sel = this.#properties.selector;
		this.#htmlElement = document.querySelector(sel);
		this.#htmlElements = {
			body: document.querySelector(sel + " > .body"),
			paging: document.querySelector(sel + " > .paging")
		};
	}

	#buildHtml() {
		const { body, paging } = this.#htmlElements;
		if (body instanceof HTMLDivElement) {
			this.#data = [];
			body.querySelectorAll(".slide").forEach((slide, i) => {
				this.#data[i] = {
					slide: slide,
					indicator: document.createElement("div"),
					drag: false,
					dragInitX: null,
					dragDirection: null,
					onDragEnd: null
				};
			});
			if (paging instanceof HTMLDivElement) {
				paging.innerHTML = "";
				this.#data.forEach(item => paging.append(item.indicator));
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

	getBody() {
		return this.#htmlElements.body;
	}

	getIndex() {
		return this.#index;
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
			this.#transitionCleanup = () => {
				clearTimeout(timeout);
				element.removeEventListener("transitionend", onTransitionEnd);
				this.#transitionCleanup = null;
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

	#setPosition(index) {
		const { body } = this.#htmlElements;
		this.#data.forEach((item, i) => {
			item.slide.classList.add("static");
			item.slide.style.transform = i === index ? "none" : `translateX(${Math.sign(i - index) * 100}%)`;
		});
		if (body instanceof HTMLDivElement) {
			void body.offsetWidth;
		}
		this.#data.forEach(item => item.slide.classList.remove("static"));
	}

	#slide(index, step) {
		const htmlElement = this.#htmlElement;
		const { paging } = this.#htmlElements;
		const from = this.#data[this.#index];
		const to = this.#data[index];
		if (htmlElement instanceof HTMLDivElement) {
			htmlElement.style.setProperty("--wui-slider-transition-delay", this.transitionDelay + "ms");
		}
		to.slide.classList.add("static");
		to.slide.style.transform = `translateX(${step * 100}%)`;
		void to.slide.offsetWidth;
		to.slide.classList.remove("static");
		from.slide.style.transform = `translateX(${-step * 100}%)`;
		to.slide.style.transform = "none";
		this.#runTransition(to.slide, "transform", () => {
			this.#index = index;
			if (paging instanceof HTMLDivElement) {
				from.indicator.classList.remove("selected");
				to.indicator.classList.add("selected");
			}
			if (typeof (this.onChange) === "function") {
				this.onChange(index);
			}
		});
	}

	init() {
		const { body, paging } = this.#htmlElements;
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
		this.#index = 0;
		if (body instanceof HTMLDivElement && this.#data.length > 0) {
			this.#setPosition(0);
			if (paging instanceof HTMLDivElement) {
				this.#data[0].indicator.classList.add("selected");
			}
			for (let i = 0; i < this.#data.length; i++) {
				["touchstart", "mousedown"].forEach(type => {
					this.#data[i].slide.addEventListener(type, event => {
						if (!this.#data[i].drag) {
							const initX = (event.type === "touchstart" ? event.touches[0].clientX : event.clientX || event.pageX) - event.target.offsetParent.offsetLeft;
							this.#data[i].drag = Boolean(type === "touchstart" || event.buttons === 1);
							this.#data[i].dragInitX = initX;
							this.#data[i].dragDirection = null;
						}
					});
				});
				["touchmove", "mousemove"].forEach(type => {
					this.#data[i].slide.addEventListener(type, event => {
						if (this.#data[i].drag) {
							const initX = parseFloat(this.#data[i].dragInitX);
							const moveX = (event.type === "touchmove" ? event.touches[0].clientX : event.clientX || event.pageX) - event.target.offsetParent.offsetLeft;
							const diffX = moveX - initX;
							this.#data[i].dragDirection = diffX > 10 ? "right" : diffX < -10 ? "left" : null;
						}
					});
				});
				this.#data[i].onDragEnd = rafThrottle(() => {
					if (typeof (this.#data[i]) === "object" && this.#data[i].drag) {
						this.#data[i].drag = false;
						this.#data[i].dragInitX = null;
						if (this.#data[i].dragDirection === "left" && i < this.#data.length - 1) {
							this.next();
						} else if (this.#data[i].dragDirection === "right" && i > 0) {
							this.prev();
						}
						this.#data[i].dragDirection = null;
					}
				});
				["touchend", "mouseup"].forEach(type => {
					document.addEventListener(type, this.#data[i].onDragEnd, { passive: true });
				});
			}
		}
	}

	prev() {
		if (this.#transitionCleanup === null && this.#index > 0) {
			this.#slide(this.#index - 1, -1);
		}
	}

	next() {
		if (this.#transitionCleanup === null && this.#index < this.#data.length - 1) {
			this.#slide(this.#index + 1, 1);
		}
	}

	go(index) {
		const { paging } = this.#htmlElements;
		if (index >= 0 && index < this.#data.length && index !== this.#index) {
			this.#cancelTransition();
			this.#setPosition(index);
			if (paging instanceof HTMLDivElement) {
				this.#data.forEach((item, i) => item.indicator.classList.toggle("selected", i === index));
			}
			this.#index = index;
		}
	}

	destroy() {
		const htmlElement = this.#htmlElement;
		this.#cancelTransition();
		if (Array.isArray(this.#data)) {
			this.#data.forEach(item => {
				if (typeof item.onDragEnd === "function") {
					document.removeEventListener("touchend", item.onDragEnd);
					document.removeEventListener("mouseup", item.onDragEnd);
				}
			});
		}
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
		this.#index = undefined;
		this.#data = undefined;
	}
}

/*
Generated HTML code:
<div class="wui-slider">
	<div class="body">
		<div class="slide"></div>
		<div class="slide"></div>
		<div class="slide"></div>
	</div>
	<div class="paging dots|lines">
	</div>
</div>
*/

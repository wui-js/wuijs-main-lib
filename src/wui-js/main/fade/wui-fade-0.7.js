/*
 * @file wui-fade-0.7.js
 * @class WUIFade
 * @version 0.7
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUIFade {

	static version = "0.7";

	static defaults = {
		delay: 400,
		display: "block"
	};
	static #transitions = new WeakMap();

	static #initHtmlElement() {
		HTMLElement.prototype.wuiFadein = function (options = {}) {
			const delay = typeof (options.delay) === "number" ? options.delay : WUIFade.defaults.delay;
			const display = typeof (options.display) === "string" ? options.display : WUIFade.defaults.display;
			const force = typeof (options.force) === "boolean" ? options.force : false;
			const htmlElement = this;
			const fading = WUIFade.#transitions.get(htmlElement);
			if (htmlElement.style.display !== display || force || (fading !== undefined && fading.opacity === 0)) {
				htmlElement.style.display = display;
				WUIFade.#runFade(htmlElement, 0, 1, delay, () => {
					if (typeof (options.callback) === "function") {
						options.callback();
					}
				});
			}
		}
		HTMLElement.prototype.wuiFadeout = function (options = {}) {
			const delay = typeof (options.delay) === "number" ? options.delay : WUIFade.defaults.delay;
			const force = typeof (options.force) === "boolean" ? options.force : false;
			const htmlElement = this;
			if (htmlElement.style.display !== "none" || force) {
				WUIFade.#runFade(htmlElement, 1, 0, delay, () => {
					htmlElement.style.display = "none";
					if (typeof (options.callback) === "function") {
						options.callback();
					}
				});
			}
		}
	}

	static #runTransition(element, property, onEnd) {
		const duration = element instanceof HTMLElement ? parseFloat(getComputedStyle(element).transitionDuration) * 1000 || 0 : 0;
		const finish = () => {
			WUIFade.#cancelTransition(element);
			onEnd();
		};
		const onTransitionEnd = event => {
			if (event.target === element && event.propertyName === property) {
				finish();
			}
		};
		WUIFade.#cancelTransition(element);
		if (duration > 0) {
			const timeout = setTimeout(finish, duration + 50);
			element.addEventListener("transitionend", onTransitionEnd);
			WUIFade.#transitions.set(element, {
				cleanup: () => {
					clearTimeout(timeout);
					element.removeEventListener("transitionend", onTransitionEnd);
					WUIFade.#transitions.delete(element);
				}
			});
		} else {
			onEnd();
		}
	}

	static #cancelTransition(element) {
		const fading = WUIFade.#transitions.get(element);
		if (fading !== undefined) {
			fading.cleanup();
		}
	}

	static #runFade(htmlElement, from, to, delay, onEnd) {
		const fading = WUIFade.#transitions.get(htmlElement);
		const transition = fading !== undefined ? fading.transition : htmlElement.style.transition;
		const opacity = fading !== undefined ? getComputedStyle(htmlElement).opacity : from;
		WUIFade.#cancelTransition(htmlElement);
		htmlElement.style.transition = "none";
		htmlElement.style.opacity = opacity;
		void htmlElement.offsetWidth;
		htmlElement.style.transition = `opacity ${delay}ms linear`;
		htmlElement.style.opacity = to;
		WUIFade.#runTransition(htmlElement, "opacity", () => {
			htmlElement.style.transition = transition;
			onEnd();
		});
		if (WUIFade.#transitions.has(htmlElement)) {
			Object.assign(WUIFade.#transitions.get(htmlElement), { opacity: to, transition });
		}
	}

	static {
		this.#initHtmlElement();
	}

	static in(target, options) {
		const element = target instanceof HTMLElement ? target : typeof (target) === "string" ? document.querySelector(target) : null;
		if (element) {
			element.wuiFadein(options);
		}
	}

	static out(target, options) {
		const element = target instanceof HTMLElement ? target : typeof (target) === "string" ? document.querySelector(target) : null;
		if (element) {
			element.wuiFadeout(options);
		}
	}
}

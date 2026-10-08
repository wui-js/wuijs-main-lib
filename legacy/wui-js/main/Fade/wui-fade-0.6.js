/*
 * @file wui-fade-0.6.js
 * @class WUIFade
 * @version 0.6
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUIFade {

	static version = "0.6";

	static defaults = {
		delay: 400,
		display: "block"
	};

	static #initHtmlElement() {
		HTMLElement.prototype.wuiFadein = function (options = {}) {
			const delay = typeof (options.delay) === "number" ? options.delay : WUIFade.defaults.delay;
			const display = typeof (options.display) === "string" ? options.display : WUIFade.defaults.display;
			const force = typeof (options.force) === "boolean" ? options.force : false;
			const htmlElement = this;
			if (htmlElement.style.display !== display || force) {
				const startTime = performance.now();
				htmlElement.style.display = display;
				const tick = now => {
					const step = Math.min((now - startTime) / delay, 1);
					htmlElement.style.opacity = step;
					if (step < 1) {
						requestAnimationFrame(tick);
					} else if (typeof (options.callback) === "function") {
						options.callback();
					}
				}
				requestAnimationFrame(tick);
			}
		}
		HTMLElement.prototype.wuiFadeout = function (options = {}) {
			const delay = typeof (options.delay) === "number" ? options.delay : WUIFade.defaults.delay;
			const force = typeof (options.force) === "boolean" ? options.force : false;
			const htmlElement = this;
			if (htmlElement.style.display !== "none" || force) {
				const startTime = performance.now();
				const tick = now => {
					const step = 1 - Math.min((now - startTime) / delay, 1);
					htmlElement.style.opacity = step;
					if (step > 0) {
						requestAnimationFrame(tick);
					} else {
						htmlElement.style.display = "none";
						if (typeof (options.callback) === "function") {
							options.callback();
						}
					}
				}
				requestAnimationFrame(tick);
			}
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

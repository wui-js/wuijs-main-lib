/*
 * @file wui-tabs-0.6.js
 * @class WUITabs
 * @version 0.6
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUITabs {

	static version = "0.6";
	static #defaults = {
		selector: "",
		layout: "top",
		index: 0
	};

	#properties = {};
	#htmlElement;
	#htmlElements = {
		bar: null,
		body: null
	};

	constructor(properties = {}) {
		const defaults = structuredClone(WUITabs.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
		this.#initHtml();
	}

	get selector() {
		return this.#properties.selector;
	}

	get layout() {
		return this.#properties.layout;
	}

	get index() {
		return this.#properties.index;
	}

	set selector(value) {
		if (typeof (value) === "string" && value !== "") {
			this.#properties.selector = value;
		}
	}

	set layout(value) {
		if (typeof (value) === "string" && value.match(/^(top|bottom)$/i)) {
			this.#properties.layout = value.toLowerCase();
		}
	}

	set index(value) {
		if (typeof (value) === "number") {
			this.#properties.index = value;
		}
	}

	#loadHtml() {
		const sel = this.#properties.selector;
		this.#htmlElement = document.querySelector(sel);
		this.#htmlElements = {
			bar: document.querySelector(sel + " > .bar"),
			body: document.querySelector(sel + " > .body")
		};
	}

	#initHtml() {
		this.#loadHtml();
	}

	getElement() {
		return this.#htmlElement;
	}

	init() {
		const htmlElement = this.#htmlElement;
		const { bar, body } = this.#htmlElements;
		if (htmlElement instanceof HTMLDivElement && bar instanceof HTMLDivElement && body instanceof HTMLDivElement) {
			htmlElement.classList.add(this.layout);
			bar.querySelectorAll(":scope > .tab").forEach(tab => {
				tab.addEventListener("click", event => {
					const index = [...tab.parentElement.children].indexOf(tab);
					this.select(index);
				});
			});
			this.select();
		}
	}

	select(index = 0) {
		const { bar, body } = this.#htmlElements;
		if (bar instanceof HTMLDivElement && body instanceof HTMLDivElement) {
			bar.querySelectorAll(":scope > .tab").forEach((tab, i) => {
				if (i === index) {
					tab.classList.add("selected");
				} else {
					tab.classList.remove("selected");
				}
			});
			body.querySelectorAll(":scope > .page").forEach((page, i) => {
				if (i === index) {
					page.classList.add("selected");
				} else {
					page.classList.remove("selected");
				}
			});
		}
	}

	destroy() {
		const htmlElement = this.#htmlElement;
		if (htmlElement instanceof HTMLDivElement) {
			htmlElement.innerHTML = "";
			htmlElement.remove();
		}
		Object.keys(this.#properties).forEach(name => {
			delete this.#properties[name];
		});
	}
}

/*
Generated HTML code:
<div class="wui-tabs [top|bottom] mobile">
	<div class="bar">
		<div class="tab">
			<div class="icon wui-icon"></div>
			<div class="text"></div>
		</div>
		<div class="tab">
			<div class="icon wui-icon"></div>
			<div class="text"></div>
		</div>
		<div class="tab">
			<div class="icon wui-icon"></div>
			<div class="text"></div>
		</div>
	</div>
	<div class="body">
		<div class="page"></div>
		<div class="page"></div>
		<div class="page"></div>
	</div>
</div>
*/

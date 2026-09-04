/*
 * @file wui-tabs-0.7.js
 * @class WUITabs
 * @version 0.7
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUITabs {

	static version = "0.7";
	static #defaults = {
		selector: "",
		layout: "top",
		index: null,
		dataTarget: "target"
	};

	#properties = {};
	#htmlElement;
	#htmlElements = {
		bar: null,
		body: null
	};
	#target;

	constructor(properties = {}) {
		const defaults = structuredClone(WUITabs.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
		this.#target = null;
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

	get dataTarget() {
		return this.#properties.dataTarget;
	}

	get target() {
		return this.#target;
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

	set dataTarget(value) {
		if (typeof (value) === "string") {
			this.#properties.dataTarget = value;
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

	getIndex(target = this.target) {
		return this.#target2index(target);
	}

	getTarget(index = this.index) {
		return this.#index2target(index);
	}

	getTabs() {
		const { bar } = this.#htmlElements;
		return bar instanceof HTMLDivElement ? bar.querySelectorAll(":scope > .tab") : [];
	}

	getPages() {
		const { body } = this.#htmlElements;
		return body instanceof HTMLDivElement ? body.querySelectorAll(":scope > .page") : [];
	}

	#target2index(target) {
		let index = 0;
		if (typeof (target) === "number" && target > 0) {
			index = target;
		} else if (typeof (target) === "string" && target !== "") {
			Array.from(this.getTabs()).every((tab, i) => {
				if (tab.dataset[this.dataTarget] === target) {
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
			Array.from(this.getTabs()).every((tab, i) => {
				if (i === index) {
					target = tab.dataset[this.dataTarget];
					return true;
				}
				return false;
			});
		} else if (typeof (index) === "string" && index !== "") {
			target = index;
		}
		return target;
	}

	init() {
		const htmlElement = this.#htmlElement;
		const { bar, body } = this.#htmlElements;
		if (htmlElement instanceof HTMLDivElement && bar instanceof HTMLDivElement && body instanceof HTMLDivElement) {
			const index = this.index || 0;
			htmlElement.classList.add(this.layout);
			this.getTabs().forEach(tab => {
				tab.addEventListener("click", event => {
					const i = [...tab.parentElement.children].indexOf(tab);
					this.select(i);
				});
			});
			this.select(index);
		}
	}

	select(target = 0) {
		const { bar, body } = this.#htmlElements;
		if (bar instanceof HTMLDivElement && body instanceof HTMLDivElement) {
			const index = this.#target2index(target);
			this.getTabs().forEach((tab, i) => {
				if (i === index) {
					tab.classList.add("selected");
				} else {
					tab.classList.remove("selected");
				}
			});
			this.getPages().forEach((page, i) => {
				if (i === index) {
					page.classList.add("selected");
				} else {
					page.classList.remove("selected");
				}
			});
			this.index = index;
			this.#target = this.#index2target(index);
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
		this.#target = undefined;
	}
}

/*
Generated HTML code:
<div class="wui-tabs [top|bottom] border[ round]|fill[ round]"">
	<div class="bar">
		<div class="tab" data-target="page1">
			<div class="icon wui-icon"></div>
			<div class="text"></div>
		</div>
		<div class="tab" data-target="page2">
			<div class="icon wui-icon"></div>
			<div class="text"></div>
		</div>
		<div class="tab" data-target="page3">
			<div class="icon wui-icon"></div>
			<div class="text"></div>
		</div>
	</div>
	<div class="body">
		<div class="page[ scroll]"></div>
		<div class="page[ scroll]"></div>
		<div class="page[ scroll]"></div>
	</div>
</div>
*/

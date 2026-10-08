/*
 * @file wui-modal-0.13.js
 * @class WUIModal
 * @version 0.13
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUIModal {

	static version = "0.13";
	static #defaults = {
		selector: "",
		mode: "page",
		slidePosition: "right",
		overlay: true,
		priority: false,
		transitionDelay: 300,
		onStartOpen: null,
		onOpen: null,
		onMaximize: null,
		onScrolling: null,
		onStartClose: null,
		onClose: null,
		onBack: null
	};
	static #instances = [];
	static #history = [];
	static #baseZIndex = 103;

	#properties = {};
	#htmlElement;
	#htmlElements = {
		overlay: null,
		box: null,
		header: null,
		back: null,
		topbar: null,
		title: null,
		close: null,
		body: null,
		footer: null
	};
	#bodyStyle;
	#transitionCleanup = null;
	#drag;
	#dragIinitY;
	#dragDirection;

	static {
		window.addEventListener("resize", () => {
			WUIModal.getOpenInstances().forEach(modal => {
				modal.resposive();
			});
		});
		document.addEventListener("keydown", event => {
			if (event.key === "Escape") {
				WUIModal.getAllInstances().every(modal => {
					const htmlElement = modal.#htmlElement;
					if (htmlElement instanceof HTMLDivElement && htmlElement.classList.contains("opened") && !htmlElement.classList.contains("under")) {
						setTimeout(() => {
							modal.close();
						}, 100);
						return false;
					}
					return true;
				});
			}
		});
	}

	static getAllInstances() {
		return WUIModal.#instances;
	}

	static getOpenInstances() {
		return WUIModal.#instances.filter(modal => modal.isOpen());
	}

	static closeAll(except) {
		WUIModal.getOpenInstances().forEach(modal => {
			if (modal.selector !== except) {
				modal.close();
			}
		});
	}

	constructor(properties = {}) {
		const defaults = structuredClone(WUIModal.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
		WUIModal.#instances.push(this);
		this.#initHtml();
	}

	get selector() {
		return this.#properties.selector;
	}

	get mode() {
		return this.#properties.mode;
	}

	get slidePosition() {
		return this.#properties.slidePosition;
	}

	get overlay() {
		return this.#properties.overlay;
	}

	get priority() {
		return this.#properties.priority;
	}

	get transitionDelay() {
		return this.#properties.transitionDelay;
	}

	get onStartOpen() {
		return this.#properties.onStartOpen;
	}

	get onOpen() {
		return this.#properties.onOpen;
	}

	get onMaximize() {
		return this.#properties.onMaximize;
	}

	get onScrolling() {
		return this.#properties.onScrolling;
	}

	get onStartClose() {
		return this.#properties.onStartClose;
	}

	get onClose() {
		return this.#properties.onClose;
	}

	get onBack() {
		return this.#properties.onBack;
	}

	set selector(value) {
		if (typeof (value) === "string" && value !== "") {
			this.#properties.selector = value;
		}
	}

	set mode(value) {
		if (typeof (value) === "string" && value.match(/^(message|page|smallpage|slidepage)$/i)) {
			this.#properties.mode = value.toLowerCase();
		}
	}

	set slidePosition(value) {
		if (typeof (value) === "string" && value.match(/^(left|right)$/i)) {
			this.#properties.slidePosition = value.toLowerCase();
		}
	}

	set overlay(value) {
		if (typeof (value) === "boolean") {
			this.#properties.overlay = value;
			this.#setStyle();
		}
	}

	set priority(value) {
		if (typeof (value) === "boolean") {
			this.#properties.priority = value;
		}
	}

	set transitionDelay(value) {
		if (typeof (value) === "number") {
			this.#properties.transitionDelay = value;
		}
	}

	set onStartOpen(value) {
		if (typeof (value) === "function" || value === null) {
			this.#properties.onStartOpen = value;
		}
	}

	set onOpen(value) {
		if (typeof (value) === "function" || value === null) {
			this.#properties.onOpen = value;
		}
	}

	set onMaximize(value) {
		if (typeof (value) === "function" || value === null) {
			this.#properties.onMaximize = value;
		}
	}

	set onScrolling(value) {
		if (typeof (value) === "function" || value === null) {
			this.#properties.onScrolling = value;
		}
	}

	set onStartClose(value) {
		if (typeof (value) === "function" || value === null) {
			this.#properties.onStartClose = value;
		}
	}

	set onClose(value) {
		if (typeof (value) === "function" || value === null) {
			this.#properties.onClose = value;
		}
	}

	set onBack(value) {
		if (typeof (value) === "function" || value === null) {
			this.#properties.onBack = value;
		}
	}

	#loadHtml() {
		this.#htmlElement = document.querySelector(this.selector);
		this.#htmlElements = {
			overlay: document.querySelector(this.selector + " > .overlay"),
			box: document.querySelector(this.selector + " > .box"),
			header: document.querySelector(this.selector + " > .box > .header"),
			back: document.querySelector(this.selector + " > .box > .header > .back"),
			topbar: document.querySelector(this.selector + " > .box > .header > .topbar"),
			title: document.querySelector(this.selector + " > .box > .header > .title"),
			close: document.querySelector(this.selector + " > .box > .header > .close"),
			body: document.querySelector(this.selector + " > .box > .body"),
			footer: document.querySelector(this.selector + " > .box > .footer")
		};
	}

	#buildHtml() {
		const htmlElement = this.#htmlElement;
		if (htmlElement instanceof HTMLElement) {
			if (!this.#htmlElements.overlay) {
				this.#htmlElements.overlay = document.createElement("div");
				this.#htmlElements.overlay.classList.add("overlay");
				htmlElement.prepend(this.#htmlElements.overlay);
			}
			if (!this.#htmlElements.box) {
				this.#htmlElements.box = document.createElement("div");
				this.#htmlElements.box.className = "box";
				htmlElement.append(this.#htmlElements.box);
			}
			if (this.mode.match(/page/)) {
				if (!this.#htmlElements.header) {
					this.#htmlElements.header = document.createElement("div");
					this.#htmlElements.header.className = "header";
					this.#htmlElements.box.append(this.#htmlElements.header);
				}
				if (!this.#htmlElements.topbar) {
					this.#htmlElements.topbar = document.createElement("div");
					this.#htmlElements.topbar.className = "topbar";
					this.#htmlElements.header.append(this.#htmlElements.topbar);
				}
				if (!this.#htmlElements.title) {
					this.#htmlElements.title = document.createElement("div");
					this.#htmlElements.title.className = "title";
					this.#htmlElements.header.append(this.#htmlElements.title);
				}
				if (!this.#htmlElements.close) {
					this.#htmlElements.close = document.createElement("div");
					this.#htmlElements.close.className = "close";
					this.#htmlElements.header.append(this.#htmlElements.close);
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

	getBox() {
		return this.#htmlElements.box;
	}

	getHeader() {
		return this.#htmlElements.header;
	}

	getBack() {
		return this.#htmlElements.back;
	}

	getTopbar() {
		return this.#htmlElements.topbar;
	}

	getTitle() {
		return this.#htmlElements.title;
	}

	getClose() {
		return this.#htmlElements.close;
	}

	getBody() {
		return this.#htmlElements.body;
	}

	getFooter() {
		return this.#htmlElements.footer;
	}

	getStatus() {
		const htmlElement = this.#htmlElement;
		const status = [];
		["opened", "maximized", "under", "close"].forEach(className => {
			if (htmlElement.classList.contains(className)) {
				status.push(className);
			}
		});
		return status.join(",");
	}

	setHeadBorder(border) {
		const { header } = this.#htmlElements;
		if (header instanceof HTMLElement) {
			if (border) {
				header.classList.remove("border");
			} else {
				header.classList.add("border");
			}
		}
	}

	#setStyle() {
		const htmlElement = this.#htmlElement;
		if (htmlElement instanceof HTMLElement) {
			htmlElement.classList.toggle("overlay-disabled", !this.overlay);
		}
	}

	#runTransition(element, property, onEnd) {
		const duration = parseFloat(getComputedStyle(this.#htmlElement).transitionDuration) * 1000 || 0;
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
		if (duration > 0 && element instanceof HTMLElement) {
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

	init() {
		const htmlElement = this.#htmlElement;
		const { topbar, back, close, box, body } = this.#htmlElements;
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
		}
		this.#bodyStyle = {};
		if (this.mode.match(/^(message|page)$/)) {
			htmlElement.classList.add(this.mode);
		} else if (this.mode === "smallpage") {
			htmlElement.classList.add("page", "small");
		} else if (this.mode === "slidepage") {
			htmlElement.classList.add("page", "slide");
		}
		if (this.priority) {
			htmlElement.classList.add("priority");
		}
		this.#setStyle();
		if (topbar instanceof HTMLElement) {
			this.#drag = false;
			this.#dragIinitY = null;
			this.#dragDirection = null;
			["touchstart", "mousedown"].forEach(type => {
				topbar.addEventListener(type, event => {
					if (!this.#drag) {
						const initY = (event.type === "touchstart" ? event.touches[0].clientY : event.clientY || event.pageY) - event.target.offsetParent.offsetTop;
						this.#drag = Boolean(type === "touchstart" || event.buttons === 1);
						this.#dragIinitY = initY;
					}
				});
			});
			["touchmove", "mousemove"].forEach(type => {
				topbar.addEventListener(type, event => {
					if (this.#drag) {
						const initY = parseFloat(this.#dragIinitY);
						const moveY = (event.type === "touchmove" ? event.touches[0].clientY : event.clientY || event.pageY) - event.target.offsetParent.offsetTop;
						const diffY = moveY - initY;
						this.#dragDirection = diffY > 10 ? "down" : diffY < -10 ? "top" : null;
					}
				});
			});
			["touchend", "mouseup"].forEach(type => {
				document.addEventListener(type, () => {
					if (this.#drag) {
						this.#drag = false;
						this.#dragIinitY = null;
						if (this.#dragDirection !== null) {
							if (this.#dragDirection === "top") {
								this.maximize();
							} else if (this.#dragDirection === "down") {
								this.close();
							}
							setTimeout(() => {
								this.#dragDirection = null;
							}, 400);
						}
					}
				});
			});
		}
		if (back instanceof HTMLElement) {
			back.addEventListener("click", () => {
				if (typeof (this.onBack) === "function") {
					this.onBack();
				}
			});
		}
		if (close instanceof HTMLElement) {
			close.addEventListener("click", () => {
				this.close();
			});
		}
		if (box instanceof HTMLElement && body instanceof HTMLElement) {
			box.dataset.scrollBody = 0;
			if (body.classList.contains("scroll")) {
				["scroll", "touchmove"].forEach(type => {
					body.addEventListener(type, rafThrottle(() => {
						let top = body.scrollTop;
						if (top < 0) {
							top = 0;
						}
						box.dataset.scrollBody = top;
						if (typeof (this.onScrolling) === "function") {
							this.onScrolling(top);
						}
					}), { passive: true });
				});
			}
		}
	}

	open(onOpen = this.onOpen, delay = this.transitionDelay) {
		if (typeof (this.onStartOpen) === "function" && this.onStartOpen() === false) {
			return;
		}
		const htmlElement = this.#htmlElement;
		const { box } = this.#htmlElements;
		const page = Boolean(htmlElement.classList.contains("page"));
		const small = Boolean(htmlElement.classList.contains("small"));
		const slide = Boolean(htmlElement.classList.contains("slide"));
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		const bodyStyle = getComputedStyle(document.body);
		const openOthers = WUIModal.getOpenInstances();
		const under = openOthers.length > 0 ? openOthers.reduce((top, m) => (parseInt(m.#htmlElement.style.zIndex) || 0) >= (parseInt(top.#htmlElement.style.zIndex) || 0) ? m : top) : null;
		const underHtmlElement = under instanceof WUIModal ? under.#htmlElement : null;
		const underPage = underHtmlElement instanceof HTMLElement && Boolean(underHtmlElement.classList.contains("page"));
		const underSmall = underHtmlElement instanceof HTMLElement && Boolean(underHtmlElement.classList.contains("small"));
		const index = WUIModal.#history.indexOf(this);
		const maxOpenZIndex = openOthers.reduce((max, m) => Math.max(max, parseInt(m.#htmlElement.style.zIndex) || 0), WUIModal.#baseZIndex);
		if (index !== -1) {
			if (index === WUIModal.#history.length - 1) return;
			WUIModal.#history.splice(index, 1);
			htmlElement.classList.remove("under");
		}
		WUIModal.#history.push(this);
		htmlElement.classList.remove("left", "right");
		if (slide) {
			htmlElement.classList.add(this.slidePosition);
		}
		htmlElement.style.setProperty("--wui-modal-transition-delay", delay + "ms");
		htmlElement.style.display = "flex";
		htmlElement.style.zIndex = maxOpenZIndex + 1;
		htmlElement.style.visibility = "visible";
		if (box instanceof HTMLElement) {
			const boxStyle = getComputedStyle(box);
			const scrollbarWidth = window.innerWidth - document.body.clientWidth;
			const scrollbarHeight = window.innerHeight - document.body.clientHeight;
			["overflowY", "overflowX", "background", "backgroundColor", "backgroundImage", "paddingRight", "paddingBottom"].forEach(key => {
				if (mobile || !key.match(/background/)) {
					this.#bodyStyle[key] = bodyStyle[key];
				}
			});
			document.body.style.overflowY = "hidden";
			document.body.style.overflowX = "hidden";
			document.body.style.paddingRight = scrollbarWidth + "px";
			document.body.style.paddingBottom = scrollbarHeight + "px";
			if (page && mobile) {
				document.body.style.backgroundImage = "none";
				document.body.style.backgroundColor = boxStyle.backgroundColor;
			}
		}
		htmlElement.classList.remove("maximized", "closed");
		void htmlElement.offsetWidth;
		htmlElement.classList.add("opened");
		if (page && !small && underPage && !underSmall) {
			underHtmlElement.style.setProperty("--wui-modal-transition-delay", delay + "ms");
			underHtmlElement.classList.add("under");
		}
		this.#runTransition(htmlElement, "opacity", () => {
			if (typeof (onOpen) === "function") {
				onOpen();
			}
		});
	}

	resposive() {
		const htmlElement = this.#htmlElement;
		if (htmlElement.classList.contains("page")) {
			htmlElement.classList.remove("maximized");
		}
	}

	maximize(onMaximize = this.onMaximize, delay = this.transitionDelay) {
		const htmlElement = this.#htmlElement;
		htmlElement.style.setProperty("--wui-modal-transition-delay", (delay / 10) + "ms");
		htmlElement.classList.add("maximized");
		this.#runTransition(this.#htmlElements.box, "top", () => {
			if (typeof (onMaximize) === "function") {
				onMaximize();
			}
		});
	}

	close(onClose = this.onClose, delay = this.transitionDelay) {
		const index = WUIModal.#history.indexOf(this);
		if (index === -1) return;
		if (typeof (this.onStartClose) === "function" && this.onStartClose() === false) {
			return;
		}
		const htmlElement = this.#htmlElement;
		const { topbar, box } = this.#htmlElements;
		const page = Boolean(htmlElement.classList.contains("page"));
		const small = Boolean(htmlElement.classList.contains("small"));
		const under = index > 0 ? WUIModal.#history[index - 1] : null;
		const underHtmlElement = under instanceof WUIModal ? under.#htmlElement : null;
		const underPage = underHtmlElement instanceof HTMLElement && Boolean(underHtmlElement.classList.contains("page"));
		const underSmall = underHtmlElement instanceof HTMLElement && Boolean(underHtmlElement.classList.contains("small"));
		if (page && !small && underPage && !underSmall) {
			underHtmlElement.style.setProperty("--wui-modal-transition-delay", delay + "ms");
			underHtmlElement.classList.remove("under");
		}
		WUIModal.#history.splice(index, 1);
		htmlElement.style.setProperty("--wui-modal-transition-delay", delay + "ms");
		htmlElement.classList.remove("maximized", "opened");
		htmlElement.classList.add("closed");
		if (topbar instanceof HTMLElement) {
			this.#drag = false;
			this.#dragIinitY = null;
		}
		if (box instanceof HTMLElement) {
			Object.keys(this.#bodyStyle).forEach(key => {
				document.body.style[key] = this.#bodyStyle[key];
			});
			box.scrollTop = 0;
		}
		this.#runTransition(htmlElement, "opacity", () => {
			htmlElement.style.display = "none";
			htmlElement.style.visibility = "hidden";
			if (typeof (onClose) === "function") {
				onClose();
			}
		});
	}

	isOpen() {
		return this.getStatus().match(/opened/) ? true : false;
	}

	destroy() {
		const htmlElement = this.#htmlElement;
		this.close();
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
		this.#bodyStyle = undefined;
		this.#drag = undefined;
		this.#dragIinitY = undefined;
		this.#dragDirection = undefined;
	}
}

/*
modal message HTML code:
<div class="wui-modal">
	<div class="box">
		<div class="body">
			<div class="icon"></div>
			<div class="text"></div>
		</div>
		<div class="footer">
			<button></button>
			<button></button>
		</div>
	</div>
</div>

modal page HTML code:
<div class="wui-modal">
	<div class="box">
		<div class="header">
			<div class="back">
				<div class="icon wui-icon arrowhead-left-line"></div>
				<div class="text"></div>
			</div>
			<div class="topbar"></div>
			<div class="title"></div>
			<div class="close wui-icon close-lg-line"></div>
		</div>
		<div class="body"></div>
		<div class="footer"></div>
	</div>
</div>
*/

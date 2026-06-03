/*
 * @file wui-modal-0.7.js
 * @class WUIModal
 * @version 0.7
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUIModal {

	static version = "0.7";
	static #defaults = {
		selector: "",
		openDelay: 200,
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
	#animationInterval = null;
	#drag;
	#dragIinitY;
	#dragDirection;
	#boxWidth;
	#boxHeight;
	#boxTop;

	static _initClass() {
		window.addEventListener("resize", () => {
			WUIModal.getOpenInstances().forEach(modal => {
				modal.resposive();
			});
		});
		document.addEventListener("keydown", event => {
			if (event.key === "Escape") {
				WUIModal.getAllInstances().every(modal => {
					const classList = modal.#htmlElement.classList;
					if (classList.contains("opened") && !classList.contains("under")) {
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
		this.#initHTML();
	}

	get selector() {
		return this.#properties.selector;
	}

	get openDelay() {
		return this.#properties.openDelay;
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

	set openDelay(value) {
		if (typeof (value) === "number") {
			this.#properties.openDelay = value;
		}
	}

	set onStartOpen(value) {
		if (typeof (value) === "function" || value == null) {
			this.#properties.onStartOpen = value;
		}
	}

	set onOpen(value) {
		if (typeof (value) === "function" || value == null) {
			this.#properties.onOpen = value;
		}
	}

	set onMaximize(value) {
		if (typeof (value) === "function" || value == null) {
			this.#properties.onMaximize = value;
		}
	}

	set onScrolling(value) {
		if (typeof (value) === "function" || value == null) {
			this.#properties.onScrolling = value;
		}
	}

	set onStartClose(value) {
		if (typeof (value) === "function" || value == null) {
			this.#properties.onStartClose = value;
		}
	}

	set onClose(value) {
		if (typeof (value) === "function" || value == null) {
			this.#properties.onClose = value;
		}
	}

	set onBack(value) {
		if (typeof (value) === "function" || value == null) {
			this.#properties.onBack = value;
		}
	}

	#loadHTML() {
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

	#buildHTML() {
		if (this.#htmlElement instanceof HTMLElement) {
			if (!this.#htmlElements.overlay) {
				this.#htmlElements.overlay = document.createElement("div");
				this.#htmlElements.overlay.classList.add("overlay");
				this.#htmlElement.prepend(this.#htmlElements.overlay);
			}
			if (!this.#htmlElements.box) {
				this.#htmlElements.box = document.createElement("div");
				this.#htmlElements.box.className = "box";
				this.#htmlElement.appendChild(this.#htmlElements.box);
			}
		}
	}

	#initHTML() {
		this.#loadHTML();
		this.#buildHTML();
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
		let status = [];
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

	init() {
		const htmlElement = this.#htmlElement;
		const { topbar, back, close, box, body } = this.#htmlElements;
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
		}
		this.#bodyStyle = {};
		if (navigator.userAgent.match(/iphone|ipad|android/i) && navigator.maxTouchPoints > 1) {
			htmlElement.classList.add("mobile");
		}
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
					body.addEventListener(type, debounce(() => {
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

	resposive() {
		const htmlElement = this.#htmlElement;
		const { box } = this.#htmlElements;
		const page = Boolean(htmlElement.classList.contains("page"));
		const slide = Boolean(htmlElement.classList.contains("slide"));
		const small = Boolean(htmlElement.classList.contains("small"));
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		const bodyHeight = document.body.offsetHeight;
		const slideMargin = parseInt(getComputedStyle(htmlElement).getPropertyValue("--wui-modal-slidepage-box-margin").replace(/\D+/g, "") || 0);
		const mobileMargin = parseInt(getComputedStyle(htmlElement).getPropertyValue("--wui-modal-mobile-page-box-topmargin").replace(/\D+/g, "") || 0);
		if (box instanceof HTMLElement && page) {
			htmlElement.classList.remove("maximized");
			box.style.top = mobile ? "calc(44px + " + mobileMargin + "px)" : slide ? slideMargin + "px" : small ? (bodyHeight - this.#boxHeight) + "px" : "auto";
			box.style.left = mobile ? "0px" : "auto";
			box.style.right = mobile ? "0px" : slide ? slideMargin + "px" : "auto";
			box.style.bottom = mobile ? "0px" : slide ? slideMargin + "px" : "auto";
			box.style.width = mobile ? "auto" : "var(--wui-modal-" + (small ? "small" : "") + "page-box-width)";
			box.style.height = mobile || slide ? "auto" : "var(--wui-modal-" + (small ? "small" : "") + "page-box-height)";
		}
	}

	open(onOpen = this.onOpen, delay = this.openDelay) {
		if (this.#animationInterval) {
			clearInterval(this.#animationInterval);
			this.#animationInterval = null;
		}
		const htmlElement = this.#htmlElement;
		const { box } = this.#htmlElements;
		const page = Boolean(htmlElement.classList.contains("page"));
		const slide = Boolean(htmlElement.classList.contains("slide"));
		const small = Boolean(htmlElement.classList.contains("small"));
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		const bodyHeight = document.body.offsetHeight;
		const bodyStyle = getComputedStyle(document.body);
		const slideMargin = parseInt(getComputedStyle(htmlElement).getPropertyValue("--wui-modal-slidepage-box-margin").replace(/\D+/g, "") || 0);
		const mobileMargin = parseInt(getComputedStyle(htmlElement).getPropertyValue("--wui-modal-mobile-page-box-topmargin").replace(/\D+/g, "") || 0);
		const openOthers = WUIModal.getOpenInstances();
		const under = openOthers.length > 0 ? openOthers.reduce((top, m) => (parseInt(m.#htmlElement.style.zIndex) || 0) >= (parseInt(top.#htmlElement.style.zIndex) || 0) ? m : top) : null;
		const index = WUIModal.#history.indexOf(this);
		const maxOpenZIndex = openOthers.reduce((max, m) => Math.max(max, parseInt(m.#htmlElement.style.zIndex) || 0), WUIModal.#baseZIndex);
		let step = delay > 0 ? 0 : 100;
		if (index !== -1) {
			if (index === WUIModal.#history.length - 1) return;
			WUIModal.#history.splice(index, 1);
			htmlElement.classList.remove("under");
		}
		if (under) {
			under.#htmlElement.classList.add("under");
			const { overlay: underOverlay } = under.#htmlElements;
			if (underOverlay instanceof HTMLElement) {
				underOverlay.style.opacity = 1;
			}
		}
		WUIModal.#history.push(this);
		htmlElement.style.display = "flex";
		htmlElement.style.zIndex = maxOpenZIndex + 1;
		htmlElement.style.visibility = "hidden";
		htmlElement.style.opacity = 0;
		htmlElement.style.visibility = "visible";
		htmlElement.classList.remove("maximized");
		htmlElement.classList.remove("closed");
		htmlElement.classList.add("opened");
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
			if (page) {
				box.style.top = mobile ? "100%" : slide ? slideMargin + "px" : "auto";
				box.style.left = mobile ? "0px" : "auto";
				box.style.right = mobile ? "0px" : slide ? slideMargin + "px" : "auto";
				box.style.bottom = mobile ? "0px" : slide ? slideMargin + "px" : "auto";
				box.style.width = mobile ? "auto" : "var(--wui-modal-" + (small ? "small" : "") + "page-box-width)";
				box.style.height = mobile || slide ? "auto" : "var(--wui-modal-" + (small ? "small" : "") + "page-box-height)";
				this.#boxWidth = box.clientWidth;
				this.#boxHeight = box.clientHeight;
			}
			if (page && mobile) {
				document.body.style.backgroundImage = "none";
				document.body.style.backgroundColor = boxStyle.backgroundColor;
			}
		}
		if (typeof (this.onStartOpen) === "function") {
			this.onStartOpen();
		}
		this.#animationInterval = setInterval(() => {
			const t = step / 100;
			let ease = t > 0.5 ? 4 * Math.pow((t - 1), 3) + 1 : 4 * Math.pow(t, 3);
			if (ease >= 1) {
				clearInterval(this.#animationInterval);
				this.#animationInterval = null;
				ease = 1;
			}
			htmlElement.style.opacity = ease === 1 ? null : ease;
			if (box instanceof HTMLElement && page) {
				if (!mobile && slide) {
					box.style.right = (this.#boxWidth * (ease - 1) + slideMargin) + "px";
				} else if (mobile) {
					if (small) {
						box.style.top = (bodyHeight - this.#boxHeight * ease) + "px";
					} else {
						box.style.top = (bodyHeight - (bodyHeight - (44 + mobileMargin)) * ease) + "px";
					}
				}
			}
			if (under instanceof WUIModal) {
				const underPage = Boolean(under.#htmlElement.classList.contains("page"));
				const underSlide = Boolean(under.#htmlElement.classList.contains("slide"));
				const underMaximized = Boolean(under.#htmlElement.classList.contains("maximized"));
				const { overlay: underOverlay, box: underBox } = under.#htmlElements;
				underOverlay.style.opacity = (1 - ease);
				if (underBox instanceof HTMLElement && underPage && page) {
					if (!mobile && underSlide) {
						// ...
					} else if (mobile && !underMaximized) {
						underBox.style.top = (mobileMargin + 44 * (1 - 1.7 * ease)) + "px";
						underBox.style.scale = (1 - ease / 10);
					}
				}
			}
			if (ease === 1 && typeof (onOpen) === "function") {
				onOpen();
			}
			step++;
		}, delay / 100);
	}

	maximize(onMaximize = this.onMaximize, delay = this.openDelay) {
		const htmlElement = this.#htmlElement;
		const { box } = this.#htmlElements;
		const page = Boolean(htmlElement.classList.contains("page"));
		const slide = Boolean(htmlElement.classList.contains("slide"));
		const maximized = Boolean(htmlElement.classList.contains("maximized"));
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		const mobileMargin = parseInt(getComputedStyle(htmlElement).getPropertyValue("--wui-modal-mobile-page-box-topmargin").replace(/\D+/g, "") || 0);
		let step = 10;
		htmlElement.classList.add("maximized");
		this.#boxTop = box instanceof HTMLElement ? box.offsetTop : 0;
		const interval = setInterval(() => {
			const t = step / 10;
			let ease = t > 0.5 ? 4 * Math.pow((t - 1), 3) + 1 : 4 * Math.pow(t, 3);
			if (ease <= 0) {
				clearInterval(interval);
				ease = 0;
			}
			if (box instanceof HTMLElement && page) {
				if (!mobile && slide) {
					// ...
				} else if (mobile && !maximized) {
					box.style.top = (mobileMargin + this.#boxTop * ease) + "px";
				}
			}
			if (ease === 0 && typeof (onMaximize) === "function") {
				onMaximize();
			}
			step--;
		}, delay / 100);
	}

	close(onClose = this.onClose, delay = this.openDelay) {
		const idx = WUIModal.#history.indexOf(this);
		if (idx === -1) return;
		if (this.#animationInterval) {
			clearInterval(this.#animationInterval);
			this.#animationInterval = null;
		}
		const htmlElement = this.#htmlElement;
		const { topbar, box } = this.#htmlElements;
		const page = Boolean(htmlElement.classList.contains("page"));
		const slide = Boolean(htmlElement.classList.contains("slide"));
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		const bodyHeight = document.body.offsetHeight;
		const slideMargin = parseInt(getComputedStyle(htmlElement).getPropertyValue("--wui-modal-slidepage-box-margin").replace(/\D+/g, "") || 0);
		const mobileMargin = parseInt(getComputedStyle(htmlElement).getPropertyValue("--wui-modal-mobile-page-box-topmargin").replace(/\D+/g, "") || 0);
		const under = idx > 0 ? WUIModal.#history[idx - 1] : null;
		let step = delay > 0 ? 100 : 0;
		if (under) {
			under.#htmlElement.classList.remove("under");
			const { overlay: underOverlay } = under.#htmlElements;
			if (underOverlay instanceof HTMLElement) {
				underOverlay.style.opacity = 0;
			}
		}
		WUIModal.#history.splice(idx, 1);
		if (typeof (this.onStartClose) === "function") {
			this.onStartClose();
		}
		htmlElement.classList.remove("maximized");
		htmlElement.classList.remove("opened");
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
			this.#boxWidth = box.clientWidth;
			this.#boxHeight = box.clientHeight;
		}
		this.#animationInterval = setInterval(() => {
			const t = step / 100;
			let ease = t > 0.5 ? 4 * Math.pow((t - 1), 3) + 1 : 4 * Math.pow(t, 3);
			if (ease <= 0) {
				clearInterval(this.#animationInterval);
				this.#animationInterval = null;
				ease = 0;
			}
			if (ease === 0) {
				htmlElement.style.display = "none";
				htmlElement.style.visibility = "hidden";
			}
			htmlElement.style.opacity = ease;
			if (box instanceof HTMLElement && page) {
				if (!mobile && slide) {
					box.style.right = (this.#boxWidth * (ease - 1) + slideMargin) + "px";
				} else if (mobile) {
					box.style.top = (bodyHeight - this.#boxHeight * ease) + "px";
				}
			}
			if (under instanceof WUIModal) {
				const underPage = Boolean(under.#htmlElement.classList.contains("page"));
				const underSlide = Boolean(under.#htmlElement.classList.contains("slide"));
				const underMaximized = Boolean(under.#htmlElement.classList.contains("maximized"));
				const { overlay: underOverlay, box: underBox } = under.#htmlElements;
				underOverlay.style.opacity = (1 - ease);
				if (underBox instanceof HTMLElement && underPage && page) {
					if (!mobile && underSlide) {
						// ...
					} else if (mobile && !underMaximized) {
						underBox.style.top = (mobileMargin + 44 * (1 - 1.7 * ease)) + "px";
						underBox.style.scale = (1 - ease / 10);
					}
				}
			}
			if (ease === 0 && typeof (onClose) === "function") {
				onClose();
			}
			step--;
		}, delay / 100);
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
		this.#boxWidth = undefined;
		this.#boxHeight = undefined;
		this.#boxTop = undefined;
	}
}

WUIModal._initClass();

/*
modal message HTML code:
<div class="wui-modal message [priority]">
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
<div class="wui-modal page [slide|small] [priority]">
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

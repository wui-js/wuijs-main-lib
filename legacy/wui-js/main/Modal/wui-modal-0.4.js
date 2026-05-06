/*
 * @file wui-modal-0.4.js
 * @class WUIModal
 * @version 0.4
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUIModal {

	static version = "0.4";
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
			if (event.key == "Escape") {
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
			if (modal.selector != except) {
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
		if (typeof (value) == "string" && value != "") {
			this.#properties.selector = value;
			this.#initHTML();
		}
	}

	set openDelay(value) {
		if (typeof (value) == "number") {
			this.#properties.openDelay = value;
		}
	}

	set onStartOpen(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onStartOpen = value;
		}
	}

	set onOpen(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onOpen = value;
		}
	}

	set onMaximize(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onMaximize = value;
		}
	}

	set onScrolling(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onScrolling = value;
		}
	}

	set onStartClose(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onStartClose = value;
		}
	}

	set onClose(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onClose = value;
		}
	}

	set onBack(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onBack = value;
		}
	}

	#initHTML() {
		this.#loadHTML();
		if (this.#htmlElement instanceof HTMLElement) {
			if (!this.#htmlElements.overlay) {
				this.#htmlElements.overlay = document.createElement("div");
				this.#htmlElements.overlay.classList.add("overlay");
				this.#htmlElement.prepend(this.#htmlElements.overlay);
			}
		}
	}

	#loadHTML() {
		this.#htmlElement = document.querySelector(this.selector);
		this.#htmlElements.overlay = document.querySelector(this.selector + " > .overlay");
		this.#htmlElements.box = document.querySelector(this.selector + " > .box");
		this.#htmlElements.header = document.querySelector(this.selector + " > .box > .header");
		this.#htmlElements.back = document.querySelector(this.selector + " > .box > .header > .back");
		this.#htmlElements.topbar = document.querySelector(this.selector + " > .box > .header > .topbar");
		this.#htmlElements.title = document.querySelector(this.selector + " > .box > .header > .title");
		this.#htmlElements.close = document.querySelector(this.selector + " > .box > .header > .close");
		this.#htmlElements.body = document.querySelector(this.selector + " > .box > .body");
		this.#htmlElements.footer = document.querySelector(this.selector + " > .box > .footer");
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
		let status = [];
		["opened", "maximized", "under", "close"].forEach(className => {
			if (this.#htmlElement.classList.contains(className)) {
				status.push(className);
			}
		});
		return status.join(",");
	}

	setHeadBorder(border) {
		if (this.#htmlElements.header instanceof HTMLElement) {
			if (border) {
				this.#htmlElements.header.classList.remove("border");
			} else {
				this.#htmlElements.header.classList.add("border");
			}
		}
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
		}
		this.#initHTML();
		this.#bodyStyle = {};
		if (navigator.userAgent.match(/iphone|ipad|android/i) && navigator.maxTouchPoints > 1) {
			this.#htmlElement.classList.add("mobile");
		}
		if (this.#htmlElements.topbar instanceof HTMLElement) {
			this.#drag = false;
			this.#dragIinitY = null;
			this.#dragDirection = null;
			["touchstart", "mousedown"].forEach(type => {
				this.#htmlElements.topbar.addEventListener(type, event => {
					if (!this.#drag) {
						const initY = (event.type == "touchstart" ? event.touches[0].clientY : event.clientY || event.pageY) - event.target.offsetParent.offsetTop;
						this.#drag = Boolean(type == "touchstart" || event.buttons == 1);
						this.#dragIinitY = initY;
					}
				});
			});
			["touchmove", "mousemove"].forEach(type => {
				this.#htmlElements.topbar.addEventListener(type, event => {
					if (this.#drag) {
						const initY = parseFloat(this.#dragIinitY);
						const moveY = (event.type == "touchmove" ? event.touches[0].clientY : event.clientY || event.pageY) - event.target.offsetParent.offsetTop;
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
						if (this.#dragDirection != null) {
							if (this.#dragDirection == "top") {
								this.maximize();
							} else if (this.#dragDirection == "down") {
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
		if (this.#htmlElements.back instanceof HTMLElement) {
			this.#htmlElements.back.addEventListener("click", () => {
				if (typeof (this.#properties.onBack) == "function") {
					this.#properties.onBack();
				}
			});
		}
		if (this.#htmlElements.close instanceof HTMLElement) {
			this.#htmlElements.close.addEventListener("click", () => {
				this.close();
			});
		}
		if (this.#htmlElements.box instanceof HTMLElement && this.#htmlElements.body instanceof HTMLElement) {
			this.#htmlElements.box.dataset.scrollBody = 0;
			if (this.#htmlElements.body.classList.contains("scroll")) {
				["scroll", "touchmove"].forEach(type => {
					this.#htmlElements.body.addEventListener(type, debounce(() => {
						let top = this.#htmlElements.body.scrollTop;
						if (top < 0) {
							top = 0;
						}
						this.#htmlElements.box.dataset.scrollBody = top;
						if (typeof (this.#properties.onScrolling) == "function") {
							this.#properties.onScrolling(top);
						}
					}), { passive: true });
				});
			}
		}
	}

	open(onOpen = this.#properties.onOpen, delay = this.#properties.openDelay) {
		if (this.#animationInterval) {
			clearInterval(this.#animationInterval);
			this.#animationInterval = null;
		}
		const page = Boolean(this.#htmlElement.classList.contains("page"));
		const slide = Boolean(this.#htmlElement.classList.contains("slide"));
		const small = Boolean(this.#htmlElement.classList.contains("small"));
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		const bodyHeight = document.body.offsetHeight;
		const bodyStyle = getComputedStyle(document.body);
		const slideMargin = parseInt(getComputedStyle(this.#htmlElement).getPropertyValue("--wui-modal-slidepage-box-margin").replace(/\D+/g, "") || 0);
		const mobileMargin = parseInt(getComputedStyle(this.#htmlElement).getPropertyValue("--wui-modal-mobile-page-box-topmargin").replace(/\D+/g, "") || 0);
		const openOthers = WUIModal.getOpenInstances();
		const under = openOthers.length > 0 ? openOthers.reduce((top, m) => (parseInt(m.#htmlElement.style.zIndex) || 0) >= (parseInt(top.#htmlElement.style.zIndex) || 0) ? m : top) : null;
		const index = WUIModal.#history.indexOf(this);
		const maxOpenZIndex = openOthers.reduce((max, m) => Math.max(max, parseInt(m.#htmlElement.style.zIndex) || 0), WUIModal.#baseZIndex);
		let step = delay > 0 ? 0 : 100;
		if (index !== -1) {
			if (index === WUIModal.#history.length - 1) return;
			WUIModal.#history.splice(index, 1);
			this.#htmlElement.classList.remove("under");
		}
		if (under) {
			under.#htmlElement.classList.add("under");
			if (under.#htmlElements.overlay instanceof HTMLElement) {
				under.#htmlElements.overlay.style.opacity = 1;
			}
		}
		WUIModal.#history.push(this);
		this.#htmlElement.style.display = "flex";
		this.#htmlElement.style.zIndex = maxOpenZIndex + 1;
		this.#htmlElement.style.visibility = "hidden";
		this.#htmlElement.style.opacity = 0;
		this.#htmlElement.style.visibility = "visible";
		this.#htmlElement.classList.remove("maximized");
		this.#htmlElement.classList.remove("closed");
		this.#htmlElement.classList.add("opened");
		if (this.#htmlElements.box instanceof HTMLElement) {
			const boxStyle = getComputedStyle(this.#htmlElements.box);
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
				this.#htmlElements.box.style.top = mobile ? "100%" : slide ? slideMargin + "px" : "auto";
				this.#htmlElements.box.style.left = mobile ? "0px" : "auto";
				this.#htmlElements.box.style.right = mobile ? "0px" : "auto";
				this.#htmlElements.box.style.bottom = mobile ? "0px" : slide ? slideMargin + "px" : "auto";
				this.#htmlElements.box.style.width = mobile ? "auto" : "var(--wui-modal-" + (small ? "small" : "") + "page-box-width)";
				this.#htmlElements.box.style.height = mobile || slide ? "auto" : "var(--wui-modal-" + (small ? "small" : "") + "page-box-height)";
				this.#boxWidth = this.#htmlElements.box.clientWidth;
				this.#boxHeight = this.#htmlElements.box.clientHeight;
			}
			if (page && mobile) {
				document.body.style.backgroundImage = "none";
				document.body.style.backgroundColor = boxStyle.backgroundColor;
			}
		}
		if (typeof (this.#properties.onStartOpen) == "function") {
			this.#properties.onStartOpen();
		}
		this.#animationInterval = setInterval(() => {
			const t = step / 100;
			let ease = t > 0.5 ? 4 * Math.pow((t - 1), 3) + 1 : 4 * Math.pow(t, 3);
			if (ease >= 1) {
				clearInterval(this.#animationInterval);
				this.#animationInterval = null;
				ease = 1;
			}
			this.#htmlElement.style.opacity = ease == 1 ? null : ease;
			if (this.#htmlElements.box instanceof HTMLElement && page) {
				if (!mobile && slide) {
					this.#htmlElements.box.style.right = (this.#boxWidth * (ease - 1) + slideMargin) + "px";
				} else if (mobile) {
					if (small) {
						this.#htmlElements.box.style.top = (bodyHeight - this.#boxHeight * ease) + "px";
					} else {
						this.#htmlElements.box.style.top = (bodyHeight - (bodyHeight - (44 + mobileMargin)) * ease) + "px";
					}
				}
			}
			if (under instanceof WUIModal) {
				const underPage = Boolean(under.#htmlElement.classList.contains("page"));
				const underSlide = Boolean(under.#htmlElement.classList.contains("slide"));
				const underMaximized = Boolean(under.#htmlElement.classList.contains("maximized"));
				under.#htmlElements.overlay.style.opacity = (1 - ease);
				if (under.#htmlElements.box instanceof HTMLElement && underPage && page) {
					if (!mobile && underSlide) {
						// ...
					} else if (mobile && !underMaximized) {
						under.#htmlElements.box.style.top = (mobileMargin + 44 * (1 - 1.7 * ease)) + "px";
						under.#htmlElements.box.style.scale = (1 - ease / 10);
					}
				}
			}
			if (ease == 1 && typeof (onOpen) == "function") {
				onOpen();
			}
			step++;
		}, delay / 100);
	}

	resposive() {
		const page = Boolean(this.#htmlElement.classList.contains("page"));
		const slide = Boolean(this.#htmlElement.classList.contains("slide"));
		const small = Boolean(this.#htmlElement.classList.contains("small"));
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		const bodyHeight = document.body.offsetHeight;
		const slideMargin = parseInt(getComputedStyle(this.#htmlElement).getPropertyValue("--wui-modal-slidepage-box-margin").replace(/\D+/g, "") || 0);
		const mobileMargin = parseInt(getComputedStyle(this.#htmlElement).getPropertyValue("--wui-modal-mobile-page-box-topmargin").replace(/\D+/g, "") || 0);
		if (this.#htmlElements.box instanceof HTMLElement && page) {
			this.#htmlElement.classList.remove("maximized");
			this.#htmlElements.box.style.top = mobile ? "calc(44px + " + mobileMargin + "px)" : slide ? slideMargin + "px" : small ? (bodyHeight - this.#boxHeight) + "px" : "auto";
			this.#htmlElements.box.style.left = mobile ? "0px" : "auto";
			this.#htmlElements.box.style.right = mobile ? "0px" : slide ? slideMargin + "px" : "auto";
			this.#htmlElements.box.style.bottom = mobile ? "0px" : slide ? slideMargin + "px" : "auto";
			this.#htmlElements.box.style.width = mobile ? "auto" : "var(--wui-modal-" + (small ? "small" : "") + "page-box-width)";
			this.#htmlElements.box.style.height = mobile || slide ? "auto" : "var(--wui-modal-" + (small ? "small" : "") + "page-box-height)";
		}
	}

	maximize(onMaximize = this.#properties.onMaximize, delay = this.#properties.openDelay) {
		const page = Boolean(this.#htmlElement.classList.contains("page"));
		const slide = Boolean(this.#htmlElement.classList.contains("slide"));
		const maximized = Boolean(this.#htmlElement.classList.contains("maximized"));
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		const mobileMargin = parseInt(getComputedStyle(this.#htmlElement).getPropertyValue("--wui-modal-mobile-page-box-topmargin").replace(/\D+/g, "") || 0);
		let step = 10;
		this.#htmlElement.classList.add("maximized");
		this.#boxTop = this.#htmlElements.box instanceof HTMLElement ? this.#htmlElements.box.offsetTop : 0;
		const interval = setInterval(() => {
			const t = step / 10;
			let ease = t > 0.5 ? 4 * Math.pow((t - 1), 3) + 1 : 4 * Math.pow(t, 3);
			if (ease <= 0) {
				clearInterval(interval);
				ease = 0;
			}
			if (this.#htmlElements.box instanceof HTMLElement && page) {
				if (!mobile && slide) {
					// ...
				} else if (mobile && !maximized) {
					this.#htmlElements.box.style.top = (mobileMargin + this.#boxTop * ease) + "px";
				}
			}
			if (ease == 0 && typeof (onMaximize) == "function") {
				onMaximize();
			}
			step--;
		}, delay / 100);
	}

	close(onClose = this.#properties.onClose, delay = this.#properties.openDelay) {
		const idx = WUIModal.#history.indexOf(this);
		if (idx === -1) return;
		if (this.#animationInterval) {
			clearInterval(this.#animationInterval);
			this.#animationInterval = null;
		}
		const page = Boolean(this.#htmlElement.classList.contains("page"));
		const slide = Boolean(this.#htmlElement.classList.contains("slide"));
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		const bodyHeight = document.body.offsetHeight;
		const slideMargin = parseInt(getComputedStyle(this.#htmlElement).getPropertyValue("--wui-modal-slidepage-box-margin").replace(/\D+/g, "") || 0);
		const mobileMargin = parseInt(getComputedStyle(this.#htmlElement).getPropertyValue("--wui-modal-mobile-page-box-topmargin").replace(/\D+/g, "") || 0);
		const under = idx > 0 ? WUIModal.#history[idx - 1] : null;
		let step = delay > 0 ? 100 : 0;
		if (under) {
			under.#htmlElement.classList.remove("under");
			if (under.#htmlElements.overlay instanceof HTMLElement) {
				under.#htmlElements.overlay.style.opacity = 0;
			}
		}
		WUIModal.#history.splice(idx, 1);
		if (typeof (this.#properties.onStartClose) == "function") {
			this.#properties.onStartClose();
		}
		this.#htmlElement.classList.remove("maximized");
		this.#htmlElement.classList.remove("opened");
		this.#htmlElement.classList.add("closed");
		if (this.#htmlElements.topbar instanceof HTMLElement) {
			this.#drag = false;
			this.#dragIinitY = null;
		}
		if (this.#htmlElements.box instanceof HTMLElement) {
			Object.keys(this.#bodyStyle).forEach(key => {
				document.body.style[key] = this.#bodyStyle[key];
			});
			this.#htmlElements.box.scrollTop = 0;
			this.#boxWidth = this.#htmlElements.box.clientWidth;
			this.#boxHeight = this.#htmlElements.box.clientHeight;
		}
		this.#animationInterval = setInterval(() => {
			const t = step / 100;
			let ease = t > 0.5 ? 4 * Math.pow((t - 1), 3) + 1 : 4 * Math.pow(t, 3);
			if (ease <= 0) {
				clearInterval(this.#animationInterval);
				this.#animationInterval = null;
				ease = 0;
			}
			if (ease == 0) {
				this.#htmlElement.style.display = "none";
				this.#htmlElement.style.visibility = "hidden";
			}
			this.#htmlElement.style.opacity = ease;
			if (this.#htmlElements.box instanceof HTMLElement && page) {
				if (!mobile && slide) {
					this.#htmlElements.box.style.right = (this.#boxWidth * (ease - 1) + slideMargin) + "px";
				} else if (mobile) {
					this.#htmlElements.box.style.top = (bodyHeight - this.#boxHeight * ease) + "px";
				}
			}
			if (under instanceof WUIModal) {
				const underPage = Boolean(under.#htmlElement.classList.contains("page"));
				const underSlide = Boolean(under.#htmlElement.classList.contains("slide"));
				const underMaximized = Boolean(under.#htmlElement.classList.contains("maximized"));
				under.#htmlElements.overlay.style.opacity = (1 - ease);
				if (under.#htmlElements.box instanceof HTMLElement && underPage && page) {
					if (!mobile && underSlide) {
						// ...
					} else if (mobile && !underMaximized) {
						under.#htmlElements.box.style.top = (mobileMargin + 44 * (1 - 1.7 * ease)) + "px";
						under.#htmlElements.box.style.scale = (1 - ease / 10);
					}
				}
			}
			if (ease == 0 && typeof (onClose) == "function") {
				onClose();
			}
			step--;
		}, delay / 100);
	}

	isOpen() {
		return this.getStatus().match(/opened/) ? true : false;
	}

	destroy() {
		this.close();
		if (this.#htmlElement instanceof HTMLElement) {
			Object.entries(this.#htmlElements).forEach(([key, element]) => {
				if (element) {
					element.remove();
				}
				this.#htmlElements[key] = null;
			});
			this.#htmlElement.innerHTML = "";
			this.#htmlElement.remove();
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

/*
 * @file wui-avatarpicker-0.1.js
 * @class WUIAvatarpicker
 * @version 0.1
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUIAvatarpicker {

	static version = "0.1";
	static #defaults = {
		selector: ".wui-avatarpicker",
		name: "",
		size: 180,
		source: "",
		params: {},
		minImageSize: 180,
		maxFileSize: 10485760,
		enabled: true,
		onRequirePermission: null,
		onInvalid: null,
		onLoad: null
	};
	static #icons = {
		"button-import": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor'><path d='M2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zM1.633 7a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7z'/></svg>",
		"button-clear": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='currentColor'><path d='M490.667,85.333H448h-68.693l-7.019-28.075C363.883,23.552,333.717,0,298.965,0h-85.931 c-34.752,0-64.917,23.552-73.323,57.259l-7.019,28.075H64H21.333C9.536,85.333,0,94.891,0,106.667S9.536,128,21.333,128h22.485 l17.963,323.541C63.68,485.44,91.776,512,125.717,512h260.565c33.941,0,62.037-26.56,63.936-60.459L468.181,128h22.485 c11.797,0,21.333-9.557,21.333-21.333S502.464,85.333,490.667,85.333z M181.077,67.605c3.691-14.677,16.811-24.939,31.957-24.939 h85.931c15.147,0,28.267,10.261,31.957,24.939l4.416,17.728H176.661L181.077,67.605z M192,405.333 c0,11.776-9.536,21.333-21.333,21.333c-11.797,0-21.333-9.557-21.333-21.333V192c0-11.776,9.536-21.333,21.333-21.333 c11.797,0,21.333,9.557,21.333,21.333V405.333z M277.333,405.333c0,11.776-9.536,21.333-21.333,21.333 s-21.333-9.557-21.333-21.333V192c0-11.776,9.536-21.333,21.333-21.333s21.333,9.557,21.333,21.333V405.333z M362.667,405.333 c0,11.776-9.536,21.333-21.333,21.333c-11.797,0-21.333-9.557-21.333-21.333V192c0-11.776,9.536-21.333,21.333-21.333 c11.797,0,21.333,9.557,21.333,21.333V405.333z'/></svg>"
	};

	#properties = {};
	#htmlElement;
	#htmlElements = {
		preview: null,
		image: null,
		inputFile: null,
		inputRange: null,
		menu: null,
		importButton: null,
		clearButton: null
	};
	#drag;
	#dragInitX;
	#dragInitY;
	#dragTop;
	#dragLeft;
	#dragMinTop;
	#dragMinLeft;

	constructor(properties = {}) {
		const defaults = structuredClone(WUIAvatarpicker.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
		this.#drag = false;
		this.#dragInitX = null;
		this.#dragInitY = null;
		this.#dragTop = null;
		this.#dragLeft = null;
		this.#dragMinTop = null;
		this.#dragMinLeft = null;
		this.#initHtml();
	}

	get selector() {
		return this.#properties.selector;
	}

	get name() {
		return this.#properties.name;
	}

	get size() {
		return this.#properties.size;
	}

	get source() {
		return this.#properties.source;
	}

	get params() {
		return this.#properties.params;
	}

	get minImageSize() {
		return this.#properties.minImageSize;
	}

	get maxFileSize() {
		return this.#properties.maxFileSize;
	}

	get enabled() {
		return this.#properties.enabled;
	}

	get onRequirePermission() {
		return this.#properties.onRequirePermission;
	}

	get onInvalid() {
		return this.#properties.onInvalid;
	}

	get onLoad() {
		return this.#properties.onLoad;
	}

	set selector(value) {
		if (typeof (value) === "string" && value !== "") {
			this.#properties.selector = value;
		}
	}

	set name(value) {
		if (typeof (value) === "string" && value !== "") {
			this.#properties.name = value;
		}
	}

	set size(value) {
		if (typeof (value) === "number") {
			this.#properties.size = value;
		}
	}

	set source(value) {
		if (typeof (value) === "string") {
			this.#properties.source = value;
			this.#load();
		}
	}

	set params(value) {
		if (typeof (value) === "object" && value !== null && !Array.isArray(value)) {
			this.#properties.params = value;
		}
	}

	set minImageSize(value) {
		if (typeof (value) === "number") {
			this.#properties.minImageSize = value;
		}
	}

	set maxFileSize(value) {
		if (typeof (value) === "number") {
			this.#properties.maxFileSize = value;
		}
	}

	set enabled(value) {
		if (typeof (value) === "boolean") {
			const { inputFile, inputRange, importButton, clearButton } = this.#htmlElements;
			this.#properties.enabled = value;
			if (inputFile instanceof HTMLInputElement) { inputFile.disabled = !value; }
			if (inputRange instanceof HTMLInputElement) { inputRange.disabled = !value; }
			if (importButton instanceof HTMLButtonElement) { importButton.disabled = !value; }
			if (clearButton instanceof HTMLButtonElement) { clearButton.disabled = !value; }
			this.#setStyle();
		}
	}

	set onRequirePermission(value) {
		if (typeof (value) === "function" || value === null) {
			this.#properties.onRequirePermission = value;
		}
	}

	set onInvalid(value) {
		if (typeof (value) === "function" || value === null) {
			this.#properties.onInvalid = value;
		}
	}

	set onLoad(value) {
		if (typeof (value) === "function" || value === null) {
			this.#properties.onLoad = value;
		}
	}

	#loadHtml() {
		const sel = this.#properties.selector;
		this.#htmlElement = document.querySelector(sel);
		this.#htmlElements = {
			preview: document.querySelector(sel + " > .preview"),
			image: document.querySelector(sel + " > .preview > img"),
			inputFile: document.querySelector(sel + " > input[type='file']"),
			inputRange: document.querySelector(sel + " > input[type='range']"),
			menu: document.querySelector(sel + " > .menu"),
			importButton: document.querySelector(sel + " > .menu > button[class='import']"),
			clearButton: document.querySelector(sel + " > .menu > button[class='clear']")
		};
	}

	#buildHtml() {
		const htmlElement = this.#htmlElement;
		if (htmlElement instanceof HTMLDivElement) {
			if (!this.#htmlElements.preview) {
				this.#htmlElements.preview = document.createElement("div");
				this.#htmlElements.preview.className = "preview";
				htmlElement.appendChild(this.#htmlElements.preview);
			}
			if (!this.#htmlElements.image) {
				this.#htmlElements.image = document.createElement("img");
				this.#htmlElements.preview.appendChild(this.#htmlElements.image);
			}
			if (!this.#htmlElements.inputFile) {
				this.#htmlElements.inputFile = document.createElement("input");
				this.#htmlElements.inputFile.type = "file";
				htmlElement.appendChild(this.#htmlElements.inputFile);
			}
			if (!this.#htmlElements.inputRange) {
				this.#htmlElements.inputRange = document.createElement("input");
				this.#htmlElements.inputRange.type = "range";
				htmlElement.appendChild(this.#htmlElements.inputRange);
			}
			if (!this.#htmlElements.premenuview) {
				this.#htmlElements.menu = document.createElement("div");
				this.#htmlElements.menu.className = "menu";
				htmlElement.appendChild(this.#htmlElements.menu);
			}
			if (!this.#htmlElements.importButton) {
				this.#htmlElements.importButton = document.createElement("button");
				this.#htmlElements.importButton.className = "import";
				this.#htmlElements.menu.appendChild(this.#htmlElements.importButton);
			}
			if (!this.#htmlElements.clearButton) {
				this.#htmlElements.clearButton = document.createElement("button");
				this.#htmlElements.clearButton.className = "clear";
				this.#htmlElements.menu.appendChild(this.#htmlElements.clearButton);
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

	getInputFile() {
		return this.#htmlElements.inputFile;
	}

	getInputRange() {
		return this.#htmlElements.inputRange;
	}

	#getSrcIcon(name) {
		const element = this.#htmlElement || document.documentElement;
		const src = getComputedStyle(element).getPropertyValue("--wui-avatarpicker-" + name + "icon-src");
		return src !== "" && !src.match(/^(none|url\(\))$/) ? src : "url(\"data:image/svg+xml," + WUIAvatarpicker.#icons[name] + "\")";
	}

	#setStyle() {
		const htmlElement = this.#htmlElement;
		const { inputFile } = this.#htmlElements;
		if (htmlElement instanceof HTMLDivElement) {
			const disabled = inputFile.disabled;
			if (disabled) {
				htmlElement.classList.add("disabled");
			} else {
				htmlElement.classList.remove("disabled");
			}
		}
	}

	init() {
		const htmlElement = this.#htmlElement;
		const { preview, image, inputFile, inputRange, importButton, clearButton } = this.#htmlElements;
		if (htmlElement instanceof HTMLDivElement && preview instanceof HTMLDivElement && image instanceof HTMLImageElement && inputFile instanceof HTMLInputElement && inputRange instanceof HTMLInputElement && importButton instanceof HTMLButtonElement && clearButton instanceof HTMLButtonElement) {
			const $this = this;
			inputFile.name = this.name;
			inputFile.addEventListener("change", () => {
				const file = inputFile.files[0];
				if (file) {
					const reader = new FileReader();
					if (file.size > this.maxFileSize) {
						this.clear();
						if (typeof (this.onInvalid) === "function") {
							this.onInvalid("fileSize", file.size, this.maxFileSize);
						}
					} else {
						reader.onload = function (event) {
							image.src = event.target.result;
						}
					}
					reader.readAsDataURL(file);
				}
			});
			if (!this.enabled) {
				inputFile.setAttribute("disabled", "true");
			} else {
				inputFile.removeAttribute("disabled");
			}
			["touchstart", "mousedown"].forEach(type => {
				preview.addEventListener(type, (event) => {
					if (!this.#drag) {
						this.#drag = true;
						this.#dragInitX = (event.type === "touchstart" ? event.touches[0].clientX : event.clientX || event.pageX) - event.target.offsetParent.offsetLeft;
						this.#dragInitY = (event.type === "touchstart" ? event.touches[0].clientY : event.clientY || event.pageY) - event.target.offsetParent.offsetTop;
						this.#dragTop = image.offsetTop;
						this.#dragLeft = image.offsetLeft;
						this.#dragMinTop = preview.clientHeight - image.clientHeight;
						this.#dragMinLeft = preview.clientWidth - image.clientWidth;
					}
				});
			});
			["touchmove", "mousemove"].forEach(type => {
				preview.addEventListener(type, (event) => {
					if (this.#drag) {
						const moveX = (event.type === "touchmove" ? event.touches[0].clientX : event.clientX || event.pageX) - event.target.offsetParent.offsetLeft;
						const moveY = (event.type === "touchmove" ? event.touches[0].clientY : event.clientY || event.pageY) - event.target.offsetParent.offsetTop;
						const top = this.#dragTop + moveY - this.#dragInitY;
						const left = this.#dragLeft + moveX - this.#dragInitX;
						if (top <= 0 && top >= this.#dragMinTop) {
							image.style.top = top + "px";
						}
						if (left <= 0 && left >= this.#dragMinLeft) {
							image.style.left = left + "px";
						}
					}
				});
			});
			["touchend", "mouseup"].forEach(type => {
				document.addEventListener(type, () => {
					if (this.#drag) {
						this.#dragTop = null;
						this.#dragLeft = null;
						this.#dragMinTop = null;
						this.#dragMinLeft = null;
						this.#dragInitX = null;
						this.#dragInitY = null;
						this.#drag = false;
						this.params = Object.assign({}, this.params, {
							top: parseInt(image.style.top) || 0,
							left: parseInt(image.style.left) || 0
						});
					}
				});
			});
			image.onload = function () {
				image.classList.remove("hidden");
				inputRange.enabled = true;
				if (image.naturalWidth < 180 || image.naturalHeight < 180) {
					$this.clear();
					if (typeof ($this.onInvalid) === "function") {
						$this.onInvalid("imageSize", `${image.naturalWidth}x${image.naturalHeight}`, `${$this.minImageSize}x${$this.minImageSize}`);
					}
				} else {
					const minWidth = Math.ceil(100 * 180 / image.naturalWidth);
					const minHeight = Math.ceil(100 * 180 / image.naturalHeight);
					const min = Math.max(minWidth, minHeight);
					const scale = $this.params.scale ?? min;
					const width = parseInt(image.naturalWidth * scale / 100);
					const height = parseInt(image.naturalHeight * scale / 100);
					const top = $this.params.top ?? parseInt((preview.clientHeight - height) / 2);
					const left = $this.params.left ?? parseInt((preview.clientWidth - width) / 2);
					image.style.top = top + "px";
					image.style.left = left + "px";
					image.style.width = width + "px";
					image.style.height = height + "px";
					inputRange.min = min;
					inputRange.max = 3 * min;
					inputRange.step = 2 * min < 100 ? parseInt(10 * 2 * min / 100) / 10 : 1;
					inputRange.value = scale;
					inputRange.enabled = true;
					clearButton.disabled = false;
					$this.params = Object.assign({}, $this.params, { top, left, width, height, scale: Number(scale) });
					if (typeof ($this.onLoad) === "function") {
						$this.onLoad(image);
					}
				}
			}
			inputRange.min = 100;
			inputRange.max = 200;
			inputRange.value = (inputRange.max + inputRange.min) / 2;
			inputRange.addEventListener("input", (event) => {
				this.scale(event.target.value);
			});
			importButton.style.maskImage = this.#getSrcIcon("button-import");
			importButton.addEventListener("click", () => {
				if (typeof (this.onRequirePermission) === "function") {
					this.onRequirePermission(() => {
						this.explore();
					});
				} else {
					this.explore();
				}
			});
			clearButton.style.maskImage = this.#getSrcIcon("button-clear");
			clearButton.addEventListener("click", () => {
				if (!clearButton.disabled) {
					this.clear();
				}
			});
			this.#load();
			this.#setStyle();
		}
	}

	#load() {
		const { image, inputRange, clearButton } = this.#htmlElements;
		if (image instanceof HTMLImageElement && inputRange instanceof HTMLInputElement && clearButton instanceof HTMLButtonElement) {
			inputRange.enabled = false;
			clearButton.disabled = true;
			image.src = this.source;
		}
	}

	explore() {
		const { inputFile } = this.#htmlElements;
		if (inputFile instanceof HTMLInputElement) {
			inputFile.click();
		}
	}

	scale(scale) {
		const { preview, image } = this.#htmlElements;
		if (preview instanceof HTMLDivElement && image instanceof HTMLImageElement) {
			const width = parseInt(image.naturalWidth * scale / 100);
			const height = parseInt(image.naturalHeight * scale / 100);
			if (width >= preview.clientHeight && height >= preview.clientHeight) {
				const minTop = preview.clientHeight - height;
				const minLeft = preview.clientWidth - width;
				const top = image.offsetTop + parseInt((image.clientHeight - height) / 2);
				const left = image.offsetLeft + parseInt((image.clientWidth - width) / 2);
				image.style.top = (top <= 0 && top >= minTop ? top : top < minTop ? minTop : 0) + "px";
				image.style.left = (left <= 0 && left >= minLeft ? left : left < minLeft ? minLeft : 0) + "px";
				image.style.width = width + "px";
				image.style.height = height + "px";
				this.params = Object.assign({}, this.params, {
					top: parseInt(image.style.top) || 0,
					left: parseInt(image.style.left) || 0,
					width: width,
					height: height,
					scale: Number(scale)
				});
			}
		}
	}

	clear() {
		const { image, inputFile, inputRange, clearButton } = this.#htmlElements;
		if (inputFile instanceof HTMLInputElement && image instanceof HTMLImageElement && clearButton instanceof HTMLButtonElement) {
			inputFile.value = "";
			image.src = "";
			image.removeAttribute("src");
			image.classList.add("hidden");
			inputRange.value = (inputRange.max + inputRange.min) / 2;
			inputRange.enabled = false;
			clearButton.disabled = true;
		}
	}
}

/*
<div class="wui-avatar">
	<div class="preview">
		<img class="hidden">
	</div>
	<input type="file" accept="image/gif, image/jpeg, image/png">
	<input type="range" min="100" max="200" value="100">
	<div class="menu">
		<button class="import"></button>
		<button class="clear"></button>
	</div>
</div>
*/

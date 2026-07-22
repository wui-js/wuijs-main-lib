/*
 * @file wui-datepicker-0.11.js
 * @class WUIDatepicker
 * @version 0.11
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUIDatepicker {

	static version = "0.11";
	static #defaults = {
		selector: ".wui-datepicker",
		locales: "en-US",
		name: "",
		value: "",
		min: "",
		max: "",
		monthsNames: [],
		weekDaysNames: [],
		texts: {},
		openDirection: "down",
		boxAlign: "left",
		hidden: false,
		enabled: true,
		onOpen: null,
		onChange: null,
		onClose: null
	};
	static #icons = {
		"opener-open": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z'/></svg>",
		"opener-close": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z'/></svg>",
		"box-period-up": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z'/></svg>",
		"box-period-down": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z'/></svg>",
		"box-paging-prev": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M14.71 15.88L10.83 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0c.38-.39.39-1.03 0-1.42z'/></svg>",
		"box-paging-next": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42z'/></svg>"
	};
	static #texts = {
		de: {
			cancel: "stornieren",
			accept: "akzeptieren"
		},
		en: {
			cancel: "cancel",
			accept: "accept"
		},
		es: {
			cancel: "cancelar",
			accept: "aceptar"
		}
	};
	static #localesSet = ("" // https://www.techonthenet.com/js/language_tags.php 20241007
		+ "ar-SA bn-BD bn-IN cs-CZ da-DK de-AT de-CH de-DE el-GR en-AU en-CA en-GB en-IE en-IN en-NZ en-US en-ZA es-AR es-CL es-CO es-ES es-MX es-US fi-FI fr-BE fr-CA fr-CH fr-FR he-IL hi-IN hu-HU id-ID it-CH it-IT ja-JP ko-KR nl-BE nl-NL no-NO pl-PL pt-BR pt-PT ro-RO ru-RU sk-SK sv-SE ta-IN ta-LK th-TH tr-TR zh-CN zh-HK zh-TW"
		+ "").toLowerCase().split(/\s+/);
	static #firstWeekDayCountry = {
		0: "AG AS AU BD BR BS BT BW BZ CA CN CO DM DO ET GT GU HK HN ID IL IN JM JP KE KH KR LA MH MM MO MT MX MZ NI NP PA PE PH PK PR PT PY SA SG SV TH TT TW UM US VE VI WS YE ZA ZW",
		1: "AD AI AL AM AN AR AT AX AZ BA BE BG BM BN BY CH CL CM CR CY CZ DE DK EC EE ES FI FJ FO FR GB GE GF GP GR HR HU IE IS IT KG KZ LB LI LK LT LU LV MC MD ME MK MN MQ MY NL NO NZ PL RE RO RS RU SE SI SK SM TJ TM TR UA UY UZ VA VN XK",
		2: "",
		3: "",
		4: "",
		5: "MV",
		6: "AE AF BH DJ DZ EG IQ IR JO KW LY OM QA SD SY"
	};
	static #countryFirstWeekDay = {};

	#properties = {};
	#htmlElement;
	#htmlElements = {
		input: null,
		opener: null,
		inputs: null,
		inputYear: null,
		inputMonth: null,
		inputDay: null,
		overlay: null,
		box: null,
		header: null,
		period: null,
		periodText: null,
		periodIcon: null,
		prev: null,
		next: null,
		months: null,
		week: null,
		days: null,
		footer: null,
		cancelButton: null,
		acceptButton: null
	};
	#mode;
	#todayValue;
	#todayYear;
	#todayMonth;
	#targetValue;
	#targetDate;
	#cancelValue;
	#cancelDate;
	#colorScheme;
	#darkModeCleanup;

	static {
		Object.entries(WUIDatepicker.#firstWeekDayCountry).forEach(([wday, countries]) => {
			countries.split(/\s+/).forEach(code => {
				WUIDatepicker.#countryFirstWeekDay[code] = wday;
			});
		});
	}

	constructor(properties = {}) {
		const defaults = structuredClone(WUIDatepicker.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
		this.#colorScheme = null;
		this.#initHtml();
	}

	get selector() {
		return this.#properties.selector;
	}

	get locales() {
		return this.#properties.locales;
	}

	get name() {
		return this.#properties.name;
	}

	get value() {
		return (this.#htmlElements.input instanceof HTMLInputElement ? this.#htmlElements.input.value : this.#properties.value);
	}

	get min() {
		return (this.#htmlElements.input instanceof HTMLInputElement ? this.#htmlElements.input.min : this.#properties.min);
	}

	get max() {
		return (this.#htmlElements.input instanceof HTMLInputElement ? this.#htmlElements.input.max : this.#properties.max);
	}

	get monthsNames() {
		return this.#properties.monthsNames;
	}

	get weekDaysNames() {
		return this.#properties.weekDaysNames;
	}

	get texts() {
		return this.#properties.texts;
	}

	get openDirection() {
		return this.#properties.openDirection;
	}

	get boxAlign() {
		return this.#properties.boxAlign;
	}

	get hidden() {
		return this.#properties.hidden;
	}

	get enabled() {
		return this.#properties.enabled;
	}

	get onOpen() {
		return this.#properties.onOpen;
	}

	get onChange() {
		return this.#properties.onChange;
	}

	get onClose() {
		return this.#properties.onClose;
	}

	set selector(value) {
		if (typeof (value) === "string" && value !== "") {
			this.#properties.selector = value;
		}
	}

	set locales(value) {
		if (typeof (value) === "string" && value.match(/^[a-z]{2}-[a-z]{2}$/i) && WUIDatepicker.#localesSet.indexOf(value.toLowerCase()) > -1) {
			this.#properties.locales = value.split("-").map((x, i) => {
				return i === 0 ? x.toLowerCase() : x.toUpperCase();
			}).join("-");
			if (this.#htmlElements.inputs instanceof HTMLElement) {
				this.#loadInputs();
			}
		}
	}

	set name(value) {
		if (typeof (value) === "string") {
			const { input } = this.#htmlElements;
			this.#properties.name = value;
			if (input instanceof HTMLInputElement) {
				input.name = value;
			}
		}
	}

	set value(value) {
		if (typeof (value) === "string" && value.match(/^(\d{4}-\d{2}-\d{2})?$/) && (typeof (this.#properties.enabled) === "undefined" || this.#properties.enabled)) {
			this.#targetValue = value;
			this.#targetDate = new Date(value + "T00:00:00");
			this.#setValue(value);
			this.#refreshView();
		}
	}

	set min(value) {
		if (typeof (value) === "string" && value.match(/^(\d{4}-\d{2}-\d{2})?$/)) {
			this.#properties.min = value;
			if (this.#htmlElements.inputs instanceof HTMLElement) {
				this.#loadInputs();
			}
		}
	}

	set max(value) {
		if (typeof (value) === "string" && value.match(/^(\d{4}-\d{2}-\d{2})?$/)) {
			this.#properties.max = value;
			if (this.#htmlElements.inputs instanceof HTMLElement) {
				this.#loadInputs();
			}
		}
	}

	set monthsNames(value) {
		if (Array.isArray(value)) {
			this.#properties.monthsNames = value;
		}
	}

	set weekDaysNames(value) {
		if (Array.isArray(value)) {
			this.#properties.weekDaysNames = value;
		}
	}

	set texts(value) {
		if (typeof (value) === "object" && !Array.isArray(value) && value !== null) {
			Object.keys(WUIDatepicker.#texts.en).forEach(text => {
				if (!(text in value)) {
					value[text] = "";
				}
			});
			this.#properties.texts = value;
		}
	}

	set openDirection(value) {
		if (typeof (value) === "string" && value.match(/^(up|down)$/i)) {
			this.#properties.openDirection = value.toLowerCase();
		}
	}

	set boxAlign(value) {
		if (typeof (value) === "string" && value.match(/^(left|center|right)$/i)) {
			this.#properties.boxAlign = value.toLowerCase();
		}
	}

	set hidden(value) {
		if (typeof (value) === "boolean") {
			this.#properties.hidden = value;
		}
	}

	set enabled(value) {
		if (typeof (value) === "boolean") {
			const { input, inputYear, inputMonth, inputDay } = this.#htmlElements;
			this.#properties.enabled = value;
			if (input instanceof HTMLInputElement) {
				input.disabled = !value;
			}
			if (inputYear instanceof HTMLInputElement && inputMonth instanceof HTMLInputElement && inputDay instanceof HTMLInputElement) {
				inputYear.disabled = !value;
				inputMonth.disabled = !value;
				inputDay.disabled = !value;
				if (value) {
					inputYear.removeAttribute("disabled");
					inputMonth.removeAttribute("disabled");
					inputDay.removeAttribute("disabled");
				} else {
					inputYear.setAttribute("disabled", "true");
					inputMonth.setAttribute("disabled", "true");
					inputDay.setAttribute("disabled", "true");
				}
			}
			this.#setStyle();
		}
	}

	set onOpen(value) {
		if (typeof (value) === "function" || value === null) {
			this.#properties.onOpen = value;
		}
	}

	set onChange(value) {
		if (typeof (value) === "function" || value === null) {
			this.#properties.onChange = value;
		}
	}

	set onClose(value) {
		if (typeof (value) === "function" || value === null) {
			this.#properties.onClose = value;
		}
	}

	#loadHtml() {
		const sel = this.#properties.selector;
		this.#htmlElement = document.querySelector(sel);
		this.#htmlElements = {
			input: document.querySelector(sel + " > input[type='date']"),
			opener: document.querySelector(sel + " > .opener"),
			inputs: document.querySelector(sel + " > .inputs"),
			inputYear: document.querySelector(sel + " > .inputs > .year"),
			inputMonth: document.querySelector(sel + " > .inputs > .month"),
			inputDay: document.querySelector(sel + " > .inputs > .day"),
			overlay: document.querySelector(sel + " > .overlay"),
			box: document.querySelector(sel + " > .box"),
			header: document.querySelector(sel + " > .box > .header"),
			period: document.querySelector(sel + " > .box > .header > .period"),
			periodText: document.querySelector(sel + " > .box > .header > .period > .text"),
			periodIcon: document.querySelector(sel + " > .box > .header > .period > .icon"),
			prev: document.querySelector(sel + " > .box > .header > .prev"),
			next: document.querySelector(sel + " > .box > .header > .next"),
			months: document.querySelector(sel + " > .box > .months"),
			week: document.querySelector(sel + " > .box > .week"),
			days: document.querySelector(sel + " > .box > .days"),
			footer: document.querySelector(sel + " > .box > .footer"),
			cancelButton: document.querySelector(sel + " > .box > .footer > .cancel"),
			acceptButton: document.querySelector(sel + " > .box > .footer > .accept")
		};
		const { input } = this.#htmlElements;
		if (input instanceof HTMLInputElement) {
			["name", "value", "min", "max", "style"].forEach(name => {
				if (input.hasAttribute(name)) {
					if (name.match(/(name|value|min|max)/)) {
						this[name] = input[name];
					}
					if (!name.match(/name|value/) && input.getAttribute(name) !== null) {
						input.removeAttributeNode(input.getAttributeNode(name));
					}
				}
			});
		}
	}

	#buildHtml() {
		const htmlElement = this.#htmlElement;
		if (htmlElement instanceof HTMLDivElement) {
			if (!this.#htmlElements.input) {
				this.#htmlElements.input = document.createElement("input");
				this.#htmlElements.input.type = "date";
				htmlElement.appendChild(this.#htmlElements.input);
			}
			if (!this.hidden) {
				if (!this.#htmlElements.opener) {
					this.#htmlElements.opener = document.createElement("div");
					this.#htmlElements.opener.className = "opener";
					htmlElement.appendChild(this.#htmlElements.opener);
				}
				if (!this.#htmlElements.inputs) {
					this.#htmlElements.inputs = document.createElement("div");
					this.#htmlElements.inputs.className = "inputs";
					htmlElement.appendChild(this.#htmlElements.inputs);
				}
				if (!this.#htmlElements.inputYear) {
					this.#htmlElements.inputYear = document.createElement("input");
					this.#htmlElements.inputYear.className = "year";
					this.#htmlElements.inputs.appendChild(this.#htmlElements.inputYear);
				}
				if (!this.#htmlElements.inputMonth) {
					this.#htmlElements.inputMonth = document.createElement("input");
					this.#htmlElements.inputMonth.className = "month";
					this.#htmlElements.inputs.appendChild(this.#htmlElements.inputMonth);
				}
				if (!this.#htmlElements.inputDay) {
					this.#htmlElements.inputDay = document.createElement("input");
					this.#htmlElements.inputDay.className = "day";
					this.#htmlElements.inputs.appendChild(this.#htmlElements.inputDay);
				}
			}
			if (!this.#htmlElements.overlay) {
				this.#htmlElements.overlay = document.createElement("div");
				this.#htmlElements.overlay.className = "overlay";
				htmlElement.appendChild(this.#htmlElements.overlay);
			}
			if (!this.#htmlElements.box) {
				this.#htmlElements.box = document.createElement("div");
				this.#htmlElements.box.className = "box";
				htmlElement.appendChild(this.#htmlElements.box);
			}
			if (!this.#htmlElements.header) {
				this.#htmlElements.header = document.createElement("div");
				this.#htmlElements.header.className = "header";
				this.#htmlElements.box.appendChild(this.#htmlElements.header);
			}
			if (!this.#htmlElements.period) {
				this.#htmlElements.period = document.createElement("div");
				this.#htmlElements.period.className = "period";
				this.#htmlElements.header.appendChild(this.#htmlElements.period);
			}
			if (!this.#htmlElements.periodText) {
				this.#htmlElements.periodText = document.createElement("div");
				this.#htmlElements.periodText.className = "text";
				this.#htmlElements.period.appendChild(this.#htmlElements.periodText);
			}
			if (!this.#htmlElements.periodIcon) {
				this.#htmlElements.periodIcon = document.createElement("div");
				this.#htmlElements.periodIcon.className = "icon";
				this.#htmlElements.period.appendChild(this.#htmlElements.periodIcon);
			}
			if (!this.#htmlElements.prev) {
				this.#htmlElements.prev = document.createElement("div");
				this.#htmlElements.prev.className = "prev";
				this.#htmlElements.header.appendChild(this.#htmlElements.prev);
			}
			if (!this.#htmlElements.next) {
				this.#htmlElements.next = document.createElement("div");
				this.#htmlElements.next.className = "next";
				this.#htmlElements.header.appendChild(this.#htmlElements.next);
			}
			if (!this.#htmlElements.months) {
				this.#htmlElements.months = document.createElement("div");
				this.#htmlElements.months.className = "months";
				this.#htmlElements.box.appendChild(this.#htmlElements.months);
			}
			if (!this.#htmlElements.week) {
				this.#htmlElements.week = document.createElement("div");
				this.#htmlElements.week.className = "week";
				this.#htmlElements.box.appendChild(this.#htmlElements.week);
			}
			if (!this.#htmlElements.days) {
				this.#htmlElements.days = document.createElement("div");
				this.#htmlElements.days.className = "days";
				this.#htmlElements.box.appendChild(this.#htmlElements.days);
			}
			if (!this.#htmlElements.footer) {
				this.#htmlElements.footer = document.createElement("div");
				this.#htmlElements.footer.className = "footer";
				this.#htmlElements.box.appendChild(this.#htmlElements.footer);
			}
			if (!this.#htmlElements.cancelButton) {
				this.#htmlElements.cancelButton = document.createElement("button");
				this.#htmlElements.cancelButton.className = "cancel";
				this.#htmlElements.footer.appendChild(this.#htmlElements.cancelButton);
			}
			if (!this.#htmlElements.acceptButton) {
				this.#htmlElements.acceptButton = document.createElement("button");
				this.#htmlElements.acceptButton.className = "accept";
				this.#htmlElements.footer.appendChild(this.#htmlElements.acceptButton);
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

	getViewElements() {
		const { inputYear, inputMonth, inputDay } = this.#htmlElements;
		return [inputYear, inputMonth, inputDay];
	}

	getInput() {
		return this.#htmlElements.input;
	}

	#getSrcIcon(name) {
		const element = this.#htmlElement || document.documentElement;
		const src = getComputedStyle(element).getPropertyValue("--wui-datepicker-" + name + "icon-src");
		return src !== "" && !src.match(/^(none|url\(\))$/) ? src : "url(\"data:image/svg+xml," + WUIDatepicker.#icons[name] + "\")";
	}

	#setValue(value) {
		const { input } = this.#htmlElements;
		this.#properties.value = value;
		if (input instanceof HTMLInputElement) {
			input.value = value;
			input.dispatchEvent(new Event("change"));
		}
	}

	#loadValue() {
		const { input, inputYear, inputMonth, inputDay } = this.#htmlElements;
		if (input instanceof HTMLInputElement && inputYear instanceof HTMLInputElement && inputMonth instanceof HTMLInputElement && inputDay instanceof HTMLInputElement) {
			const value = this.#properties.value;
			const year = inputYear.value;
			const month = inputMonth.value;
			const day = inputDay.value;
			this.#setValue(year !== "" && month !== "" && day !== "" ? ("000" + year).slice(-4) + "-" + ("0" + month).slice(-2) + "-" + ("0" + day).slice(-2) : "");
			if (this.#properties.value !== value && typeof (this.onChange) === "function") {
				this.onChange(this.value);
			}
		}
	}

	#loadInputs() {
		const { inputs, inputYear, inputMonth, inputDay } = this.#htmlElements;
		if (inputs instanceof HTMLElement) {
			let format = ["day", "month", "year"];
			if (this.locales.match(/(en-CA|en-ZA|ja-JP|ko-KR|zh-CN)/)) {
				format = ["year", "month", "day"];
			} else if (this.locales.match(/(en-US)/)) {
				format = ["month", "day", "year"];
			}
			const partInputs = { year: inputYear, month: inputMonth, day: inputDay };
			inputs.innerHTML = "";
			format.forEach((part, i) => {
				inputs.appendChild(partInputs[part]);
				if (i < 2) {
					const span = document.createElement("span");
					span.textContent = "/";
					inputs.appendChild(span);
				}
			});
		}
	}

	#yearsStep(step) {
		const year = this.#targetDate.getFullYear() + step;
		this.#targetDate.setFullYear(year);
		this.#targetValue = this.#targetDate.toISOString().split("T")[0];
		this.#printMonths();
	}

	#monthsStep(step) {
		let month = this.#targetDate.getMonth() + step;
		if (month < 0) {
			while (month < 0) {
				this.#targetDate.setFullYear(this.#targetDate.getFullYear() - 1);
				month += 12;
			}
		} else if (month > 11) {
			while (month > 11) {
				this.#targetDate.setFullYear(this.#targetDate.getFullYear() + 1);
				month -= 12;
			}
		}
		this.#targetDate.setMonth(month);
		this.#targetValue = this.#targetDate.toISOString().split("T")[0];
		this.#printDays();
	}

	#setStyle() {
		const htmlElement = this.#htmlElement;
		const { input } = this.#htmlElements;
		if (htmlElement instanceof HTMLDivElement && input instanceof HTMLInputElement) {
			const disabled = input.disabled;
			if (disabled) {
				htmlElement.classList.add("disabled");
			} else {
				htmlElement.classList.remove("disabled");
			}
		}
	}

	init() {
		const htmlElement = this.#htmlElement;
		const { input, inputYear, inputMonth, inputDay, opener, overlay, box, period, prev, next, cancelButton, acceptButton } = this.#htmlElements;
		const partInputs = { Year: inputYear, Month: inputMonth, Day: inputDay };
		if (htmlElement instanceof HTMLDivElement && input instanceof HTMLInputElement) {
			input.name = this.name;
			if (this.hidden) {
				htmlElement.classList.add("hidden");
			} else {
				opener.style.maskImage = this.#getSrcIcon("opener-open");
				["year", "month", "day"].forEach(part => {
					const name = part.charAt(0).toUpperCase() + part.slice(1);
					const partInput = partInputs[name];
					partInput.type = "text";
					partInput.name = input.name + name;
					partInput.placeholder = part === "year" ? "yyyy" : part === "month" ? "mm" : "dd";
					partInput.maxLength = part === "year" ? 4 : 2;
					partInput.addEventListener("click", () => { this.toggle(); });
					partInput.addEventListener("keyup", event => {
						const value = event.target.value;
						const partName = event.target.className;
						const min = 1;
						const max = partName === "year" ? 3000 : partName === "month" ? 12 : 31;
						event.target.value = parseInt(value) > max ? max : parseInt(value) < min ? min : value;
						this.#loadValue();
						if (this.isOpen()) {
							this.#prepare();
							this.#loadBox();
						}
					});
				});
			}
			if (!this.enabled) {
				input.setAttribute("disabled", "true");
			} else {
				input.removeAttribute("disabled");
			}
			htmlElement.addEventListener("click", event => {
				if (this.enabled && (event.target.classList.contains("wui-datepicker") || event.target.classList.contains("opener"))) {
					this.toggle();
				}
			});
			overlay.classList.add("hidden");
			box.classList.add(this.boxAlign, this.openDirection, "hidden");
			period.addEventListener("click", () => { this.toggleMode(); });
			prev.style.maskImage = this.#getSrcIcon("box-paging-prev");
			prev.addEventListener("click", () => { this.prev(); });
			next.style.maskImage = this.#getSrcIcon("box-paging-next");
			next.addEventListener("click", () => { this.next(); });
			cancelButton.addEventListener("click", () => { this.cancel(); });
			acceptButton.addEventListener("click", () => { this.accept(); });
			this.#prepare();
			this.#loadInputs();
			this.#setStyle();
			this.#darkModeListener(() => {
				this.#setStyle();
			});
			if (this.#properties.value !== "") {
				this.value = this.#properties.value;
			}
		}
	}

	#prepare() {
		const { cancelButton, acceptButton } = this.#htmlElements;
		const texts = WUIDatepicker.#texts;
		const lang = this.locales.split("-")[0].toLowerCase();
		const today = (() => {
			const date = new Date();
			const offset = date.getTimezoneOffset();
			return new Date(date.getTime() - offset * 60 * 1000).toISOString().split("T")[0];
		})();
		this.#todayValue = today;
		this.#todayYear = parseInt(today.replace(/-\d{2}-\d{2}/, ""));
		this.#todayMonth = parseInt(today.replace(/\d{4}-0?(\d+)-\d{2}/, "$1"));
		this.#targetValue = this.#properties.value || today;
		this.#targetDate = new Date(this.#targetValue + "T00:00:00");
		this.#cancelValue = this.#targetValue;
		this.#cancelDate = new Date(this.#targetValue + "T00:00:00");
		this.#mode = "days";
		this.weekDaysNames = [];
		this.monthsNames = [];
		for (let i = 0; i < 7; i++) {
			const name = new Date(2023, 0, i + 1, 0, 0, 0).toLocaleString(this.locales, { weekday: "long" }); // 2023-01-01: sunday
			this.weekDaysNames[i] = name.replace(/^\s*(\w)/, letter => letter.toUpperCase());
		}
		for (let i = 0; i < 12; i++) {
			const name = new Date(2023, i, 1, 0, 0, 0).toLocaleString(this.locales, { month: "long" });
			this.monthsNames[i] = name.replace(/^\s*(\w)/, letter => letter.toUpperCase());
		}
		if (cancelButton instanceof HTMLButtonElement && acceptButton instanceof HTMLButtonElement) {
			const instanceTexts = this.texts;
			cancelButton.textContent = typeof (instanceTexts) === "object" && instanceTexts.cancel !== "" ? instanceTexts.cancel : lang in texts ? texts[lang].cancel : "";
			acceptButton.textContent = typeof (instanceTexts) === "object" && instanceTexts.accept !== "" ? instanceTexts.accept : lang in texts ? texts[lang].accept : "";
		}
		this.#refreshView();
	}

	#refreshView() {
		const { inputYear, inputMonth, inputDay } = this.#htmlElements;
		if (inputYear instanceof HTMLInputElement && inputMonth instanceof HTMLInputElement && inputDay instanceof HTMLInputElement) {
			const date = this.#targetDate;
			inputYear.value = date instanceof Date ? ("000" + date.getFullYear()).slice(-4) : "";
			inputMonth.value = date instanceof Date ? ("0" + (date.getMonth() + 1)).slice(-2) : "";
			inputDay.value = date instanceof Date ? ("0" + date.getDate()).slice(-2) : "";
		}
	}

	#loadBox() {
		if (this.#mode === "months") {
			this.#printMonths();
		} else if (this.#mode === "days") {
			this.#printDays();
		}
	}

	#printMonths() {
		const { box, periodText, periodIcon, months, week, days, period } = this.#htmlElements;
		if (box instanceof HTMLDivElement && periodText instanceof HTMLDivElement && periodIcon instanceof HTMLDivElement && months instanceof HTMLDivElement && week instanceof HTMLDivElement && days instanceof HTMLDivElement) {
			const year = this.#targetDate.getFullYear();
			const month = this.#targetDate.getMonth() + 1;
			let y = year;
			let m = 1;
			box.classList.remove("extended");
			periodText.textContent = this.monthsNames[month - 1] + " " + year;
			periodIcon.style.maskImage = this.#getSrcIcon("box-period-up");
			months.style.display = "grid";
			months.innerHTML = "";
			week.style.display = "none";
			week.innerHTML = "";
			days.style.display = "none";
			days.innerHTML = "";
			for (let i = 0; i < 13 * 2; i++) {
				const cell = document.createElement("div");
				if (i % 13 === 0) {
					const option = document.createElement("div");
					option.innerHTML = y;
					cell.appendChild(option);
					y++;
					m = 1;
				} else {
					const option = document.createElement("div");
					const optionValue = this.#targetValue.replace(/^\d{4}-\d{2}-/, (y - 1) + "-" + ("0" + m).slice(-2) + "-");
					const optionYear = y - 1;
					const optionMonth = m;
					if (optionYear === this.#todayYear && optionMonth === this.#todayMonth) {
						option.classList.add("today");
					}
					if (optionValue === this.#properties.value) {
						option.classList.add("selected");
					}
					option.dataset.value = optionValue;
					option.dataset.year = optionYear;
					option.dataset.month = optionMonth;
					option.textContent = this.monthsNames[m - 1].substring(0, 3);
					option.addEventListener("click", () => {
						const selected = !Boolean(option.classList.contains("selected"));
						const targetValue = optionValue;
						const targetDate = new Date(targetValue + "T00:00:00");
						const value = selected ? targetValue : "";
						const date = selected ? targetDate : null;
						months.querySelectorAll("div").forEach(div => {
							if (typeof (div.dataset.value) !== "undefined" && div.dataset.value !== targetValue) {
								div.classList.remove("selected");
							}
						});
						option.classList.toggle("selected");
						this.#targetValue = targetValue;
						this.#targetDate = date;
						period.innerHTML = this.monthsNames[option.dataset.month - 1] + " " + option.dataset.year + " <div class='icon up'></div>";
						this.#setValue(value);
						this.#refreshView();
					});
					cell.appendChild(option);
					m++;
				}
				months.appendChild(cell);
			}
		}
	}

	#printDays() {
		const { box, periodText, periodIcon, months, week, days } = this.#htmlElements;
		if (box instanceof HTMLDivElement && periodText instanceof HTMLDivElement && periodIcon instanceof HTMLDivElement && months instanceof HTMLDivElement && week instanceof HTMLDivElement && days instanceof HTMLDivElement) {
			const year = this.#targetDate.getFullYear();
			const month = this.#targetDate.getMonth() + 1;
			const country = this.locales.split("-")[1].toUpperCase();
			const firstwday = parseInt(WUIDatepicker.#countryFirstWeekDay[country] || 0);
			const firstmday = new Date(year, month - 1, 1, 0, 0, 0).getDay();
			const lasmday = month === 2 ? year & 3 || !(year % 25) && year & 15 ? 28 : 29 : 30 + (month + (month >> 3) & 1);
			let ini = 0;
			let rows = 5;
			let d = 1;
			box.classList.remove("extended");
			periodText.textContent = this.monthsNames[month - 1] + " " + year;
			periodIcon.style.maskImage = this.#getSrcIcon("box-period-down");
			months.style.display = "none";
			months.innerHTML = "";
			week.style.display = "grid";
			week.innerHTML = "";
			days.style.display = "grid";
			days.innerHTML = "";
			for (let i = 0; i < 7; i++) {
				const wday = document.createElement("div");
				let index = firstwday + i;
				if (index > 6) {
					index -= 7;
				}
				if (index === firstmday) {
					ini = i;
				}
				wday.textContent = this.weekDaysNames[index].substring(0, 3);
				week.appendChild(wday);
			}
			for (let i = 0; i < 7 * rows; i++) {
				const cell = document.createElement("div");
				if (i >= ini && d <= lasmday) {
					const option = document.createElement("div");
					const optionValue = this.#targetValue.replace(/-\d{2}$/, "-" + ("0" + d).slice(-2));
					if (optionValue === this.#todayValue) {
						option.classList.add("today");
					}
					if (optionValue === this.#properties.value) {
						option.classList.add("selected");
					}
					option.dataset.value = optionValue;
					option.textContent = d;
					option.addEventListener("click", () => {
						const selected = !Boolean(option.classList.contains("selected"));
						const targetValue = optionValue;
						const targetDate = new Date(targetValue + "T00:00:00");
						const value = selected ? targetValue : "";
						const date = selected ? targetDate : null;
						days.querySelectorAll("div").forEach(div => {
							if (typeof (div.dataset.value) !== "undefined" && div.dataset.value !== targetValue) {
								div.classList.remove("selected");
							}
						});
						option.classList.toggle("selected");
						this.#targetValue = targetValue;
						this.#targetDate = date;
						this.#setValue(value);
						this.#refreshView();
					});
					cell.appendChild(option);
					if (i + 1 === 7 * 5 && d < lasmday) {
						box.classList.add("extended");
						rows++;
					}
					d++;
				}
				days.appendChild(cell);
			}
		}
	}

	open() {
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		const { opener, overlay, box } = this.#htmlElements;
		if ((this.hidden || opener instanceof HTMLDivElement) && overlay instanceof HTMLDivElement && box instanceof HTMLDivElement) {
			if (!this.hidden) {
				opener.style.maskImage = this.#getSrcIcon("opener-close");
			}
			overlay.style.zIndex = 101;
			overlay.classList.remove("hidden");
			box.className = `box ${this.boxAlign} ${this.openDirection}`;
			box.style.marginBottom = !mobile && this.openDirection === "up" ? this.#htmlElement.clientHeight + "px" : "auto";
			this.#prepare();
			this.#loadBox();
			if (typeof (this.onOpen) === "function") {
				this.onOpen(this.value);
			}
		}
	}

	close() {
		const { opener, overlay, box } = this.#htmlElements;
		if ((this.hidden || opener instanceof HTMLDivElement) && overlay instanceof HTMLDivElement && box instanceof HTMLDivElement) {
			if (!this.hidden) {
				opener.style.maskImage = this.#getSrcIcon("opener-open");
			}
			overlay.classList.add("hidden");
			overlay.style.zIndex = 100;
			box.classList.add("hidden");
			if (typeof (this.onClose) === "function") {
				this.onClose(this.value);
			}
		}
	}

	toggle() {
		const { box } = this.#htmlElements;
		if (box instanceof HTMLDivElement) {
			if (box.classList.contains("hidden")) {
				this.open();
			} else {
				this.close();
			}
		}
	}

	toggleMode() {
		this.#mode = this.#mode === "days" ? "months" : "days";
		this.#loadBox();
	}

	prev() {
		switch (this.#mode) {
			case "months": this.#yearsStep(-2); break;
			case "days": this.#monthsStep(-1); break;
		}
	}

	next() {
		switch (this.#mode) {
			case "months": this.#yearsStep(+2); break;
			case "days": this.#monthsStep(+1); break;
		}
	}

	cancel() {
		this.#targetDate = this.#cancelDate;
		this.#setValue(this.#cancelValue);
		this.#refreshView();
		this.close();
	}

	accept() {
		if (typeof (this.onChange) === "function") {
			this.onChange(this.value);
		}
		this.close();
	}

	isOpen() {
		const { box } = this.#htmlElements;
		return Boolean(box instanceof HTMLDivElement ? !box.classList.contains("hidden") : false);
	}

	isEmpty() {
		const { inputYear, inputMonth, inputDay } = this.#htmlElements;
		return Boolean(inputYear instanceof HTMLInputElement && inputMonth instanceof HTMLInputElement && inputDay instanceof HTMLInputElement ? (this.#properties.value === "" || inputYear.value === "" || inputMonth.value === "" || inputDay.value === "") : false);
	}

	isValid() {
		return Boolean(this.#properties.value.match(/^(\d{4}-\d{2}-\d{2})?$/));
	}

	#darkModeListener(callback) {
		const observer = new MutationObserver(() => {
			const colorScheme = getComputedStyle(document.documentElement).getPropertyValue("color-scheme").trim();
			if (this.#colorScheme !== colorScheme) {
				this.#colorScheme = colorScheme;
				callback();
			}
		});
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["style", "class"],
			subtree: false
		});
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		mediaQuery.addEventListener("change", callback);
		this.#darkModeCleanup = () => {
			observer.disconnect();
			mediaQuery.removeEventListener("change", callback);
		};
	}

	destroy() {
		this.close();
		if (typeof this.#darkModeCleanup === "function") {
			this.#darkModeCleanup();
			this.#darkModeCleanup = undefined;
		}
		const htmlElement = this.#htmlElement;
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
		this.#mode = undefined;
		this.#todayValue = undefined;
		this.#todayYear = undefined;
		this.#todayMonth = undefined;
		this.#targetValue = undefined;
		this.#targetDate = undefined;
		this.#cancelValue = undefined;
		this.#cancelDate = undefined;
		this.#colorScheme = undefined;
	}
}

/*
HTML output:
<div class="wui-datepicker">
	<input type="date" value="(name)" value="">
	<div class="opener"></div>
	<div class="inputs">
		<input type="text" value="(name)Year">
		<span></span>
		<input type="text" value="(name)Month">
		<span></span>
		<input type="text" value="(name)Day">
	</div>
	<div class="overlay[ hidden]"></div>
	<div class="box[ hidden]">
		<div class="header">
			<div class="period">
				<div class="icon"></div>
			</div>
			<div class="prev"></div>
			<div class="next"></div>
		</div>
		<div class="months">
			<div></div>
			[...]
		</div>
		<div class="week">
			<div></div>
			[...]
		</div>
		<div class="days">
			<div></div>
			[...]
		</div>
		<div class="footer">
			<button class="cancel"></button>
			<button class="accept"></button>
		</div>
	</div>
</div>
*/

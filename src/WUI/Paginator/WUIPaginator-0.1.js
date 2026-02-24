/*
 * WUIPaginator - v0.1
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
 */

class WUIPaginator {

	static version = "0.1";
	static #defaults = {
		selector: "",
		currentPage: 1,
		totalPages: 1,
		totalRecords: 0,
		firstPageButton: true,
		prevPageButton: true,
		numberedButtons: false,
		maxNumberedButtons: 5,
		nextPageButton: true,
		lastPageButton: true,
		paging: [],
		info: "p/t (r)",
		onChange: null
	};

	static #icons = {
		firstPage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='11 17 6 12 11 7'%3E%3C/polyline%3E%3Cpolyline points='18 17 13 12 18 7'%3E%3C/polyline%3E%3C/svg%3E",
		prevPage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E",
		nextPage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E",
		lastPage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='13 17 18 12 13 7'%3E%3C/polyline%3E%3Cpolyline points='6 17 11 12 6 7'%3E%3C/polyline%3E%3C/svg%3E"
	};

	#properties = {};
	#htmlElement;
	#elements = {
		firstPageBtn: null,
		prevPageBtn: null,
		numberedContainer: null,
		nextPageBtn: null,
		lastPageBtn: null,
		pagingSelect: null,
		infoLabel: null
	};

	constructor(properties = {}) {
		const defaults = structuredClone(WUIPaginator.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
	}

	get selector() {
		return this.#properties.selector;
	}

	get currentPage() {
		return this.#properties.currentPage;
	}

	get totalPages() {
		return this.#properties.totalPages;
	}

	get totalRecords() {
		return this.#properties.totalRecords;
	}

	get firstPageButton() {
		return this.#properties.firstPageButton;
	}

	get prevPageButton() {
		return this.#properties.prevPageButton;
	}

	get numberedButtons() {
		return this.#properties.numberedButtons;
	}

	get maxNumberedButtons() {
		return this.#properties.maxNumberedButtons;
	}

	get nextPageButton() {
		return this.#properties.nextPageButton;
	}

	get lastPageButton() {
		return this.#properties.lastPageButton;
	}

	get paging() {
		return this.#properties.paging;
	}

	get info() {
		return this.#properties.info;
	}

	get onChange() {
		return this.#properties.onChange;
	}

	set selector(value) {
		if (typeof (value) == "string" && value != "") {
			this.#properties.selector = value;
			this.#htmlElement = document.querySelector(value);
		}
	}

	set currentPage(value) {
		if (typeof (value) == "number" && value >= 1) {
			this.#properties.currentPage = value;
		}
	}

	set totalPages(value) {
		if (typeof (value) == "number" && value >= 1) {
			this.#properties.totalPages = value;
		}
	}

	set totalRecords(value) {
		if (typeof (value) == "number" && value >= 0) {
			this.#properties.totalRecords = value;
		}
	}

	set firstPageButton(value) {
		if (typeof (value) == "boolean") {
			this.#properties.firstPageButton = value;
		}
	}

	set prevPageButton(value) {
		if (typeof (value) == "boolean") {
			this.#properties.prevPageButton = value;
		}
	}

	set numberedButtons(value) {
		if (typeof (value) == "boolean") {
			this.#properties.numberedButtons = value;
		}
	}

	set maxNumberedButtons(value) {
		if (typeof (value) == "number" && value >= 1) {
			this.#properties.maxNumberedButtons = value;
		}
	}

	set nextPageButton(value) {
		if (typeof (value) == "boolean") {
			this.#properties.nextPageButton = value;
		}
	}

	set lastPageButton(value) {
		if (typeof (value) == "boolean") {
			this.#properties.lastPageButton = value;
		}
	}

	set paging(value) {
		if (Array.isArray(value)) {
			this.#properties.paging = value;
		}
	}

	set info(value) {
		if (typeof (value) == "string") {
			this.#properties.info = value;
		}
	}

	set onChange(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onChange = value;
		}
	}

	#createButton(iconUrl, className, onClick) {
		const button = document.createElement("button");
		button.className = `wui-paginator-button ${className}`;
		button.type = "button";
		const icon = document.createElement("span");
		icon.className = "icon";
		icon.style.maskImage = `url('${iconUrl}')`;
		icon.style.webkitMaskImage = `url('${iconUrl}')`;
		button.appendChild(icon);
		button.addEventListener("click", onClick);
		return button;
	}

	#updateButtonStates() {
		if (this.#elements.firstPageBtn) {
			this.#elements.firstPageBtn.disabled = this.currentPage <= 1;
		}
		if (this.#elements.prevPageBtn) {
			this.#elements.prevPageBtn.disabled = this.currentPage <= 1;
		}
		if (this.#elements.nextPageBtn) {
			this.#elements.nextPageBtn.disabled = this.currentPage >= this.totalPages;
		}
		if (this.#elements.lastPageBtn) {
			this.#elements.lastPageBtn.disabled = this.currentPage >= this.totalPages;
		}
	}

	#updateNumberedButtons() {
		if (!this.numberedButtons || !this.#elements.numberedContainer) return;

		this.#elements.numberedContainer.innerHTML = "";

		const totalButtons = Math.min(this.totalPages, this.maxNumberedButtons);
		let startPage = 1;
		let endPage = totalButtons;

		if (this.totalPages > this.maxNumberedButtons) {
			const half = Math.floor(this.maxNumberedButtons / 2);
			startPage = Math.max(1, this.currentPage - half);
			endPage = Math.min(this.totalPages, startPage + this.maxNumberedButtons - 1);

			if (endPage - startPage + 1 < this.maxNumberedButtons) {
				startPage = Math.max(1, endPage - this.maxNumberedButtons + 1);
			}
		}

		for (let i = startPage; i <= endPage; i++) {
			const button = document.createElement("button");
			button.className = "wui-paginator-button numbered";
			button.type = "button";
			button.textContent = i;
			if (i === this.currentPage) {
				button.classList.add("active");
			}
			const page = i;
			button.addEventListener("click", () => this.goPage(page));
			this.#elements.numberedContainer.appendChild(button);
		}
	}

	#updatePagingSelect() {
		if (!this.#elements.pagingSelect || this.paging.length === 0) return;

		this.#elements.pagingSelect.innerHTML = "";

		this.paging.forEach(option => {
			const opt = document.createElement("option");
			opt.value = option.value || option;
			opt.textContent = option.label || option;
			this.#elements.pagingSelect.appendChild(opt);
		});
	}

	#updateInfoLabel() {
		if (!this.#elements.infoLabel) return;

		let infoText = this.info;
		infoText = infoText.replace(/\bp\b/g, this.currentPage);
		infoText = infoText.replace(/\bt\b/g, this.totalPages);
		infoText = infoText.replace(/\br\b/g, this.totalRecords);

		this.#elements.infoLabel.textContent = infoText;
	}

	#triggerChange(newPage) {
		if (typeof (this.onChange) == "function") {
			this.onChange(newPage, this.currentPage);
		}
	}

	getElement() {
		return this.#htmlElement;
	}

	init() {
		if (!(this.#htmlElement instanceof HTMLDivElement)) return;

		this.#htmlElement.classList.add("wui-paginator");
		this.#htmlElement.innerHTML = "";

		if (this.firstPageButton) {
			this.#elements.firstPageBtn = this.#createButton(
				WUIPaginator.#icons.firstPage,
				"first",
				() => this.firstPage()
			);
			this.#htmlElement.appendChild(this.#elements.firstPageBtn);
		}

		if (this.prevPageButton) {
			this.#elements.prevPageBtn = this.#createButton(
				WUIPaginator.#icons.prevPage,
				"prev",
				() => this.prevPage()
			);
			this.#htmlElement.appendChild(this.#elements.prevPageBtn);
		}

		if (this.numberedButtons) {
			this.#elements.numberedContainer = document.createElement("div");
			this.#elements.numberedContainer.className = "wui-paginator-numbered";
			this.#htmlElement.appendChild(this.#elements.numberedContainer);
		}

		if (this.nextPageButton) {
			this.#elements.nextPageBtn = this.#createButton(
				WUIPaginator.#icons.nextPage,
				"next",
				() => this.nextPage()
			);
			this.#htmlElement.appendChild(this.#elements.nextPageBtn);
		}

		if (this.lastPageButton) {
			this.#elements.lastPageBtn = this.#createButton(
				WUIPaginator.#icons.lastPage,
				"last",
				() => this.lastPage()
			);
			this.#htmlElement.appendChild(this.#elements.lastPageBtn);
		}

		if (this.paging.length > 0) {
			this.#elements.pagingSelect = document.createElement("select");
			this.#elements.pagingSelect.className = "wui-paginator-select";
			this.#elements.pagingSelect.addEventListener("change", (e) => {
				if (typeof (this.onChange) == "function") {
					this.onChange(this.currentPage, this.currentPage, e.target.value);
				}
			});
			this.#htmlElement.appendChild(this.#elements.pagingSelect);
			this.#updatePagingSelect();
		}

		if (this.info && this.info !== "") {
			this.#elements.infoLabel = document.createElement("span");
			this.#elements.infoLabel.className = "wui-paginator-info";
			this.#htmlElement.appendChild(this.#elements.infoLabel);
		}

		this.#updateButtonStates();
		this.#updateNumberedButtons();
		this.#updateInfoLabel();
	}

	firstPage() {
		if (this.currentPage > 1) {
			const oldPage = this.currentPage;
			this.currentPage = 1;
			this.#updateButtonStates();
			this.#updateNumberedButtons();
			this.#updateInfoLabel();
			this.#triggerChange(oldPage);
		}
	}

	prevPage() {
		if (this.currentPage > 1) {
			const oldPage = this.currentPage;
			this.currentPage--;
			this.#updateButtonStates();
			this.#updateNumberedButtons();
			this.#updateInfoLabel();
			this.#triggerChange(oldPage);
		}
	}

	nextPage() {
		if (this.currentPage < this.totalPages) {
			const oldPage = this.currentPage;
			this.currentPage++;
			this.#updateButtonStates();
			this.#updateNumberedButtons();
			this.#updateInfoLabel();
			this.#triggerChange(oldPage);
		}
	}

	lastPage() {
		if (this.currentPage < this.totalPages) {
			const oldPage = this.currentPage;
			this.currentPage = this.totalPages;
			this.#updateButtonStates();
			this.#updateNumberedButtons();
			this.#updateInfoLabel();
			this.#triggerChange(oldPage);
		}
	}

	goPage(page = 0) {
		if (typeof (page) == "number" && page >= 1 && page <= this.totalPages && page !== this.currentPage) {
			const oldPage = this.currentPage;
			this.currentPage = page;
			this.#updateButtonStates();
			this.#updateNumberedButtons();
			this.#updateInfoLabel();
			this.#triggerChange(oldPage);
		}
	}

	destroy() {
		if (this.#htmlElement instanceof HTMLDivElement) {
			this.#htmlElement.innerHTML = "";
			this.#htmlElement.classList.remove("wui-paginator");
		}
		this.#elements = {
			firstPageBtn: null,
			prevPageBtn: null,
			numberedContainer: null,
			nextPageBtn: null,
			lastPageBtn: null,
			pagingSelect: null,
			infoLabel: null
		};
	}
}

/*
HTML output:
<div class="wui-paginator">
	<button class="wui-paginator-button first"><span class="icon"></span></button>
	<button class="wui-paginator-button prev"><span class="icon"></span></button>
	<div class="wui-paginator-numbered">
		<button class="wui-paginator-button numbered">1</button>
		<button class="wui-paginator-button numbered active">2</button>
		<button class="wui-paginator-button numbered">3</button>
	</div>
	<button class="wui-paginator-button next"><span class="icon"></span></button>
	<button class="wui-paginator-button last"><span class="icon"></span></button>
	<select class="wui-paginator-select">
		<option value="10">10</option>
		<option value="25">25</option>
		<option value="50">50</option>
	</select>
	<span class="wui-paginator-info">2/10 (243)</span>
</div>
*/

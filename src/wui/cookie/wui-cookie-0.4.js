/*
 * WUICookie - v0.3
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
 */

class WUICookie {

	static version = "0.3";
	static #defaults = {
		domain: location.hostname,
		path: "./",
		minutes: 365 * 24 * 60,
		overssl: false
	};

	#properties = {
		domain: null,
		path: null,
		minutes: null,
		overssl: null
	};

	get domain() {
		return this.#properties.domain;
	}

	get path() {
		return this.#properties.path;
	}

	get minutes() {
		return this.#properties.minutes;
	}

	get overssl() {
		return this.#properties.overssl;
	}

	set domain(value) {
		if (typeof (value) == "string" && value != "") {
			this.#properties.domain = value;
		}
	}

	set path(value) {
		if (typeof (value) == "string") {
			this.#properties.path = value;
		}
	}

	set minutes(value) {
		if (typeof (value) == "number" && value.toString().match(/^\d+$/)) {
			this.#properties.minutes = value;
		}
	}

	set overssl(value) {
		if (typeof (value) == "boolean") {
			this.#properties.overssl = value;
		}
	}

	constructor(properties) {
		const defaults = structuredClone(WUICookie.#defaults);
		Object.entries(defaults).forEach(([key, value]) => {
			this[key] = key in properties ? properties[key] : value;
		});
	}

	encode(name, value, options = {}) {
		const domain = typeof (options.domain) == "string" ? options.domain : this.domain;
		const path = typeof (options.path) == "string" ? options.path : this.path;
		const minutes = typeof (options.minutes) == "number" ? options.minutes : this.minutes;
		const overssl = typeof (options.overssl) == "boolean" ? options.overssl : this.overssl;
		const cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value)
			+ (domain != "" ? "; domain=" + domain : "")
			+ (path != "" ? "; path=" + path : "")
			//+ "; max-age=" + (60 * minutes)
			+ (minutes > 0 ? "; expires=" + (() => {
				const date = new Date();
				date.setTime(date.getTime() + (minutes * 60 * 1000));
				return date.toUTCString();
			})() : "")
			+ (overssl ? "; secure" : "")
		return cookie;
	}

	set(name, value, options = {}) {
		const encode = this.encode(name, value, options);
		let detail = "";
		if (navigator.cookieEnabled) {
			try {
				document.cookie = encode;
			} catch (error) {
				detail = error;
			}
		} else {
			detail = "navigator.cookieEnabled undefined";
		}
		if (detail != "") {
			console.error("WUICookie error:", detail);
			return "error=detail";
		} else {
			return encode;
		}
	}

	get(name) {
		const cname = name + "=";
		let cookies = [];
		if (navigator.cookieEnabled) {
			try {
				cookies = decodeURIComponent(document.cookie).split(";");
			} catch (error) {
				console.error("WUICookie error:", error);
			}
			const cookie = cookies.find(part => {
				const trimmed = part.trim();
				return trimmed.indexOf(cname) == 0;
			});
			return cookie ? cookie.substring(cname.length) : "";
		}
		return "";
	}

	remove(name) {
		this.set(name, "", { minutes: 0 });
	}
};
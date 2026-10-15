/*
 * @file wui-language-0.8.js
 * @class WUILanguage
 * @version 0.8
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUILanguage {

	static version = "0.8";

	static #defaults = {
		selector: ".wui-language",
		directory: "languages/",
		sets: ["main"],
		fixedDictionary: {},
		langDictionary: {},
		lang: "en",
		mode: "js",
		dataKey: "key",
		dataOutput: "text",
		onLoad: null
	};

	static #log = [];

	#properties = {};
	#languages = {};

	constructor(properties = {}) {
		const defaults = structuredClone(WUILanguage.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
	}

	get selector() {
		return this.#properties.selector;
	}

	get directory() {
		return this.#properties.directory;
	}

	get sets() {
		return this.#properties.sets;
	}

	get fixedDictionary() {
		return this.#properties.fixedDictionary;
	}

	get langDictionary() {
		return this.#properties.langDictionary;
	}

	get lang() {
		return this.#properties.lang;
	}

	get mode() {
		return this.#properties.mode;
	}

	get dataKey() {
		return this.#properties.dataKey;
	}

	get dataOutput() {
		return this.#properties.dataOutput;
	}

	get onLoad() {
		return this.#properties.onLoad;
	}

	set selector(value) {
		if (typeof (value) === "string") {
			this.#properties.selector = value;
		}
	}

	set directory(value) {
		if (typeof (value) === "string") {
			this.#properties.directory = value;
		}
	}

	set sets(value) {
		if (Array.isArray(value)) {
			this.#properties.sets = value;
		}
	}

	set fixedDictionary(value) {
		if (value !== null && typeof value === "object" && !Array.isArray(value)) {
			this.#properties.fixedDictionary = value;
		}
	}

	set langDictionary(value) {
		if (value !== null && typeof value === "object" && !Array.isArray(value)) {
			this.#properties.langDictionary = value;
		}
	}

	set lang(value) {
		if (typeof (value) === "string") {
			this.#properties.lang = value;
		}
	}

	set mode(value) {
		if (typeof (value) === "string" && value.match(/^(js|json)$/i)) {
			this.#properties.mode = value.toLowerCase();
		}
	}

	set dataKey(value) {
		if (typeof (value) === "string") {
			this.#properties.dataKey = value;
		}
	}

	set dataOutput(value) {
		if (typeof (value) === "string") {
			this.#properties.dataOutput = value;
		}
	}

	set onLoad(value) {
		if (typeof (value) === "function" || value == null) {
			this.#properties.onLoad = value;
		}
	}

	#marge(target, source, lang = this.lang) {
		Object.keys(source).forEach(key => {
			const value = source[key];
			if (value !== null && typeof value === "object" && !Array.isArray(value)) {
				if (typeof target[key] !== "object" || target[key] === null || Array.isArray(target[key])) {
					target[key] = {};
				}
				this.#marge(target[key], value, lang);
			} else if (typeof value === "string") {
				target[key] = this.#translate(value, lang);
			} else {
				target[key] = value;
			}
		});
		return target;
	}

	#escape(text) {
		return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}

	#replace(content, dictionary) {
		Object.keys(dictionary).forEach(key => {
			const value = dictionary[key];
			if (key === "" || typeof value !== "string") {
				return;
			}
			const prefix = /^\w/.test(key) ? "\\b" : "";
			const suffix = /\w$/.test(key) ? "\\b" : "";
			const regex = new RegExp(`${prefix}${this.#escape(key)}${suffix}`, "g");
			content = content.replace(regex, () => value);
		});
		return content;
	}

	#translate(content, lang = this.lang) {
		const dictionary = this.langDictionary[lang];
		if (dictionary !== null && typeof dictionary === "object" && !Array.isArray(dictionary)) {
			content = this.#replace(content, dictionary);
		}
		return this.#replace(content, this.fixedDictionary);
	}

	load(lang = this.lang, sets = this.sets, callback = null) {
		const temp = {};
		const onLoad = (set) => {
			total++;
			if (total === sets.length) {
				sets.forEach(set => {
					this.#marge(this.#languages[lang], temp[set], lang);
				});
				this.refresh();
				if (typeof (this.onLoad) === "function") {
					this.onLoad(lang, this.#languages);
				}
				if (typeof (callback) === "function") {
					callback(lang, this.#languages);
				}
			}
		}
		let total = 0;
		this.#properties.lang = lang;
		this.#properties.sets = sets;
		if (!(lang in this.#languages)) {
			this.#languages[lang] = {};
		}
		sets.forEach(set => {
			const key = set + "-" + lang;
			if (WUILanguage.#log.indexOf(key) === -1) {
				const xhr = new XMLHttpRequest();
				const token = new Date().getTime();
				const url = `${this.directory}${set}-${lang}.${this.mode}?_=${token}`;
				if (this.mode === "js") {
					xhr.overrideMimeType("text/plain");
				} else if (this.mode === "json") {
					xhr.overrideMimeType("application/json");
				}
				xhr.onload = () => {
					if (xhr.status === 200 || xhr.status === 0) {
						const content = xhr.responseText;
						if (this.mode === "js") {
							if (content.trim().replace(/[\n\r]+/g, " ").match(/^return\s*\{.+\}\s*;?$/)) {
								try {
									const jsCode = "jsObject = (() => {" + content + "})()";
									let jsObject = {};
									temp[set] = JSON.parse(JSON.stringify(eval(jsCode)));
								} catch (error) {
									console.error(`error stringify-parse JS file '${url}': ${error}`);
								}
							}
						} else if (this.mode === "json") {
							try {
								temp[set] = JSON.parse(content);
							} catch (error) {
								console.error(`error parse JSON file '${url}': ${error}`);
							}
						}
						onLoad(set);
					} else {
						console.error(`error load ${this.mode.toUpperCase()} file '${url}'`);
					}
				}
				xhr.open("GET", url, true);
				xhr.send();
				WUILanguage.#log.push(key);
			} else {
				temp[set] = {};
				onLoad(set);
			}
		});
	}

	refresh(selector = this.selector, lang = this.lang) {
		document.querySelectorAll(selector).forEach(element => {
			const tagName = element.tagName;
			const dataKey = element.dataset[this.dataKey];
			const dataOutput = element.dataset[this.dataOutput];
			if (dataKey && dataKey !== "") {
				const keys = dataKey.split(".");
				let text = this.#languages[lang];
				for (const key of keys) {
					if (text && typeof text === "object" && key in text) {
						text = text[key];
					} else {
						text = undefined;
						break;
					}
				}
				if (typeof (dataOutput) !== "undefined") {
					element.dataset[this.dataOutput] = text;
				} else if (tagName.match(/^(meta)$/i)) {
					element.setAttribute("content", text);
				} else if (tagName.match(/^(h1|h2|h3|h4|h5|h6|div|span|p|i|ul|ol|li|strong|b|a|legend|label|select|option|data|button)$/i)) {
					element.innerHTML = text;
				} else if (tagName.match(/^(input|textarea)$/i)) {
					element.setAttribute("placeholder", text);
				}
			}
		});
	}

	destroy() {
		Object.keys(this.#properties).forEach(name => {
			delete this.#properties[name];
		});
		Object.keys(this.#languages).forEach(name => {
			delete this.#languages[name];
		});
	}
}

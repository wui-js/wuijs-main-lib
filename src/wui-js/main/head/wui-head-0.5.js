/*
 * @file wui-head-0.5.js
 * @class WUIHead
 * @version 0.5
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUIHead {

	static version = "0.5";

	#prepareUrl = (url, cacheBuster = Date.now()) => {
		return url + (url.match(/\?/) ? "&" : "?") + "_=" + cacheBuster;
	};

	setTitle(value = "") {
		const title = document.querySelector("head > title");
		if (title) {
			title.textContent = value;
		}
	}

	setMetaContent(name, content = "") {
		const meta = document.querySelector("head > meta[name='" + name + "']");
		if (meta) {
			meta.setAttribute("content", content);
		}
	}

	setApplicationName(value = "") {
		this.setMetaContent("application-name", value);
	}

	setThemeColor(value = "") {
		this.setMetaContent("theme-color", value);
	}

	addLink(path, options) {
		const head = document.querySelector("head");
		const link = document.createElement("link");
		link.href = options.refresh ? this.#prepareUrl(path) : path;
		Object.keys(options).forEach(opt => {
			link[opt] = options[opt];
		});
		head.append(link);
	}

	addScript(path, options) {
		const head = document.querySelector("head");
		const script = document.createElement("script");
		script.src = options.refresh ? this.#prepareUrl(path) : path;
		Object.keys(options).forEach(opt => {
			script[opt] = options[opt];
		});
		head.append(script);
	}

	addCss(path) {
		this.addLink(path, {
			type: "text/css",
			rel: "stylesheet"
		});
	}

	addJs(path) {
		this.addScript(path, { type: "text/javascript" });
	}

	addResources(resources) {
		if (Array.isArray(resources)) {
			resources.forEach(res => {
				if (typeof res.enabled === "undefined" ||
					(typeof res.enabled === "boolean" && res.enabled) ||
					(typeof res.enabled === "function" && res.enabled())
				) {
					if (
						(typeof res.path === "string" && res.path.match(/\.css$/i)) ||
						(typeof res.type === "string" && res.type.toLowerCase() === "css")
					) {
						this.addCss(res.path);
					} else if (
						(typeof res.path === "string" && res.path.match(/\.js$/i)) ||
						(typeof res.type === "string" && res.type.toLowerCase() === "js")
					) {
						this.addJs(res.path);
					}
				}
			});
		}
	}

	refresh() {
		const cacheBuster = Date.now();
		document.querySelectorAll("head > link[href]").forEach(link => {
			link.href = this.#prepareUrl(link.href, cacheBuster);
		});
		document.querySelectorAll("head > script[src]").forEach(script => {
			script.src = this.#prepareUrl(script.src, cacheBuster);
		});
	}
}
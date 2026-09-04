/*
 * @file wui-head-0.4.js
 * @class WUIHead
 * @version 0.4
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUIHead {

	static version = "0.4";

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

	refresh() {
		const cacheBuster = Date.now();
		const url = (url) => {
			return url + (url.match(/\?/) ? "&" : "?") + "_=" + cacheBuster;
		};
		document.querySelectorAll("head > link[href]").forEach(link => {
			link.href = url(link.href);
		});
		document.querySelectorAll("head > script[src]").forEach(script => {
			script.src = url(script.src);
		});
	}
}
/*
 * @file wui.js
 * @class WUI
 * @version 0.5.2
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

(() => {
	const load = () => {
		const createResource = (tag, atributos) => {
			return new Promise((resolve, reject) => {
				const resource = document.createElement(tag);
				Object.assign(resource, atributos);
				resource.onload = () => resolve(resource);
				resource.onerror = () => reject(new Error(`WUI loading resource error: ${atributos.src || atributos.href}`));
				document.head.appendChild(resource);
			});
		};
		const scripts = document.getElementsByTagName("script");
		const script = scripts[scripts.length - 1];
		const dir = script.src.replace(new RegExp(/[^\/]+$/), "");
		const get = script.src.replace(new RegExp(/^.+\?/), "");
		const getParams = get.split("&");
		const jsParams = {};
		const d = new Date().getTime();
		const version = "0.5.2";
		const libraries = {
			"0.4.0": {
				"cookie": { v: "0.4", js: true, css: false },
				"head": { v: "0.3", js: true, css: false },
				"body": { v: "0.3", js: true, css: false },
				"language": { v: "0.3", js: true, css: false },
				"scrolly": { v: "0.4", js: true, css: true },
				"icon": { v: "0.2", js: false, css: true },
				"fade": { v: "0.2", js: true, css: false },
				"loader": { v: "0.3", js: true, css: true },
				"tooltip": { v: "0.2", js: true, css: true },
				"modal": { v: "0.3", js: true, css: true },
				"paging": { v: "0.3", js: true, css: true },
				"slider": { v: "0.4", js: true, css: true },
				"tabs": { v: "0.2", js: true, css: true },
				"menubar": { v: "0.2", js: true, css: true },
				"list": { v: "0.3", js: true, css: true },
				"table": { v: "0.4", js: true, css: true },
				"form": { v: "0.4", js: true, css: true },
				"format": { v: "0.3", js: true, css: true },
				"selectpicker": { v: "0.3", js: true, css: true },
				"datepicker": { v: "0.3", js: true, css: true },
				"timepicker": { v: "0.3", js: true, css: true },
				"colorpicker": { v: "0.3", js: true, css: true },
				"switch": { v: "0.4", js: true, css: true },
				"intensity": { v: "0.2", js: true, css: true },
				"button": { v: "0.3", js: true, css: true }
			}
		};
		libraries["0.5.0"] = Object.assign({}, libraries["0.4.0"]);
		libraries["0.5.1"] = Object.assign({}, libraries["0.5.0"]);
		libraries["0.5.2"] = Object.assign({}, libraries["0.5.1"], {
			"modal": { v: "0.4", js: true, css: true },
			"menubar": { v: "0.3", js: true, css: true },
			"selectpicker": { v: "0.4", js: true, css: true },
			"datepicker": { v: "0.4", js: true, css: true },
			"timepicker": { v: "0.4", js: true, css: true }
		});
		let tasks = [];
		let ver = version;
		let cls = "";
		if (script.src.match(/\?/)) {
			for (let i in getParams) {
				const param = getParams[i].split("=");
				jsParams[param[0]] = param[1];
			}
			for (let param in jsParams) {
				if (param.match(/^(v|version)$/i)) {
					ver = jsParams[param];
				} else if (param.match(/^(c|class)$/i)) {
					cls = jsParams[param];
				}
			}
		}
		if (ver in libraries) {
			Object.entries(libraries[ver]).forEach(([name, lib]) => {
				if (cls == "" || cls.match(new RegExp("\\b" + name + "\\b", "i"))) {
					if (lib.js) {
						tasks.push(createResource("script", {
							src: `${dir}${name}/wui-${name}-${lib.v}.js?${d}`,
							type: "text/javascript",
							async: false
						}));
					}
					if (lib.css) {
						tasks.push(createResource("link", {
							href: `${dir}${name}/wui-${name}-${lib.v}.css?${d}`,
							type: "text/css",
							rel: "stylesheet"
						}));
					}
				}
			});
		}
		Promise.all(tasks).then(() => {
			if (document.readyState == "complete" || document.readyState == "interactive") {
				onLoad();
			} else {
				window.addEventListener("DOMContentLoaded", onLoad);
			}
		}).catch(error => console.error("WUI loading error:", error));
	}
	const onLoad = () => {
		const event = new CustomEvent("wuiLoad");
		window.dispatchEvent(event);
	}
	load();
})();
/*
 * WUI/JS Lib - v0.4.0
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
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
		const version = "0.4.0";
		const libraries = {
			"0.4.0": [
				"cookie-0.4",
				"head-0.3",
				"body-0.3",
				"language-0.3",
				"scrolly-0.4",
				"icon-0.2",
				"fade-0.2",
				"loader-0.3",
				"tooltip-0.2",
				"modal-0.3",
				"paging-0.3",
				"slider-0.4",
				"tabs-0.2",
				"menubar-0.2",
				"list-0.3",
				"table-0.4",
				"form-0.4",
				"format-0.3",
				"selectpicker-0.3",
				"datepicker-0.3",
				"timepicker-0.3",
				"colorpicker-0.3",
				"switch-0.4",
				"intensity-0.2",
				"button-0.3"
			]
		};
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
			libraries[ver].forEach(lib => {
				const name = lib.replace(/-[\d\.]+$/, "");
				if (cls == "" || cls.match(new RegExp("\\b" + name + "\\b", "i"))) {
					if (!name.match(/icon/)) {
						tasks.push(createResource("script", {
							src: `${dir}${name}/wui-${lib}.js?${d}`,
							type: "text/javascript",
							async: false
						}));
					}
					if (!name.match(/(cookie|head|body|language|fade)/)) {
						tasks.push(createResource("link", {
							href: `${dir}${name}/wui-${lib}.css?${d}`,
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
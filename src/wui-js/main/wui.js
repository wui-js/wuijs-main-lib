/*
 * @file wui.js
 * @class WUI
 * @version 0.16.1
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

(() => {
	const load = () => {
		const scripts = document.getElementsByTagName("script");
		const script = scripts[scripts.length - 1];
		const dir = script.src.replace(new RegExp(/[^\/]+$/), "");
		const get = script.src.replace(new RegExp(/^.+\?/), "");
		const getParams = get.split("&");
		const jsParams = {};
		const cacheBuster = Date.now();
		const version = "0.16.1";
		const libraries = {};
		const createResource = (tag, attributes) => {
			return new Promise((resolve, reject) => {
				const resource = document.createElement(tag);
				Object.assign(resource, attributes);
				resource.onload = () => resolve(resource);
				resource.onerror = () => reject(new Error(`WUI loading resource error: ${attributes.src || attributes.href}`));
				document.head.appendChild(resource);
			});
		};
		libraries["0.4.0"] = {
			"cookie": { v: "0.4", css: false },
			"head": { v: "0.3", css: false },
			"body": { v: "0.3", css: false },
			"language": { v: "0.3", css: false },
			"scrolly": { v: "0.4" },
			"icon": { v: "0.2", js: false, css: true },
			"fade": { v: "0.2", css: false },
			"loader": { v: "0.3" },
			"tooltip": { v: "0.2" },
			"modal": { v: "0.3" },
			"paging": { v: "0.3" },
			"slider": { v: "0.4" },
			"tabs": { v: "0.2" },
			"menubar": { v: "0.2" },
			"list": { v: "0.3" },
			"table": { v: "0.4" },
			"form": { v: "0.4" },
			"format": { v: "0.3" },
			"selectpicker": { v: "0.3" },
			"datepicker": { v: "0.3" },
			"timepicker": { v: "0.3" },
			"colorpicker": { v: "0.3" },
			"switch": { v: "0.4" },
			"intensity": { v: "0.2" },
			"button": { v: "0.3" }
		};
		libraries["0.5.0"] = Object.assign({}, libraries["0.4.0"]);
		libraries["0.5.1"] = Object.assign({}, libraries["0.5.0"]);
		libraries["0.5.2"] = Object.assign({}, libraries["0.5.1"], {
			"modal": { v: "0.4" },
			"menubar": { v: "0.3" },
			"selectpicker": { v: "0.4" },
			"datepicker": { v: "0.4" },
			"timepicker": { v: "0.4" }
		});
		libraries["0.6.0"] = Object.assign({}, libraries["0.5.2"], {
			"scrolly": { v: "0.5" },
			"fade": { v: "0.3", css: false },
			"loader": { v: "0.4" },
			"tooltip": { v: "0.3" },
			"modal": { v: "0.5" },
			"paging": { v: "0.4" },
			"slider": { v: "0.5" },
			"tabs": { v: "0.3" },
			"menubar": { v: "0.4" },
			"list": { v: "0.4" },
			"table": { v: "0.5" },
			"form": { v: "0.5" },
			"selectpicker": { v: "0.5" },
			"datepicker": { v: "0.5" },
			"timepicker": { v: "0.5" },
			"colorpicker": { v: "0.5" },
			"switch": { v: "0.6" },
			"intensity": { v: "0.4" }
		});
		libraries["0.6.1"] = Object.assign({}, libraries["0.6.0"], {
			"icon": { v: "0.4", js: false, css: true },
			"selectpicker": { v: "0.6" },
			"button": { v: "0.6" }
		});
		libraries["0.6.2"] = Object.assign({}, libraries["0.6.1"], {
			"datepicker": { v: "0.6" },
			"timepicker": { v: "0.6" },
			"colorpicker": { v: "0.6" }
		});
		libraries["0.7.0"] = Object.assign({}, libraries["0.6.2"], {
			"button": { v: "0.7" }
		});
		libraries["0.7.1"] = Object.assign({}, libraries["0.7.0"], {
			"body": { v: "0.4", css: false },
			"language": { v: "0.4", css: false },
			"icon": { v: "0.5", js: false, css: true },
			"menubar": { v: "0.5" },
			"selectpicker": { v: "0.7" },
			"datepicker": { v: "0.7" },
			"timepicker": { v: "0.7" },
			"colorpicker": { v: "0.7" }
		});
		libraries["0.8.0"] = Object.assign({}, libraries["0.7.1"], {
			"language": { v: "0.5", css: false },
			"icon": { v: "0.6", js: false, css: true },
			"modal": { v: "0.6" },
			"paging": { v: "0.5" },
			"list": { v: "0.5" },
			"table": { v: "0.6" },
			"form": { v: "0.6" },
			"selectpicker": { v: "0.8" },
			"timepicker": { v: "0.8" },
			"colorpicker": { v: "0.8" },
			"button": { v: "0.8" }
		});
		libraries["0.8.1"] = Object.assign({}, libraries["0.8.0"], {
			"paging": { v: "0.6" }
		});
		libraries["0.9.0"] = Object.assign({}, libraries["0.8.1"], {
			"selectpicker": { v: "0.9" },
		});
		libraries["0.9.1"] = Object.assign({}, libraries["0.9.0"]);
		libraries["0.9.2"] = Object.assign({}, libraries["0.9.1"]);
		libraries["0.10.0"] = Object.assign({}, libraries["0.9.2"], {
			"modal": { v: "0.7" },
			"paging": { v: "0.7" },
			"form": { v: "0.7" },
			"format": { v: "0.4" },
			"selectpicker": { v: "0.10" },
			"datepicker": { v: "0.8" },
			"timepicker": { v: "0.9" },
			"colorpicker": { v: "0.9" },
			"switch": { v: "0.7" },
			"button": { v: "0.9" }
		});
		libraries["0.11.0"] = Object.assign({}, libraries["0.10.0"], {
			"cookie": { v: "0.5", css: false },
			"body": { v: "0.5", css: false },
			"language": { v: "0.6", css: false },
			"scrolly": { v: "0.6" },
			"icon": { v: "0.6" },
			"fade": { v: "0.4", css: false },
			"loader": { v: "0.5" },
			"tooltip": { v: "0.4" },
			"slider": { v: "0.6" },
			"tabs": { v: "0.4" },
			"menubar": { v: "0.6" },
			"list": { v: "0.6" },
			"table": { v: "0.7" },
			"form": { v: "0.8" },
			"selectpicker": { v: "0.11" },
			"datepicker": { v: "0.9" },
			"colorpicker": { v: "0.10" },
			"button": { v: "0.10" }
		});
		libraries["0.12.0"] = Object.assign({}, libraries["0.11.0"], {
			"scrolly": { v: "0.7" },
			"icon": { v: "0.8" },
			"loader": { v: "0.6" },
			"tooltip": { v: "0.5" },
			"modal": { v: "0.8" },
			"paging": { v: "0.8" },
			"slider": { v: "0.7" },
			"tabs": { v: "0.5" },
			"menubar": { v: "0.7" },
			"list": { v: "0.7" },
			"table": { v: "0.8" },
			"form": { v: "0.9" },
			"selectpicker": { v: "0.12" },
			"datepicker": { v: "0.10" },
			"timepicker": { v: "0.10" },
			"colorpicker": { v: "0.11" },
			"switch": { v: "0.8" },
			"intensity": { v: "0.6" },
			"button": { v: "0.11" }
		});
		libraries["0.13.1"] = Object.assign({}, libraries["0.12.0"], {
			"head": { v: "0.4", css: false },
			"body": { v: "0.6", css: false },
			"icon": { v: "0.9" },
			"fade": { v: "0.5", css: false },
			"loader": { v: "0.7" },
			"tooltip": { v: "0.6" },
			"modal": { v: "0.9" },
			"paging": { v: "0.9" },
			"slider": { v: "0.8" },
			"tabs": { v: "0.6" },
			"menubar": { v: "0.8" },
			"list": { v: "0.8" },
			"table": { v: "0.9" },
			"form": { v: "0.10" },
			"format": { v: "0.5" },
			"selectpicker": { v: "0.13" },
			"datepicker": { v: "0.11" },
			"timepicker": { v: "0.11" },
			"colorpicker": { v: "0.12" },
			"switch": { v: "0.9" },
			"intensity": { v: "0.7" },
			"button": { v: "0.12" }
		});
		libraries["0.13.2"] = Object.assign({}, libraries["0.13.1"], {
			"body": { v: "0.7", css: false },
			"icon": { v: "0.10" },
			"modal": { v: "0.10" },
			"menubar": { v: "0.9" },
			"form": { v: "0.11" },
			"button": { v: "0.13" }
		});
		libraries["0.14.0"] = Object.assign({}, libraries["0.13.2"], {
			"head": { v: "0.5", css: false },
			"body": { v: "0.8", css: false },
			"language": { v: "0.7", css: false },
			"icon": { v: "0.11" },
			"modal": { v: "0.11" },
			"paging": { v: "0.10" },
			"tabs": { v: "0.7" },
			"menubar": { v: "0.10" },
			"list": { v: "0.9" },
			"table": { v: "0.10" },
			"form": { v: "0.12" },
			"selectpicker": { v: "0.14" },
			"datepicker": { v: "0.12" },
			"timepicker": { v: "0.12" },
			"switch": { v: "0.10" },
			"button": { v: "0.14" }
		});
		libraries["0.14.1"] = Object.assign({}, libraries["0.14.0"], {
			"body": { v: "0.9", css: false },
			"icon": { v: "0.12" }
		});
		libraries["0.15.0"] = Object.assign({}, libraries["0.14.1"], {
			"body": { v: "0.10", css: false },
			"language": { v: "0.8", css: false },
			"scrolly": { v: "0.8" },
			"icon": { v: "0.13" },
			"fade": { v: "0.6", css: false },
			"modal": { v: "0.12" },
			"paging": { v: "0.11" },
			"slider": { v: "0.9" },
			"list": { v: "0.10" },
			"table": { v: "0.11" },
			"form": { v: "0.13" },
			"format": { v: "0.6", css: false },
			"datepicker": { v: "0.13" },
			"colorpicker": { v: "0.13" },
			"button": { v: "0.15" }
		});
		libraries["0.16.0"] = Object.assign({}, libraries["0.15.0"], {
			"icon": { v: "0.14" },
			"fade": { v: "0.7", css: false },
			"modal": { v: "0.13" },
			"paging": { v: "0.12" },
			"slider": { v: "0.10" },
			"list": { v: "0.11" },
			"table": { v: "0.12" },
			"form": { v: "0.14" },
			"format": { v: "0.7", css: false },
			"selectpicker": { v: "0.15" },
			"datepicker": { v: "0.14" },
			"timepicker": { v: "0.13" },
			"colorpicker": { v: "0.14" },
			"button": { v: "0.16" }
		});
		libraries["0.16.1"] = Object.assign({}, libraries["0.16.0"], {
			"http": { v: "0.2", css: false },
			"language": { v: "0.9", css: false },
			"list": { v: "0.12" },
			"table": { v: "0.13" },
			"form": { v: "0.15" },
			"avatarpicker": { v: "0.2" }
		});
		const tasks = [];
		let ver = version;
		let cls = "";
		let root = true;
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
				} else if (param.match(/^(r|root)$/i)) {
					root = jsParams[param] === "0" ? false : true;
				}
			}
		}
		if (ver in libraries) {
			Object.entries(libraries[ver]).forEach(([name, lib]) => {
				if (cls === "" || cls.match(new RegExp("\\b" + name + "\\b", "i"))) {
					if (lib.js !== false) {
						tasks.push(createResource("script", {
							src: `${dir}${name}/wui-${name}-${lib.v}.js?_=${cacheBuster}`,
							type: "text/javascript",
							async: false
						}));
					}
					if (lib.css !== false) {
						tasks.push(createResource("link", {
							href: `${dir}${name}/wui-${name}-${lib.v}.css?_=${cacheBuster}`,
							type: "text/css",
							rel: "stylesheet"
						}));
						if (root) {
							tasks.push(createResource("link", {
								href: `${dir}${name}/wui-${name}-${lib.v}.root.css?_=${cacheBuster}`,
								type: "text/css",
								rel: "stylesheet"
							}));
						}
					}
				}
			});
		}
		Promise.all(tasks).then(() => {
			if (document.readyState === "complete" || document.readyState === "interactive") {
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
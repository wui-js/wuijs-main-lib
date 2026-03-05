/*
 * WUI JS Lib - v0.3.0
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
 */

(() => {
	const load = () => {
		const scripts = document.getElementsByTagName("script");
		const script = scripts[scripts.length - 1];
		const dir = script.src.replace(new RegExp(/[^\/]+$/), "");
		const get = script.src.replace(new RegExp(/^.+\?/), "");
		const getParams = get.split("&");
		const jsParams = {};
		const d = new Date().getTime();
		const version = "0.3.0";
		const libraries = {
			"0.3.0": [
				"Cookie-0.3",
				"Head-0.2",
				"Body-0.2",
				"Language-0.2",
				"Scrolly-0.3",
				"Icon-0.1",
				"Fade-0.1",
				"Loader-0.2",
				"Tooltip-0.1",
				"Modal-0.2",
				"Paging-0.2",
				"Slider-0.3",
				"Tabs-0.1",
				"Menubar-0.1",
				"List-0.2",
				"Table-0.3",
				"Form-0.3",
				"Format-0.2",
				"Selectpicker-0.2",
				"Datepicker-0.2",
				"Timepicker-0.2",
				"Colorpicker-0.2",
				"Switch-0.3",
				"Intensity-0.1",
				"Button-0.2"
			]
		};
		let ver = version;
		let res = "";
		if (script.src.match(/\?/)) {
			for (let i in getParams) {
				const param = getParams[i].split("=");
				jsParams[param[0]] = param[1];
			}
			for (let param in jsParams) {
				if (param.match(/^(v|version)$/i)) {
					ver = jsParams[param];
				} else if (param.match(/^(r|resources|c|class)$/i)) {
					res = jsParams[param];
				}
			}
		}
		if (ver in libraries) {
			libraries[ver].forEach(lib => {
				const name = lib.replace(/-[\d\.]+$/, "");
				if (res == "" || Boolean(res.match(new RegExp("\b" + name + "\b", "i")))) {
					if (!name.match(/Icon/)) {
						const js = document.createElement("script");
						js.setAttribute("src", dir + name + "/WUI" + name + ".js?" + d);
						js.setAttribute("type", "text/javascript");
						document.head.appendChild(js);
					}
					if (!name.match(/(Cookie|Head|Body|Language|Fade)/)) {
						const css = document.createElement("link");
						css.setAttribute("rel", "stylesheet");
						css.setAttribute("type", "text/css");
						css.setAttribute("href", dir + name + "/WUI" + name + ".css?" + d);
						document.head.appendChild(css);
					}
				}
			});
		}
	}
	const onLoad = () => {
		const event = new CustomEvent("wuiLoad");
		window.dispatchEvent(event);
	}
	Promise.all([load]).then(() => {
		if (document.readyState == "complete" || document.readyState == "interactive") {
			onLoad();
		} else {
			window.addEventListener("DOMContentLoaded", onLoad);
		}
	}).catch(err => console.error("WUI loading error:", err));
})();
/*
 * @file wui-http-0.1.js
 * @class WUIHttp
 * @version 0.1
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUIHttp {

	static version = "0.1";
	static #defaults = {
		token: null
	};

	#properties = {};

	constructor(properties = {}) {
		const defaults = structuredClone(WUIHttp.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
	}

	get token() {
		return this.#properties.token;
	}

	set token(value) {
		if (typeof (value) === "string") {
			this.#properties.token = value;
		}
	}

	#isJsonObject(object) {
		return (typeof (object) === "object" && object !== null && !Array.isArray(object));
	}

	#isJsonContent(content) {
		if (typeof (content) !== "string" || content.trim() === "") {
			return false;
		}
		try {
			JSON.parse(content);
			return true;
		} catch (error) {
			return false;
		}
	}

	#prepareUrl(options = {}) {
		const url = options.url || "";
		const method = this.#prepareMethod(options);
		const cacheBuster = Date.now();
		if (method !== "GET") {
			return url;
		}
		return url + (url.match(/\?/) ? "&" : "?") + "_=" + cacheBuster;
	}

	#prepareMethod(options = {}) {
		return (options.method ?? "GET").toUpperCase();
	}

	#prepareHeaders(options = {}) {
		const headers = {};
		if (options.token || this.token) {
			headers["Authorization"] = `Bearer ${options.token || this.token}`;
		}
		if (options.body && (this.#isJsonObject(options.body) || this.#isJsonContent(options.body))) {
			headers["Content-Type"] = "application/json";
		}
		Object.keys(options.headers || {}).forEach(key => {
			headers[key] = options.headers[key];
		});
		return headers;
	}

	#prepareBody(options = {}) {
		if (options.body && this.#isJsonObject(options.body)) {
			return JSON.stringify(options.body);
		}
		return options.body || "";
	}

	#prepareResponseType(options = {}) {
		const type = (options.responseType || "text").toLowerCase();
		return type.match(/^(text|json|blob|arraybuffer|objecturl|base64)$/) ? type : "text";
	}

	#toBase64DataUrl(buffer, contentType) {
		const bytes = new Uint8Array(buffer);
		let binary = "";
		for (let i = 0; i < bytes.byteLength; i++) {
			binary += String.fromCharCode(bytes[i]);
		}
		return `data:${contentType};base64,${btoa(binary)}`;
	}

	#prepareContentType(options = {}) {
		const ext = (options.url || "").split(".").pop().toLowerCase();
		if (ext.match(/^(gif|png|jpeg|webp|avif)$/)) {
			return `image/${ext}`;
		} else if (ext.match(/^(mp4|webm|ogv)$/)) {
			return `video/${ext}`;
		} else if (ext.match(/^(mp3|wav|ogg|aac)$/)) {
			return `audio/${ext}`;
		} else if (ext.match(/^(woff|woff2)$/)) {
			return `font/${ext}`;
		}
		switch(ext) {
			case "txt":
			case "log": return "text/plain";
			case "html":
			case "htm": return "text/html";
			case "css": return "text/css";
			case "js":
			case "mjs": return "text/javascript";
			case "jpg": return "image/jpeg";
			case "svg": return "image/svg+xml";
			case "ico": return "image/x-icon";
			case "json": return "application/json";
			case "xml": return "application/xml";
			case "pdf": return "application/pdf";
			case "ttf": return "font/ttf";
			case "otf": return "font/otf";
			default: return "application/octet-stream";
		}
	}

	async getUrlContent(options = {}) {
		const url = this.#prepareUrl(options);
		const method = this.#prepareMethod(options);
		const headers = this.#prepareHeaders(options);
		const body = this.#prepareBody(options);
		const responseType = this.#prepareResponseType(options);
		const xhr = new XMLHttpRequest();
		return new Promise((resolve, reject) => {
			let content = "";
			xhr.open(method, url, true);
			if (responseType === "blob" || responseType === "objecturl") {
				xhr.responseType = "blob";
			} else if (responseType === "arraybuffer" || responseType === "base64") {
				xhr.responseType = "arraybuffer";
			}
			Object.keys(headers).forEach(key => {
				xhr.setRequestHeader(key, headers[key]);
			});
			xhr.onload = () => {
				if (xhr.status >= 200 && xhr.status < 300) {
					if (responseType === "text") {
						content = xhr.responseText;
					} else if (responseType === "json") {
						try {
							content = JSON.parse(xhr.responseText);
						} catch (error) {
							content = { content: xhr.responseText };
						}
					} else if (responseType === "blob") {
						content = xhr.response;
					} else if (responseType === "arraybuffer") {
						content = xhr.response;
					} else if (responseType === "objecturl") {
						content = URL.createObjectURL(xhr.response);
					} else if (responseType === "base64") {
						const contentType = this.#prepareContentType(options);
						content = this.#toBase64DataUrl(xhr.response, contentType);
					}
					resolve(content);
				} else {
					reject(xhr.status);
				}
			};
			xhr.onerror = () => reject(xhr.status);
			xhr.onabort = () => reject("abort");
			if (options.signal instanceof AbortSignal) {
				if (options.signal.aborted) {
					reject("abort");
					return;
				}
				options.signal.addEventListener("abort", () => xhr.abort(), { once: true });
			}
			if (typeof (options.onProgress) === "function") {
				xhr.onprogress = (event) => {
					const progress = (event.lengthComputable && event.total > 0) ? event.loaded / event.total : null;
					options.onProgress({
						loaded: event.loaded,
						total: event.total,
						lengthComputable: event.lengthComputable,
						progress
					});
				};
			}
			xhr.send(body);
		});
	}

	async response(options = {}) {
		const url = this.#prepareUrl(options);
		const method = this.#prepareMethod(options);
		const headers = this.#prepareHeaders(options);
		const body = this.#prepareBody(options);
		const responseType = this.#prepareResponseType(options);
		const fetchOptions = { method, headers };
		if (options.signal instanceof AbortSignal) {
			fetchOptions.signal = options.signal;
		}
		if (method !== "GET" && method !== "HEAD" && body) {
			fetchOptions.body = body;
		}
		const response = await fetch(url, fetchOptions);
		if (!response.ok) {
			throw response.status;
		}
		switch(responseType) {
			case "text": return response.text();
			case "json": return response.json();
			case "blob": return response.blob();
			case "arraybuffer": return response.arrayBuffer();
			case "objecturl": {
				const blob = await response.blob();
				return URL.createObjectURL(blob);
			}
			case "base64": {
				const contentType = this.#prepareContentType(options);
				const buffer = await response.arrayBuffer();
				return this.#toBase64DataUrl(buffer, contentType);
			}
			default: return response;
		}
	}

	async responseJson(options = {}) {
		options.responseType = "json";
		return await this.response(options);
	}
}

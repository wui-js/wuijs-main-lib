[English](wui-http-en.md) | [Español](wui-http-es.md)

[wuijs-main-lib](../../README-en.md)

# WUIHttp

Version: `0.2`

Utilities for making HTTP requests through `XMLHttpRequest` and `fetch()`, with token authentication, cancellation, download progress and response content conversion.

## Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/http/wui-http-0.2.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/http/wui-http-0.2.js) |

## Constructor

| Type    | Description |
| ------- | ----------- |
| WUIHttp | `WUIHttp([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

## Properties

| Property | Type     | Default value | Description |
| -------- | -------- | ------------- | ----------- |
| token    | `string` | `null`        | (get/set)<br><br>Authentication token. If defined, it is sent in the `Authorization: Bearer {token}` header of each request, unless the request `token` option overrides it. It accepts `null` to remove it. |

## Methods

| Method        | Return type       | Description |
| ------------- | ----------------- | ----------- |
| getUrlContent | `Promise<any>`    | `getUrlContent([options])`<br><br>Arguments:<br>**• options:** `object` *optional*<br><br>Makes a request through `XMLHttpRequest` and returns the content according to the `responseType` option. The download progress can be followed with the `onProgress` option. If the HTTP status is not between 200 and 299 the promise is rejected with the status code; if the request is cancelled, with `"abort"`. With `responseType` `"json"`, if the content is not valid JSON it returns `{ content: <text> }`. |
| response      | `Promise<any>`    | `response([options])`<br><br>Arguments:<br>**• options:** `object` *optional*<br><br>Makes a request through `fetch()` and returns the content according to the `responseType` option. If the response is not `ok` it throws the HTTP status code; if the request is cancelled, it throws the `fetch` `AbortError`. |
| responseJson  | `Promise<object>` | `responseJson([options])`<br><br>Arguments:<br>**• options:** `object` *optional*<br><br>Equivalent to `response()` with `responseType` `"json"`. It does not modify the received `options` object. |

## Request Options

| Option       | Type             | Default value | Description |
| ------------ | ---------------- | ------------- | ----------- |
| url          | `string`         | `""`          | Target URL. In `GET` requests the `_` parameter with a timestamp is added to avoid caching. |
| method       | `string`         | `"GET"`       | HTTP method of the request. |
| token        | `string`         |               | Authentication token of the request. It takes precedence over the `token` property. |
| headers      | `object`         | `{}`          | Additional headers. They take precedence over the generated headers (`Authorization`, `Content-Type`). |
| body         | `object\|string` | `""`          | Request body. It is not sent in `GET` or `HEAD` requests. An object is sent serialized as JSON; both an object and a valid JSON string add the `Content-Type: application/json` header. |
| responseType | `string`         | `"text"`      | Type of the returned content.<br><br>Values:<br>• `"text"`, text string.<br>• `"json"`, JSON object.<br>• `"blob"`, `Blob` object.<br>• `"arraybuffer"`, `ArrayBuffer` object.<br>• `"objecturl"`, object URL created with `URL.createObjectURL()`.<br>• `"base64"`, base64 *data URL* with the content type deduced from the URL extension, ignoring its parameters (`?`) and fragment (`#`). |
| signal       | `AbortSignal`    |               | Signal of an `AbortController` to cancel the request. |
| onProgress   | `function`       |               | Only `getUrlContent()`. Function run during the download. It receives as parameter an object with the `loaded`, `total`, `lengthComputable` and `progress` properties (fraction between 0 and 1, or `null` if the total size is unknown). |

## Implementation

CSS code:

```css
html,
body {
	height: 100%;
	margin: 0;
	padding: 0;
}

body {
	font-size: 14px;
}

nav {
	display: flex;
	margin: 10px;
	align-items: center;
	gap: 10px;
}

.output {
	margin: 10px;
	font-family: monospace;
}
```

HTML head:

```html
<script type="text/javascript" src="/libraries/wui-js/main/http/wui-http-0.2.js"></script>
```

HTML code:

```html
<nav>
	<button class="load-text">Text</button>
	<button class="load-json">JSON</button>
	<button class="cancel">Cancel</button>
</nav>
<div class="output"></div>
```

JSON code (`data.json`):

```json
{
	"name": "WUIHttp",
	"version": "0.1"
}
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const http = new WUIHttp({
		//token: null
	});
	let controller = null;
	document.body.querySelector(".load-text").addEventListener("click", async () => {
		controller = new AbortController();
		try {
			const content = await http.getUrlContent({
				url: "./data.json",
				//method: "GET",
				//token: "",
				//headers: {},
				//body: "",
				responseType: "text",
				signal: controller.signal,
				onProgress: ({ loaded, total }) => {
					output.textContent = `Progress - ${loaded} / ${total} bytes`;
				}
			});
			output.textContent = `Text - content: ${content}`;
		} catch (error) {
			output.textContent = `Error - ${error}`;
		}
	});
	document.body.querySelector(".load-json").addEventListener("click", async () => {
		controller = new AbortController();
		try {
			const data = await http.responseJson({
				url: "./data.json",
				signal: controller.signal
			});
			output.textContent = `JSON - name: ${data.name}, version: ${data.version}`;
		} catch (error) {
			output.textContent = `Error - ${error}`;
		}
	});
	document.body.querySelector(".cancel").addEventListener("click", () => {
		if (controller) {
			controller.abort();
		}
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-http-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-http-basic&lang=en).

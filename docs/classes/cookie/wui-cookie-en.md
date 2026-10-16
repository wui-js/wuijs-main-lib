[English](wui-cookie-en.md) | [Español](wui-cookie-es.md)

[wuijs-main-lib](../../README-en.md)

# WUICookie

Version: `0.5`

Utilities for cookies management.

## Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/cookie/wui-cookie-0.5.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/cookie/wui-cookie-0.5.js) |

## Constructor

| Type      | Description |
| --------- | ----------- |
| WUICookie | `WUICookie([properties])`<br><br>Arguments:<br>**• properties:** `object` |

## Propiedades Públicas

| Nombre  | Tipo     | Descripción |
| ------- | -------- | ----------- |
| version | `string` | Version del plugin. |

## Properties

| Property | Type      | Default value       | Description |
| -------- | --------- | ------------------- | ----------- |
| domain   | `string`  | `location.hostname` | (get/set)<br><br>Define the domain for which the cookie is accessible. By default, it's the current host. Setting it to a parent domain (e.g., example.com for sub.example.com) makes it accessible to subdomains. |
| path     | `string`  | `"./"`              | (get/set)<br><br>Specifies the path for which the cookie is valid. The default value is the current path, with an empty value being equivalent to this. Setting "/" makes the cookie accessible across the entire domain. |
| minutes  | `number`  | `525600`            | (get/set)<br><br>Specifies the duration, measured in minutes, for the cookie to remain active. The default value is 365 days. |
| overssl  | `boolean` | `false`             | (get/set)<br><br>If set to `true`, the cookie will only be sent over HTTPS connections. |

## Methods

| Method | Return type | Description |
| ------ | ----------- | ----------- |
| encode | `string`    | `encode(name, value[, options])`<br><br>Arguments:<br>**• name:** `string` <br>**• value:** `string` <br>**• options:** `object` *optional*<br><br>Returns the encoded string of a cookie. |
| set    | `string`    | `set(name, value[, options])`<br><br>Arguments:<br>**• name:** `string` <br>**• value:** `string` <br>**• options:** `object` *optional*<br><br>Add or modify a cookie and returns its encoded string. |
| get    | `string`    | `get(name)`<br><br>Arguments:<br>**• name:** `string`<br><br>Reads the contents of a cookie by its name. |
| remove | `void`      | `remove(name)`<br><br>Arguments:<br>**• name:** `string`<br><br>Removes a cookie by its name. |

## Implementation

CSS Code:

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

.output {
	margin: 10px;
	font-family: monospace;
}
```

HTML head:

```html
<script type="text/javascript" src="/libraries/wui-js/main/cookie/wui-cookie-0.5.js"></script>
```

HTML code:

```html
<div class="output"></div>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const cookie = new WUICookie({
		//domain: location.hostname,
		//path: "./",
		//minutes: 365*24*60,
		//overssl: false
	});
	const encode = cookie.set("mycookie", "test");
	const value = cookie.get("mycookie");
	output.innerHTML = "<pre>"
		+ `Encoded value : ${encode}\n`
		+ `Readed value  : ${value}\n`
		+ "</pre>";
}

window.addEventListener("DOMContentLoaded", init);
```

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-cookie-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-cookie-basic&lang=en).

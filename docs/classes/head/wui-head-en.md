[English](wui-head-en.md) | [Español](wui-head-es.md)

[wuijs-main-lib](../../README-en.md)

# WUIHead

Version: `0.5`

Utilities for HTML head management.

## Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/head/wui-head-0.5.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/head/wui-head-0.5.js) |

## Constructor

| Type    | Description |
| ------- | ----------- |
| WUIHead | `WUIHead()` |

## Properties

Class without properties.

## Methods

| Method             | Return type | Description |
| ------------------ | ----------- | ----------- |
| setTitle           | `void`      | `setTitle(name)`<br><br>Arguments:<br>**• name:** `string`<br><br>Sets the name of the HTML document using the `<title>` tag. |
| setMetaContent     | `void`      | `setMetaContent(name, content)`<br><br>Arguments:<br>**• name:** `string` <br>**• content:** `string`<br><br>Sets a meta value in the header of the HTML document using the `<meta>` tag.<br>Check specifications and compatibility in [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name). |
| setApplicationName | `void`      | `setApplicationName(content)`<br>Alias of `setMetaContent("application-name", content)`<br><br>Arguments:<br>**• content:** `string`<br><br>Sets the `application-name` meta value in the header of the HTML document. |
| setThemeColor      | `void`      | `setThemeColor(content)`<br>Alias of `setMetaContent("theme-color", content)`<br><br>Arguments:<br>**• content:** `string`<br><br>Sets the `theme-color` meta value in the header of the HTML document.<br>Check specifications and compatibility in [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/theme-color). |
| addLink            | `void`      | `addLink(path, options)`<br><br>Arguments:<br>**• path:** `string`, resource URL.<br>**• options:** `object`, properties to assign to the created `<link>` element (e.g. `rel`, `type`). If `options.refresh` is `true`, a dynamic get parameter is appended to `path` to force the resource to reload.<br><br>Adds a `<link>` element to the header of the HTML document. |
| addCss             | `void`      | `addCss(path)`<br>Alias of `addLink(path, { type: "text/css", rel: "stylesheet" })`<br><br>Arguments:<br>**• path:** `string`, CSS file URL.<br><br>Adds a CSS stylesheet to the header of the HTML document. |
| addScript          | `void`      | `addScript(path, options)`<br><br>Arguments:<br>**• path:** `string`, resource URL.<br>**• options:** `object`, properties to assign to the created `<script>` element (e.g. `type`, `async`). If `options.refresh` is `true`, a dynamic get parameter is appended to `path` to force the resource to reload.<br><br>Adds a `<script>` element to the header of the HTML document. |
| addJs              | `void`      | `addJs(path)`<br>Alias of `addScript(path, { type: "text/javascript" })`<br><br>Arguments:<br>**• path:** `string`, JavaScript file URL.<br><br>Adds a JavaScript file to the header of the HTML document. |
| addResources       | `void`      | `addResources(resources)`<br><br>Arguments:<br>**• resources:** `array`, list of resource objects with the keys:<br>**- path:** `string`, resource URL.<br>**- type:** `string` *optional*, `"css"` or `"js"`. If omitted, it is inferred from `path`'s extension (`.css` or `.js`).<br>**- enabled:** `boolean` or `function` *optional*, determines whether the resource is added. Default value is `true`.<br><br>Adds a batch of CSS stylesheets and JavaScript files to the header of the HTML document, delegating to `addCss()` or `addJs()` as appropriate. Each resource is skipped if `enabled` is `false` or returns `false`. |
| refresh            | `void`      | `refresh()`<br><br>Reloads JS and CSS files called from the `<head>` section of the HTML document, by appending a dynamic get parameter. |

## Implementation

HTML head:

```html
<title></title>
<meta name="application-name" content="">
<meta name="theme-color" content="">
<script type="text/javascript" src="/libraries/wui-js/main/head/wui-head-0.5.js"></script>
```

JS code:

```js
const init = () => {
	const head = new WUIHead();
	head.setTitle("Test title");
	head.setApplicationName("Test app");
	head.setThemeColor("#1e90ff");
}

window.addEventListener("DOMContentLoaded", init);
```

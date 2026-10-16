[English](wui-body-en.md) | [Español](wui-body-es.md)

[wuijs-main-lib](../../README-en.md)

# WUIBody

Version: `0.10`

Utilities for HTML body management. Allows the import of CSS/JS/HTML content and facilitates implementation in native mobile environments.

## Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/body/wui-body-0.10.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/body/wui-body-0.10.js) |

## Constructor

| Type    | Description |
| ------- | ----------- |
| WUIBody | `WUIBody([properties])`<br><br>Arguments:<br>**• properties:** `object` |

## Properties

| Property        | Type       | Default value | Description |
| --------------- | ---------- | ------------- | ----------- |
| environment     | `string`   | `"web"`       | (get/set)<br><br>Web interface deployment environment.<br><br>Values:<br>• `"web"`<br>• `"native.android"`<br>• `"native.ios"` |
| importDirectory | `string`   | `""`          | (get/set)<br><br>Relative path of the directory where the subdirectories for content import are hosted. |
| importMode      | `string`   | `"fetch"`     | (get/set)<br><br>Content retrieval method for upload.<br><br>Values:<br>• `"fetch"`<br>• `"xhr"`<br><br>When deploying to native environments using WebView for Android or WebKit for iOS, it is recommended to use `"xhr"`. |
| onCompleted     | `function` | `null`        | (get/set)<br><br>Function run when all content is imported and loaded into the body of the HTML page. |
| debug           | `boolean`  | `false`       | (get/set)<br><br>Test mode. Prints imported content to the console when the property value is `true`. |

## Methods

| Method         | Return type | Description |
| -------------- | ----------- | ----------- |
| import         | `void`      | `import(id, path[, done])`<br><br>Arguments:<br>**• id:** `string`, specifies the id of the HTML element where the content is to be loaded.<br>**• path:** `string`, specifies the subdirectory path and filename of the files with extension `.css`, `.htm` and `.js` that will be imported and loaded.<br>**• done:** `function` *optional*, this function is executed when the content loading has finished.<br><br>Imports CSS/JS/HTML content referenced to an HTML element by its `id`. The content is also commonly referred to as a "module" and is loaded in three parts:<br>**• CSS:** using a `<style>` element inserted before the HTML content.<br>**• HTML:** over the element identified by its `id`.<br>**• JS:** using a `<script>` element inserted into the body of the HTML document. |
| compose        | `void`      | `compose(fragments[, target][, auto])`<br><br>Arguments:<br>**• fragments:** `array`, array of objects describing the fragments to import. Each object accepts:<br>&nbsp;&nbsp;**◦ id:** `string`, id of the container HTML element for the fragment; also used as the `id` for `import()`.<br>&nbsp;&nbsp;**◦ path:** `string`, subdirectory path and filename of the files to import (equivalent to `import()`'s `path` argument).<br>&nbsp;&nbsp;**◦ tag:** `string` *optional*, tag name of the container element to create (default `"div"`). Only used when `auto` is `false`.<br>&nbsp;&nbsp;**◦ enabled:** `boolean` \| `function` *optional*, determines whether the fragment is imported. If a `function`, its return value is evaluated. Enabled by default.<br>&nbsp;&nbsp;**◦ fragments:** `array` *optional*, array of sub-fragments imported recursively once the current fragment's import finishes, targeting container elements already present in the imported content.<br>&nbsp;&nbsp;**◦ done:** `function` *optional*, function executed when the fragment (and its sub-fragments) finish importing.<br>**• target:** `HTMLElement` *optional*, HTML element the top-level fragments' containers are appended to. Defaults to `document.body`.<br>**• auto:** `boolean` *optional*, defaults to `true`. When `true`, the container tag is inferred from the fragment's `id`: `header` if it ends in "header", `footer` if it ends in "footer", `section` if it ends in "section", `form` if it ends in "form", `fieldset` if it ends in "fieldset", `button` if it ends in "button", `script` if it ends in "script", `div` otherwise. When `false`, each fragment's `tag` value is used.<br><br>Declaratively composes the CSS/JS/HTML content of multiple fragments from an array of descriptors. For each enabled fragment, creates a container element — not necessarily `<section>`, it can be `<form>`, `<fieldset>`, `<div>` or another tag — and delegates the import to `import()`. Sub-fragments declared in `fragments` are imported recursively targeting container elements already present in the imported content. |
| prepare        | `void`      | `prepare()`<br><br>Depending on the value of the `environment` parameter, modifies the HTML elements `a`, `input`, and `select` in the HTML document body to adapt them to native environments. |
| openUrl        | `void`      | `openUrl(url[, download])`<br><br>Arguments:<br><br>**• id:** `string`, specifies the URL that is required to be opened or downloaded.<br>**• download:** `string` *optional*, specifies the name of the file that will be used to download the content referenced by the URL.<br><br>Open or download content using a URL. This method is required in native environments since WebView on Android or WebKit on iOS aren't always supported. |
| isCompleted    | `boolean`   | `isCompleted()`<br><br>Returns `true` if all contents have been imported and loaded, `false` in case contr. |
| destroy        | `void`      | `destroy()`<br><br>Destroyer. |

## Implementation

CSS content of the `./fragments/my-fragment/fragment.css` file:

```css
.my-fragment {
	margin: 10px;
}

.my-fragment a,
.my-fragment a:visited {
	text-decoration: none;
	font-size: 20px;
	color: blue;
}
```

HTML content of the `./fragments/my-fragment/fragment.htm` file:

```html
<section id="myFragment" class="my-fragment">
	<a href="https://wuijs.dev" target="_blank">go to WUI/JS Project website!</a>
</section>
```

JS content of the `./fragments/my-fragment/fragment.js` file:

```js
const myFragmentContentLog = (content) => {
	const output = document.body.querySelector(".output");
	output.innerHTML = `<pre>${content}</pre>`;
}
```

CSS Code:

```css
html,
body {
	height: 100%;
	margin: 0;
	padding: 0;
}

body {
	font-family: Arial, Helvetica, Verdana, sans-serif;
	font-size: 14px;
}

.output {
	margin: 10px;
	font-family: monospace;
}
```

HTML head:

```html
<script type="text/javascript" src="/libraries/wui-js/main/body/wui-body-0.10.js"></script>
```

HTML code:

```html
<section id="myFragment"></section>
<div class="output"><pre>loading content...</pre></div>
```

JS code:

```js
const init = () => {
	const body = new WUIBody({
		//environment: "web",
		importDirectory: "./fragments/",
		//importMode: "fetch",
		onCompleted: () => {
			body.prepare();
		},
		debug: true
	});
	body.import("myFragment", "my-fragment/fragment", () => {
		myFragmentContentLog("test content loaded");
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-body-import&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-body-import&lang=en).

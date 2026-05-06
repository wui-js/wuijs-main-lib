> [!IMPORTANT]
> The GitHub account `@wuiproject` was migrated to `@wui-js` to match the name with the NPM account.

> [!WARNING]
> This document has not yet been finalized and is in a preliminary version.

> [!NOTE]
> Para la versión en Español de este documento, consulte [README-es.md](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md).

# wuijs-main-lib

<div align="center">
	<img src="https://github.com/wui-js/wuijs-main-lib/blob/main/imgs/logo/wuijs-main-logotype-color.svg" width="220" height="220">
</div>

**Library version**: `0.6.0` ([Change Log](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/CHANGELOG-en.md))

**Document version**: `0.6.0.20260501.0`

**License**: `Apache License 2.0`

**Author**: `Sergio E. Belmar V. <wuijs.project@gmail.com>`

## Index

*   [Overview](#overview)
	*   [About the WUI/JS Project](#project)
	*   [Classes Table](#classtable)
	*   [Directory Map](#dirmap)
*   [Install](#install)
*   [Implementation](#implementation)
	*   [Standard Implementation](#standard)
	*   [Abbreviated Implementation](#abbreviated)
*   [Classes](#classes)
    *   [WUICookie](#wui-cookie)
	*   [WUIHead](#wui-head)
	*   [WUIBody](#wui-body)
	*   [WUILanguage](#wui-language)
	*   [WUIScrolly](#wui-scrolly)
	*   [WUIIcon](#wui-icon)
	*   [WUIFade](#wui-fade)
	*   [WUILoader](#wui-loader)
	*   [WUITooltip](#wui-tooltip)
	*   [WUIModal](#wui-modal)
	*   [WUIPaging](#wui-paging)
	*   [WUISlider](#wui-slider)
	*   [WUITabs](#wui-tabs)
	*   [WUIMenubar](#wui-menubar)
	*   [WUIList](#wui-list)
	*   [WUITable](#wui-table)
	*   [WUIForm](#wui-form)
	*   [WUIFormat](#wui-format)
	*   [WUISelectpicker](#wui-selectpicker)
	*   [WUIDatepicker](#wui-datepicker)
	*   [WUITimepicker](#wui-timepicker)
	*   [WUIColorpicker](#wui-colorpicker)
	*   [WUISwitch](#wui-switch)
	*   [WUIIntensity](#wui-intensity)
	*   [WUIButton](#wui-button)
*	[Good Coding Practices](#goodpractices)
*   [Demos](#demos) (CodeSandbox)

<a name="overview"></a>

## Overview

WUI/JS Main Lib, an acronym for *Web User Interface JavaScript library*, is an open source JavaScript/CSS vanilla library for the rapid implementation of Web user interfaces composed of 25 classes, which can be used independently or together.

<a name="project"></a>

### About the WUI/JS Project

WUI/JS Main Lib is part of the WUI/JS project, which currently consists of 4 repositories:

-	[https://github.com/wui-js/wuijs-main-lib](https://github.com/wui-js/wuijs-main-lib)<br>
	Main UI library.<br><br>
-	[https://github.com/wui-js/wuijs-plugins-lib](https://github.com/wui-js/wuijs-plugins-lib)<br>
	UI plugins library.<br><br>
-	[https://github.com/wui-js/wuijs-environment-lib](https://github.com/wui-js/wuijs-environment-lib)<br>
	Bridge library between a web environments and native web rendering engines.<br><br>
-	[https://github.com/wui-js/wuijs-demos](https://github.com/wui-js/wuijs-demos)<br>
	Repository with demos and usage examples for the project libraries.<br><br>

<a name="classtable"></a>

### Classes Table

| Class name                           | Version | Description |
| ------------------------------------ | -------:| ----------- |
| [WUICookie](#wui-cookie)             | `0.4`   | Utilities for cookies management. |
| [WUIHead](#wui-head)                 | `0.3`   | Utilities for HTML head management. |
| [WUIBody](#wui-body)                 | `0.3`   | Utilities for HTML body management. Allows the import of CSS/JS/HTML content and facilitates implementation in native mobile environments. |
| [WUILanguage](#wui-language)         | `0.3`   | Utilities for interfaces with different languages managment. Allows you to load language files in JS or JSON format and dynamically update the content of HTML elements based on the language. |
| [WUIScrolly](#wui-scrolly)           | `0.5`   | Utilities for animating HTML elements managment using the "onscroll" event of the HTML page body. |
| [WUIIcon](#wui-icon)                 | `0.3`   | Pre-designed icons set loaded via CSS, for use in interfaces. |
| [WUIFade](#wui-fade)                 | `0.3`   | Utilities for fading out and fading control in HTML elements with opacity. |
| [WUILoader](#wui-loader)             | `0.4`   | Component for the implementation of loading animations. |
| [WUITooltip](#wui-tooltip)           | `0.3`   | Component for the implementation of tooltip texts. |
| [WUIModal](#wui-modal)               | `0.5`   | Component for the implementation of dialog boxes (type `message`) and pop-up windows (type `page`). |
| [WUIPaging](#wui-paging)             | `0.4`   | Component for the implementation of paginated views with animated transitions. |
| [WUISlider](#wui-slider)             | `0.5`   | Component for the implementation of slide presentations controlled by mouse/touch dragging and/or by event. |
| [WUITabs](#wui-tabs)                 | `0.3`   | Component for the implementation of views accessible by tab selection. |
| [WUIMenubar](#wui-menubar)           | `0.4`   | Component for the implementation of menu bars. |
| [WUIList](#wui-list)                 | `0.4`   | Component for the implementation of data lists and buttons for each row optionally. |
| [WUITable](#wui-table)               | `0.5`   | Component for the implementation of data tables. Unlike the `WUIList` component, the `WUITable` component includes a column header. |
| [WUIForm](#wui-form)                 | `0.5`   | Component for the implementation of data forms. This component allows the implementation of HTML data input elements such as `<input>`, `<select>`, and `<textarea>`, and WUI library objects such as `WUISelectpicker`, `WUIDatepicker`, `WUITimepicker`, `WUIColorpicker`, `WUISwitch`, `WUIIntensity`, and `WUIButton`. |
| [WUIFormat](#wui-format)             | `0.3`   | Utilities for management and validation `string`, `number` and `Date` data formats. |
| [WUISelectpicker](#wui-selectpicker) | `0.5`   | Component for the implementation of multiple or exclusive selection list data inputs based on HTML element `<select>`. |
| [WUIDatepicker](#wui-datepicker)     | `0.5`   | Component for the implementation of date type data inputs based on HTML element `<input type="date">`. |
| [WUITimepicker](#wui-timepicker)     | `0.5`   | Component for the implementation of time type data inputs based on HTML element `<input type="time">`. |
| [WUIColorpicker](#wui-colorpicker)   | `0.5`   | Component for the implementation of color picker type data inputs based on HTML element `<input type="color">`. |
| [WUISwitch](#wui-switch)             | `0.6`   | Component for the implementation of checkbox type data inputs based on HTML element `<input type="checkbox">`. |
| [WUIIntensity](#wui-intensity)       | `0.4`   | Component for the implementation of 4-level intensity selector type data inputs: none, low, half, and high based on HTML element `<input type="range">`. |
| [WUIButton](#wui-button)             | `0.5`   | Component for the implementation of based on HTML element `<button>`. |

<a name="dirmap"></a>

### Directory Map

```bash
wuijs-main-lib/
├── docs/
├── imgs/
│   ├── icons/
│   └── logo/
├── legacy/
│   └── wui-js/
│       └── main/
├── src/
│   └── wui-js/
│       └── main/
├── tools/
└── tests/
```

| Path                                                                                         | Description |
| -------------------------------------------------------------------------------------------- | ----------- |
| [docs](https://github.com/wui-js/wuijs-main-lib/tree/main/docs/)                             | Documentation. |
| [imgs](https://github.com/wui-js/wuijs-main-lib/tree/main/imgs/)                             | Images used in the documentation. |
| [imgs/icons](https://github.com/wui-js/wuijs-main-lib/tree/main/imgs/icons/)                 | Icons generated by the `/tools/svg-icon-maker.py` tool from the WUIIcon class. |
| [imgs/logo](https://github.com/wui-js/wuijs-main-lib/tree/main/imgs/logo/)                   | Project logo and isotype in SVG and PNG format. |
| [legacy](https://github.com/wui-js/wuijs-main-lib/tree/main/legacy/)                         | Deprecated sources with previous versions. |
| [legacy/wui-js](https://github.com/wui-js/wuijs-main-lib/tree/main/legacy/wui-js/)           | WUI/JS Project directory. |
| [legacy/wui-js/main](https://github.com/wui-js/wuijs-main-lib/tree/main/legacy/wui-js/main/) | WUI/JS Main library (previous versions). |
| [src](https://github.com/wui-js/wuijs-main-lib/tree/main/src/)                               | Main sources of the latest version. |
| [src/wui-js](https://github.com/wui-js/wuijs-main-lib/tree/main/src/wui-js)                  | WUI/JS Project directory. |
| [src/wui-js/main](https://github.com/wui-js/wuijs-main-lib/tree/main/src/wui-js/main/)       | WUI/JS Main library. |
| [tools](https://github.com/wui-js/wuijs-main-lib/tree/main/tools/)                           | Complementary tools. |
| [tests](https://github.com/wui-js/wuijs-main-lib/tree/main/tests/)                           | Testing scripts. |

<a name="install"></a>

## Install

**Option 1: Install from source**

To install the WUI/JS library from GitHub, you must clone the official distribution repository (`wui-js/wuijs-main-lib`).
Assuming the project where it will be deployed has a source directory: `./src` and within that, a `./src/libraries` library directory, you must type the following in the terminal:

```bash
git clone https://git@github.com/wui-js/wuijs-main-lib.git
cp -r ./wuijs-main-lib/src/wui-js/ ../src/libraries/
```

Optionally, it can be downloaded from the same repositories in ZIP format.

```bash
wget https://github.com/wui-js/wuijs-main-lib/archive/refs/heads/main.zip
unzip main.zip
cp -r ./wuijs-main-lib-main/src/wui-js/ ../src/libraries/
```

**Option 2: Install via npm**

To install the WUI/JS library via npm:

```bash
npm i @wui-js/main
```

The resources will be available at the path `./node_modules/@wui-js/main`.

<a name="implementation"></a>

## Implementation

The WUI library can be included in a project in two ways: in standard mode, by linking the CSS and JS files of each component individually, or in abbreviated mode, using the `wui.js` script that automatically manages the loading of the indicated components.

> [!NOTE]
> The use of the `wui.css` configuration file was deprecated starting from version `0.6.0`.

<a name="standard"></a>

### Standard Implementation

To enable all classes, the CSS and JS dependencies of the libraries must be implemented in the HTML header of the web page.

Assuming the library resources are located in the relative path `/libraries/` directory, the HTML header looks like this:

HTML code:

```html
<!DOCTYPE html>
<html>
	<head>
		<title></title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover">
		<meta name="application-name" content="">
		<meta name="theme-color" content="">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/scrolly/wui-scrolly-0.5.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/scrolly/wui-scrolly-0.5.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.3.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.3.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/loader/wui-loader-0.4.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/loader/wui-loader-0.4.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tooltip/wui-tooltip-0.3.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tooltip/wui-tooltip-0.3.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/modal/wui-modal-0.5.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/modal/wui-modal-0.5.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/paging/wui-paging-0.4.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/paging/wui-paging-0.4.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/slider/wui-slider-0.5.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/slider/wui-slider-0.5.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tabs/wui-tabs-0.3.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tabs/wui-tabs-0.3.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/menubar/wui-menubar-0.4.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/menubar/wui-menubar-0.4.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/list/wui-list-0.4.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/list/wui-list-0.4.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/table/wui-table-0.5.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/table/wui-table-0.5.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/form/wui-form-0.5.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/form/wui-form-0.5.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/selectpicker/wui-selectpicker-0.5.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/selectpicker/wui-selectpicker-0.5.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/datepicker/wui-datepicker-0.5.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/datepicker/wui-datepicker-0.5.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/timepicker/wui-timepicker-0.5.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/timepicker/wui-timepicker-0.5.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/colorpicker/wui-colorpicker-0.5.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/colorpicker/wui-colorpicker-0.5.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/switch/wui-switch-0.6.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/switch/wui-switch-0.6.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/intensity/wui-intensity-0.4.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/intensity/wui-intensity-0.4.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/button/wui-button-0.3.css">
		<script type="text/javascript" src="/libraries/wui-js/main/cookie/wui-cookie-0.4.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/head/wui-head-0.3.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/body/wui-body-0.3.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/language/wui-language-0.3.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/scrolly/wui-scrolly-0.5.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/fade/wui-fade-0.3.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/loader/wui-loader-0.4.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/tooltip/wui-tooltip-0.3.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/modal/wui-modal-0.5.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/paging/wui-paging-0.4.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/slider/wui-slider-0.5.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/tabs/wui-tabs-0.3.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/menubar/wui-menubar-0.4.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/list/wui-list-0.4.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/table/wui-table-0.5.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/form/wui-form-0.5.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/format/wui-format-0.3.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/selectpicker/wui-selectpicker-0.5.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/datepicker/wui-datepicker-0.5.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/timepicker/wui-timepicker-0.5.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/colorpicker/wui-colorpicker-0.5.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/switch/wui-switch-0.6.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/intensity/wui-intensity-0.4.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/button/wui-button-0.3.js"></script>
	</head>
	<body>
	</body>
</html>
```

> [!NOTE]
> This implementation assumes installation via GitHub.
> If installed via NPM, the resource calls are made using the path `/node_modules/wui/`.
> ```html
> <script src="node_modules/@wui-js/main/button/wui-button-0.3.js"></script>
> ```

> [!TIP]
> If you need to customize the design, you can add a CSS file with the customization of the CSS variables in the `*.root.css` files that are needed.
> According to WUI/JS project standard, this file is called `wui.root.css`.

<a name="abbreviated"></a>

### Abbreviated Implementation

Starting with version 0.4.0, a resource loader was added for the simplified implementation of WUI libraries.
This loader allows you to integrate all WUI libraries into a web page, either full or partial, without requiring the manual inclusion of the corresponding JavaScript and CSS files for each library.

```html
<!DOCTYPE html>
<html>
	<head>
		<title></title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover">
		<meta name="application-name" content="">
		<meta name="theme-color" content="">
		<link type="text/css" rel="stylesheet" href="./Settings/wui.root.css">
		<script type="text/javascript" src="/libraries/wui-js/main/wui.js?v=0.6.0"></script>
	</head>
	<body>
	</body>
</html>
```

To specify the WUI library version, you must add the `version` parameter (or its short alias `v`) to the URL of the `wui.js` file.
If the `version` parameter is not specified, the installed version will be assumed.

> [!TIP]
> For a correct abbreviated implementation, review the [Good Coding Practices](#goodpractices) section.

> [!TIP]
> For a simplified implementation of the `wui.root.css` file, you can optionally use the [WUIPluginThemes](https://github.com/wui-js/wuijs-plugins-lib?tab=readme-ov-file#wuipluginthemes) plugin provided in the [wuijs-plugins-lib](https://github.com/wui-js/wuijs-plugins-lib) library.

Optionally, libraries can be included individually. To do this, add them to the `wui.js` file URL using the `class` parameter (or its short alias `c`).
Library names passed in the `class` parameter should not contain the version suffix (`-x.x`) as the version will be automatically defined by the simple load script.

```html
<script type="text/javascript" src="/libraries/wui-js/main/wui.js?v=0.6.0&c=selectpicker,switch"></script>
```

> [!NOTE]
> The `class` parameter does not distinguish between uppercase and lowercase.

Additionally, you can omit loading the `root.css` files for each library by adding the `root` parameter with the value `0` (zero) to the `wui.js` file URL.

```html
<script type="text/javascript" src="/libraries/wui-js/main/wui.js?v=0.6.0&c=selectpicker,switch&r=0"></script>
```

> [!TIP]
> You can check this functional example in CodeSandbox at the link: [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/resource-loader/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/resource-loader/basic).

<a name="classes"></a>

## Classes

<a name="wui-cookie"></a>

### WUICookie

Version: `0.4`

Utilities for cookies management.

#### Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/cookie/wui-cookie-0.4.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/cookie/wui-cookie-0.4.js) |

#### Constructor

| Type      | Description |
| --------- | ----------- |
| WUICookie | `WUICookie([properties])`<br><br>Arguments:<br>**• properties:** `object` |

#### Propiedades Públicas

| Nombre  | Tipo     | Descripción |
| ------- | -------- | ----------- |
| version | `string` | Versión del plugin. |

#### Properties

| Property | Type      | Default value       | Description |
| -------- | --------- | ------------------- | ----------- |
| domain   | `string`  | `location.hostname` | (get/set)<br><br>Define the domain for which the cookie is accessible. By default, it's the current host. Setting it to a parent domain (e.g., example.com for sub.example.com) makes it accessible to subdomains. |
| path     | `string`  | `"./"`              | (get/set)<br><br>Specifies the path for which the cookie is valid. The default value is the current path, with an empty value being equivalent to this. Setting "/" makes the cookie accessible across the entire domain. |
| minutes  | `number`  | `525600`            | (get/set)<br><br>Specifies the duration, measured in minutes, for the cookie to remain active. The default value is 365 days. |
| overssl  | `boolean` | `false`             | (get/set)<br><br>If set to `true`, the cookie will only be sent over HTTPS connections. |

#### Methods

| Method | Return type | Description |
| ------ | ----------- | ----------- |
| encode | `string`    | `encode(name, value[, options])`<br><br>Arguments:<br>**• name:** `string` <br>**• value:** `string` <br>**• options:** `object` *optional*<br><br>Returns the encoded string of a cookie. |
| set    | `string`    | `set(name, value[, options])`<br><br>Arguments:<br>**• name:** `string` <br>**• value:** `string` <br>**• options:** `object` *optional*<br><br>Add or modify a cookie and returns its encoded string. |
| get    | `string`    | `get(name)`<br><br>Arguments:<br>**• name:** `string`<br><br>Reads the contents of a cookie by its name. |
| remove | `void`      | `remove(name)`<br><br>Arguments:<br>**• name:** `string`<br><br>Removes a cookie by its name. |

#### Implementation

CSS Code:

```css
html,
body {
	height: 100%;
	margin: 0;
	padding: 0;
}

.my-output {
	font-family: monospace;
}
```

HTML head:

```html
<script type="text/javascript" src="/libraries/wui-js/main/cookie/wui-cookie-0.4.js"></script>
```

HTML code:

```html
<div class="my-output"></div>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".my-output");
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
> You can check this functional example in CodeSandbox at the link: [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/cookie/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/cookie/basic).

<a name="wui-head"></a>

### WUIHead

Version: `0.3`

Utilities for HTML head management.

#### Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/head/wui-head-0.3.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/head/wui-head-0.3.js) |

#### Constructor

| Type    | Description |
| ------- | ----------- |
| WUIHead | `WUIHead()` |

#### Properties

Class without properties.

#### Methods

| Method             | Return type | Description |
| ------------------ | ----------- | ----------- |
| setTitle           | `void`      | `setTitle(name)`<br><br>Arguments:<br>**• name:** `string`<br><br>Sets the name of the HTML document using the `<title>` tag. |
| setMetaContent     | `void`      | `setMetaContent(name, content)`<br><br>Arguments:<br>**• name:** `string` <br>**• content:** `string`<br><br>Sets a meta value in the header of the HTML document using the `<meta>` tag.<br>Check specifications and compatibility in [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name). |
| setApplicationName | `void`      | `setApplicationName(content)`<br>Alias of `setMetaContent("application-name", content)`<br><br>Arguments:<br>**• content:** `string`<br><br>Sets the `application-name` meta value in the header of the HTML document. |
| setThemeColor      | `void`      | `setThemeColor(content)`<br>Alias of `setMetaContent("theme-color", content)`<br><br>Arguments:<br>**• content:** `string`<br><br>Sets the `theme-color` meta value in the header of the HTML document.<br>Check specifications and compatibility in [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/theme-color). |
| refresh            | `void`      | `refresh()`<br><br>Reloads JS and CSS files called from the `<head>` section of the HTML document, by appending a dynamic get parameter. |

#### Implementation

HTML head:

```html
<title></title>
<meta name="application-name" content="">
<meta name="theme-color" content="">
<script type="text/javascript" src="/libraries/wui-js/main/head/wui-head-0.3.js"></script>
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

<a name="wui-body"></a>

### WUIBody

Version: `0.3`

Utilities for HTML body management. Allows the import of CSS/JS/HTML content and facilitates implementation in native mobile environments.

#### Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/body/wui-body-0.3.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/body/wui-body-0.3.js) |

#### Constructor

| Type    | Description |
| ------- | ----------- |
| WUIBody | `WUIBody([properties])`<br><br>Arguments:<br>**• properties:** `object` |

#### Properties

| Property        | Type       | Default value | Description |
| --------------- | ---------- | ------------- | ----------- |
| environment     | `string`   | `"web"`       | (get/set)<br><br>Web interface deployment environment.<br><br>Values:<br>• `"web"`<br>• `"native.android"`<br>• `"native.ios"` |
| importDirectory | `string`   | `""`          | (get/set)<br><br>Relative path of the directory where the subdirectories for content import are hosted. |
| importMode      | `string`   | `"fetch"`     | (get/set)<br><br>Content retrieval method for upload.<br><br>Values:<br>• `"fetch"`<br>• `"xhr"`<br><br>When deploying to native environments using WebView for Android or WebKit for iOS, it is recommended to use `"xhr"`. |
| onCompleted     | `function` | `null`        | (get/set)<br><br>Function run when all content is imported and loaded into the body of the HTML page. |
| debug           | `boolean`  | `false`       | (get/set)<br><br>Test mode. Prints imported content to the console when the property value is `true`. |

#### Methods

| Method  | Return type | Description |
| ------- | ----------- | ----------- |
| import  | `void`      | `import(id, path[, done])`<br><br>Arguments:<br>**• id:** `string`, specifies the id of the HTML element where the content is to be loaded.<br>**• path:** `string`, specifies the subdirectory path and filename of the files with extension `.css`, `.htm` and `.js` that will be imported and loaded.<br>**• done:** `function` *optional*, this function is executed when the content loading has finished.<br><br>Imports CSS/JS/HTML content referenced to an HTML element by its `id`. The content is also commonly referred to as a "module" and is loaded in three sections:<br>**• CSS:** using a `<style>` element inserted before the HTML content.<br>**• HTML:** over the element identified by its `id`.<br>**• JS:** using a `<script>` element inserted into the body of the HTML document. |
| prepare | `void`      | `prepare()`<br><br>Depending on the value of the `environment` parameter, modifies the HTML elements `a`, `input`, and `select` in the HTML document body to adapt them to native environments. |
| openURL | `void`      | `openURL(url[, download])`<br><br>Arguments:<br><br>**• id:** `string`, specifies the URL that is required to be opened or downloaded.<br>**• download:** `string` *optional*, specifies the name of the file that will be used to download the content referenced by the URL.<br><br>Open or download content using a URL. This method is required in native environments since WebView on Android or WebKit on iOS aren't always supported. |
| destroy | `void`      | `destroy()`<br><br>Destroyer. |

#### Implementation

CSS content of the `./modules/test/module.css` file:

```css
.test a,
.test a:visited {
	text-decoration: none;
	font-size: 20px;
	color: blue;
}
```

HTML content of the `./modules/test/module.htm` file:

```html
<section id="testContent" class="test">
	<a href="https://wuijs.dev" target="_blank">go to WUI/JS Project website!</a>
</section>
```

JS content of the `./modules/test/module.js` file:

```js
const testContentLog = (content) => {
	const output = document.body.querySelector(".my-output");
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

.my-output {
	font-family: monospace;
}
```

HTML head:

```html
<script type="text/javascript" src="/libraries/wui-js/main/body/wui-body-0.3.js"></script>
```

HTML code:

```html
<section id="testContent"></section>

<div class="my-output"><pre>loading content...</pre></div>
```

JS code:

```js
const init = () => {
	const body = new WUIBody({
		//environment: "web",
		importDirectory: "./modules/",
		//importMode: "fetch",
		onCompleted: () => {
			body.prepare();
		},
		debug: true
	});
	body.import("testContent", "test/module", () => {
		testContentLog("test content loaded");
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!TIP]
> You can check this functional example in CodeSandbox at the link: [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/body/import](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/body/import).

<a name="wui-language"></a>

### WUILanguage

Version: `0.3`

Utilities for interfaces with different languages managment. Allows you to load language files in JS or JSON format and dynamically update the content of HTML elements based on the language.

#### Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/language/wui-language-0.3.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/language/wui-language-0.3.js) |

#### Constructor

| Type        | Description |
| ----------- | ----------- |
| WUILanguage | `WUILanguage([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property   | Type       | Default value     | Description |
| ---------- | ---------- | ----------------- | ----------- |
| selector   | `string`   | `".wui-language"` | (get/set)<br><br>CSS selector for HTML elements to be loaded. This can be applied to the `content` attribute of the `meta` element, to the `innerHTML` property of the elements: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `div`, `span`, `p`, `i`, `li`, `a`, `legend`, `label`, `option`, `data`, `button`, and to the `placeholder` attribute of the `input` and `textarea` elements. |
| directory  | `string`   | `"languages/"`    | (get/set)<br><br>Path to the directory where the language files are located. |
| sets       | `array`    | `["main"]`        | (get/set)<br><br>List of language set names to load. |
| lang       | `string`   | `"en"`            | (get/set)<br><br>Language code in ISO 639-1 format. |
| mode       | `string`   | `"js"`            | (get/set)<br><br>Language file format.<br><br>Values:<br>• `"js"`<br>• `"json"` |
| dataKey    | `string`   | `"key"`           | (get/set)<br><br>Name of the `data-*` attribute that contains the text key in HTML elements. |
| dataOutput | `string`   | `"text"`          | (get/set)<br><br>Name of the `data-*` attribute where the loaded text can be placed. |
| onLoad     | `function` | `null`            | (get/set)<br><br>Function run when the language loading has finished. |

#### Methods

| Method  | Return type | Description |
| ------- | ----------- | ----------- |
| load    | `void`      | `load([lang[, sets]])`<br><br>Arguments:<br>**• lang:** `string` *optional* (default value corresponds to the `lang` property of the object)<br>**• sets:** `array` *optional* (default value corresponds to the `sets` property of the object)<br><br>Loads the language files indicated by language and set, and updates the HTML elements marked with the CSS selector. |
| refresh | `void`      | `refresh([selector[, lang]])`<br><br>Arguments:**• selector:** `string` *optional* (default value corresponds to the `selector` property of the object)<br>**• lang:** `string` *optional* (default value corresponds to the `lang` property of the object)<br><br>Reloads the text contained in the nested elements of the HTML element specified in the `selector` argument. |
| destroy | `void`      | `destroy()`<br><br>Destroyer. |

#### Implementation

JS code file `main-en.js`:

```js
return {
	titles: {
		test: "Test title"
	},
	texts: {
		test: "Test text"
	}
};
```

> [!IMPORTANT]
> If `js` is used as the format for language files, said file must be initialized by the `return` keyword followed by a `{}` object.

JSON code file `main-en.json`:

```json
{
	"titles": {
		"test": "Test title"
	},
	"texts": {
		"test": "Test text"
	}
}
```

HTML head:

```html
<script type="text/javascript" src="/libraries/wui-js/main/language/wui-language-0.3.js"></script>
```

HTML code:

```html
<h1 class="wui-language" data-key="titles.test"></h1>
<div class="wui-language" data-key="texts.test"></div>
```

JS code:

```js
const init = () => {
	const language = new WUILanguage({
		//selector: ".wui-language",
		//directory: "./languages/",
		//sets: ["main"],
		lang: "en",
		//mode: "js",
		//dataKey: "key",
		//dataOutput: "text",
		onLoad: (...args) => {
			[lang, languages] = args;
			console.log("Language loaded:", lang, languages);
		}
	});
	let lang = language.lang;
	let languages = {};
	language.load();                  // Option 1
	//language.load("en");            // Option 2
	//language.load("en", ["main"]);  // Option 3
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> The language file must be in the path `./languages/main-en.js` or `./languages/main-en.json` depending on the set, language and mode used. It is important that language files are in the form `{set}-{lang}.{mode}`, otherwise the file cannot be imported.

It is possible to combine sets of files from the same language, for example, if you have a `main-es.js` file and another `main2-es.js` file that complements the first, they can be called simultaneously using the `sets` property.

JS code:

```js
// Option 1: Update the sets property and then reload.
language.sets = ["main", "main2"];
language.load(); 

// Option 2: Reload by passing the combination of sets as a parameter.
language.load("en", ["main", "main2"]);
```

> [!TIP]
> If you want to add dynamic content within a text, It is recommended to use the `js` language file format (`mode: "js"`) and add the text using the string interpolation method, also known as template literals. I.e. ``mykey: `My ${var} text` ``.

<a name="wui-scrolly"></a>

### WUIScrolly

Versión: `0.5`

Utilities for animating HTML elements managment using the "onscroll" event of the HTML page body.

#### Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/scrolly/wui-scrolly-0.5.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/scrolly/wui-scrolly-0.5.js) |
| CSS  | [src/wui-js/main/scrolly/wui-scrolly-0.5.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/scrolly/wui-scrolly-0.5.css) |
| CSS  | [src/wui-js/main/scrolly/wui-scrolly-0.5.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/scrolly/wui-scrolly-0.5.root.css) |

#### Constructor

| Type       | Description |
| ---------- | ----------- |
| WUIScrolly | `WUIScrolly([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property      | Type       | Default value               | Description |
| ------------- | ---------- | --------------------------- | ----------- |
| sections      | `array`    | `[]`                        | (get/set)<br><br>List of objects with the settings of the sections that will be incorporated into the animation, as defined in **Section Options**. These can be defined directly on this property or using the `addSection()` method. |
| behavior      | `string`   | `"smooth"`                  | (get/set)<br><br>Behavior for moving focus to the body of the HTML page.<br><br>Values:<br>• `"auto"`<br>• `"smooth"` |
| dataScrollY   | `string`   | `"scrollY"`                 | (get/set)<br><br>Name of the `data-*` attribute of the main document element (`<html>` / `document.documentElement`) that contains the numeric value measured in pixels of the total vertical scrolling of the HTML page, where `0` represents the top of the document (or no movement). |
| dataDelay     | `string`   | `"delay"`                   | (get/set)<br><br>Name of the `data-*` attribute that determines the time, measured in milliseconds, that it takes for an HTML element animated using CSS styles to animate once it is given focus. |
| onStart       | `function` | `null`                      | (get/set)<br><br>Function run when the scroll movement starts, either through the `scroll` events for the mouse or `touchmove` for the touch screen. |
| onMove        | `function` | `null`                      | (get/set)<br><br>Function run when the scroll movement is executed, either through the `scroll` events for the mouse or `touchmove` for the touch screen. |
| onStop        | `function` | `null`                      | (get/set)<br><br>Function run when the scroll movement ends, either through the `scroll` events for the mouse or `touchmove` for the touch screen. |
| scrollY       | `number`   | `0`                         | (get)<br><br>Vertical position of the page measured in pixels. |
| deltaY        | `number`   | `0`                         | (get)<br><br>Last step of scrolling in the vertical movement of the page, measured in pixels. |
| direction     | `string`   | `null`                      | (get)<br><br>Direction of vertical page movement.<br><br>Values:<br>• `"up"`<br>• `"down"` |
| sceneWidth    | `number`   | `WUIScrolly.screenWidth()`  | (get)<br><br>Scene width measured in pixels. |
| sceneHeight   | `number`   | `WUIScrolly.screenHeight()` | (get)<br><br>Scene height measured in pixels. |
| sceneIndex    | `number`   | `null`                      | (get)<br><br>Scene number. |
| sceneStep     | `number`   | `null`                      | (get)<br><br>Step number in a scene. |
| sceneProgress | `number`   | `null`                      | (get)<br><br>Percentage of progress of a step in a scene, with values ​​between `0` and `1`. |
| debug         | `boolean`  | `false`                     | (get/set)<br><br>Test mode. Prints to the console the `selector` and `height` values ​​of the scenes added in the startup instance, and `scrollY`, `y`, `index`, `sceneIndex`, `step`, `sceneStep`, and `progress` when they change. Enabled when the property value is `true`. |

#### Section Options

| Property  | Type       | Default value | Description |
| --------- | ---------- | ------------- | ----------- |
| selector  | `string`   | `undefined`   | CSS selector that defines the HTML element to be included as a section. If more than one element matches the selector, only the first match will be included. *oblogatory* |
| target    | `string`   | `undefined`   | Auxiliary name for referencing the section. Used in the `goSection()` method. |
| type      | `string`   | `"auto"`      | CSS behavior of the section height.<br><br>Values:<br>• `"auto"`<br>• `"static"` |
| height    | `number`   | `undefined`   | Section height. This can be expressed as a number associated with pixels or in a CSS compatible format. |
| steps     | `number`   | `undefined`   | Total number of steps defined in the `animation` animation function. |
| pages     | `number`   | `undefined`   | Total number of pages defined in the `animation` animation function. |
| animation | `function` | `undefined`   | `function(step, progress)`<br><br>Arguments:<br>**• step:** `number`, value between `0` and `pages - 1` <br>**• progress:** `number`, value between `0` and `1` <br><br>Function run when the scroll movement is executed in a section. |

#### Methods

| Method     | Return type | Description |
| ---------- | ----------- | ----------- |
| init       | `void`      | `init()`<br><br>Initializes the object once the sections that make up the HTML page have been added. |
| stop       | `void`      | `stop()`<br><br>Interrupts the animation in its execution cycle. |
| addSection | `void`      | `addSection(options)`<br><br>Adds a new animated section settings to the object's section list, as defined in **Section Options:**. |
| goSection  | `void`      | `goSection(target[, done[, behavior]])`<br><br>Arguments:<br>**• target:** `string` <br>**• done:** `function` <br>**• behavior:** `string` <br><br>Moves the focus of the HTML page to the section specified by the `target` parameter. |
| selectPage | `void`      | `selectPage(sectionIndex, pageIndex)`<br><br>Arguments:<br>**• sectionIndex:** `number`, values ​​from `0` <br>**• pageIndex:** `number`, value between `0` and `pages - 1` <br><br>Moves the focus of the HTML page to the section specified by the `sectionIndex` parameter and advances to the `pageIndex` page in that section. |
| drawCenter | `void`      | `drawCenter()`<br><br>Draws the center of the visible part of the HTML page in the browser. |
| drawRuler  | `void`      | `drawRuler()`<br><br>Draws a vertical ruler with pixel measurements, on the left side of the HTML page. |
| destroy    | `void`      | `destroy()`<br><br>Destroyer. |

#### CSS Variables

| Variable                               | Description |
| -------------------------------------- | ----------- |
| `--wui-scrolly-paging-bgcolor-hidden`  | Unselected page indicator color. |
| `--wui-scrolly-paging-bgcolor-visible` | Selected page indicator color. |

#### CSS Styles for Animation

| Style         | Description |
| ------------- | ----------- |
| .fadein       | Enter and exits with opacity without movement. |
| .fadein-up    | Enter and exits with opacity from above. |
| .fadein-top   | Alias ​​of `.fadein-up`. |
| .fadein-left  | Enter and exit with opacity from the left. |
| .fadein-right | Enter and exit with opacity from the right. |

#### Implementation

CSS code:

```css
html,
body {
	height: 100%; /* necessary */
}

body {
	font-family: Arial, Helvetica, Verdana, sans-serif;
	font-size: 14px;
}

.wui-scrolly {
	overflow-x: hidden;
	margin: 0;
	padding: 0;
}

.wui-scrolly > .section {
	width: 100%;
	background-color: lightgray;
}

.wui-scrolly > .section > .scene > .animation {
	position: relative;
}

.wui-scrolly > .section1 {
	background-color: #f1f1f1;
}

.wui-scrolly > .section2 > .scene.scene2 {
	display: flex;
	position: relative; /* necessary */
	align-items: center;
	justify-content: center;
	flex-direction: row;
	gap: 20px;
}

.wui-scrolly > .section2 {
	background-color: #e9e9e9;
}

.wui-scrolly > .section3 {
	background-color: #e1e1e1;
}

.wui-scrolly > .section3 > .scene > .animation > .my-element {
	left: -100px;
}

.my-element {
	display: flex;
	position: relative; /* necessary */
	width: 50px;
	height: 50px;
	margin: 5px;
	margin: 20px;
	background-color: dodgerblue;
	align-items: center;
	justify-content: center;
	color: #fff;
}

.my-output {
	margin: 10px;
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/scrolly/wui-scrolly-0.5.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/scrolly/wui-scrolly-0.5.css">
<script type="text/javascript" src="/libraries/wui-js/main/scrolly/wui-scrolly-0.5.js"></script>
```

HTML code:

```html
<body class="wui-scrolly">

	<!-- Cover -->

	<section class="section section1">
		<div class="scene">scroll down</div>
	</section>

	<!-- CSS animation -->

	<section class="section section2">
		<div class="scene scene2">
			<div class="my-element wui-scrolly-load fadein" data-delay=".0">1</div>
			<div class="my-element wui-scrolly-load fadein-left" data-delay=".2">2</div>
			<div class="my-element wui-scrolly-load fadein-top" data-delay=".4">3</div>
			<div class="my-element wui-scrolly-load fadein-right" data-delay=".8">4</div>
		</div>
	</section>

	<!-- JS animation -->

	<section class="section section3">
		<div class="scene">
			<div class="animation">
				<div class="my-element element5">5</div>
				<div class="my-element element6">6</div>
				<div class="my-element element7">7</div>
			</div>
			<div class="my-output"></div>
		</div>
		<div class="paging dots"></div>
	</section>
</body>
```

JS code:

```js
const init = () => {
	const element5 = document.body.querySelector(".section3 .my-element.element5");
	const element6 = document.body.querySelector(".section3 .my-element.element6");
	const element7 = document.body.querySelector(".section3 .my-element.element7");
	const output = document.body.querySelector(".section3 .my-output");
	const scrolly = new WUIScrolly({
		sections: [{
			selector: ".section1",
			target: "cover",
			type: "static",
			height: "100%"
		}, {
			selector: ".section2",
			target: "css-animation",
			type: "static",
			height: 400
		}, {
			selector: ".section3",
			target: "js-animation",
			type: "auto",
			height: 4500,
			steps: 3,
			pages: 3,
			animation: (step, progress) => {
				const direction = scrolly.direction;
				const left = step != null ? parseInt(200 * progress - 100) + "px" : "100px";
				const text = `step: ${step}, progress: ${progress}, direction: ${direction}`;
				scrolly.selectPage(2, step);
				if (step == 0) {
					if (direction == "up") {
						element6.style.left = "-100px";
					}
					element5.style.left = left;
				} else if (step == 1) {
					if (direction == "down") {
						element5.style.left = "100px";
					} else if (direction == "up") {
						element7.style.left = "-100px";
					}
					element6.style.left = left;
				} else if (step == 2) {
					if (direction == "down") {
						element6.style.left = "100px";
					}
					element7.style.left = left;
				} else if (step == null) {
					element7.style.left = left;
				}
				output.textContent = text;
			}
		}],
		//behavior: "smooth",
		//dataScrollY: "scrollY",
		//dataDelay: "delay",
		//onStart: null,
		onMove: (index, step, progress) => {
			if (index == 1) {
				element5.style.left = "-100px";
			}
		},
		//onStop: null,
		debug: true
	});
	scrolly.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!TIP]
> You can check this functional example on CodeSandbox at the link: [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/scrolly/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/scrolly/basic).

<a name="wui-icon"></a>

### WUIIcon

Version: `0.3`

Pre-designed icons set loaded via CSS, for use in interfaces.

#### Sources

| Type | File |
|:----:| ---- |
| CSS  | [src/wui-js/main/icon/wui-icon-0.3.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/icon/wui-icon-0.3.css) |
| CSS  | [src/wui-js/main/icon/wui-icon-0.3.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/icon/wui-icon-0.3.root.css) |

#### Signals Icon Table

| Icon                                             | Style                                                     | Icon                                             | Style                                                     | Icon                                        | Style                                                            | Icon                                        | Style                                                            |
| :---:                                            | -----                                                     | :---:                                            | -----                                                     | :---:                                       | -----                                                            | :---:                                       | -----                                                            |
| ![](../imgs/icons/plus-line.svg)                 | .plus-line                                                | ![](../imgs/icons/plus-lg-line.svg)              | .plus-lg-line                                             | ![](../imgs/icons/dash-line.svg)            | .dash-line                                                       | ![](../imgs/icons/dash-lg-line.svg)         | .dash-lg-line                                                    |
| ![](../imgs/icons/check-line.svg)                | .check-line<br>.successful-line                           | ![](../imgs/icons/check-lg-line.svg)             | .check-lg-line<br>.successful-lg-line                     | ![](../imgs/icons/info-line.svg)            | .info-line                                                       | ![](../imgs/icons/info-lg-line.svg)         | .info-lg-line                                                    |
| ![](../imgs/icons/question-line.svg)             | .question-line                                            | ![](../imgs/icons/question-lg-line.svg)          | .question-lg-line                                         | ![](../imgs/icons/exclamation-line.svg)     | .exclamation-line<br>.warning-line                               | ![](../imgs/icons/exclamation-lg-line.svg)  | .exclamation-lg-line<br>.warning-lg-line                         |
| ![](../imgs/icons/slash-line.svg)                | .slash-line                                               | ![](../imgs/icons/slash-lg-line.svg)             | .slash-lg-line                                            | ![](../imgs/icons/x-line.svg)               | .x-line<br>.close-line<br>.error-line                            | ![](../imgs/icons/x-lg-line.svg)            | .x-lg-line<br>.close-lg-line<br>.error-lg-line                   |
| ![](../imgs/icons/filter-line.svg)               | .filter-line                                              | ![](../imgs/icons/filter-lg-line.svg)            | .filter-lg-line                                           | ![](../imgs/icons/plus-circle-line.svg)     | .plus-circle-line                                                | ![](../imgs/icons/plus-circle-fill.svg)     | .plus-circle-fill                                                |
| ![](../imgs/icons/dash-circle-line.svg)          | .dash-circle-line                                         | ![](../imgs/icons/dash-circle-fill.svg)          | .dash-circle-fill                                         | ![](../imgs/icons/check-circle-line.svg)    | .check-circle-line<br>.successful-circle-line                    | ![](../imgs/icons/check-circle-fill.svg)    | .check-circle-fill<br>.successful-circle-fill                    |
| ![](../imgs/icons/info-circle-line.svg)          | .info-circle-line                                         | ![](../imgs/icons/info-circle-fill.svg)          | .info-circle-fill                                         | ![](../imgs/icons/question-circle-line.svg) | .question-circle-line                                            | ![](../imgs/icons/question-circle-fill.svg) | .question-circle-fill                                            |
| ![](../imgs/icons/exclamation-circle-line.svg)   | .exclamation-circle-line<br>.warning-circle-line          | ![](../imgs/icons/exclamation-circle-fill.svg)   | .exclamation-circle-fill<br>.warning-circle-fill          | ![](../imgs/icons/slash-circle-line.svg)    | .slash-circle-line                                               | ![](../imgs/icons/slash-circle-fill.svg)    | .slash-circle-fill                                               |
| ![](../imgs/icons/x-circle-line.svg)             | .x-circle-line<br>.close-circle-line<br>error-circle-line | ![](../imgs/icons/x-circle-fill.svg)             | .x-circle-fill<br>.close-circle-fill<br>error-circle-fill | ![](../imgs/icons/filter-circle-line.svg)   | .filter-circle-line                                              | ![](../imgs/icons/filter-circle-fill.svg)   | .filter-circle-fill                                              |
| ![](../imgs/icons/exclamation-octagon-line.svg)  | .exclamation-octagon-line<br>.warning-octagon-line        | ![](../imgs/icons/exclamation-octagon-fill.svg)  | .exclamation-octagon-fill<br>.warning-octagon-fill        | ![](../imgs/icons/x-octagon-line.svg)       | .x-octagon-line<br>.close-octagon-line<br>.error-octagon-line    | ![](../imgs/icons/x-octagon-fill.svg)       | .x-octagon-fill<br>.close-octagon-fill<br>.error-octagon-fill    |
| ![](../imgs/icons/exclamation-triangle-line.svg) | .exclamation-triangle-line<br>.warning-triangle-line      | ![](../imgs/icons/exclamation-triangle-fill.svg) | .exclamation-triangle-fill<br>.warning-triangle-fill      | ![](../imgs/icons/x-triangle-line.svg)      | .x-triangle-line<br>.close-triangle-line<br>.error-triangle-line | ![](../imgs/icons/x-triangle-fill.svg)      | .x-triangle-fill<br>.close-triangle-fill<br>.error-triangle-fill |

#### Arrow Icon Table

| Icon                                                 | Style                          | Icon                                               | Style                        | Icon                                                   | Style                            | Icon                                                 | Style                          |
| :--:                                                 | -----                          | :--:                                               | -----                        | :--:                                                   | -----                            | :--:                                                 | -----                          |
| ![](../imgs/icons/arrow-up-line.svg)                 | .arrow-up-line                 | ![](../imgs/icons/arrow-left-line.svg)             | .arrow-left-line             | ![](../imgs/icons/arrow-right-line.svg)                | .arrow-right-line                | ![](../imgs/icons/arrow-down-line.svg)               | .arrow-down-line               |
| ![](../imgs/icons/arrow-up-lg-line.svg)              | .arrow-up-lg-line              | ![](../imgs/icons/arrow-left-lg-line.svg)          | .arrow-left-lg-line          | ![](../imgs/icons/arrow-right-lg-line.svg)             | .arrow-right-lg-line             | ![](../imgs/icons/arrow-down-lg-line.svg)            | .arrow-down-lg-line            |
| ![](../imgs/icons/arrow-upleft-lg-line.svg)          | .arrow-upleft-lg-line          | ![](../imgs/icons/arrow-upright-lg-line.svg)       | .arrow-upright-lg-line       | ![](../imgs/icons/arrow-downleft-lg-line.svg)          | .arrow-downleft-lg-line          | ![](../imgs/icons/arrow-downright-lg-line.svg)       | .arrow-downright-lg-line       |
| ![](../imgs/icons/arrowhead-up-line.svg)             | .arrowhead-up-line             | ![](../imgs/icons/arrowhead-left-line.svg)         | .arrowhead-left-line         | ![](../imgs/icons/arrowhead-right-line.svg)            | .arrowhead-right-line            | ![](../imgs/icons/arrowhead-down-line.svg)           | .arrowhead-down-line           |
| ![](../imgs/icons/arrowhead-up-lg-line.svg)          | .arrowhead-up-lg-line          | ![](../imgs/icons/arrowhead-left-lg-line.svg)      | .arrowhead-left-lg-line      | ![](../imgs/icons/arrowhead-right-lg-line.svg)         | .arrowhead-right-lg-line         | ![](../imgs/icons/arrowhead-down-lg-line.svg)        | .arrowhead-down-lg-line        |
| ![](../imgs/icons/arrowhead-up-stg-line.svg)         | .arrowhead-up-stg-line         | ![](../imgs/icons/arrowhead-left-stg-line.svg)     | .arrowhead-left-stg-line     | ![](../imgs/icons/arrowhead-right-stg-line.svg)        | .arrowhead-right-stg-line        | ![](../imgs/icons/arrowhead-down-stg-line.svg)       | .arrowhead-down-stg-line       |
| ![](../imgs/icons/arrowhead-up-fill.svg)             | .arrowhead-up-fill             | ![](../imgs/icons/arrowhead-left-fill.svg)         | .arrowhead-left-fill         | ![](../imgs/icons/arrowhead-right-fill.svg)            | .arrowhead-right-fill            | ![](../imgs/icons/arrowhead-down-fill.svg)           | .arrowhead-down-fill           |
| ![](../imgs/icons/arrow-up-circle-line.svg)          | .arrow-up-circle-line          | ![](../imgs/icons/arrow-left-circle-line.svg)      | .arrow-left-circle-line      | ![](../imgs/icons/arrow-right-circle-line.svg)         | .arrow-right-circle-line         | ![](../imgs/icons/arrow-down-circle-line.svg)        | .arrow-down-circle-line        |
| ![](../imgs/icons/arrow-upleft-circle-line.svg)      | .arrow-upleft-circle-line      | ![](../imgs/icons/arrow-upright-circle-line.svg)   | .arrow-upright-circle-line   | ![](../imgs/icons/arrow-downleft-circle-line.svg)      | .arrow-downleft-circle-line      | ![](../imgs/icons/arrow-downright-circle-line.svg)   | .arrow-downright-circle-line   |
| ![](../imgs/icons/arrow-up-circle-fill.svg)          | .arrow-up-circle-fill          | ![](../imgs/icons/arrow-left-circle-fill.svg)      | .arrow-left-circle-fill      | ![](../imgs/icons/arrow-right-circle-fill.svg)         | .arrow-right-circle-fill         | ![](../imgs/icons/arrow-down-circle-fill.svg)        | .arrow-down-circle-fill        |
| ![](../imgs/icons/arrow-upleft-circle-fill.svg)      | .arrow-upleft-circle-fill      | ![](../imgs/icons/arrow-upright-circle-fill.svg)   | .arrow-upright-circle-fill   | ![](../imgs/icons/arrow-downleft-circle-fill.svg)      | .arrow-downleft-circle-fill      | ![](../imgs/icons/arrow-downright-circle-fill.svg)   | .arrow-downright-circle-fill   |
| ![](../imgs/icons/arrowbar-up-line.svg)              | .arrowbar-up-line              | ![](../imgs/icons/arrowbar-left-line.svg)          | .arrowbar-left-line          | ![](../imgs/icons/arrowbar-right-line.svg)             | .arrowbar-right-line             | ![](../imgs/icons/arrowbar-down-line.svg)            | .arrowbar-down-line            |
| ![](../imgs/icons/arrows-expand-horizontal-line.svg) | .arrows-expand-horizontal-line | ![](../imgs/icons/arrows-expand-vertical-line.svg) | .arrows-expand-vertical-line | ![](../imgs/icons/arrows-collapse-horizontal-line.svg) | .arrows-collapse-horizontal-line | ![](../imgs/icons/arrows-collapse-vertical-line.svg) | .arrows-collapse-vertical-line |
| ![](../imgs/icons/arrows-horizontal-line.svg)        | .arrows-horizontal-line        | ![](../imgs/icons/arrows-vertical-line.svg)        | .arrows-vertical-line        | ![](../imgs/icons/arrows-expand-diagonal-line.svg)     | .arrows-expand-diagonal-line     | ![](../imgs/icons/arrows-collapse-diagonal-line.svg) | .arrows-collapse-diagonal-line |
| ![](../imgs/icons/arrowbox-out-up-line.svg)          | .arrowbox-out-up-line          | ![](../imgs/icons/arrowbox-out-left-line.svg)      | .arrowbox-out-left-line      | ![](../imgs/icons/arrowbox-out-right-line.svg)         | .arrowbox-out-right-line         | ![](../imgs/icons/arrowbox-out-down-line.svg)        | .arrowbox-out-down-line        |
| ![](../imgs/icons/arrowbox-out-upleft-line.svg)      | .arrowbox-out-upleft-line      | ![](../imgs/icons/arrowbox-out-upright-line.svg)   | .arrowbox-out-upright-line   | ![](../imgs/icons/arrowbox-out-downleft-line.svg)      | .arrowbox-out-downleft-line      | ![](../imgs/icons/arrowbox-out-downright-line.svg)   | .arrowbox-out-downright-line   |
| ![](../imgs/icons/arrowbox-in-up-line.svg)           | .arrowbox-in-up-line           | ![](../imgs/icons/arrowbox-in-left-line.svg)       | .arrowbox-in-left-line       | ![](../imgs/icons/arrowbox-in-right-line.svg)          | .arrowbox-in-right-line          | ![](../imgs/icons/arrowbox-in-down-line.svg)         | .arrowbox-in-down-line         |
| ![](../imgs/icons/arrowbox-in-upleft-line.svg)       | .arrowbox-in-upleft-line       | ![](../imgs/icons/arrowbox-in-upright-line.svg)    | .arrowbox-in-upright-line    | ![](../imgs/icons/arrowbox-in-downleft-line.svg)       | .arrowbox-in-downleft-line       | ![](../imgs/icons/arrowbox-in-downright-line.svg)    | .arrowbox-in-downright-line    |

#### Number Icon Table

| Icon                                    | Style             | Icon                                    | Style             | Icon                                    | Style             | Icon                                    | Style             |
| :--:                                    | -----             | :--:                                    | -----             | :--:                                    | -----             | :--:                                    | -----             |
| ![](../imgs/icons/num0-circle-line.svg) | .num0-circle-line | ![](../imgs/icons/num0-circle-fill.svg) | .num0-circle-fill | ![](../imgs/icons/num1-circle-line.svg) | .num1-circle-line | ![](../imgs/icons/num1-circle-fill.svg) | .num1-circle-fill |
| ![](../imgs/icons/num2-circle-line.svg) | .num2-circle-line | ![](../imgs/icons/num2-circle-fill.svg) | .num2-circle-fill | ![](../imgs/icons/num3-circle-line.svg) | .num3-circle-line | ![](../imgs/icons/num3-circle-fill.svg) | .num3-circle-fill |
| ![](../imgs/icons/num4-circle-line.svg) | .num4-circle-line | ![](../imgs/icons/num4-circle-fill.svg) | .num4-circle-fill | ![](../imgs/icons/num5-circle-line.svg) | .num5-circle-line | ![](../imgs/icons/num5-circle-fill.svg) | .num5-circle-fill |
| ![](../imgs/icons/num6-circle-line.svg) | .num6-circle-line | ![](../imgs/icons/num6-circle-fill.svg) | .num6-circle-fill | ![](../imgs/icons/num7-circle-line.svg) | .num7-circle-line | ![](../imgs/icons/num7-circle-fill.svg) | .num7-circle-fill |
| ![](../imgs/icons/num8-circle-line.svg) | .num8-circle-line | ![](../imgs/icons/num8-circle-fill.svg) | .num8-circle-fill | ![](../imgs/icons/num9-circle-line.svg) | .num9-circle-line | ![](../imgs/icons/num9-circle-fill.svg) | .num9-circle-fill |

#### Person Icon Table

| Icon                                      | Style               | Icon                                      | Style               | Icon                                       | Style                | Icon                                       | Style                |
| :--:                                      | -----               | :--:                                      | -----               | :--:                                       | -----                | :--:                                       | -----                |
| ![](../imgs/icons/man-fill.svg)           | .man-fill           | ![](../imgs/icons/woman-fill.svg)         | .woman-fill         | ![](../imgs/icons/person-line.svg)         | .person-line         | ![](../imgs/icons/person-fill.svg)         | .person-fill         |
| ![](../imgs/icons/person-plus-line.svg)   | .person-plus-line   | ![](../imgs/icons/person-plus-fill.svg)   | .person-plus-fill   | ![](../imgs/icons/person-dash-line.svg)    | .person-dash-line    | ![](../imgs/icons/person-dash-fill.svg)    | .person-dash-fill    |
| ![](../imgs/icons/person-check-line.svg)  | .person-check-line  | ![](../imgs/icons/person-check-fill.svg)  | .person-check-fill  | ![](../imgs/icons/person-x-line.svg)       | .person-x-line       | ![](../imgs/icons/person-x-fill.svg)       | .person-x-fill       |
| ![](../imgs/icons/people-line.svg)        | .people-line        | ![](../imgs/icons/people-fill.svg)        | .people-fill        | ![](../imgs/icons/person-contact-line.svg) | .person-contact-line | ![](../imgs/icons/person-contact-fill.svg) | .person-contact-fill |
| ![](../imgs/icons/person-card-line.svg)   | .person-card-line   | ![](../imgs/icons/person-card-fill.svg)   | .person-card-fill   | ![](../imgs/icons/person-names-line.svg)   | .person-names-line   | ![](../imgs/icons/person-names-fill.svg)   | .person-names-fill   |
| ![](../imgs/icons/person-circle-line.svg) | .person-circle-line | ![](../imgs/icons/person-circle-fill.svg) | .person-circle-fill | ![](../imgs/icons/user-line.svg)           | .user-line           |                                         |                      |

#### File Icon Table

| Icon                                     | Style              | Icon                                     | Style              | Icon                                      | Style               | Icon                                      | Style               |
| :--:                                     | -----              | :--:                                     | -----              | :--:                                      | -----               | :--:                                      | -----               |
| ![](../imgs/icons/folder-close-line.svg) | .folder-close-line | ![](../imgs/icons/folder-close-fill.svg) | .folder-close-fill | ![](../imgs/icons/folder-open-line.svg)   | .folder-open-line   | ![](../imgs/icons/folder-open-fill.svg)   | .folder-open-fill   |
| ![](../imgs/icons/file-line.svg)         | .file-line         | ![](../imgs/icons/file-fill.svg)         | .file-fill         | ![](../imgs/icons/file-barchart-line.svg) | .file-barchart-line | ![](../imgs/icons/file-barchart-fill.svg) | .file-barchart-fill |
| ![](../imgs/icons/file-check-line.svg)   | .file-check-line   | ![](../imgs/icons/file-check-fill.svg)   | .file-check-fill   | ![](../imgs/icons/file-pdf-line.svg)      | .file-pdf-line      | ![](../imgs/icons/file-pdf-fill.svg)      | .file-pdf-fill      |
| ![](../imgs/icons/file-image-line.svg)   | .file-image-line    | ![](../imgs/icons/file-image-fill.svg)  | .file-image-fill   | ![](../imgs/icons/file-text-line.svg)     | .file-text-line     | ![](../imgs/icons/file-text-fill.svg)     | .file-text-fill     |
| ![](../imgs/icons/file-upload-line.svg)  | .file-upload-line  | ![](../imgs/icons/file-upload-fill.svg)  | .file-upload-fill  | ![](../imgs/icons/file-zip-line.svg)      | .file-zip-line      | ![](../imgs/icons/file-zip-fill.svg)      | .file-zip-fill      |

#### Control Icon Table

| Icon                                        | Style                 | Icon                                        | Style                 | Icon                                       | Style                | Icon                                       | Style                |
| :--:                                        | -----                 | :--:                                        | -----                 | :--:                                       | -----                | :--:                                       | -----                |
| ![](../imgs/icons/calendar-line.svg)        | .calendar-line        | ![](../imgs/icons/calendar-fill.svg)        | .calendar-fill        | ![](../imgs/icons/calendar-day-line.svg)   | .calendar-day-line   | ![](../imgs/icons/calendar-day-fill.svg)   | .calendar-day-fill   |
| ![](../imgs/icons/calendar-week-line.svg)   | .calendar-week-line   | ![](../imgs/icons/calendar-week-fill.svg)   | .calendar-week-fill   | ![](../imgs/icons/calendar-range-line.svg) | .calendar-range-line | ![](../imgs/icons/calendar-range-fill.svg) | .calendar-range-fill |
| ![](../imgs/icons/clipboard-check-line.svg) | .clipboard-check-line | ![](../imgs/icons/clipboard-check-fill.svg) | .clipboard-check-fill | ![](../imgs/icons/clipboard-data-line.svg) | .clipboard-data-line | ![](../imgs/icons/clipboard-data-fill.svg) | .clipboard-data-fill |
| ![](../imgs/icons/bookmark-line.svg)        | .bookmark-line        | ![](../imgs/icons/bookmark-fill.svg)        | .bookmark-fill        | ![](../imgs/icons/bookmarks-line.svg)      | .bookmarks-line      | ![](../imgs/icons/bookmarks-fill.svg)      | .bookmarks-fill      |
| ![](../imgs/icons/bookmark-check-line.svg)  | .bookmark-check-line  | ![](../imgs/icons/bookmark-check-fill.svg)  | .bookmark-check-fill  | ![](../imgs/icons/bookmark-x-line.svg)     | .bookmark-x-line     | ![](../imgs/icons/bookmark-x-fill.svg)     | .bookmark-x-fill     |

#### Protection Icons Table

| Icon                                       | Style              | Icon                                     | Style              | Icon                                       | Style                | Icon                                       | Style                |
| :--:                                       | -----              | :--:                                     | -----              | :--:                                       | -----                | :--:                                       | -----                |
| ![](../imgs/icons/shield-check-line.svg)   | .shield-check-line | ![](../imgs/icons/shield-check-fill.svg) | .shield-check-fill | ![](../imgs/icons/shield-lock-line.svg)    | .shield-lock-line    | ![](../imgs/icons/shield-lock-fill.svg)    | .shield-lock-fill    |
| ![](../imgs/icons/patch-check-line.svg)    | .patch-check-line  | ![](../imgs/icons/patch-check-fill.svg)  | .patch-check-fill  | ![](../imgs/icons/patch-question-line.svg) | .patch-question-line | ![](../imgs/icons/patch-question-fill.svg) | .patch-question-fill |

#### Communication Icons Table

| Icon                                        | Style                 | Icon                                        | Style                 | Icon                                       | Style                | Icon                                       | Style                |
| :--:                                        | -----                 | :--:                                        | -----                 | :--:                                       | -----                | :--:                                       | -----                |
| ![](../imgs/icons/phone-line.svg)           | .phone-line           | ![](../imgs/icons/phone-fill.svg)           | .phone-fill           | ![](../imgs/icons/phonebook-line.svg)      | .phonebook-line      | ![](../imgs/icons/phonebook-fill.svg)      | .phonebook-fill      |
| ![](../imgs/icons/mail-close-line.svg)      | .mail-close-line      | ![](../imgs/icons/mail-close-fill.svg)      | .mail-close-fill      | ![](../imgs/icons/chat-dots-line.svg)      | .chat-dots-line      | ![](../imgs/icons/chat-dots-fill.svg)      | .chat-dots-fill      |
| ![](../imgs/icons/chat-left-quote-line.svg) | .chat-left-quote-line | ![](../imgs/icons/chat-left-quote-fill.svg) | .chat-left-quote-fill | ![](../imgs/icons/chat-left-text-line.svg) | .chat-left-text-line | ![](../imgs/icons/chat-left-text-fill.svg) | .chat-left-text-fill |
| ![](../imgs/icons/emoji-neutral-line.svg)   | .emoji-neutral-line   | ![](../imgs/icons/emoji-neutral-fill.svg)   | .emoji-neutral-fill   | ![](../imgs/icons/emoji-smile-line.svg)    | .emoji-smile-line    | ![](../imgs/icons/emoji-smile-fill.svg)    | .emoji-smile-fill    |
| ![](../imgs/icons/emoji-frown-line.svg)     | .emoji-frown-line     | ![](../imgs/icons/emoji-frown-fill.svg)     | .emoji-frown-fill     | ![](../imgs/icons/emoji-surprise-line.svg) | .emoji-surprise-line | ![](../imgs/icons/emoji-surprise-fill.svg) | .emoji-surprise-fill |

#### Cloud Icon Table

| Icon                                     | Style              | Icon                                     | Style              | Icon                                       | Style                | Icon                                       | Style                |
| :--:                                     | -----              | :--:                                     | -----              | :--:                                       | -----                | :--:                                       | -----                |
| ![](../imgs/icons/cloud-line.svg)        | .cloud-line        | ![](../imgs/icons/cloud-fill.svg)        | .cloud-fill        | ![](../imgs/icons/cloud-slash-line.svg)    | .cloud-slash-line    | ![](../imgs/icons/cloud-slash-fill.svg)    | .cloud-slash-fill    |
| ![](../imgs/icons/cloud-upload-line.svg) | .cloud-upload-line | ![](../imgs/icons/cloud-upload-fill.svg) | .cloud-upload-fill | ![](../imgs/icons/cloud-download-line.svg) | .cloud-download-line | ![](../imgs/icons/cloud-download-fill.svg) | .cloud-download-fill |

#### Map Icon Table

| Icon                                      | Style               | Icon                                        | Style                 | Icon                                   | Style            |
| :--:                                      | -----               | :--:                                        | -----                 | :--:                                   | -----            |
| ![](../imgs/icons/map-line.svg)           | .map-line           | ![](../imgs/icons/map-fill.svg)             | .map-fill             |                                     |                  |
| ![](../imgs/icons/map-alt-line.svg)       | .map-alt-line       | ![](../imgs/icons/map-alt-fill.svg)         | .map-alt-fill         |                                     |                  |
| ![](../imgs/icons/mapmarker-line.svg)     | .mapmarker-line     | ![](../imgs/icons/mapmarker-fill.svg)       | .mapmarker-fill       | ![](../imgs/icons/mapmarker-color.svg) | .mapmarker-color |
| ![](../imgs/icons/mappin-line.svg)        | .mappin-line        | ![](../imgs/icons/mappin-fill.svg)          | .mappin-fill          | ![](../imgs/icons/mappin-color.svg)    | .mappin-color    |
| ![](../imgs/icons/mappointer-line.svg)    | .mappointer-line    | ![](../imgs/icons/mappointer-fill.svg)      | .mappointer-fill      |                                     |                  |
| ![](../imgs/icons/mapchart-line.svg)      | .mapchart-line      | ![](../imgs/icons/mapchart-fill.svg)        | .mapchart-fill        |                                     |                  |
| ![](../imgs/icons/globe-line.svg)         | .globe-line         | ![](../imgs/icons/globe-alt-line.svg)       | .globe-alt-line       |                                     |                  |
| ![](../imgs/icons/globe-america-fill.svg) | .globe-america-fill | ![](../imgs/icons/globe-africa-fill.svg)    | .globe-africa-fill    |                                     |                  |
| ![](../imgs/icons/globe-asia-fill.svg)    | .globe-asia-fill    | ![](../imgs/icons/globe-australia-fill.svg) | .globe-australia-fill |                                     |                  |
| ![](../imgs/icons/h-circle-line.svg)      | .h-circle-line      | ![](../imgs/icons/h-circle-fill.svg)        | .h-circle-fill        |                                     |                  |
| ![](../imgs/icons/highway-66-fill.svg)    | .highway-66-fill    | ![](../imgs/icons/highway-75-fill.svg)      | .highway-75-fill      | ![](../imgs/icons/highway-94-fill.svg) | .highway-94-fill |

#### Device Icon Table

| Icon                                    | Style             | Icon                                    | Style             | Icon                                 | Style          | Icon                                   | Style            |
| :--:                                    | -----             | :--:                                    | -----             | :--:                                 | -----          | :--:                                   | -----            |
| ![](../imgs/icons/devices-line.svg)     | .devices-line     | ![](../imgs/icons/laptop-line.svg)      | .laptop-line      | ![](../imgs/icons/mobile-line.svg)   | .mobile-line   | ![](../imgs/icons/mobile-alt-line.svg) | .mobile-alt-line |
| ![](../imgs/icons/mobile-apps-line.svg) | .mobile-apps-line | ![](../imgs/icons/mobile-apps-fill.svg) | .mobile-apps-fill | ![](../imgs/icons/computer-line.svg) | .computer-line | ![](../imgs/icons/camera-fill.svg)     | .camera-fill     |

#### Brand Icon Table

| Icon                                | Style         | Icon                              | Style       | Icon                               | Style        |
| :--:                                | -----         | :--:                              | -----       | :--:                               | -----        |
| ![](../imgs/icons/android-fill.svg) | .android-fill | ![](../imgs/icons/apple-fill.svg) | .apple-fill | ![](../imgs/icons/huawei-fill.svg) | .huawei-fill |

#### Apps Icons Table

| Icon                                      | Style               | Icon                                         | Style                  | Icon                                      | Style               | Icon                                       | Style                |
| :--:                                      | -----               | :--:                                         | -----                  | :--:                                      | -----               | :--:                                       | -----                |
| ![](../imgs/icons/app-line.svg)           | .app-line           | ![](../imgs/icons/app-notification-line.svg) | .app-notification-line | ![](../imgs/icons/acrobat-fill.svg)       | .acrobat-fill       | ![](../imgs/icons/acrobat-color.svg)       | .acrobat-color       |      
| ![](../imgs/icons/applemail-fill.svg)     | .applemail-fill     | ![](../imgs/icons/applemail-color.svg)       | .applemail-color       | ![](../imgs/icons/appstore-fill.svg)      | .appstore-fill      | ![](../imgs/icons/appstore-color.svg)      | .appstore-color      |  
| ![](../imgs/icons/appstore-alt-fill.svg)  | .appstore-alt-fill  | ![](../imgs/icons/appstore-alt-color.svg)    | .appstore-alt-color    | ![](../imgs/icons/bcardy-fill.svg)        | .bcardy-fill        | ![](../imgs/icons/bcardy-color.svg)        | .bcardy-color        |  
| ![](../imgs/icons/behance-fill.svg)       | .behance-fill       | ![](../imgs/icons/behance-color.svg)         | .behance-color         | ![](../imgs/icons/claude-fill.svg)        | .claude-fill        | ![](../imgs/icons/claude-color.svg)        | .claude-color        |
| ![](../imgs/icons/facebook-fill.svg)      | .facebook-fill      | ![](../imgs/icons/facebook-color.svg)        | .facebook-color        | ![](../imgs/icons/facebook-alt-fill.svg)  | .facebook-alt-fill  | ![](../imgs/icons/facebook-alt-color.svg)  | .facebook-alt-color  |
| ![](../imgs/icons/github-fill.svg)        | .github-fill        | ![](../imgs/icons/github-color.svg)          | .github-color          | ![](../imgs/icons/gmail-fill.svg)         | .gmail-fill         | ![](../imgs/icons/gmail-color.svg)         | .gmail-color         |
| ![](../imgs/icons/googlemaps-fill.svg)    | .googlemaps-fill    | ![](../imgs/icons/googlemaps-color.svg)      | .googlemaps-color      | ![](../imgs/icons/googleplay-fill.svg)    | .googleplay-fill    | ![](../imgs/icons/googleplay-color.svg)    | .googleplay-color    |
| ![](../imgs/icons/instagram-fill.svg)     | .instagram-fill     | ![](../imgs/icons/instagram-color.svg)       | .instagram-color       | ![](../imgs/icons/instagram-alt-fill.svg) | .instagram-alt-fill | ![](../imgs/icons/instagram-alt-color.svg) | .instagram-alt-color |
| ![](../imgs/icons/line-fill.svg)          | .line-fill          | ![](../imgs/icons/line-color.svg)            | .line-color            | ![](../imgs/icons/line-alt-fill.svg)      | .line-alt-fill      | ![](../imgs/icons/line-alt-color.svg)      | .line-alt-color      |
| ![](../imgs/icons/linkedin-fill.svg)      | .linkedin-fill      | ![](../imgs/icons/linkedin-color.svg)        | .linkedin-color        | ![](../imgs/icons/linkedin-alt-fill.svg)  | .linkedin-alt-fill  | ![](../imgs/icons/linkedin-alt-color.svg)  | .linkedin-alt-color  |
| ![](../imgs/icons/messenger-fill.svg)     | .messenger-fill     | ![](../imgs/icons/messenger-color.svg)       | .messenger-color       | ![](../imgs/icons/outlook-fill.svg)       | .outlook-fill       | ![](../imgs/icons/outlook-color.svg)       | .outlook-color       |
| ![](../imgs/icons/samsungemail-fill.svg)  | .samsungemail-fill  | ![](../imgs/icons/samsungemail-color.svg)    | .samsungemail-color    | ![](../imgs/icons/skype-fill.svg)         | .skype-fill         | ![](../imgs/icons/skype-color.svg)         | .skype-color         |
| ![](../imgs/icons/telegram-fill.svg)      | .telegram-fill      | ![](../imgs/icons/telegram-color.svg)        | .telegram-color        | ![](../imgs/icons/telegram-alt-fill.svg)  | .telegram-alt-fill  | ![](../imgs/icons/telegram-alt-color.svg)  | .telegram-alt-color  |
| ![](../imgs/icons/tiktok-fill.svg)        | .tiktok-fill        | ![](../imgs/icons/tiktok-color.svg)          | .tiktok-color          | ![](../imgs/icons/twitter-fill.svg)       | .twitter-fill       | ![](../imgs/icons/twitter-color.svg)       | .twitter-color       |
| ![](../imgs/icons/twitter-alt-fill.svg)   | .twitter-alt-fill   | ![](../imgs/icons/twitter-alt-color.svg)     | .twitter-alt-color     | ![](../imgs/icons/twitter-x-fill.svg)     | .twitter-x-fill     | ![](../imgs/icons/twitter-x-color.svg)     | .twitter-x-color     |
| ![](../imgs/icons/vimeo-fill.svg)         | .vimeo-fill         | ![](../imgs/icons/vimeo-color.svg)           | .vimeo-color           | ![](../imgs/icons/vimeo-alt-fill.svg)     | .vimeo-alt-fill     | ![](../imgs/icons/vimeo-alt-color.svg)     | .vimeo-alt-color     |
| ![](../imgs/icons/yahoo-fill.svg)         | .yahoo-fill         | ![](../imgs/icons/yahoo-color.svg)           | .yahoo-color           | ![](../imgs/icons/yahoo-alt-fill.svg)     | .yahoo-alt-fill     | ![](../imgs/icons/yahoo-alt-color.svg)     | .yahoo-alt-color     |
| ![](../imgs/icons/youtube-fill.svg)       | .youtube-fill       | ![](../imgs/icons/youtube-color.svg)         | .youtube-color         | ![](../imgs/icons/whatsapp-fill.svg)      | .whatsapp-fill      | ![](../imgs/icons/whatsapp-color.svg)      | .whatsapp-color      |
| ![](../imgs/icons/whatsapp-alt-fill.svg)  | .whatsapp-alt-fill  | ![](../imgs/icons/whatsapp-alt-color.svg)    | .whatsapp-alt-color    | ![](../imgs/icons/wuijs-fill.svg)         | .wuijs-fill         | ![](../imgs/icons/wuijs-color.svg)         | .wuijs-color         |

#### Options Icon Table

| Icon                                    | Style             | Icon                                        | Style                 | Icon                                         | Style                  | Icon                                         | Style                  |
| :--:                                    | -----             | :--:                                        | -----                 | :--:                                         | -----                  | :--:                                         | -----                  |
| ![](../imgs/icons/at-line.svg)          | .at-line          | ![](../imgs/icons/at-lg-line.svg)           | .at-lg-line           | ![](../imgs/icons/award-line.svg)            | .award-line            | ![](../imgs/icons/award-fill.svg)            | .award-fill            |
| ![](../imgs/icons/basket-line.svg)      | .basket-line      | ![](../imgs/icons/basket-fill.svg)          | .basket-fill          | ![](../imgs/icons/bell-line.svg)             | .bell-line             | ![](../imgs/icons/bell-fill.svg)             | .bell-fill             |
| ![](../imgs/icons/bluetooth-line.svg)   | .bluetooth-line   | ![](../imgs/icons/bluetooth-fill.svg)       | .bluetooth-fill       | ![](../imgs/icons/bug-line.svg)              | .bug-line              | ![](../imgs/icons/bug-fill.svg)              | .bug-fill              |
| ![](../imgs/icons/cash-line.svg)        | .cash-line        | ![](../imgs/icons/cash-alt-fill.svg)        | .cash-alt-fill        | ![](../imgs/icons/circle-line.svg)           | .circle-line           | ![](../imgs/icons/circle-fill.svg)           | .circle-fill           |
| ![](../imgs/icons/contacts-line.svg)    | .contacts-line    | ![](../imgs/icons/contacts-fill.svg)        | .contacts-fill        | ![](../imgs/icons/copy-link-line.svg)        | .copy-link-line        | ![](../imgs/icons/copy-link-fill.svg)        | .copy-link-fill        |
| ![](../imgs/icons/easel-line.svg)       | .easel-line       | ![](../imgs/icons/easel-fill.svg)           | .easel-fill           | ![](../imgs/icons/eye-line.svg)              | .eye-line              | ![](../imgs/icons/eye-fill.svg)              | .eye-fill              |
| ![](../imgs/icons/eye-slash-line.svg)   | .eye-slash-line   | ![](../imgs/icons/eye-slash-fill.svg)       | .eye-slash-fill       | ![](../imgs/icons/flag-line.svg)             | .flag-line             | ![](../imgs/icons/flag-fill.svg)             | .flag-fill             |
| ![](../imgs/icons/floppy-line.svg)      | .floppy-line      | ![](../imgs/icons/floppy-fill.svg)          | .floppy-fill          | ![](../imgs/icons/gear-line.svg)             | .gear-line             | ![](../imgs/icons/gear-fill.svg)             | .gear-fill             |
| ![](../imgs/icons/gears-line.svg)       | .gears-line       | ![](../imgs/icons/gears-fill.svg)           | .gears-fill           | ![](../imgs/icons/grid3x2-line.svg)          | .grid3x2-line          | ![](../imgs/icons/grid3x3-line.svg)          | .grid3x3-line          |
| ![](../imgs/icons/health-line.svg)      | .health-line      | ![](../imgs/icons/health-fill.svg)          | .health-fill          | ![](../imgs/icons/home-line.svg)             | .home-line             | ![](../imgs/icons/home-fill.svg)             | .home-fill             |
| ![](../imgs/icons/image-line.svg)       | .image-line       | ![](../imgs/icons/image-fill.svg)           | .image-fill           | ![](../imgs/icons/image-alt-line.svg)        | .image-alt-line        | ![](../imgs/icons/images-line.svg)           | .images-line           |
| ![](../imgs/icons/key-line.svg)         | .key-line         | ![](../imgs/icons/key-fill.svg)             | .key-fill             | ![](../imgs/icons/keyboard-line.svg)         | .keyboard-line         | ![](../imgs/icons/keyboard-fill.svg)         | .keyboard-fill         |
| ![](../imgs/icons/layers-line.svg)      | .layers-line      | ![](../imgs/icons/layers-fill.svg)          | .layers-fill          | ![](../imgs/icons/lightbulb-line.svg)        | .lightbulb-line        | ![](../imgs/icons/lightbulb-fill.svg)        | .lightbulb-fill        |
| ![](../imgs/icons/lock-line.svg)        | .lock-line        | ![](../imgs/icons/lock-fill.svg)            | .lock-fill            | ![](../imgs/icons/mailbox-line.svg)          | .mailbox-line          | ![](../imgs/icons/mailbox-fill.svg)          | .mailbox-fill          |
| ![](../imgs/icons/moon-line.svg)        | .moon-line        | ![](../imgs/icons/moon-fill.svg)            | .moon-fill            | ![](../imgs/icons/moon-stars-line.svg)       | .moon-stars-line       | ![](../imgs/icons/moon-stars-fill.svg)       | .moon-stars-fill       |
| ![](../imgs/icons/mortarboard-line.svg) | .mortarboard-line | ![](../imgs/icons/mortarboard-fill.svg)     | .mortarboard-fill     | ![](../imgs/icons/piechart-line.svg)         | .piechart-line         | ![](../imgs/icons/piechart-fill.svg)         | .piechart-fill         |
| ![](../imgs/icons/palette-line.svg)     | .palette-line     | ![](../imgs/icons/palette-fill.svg)         | .palette-fill         | ![](../imgs/icons/pen-line.svg)              | .pen-line              | ![](../imgs/icons/pen-fill.svg)              | .pen-fill              |
| ![](../imgs/icons/pencil-line.svg)      | .pencil-line      | ![](../imgs/icons/pencil-fill.svg)          | .pencil-fill          | ![](../imgs/icons/pin-line.svg)              | .pin-line              | ![](../imgs/icons/pin-fill.svg)              | .pin-fill              |
| ![](../imgs/icons/plant-line.svg)       | .plant-line       | ![](../imgs/icons/plant-fill.svg)           | .plant-fill           | ![](../imgs/icons/play-line.svg)             | .play-line             | ![](../imgs/icons/play-fill.svg)             | .play-fill             |
| ![](../imgs/icons/play-circle-line.svg) | .play-circle-line | ![](../imgs/icons/play-circle-fill.svg)     | .play-circle-fill     | ![](../imgs/icons/send-line.svg)             | .send-line             | ![](../imgs/icons/send-fill.svg)             | .send-fill             |
| ![](../imgs/icons/separationh-line.svg) | .separationh-line | ![](../imgs/icons/separationv-line.svg)     | .separationv-line     | ![](../imgs/icons/share-line.svg)            | .share-line            | ![](../imgs/icons/share-fill.svg)            | .share-fill            |
| ![](../imgs/icons/shop-line.svg)        | .shop-line        | ![](../imgs/icons/shop-alt-fill.svg)        | .shop-alt-fill        | ![](../imgs/icons/signpost-line.svg)         | .signpost-line         | ![](../imgs/icons/signpost-fill.svg)         | .signpost-fill         |
| ![](../imgs/icons/sim-line.svg)         | .sim-line         | ![](../imgs/icons/sim-fill.svg)             | .sim-fill             | ![](../imgs/icons/star-line.svg)             | .star-line             | ![](../imgs/icons/star-fill.svg)             | .star-fill             |
| ![](../imgs/icons/star-circle-line.svg) | .star-circle-line | ![](../imgs/icons/star-circle-fill.svg)     | .star-circle-fill     | ![](../imgs/icons/stoplights-line.svg)       | .stoplights-line       | ![](../imgs/icons/stoplights-fill.svg)       | .stoplights-fill       |
| ![](../imgs/icons/thermometer-line.svg) | .thermometer-line | ![](../imgs/icons/thermometer-low-line.svg) | .thermometer-low-line | ![](../imgs/icons/thermometer-half-line.svg) | .thermometer-half-line | ![](../imgs/icons/thermometer-high-line.svg) | .thermometer-high-line |
| ![](../imgs/icons/time-line.svg)        | .time-line        | ![](../imgs/icons/time-fill.svg)            | .time-fill            | ![](../imgs/icons/trash-line.svg)            | .trash-line            | ![](../imgs/icons/trash-fill.svg)            | .trash-fill            |
| ![](../imgs/icons/trophy-line.svg)      | .trophy-line      | ![](../imgs/icons/trophy-fill.svg)          | .trophy-fill          | ![](../imgs/icons/unlock-line.svg)           | .unlock-line           | ![](../imgs/icons/unlock-fill.svg)           | .unlock-fill           |
| ![](../imgs/icons/wallet-line.svg)      | .wallet-line      | ![](../imgs/icons/wallet-fill.svg)          | .wallet-fill          | ![](../imgs/icons/wifi-on-line.svg)          | .wifi-on-line          | ![](../imgs/icons/wifi-off-line.svg)         | .wifi-off-line         |
| ![](../imgs/icons/window-app-line.svg)  | .window-app-line  | ![](../imgs/icons/window-app-fill.svg)      | .window-app-fill      | ![](../imgs/icons/wrench-line.svg)           | .wrench-line           | ![](../imgs/icons/wrench-fill.svg)           | .wrench-fill           |
| ![](../imgs/icons/zoomin-line.svg)      | .zoomin-line      | ![](../imgs/icons/zoomout-line.svg)         | .zoomout-line         |

#### Composer Icon Table

| Icon                                          | Style                   | Icon                                           | Style                    | Icon                                    | Style             | Icon                                      | Style               |
| :---:                                         | -----                   | :---:                                          | -----                    | :---:                                   | -----             | :---:                                     | -----               |
| ![](../imgs/icons/doublequotes-left-fill.svg) | .doublequotes-left-fill | ![](../imgs/icons/doublequotes-right-fill.svg) | .doublequotes-right-fill | ![](../imgs/icons/indent-left-line.svg) | .indent-left-line | ![](../imgs/icons/indent-right-line.svg)  | .indent-right-line  |
| ![](../imgs/icons/link-line.svg)              | .link-line              | ![](../imgs/icons/link-alt-line.svg)           | .link-alt-line           | ![](../imgs/icons/list-line.svg)        | .list-line        | ![](../imgs/icons/list-check-line.svg)    | .list-check-line    |
| ![](../imgs/icons/list-number-line.svg)       | .list-number-line       | ![](../imgs/icons/list-stars-line.svg)         | .list-stars-line         | ![](../imgs/icons/list-task-line.svg)   | .list-task-line   | ![](../imgs/icons/list-unorderd-line.svg) | .list-unorderd-line |
| ![](../imgs/icons/text-center-line.svg)       | .text-center-line       | ![](../imgs/icons/text-paragraph-line.svg)     | .text-paragraph-line     | ![](../imgs/icons/text-left-line.svg)   | .text-left-line   | ![](../imgs/icons/text-right-line.svg)    | .text-right-line    |

#### Other Icons Table

| Icon                                         | Style                  | Icon                                         | Style                  | Icon                                         | Style                  | Icon                                   | Style            |
| :---:                                        | -----                  | :---:                                        | -----                  | :---:                                        | -----                  | :---:                                  | -----            |
| ![](../imgs/icons/ai-fill.svg)               | .ai-fill               | ![](../imgs/icons/bullseye-line.svg)         | .bullseye-line         | ![](../imgs/icons/columnsgap-line.svg)       | .columnsgap-line       | ![](../imgs/icons/dart-fill.svg)       | .dart-fill       |
| ![](../imgs/icons/datasheet-line.svg)        | .datasheet-line        | ![](../imgs/icons/datasheet-health-line.svg) | .datasheet-health-line | ![](../imgs/icons/hash-line.svg)             | .hash-line             | ![](../imgs/icons/headphones-line.svg) | .headphones-line |
| ![](../imgs/icons/headset-line.svg)          | .headset-line          | ![](../imgs/icons/lab-fill.svg)              | .lab-fill              | ![](../imgs/icons/logout-line.svg)           | .logout-line           | ![](../imgs/icons/medal-line.svg)      | .medal-line      |
| ![](../imgs/icons/menu-line.svg)             | .menu-line             | ![](../imgs/icons/pencil-square-fill.svg)    | .pencil-square-fill    | ![](../imgs/icons/polygon-editable-line.svg) | .polygon-editable-line | ![](../imgs/icons/qr-line.svg)         | .qr-line         |
| ![](../imgs/icons/qr-scan-line.svg)          | .qr-scan-line          | ![](../imgs/icons/quote-fill.svg)            | .quote-fill            | ![](../imgs/icons/rotate-line.svg)           | .rotate-line           | ![](../imgs/icons/search-line.svg)     | .search-line     |
| ![](../imgs/icons/speedometer-line.svg)      | .speedometer-line      | ![](../imgs/icons/translate-fill.svg)        | .translate-fill        | ![](../imgs/icons/web-line.svg)              | .web-line              | ![](../imgs/icons/universal-line.svg)  | .universal-line  |
| ![](../imgs/icons/universal-circle-line.svg) | .universal-circle-line |

#### Animated Icons Table

| Icon                                           | Style                    | Icon                                          | Style                   | Icon                                              | Style                       |
| :--:                                           | -----                    | :--:                                          | -----                   | :--:                                              | -----                       |
| ![](../imgs/icons/animation-loarder-comet.svg) | .animation-loarder-comet | ![](../imgs/icons/animation-loarder-ring.svg) | .animation-loarder-ring | ![](../imgs/icons/animation-loarder-ringpath.svg) | .animation-loarder-ringpath |

#### CSS Variables

| Variable                  | Description |
| ------------------------- | ----------- |
| `--wui-icon-bgcolor-out`  | Color of enabled monochrome icons in normal state. |
| `--wui-icon-bgcolor-over` | Color of the monochromatic icons in hover/focus state. |

#### SVG Image generation tool

The `tools/svg-icon-maker.py` script crea el set de archivos SVG en base a todos los estilos de icono disponibles en la librería WUIIcon.

```bash
python ./svg-icon-maker.py

python ./svg-icon-maker.py --css <css-path> -o <output-directory> -c <color> -s <size>
```

| Option             | Default value                              | Description |
| ------------------ | ------------------------------------------ | ----------- |
| `--css`            | `../src/wui-js/main/icon/wui-icon-0.3.css` | Path to the source CSS file. |
| `-o`,<br>`--out`   | `../imgs/icons/`                           | Output directory for the generated files. |
| `-c`,<br>`--color` | `#a2a9b6`                                  | CSS-compatible color format that will replace the 'currentColor' statement in the SVG code. |
| `-s`,<br>`--size`  | `24`                                       | Size in pixels (width and height) of the images in the set. |

#### Implementation

CSS code:

```css
html,
body {
	height: 100%;
	margin: 0;
	padding: 0;
}

nav {
	display: flex;
	margin: 10px;
	align-items: center;
	gap: 10px;
}

.my-icon {
	width: 24px;
	height: 24px;
	margin: 10px;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.3.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.3.css">
```

HTML code:

```html
<nav>
	<div class="my-icon">
		<div class="wui-icon patch-check-fill"></div>
	</div>
	<div class="my-icon">
		<div class="wui-icon patch-question-fill"></div>
	</div>
</nav>
```

> [!TIP]
> You can check this functional example on CodeSandbox at the link: [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/icon/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/icon/basic).

<a name="wui-fade"></a>

### WUIFade

Version: `0.3`

Utilities for fading out and fading control in HTML elements with opacity.

It is a static class that does not have a constructor or properties.

#### Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/fade/wui-fade-0.3.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/fade/wui-fade-0.3.js) |

#### Methods

##### Static methods of the `WUIFade` class:

One way to use the library is by calling static methods directly on the `WUIFade` class:

| Method | Return type | Description |
| ------ | ----------- | ----------- |
| in     | `void`      | `in(element[, options])`<br><br>Arguments:<br>**• element:** `HTMLElement` <br>**• options:** `object` *optional*<br><br>Execute the fadein transition. |
| out    | `void`      | `out(element[, options])`<br><br>Arguments:<br>**• element:** `HTMLElement` <br>**• options:** `object` *optional*<br><br>Execute the fadeout transition. |

##### Extended methods of the `HTMLElement` class:

Another alternative way is through extended methods of the `HTMLElement` class through its prototype:

| Method.    | Return type | Description |
| ---------- | ----------- | ----------- |
| wuiFadein  | `void`      | `wuiFadein([options])`<br><br>Arguments:<br>**• options:** `object` *optional*<br><br>Execute the fadein transition. |
| wuiFadeout | `void`      | `wuiFadeout([options])`<br><br>Arguments:<br>**• options:** `object` *optional*<br><br>Execute the fadeout transition. |

> [!IMPORTANT]
> Each method call mode is performed on different types of classes, the first is signaled on `WUIFade`, while the second on `HTMLElement`.

##### Options

| Option  | Type      | Default value | Description |
| ------- | --------- | ------------- | ----------- |
| delay   | `number`  | `400`         | Define the time it will take for the transition effect  in and out, measured in milliseconds. |
| display | `string`  | `"block"`     | Sets the value of the CSS `display` property of the HTML element on which the transition effect is executed, once the incoming transition ends. |
| force   | `boolean` | `false`       | Both the entrance and exit effects are executed as long as the CSS `display` property is different from `options.display` and `none`, respectively. The `force` option ignores this validation. |

#### Implementation

CSS code:

```CSS
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

nav {
	display: flex;
	margin: 10px;
	align-items: center;
	gap: 10px;
}

.my-button {
	margin: 0;
	padding: 0px 5px;
}

.my-element {
	display: none;
	width: 64px;
	height: 64px;
	margin: 10px;
	background-color: red;
}
```

HTML head:

```html
<script type="text/javascript" src="/libraries/wui-js/main/fade/wui-fade-0.3.js"></script>
```

HTML code:

```html
<nav>
	<button class="my-button fadein">fade-in</button>
	<button class="my-button fadeout">fade-out</button>
</nav>

<div id="myElement" class="my-element"></div>
```

JS code:
```js
const init = () => {
	const element = document.getElementById("myElement");
	const fadeinButton = document.querySelector(".my-button.fadein");
	const fadeoutButton = document.querySelector(".my-button.fadeout");
	const options = {
		delay: 200,
		//display: "block"
	};
	fadeinButton.addEventListener("click", () => {
		element.wuiFadein(options);
		// or alternatively
		//WUIFade.in(element, options);
	});
	fadeoutButton.addEventListener("click", () => {
		element.wuiFadeout(options);
		// or alternatively
		//WUIFade.out(element, options);
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!TIP]
> You can check this functional example on CodeSandbox at the link: [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/fade/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/fade/basic).

<a name="wui-loader"></a>

### WUILoader

Version: `0.4`

Component for the implementation of loading animations.

#### Sources

| Type | File |
|:----:| ---- |
| CSS  | [src/wui-js/main/loader/wui-loader-0.4.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/loader/wui-loader-0.4.css) |
| CSS  | [src/wui-js/main/loader/wui-loader-0.4.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/loader/wui-loader-0.4.root.css) |
| JS   | [src/wui-js/main/loader/wui-loader-0.4.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/loader/wui-loader-0.4.js) |

#### Constructor

| Type       | Description |
| ---------- | ----------- |
| WUILoader  | `WUILoader([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property  | Type     | Default value   | Description |
| --------- | -------- | --------------- | ----------- |
| selector  | `string` | `".wui-loader"` | (get/set)<br><br>CSS selector that defines the HTML element that will be converted into the object. If more than one element matches the selector, only the first match will be included. |
| style     | `string` | `"ring"`        | (get/set)<br><br>Loading animation style.<br><br>Values:<br>• `"ring"`, ring.<br>• `"dualring"`, dual ring.<br>• `"spinner"`, spinner.<br>• `"roller"`, roller.<br>• `"ellipsis"`, dots.<br>• `"grid"`, grid. |
| size      | `number` | `60`            | (get/set)<br><br>Loading animation size in pixels. |
| dataStyle | `string` | `"style"`       | (get/set)<br><br>Name of the `data-*` attribute that contains the value of the `style` property. |
| dataSize  | `string` | `"size"`        | (get/set)<br><br>Name of the `data-*` attribute that contains the value of the `size` property. |

#### Methods

| Method      | Return type | Description |
| ----------- | ----------- | ----------- |
| getElements | `NodeList`  | `getElements()`<br><br>Returns a list of HTML elements with the containers of the loading animation objects. |
| init        | `void`      | `init()`<br><br>Initializes the loading animation objects. |
| destroy     | `void`      | `destroy()`<br><br>Destroyer. |

#### CSS Variables

| Variable             | Description |
| -------------------- | ----------- |
| `--wui-loader-color` | Loading animation color. |

#### Implementation

<a name="wui-tooltip"></a>

### WUITooltip

Version: `0.3`

Component for the implementation of tooltip texts.

#### Sources

| Type | File |
|:----:| ---- |
| CSS  | [src/wui-js/main/tooltip/wui-tooltip-0.3.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/tooltip/wui-tooltip-0.3.css) |
| CSS  | [src/wui-js/main/tooltip/wui-tooltip-0.3.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/tooltip/wui-tooltip-0.3.root.css) |
| JS   | [src/wui-js/main/tooltip/wui-tooltip-0.3.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/tooltip/wui-tooltip-0.3.js) |

#### Constructor

| Type       | Description |
| ---------- | ----------- |
| WUITooltip | `WUITooltip([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property | Type     | Default value            | Description |
| -------- | -------- | ------------------------ | ----------- |
| selector | `string` | `".wui-tooltip-target"` | (get/set)<br><br>CSS selector that defines the HTML elements that act as tooltip trigger targets. If more than one element matches the selector, all matches will be included. |

#### Methods

| Method      | Return type | Description |
| ----------- | ----------- | ----------- |
| getElements | `NodeList`  | `getElements()`<br><br>Returns the list of HTML elements acting as tooltip trigger targets. |
| init        | `void`      | `init()`<br><br>Initializes the object, attaching hover events to all target elements. |
| lock        | `void`      | `lock()`<br><br>Locks all tooltips in the open state. |
| unlock      | `void`      | `unlock()`<br><br>Unlocks all tooltips, restoring normal hover behavior. |
| destroy     | `void`      | `destroy()`<br><br>Destroyer. |

#### CSS Variables

| Variable                   | Description |
| -------------------------- | ----------- |
| `--wui-tooltip-open-delay` | Delay before the tooltip appears. |
| `--wui-tooltip-bgcolor`    | Background color of the tooltip. |
| `--wui-tooltip-textcolor`  | Text color of the tooltip. |

#### Implementation

CSS code:

```css
html,
body {
	height: 100%;
	margin: 0;
	padding: 0;
}

.my-container {
	position: relative;
	display: inline-block;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tooltip/wui-tooltip-0.3.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tooltip/wui-tooltip-0.3.css">
<script type="text/javascript" src="/libraries/wui-js/main/tooltip/wui-tooltip-0.3.js"></script>
```

HTML code:

```html
<div class="wui-tooltip-target my-container">
	<button>Hover me</button>
	<div class="wui-tooltip-top">Tooltip text</div>
</div>
```

JS code:

```js
const init = () => {
	const tooltip = new WUITooltip({
		selector: ".wui-tooltip-target.my-container"
	});
	tooltip.init();
}

window.addEventListener("DOMContentLoaded", init);
```

<a name="wui-modal"></a>

### WUIModal

Version: `0.5`

Component for the implementation of dialog boxes (type `message`) and pop-up windows (type `page`).

#### Sources

| Type | File |
|:----:| ---- |
| CSS  | [src/wui-js/main/modal/wui-modal-0.5.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/modal/wui-modal-0.5.css) |
| CSS  | [src/wui-js/main/modal/wui-modal-0.5.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/modal/wui-modal-0.5.root.css) |
| JS   | [src/wui-js/main/modal/wui-modal-0.5.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/modal/wui-modal-0.5.js) |

#### Constructor

| Type     | Description |
| -------- | ----------- |
| WUIModal | `WUIModal([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property     | Type       | Default value | Description |
| ------------ | ---------- | ------------- | ----------- |
| selector     | `string`   | `""`          | (get/set)<br><br>CSS selector that defines the HTML container element of the object. If there is more than one matching element with the selector, only the first match will be included. |
| openDelay    | `number`   | `200`         | (get/set)<br><br>Modal opening duration in milliseconds. |
| onStartOpen  | `function` | `null`        | (get/set)<br><br>Function that is executed when the modal starts opening. |
| onOpen       | `function` | `null`        | (get/set)<br><br>Function that is executed when the modal has completely opened. |
| onMaximize   | `function` | `null`        | (get/set)<br><br>Function that is executed when the modal is maximized. |
| onScrolling  | `function` | `null`        | (get/set)<br><br>Function that is executed during scrolling of the modal body. |
| onStartClose | `function` | `null`        | (get/set)<br><br>Function that is executed when the modal starts closing. |
| onClose      | `function` | `null`        | (get/set)<br><br>Function that is executed when the modal has completely closed. |
| onBack       | `function` | `null`        | (get/set)<br><br>Function that is executed when the modal back button is pressed. |

#### Class Methods

| Method           | Return type | Description |
| ---------------- | ----------- | ----------- |
| getAllInstances  | `Array`     | `WUIModal.getAllInstances()` *(static method)*<br><br>Returns all instances of WUIModal. |
| getOpenInstances | `Array`     | `WUIModal.getOpenInstances()` *(static method)*<br><br>Returns all open instances of WUIModal. |
| closeAll         | `void`      | `WUIModal.closeAll([except])` *(static method)*<br><br>Arguments:<br>**• except:** `string` *optional*, selector of the modal that will be excluded from the closing sequence.<br><br>Closes all modals except the one specified by selector. |

#### Instance Methods

| Method        | Return type   | Description |
| ------------- | ------------- | ----------- |
| getElement    | `HTMLElement` | `getElement()`<br><br>Returns the HTML container element of the object. |
| getBox        | `HTMLElement` | `getBox()`<br><br>Returns the HTML element of the modal box. |
| getHeader     | `HTMLElement` | `getHeader()`<br><br>Returns the HTML element of the modal header. |
| getBack       | `HTMLElement` | `getBack()`<br><br>Returns the HTML element of the modal back button. |
| getTopbar     | `HTMLElement` | `getTopbar()`<br><br>Returns the HTML element of the modal top bar. |
| getTitle      | `HTMLElement` | `getTitle()`<br><br>Returns the HTML element of the modal title. |
| getClose      | `HTMLElement` | `getClose()`<br><br>Returns the HTML element of the modal close button. |
| getBody       | `HTMLElement` | `getBody()`<br><br>Returns the HTML element of the modal body. |
| getFooter     | `HTMLElement` | `getFooter()`<br><br>Returns the HTML element of the modal footer. |
| getStatus     | `string`      | `getStatus()`<br><br>Returns the current modal status as a comma-separated string. Possible values: `"opened"`, `"maximized"`, `"under"`, `"close"`. |
| setHeadBorder | `void`        | `setHeadBorder(border)`<br><br>Arguments:<br>**• border:** `boolean`.<br><br>Sets whether the header has a bottom border. |
| init          | `void`        | `init()`<br><br>Initializes the object. |
| open          | `void`        | `open([onOpen[, delay]])`<br><br>Arguments:<br>**• onOpen:** `function` *optional*, this function is executed when the modal is opened. The default value corresponds to the `onOpen` property.<br>**• delay:** `number` *optional*, modal opening duration in milliseconds. The default value corresponds to that of the `openDelay` property.<br><br>Opens the modal. |
| resposive     | `void`        | `resposive()`<br><br>Adjusts the modal to the window size. |
| maximize      | `void`        | `maximize([onMaximize[, delay]])`<br><br>Arguments:<br>**• onMaximize:** `function` *optional*, this function is executed when the modal is maximized. The default value corresponds to the `onMaximize` property.<br>**• delay:** `number` *optional*, modal opening duration in milliseconds. The default value corresponds to that of the `openDelay` property.<br><br>Maximizes the modal. |
| close         | `void`        | `close([onClose[, delay]])`<br><br>Arguments:<br>**• onClose:** `function` *optional*, this function is executed when the modal closes. The default value corresponds to the `onClose` property.<br>**• delay:** `number` *optional*, modal opening duration in milliseconds. The default value corresponds to that of the `openDelay` property.<br><br>Closes the modal. |
| isOpen        | `boolean`     | `isOpen()`<br><br>Returns whether the modal is open. |
| destroy       | `void`        | `destroy()`<br><br>Destructor. |

#### CSS Variables

| Variable                                             | Description |
| ---------------------------------------------------- | ----------- |
| `--wui-modal-overlay-bgcolor`                        | Background color of the modal overlay. |
| `--wui-modal-box-borderradius`                       | Border radius of the modal box. |
| `--wui-modal-box-bgcolor`                            | Background color of the modal box. |
| `--wui-modal-back-textcolor`                         | Text color of the back button. |
| `--wui-modal-close-bgcolor`                          | Background color of the close button. |
| `--wui-modal-topbar-height`                          | Height of the modal top bar. |
| `--wui-modal-title-textfont`                         | Font of the modal title text. |
| `--wui-modal-title-textcase`                         | Text transformation of the title (uppercase, lowercase, none). |
| `--wui-modal-title-textcolor`                        | Text color of the modal title. |
| `--wui-modal-body-scroll-bgcolor-out`                | Scrollbar color of the body in normal state. |
| `--wui-modal-body-scroll-bgcolor-over`               | Scrollbar color of the body in hover state. |
| `--wui-modal-footer-bordercolor`                     | Border color of the modal footer. |
| `--wui-modal-button-submit-bgcolor-mobile`           | Background color of the submit button in mobile mode. |
| `--wui-modal-button-submit-textcolor-mobile`         | Text color of the submit button in mobile mode. |
| `--wui-modal-button-warning-textcolor-mobile`        | Text color of the warning button in mobile mode. |
| `--wui-modal-message-box-width`                      | Width of the message type modal box. |
| `--wui-modal-message-box-bgcolor`                    | Background color of the message type modal box. |
| `--wui-modal-message-box-textcolor`                  | Text color of the message type modal box. |
| `--wui-modal-message-linkcolor`                      | Link color in the message type modal. |
| `--wui-modal-message-mobile-box-width`               | Width of the message type modal box in mobile mode. |
| `--wui-modal-message-mobile-footer-bordercolor`      | Footer border color of the message type modal in mobile mode. |
| `--wui-modal-message-mobile-button-bordercolor`      | Button border color of the message type modal in mobile mode. |
| `--wui-modal-page-box-width`                         | Width of the page type modal box. |
| `--wui-modal-page-box-height`                        | Height of the page type modal box. |
| `--wui-modal-page-box-borderradius`                  | Border radius of the page type modal box. |
| `--wui-modal-page-box-maxheight`                     | Maximum height of the page type modal box. |
| `--wui-modal-page-box-bgcolor`                       | Background color of the page type modal box. |
| `--wui-modal-page-header-topbar-bgcolor`             | Background color of the page type modal header top bar. |
| `--wui-modal-page-header-bordercolor`                | Border color of the page type modal header. |
| `--wui-modal-slidepage-box-margin`                   | Margin of the slide page type modal box. |
| `--wui-modal-smallpage-box-width`                    | Width of the small page type modal box. |
| `--wui-modal-smallpage-box-height`                   | Height of the small page type modal box. |
| `--wui-modal-mobile-page-box-topmargin`              | Top margin of the page type modal box in mobile mode. |
| `--wui-modal-mobile-page-box-borderradius-maximized` | Border radius of the maximized page type modal box in mobile mode. |

#### Implementation

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

nav {
	display: flex;
	margin: 10px;
	align-items: center;
	gap: 10px;
}

.my-output {
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.3.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.3.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/modal/wui-modal-0.5.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/modal/wui-modal-0.5.css">
<script type="text/javascript" src="/libraries/wui-js/main/modal/wui-modal-0.5.js"></script>
```

HTML code:

```html
<nav>
	<button class="my-button">open modal</button>
	<div class="my-output"></div>
</nav>

<div class="wui-modal my-modal page">
	<div class="box">
		<div class="header">
			<div class="topbar"></div>
			<div class="title">Modal Title</div>
			<div class="close wui-icon close-lg-line"></div>
		</div>
		<div class="body">
			<p>Modal content...</p>
		</div>
		<div class="footer">
			Footer
		</div>
	</div>
</div>
```

JS code:

```js
const init = () => {
	const button = document.querySelector(".my-button");
	const output = document.body.querySelector(".my-output");
	const modal = new WUIModal({
		selector: ".wui-modal.my-modal",
		//openDelay: 200,
		onStartOpen: () => {
			output.textContent = "Opening modal";
		},
		onOpen: () => {
			output.textContent = "Modal opened";
		},
		//onMaximize: null,
		//onScrolling: null,
		onStartClose: () => {
			output.textContent = "Closing modal";
		},
		onClose: () => {
			output.textContent = "Modal closed";
		}
		//onBack: null
	});
	modal.init();
	button.addEventListener("click", () => {
		modal.open();
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!TIP]
> You can check this working example on CodeSandbox at the link: [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/modal/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/modal/basic).

<a name="wui-paging"></a>

### WUIPaging

Version: `0.4`

Component for the implementation of paginated views with animated transitions.

#### Sources

| Type | File |
|:----:| ---- |
| CSS  | [src/wui-js/main/paging/wui-paging-0.4.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/paging/wui-paging-0.4.css) |
| CSS  | [src/wui-js/main/paging/wui-paging-0.4.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/paging/wui-paging-0.4.root.css) |
| JS   | [src/wui-js/main/paging/wui-paging-0.4.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/paging/wui-paging-0.4.js) |

#### Constructor

| Type      | Description |
| --------- | ----------- |
| WUIPaging | `WUIPaging([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property    | Type       | Default value | Description |
| ----------- | ---------- | ------------- | ----------- |
| selector    | `string`   | `""`          | (get/set)<br><br>CSS selector that defines the HTML container element of the object. If more than one element matches the selector, only the first match will be included. |
| index       | `number`   | `null`        | (get/set)<br><br>Index of the currently selected page. |
| dataTarget  | `string`   | `"target"`    | (get/set)<br><br>Name of the `data-*` attribute that contains the identifier of each page. |
| onSelect    | `function` | `null`        | (get/set)<br><br>Function executed when page selection starts. Receives the following arguments:<br><br>**• inputIndex:** `number`, index of the page to be selected.<br>**• inputTarget:** `string`, identifier of the page to be selected.<br>**• outputIndex:** `number`, index of the currently selected page.<br>**• outputTarget:** `string`, identifier of the currently selected page. |
| onChange    | `function` | `null`        | (get/set)<br><br>Function executed when the page change is completed. Receives the following arguments:<br><br>**• index:** `number`, index of the newly selected page.<br>**• target:** `string`, identifier of the newly selected page. |
| onBack      | `function` | `null`        | (get/set)<br><br>Function executed when going back to a previous page from history is completed. Receives the following arguments:<br><br>**• index:** `number`, index of the page retrieved from history.<br>**• target:** `string`, identifier of the page retrieved from history. |
| onScrolling | `function` | `null`        | (get/set)<br><br>Function executed during scroll within a page with the `scroll` class. Receives the following argument:<br><br>**• scroll:** `number`, scroll position in pixels. |

#### Methods

| Method     | Return type    | Description |
| ---------- | -------------- | ----------- |
| getElement | `HTMLElement`  | `getElement()`<br><br>Returns the HTML container element of the object. |
| getIndex   | `number`       | `getIndex([target])`<br><br>Arguments:<br>**• target:** `string` *optional*, page identifier. If not specified, uses the current target.<br><br>Returns the index of a page based on its identifier. |
| getTarget  | `string`       | `getTarget([index])`<br><br>Arguments:<br>**• index:** `number` *optional*, page index. If not specified, uses the current index.<br><br>Returns the identifier of a page based on its index. |
| getPages   | `NodeList`     | `getPages()`<br><br>Returns a list with all page-type HTML elements (with class `.page`). |
| getPage    | `HTMLElement`  | `getPage(target)`<br><br>Arguments:<br>**• target:** `string` or `number`, page identifier or index.<br><br>Returns the HTML element of a specific page. |
| init       | `void`         | `init()`<br><br>Initializes the object, setting the initial page and configuring scroll events. |
| select     | `void`         | `select(target[, onChange])`<br><br>Arguments:<br>**• target:** `string` or `number`, identifier or index of the page to select.<br>**• onChange:** `function` *optional*, function executed when the change is completed. The default value corresponds to the `onChange` property.<br><br>Selects and displays a page with transition animation. |
| setHistory | `void`         | `setHistory([history])`<br><br>Arguments:<br>**• history:** `array` *optional*, list of page identifiers or indexes that make up the history.<br><br>Manually sets the navigation history. |
| back       | `void`         | `back([onBack])`<br><br>Arguments:<br>**• onBack:** `function` *optional*, function executed when going back is completed. The default value corresponds to the `onBack` property.<br><br>Goes back to the previous page in the history. |
| reset      | `void`         | `reset()`<br><br>Resets the component, selecting the first page and clearing the history. |
| destroy    | `void`         | `destroy()`<br><br>Destroyer. |

#### CSS Variables

| Variable                                | Description |
| --------------------------------------- | ----------- |
| `--wui-paging-page-transition-time`     | Duration time of the transition animation between pages. |
| `--wui-paging-page-bgcolor`             | Background color of the pages. |
| `--wui-paging-page-scroll-bgcolor-out`  | Scrollbar color in normal state (pages with `scroll` class). |
| `--wui-paging-page-scroll-bgcolor-over` | Scrollbar color in hover state (pages with `scroll` class). |

#### Implementation

CSS code:

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

.my-paging {
	position: absolute;
}

.my-paging > .page > nav {
	position: absolute;
	top: 50%;
	left: 50%;
	display: flex;
	gap: 10px;
	transform: translate(-50%, -50%);
}

.my-output {
	position: absolute;
	left: 0;
	bottom: 0;
	margin: 10px;
	font-family: monospace;
}
```

HTML header:

```html
<link rel="stylesheet" type="text/css" href="/libraries/wui-js/main/paging/wui-paging-0.4.css">
<script type="text/javascript" src="/libraries/wui-js/main/paging/wui-paging-0.4.js"></script>
```

HTML code:

```html
<div class="wui-paging my-paging">
	<div class="page scroll" data-target="page1">
		<h1>Page 1</h1>
		<nav>
			<button class="my-button go-page2">go to page 2 &#9205;</button>
		</nav>
	</div>
	<div class="page scroll" data-target="page2">
		<h1>Page 2</h1>
		<nav>
			<button class="my-button go-page1">&#9204; go to page 1</button>
			<button class="my-button go-page3">go to page 3 &#9205;</button>
		</nav>
	</div>
	<div class="page scroll" data-target="page3">
		<h1>Page 3</h1>
		<nav>
			<button class="my-button go-page2">&#9204; go to page 2</button>
		</nav>
	</div>
</div>

<div class="my-output"></div>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".my-output");
	const paging = new WUIPaging({
		selector: ".wui-paging.my-paging",
		//index: null,
		//dataTarget: "target",
		onSelect: (inputIndex, inputTarget, outputIndex, outputTarget) => {
			output.textContent = `Selecting page: ${inputTarget} (${inputIndex})`;
		},
		onChange: (index, target) => {
			output.textContent = `Change completed to: ${target} (${index})`;
		},
		onBack: (index, target) => {
			output.textContent = `Back to: ${target} (${index})`;
		},
		onScrolling: (scroll) => {
			output.textContent = `Scrolling at: ${scroll}px`;
		}
	});
	paging.init();
	["page1", "page2", "page3"].forEach(target => {
		document.querySelectorAll(".go-" + target).forEach(button => {
			button.addEventListener("click", () => {
				paging.select(target);
			});
		})
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!NOTE]
> Pages can have the `scroll` class to enable vertical scrolling. The component supports two transition modes: lateral movement (default) or opacity-based (by adding the `opacity` class to the main container).

> [!TIP]
> You can check this functional example on CodeSandbox at the link: [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/paging/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/paging/basic).

<a name="wui-slider"></a>

### WUISlider

Version: `0.5`

Component for the implementation of slide presentations controlled by mouse/touch dragging and/or by event.

#### Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/slider/wui-slider-0.5.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/slider/wui-slider-0.5.js) |
| CSS  | [src/wui-js/main/slider/wui-slider-0.5.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/slider/wui-slider-0.5.css) |
| CSS  | [src/wui-js/main/slider/wui-slider-0.5.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/slider/wui-slider-0.5.root.css) |

#### Constructor

| Type      | Description |
| --------- | ----------- |
| WUISlider | `WUISlider([properties])`<br><br>Parameters:<br>**• properties:** `object` *optional* |

#### Properties

| Property | Type       | Default value   | Description |
| -------- | ---------- | --------------- | ----------- |
| selector | `string`   | `".wui-slider"` | (get/set)<br><br>CSS selector of the HTML container element of the slider. When assigned, it also locates the internal `.body` and `.paging` sub-elements. |
| onChange | `function` | `null`          | (get/set)<br><br>Function executed when the active slide changes.<br><br>Function parameters:<br>**• index:** `number`, index of the active slide (starts at `0`). |

#### Methods

| Method     | Return type   | Description |
| ---------- | ------------- | ----------- |
| getElement | `HTMLElement` | `getElement()`<br><br>Returns the root HTML element of the slider. |
| getBody    | `HTMLElement` | `getBody()`<br><br>Returns the internal `.body` HTML element that contains the slides. |
| getIndex   | `number`      | `getIndex()`<br><br>Returns the index of the active slide (starts at `0`). |
| init       | `void`        | `init()`<br><br>Initializes the slider. Equivalent to calling `load()`. |
| load       | `void`        | `load()`<br><br>Loads or reloads the slides, resets the pagination indicators and re-attaches the interaction events (drag and touch). |
| prev       | `void`        | `prev()`<br><br>Moves the slider to the previous slide with animation. Has no effect if already on the first slide. |
| next       | `void`        | `next()`<br><br>Moves the slider to the next slide with animation. Has no effect if already on the last slide. |
| go         | `void`        | `go(index)`<br><br>Parameters:<br>**• index:** `number`, index of the target slide (starts at `0`)<br><br>Jumps directly to the indicated slide without transition animation. |
| destroy    | `void`        | `destroy()`<br><br>Destroyer. |

#### CSS Variables

| Variable                              | Description |
| ------------------------------------- | ----------- |
| `--wui-slider-paging-bgcolor-hidden`  | Color of the pagination indicator in unselected state. |
| `--wui-slider-paging-bgcolor-visible` | Color of the pagination indicator in selected state. |

#### Implementation

CSS code:

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

.my-slider {
	width: 100%;
	max-height: 400px;
}

.my-slider .slide {
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
}

.slide1 {
	background-color: #FF5C8A;
}

.slide2 {
	background-color: #8B5CF6;
}

.slide3 {
	background-color: #4DA3FF;
}

nav {
	display: flex;
	width: 100%;
	justify-content: center;
	margin-top: 10px;
	gap: 10px;
}

.my-output {
	width: 100%;
	height: 40px;
	margin: 10px;
	font-family: monospace;
}
```

HTML Header:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/slider/wui-slider-0.5.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/slider/wui-slider-0.5.css">
<script type="text/javascript" src="/libraries/wui-js/main/slider/wui-slider-0.5.js"></script>
```

HTML Code:

```html
<div class="wui-slider">
	<div class="body">
		<div class="slide slide1">Slide 1</div>
		<div class="slide slide2">Slide 2</div>
		<div class="slide slide3">Slide 3</div>
	</div>
	<div class="paging dots"></div>
</div>

<nav>
	<button class="my-button prev">&#9204; prev</button>
	<button class="my-button next">next &#9205;</button>
</nav>

<div class="my-output"></div>
```

JS Code:

```js
const init = () => {
	const prevButton = document.body.querySelector(".my-button.prev");
	const nextButton = document.body.querySelector(".my-button.next");
	const output = document.body.querySelector(".my-output");
	const slider = new WUISlider({
		selector: ".wui-slider.my-slider",
		onChange: (index) => {
			output.textContent = `Change to: ${index}`;
		}
	});
	slider.init();
	prevButton.addEventListener("click", () => {
		slider.prev();
	});
	nextButton.addEventListener("click", () => {
		slider.next();
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!TIP]
> You can check this functional example on CodeSandbox at the link: [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/slider/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/slider/basic).

<a name="wui-tabs"></a>

### WUITabs

Version: `0.3`

Component for the implementation of views accessible by tab selection.

#### Sources

| Type | File |
|:----:| ---- |
| CSS  | [src/wui-js/main/tabs/wui-tabs-0.3.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/tabs/wui-tabs-0.3.css) |
| CSS  | [src/wui-js/main/tabs/wui-tabs-0.3.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/tabs/wui-tabs-0.3.root.css) |
| JS   | [src/wui-js/main/tabs/wui-tabs-0.3.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/tabs/wui-tabs-0.3.js) |

#### Constructor

| Type    | Description |
| ------- | ----------- |
| WUITabs | `WUITabs([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property | Type     | Default value | Description |
| -------- | -------- | ------------- | ----------- |
| selector | `string` | `""`          | (get/set)<br><br>CSS selector that defines the HTML container element of the tab component. If more than one element matches the selector, only the first match will be included. |
| index    | `number` | `0`           | (get/set)<br><br>Index of the tab selected by default on initialization. |

#### Methods

| Method     | Return type   | Description |
| ---------- | ------------- | ----------- |
| getElement | `HTMLElement` | `getElement()`<br><br>Returns the HTML container element of the object. |
| init       | `void`        | `init()`<br><br>Initializes the object, attaching click events to tabs and selecting the default tab. |
| select     | `void`        | `select([index])`<br><br>Arguments:<br>**• index:** `number`, tab index to select. The default value is `0`.<br><br>Selects the tab at the given index, showing the corresponding page. |
| destroy    | `void`        | `destroy()`<br><br>Destroyer. |

#### CSS Variables

| Variable                          | Description |
| --------------------------------- | ----------- |
| `--wui-tabs-tab-bgcolor-out`      | Background color of tabs in normal state. |
| `--wui-tabs-tab-bgcolor-over`     | Background color of tabs in hover/selected state. |
| `--wui-tabs-tab-iconcolor-out`    | Icon    color of tabs in normal state. |
| `--wui-tabs-tab-iconcolor-over`   | Icon    color of tabs in hover/selected state. |
| `--wui-tabs-tab-iconcolor-mobile` | Icon    color of tabs in mobile mode. |
| `--wui-tabs-tab-textcolor-out`    | Text color of tabs in normal state. |
| `--wui-tabs-tab-textcolor-over`   | Text color of tabs in hover/selected state. |

#### Implementation

CSS code:

```css
html,
body {
	height: 100%;
	margin: 0;
	padding: 0;
}

.my-tabs {
	height: 100%;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tabs/wui-tabs-0.3.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tabs/wui-tabs-0.3.css">
<script type="text/javascript" src="/libraries/wui-js/main/tabs/wui-tabs-0.3.js"></script>
```

HTML code:

```html
<div class="wui-tabs bottombar mobile my-tabs">
	<div class="body">
		<div class="border"></div>
		<div class="page">Page 1 content</div>
		<div class="page">Page 2 content</div>
		<div class="page">Page 3 content</div>
	</div>
	<div class="bar">
		<div class="tab">
			<div class="icon wui-icon wui-icon-home"></div>
			<div class="text">Home</div>
		</div>
		<div class="tab">
			<div class="icon wui-icon wui-icon-user"></div>
			<div class="text">Profile</div>
		</div>
		<div class="tab">
			<div class="icon wui-icon wui-icon-settings"></div>
			<div class="text">Settings</div>
		</div>
	</div>
</div>
```

JS code:

```js
const init = () => {
	const tabs = new WUITabs({
		selector: ".wui-tabs.my-tabs",
		index: 0
	});
	tabs.init();
}

window.addEventListener("DOMContentLoaded", init);
```

<a name="wui-menubar"></a>

### WUIMenubar

Versión: `0.4`

Component for the implementation of menu bars.

#### Sources

| Type | File |
|:----:| ---- |
| CSS  | [src/wui-js/main/menubar/wui-menubar-0.4.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/menubar/wui-menubar-0.4.css) |
| CSS  | [src/wui-js/main/menubar/wui-menubar-0.4.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/menubar/wui-menubar-0.4.root.css) |
| JS   | [src/wui-js/main/menubar/wui-menubar-0.4.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/menubar/wui-menubar-0.4.js) |

#### Constructor

| Type       | Description |
| ---------- | ----------- |
| WUIMenubar | `WUIMenubar([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property      | Type       | Default value.   | Description |
| ------------- | ---------- | ---------------- | ----------- |
| selector      | `string`   | `".wui-menubar"` | (get/set)<br><br>CSS selector that defines the HTML element that will be converted into the object. If more than one element matches the selector, only the first match will be included. |
| compacted     | `boolean`  | `false`          | (get/set)<br><br>Define whether the menu is displayed in a compact format. |
| expansive     | `boolean`  | `true`           | (get/set)<br><br>Define whether the menu expands.. The function of expansion is not visible in mobile mode (when the screen width is less than `768px`). |
| autoClose     | `boolean`  | `true`           | (get/set)<br><br>Defines whether the submenu closes automatically when a button within it is clicked. If the property is `false`, a button to close the submenu manually will be loaded at the top. |
| topButtons    | `array`    | `[]`             | (get/set)<br><br>List of menu top buttons, as defined by **Button Options**. These buttons are not visible in mobile mode (when the screen width is less than `768px`). |
| mainButtons   | `array`    | `[]`             | (get/set)<br><br>List of menu main buttons, as defined by **Button Options**. |
| bottomButtons | `array`    | `[]`             | (get/set)<br><br>List of menu bottom buttons, as defined by **Button Options**. These buttons are not visible in mobile mode (when the screen width is less than `768px`). |
| onClick       | `function` | `null`           | (get/set)<br><br>Function run when a button is clicked. The function receives as parameters:<br><br>**• id:** `string`, unique button identifier. |
| onSelect      | `function` | `null`           | (get/set)<br><br>Function run when a button with the `selectable` property is selected. The function receives as parameters:<br><br>**• id:** `string`, unique button identifier. |

#### Button Options

| Property     | Type       | Default value | Description |
| ------------ | ---------- | ------------- | ----------- |
| id           | `string`   | `undefined`   | Unique button identifier. |
| iconImage    | `string`   | `undefined`   | URL of the image associated with the menu button. |
| iconClass    | `string`   | `undefined`   | CSS styles that define the menu button icon. This option can optionally be used with the [WUIIcon](#wui-icon) library by using the `wui-icon` style in conjunction with a specific icon style. |
| label        | `string`   | `""`          | Label text associated with the menu button. |
| radioMode    | `boolean`  | `true`        | Defines whether the button behaves like a radio mode button. |
| selectable   | `boolean`  | `true`        | Defines whether the button is selectable. |
| hoverable    | `boolean`  | `true`        | Defines whether the button reacts to the `hover` event. |
| tooltipable  | `boolean`  | `true`        | Defines whether the button displays a tooltip when collapsed and the screen width is greater than or equal to `768px`. |
| selected     | `boolean`  | `false`       | Defines whether the button is selected. |
| enabled      | `boolean`  | `true`        | Defines whether the button is enabled. |
| onClick      | `function` | `null`        | Function run when the button is clicked. If defined, this option takes precedence over the `onClick` property. |

#### Methods

| Method       | Return type   | Description |
| ------------ | ------------- | ----------- |
| getElement   | `HTMLElement` | `getElement()`<br><br>Returns the HTML container element of the object. |
| getButton    | `object`      | `getButton(id)`<br><br>Arguments:<br>**• id:** `string`, unique button identifier.<br><br>Returns the menu button according to the unique button identifier passed as a argument. |
| init         | `void`        | `init()`<br><br>Initializes the object. |
| selectButton | `void`        | `selectButton(id[, selected[, runCallback]])`<br><br>Arguments:<br>**• id:** `string`, unique button identifier.<br>**• selected:** `boolean`, button selection state. The default value is `true`. <br>**• runCallback:** `boolean`, run the `onClick` and `onSelect` callbacks. The default value is `true`.<br><br>Select or unselect a menu button. |
| enableButton | `void`        | `enableButton(id[, enabled])`<br><br>Arguments:<br>**• id:** `string`, unique button identifier.<br>**• enabled:** `boolean`, button enable state. The default value is `true`.<br><br>Enables or disables a menu button. |
| setPhoto     | `void`        | `setPhoto(id[, src])`<br><br>Arguments:<br>**• id:** `string`, unique button identifier.<br>**• src:** `string`, image source. The default value is `""`.<br><br>Upload an image above a button icon. |
| setBubble    | `void`        | `setBubble(id, number)`<br><br>Arguments:<br>**• id:** `string`, unique button identifier.<br>**• number:** `number`, number that will appear in the bubble. The value `0` hides the bubble. |
| close        | `void`        | `close()`<br><br>Close the submenu if it is open. |
| destroy      | `void`        | `destroy()`<br><br>Destroyer. |

#### CSS Variables

| Variable                                          | Description |
| ------------------------------------------------- | ----------- |
| `--wui-menubar-shadowcolor`                       | Shadow color for the menu bar and submenu. |
| `--wui-menubar-margin`                            | Outer margin of the menu bar relative to the window edges. |
| `--wui-menubar-borderradius`                      | Border radius for the menu bar, submenu, and buttons. |
| `--wui-menubar-bar-bordercolor`                   | Border color of the main menu bar. |
| `--wui-menubar-bar-bgcolor-top`                   | Top background color of the main bar (used in gradient). |
| `--wui-menubar-bar-bgcolor-bottom`                | Bottom background color of the main bar (used in gradient). |
| `--wui-menubar-bar-button-bgcolor-out`            | Background color of main bar buttons in normal state. |
| `--wui-menubar-bar-button-bgcolor-over`           | Background color of main bar buttons in hover/focus state. |
| `--wui-menubar-bar-button-bgcolor-selected`       | Background color of main bar buttons in selected state. |
| `--wui-menubar-bar-button-bgcolor-disabled`       | Background color of main bar buttons in disabled state. |
| `--wui-menubar-bar-button-iconsize`               | Icon    size for main bar buttons. |
| `--wui-menubar-bar-button-iconcolor-out`          | Icon    color of main bar buttons in normal state. |
| `--wui-menubar-bar-button-iconcolor-over`         | Icon    color of main bar buttons in hover/focus state. |
| `--wui-menubar-bar-button-iconcolor-selected`     | Icon    color of main bar buttons in selected state. |
| `--wui-menubar-bar-button-iconcolor-disabled`     | Icon    color of main bar buttons in disabled state. |
| `--wui-menubar-bar-button-textcolor-out`          | Text color of main bar buttons in normal state. |
| `--wui-menubar-bar-button-textcolor-over`         | Text color of main bar buttons in hover/focus state. |
| `--wui-menubar-bar-button-textcolor-selected`     | Text color of main bar buttons in selected state. |
| `--wui-menubar-bar-button-textcolor-disabled`     | Text color of main bar buttons in disabled state. |
| `--wui-menubar-expander-bgcolor-out`              | Background color of the expander/contractor button in normal state. |
| `--wui-menubar-expander-bgcolor-over`             | Background color of the expander/contractor button in hover state. |
| `--wui-menubar-expander-iconsize`                 | Icon    size of the expander/contractor button. |
| `--wui-menubar-expander-iconcolor-out`            | Icon    color of the expander/contractor button in normal state. |
| `--wui-menubar-expander-iconcolor-over`           | Icon    color of the expander/contractor button in hover state. |
| `--wui-menubar-expander-expandicon-src`           | Source for the expand icon<br>(format: `url()` or `none` for the default source). |
| `--wui-menubar-expander-contracticon-src`         | Source for the contract icon<br>(format: `url()` or `none` for the default source). |
| `--wui-menubar-opener-iconsize`                   | Icon    size of the submenu opener button. |
| `--wui-menubar-opener-openicon-src`               | Source for the submenu open icon<br>(format: `url()` or `none` for the default source). |
| `--wui-menubar-opener-closeicon-src`              | Source for the submenu close icon<br>(format: `url()` or `none` for the default source). |
| `--wui-menubar-submenu-bordercolor`               | Border color of the submenu. |
| `--wui-menubar-submenu-bgcolor`                   | Background color of the submenu. |
| `--wui-menubar-submenu-button-bgcolor-out`        | Background color of submenu buttons in normal state. |
| `--wui-menubar-submenu-button-bgcolor-over`       | Background color of submenu buttons in hover/focus state. |
| `--wui-menubar-submenu-button-bgcolor-selected`   | Background color of submenu buttons in selected state. |
| `--wui-menubar-submenu-button-bgcolor-disabled`   | Background color of submenu buttons in disabled state. |
| `--wui-menubar-submenu-button-iconsize`           | Icon    size for submenu buttons. |
| `--wui-menubar-submenu-button-iconcolor-out`      | Icon    color of submenu buttons in normal state. |
| `--wui-menubar-submenu-button-iconcolor-over`     | Icon    color of submenu buttons in hover/focus state. |
| `--wui-menubar-submenu-button-iconcolor-selected` | Icon    color of submenu buttons in selected state. |
| `--wui-menubar-submenu-button-iconcolor-disabled` | Icon    color of submenu buttons in disabled state. |
| `--wui-menubar-submenu-button-textcolor-out`      | Text color of submenu buttons in normal state. |
| `--wui-menubar-submenu-button-textcolor-over`     | Text color of submenu buttons in hover/focus state. |
| `--wui-menubar-submenu-button-textcolor-selected` | Text color of submenu buttons in selected state. |
| `--wui-menubar-submenu-button-textcolor-disabled` | Text color of submenu buttons in disabled state. |
| `--wui-menubar-tooltip-bgcolor`                   | Background color of the tooltip that appears when hovering over a collapsed button (desktop only). |
| `--wui-menubar-tooltip-textcolor`                 | Text color of the tooltip. |
| `--wui-menubar-bubble-bgcolor`                    | Background color of the notification bubble on buttons. |
| `--wui-menubar-bubble-textcolor`                  | Text color of the notification bubble. |
| `--wui-menubar-mobile-bar-horizpadding`           | Horizontal inner padding of the main menu bar in mobile mode. |
| `--wui-menubar-mobile-bar-vertpadding`            | Vertical inner padding of the main menu bar in mobile mode. |
| `--wui-menubar-mobile-opener-closeicon-src`       | Source for the submenu close icon in mobile mode<br>(format: `url()` or `none` for the default source). |

#### Implementation

CSS code:

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

.my-output {
	position: absolute;
	top: 10px;
	left: 10px;
	right: 10px;
	text-align: right;
	font-family: monospace;
}

@media screen and (max-width: 767px) {
	.my-output {
		text-align: center:
	}
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.3.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.3.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/menubar/wui-menubar-0.4.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/menubar/wui-menubar-0.4.css">
<script type="text/javascript" src="/libraries/wui-js/main/menubar/wui-menubar-0.4.js"></script>
```

HTML code:

```html
<div class="wui-menubar my-menubar"></div>
<div class="my-output"></div>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".my-output");
	const menubar = new WUIMenubar({
		selector: ".wui-menubar.my-menubar",
		//expansive: true,
		autoClose: false,
		topButtons: [{
			id: "logo",
			iconImage: "https://wuijs.dev/Images/Logo/wuijs-isotype-color.svg",
			label: "WUI /JS Lib",
			tooltipable: false,
			selectable: false
		}],
		mainButtons: [{
			id: "zones",
			iconClass: "wui-icon home-fill",
			label: "Home",
			selected: true
		}, {
			id: "settings",
			iconClass: "wui-icon gear-fill",
			label: "Settings",
			selectable: false
		}, {
			id: "tools",
			iconClass: "wui-icon pencil-fill",
			label: "Tools",
			buttons: [{
				id: "users",
				iconClass: "wui-icon palette-fill",
				label: "Colors"
			}, {
				id: "zoomin",
				iconClass: "wui-icon zoomin-line",
				label: "Zoom in"
			}, {
				id: "zoomout",
				iconClass: "wui-icon zoomout-line",
				label: "Zoom out"
			}, {
				id: "images",
				iconClass: "wui-icon image-fill",
				label: "Images"
			}]
		}, {
			id: "account",
			iconClass: "wui-icon person-circle-fill",
			photoImage: "",
			label: "Account",
			selectable: false
		}, {
			id: "notifications",
			iconClass: "wui-icon bell-fill",
			label: "Notifications",
			radio: false
		}],
		bottomButtons: [{
			id: "logout",
			iconClass: "wui-icon logout-line",
			label: "Logout",
			selectable: false
		}],
		onClick: (id) => {
			output.textContent = `Click - id button: "${id}"`;
		},
		onSelect: (id) => {
			output.textContent = `Select - id button: "${id}"`;
		}
	});
	menubar.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!TIP]
> You can check this functional example on CodeSandbox at the link: [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/menubar/submenu](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/menubar/submenu).

<a name="wui-list"></a>

### WUIList

Versión: `0.4`

Component for the implementation of data lists and buttons for each row optionally.

#### Sources

| Type | File |
|:----:| ---- |
| CSS  | [src/wui-js/main/list/wui-list-0.4.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/list/wui-list-0.4.css) |
| CSS  | [src/wui-js/main/list/wui-list-0.4.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/list/wui-list-0.4.root.css) |
| JS   | [src/wui-js/main/list/wui-list-0.4.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/list/wui-list-0.4.js) |

#### Constructor

| Type    | Description |
| ------- | ----------- |
| WUIList | `WUIList([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property     | Type       | Default value | Description |
| ------------ | ---------- | ------------- | ----------- |
| selector     | `string`   | `".wui-list"` | (get/set)<br><br>CSS selector that defines the HTML element that will be converted into the object. If more than one element matches the selector, only the first match will be included. |
| paging       | `number`   | `0`           | (get/set)<br><br>Paging, or the number of rows per page in the list. A value of `0` indicates that the pagination will be the same length as rows; in other words, a value of `0` disables paging. |
| page         | `number`   | `0`           | (get)<br><br>Current page displayed in the list, where page `0` corresponds to the first page and the last to the total number of rows minus 1. |
| pages        | `number`   | `0`           | (get)<br><br>Total number of pages. |
| total        | `number`   | `0`           | (get)<br><br>Total number of rows. |
| columns      | `array`    | `[]`          | (get/set)<br><br>List of columns in the list, as defined by **Column Options**. |
| rows         | `array`    | `[]`          | (get/set)<br><br>List of rows in the list, as defined by **Row Options**. |
| buttons      | `array`    | `[]`          | (get/set)<br><br>List of row buttons in the list, as defined by **Row Button Options**. |
| buttonsStyle | `string`   | `"round"`     | (get/set)<br><br>Row button style.<br><br>Values:<br>• `"round"`, circular shape.<br>• `"stretch"`, square shape. |
| onPrint      | `function` | `null`        | (get/set)<br><br>Function run when a page or the entire list is displayed. The function receives as parameters:<br><br>**• page:** `number`, page number.<br>**• pages:** `number`, total pages.<br>**• total:** `number`, total rows. |
| onClick      | `function` | `null`        | (get/set)<br><br>Function run when a row is clicked. The function receives as parameters:<br><br>**• index:** `number`, row number.<br>**• id:** `string`, row id.<br>**• enabled:** `boolean`, row enable state.<br>**• options:** `object`, row settings options. |

#### Column Options

| Property | Type     | Default value | Description |
| -------- | -------- | ------------- | ----------- |
| width    | `string` | `undefined`   | Column width. This can be expressed as a number associated with pixels or in a CSS compatible format. |
| align    | `string` | `"left"`      | Alignment mode for column content.<br><br>Values:<br>• `"left"`<br>• `"right"`<br>• `"center"` |

#### Rows Options

| Property     | Type      | Default value | Description |
| ------------ | --------- | ------------- | ----------- |
| id           | `string`  | `undefined`   | Unique row identifier. |
| data         | `array`   | `[]`          | Array with the contents of the cells in the row. |
| innerContent | `string`  | `undefined`   | Optional inner row content, displayed at the bottom of the row. |
| innerOpened  | `boolean` | `false`       | Initial opening of optional inner row content. |
| enabled      | `boolean` | `true`        | Define whether the row is enabled. |

#### Row Button Options

| Property  | Type.               | Default value | Description |
| --------- | ------------------- | ------------- | ----------- |
| iconClass | `string\|function`  | `undefined`   | CSS styles that define the row button icon. This option can optionally be used with the [WUIIcon](#wui-icon) library by using the `wui-icon` style in conjunction with a specific icon style. |
| bgcolor   | `string\|function`  | `undefined`   | Background color in CSS compatible format. |
| enabled   | `boolean\|function` | `true`        | Defines whether the button is enabled. |
| onClick   | `function`          | `null`        | Function run when the button is clicked. It receives the parameters `index`, corresponding to the row position starting from `0`; and `id`, corresponding to the row's unique identifier. |

> [!IMPORTANT]
> Options that accept optional function values ​​(`iconClass`, `bgcolor` and `enabled`) receive the parameters `index`, corresponding to the row position starting from `0`; and `id`, corresponding to the row's unique identifier.

#### Methods

| Method       | Return type   | Description |
| ------------ | ------------- | ----------- |
| getElement   | `HTMLElement` | `getElement()`<br><br>Returns the HTML container element of the object. |
| init         | `void`        | `init()`<br><br>Initializes the object. |
| addColumn    | `void`        | `addColumn(options)`<br><br>Adds a new column settings to the object's column list, as defined in **Column Options**. |
| addRow       | `void`        | `addRow(options)`<br><br>Adds a new row settings to the object's rows list, as defined by **Row Options**. |
| addButton    | `void`        | `addButton(options)`<br><br>Adds a new row button settings to the object's list of row buttons, as defined by **RowButtonOptions**. |
| print        | `void`        | `print([page])`<br><br>Arguments:<br>**• page:** `number`, page number. The default value corresponds to the `page` property. If a value other than the `page` property is passed as a parameter and if it is valid, the property will take that value.<br><br>Prints a list view; this view can be a page or the entire list depending on the `paging` property and the `page` parameter. |
| enableRow    | `void`        | `enableRow(index[, enabled])`<br><br>Arguments:<br>**• index:** `number`, row number.<br>**• enabled:** `boolean`, row enable state. The default value is `true`.<br><br>Enables or disables a row. |
| openInnerRow | `void`        | `openInnerRow(index[, open])`<br><br>Arguments:<br>**• index:** `number`, row number.<br>**• open:** `boolean`, open state of the optional inner row content. The default value is `true`.<br><br>Opens or closes the optional inner row content. |
| firstPage    | `void`        | `firstPage()`<br><br>Displays the view of the first page. |
| lastPage     | `void`        | `lastPage()`<br><br>Displays the view of the last page. |
| prevPage     | `void`        | `prevPage()`<br><br>Displays the view of the previous page if it exists. |
| nextPage     | `void`        | `nextPage()`<br><br>Displays the next page view if one exists. |
| isPrevEnable | `boolean`     | `isPrevEnable()`<br><br>Returns whether a previous page exists. |
| isNextEnable | `boolean`     | `isNextEnable()`<br><br>Returns whether a next page exists. |
| destroy      | `void`        | `destroy()`<br><br>Destroyer. |

#### CSS Variables

| Variable                             | Description |
| ------------------------------------ | ----------- |
| `--wui-list-shadowcolor`             | Shadow color for the list. |
| `--wui-list-borderradius`            | Border radius for the list. |
| `--wui-list-borderwidth`             | Border width for the list. |
| `--wui-list-bordercolor`             | Border color for the list. |
| `--wui-list-scroll-bgcolor-out`      | Background color of the scrollbar in normal state. |
| `--wui-list-scroll-bgcolor-over`     | Background color of the scrollbar in hover/active state. |
| `--wui-list-row-height`              | Height of list rows. |
| `--wui-list-row-borderwidth`         | Border width for rows. |
| `--wui-list-row-bordercolor-out`     | Border color of rows in normal state. |
| `--wui-list-row-bordercolor-over`    | Border color of rows in hover/focus state. |
| `--wui-list-row-bgcolor-out`         | Background color of rows in normal state. |
| `--wui-list-row-bgcolor-over`        | Background color of rows in hover/focus state. |
| `--wui-list-row-textcolor-out`       | Text color of rows in normal state. |
| `--wui-list-row-textcolor-over`      | Text color of rows in hover/focus state. |
| `--wui-list-row-textcolor-disabled`  | Text color of rows in disabled state. |
| `--wui-list-innerrow-borderwidth`    | Border width for inner rows (expandable content). |
| `--wui-list-innerrow-bordercolor`    | Border color for inner rows (expandable content). |
| `--wui-list-innerrow-bgcolor`        | Background color for inner rows (expandable content). |
| `--wui-list-innerrow-textcolor`      | Text color for inner rows (expandable content). |
| `--wui-list-buttons-bgcolor`         | Background color of the slidable row buttons area. |
| `--wui-list-button-size`             | Size of row buttons. |
| `--wui-list-button-hmargin`          | Horizontal margin between row buttons. |
| `--wui-list-button-borderradius`     | Border radius for row buttons. |
| `--wui-list-button-bgcolor-enabled`  | Background color of row buttons in enabled state. |
| `--wui-list-button-bgcolor-disabled` | Background color of row buttons in disabled state. |

#### Implementation

CSS code:

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

header {
	display: flex;
    width: 600px;
	margin: 10px;
	justify-content: flex-end;
    align-items: center;
    gap: 5px;
}

.my-button {
	margin: 0;
	padding: 0px 5px;
}

.my-button.disabled {
	color: #ccc;
}

.my-paging {
	font-size: 16px;
}

nav {
	width: 600px;
	margin: 10px;
}

footer {
	width: 600px;
}

.my-output {
	margin: 10px;
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.3.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.3.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/list/wui-list-0.4.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/list/wui-list-0.4.css">
<script type="text/javascript" src="/libraries/wui-js/main/list/wui-list-0.4.js"></script>
```

HTML code:

```html
<header>
	<button class="my-button first">&#9198;</button>
	<button class="my-button prev">&#9204;</button>
	<button class="my-button next">&#9205;</button>
	<button class="my-button last">&#9197;</button>
	<div class="my-paging"></div>
</header>

<nav>
	<div class="wui-list my-list"></div>
</nav>
  
<footer>
	<div class="my-output"></div>
</footer>
```

JS code:

```js
const init = () => {
	const firstButton = document.body.querySelector(".my-button.first");
	const prevButton = document.body.querySelector(".my-button.prev");
	const nextButton = document.body.querySelector(".my-button.next");
	const lastButton = document.body.querySelector(".my-button.last");
	const paging = document.body.querySelector(".my-paging");
	const output = document.body.querySelector(".my-output");
	const list = new WUIList({
		selector: ".wui-list.my-list",
		paging: 5,
		columns: [{
			width: 10
		}, {
			width: 60,
			align: "center"
		}, {
			align: "left"
		}, {
			width: 60,
			align: "center"
		}],
		rows: [{
			id: "row1", data: ["", "A 1", "B 1", "C 1"]}, {
			id: "row2", data: ["", "A 2", "B 2", "C 2"], enabled: false}, {
			id: "row3", data: ["", "A 3", "B 3", "C 3"]}, {
			id: "row4", data: ["", "A 4", "B 4", "C 4"]}, {
			id: "row5", data: ["", "A 5", "B 5", "C 5"]}, {
			id: "row6", data: ["", "A 6", "B 6", "C 6"]}, {
			id: "row7", data: ["", "A 7", "B 7", "C 7"]}, {
			id: "row8", data: ["", "A 8", "B 8", "C 8"]}, {
			id: "row9", data: ["", "A 9", "B 9", "C 9"]}, {
			id: "row10", data: ["", "A 10", "B 10", "C 10"]}, {
			id: "row11", data: ["", "A 11", "B 11", "C 11"]}, {
			id: "row12", data: ["", "A 12", "B 12", "C 12"]
		}],
		buttons: [{
			iconClass: "wui-icon pencil-fill",
			bgcolor: "#1e90ff",
			onClick: (index, id) => {
				output.textContent = `Click edit button - index: ${index}, id: ${id}`;
			},
			enabled: true
		}, {
			iconClass: "wui-icon trash-fill",
			bgcolor: "#f44343",
			onClick: (index, id) => {
				output.textContent = `Click delete button - index: ${index}, id: ${id}`;
			},
			enabled: true
		}],
		buttonsStyle: "stretch",
		onPrint: (page, pages, total) => {
			if (list.hasPrevPage()) {
				firstButton.classList.remove("disabled");
				prevButton.classList.remove("disabled");
			} else {
				firstButton.classList.add("disabled");
				prevButton.classList.add("disabled");
			}
			if (list.hasNextPage()) {
				lastButton.classList.remove("disabled");
				nextButton.classList.remove("disabled");
			} else {
				lastButton.classList.add("disabled");
				nextButton.classList.add("disabled");
			}
			paging.innerHTML = `${page}/${pages} (${total})`;
		},
		onClick: (index, id, enabled, options) => {
			output.textContent = `Click row - index: ${index}, id: ${id}, enabled: ${enabled}`;
		}
	});
	list.init();
	firstButton.addEventListener("click", () => {
		if (!firstButton.classList.contains("disabled")) {
			list.firstPage();
		}
	});
	prevButton.addEventListener("click", () => {
		if (!prevButton.classList.contains("disabled")) {
			list.prevPage();
		}
	});
	lastButton.addEventListener("click", () => {
		if (!lastButton.classList.contains("disabled")) {
			list.lastPage();
		}
	});
	nextButton.addEventListener("click", () => {
		if (!nextButton.classList.contains("disabled")) {
			list.nextPage();
		}
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!TIP]
> You can check this functional example in CodeSandbox at the link: [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/list/paging-buttongroup](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/list/paging-buttongroup).

<a name="wui-table"></a>

### WUITable

Versión: `0.5`

Component for the implementation of data tables. Unlike the `WUIList` object, the `WUITable` object includes a column header.

#### Sources

| Type | File |
|:----:| ---- |
| CSS  | [src/wui-js/main/table/wui-table-0.5.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/table/wui-table-0.5.css) |
| CSS  | [src/wui-js/main/table/wui-table-0.5.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/table/wui-table-0.5.root.css) |
| JS   | [src/wui-js/main/table/wui-table-0.5.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/table/wui-table-0.5.js) |

#### Constructor

| Type     | Description |
| -------- | ----------- |
| WUITable | `WUITable([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property     | Type       | Default value  | Description |
| ------------ | ---------- | -------------- | ----------- |
| selector     | `string`   | `".wui-table"` | (get/set)<br><br>CSS selector that defines the HTML element that will be converted into the object. If more than one element matches the selector, only the first match will be included. |
| width        | `string`   | `"auto"`       | (get/set)<br><br>Table width in CSS compatible format. |
| paging       | `number`   | `0`            | (get/set)<br><br>Paging, or the number of rows per page in the table. A value of `0` indicates that the pagination will be the same length as rows; in other words, a value of `0` disables paging. |
| resetPaging  | `boolean`  | `false`        | (get/set)<br><br>Define whether pagination is reset when sorting by column. |
| page         | `number`   | `0`            | (get)<br><br>Current page displayed in the table, where page `0` corresponds to the first page and the last to the total number of rows minus 1. |
| pages        | `number`   | `0`            | (get)<br><br>Total number of pages. |
| total        | `number`   | `0`            | (get)<br><br>Total number of rows. |
| columns      | `array`    | `[]`           | (get/set)<br><br>List of columns in the table, as defined by **Column Options**. |
| rows         | `array`    | `[]`           | (get/set)<br><br>List of rows in the tabla, as defined by **Row Options**. |
| align        | `string`   | `"left"`       | (get/set)<br><br>Horizontal alignment mode for table content.<br><br>Values:<br>• `"left"`<br>• `"center"`<br>• `"right"` |
| valign       | `string`   | `"middle"`     | (get/set)<br><br>Vertical alignment mode for table content.<br><br>Values:<br>• `"top"`<br>• `"middle"`<br>• `"bottom"` |
| sortable     | `boolean`  | `true`         | (get/set)<br><br>Define whether rows are sortable by column. |
| resizable    | `boolean`  | `true`         | (get/set)<br><br>Define whether columns are resizable. |
| draggable    | `boolean`  | `true`         | (get/set)<br><br>Define whether columns are draggable so their position can be changed. |
| selectable   | `boolean`  | `true`         | (get/set)<br><br>Define whether rows are selectable. |
| onPrint      | `function` | `null`         | (get/set)<br><br>Function run when a page or the entire table is displayed. The function receives as parameters:<br><br>**• page:** `number`, page number.<br>**• pages:** `number`, total pages.<br>**• total:** `number`, total rows. |
| onClick      | `function` | `null`         | (get/set)<br><br>Function run when a row is clicked. The function receives as parameters:<br><br>**• index:** `number`, row number.<br>**• id:** `string`, row id.<br>**• enabled:** `boolean`, row enable state.<br>**• options:** `object`, row settings options. |
| onDblClick   | `function` | `null`         | (get/set)<br><br>Function run when a row is double-clicked. The function receives as parameters:<br><br>**• index:** `number`, row number.<br>**• id:** `string`, row id.<br>**• enabled:** `boolean`, row enable state.<br>**• options:** `object`, row settings options. |
| onSelect     | `function` | `null`         | (get/set)<br><br>Function run when a row is selected. The function receives as parameters:<br><br>**• index:** `number`, row number.<br>**• id:** `string`, row id.<br>**• enabled:** `boolean`, row enable state.<br>**• options:** `object`, row settings options. |

#### Column Options

| Property  | Type      | Default value        | Description |
| --------- | --------- | -------------------- | ----------- |
| label     | `string`  | `""`                 | Column label. |
| width     | `string`  | `undefined`          | Column width. This can be expressed as a number associated with pixels or in a CSS compatible format. |
| align     | `string`  | `WUITable.align`     | Horizontal alignment mode for column content. This option takes precedence over the `align` property.<br><br>Values:<br>• `"left"`<br>• `"center"`<br>• `"right"` |
| valign    | `string`  | `WUITable.valign`    | Vertical alignment mode for column content. This option takes precedence over the `valign` property.<br><br>Values:<br>• `"top"`<br>• `"middle"`<br>• `"bottom"` |
| sortable  | `boolean` | `WUITable.sortable`  | Define whether rows are sortable by column. This option takes precedence over the `sortable` property. |
| resizable | `boolean` | `WUITable.resizable` | Define whether the column is resizable. This option takes precedence over the `resizable` property. |
| draggable | `boolean` | `WUITable.draggable` | Define whether the column is draggable so its position can be changed. This option takes precedence over the `draggable` property. |

> [!IMPORTANT]
> The `width` row option will not take values ​​greater than the maximum width computed between all the cells belonging to the column.
> In this way, the `resizable` mode will only be able to reach that maximum value in each column.

#### Rows Options

| Property | Type      | Default value     | Description |
| -------- | --------- | ----------------- | ----------- |
| id       | `string`  | `undefined`       | Unique row identifier. |
| align    | `string`  | `WUITable.align`  | Horizontal alignment mode for row content. This option takes precedence over the `align` property.<br><br>Values:<br>• `"left"`<br>• `"center"`<br>• `"right"` |
| valign   | `string`  | `WUITable.valign` | Vertical alignment mode for row content. This option takes precedence over the `valign` property.<br><br>Values:<br>• `"top"`<br>• `"middle"`<br>• `"bottom"` |
| data     | `array`   | `[]`              | Array with the contents of the cells in the row. |
| selected | `boolean` | `false`           | Define whether the row is selected. |
| enabled  | `boolean` | `true`            | Define whether the row is enabled. |

#### Methods

| Method       | Return type   | Description |
| ------------ | ------------- | ----------- |
| getElement   | `HTMLElement` | `getElement()`<br><br>Returns the HTML container element of the object. |
| init         | `void`        | `init()`<br><br>Initializes the object. |
| addColumn    | `void`        | `addColumn(options)`<br><br>Adds a new column settings to the object's column list, as defined in **Column Options**. |
| addRow       | `void`        | `addRow(options)`<br><br>Adds a new row settings to the object's rows list, as defined by **Row Options**. |
| print        | `void`        | `print([page])`<br><br>Arguments:<br>**• page:** `number`, page number. The default value corresponds to the `page` property. If a value other than the `page` property is passed as a parameter and if it is valid, the property will take that value.<br><br>Prints a table view; this view can be a page or the entire table depending on the `paging` property and the `page` parameter. |
| sort         | `void`        | `first(index[, direction])`<br><br>Arguments:<br>**• index:** `number`, rcolumn number.<br>**• direction:** `string`, order direction, this can be: `"asc"` or `"desc"`. The default value is `asc`. |
| selectRow    | `void`        | `selectRow(index[, selected])`<br><br>Arguments:<br>**• index:** `number`, row number.<br>**• selected:** `boolean`, row selection state. The default is `true`.<br><br>Select or unselect a row. |
| enableRow    | `void`        | `enableRow(index[, enabled])`<br><br>Arguments:<br>**• index:** `number`, row number.<br>**• enabled:** `boolean`, row enable state. The default value is `true`.<br><br>Enables or disables a row. |
| firstPage    | `void`        | `firstPage()`<br><br>Displays the view of the first page. |
| lastPage     | `void`        | `lastPage()`<br><br>Displays the view of the last page. |
| prevPage     | `void`        | `prevPage()`<br><br>Displays the view of the previous page if it exists. |
| nextPage     | `void`        | `nextPage()`<br><br>Displays the next page view if one exists. |
| isPrevEnable | `boolean`     | `isPrevEnable()`<br><br>Returns whether a previous page exists. |
| isNextEnable | `boolean`     | `isNextEnable()`<br><br>Returns whether a next page exists. |
| destroy      | `void`        | `destroy()`<br><br>Destroyer. |

#### CSS Variables

| Variable                                       | Description |
| ---------------------------------------------- | ----------- |
| `--wui-table-shadowcolor`                      | Shadow color for the table. |
| `--wui-table-width`                            | Table width. |
| `--wui-table-borderradius`                     | Border radius for the table. |
| `--wui-table-scroll-bgcolor-out`               | Background color of the horizontal scrollbar in normal state. |
| `--wui-table-scroll-bgcolor-over`              | Background color of the horizontal scrollbar in hover/active state. |
| `--wui-table-column-borderwidth`               | Border width for columns. |
| `--wui-table-column-bordercolor-out`           | Border color of columns in normal state. |
| `--wui-table-column-bordercolor-over`          | Border color of columns in hover/focus state. |
| `--wui-table-column-bordercolor-selected`      | Border color of columns in selected state. |
| `--wui-table-column-bordercolor-disabled`      | Border color of columns in disabled state. |
| `--wui-table-column-bgcolor-out`               | Background color of columns in normal state. |
| `--wui-table-column-bgcolor-over`              | Background color of columns in hover/focus state. |
| `--wui-table-column-bgcolor-selected`          | Background color of columns in selected state. |
| `--wui-table-column-bgcolor-disabled`          | Background color of columns in disabled state. |
| `--wui-table-column-textcolor-out`             | Text color of columns in normal state. |
| `--wui-table-column-textcolor-over`            | Text color of columns in hover/focus state. |
| `--wui-table-column-textcolor-selected`        | Text color of columns in selected state. |
| `--wui-table-column-textcolor-disabled`        | Text color of columns in disabled state. |
| `--wui-table-column-sorter-iconsize`           | Icon    size for column sorting. |
| `--wui-table-column-sorter-iconcolor-out`      | Color of the sorting icon in normal state. |
| `--wui-table-column-sorter-iconcolor-over`     | Color of the sorting icon in hover state. |
| `--wui-table-column-sorter-iconcolor-disabled` | Color of the sorting icon in disabled state. |
| `--wui-table-column-sorter-ascicon-src`        | Source for the ascending sort icon<br>(format: `url()` or `none` for the default source). |
| `--wui-table-column-sorter-descicon-src`       | Source for the descending sort icon<br>(format: `url()` or `none` for the default source). |
| `--wui-table-column-resizer-bordercolor-out`   | Border color of the column resizer in normal state. |
| `--wui-table-column-resizer-bordercolor-over`  | Border color of the column resizer in hover state. |
| `--wui-table-column-dragger-bordercolor-over`  | Border color of the column during drag in hover state. |
| `--wui-table-column-dragger-bgcolor-drop`      | Background color of the column when dropping during drag. |
| `--wui-table-row-borderwidth`                  | Border width for rows. |
| `--wui-table-row-bordercolor-out`              | Border color of rows in normal state. |
| `--wui-table-row-bordercolor-over`             | Border color of rows in hover/focus state. |
| `--wui-table-row-bordercolor-selected`         | Border color of rows in selected state. |
| `--wui-table-row-bordercolor-disabled`         | Border color of rows in disabled state. |
| `--wui-table-row-bgcolor-out`                  | Background color of rows in normal state. |
| `--wui-table-row-bgcolor-over`                 | Background color of rows in hover/focus state. |
| `--wui-table-row-bgcolor-selected`             | Background color of rows in selected state. |
| `--wui-table-row-bgcolor-disabled`             | Background color of rows in disabled state. |
| `--wui-table-row-textcolor-out`                | Text color of rows in normal state. |
| `--wui-table-row-textcolor-over`               | Text color of rows in hover/focus state. |
| `--wui-table-row-textcolor-selected`           | Text color of rows in selected state. |
| `--wui-table-row-textcolor-disabled`           | Text color of rows in disabled state. |

#### Implementation

CSS code:

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

header {
	display: flex;
    width: 600px;
	margin: 10px;
	justify-content: flex-end;
    align-items: center;
    gap: 5px;
}

.my-button {
	margin: 0;
	padding: 0px 5px;
}

.my-button.disabled {
	color: #ccc;
}

.my-paging {
	font-size: 16px;
}

nav {
	width: 600px;
	margin: 10px;
}

footer {
	width: 600px;
}

.my-output {
	margin: 10px;
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/table/wui-table-0.5.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/table/wui-table-0.5.css">
<script type="text/javascript" src="/libraries/wui-js/main/table/wui-table-0.5.js"></script>
```

HTML code:

```html
<header>
	<button class="my-button first">&#9198;</button>
	<button class="my-button prev">&#9204;</button>
	<button class="my-button next">&#9205;</button>
	<button class="my-button last">&#9197;</button>
	<div class="my-paging"></div>
</header>

<nav>
	<div class="wui-table my-table"></div>
</nav>
  
<footer>
	<div class="my-output"></div>
</footer>
```

JS code:

```js
const init = () => {
	const firstButton = document.body.querySelector(".my-button.first");
	const prevButton = document.body.querySelector(".my-button.prev");
	const nextButton = document.body.querySelector(".my-button.next");
	const lastButton = document.body.querySelector(".my-button.last");
	const paging = document.body.querySelector(".my-paging");
	const output = document.body.querySelector(".my-output");
	const table = new WUITable({
		selector: ".wui-table.my-table",
		//width: "auto",
		paging: 5,
		resetPaging: true,
		columns: [{
			label: "A Column",
			width: 100
		}, {
			label: "B Column",
			width: 100
		}, {
			label: "C Column",
			width: 100
		}, {
			label: "D Column",
			width: 100
		}],
		rows: [{
			id: "row1", data: ["A 1", "B 1", "C 1", "D 1"]}, {
			id: "row2", data: ["A 2", "B 2", "C 2", "D 2"], enabled: false}, {
			id: "row3", data: ["A 3", "B 3", "C 3", "D 3"]}, {
			id: "row4", data: ["A 4", "B 4", "C 4", "D 4"]}, {
			id: "row5", data: ["A 5", "B 5", "C 5", "D 5"]}, {
			id: "row6", data: ["A 6", "B 6", "C 6", "D 6"]}, {
			id: "row7", data: ["A 7", "B 7", "C 7", "D 7"]}, {
			id: "row8", data: ["A 8", "B 8", "C 8", "D 8"]}, {
			id: "row9", data: ["A 9", "B 9", "C 9", "D 9"]}, {
			id: "row10", data: ["A 10", "B 10", "C 10", "D 10"]}, {
			id: "row11", data: ["A 11", "B 11", "C 11", "D 11"]}, {
			id: "row12", data: ["A 12", "B 12", "C 12", "D 12"]
		}],
		align: "center",
		//valign: "middle",
		//sortable: true,
		//resizable: true,
		//draggable: true,
		//selectable: true,
		onPrint: (page, pages, total) => {
			if (table.hasPrevPage()) {
				firstButton.classList.remove("disabled");
				prevButton.classList.remove("disabled");
			} else {
				firstButton.classList.add("disabled");
				prevButton.classList.add("disabled");
			}
			if (table.hasNextPage()) {
				lastButton.classList.remove("disabled");
				nextButton.classList.remove("disabled");
			} else {
				lastButton.classList.add("disabled");
				nextButton.classList.add("disabled");
			}
			paging.innerHTML = `${page}/${pages} (${total})`;
		},
		onClick: (index, id, enabled, options) => {
			output.textContent = `Click row - index: ${index}, id: ${id}, enabled: ${enabled}`;
		},
		onDblClick: (index, id, enabled, options) => {
			output.textContent = `Double-Click row - index: ${index}, id: ${id}, enabled: ${enabled}`;
		},
		onSelect: (index, id, enabled, options) => {
			output.textContent = `Select row - index: ${index}, id: ${id}, enabled: ${enabled}`;
		}
	});
	table.init();
	firstButton.addEventListener("click", () => {
		if (!firstButton.classList.contains("disabled")) {
			table.firstPage();
		}
	});
	prevButton.addEventListener("click", () => {
		if (!prevButton.classList.contains("disabled")) {
			table.prevPage();
		}
	});
	lastButton.addEventListener("click", () => {
		if (!lastButton.classList.contains("disabled")) {
			table.lastPage();
		}
	});
	nextButton.addEventListener("click", () => {
		if (!nextButton.classList.contains("disabled")) {
			table.nextPage();
		}
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!TIP]
> You can check this functional example in CodeSandbox at the link: [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/table/paging](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/table/paging).

<a name="wui-form"></a>

### WUIForm

Version: `0.5`

Component for the implementation of data forms. This component allows the implementation of HTML data input elements such as `<input>`, `<select>`, and `<textarea>`, and WUI library objects such as `WUISelectpicker`, `WUIDatepicker`, `WUITimepicker`, `WUIColorpicker`, `WUISwitch`, `WUIIntensity`, and `WUIButton`.

#### Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/form/wui-form-0.5.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/form/wui-form-0.5.js) |
| CSS  | [src/wui-js/main/form/wui-form-0.5.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/form/wui-form-0.5.css) |
| CSS  | [src/wui-js/main/form/wui-form-0.5.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/form/wui-form-0.5.root.css) |

#### Constructor

| Type    | Description |
| ------- | ----------- |
| WUIForm | `WUIForm([properties])`<br><br>Arguments:<br>**• properties:** `object` |

#### Properties

| Property    | Type       | Default value | Description |
| ----------- | ---------- | ------------- | ----------- |
| selector    | `string`   | `".wui-form"` | (get/set)<br><br>CSS selector that defines the HTML container element of the form. If more than one element matches the selector, only the first match will be included. |
| submit      | `boolean`  | `true`        | (get/set)<br><br>Defines whether the form should be submitted natively when the submit event occurs. |
| onScrolling | `function` | `null`        | (get/set)<br><br>Function run when the content of the form body is scrolled. |
| onSubmit    | `function` | `null`        | (get/set)<br><br>Function run when the form is submitted. |

#### Methods

| Method      | Return type                                                | Description |
| ----------- | ---------------------------------------------------------- | ----------- |
| getElement  | `HTMLElement`                                              | `getElement()`<br><br>Returns the HTML container element of the form. |
| getForm     | `HTMLFormElement`                                          | `getForm()`<br><br>Returns the HTML `<form>` element. |
| getFormData | `FormData`                                                 | `getFormData()`<br><br>Returns the form data. |
| getHeader   | `HTMLElement`                                              | `getHeader()`<br><br>Returns the HTML element of the form header section. |
| getBody     | `HTMLElement`                                              | `getBody()`<br><br>Returns the HTML element of the form body section. |
| getFooter   | `HTMLElement`                                              | `getFooter()`<br><br>Returns the HTML element of the form footer section. |
| getField    | `HTMLElement`                                              | `getField(name)`<br><br>Arguments:<br>**• name:** `string`<br><br>Returns the HTML element containing the field identified by the input field name. |
| getIcon     | `HTMLElement`                                              | `getIcon(name)`<br><br>Arguments:<br>**• name:** `string`<br><br>Returns the HTML element of the field icon section identified by the input field name. |
| getLabel    | `HTMLLabelElement`                                         | `getLabel(name)`<br><br>Arguments:<br>**• name:** `string`<br><br>Returns the HTML element of the section of the field label identified by the input field name. |
| getInput    | `HTMLInputElement\|HTMLSelectElement\|HTMLTextAreaElement` | `getInput(name)`<br><br>Arguments:<br>**• name:** `string`<br><br>Returns the HTML element of the input field section identified by the input field name. |
| getData     | `HTMLDataElement`                                          | `getData(name)`<br><br>Arguments:<br>**• name:** `string`<br><br>Returns the HTML element of the data section of the field identified by the style class name. |
| getText     | `HTMLElement`                                              | `getText(name)`<br><br>Arguments:<br>**• name:** `string`<br><br>Returns the auxiliary HTML text element identified by the style class name. |
| getValue    | `string`                                                   | `getValue(name)`<br><br>Arguments:<br>**• name:** `string`<br><br>Returns the value of the input field identified by the input field name or the value of the output field identified by the style class name. |
| setType     | `void`                                                     | `setType(name, type)`<br><br>Arguments:<br>**• name:** `string`<br>**• type:** `string`<br><br>Sets the type of the input field identified by the input field name using the `type` attribute of the `<input>` tag. |
| setValue    | `HTMLInputElement\|HTMLSelectElement\|HTMLTextAreaElement` | `setValue(name, value)`<br><br>Arguments:<br>**• name:** `string`<br>**• value:** `string`<br><br>Sets the value of the input field identified by the input field name. |
| setData     | `HTMLDataElement`                                          | `setData(name, value)`<br><br>Arguments:<br>**• name:** `string`<br>**• value:** `mixed`<br><br>Sets the value of the HTML element in the data section of the field identified by the style class name. |
| setText     | `HTMLElement`                                              | `setText(name, value)`<br><br>Arguments:<br>**• name:** `string`<br>**• value:** `string`<br><br>Sets the content of the auxiliary text HTML element identified by the style class name. |
| setEnabled  | `void`                                                     | `setEnabled(name, value)`<br><br>Arguments:<br>**• name:** `string`<br>**• value:** `boolean`<br><br>Enables or disables the field identified by the input field name. |
| reset       | `void`                                                     | `reset()`<br><br>Resets the form values. |
| focus       | `void`                                                     | `focus(name)`<br><br>Arguments:<br>**• name:** `string`<br><br>Sets the focus to the field identified by the input field name. |
| blur        | `void`                                                     | `blur(name)`<br><br>Arguments:<br>**• name:** `string`<br><br>Removes focus from the field identified by the input field name. |
| change      | `void`                                                     | `change(name)`<br><br>Arguments:<br>**• name:** `string`<br><br>Triggers the change event in the field identified by the input field name. |
| autosize    | `void`                                                     | `autosize(name)`<br><br>Arguments:<br>**• name:** `string`<br><br>Automatically adjusts the height of a text field `<textarea>` identified by the input field name. |
| destroy     | `void`                                                     | `destroy()`<br><br>Destroyer. |

#### CSS Variables

| Variable                                         | Description |
| ------------------------------------------------ | ----------- |
| `--wui-form-header-bordercolor`                  | Border color of the form header. |
| `--wui-form-header-titlecolor`                   | Text color of the title in the form header. |
| `--wui-form-body-scroll-bgcolor-out`             | Background color of the body scrollbar in normal state. |
| `--wui-form-body-scroll-bgcolor-over`            | Background color of the body scrollbar in hover/active state. |
| `--wui-form-line-bordercolor`                    | Border color of the form divider lines. |
| `--wui-form-fieldset-bgcolor`                    | Background color of fieldsets. |
| `--wui-form-legend-texttransform`                | Text transformation for fieldset legends. |
| `--wui-form-legend-textcolor`                    | Text color of fieldset legends. |
| `--wui-form-label-textcolor-out`                 | Text color of labels in normal state. |
| `--wui-form-label-textcolor-focus`               | Text color of labels in focus state. |
| `--wui-form-label-textcolor-notempty`            | Text color of labels when the field is not empty. |
| `--wui-form-label-textcolor-disabled`            | Text color of labels in disabled state. |
| `--wui-form-input-height`                        | Height of input fields. |
| `--wui-form-input-borderwidth`                   | Border width of input fields. |
| `--wui-form-input-borderradius`                  | Border radius of input fields. |
| `--wui-form-input-bordercolor-out`               | Border color of input fields in normal state. |
| `--wui-form-input-bordercolor-focus`             | Border color of input fields in focus state. |
| `--wui-form-input-bordercolor-invalid`           | Border color of input fields when invalid. |
| `--wui-form-input-bordercolor-disabled`          | Border color of input fields in disabled state. |
| `--wui-form-input-bgcolor-out`                   | Background color of input fields in normal state. |
| `--wui-form-input-bgcolor-focus`                 | Background color of input fields in focus state. |
| `--wui-form-input-bgcolor-disabled`              | Background color of input fields in disabled state. |
| `--wui-form-input-textcolor-out`                 | Text color of input fields in normal state. |
| `--wui-form-input-textcolor-over`                | Text color of input fields in hover state. |
| `--wui-form-input-textcolor-disabled`            | Text color of input fields in disabled state. |
| `--wui-form-date-opener-iconsize`                | Icon    size for the date picker opener. |
| `--wui-form-date-opener-iconcolor-out`           | Icon    color for the date picker opener in normal state. |
| `--wui-form-date-opener-iconcolor-over`          | Icon    color for the date picker opener in hover state. |
| `--wui-form-date-opener-iconcolor-disabled`      | Icon    color for the date picker opener in disabled state. |
| `--wui-form-date-opener-openicon-src`            | Source for the date picker open icon<br>(format: `url()` or `none` for the default source). |
| `--wui-form-date-opener-closeicon-src`           | Source for the date picker close icon<br>(format: `url()` or `none` for the default source). |
| `--wui-form-time-opener-iconsize`                | Icon    size for the time picker opener. |
| `--wui-form-time-opener-iconcolor-out`           | Icon    color for the time picker opener in normal state. |
| `--wui-form-time-opener-iconcolor-over`          | Icon    color for the time picker opener in hover state. |
| `--wui-form-time-opener-iconcolor-disabled`      | Icon    color for the time picker opener in disabled state. |
| `--wui-form-time-opener-openicon-src`            | Source for the time picker open icon<br>(format: `url()` or `none` for the default source). |
| `--wui-form-time-opener-closeicon-src`           | Source for the time picker close icon<br>(format: `url()` or `none` for the default source). |
| `--wui-form-range-thumb-size`                    | Size of the range control thumb. |
| `--wui-form-range-thumb-bgcolor-out`             | Background color of the range thumb in normal state. |
| `--wui-form-range-thumb-bgcolor-over`            | Background color of the range thumb in hover state. |
| `--wui-form-range-thumb-bgcolor-disabled`        | Background color of the range thumb in disabled state. |
| `--wui-form-range-trackbar-height`               | Height of the range control trackbar. |
| `--wui-form-range-trackbar-borderwidth`          | Border width of the range trackbar. |
| `--wui-form-range-trackbar-bordercolor-out`      | Border color of the range trackbar in normal state. |
| `--wui-form-range-trackbar-bordercolor-focus`    | Border color of the range trackbar in focus state. |
| `--wui-form-range-trackbar-bordercolor-disabled` | Border color of the range trackbar in disabled state. |
| `--wui-form-range-trackbar-bgcolor-out`          | Background color of the range trackbar in normal state. |
| `--wui-form-range-trackbar-bgcolor-focus`        | Background color of the range trackbar in focus state. |
| `--wui-form-range-trackbar-bgcolor-disabled`     | Background color of the range trackbar in disabled state. |
| `--wui-form-select-opener-iconsize`              | Icon    size for the select dropdown opener. |
| `--wui-form-select-opener-iconcolor-out`         | Icon    color for the select opener in normal state. |
| `--wui-form-select-opener-iconcolor-over`        | Icon    color for the select opener in hover state. |
| `--wui-form-select-opener-iconcolor-disabled`    | Icon    color for the select opener in disabled state. |
| `--wui-form-select-opener-openicon-src`          | Source for the select open icon<br>(format: `url()` or `none` for the default source). |
| `--wui-form-select-opener-closeicon-src`         | Source for the select close icon<br>(format: `url()` or `none` for the default source). |
| `--wui-form-data-textcolor-out`                  | Text color of data elements in normal state. |
| `--wui-form-data-textcolor-disabled`             | Text color of data elements in disabled state. |
| `--wui-form-progress-borderwidth`                | Border width of progress bars. |
| `--wui-form-progress-bordercolor`                | Border color of progress bars. |
| `--wui-form-progress-valuecolor`                 | Color of the progress bar value/fill. |
| `--wui-form-progress-bgcolor`                    | Background color of progress bars. |
| `--wui-form-button-minwidth`                     | Minimum width for form action buttons. |
| `--wui-form-text-textcolor-out`                  | Text color of auxiliary text in normal state. |
| `--wui-form-text-textcolor-disabled`             | Text color of auxiliary text in disabled state. |
| `--wui-form-text-linkcolor-out`                  | Color of links in auxiliary text in normal state. |
| `--wui-form-text-linkcolor-highlight`            | Color of links in auxiliary text when highlighted. |
| `--wui-form-message-shadowcolor`                 | Shadow color of form messages. |
| `--wui-form-message-bgcolor`                     | Background color of form messages. |
| `--wui-form-message-textcolor`                   | Text color of form messages. |
| `--wui-form-message-highlight-bgcolor`           | Highlighted background color of form messages. |
| `--wui-form-message-highlight-textcolor`         | Highlighted text color of form messages. |
| `--wui-form-mobile-field-bordercolor`            | Border color of fields in mobile mode. |
| `--wui-form-mobile-label-textcolor`              | Text color of labels in mobile mode. |
| `--wui-form-mobile-input-height`                 | Height of input fields in mobile mode. |
| `--wui-form-mobile-input-bgcolor`                | Background color of input fields in mobile mode. |
| `--wui-form-mobile-input-borderradius`           | Border radius of input fields in mobile mode. |

#### Implementation

CSS code:

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

nav {
	max-width: 400px;
	height: 400px;
}
```

HTML Head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.3.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.3.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/form/wui-form-0.5.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/form/wui-form-0.5.css">
<script type="text/javascript" src="/libraries/wui-js/main/form/wui-form-0.5.js"></script>
```

HTML code:

```html
<nav>
	<form name="myForm" class="wui-form my-form line">
		<input type="hidden" name="myHidden">
		<div class="header">Header</div>
		<div class="body scroll">
			<fieldset>
				<legend>Fieldset</legend>
				<div class="field icon-left">
					<div class="icon wui-icon text-left-line"></div>
					<label>Text</label>
					<input type="text" name="text" value="">
				</div>
				<div class="field icon-left">
					<div class="icon wui-icon list-check-line"></div>
					<label>Select</label>
					<select name="select">
						<option value=""></option>
						<option value="value1">value 1</option>
						<option value="value2">value 2</option>
						<option value="value3">value 3</option>
					</select>
				</div>
				<div class="field icon-left">
					<div class="icon wui-icon calendar-line"></div>
					<label>Date</label>
					<input type="date" name="date" value="">
				</div>
				<div class="field icon-left">
					<div class="icon wui-icon time-line"></div>
					<label>Time</label>
					<input type="time" name="time" value="">
				</div>
				<div class="field icon-left autosize">
					<div class="icon wui-icon text-paragraph-line"></div>
					<label for="wuiTextarea">Text area</label>
					<textarea name="textarea"></textarea>
				</div>
				<div class="field icon-left inline noborder">
					<div class="icon wui-icon palette-line"></div>
					<label>Color</label>
					<input type="color" name="color" value="">
				</div>
				<div class="field icon-left noborder">
					<div class="icon wui-icon thermometer-half-line"></div>
					<label>Range</label>
					<input type="range" name="range" value="">
				</div>
				<div class="field icon-left inline noborder">
					<div class="icon wui-icon check-line"></div>
					<label for="checkbox" class="pointer">Checkbox</label>
					<input id="checkbox" type="checkbox" name="checkbox" value="1">
				</div>
				<div class="field icon-left">
					<div class="icon wui-icon chat-left-text-line"></div>
					<label>Data</label>
					<data class="name" value="data">data</data>
				</div>
				<div class="text my-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</div>
				<div class="message highlight center">
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</div>
			</fieldset>
		</div>
		<div class="footer">
			<button class="wui-button cancel">cancel</button>
			<button class="wui-button submit">submit</button>
		</div>
	</form>
</nav>
```

JS Code:

```js
const init = () => {
	const form = new WUIForm({
		selector: ".wui-form.my-form",
		submit: false,
		onScrolling: (top) => { },
		onSubmit: () => { }
	});
	form.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!TIP]
> You can check this functional example in CodeSandbox at the link: [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/form/linestyle](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/form/linestyle).

<a name="wui-format"></a>

### WUIFormat

Version: `0.3`

Utilities for management and validation `string`, `number` and `Date` data formats.

#### Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/format/wui-format-0.3.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/format/wui-format-0.3.js) |

#### Static Methods

| Method             | Return type  | Description |
| ------------------ | ------------ | ----------- |
| numberToString     | `string`     | `numberToString(number[, options])`<br><br>Arguments:<br>**• number:** `number`, number to format.<br>**• options:** `Object` *optional*, opciones de formateo.<br><br>Formats a number to string. |
| numberToSizeString | `string`     | `numberToSizeString(number)`<br><br>Arguments:<br>**• number:** `number`, number to format.<br><br>Formats a number to file size (B, KB, MB, TB). |
| numberToModule11   | `string`     | `numberToModule11(number, codeTen)`<br><br>Arguments:<br>**• number:** `string`, number to validate (including check digit).<br>**• codeTen:** `string`, character to replace the check digit if it is 10.<br><br>Calculates the module 11 check digit. |
| numberToModule23   | `string`     | `numberToModule23(number, map)`<br><br>Arguments:<br>**• number:** `string`, number to validate.<br>**• map:** `string`, mapping string.<br><br>Calculates the module 23 check digit. |
| dateToString       | `string`     | `dateToString(date[, format[, options]])`<br><br>Arguments:<br>**• date:** `Date`, date to format.<br>**• format:** `string` *optional*, expected date format (default value `"yyyy-mm-dd"`).<br>**• options:** `Object` *optional*, options of formatting.<br><br>Formats a date to string using `Date.prototype.wuiDefaults`. |
| validateDate       | `boolean`    | `validateDate(date[, format])`<br><br>Arguments:<br>**• date:** `string`, date to validate.<br>**• format:** `string` *optional*, expected date format (default value `"yyyy-mm-dd"`).<br><br>Validates a date in string format. |
| validateEmail      | `boolean`    | `validateEmail(email)`<br><br>Arguments:<br>**• email:** `string`, email address.<br><br>Validates an email address. |
| validateEmailList  | `boolean`    | `validateEmailList(list[, separator])`<br><br>Arguments:<br>**• list:** `string`, list of email addresses.<br>**• separator:** `string` *optional*, list separator character(s).<br><br>Validates a list of email addresses. |
| validatePhone      | `boolean`    | `validatePhone(phone[, length])`<br><br>Arguments:<br>**• phone:** `string`, phone number.<br>**• length:** `number` *optional*, length of the telephone number.<br><br>Validates a phone number. |
| validatePhoneList  | `boolean`    | `validatePhoneList(list[, length[, separator]])`<br><br>Arguments:<br>**• list:** `string`, list of number phones.<br>**• length:** `number` *optional*, length of the telephone number.<br>**• separator:** `string` *optional*, list separator character(s).<br><br>Validates a list of phone numbers. |
| validateURL        | `boolean`    | `validateURL(url)`<br><br>Arguments:<br>**• url:** `string`, URL address.<br><br>Validates a URL address. |
| validateURLList    | `boolean`    | `validateURLList(list[, separator])`<br><br>Arguments:<br>**• list:** `string`, list of URL addresses.<br>**• separator:** `string` *optional*, list separator character(s).<br><br>Validates a list of URLs. |
| validateIPv4       | `boolean`    | `validateIPv4(ipv4)`<br><br>Arguments:<br>**• ipv4:** `string`, IPv4 address.<br><br>Validates an IPv4 address. |
| validateModule11   | `boolean`    | `validateModule11(value, codeTen)`<br><br>Arguments:<br>**• value:** `string`, string to validate (including check digit).<br>**• codeTen:** `string`, character to replace the check digit if it is 10.<br><br>Validate a string including the modulo 11 check digit. |
| validateModule23   | `boolean`    | `validateModule23(value, map)`<br><br>Arguments:<br>**• value:** `string`, string to validate (including check digit).<br>**• map:** `string`, mapping character string.<br><br>Validate a string including the modulo 23 check digit. |
| validateNID        | `boolean`    | `validateNID(nid, countryCode)`<br><br>Arguments:<br>**• nid:** `string`, value to validate.<br>**• countryCode:** `string`, country code in ISO 3166-1 alpha-2 format with support for CL, PY and ES.<br><br>Validates a national identity document. |
| loadDate           | `Date`       | `loadDate(date[, format[, options]])`<br><br>Arguments:<br>**• date:** `string`, date to load.<br>**• format:** `string` *optional*, date format.<br>**• options:** `object` *optional*, date options, according to the definition of **Default values** `<Date.prototype.wuiDefaults>`.<br><br>Load a date from a string. |

#### Number Prototype Extensions `Number.prototype`

##### Defaults `Number.prototype.wuiDefaults`

| Property           | Type             | Default value | Description |
| ------------------ | ---------------- | ------------- | ----------- |
| numberPrefix       | `string`         | `""`          | Return string prefix used by the `WUIFormat.numberToString()` and `Number.prototype.wuiToString()` methods. |
| numberSufix        | `string`         | `""`          | Return string suffix used by the `WUIFormat.numberToString()` and `Number.prototype.wuiToString()` methods. |
| thousandsSeparator | `string`         | `","`         | Thousands separator of the return string used by the `WUIFormat.numberToString()` and `Number.prototype.wuiToString()` methods. |
| decimalLength      | `number\|string` | `"auto"`      | Length of the decimal portion of the return string used by the `WUIFormat.numberToString()` and `Number.prototype.wuiToString()` methods. |
| decimalSeparator   | `string`         | `"."`         | Decimal separator of the return string used by the `WUIFormat.numberToString()` and `Number.prototype.wuiToString()` methods. |

##### Methods

| Method          | Return type  | Description |
| --------------- | ------------ | ----------- |
| wuiToString     | `string`     | `wuiToString([options])`<br><br>Arguments:<br>**• options:** `Object` *optional*, opciones de formateo.<br><br>Formats a number to string. |
| wuiToSizeString | `string`     | `wuiToSizeString()`<br><br>Formats a number to file size (B, KB, MB, TB). |
| wuiToModule11   | `string`     | `wuiToModule11(codeTen)`<br><br>Arguments:<br>**• codeTen:** `string`, character to replace the check digit if it is 10.<br><br>Calculates the module 11 check digit. |
| wuiToModule23   | `string`     | `wuiToModule23(map)`<br><br>Arguments:<br>**• map:** `string`, mapping string.<br><br>Calculates the module 23 check digit. |

#### String Prototype Extensions `String.prototype`

##### Defaults `String.prototype.wuiDefaults`

| Property           | Type     | Default value | Description |
| ------------------ | -------- | ------------- | ----------- |
| emailListSeparator | `string` | `","`         | Separator consisting of one or more characters used for the validation of mailing address lists. |
| phoneLength        | `number` | `10`          | Length required for validation of a telephone number. |
| phoneListSeparator | `string` | `","`         | Separator consisting of one or more characters used for the validation of telephone number lists. |
| urlListSeparator   | `string` | `","`         | Separator consisting of one or more characters used for the validation of URL address lists. |

##### Methods

| Method               | Return type  | Description |
| -------------------- | ------------ | ----------- |
| wuiValidateDate      | `boolean`    | `wuiValidateDate([format])`<br><br>Arguments:<br>**• format:** `string` *optional*, expected date format (default value `"yyyy-mm-dd"`).<br><br>Validates a date in string format. |
| wuiValidateEmail     | `boolean`    | `wuiValidateEmail()`<br><br>Validates an email address. |
| wuiValidateEmailList | `boolean`    | `wuiValidateEmailList([separator])`<br><br>Arguments:<br>**• separator:** `string` *optional*, list separator character(s).<br><br>Validates a list of email addresses. |
| wuiValidatePhone     | `boolean`    | `wuiValidatePhone([length])`<br><br>Arguments:<br>**• length:** `number` *optional*, length of the telephone number.<br><br>Validates a phone number. |
| wuiValidatePhoneList | `boolean`    | `wuiValidatePhoneList([length, separator])`<br><br>Arguments:<br>**• length:** `number` *optional*, length of the telephone number.<br>**• separator:** `string` *optional*, list separator character(s).<br><br>Validates a list of phone numbers. |
| wuiValidateURL       | `boolean`    | `wuiValidateURL()`<br><br>Validates a URL address. |
| wuiValidateURLList   | `boolean`    | `wuiValidateURLList([separator])`<br><br>Arguments:<br>**• separator:** `string` *optional*, list separator character(s).<br><br>Validates a list of URLs. |
| wuiValidateIPv4      | `boolean`    | `wuiValidateIPv4()`<br><br>Validates an IPv4 address. |
| wuiValidateModule11  | `boolean`    | `wuiValidateModule11(codeTen)`<br><br>Arguments:<br>**• codeTen:** `string`, character to replace the check digit if it is 10.<br><br>Validate a string including the modulo 11 check digit. |
| wuiValidateModule23  | `boolean`    | `wuiValidateModule23(map)`<br><br>Arguments:<br>**• map:** `string`, mapping character string.<br><br>Validate a string including the modulo 23 check digit. |
| wuiValidateNID       | `boolean`    | `wuiValidateNID(countryCode)`<br><br>Arguments:<br>**• countryCode:** `string`, country code in ISO 3166-1 alpha-2 format with support for CL, PY and ES.<br><br>Validates a national identity document. |

#### Date Prototype Extensions `Date.prototype`

##### Defaults `Date.prototype.wuiDefaults`

| Property         | Type            | Default value           | Description |
| ---------------- | --------------- | ----------------------- | ----------- |
| utc              | `boolean`       | `false`                 | Indicate whether Coordinated Universal Time (UTC) should be used. |
| locales          | `string`        | `"en-US"`               | Locale code in `<ISO 639-1>-<ISO 3166-1 alpha-2>` format. For example: `es-CL`, `en-US`, `fr-FR`, etc. |
| dateFormat       | `string`        | `"yyyy-mm-dd"`          | Format of the date, as defined by **Date/time format parts**. |
| timeFormat       | `string`        | `"hh:MM:ss"`            | Format of the time, as defined by **Date/time format parts**. |
| datetimeFormat   | `string`        | `"yyyy-mm-dd hh:MM:ss"` | Format of the date and time, as defined by **Date/time format parts**. |
| formatDelimiters | `Array<string>` | `["[", "]"]`            | No text characters used to delimit fixed text in the format. These are removed when converting to a date object to string. |

##### Date/time format parts

| Part | Description |
| ---- | ----------- |
| yyyy | Year in 4 digits format. |
| yy   | Year in 2 digits format. |
| mmmm | Month in full name format. |
| mmm  | Month in 3 initials format. |
| mm   | Month in 2 digits format. |
| m    | Month in integer number format. |
| dd   | Day of the month in 2 digits format. |
| d    | Day of the month in integer number format. |
| w    | Day of the week in integer number format, where Sunday is `0`. |
| DDDD | Day of the week in full name format. |
| DDD  | Day of the week in 3 initials format. |
| DD   | Day of the week in 2 initials format. |
| D    | Day of the week in integer number format. |
| hh   | Hour in 2 digits format. |
| h    | Hour in integer number format. |
| MM   | Minute in 2 digits format. |
| M    | Minute in integer number format. |
| ss   | Second in 2 digits format. |
| s    | Second in integer number format. |
| SSS  | Millisecond in 3 digits format. |
| S    | Millisecond in integer number format. |
| zzz  | Time zone offset in "±hh:MM" format. |
| zz   | Time zone offset in "±hhMM" format. |
| z    | Time zone offset in integer number format measured in minutes. |

##### Predefined load formats

| Format                | Value |
| ---------------------    | ----- |
| `"datetime\|default"` | `Date.prototype.wuiDefaults.datetimeFormat` |
| `"numeric"`           | `"yyyymmddhhMMss"` |
| `"standard"`          | `"yyyy-mm-dd hh:MM:ss"` |
| `"longtime"`          | `"yyyy-mm-dd[T]hh:MM:ss"` |

##### Predefined output formats

| Format                       | Value |
| ----------------------------    | ----- |
| `"datetime\|default"`        | `Date.prototype.wuiDefaults.datetimeFormat` |
| `"date"`                     | `Date.prototype.wuiDefaults.dateFormat` |
| `"time"`                     | `Date.prototype.wuiDefaults.timeFormat` |
| `"numeric"`                  | `"yyyymmddhhMMss"` |
| `"standard"`                 | `"yyyy-mm-dd hh:MM:ss"` |
| `"longtime"`                 | `"yyyy-mm-dd[T]hh:MM:ss"` |
| `"rfc3339\|atom"`            | `"yyyy-mm-dd[T]hh:MM:ss.SSS[Z]"` |
| `"rfc1123\|rfc2616\|cookie"` | `"DDD, dd-mmm-yyyy hh:MM:ss GMT"` |
| `"rfc3501"`                  | `"dd-mmm-yyyy hh:MM:ss tz"` |

##### Methods

| Method       | Return type | Description |
| ------------ | ----------- | ----------- |
| wuiLoad      | `Date`      | `wuiLoad(value[, format[, options]])`<br><br>Arguments:<br>**• value:** `string`, date to load.<br>**• format:** `string` *optional*, date format (default value `"default"`).<br>**• options:** `object` *optional*, date options, according to the definition of **Default values** `<Date.prototype.wuiDefaults>`.<br><br>Load a date from a string. |
| wuiToString  | `string`    | `wuiToString([format[, options]])`<br><br>Arguments:<br>**• format:** `string` *optional*, date format (default value `"default"`).<br>**• options:** `object` *optional*, date options, according to the definition of **Default values** `<Date.prototype.wuiDefaults>`.<br><br>Converts a date to a string. |
| wuiDayName   | `string`    | `wuiDayName([day])`<br><br>Arguments:<br>**• day:** `number` *optional*, day of the week (default value `this.getDay()`).<br><br>Returns the name of the day of the week. |
| wuiMonthName | `string`    | `wuiMonthName([month])`<br><br>Arguments:<br>**• month:** `number` *optional*, month (default value `this.getMonth()`).<br><br>Returns the name of the month. |

#### Implementation

CSS Code:

```css
.my-output {
	position: relative;
	margin: 10px;
	font-family: monospace;
}
```

HTML head:

```html
<script type="text/javascript" src="/libraries/wui-js/main/format/wui-format-0.3.js"></script>
```

HTML code:

```html
<h2>Number methods</h2>
<div class="my-output numberFormatting"></div>
<div class="my-output numberSizeFormatting"></div>
<div class="my-output numberModule11Formatting"></div>
<div class="my-output numberModule23Formatting"></div>

<h2>String methods</h2>
<div class="my-output stringDateValidation"></div>
<div class="my-output stringEmailValidation"></div>
<div class="my-output stringURLValidation"></div>
<div class="my-output stringIPv4Validation"></div>
<div class="my-output stringModule11Validation"></div>
<div class="my-output stringModule23Validation"></div>
<div class="my-output stringNIDValidation"></div>

<h2>Date methods</h2>
<div class="my-output dateLocalFormatting"></div>
<div class="my-output dateUTCFormatting"></div>
```

JS code:

```js
// Number methods

const numberSetDefaults = () => {
	//Number.prototype.wuiDefaults.numberPrefix = "";
	//Number.prototype.wuiDefaults.numberSufix = "";
	//Number.prototype.wuiDefaults.thousandsSeparator = ",";
	Number.prototype.wuiDefaults.decimalLength = 2;
	//Number.prototype.wuiDefaults.decimalSeparator = ".";
}

const numberFormatting = () => {
	const inputValue = 1234.567;
	const output = document.body.querySelector(".my-output.numberFormatting");
	const outputValue = inputValue.wuiToString({ numberPrefix: "$ " });
	output.innerHTML = "<pre>"
		+ `<b>Numeric formatting</b>\n`
		+ `input value  : ${inputValue}\n`
		+ `output value : ${outputValue}\n`
		+ "</pre>";
}

const numberSizeFormatting = () => {
	const inputValue = 1234.567;
	const output = document.body.querySelector(".my-output.numberSizeFormatting");
	const outputValue = inputValue.wuiToSizeString({});
	output.innerHTML = "<pre>"
		+ `<b>Numeric digital size formatting</b>\n`
		+ `input value  : ${inputValue}\n`
		+ `output value : ${outputValue}\n`
		+ "</pre>";
}

const numberModule11Formatting = () => {
	const inputValue = 1234567;
	const inputCode10 = "K";
	const output = document.body.querySelector(".my-output.numberModule11Formatting");
	const outputValue = inputValue.wuiToModule11(inputCode10);
	output.innerHTML = "<pre>"
		+ `<b>Numeric module 11 formatting</b>\n`
		+ `input value    : ${inputValue}\n`
		+ `input code 10  : ${inputCode10}\n`
		+ `output value   : ${outputValue}\n`
		+ "</pre>";
}

const numberModule23Formatting = () => {
	const inputValue = 1234567;
	const inputMap = "TRWAGMYFPDXBNJZSQVHLCKET";
	const output = document.body.querySelector(".my-output.numberModule23Formatting");
	const outputValue = inputValue.wuiToModule23(inputMap);
	output.innerHTML = "<pre>"
		+ `<b>Numeric module 23 formatting</b>\n`
		+ `input value    : ${inputValue}\n`
		+ `input map      : ${inputMap}\n`
		+ `output value   : ${outputValue}\n`
		+ "</pre>";
}

// String methods

const stringDateValidation = () => {
	const inputFormat = "yyyy-mm-dd";
	const inputValue = "2023-12-31";
	const output = document.body.querySelector(".my-output.stringDateValidation");
	const outputValid = inputValue.wuiValidateDate(inputFormat);
	output.innerHTML = "<pre>"
		+ `<b>Date validation</b>\n`
		+ `input format : ${inputFormat}\n`
		+ `input value  : ${inputValue}\n`
		+ `output valid : ${outputValid}\n`
		+ "</pre>";
}

const stringEmailValidation = () => {
	const inputValue = "test@example.com";
	const output = document.body.querySelector(".my-output.stringEmailValidation");
	const outputValid = inputValue.wuiValidateEmail();
	output.innerHTML = "<pre>"
		+ `<b>Email validation</b>\n`
		+ `input value  : ${inputValue}\n`
		+ `output valid : ${outputValid}\n`
		+ "</pre>";
}

const stringURLValidation = () => {
	const inputValue = "https://www.example.com";
	const output = document.body.querySelector(".my-output.stringURLValidation");
	const outputValid = inputValue.wuiValidateURL();
	output.innerHTML = "<pre>"
		+ `<b>URL validation</b>\n`
		+ `input value  : ${inputValue}\n`
		+ `output valid : ${outputValid}\n`
		+ "</pre>";
}

const stringIPv4Validation = () => {
	const inputValue = "127.0.0.1";
	const output = document.body.querySelector(".my-output.stringIPv4Validation");
	const outputValid = inputValue.wuiValidateIPv4();
	output.innerHTML = "<pre>"
		+ `<b>IPv4 validation</b>\n`
		+ `input value  : ${inputValue}\n`
		+ `output valid : ${outputValid}\n`
		+ "</pre>";
}

const stringModule11Validation = () => {
	const inputValue = "1234567-4";
	const inputCode10 = "K";
	const output = document.body.querySelector(".my-output.stringModule11Validation");
	const outputValid = inputValue.wuiValidateModule11(inputCode10);
	output.innerHTML = "<pre>"
		+ `<b>Module 11 validation</b>\n`
		+ `input value   : ${inputValue}\n`
		+ `input code 10 : ${inputCode10}\n`
		+ `output valid  : ${outputValid}\n`
		+ "</pre>";
}

const stringModule23Validation = () => {
	const inputValue = "1234567-L";
	const inputMap = "TRWAGMYFPDXBNJZSQVHLCKET";
	const output = document.body.querySelector(".my-output.stringModule23Validation");
	const outputValid = inputValue.wuiValidateModule23(inputMap);
	output.innerHTML = "<pre>"
		+ `<b>Module 23 validation</b>\n`
		+ `input value  : ${inputValue}\n`
		+ `input map    : ${inputMap}\n`
		+ `output valid : ${outputValid}\n`
		+ "</pre>";
}

const stringNIDValidation = () => {
	const inputValue = "1.234.567-4";
	const inputCountryCode = "CL";
	const output = document.body.querySelector(".my-output.stringNIDValidation");
	const outputValid = inputValue.wuiValidateNID(inputCountryCode);
	output.innerHTML = "<pre>"
		+ `<b>NID validation</b>\n`
		+ `input value        : ${inputValue}\n`
		+ `input country code : ${inputCountryCode}\n`
		+ `output valid       : ${outputValid}\n`
		+ "</pre>";
}

// Date methods

const dateSetDefaults = () => {
	//Date.prototype.wuiDefaults.utc = false;
	//Date.prototype.wuiDefaults.locales = "en-US";
	//Date.prototype.wuiDefaults.dateFormat = "yyyy-mm-dd";
	//Date.prototype.wuiDefaults.timeFormat = "hh:MM:ss";
	//Date.prototype.wuiDefaults.datetimeFormat = "yyyy-mm-dd hh:MM:ss";
	//Date.prototype.wuiDefaults.formatDelimiters = ["[", "]"];
}

const dateLocalFormatting = () => {
	const inputFormat = "yyyy-mm-dd";
	const inputValue = "2023-12-31";
	const date = new Date().wuiLoad(inputValue, inputFormat);
	const output = document.body.querySelector(".my-output.dateLocalFormatting");
	const outputFormat = "dd/mm/yyyy hh:MM [GMT]zz";
	const outputValue = date.wuiToString(outputFormat, { utc: false });
	output.innerHTML = "<pre>"
		+ `<b>Local date formatting</b>\n`
		+ `input format  : ${inputFormat}\n`
		+ `input value   : ${inputValue}\n`
		+ `local date    : ${date}\n`
		+ `output format : ${outputFormat}\n`
		+ `output value  : ${outputValue}\n`
		+ "</pre>";
}

const dateUTCFormatting = () => {
	const inputFormat = "yyyy-mm-dd";
	const inputValue = "2023-12-31";
	const date = new Date().wuiLoad(inputValue, inputFormat);
	const output = document.body.querySelector(".my-output.dateUTCFormatting");
	const outputFormat = "dd/mm/yyyy hh:MM [GMT]zz";
	const outputValue = date.wuiToString(outputFormat, { utc: true });
	output.innerHTML = "<pre>"
		+ `<b>UTC date formatting</b>\n`
		+ `input format  : ${inputFormat}\n`
		+ `input value   : ${inputValue}\n`
		+ `utc date      : ${date}\n`
		+ `output format : ${outputFormat}\n`
		+ `output value  : ${outputValue}\n`
		+ "</pre>";
}

// Init

window.addEventListener("DOMContentLoaded", () => {

	numberSetDefaults();
	numberFormatting();
	numberSizeFormatting();
	numberModule11Formatting();

	stringDateValidation();
	stringEmailValidation();
	stringURLValidation();
	stringIPv4Validation();
	stringModule11Validation();
	stringModule23Validation();
	stringNIDValidation();

	dateSetDefaults();
	dateLocalFormatting();
	dateUTCFormatting();

});
```

> [!TIP]
> You can check this functional example in CodeSandbox at the link: [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/format/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/format/basic).

<a name="wui-selectpicker"></a>

### WUISelectpicker

Version: `0.5`

Component for the implementation of multiple or exclusive selection list data inputs based on HTML element `<select>`.

#### Sources

| Type | File |
|:----:| ---- |
| CSS  | [src/wui-js/main/selectpicker/wui-selectpicker-0.5.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/selectpicker/wui-selectpicker-0.5.css) |
| CSS  | [src/wui-js/main/selectpicker/wui-selectpicker-0.5.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/selectpicker/wui-selectpicker-0.5.root.css) |
| JS   | [src/wui-js/main/selectpicker/wui-selectpicker-0.5.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/selectpicker/wui-selectpicker-0.5.js) |

#### Constructor

| Type            | Description |
| --------------- | ----------- |
| WUISelectpicker | `WUISelectpicker([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property       | Type       | Default value         | Description |
| -------------- | ---------- | --------------------- | ----------- |
| selector       | `string`   | `".wui-selectpicker"` | (get/set)<br><br>CSS selector that defines the HTML container element of the object. If more than one element matches the selector, only the first match will be included. |
| value          | `string`   | `""`                  | (get/set)<br><br>Value of the initial options selection. |
| text           | `string`   | `""`                  | (get)<br><br>Text of the initial options selection. |
| lang           | `string`   | `"en"`                | (get/set)<br><br>Component language.<br><br>Values:<br>• `"de"`, German.<br>• `"en"`, English.<br>• `"es"`, Spanish. |
| texts          | `object`   | `{}`                  | (get/set)<br><br>Custom texts for component buttons and messages. |
| openDirection  | `string`   | `"down"`              | (get/set)<br><br>Opening direction of the selector.<br><br>Values:<br>• `"up"`, upwards.<br>• `"down"`, downwards. |
| multiple       | `boolean`  | `false`               | (get/set)<br><br>Defines if the selector allows multiple selection. |
| separatorValue | `string`   | `","`                 | (get/set)<br><br>Character separator of values ​​in case of multiple selection. |
| separatorText  | `string`   | `", "`                | (get/set)<br><br>Character separator of texts in case of multiple selection. |
| filterable     | `boolean`  | `true`                | (get/set)<br><br>Defines if the selector allows filtering options by text input. |
| enabled        | `boolean`  | `true`                | (get/set)<br><br>Defines whether the data input is enabled. |
| onOpen         | `function` | `null`                | (get/set)<br><br>Function run when the selector is opened. The function receives the current selected value as a parameter. |
| onChange       | `function` | `null`                | (get/set)<br><br>Function run when the selected value changes. The function receives the new selected value as a parameter. |

#### Menu Options

| Property  | Type      | Default value | Description |
| --------- | --------- | ------------- | ----------- |
| icon      | `string`  | `undefined`   | CSS classes of the option icon. |
| text      | `string`  | `""`          | Option text. |
| value     | `string`  | `""`          | Option value. |
| selected  | `boolean` | `false`       | Option selection state. |

#### Methods

| Method          | Return type          | Description |
| --------------- | -------------------- | ----------- |
| getElement      | `HTMLElement`        | `getElement()`<br><br>Returns the HTML container element of the object. |
| getBox          | `HTMLElement`        | `getBox()`<br><br>Returns the HTML element of the dropdown box. |
| getViewElements | `Array<HTMLElement>` | `getViewElements()`<br><br>Returns an array of the HTML elements that are part of the value display. |
| getInput        | `HTMLElement`        | `getInput()`<br><br>Returns the HTML element associated with the base data input `<select>`. |
| init            | `void`               | `init()`<br><br>Initializes the object. |
| addOption       | `void`               | `addOption(option)`<br><br>Arguments:<br>**• option:** `object`.<br><br>Add an option to the list, as defined by **Menu Options**. |
| loadOptions     | `void`               | `loadOptions(options)`<br><br>Arguments:<br>**• options:** `array`.<br><br>Loads an array of options, clearing previously existing ones. |
| clearOptions    | `void`               | `clearOptions()`<br><br>Removes all options from the list. |
| open            | `void`               | `open()`<br><br>Opens the selector. |
| close           | `void`               | `close()`<br><br>Closes the selector. |
| toggle          | `void`               | `toggle()`<br><br>Toggles the open state of the selector. |
| cancel          | `void`               | `cancel()`<br><br>Cancels the current selection and reverts to the previous value, closing the selector. |
| accept          | `void`               | `accept()`<br><br>Accepts the current selection and closes the selector. |
| isOpen          | `boolean`            | `isOpen()`<br><br>Returns whether the selector is open. |
| isEmpty         | `boolean`            | `isEmpty()`<br><br>Returns whether the selector has no options selected. |
| isValid         | `boolean`            | `isValid()`<br><br>Returns if the entered value corresponds to a valid option. |
| destroy         | `void`               | `destroy()`<br><br>Destroyer. |

#### CSS Variables

| Variable                                            | Description |
| --------------------------------------------------- | ----------- |
| `--wui-selectpicker-borderradius`                   | Border radius of the selectpicker container. |
| `--wui-selectpicker-borderwidth`                    | Border width of the selectpicker container. |
| `--wui-selectpicker-bordercolor`                    | Border color of the selectpicker container. |
| `--wui-selectpicker-bgcolor`                        | Background color of the selectpicker container. |
| `--wui-selectpicker-opener-iconsize`                | Icon    size of the selectpicker opener. |
| `--wui-selectpicker-opener-iconcolor-out`           | Icon    color of the selectpicker opener in normal state. |
| `--wui-selectpicker-opener-iconcolor-over`          | Icon    color of the selectpicker opener in hover state. |
| `--wui-selectpicker-opener-iconcolor-disabled`      | Icon    color of the selectpicker opener in disabled state. |
| `--wui-selectpicker-opener-openicon-src`            | Image source of the selectpicker open icon<br>(format: `url()` or `none` for the default source). |
| `--wui-selectpicker-opener-closeicon-src`           | Image source of the selectpicker close icon<br>(format: `url()` or `none` for the default source). |
| `--wui-selectpicker-viewinput-paddingleft`          | Left padding of the view input field. |
| `--wui-selectpicker-viewinput-textcolor-out`        | Text color of the view input field in normal state. |
| `--wui-selectpicker-viewinput-textcolor-over`       | Text color of the view input field in hover state. |
| `--wui-selectpicker-viewinput-textcolor-disabled`   | Text color of the view input field in disabled state. |
| `--wui-selectpicker-box-shadowcolor`                | Shadow color of the dropdown box. |
| `--wui-selectpicker-box-borderradius`               | Border radius of the dropdown box. |
| `--wui-selectpicker-box-bordercolor`                | Border color of the dropdown box. |
| `--wui-selectpicker-box-bgcolor`                    | Background color of the dropdown box. |
| `--wui-selectpicker-box-scroll-bgcolor-out`         | Scrollbar color of the dropdown box in normal state. |
| `--wui-selectpicker-box-scroll-bgcolor-over`        | Scrollbar color of the dropdown box in hover state. |
| `--wui-selectpicker-box-option-borderradius`        | Border radius of the dropdown box options. |
| `--wui-selectpicker-box-option-bordercolor-out`     | Border color of the dropdown box options in normal state. |
| `--wui-selectpicker-box-option-bordercolor-over`    | Border color of the dropdown box options in hover state. |
| `--wui-selectpicker-box-option-bgcolor-out`         | Background color of the dropdown box options in normal state. |
| `--wui-selectpicker-box-option-bgcolor-over`        | Background color of the dropdown box options in hover state. |
| `--wui-selectpicker-box-option-iconsize`            | Icon    size of the dropdown box options. |
| `--wui-selectpicker-box-option-iconcolor-out`       | Icon    color of the dropdown box options in normal state. |
| `--wui-selectpicker-box-option-iconcolor-over`      | Icon    color of the dropdown box options in hover state. |
| `--wui-selectpicker-box-option-iconcolor-selected`  | Icon    color of the dropdown box options in selected state. |
| `--wui-selectpicker-box-option-iconcolor-disabled`  | Icon    color of the dropdown box options in disabled state. |
| `--wui-selectpicker-box-option-checkicon-src`       | Image source of the option check icon<br>(format: `url()` or `none` for the default source). |
| `--wui-selectpicker-box-option-textcolor-empty`     | Text color of empty dropdown box options. |
| `--wui-selectpicker-box-option-textcolor-out`       | Text color of the dropdown box options in normal state. |
| `--wui-selectpicker-box-option-textcolor-over`      | Text color of the dropdown box options in hover state. |
| `--wui-selectpicker-box-option-textcolor-selected`  | Text color of the dropdown box options in selected state. |
| `--wui-selectpicker-box-option-textcolor-disabled`  | Text color of the dropdown box options in disabled state. |
| `--wui-selectpicker-box-button-bordercolor`         | Border color of the dropdown box buttons. |
| `--wui-selectpicker-box-button-textcolor-out`       | Text color of the dropdown box buttons in normal state. |
| `--wui-selectpicker-box-button-textcolor-over`      | Text color of the dropdown box buttons in hover state. |
| `--wui-selectpicker-mobile-overlay-bgcolor`         | Background color of the overlay in mobile mode (screen width less than 768px). |
| `--wui-selectpicker-mobile-box-width`               | Width of the dropdown box in mobile mode (screen width less than 768px). |
| `--wui-selectpicker-mobile-box-borderradius`        | Border radius of the dropdown box in mobile mode (screen width less than 768px). |

#### Implementation

CSS Settings:

```css
:root {

	/* wui-selectpicker */

	--wui-selectpicker-borderradius: 10px;
	--wui-selectpicker-borderwidth: 0px;
	--wui-selectpicker-bordercolor: transparent;
	--wui-selectpicker-bgcolor: #f6f6fa;
	--wui-selectpicker-opener-iconsize: 30px;
	--wui-selectpicker-opener-iconcolor-out: #000;
	--wui-selectpicker-opener-iconcolor-over: #1e90ff;
	--wui-selectpicker-opener-iconcolor-disabled: #d5dce3;
	--wui-selectpicker-opener-openicon-src: none;
	--wui-selectpicker-opener-closeicon-src: none;
	--wui-selectpicker-viewinput-paddingleft: 10px;
	--wui-selectpicker-viewinput-textcolor-out: #2d3a47;
	--wui-selectpicker-viewinput-textcolor-over: #1f2937;
	--wui-selectpicker-viewinput-textcolor-disabled: #d5dce3;
	--wui-selectpicker-box-shadowcolor: #959da5;
	--wui-selectpicker-box-borderradius: 15px;
	--wui-selectpicker-box-bordercolor: #f0f0f3;
	--wui-selectpicker-box-bgcolor: #fdfdfe;
	--wui-selectpicker-box-scroll-bgcolor-out: rgb(from #353a40 r g b / 20%);
	--wui-selectpicker-box-scroll-bgcolor-over: rgb(from #353a40 r g b / 40%);
	--wui-selectpicker-box-option-borderradius: 10px;
	--wui-selectpicker-box-option-bordercolor-out: #f0f0f3;
	--wui-selectpicker-box-option-bordercolor-over: #f0f0f3;
	--wui-selectpicker-box-option-bgcolor-out: transparent;
	--wui-selectpicker-box-option-bgcolor-over: #f6f6fa;
	--wui-selectpicker-box-option-iconsize: 24px;
	--wui-selectpicker-box-option-iconcolor-out: #1e90ff;
	--wui-selectpicker-box-option-iconcolor-over: #1e90ff;
	--wui-selectpicker-box-option-iconcolor-selected: #1e90ff;
	--wui-selectpicker-box-option-iconcolor-disabled: rgb(from #d5dce3 r g b / 40%);
	--wui-selectpicker-box-option-checkicon-src: none;
	--wui-selectpicker-box-option-textcolor-empty: rgb(from #2d3a47 r g b / 60%);
	--wui-selectpicker-box-option-textcolor-out: #2d3a47;
	--wui-selectpicker-box-option-textcolor-over: #2d3a47;
	--wui-selectpicker-box-option-textcolor-selected: #1e90ff;
	--wui-selectpicker-box-option-textcolor-disabled: rgb(from #d5dce3 r g b / 40%);
	--wui-selectpicker-box-button-bordercolor: #f0f0f3;
	--wui-selectpicker-box-button-textcolor-out: #1e90ff;
	--wui-selectpicker-box-button-textcolor-over: #1e90ff;
	--wui-selectpicker-mobile-overlay-bgcolor: rgb(from #010203 r g b / 20%);
	--wui-selectpicker-mobile-box-width: 280px;
	--wui-selectpicker-mobile-box-borderradius: 17px;
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

nav {
	display: flex;
	margin: 10px;
	align-items: center;
	gap: 10px;
}

.my-selectpicker {
	max-width: 200px;
}

.my-output {
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/selectpicker/wui-selectpicker-0.5.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/selectpicker/wui-selectpicker-0.5.css">
<script type="text/javascript" src="/libraries/wui-js/main/selectpicker/wui-selectpicker-0.5.js"></script>
```

HTML code:

```html
<nav>
	<div class="wui-selectpicker my-selectpicker">
		<select name="mySelectpicker">
			<option value=""></option>
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
			<option value="3">Option 3</option>
			<!--
			<option value="4">Option 4</option>
			<option value="5">Option 5</option>
			<option value="6">Option 6</option>
			<option value="7">Option 7</option>
			<option value="8">Option 8</option>
			<option value="9">Option 9</option>
			<option value="10">Option 10</option>
			<option value="11">Option 11</option>
			<option value="12">Option 12</option>
			<option value="13">Option 13</option>
			<option value="14">Option 14</option>
			<option value="15">Option 15</option>
			<option value="16">Option 16</option>
			<option value="17">Option 17</option>
			<option value="18">Option 18</option>
			<option value="19">Option 19</option>
			-->
		</select>
	</div>
	<div class="my-output"></div>
</nav>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".my-output");
	const selectpicker = new WUISelectpicker({
		selector: ".wui-selectpicker.my-selectpicker",
		value: "2",
		//lang: "en",
		//texts: {},
		//openDirection: "down",
		//multiple: false,
		//separatorValue: ",",
		//separatorText: ", ",
		//filterable: true,
		//enabled: true,
		onOpen: (value) => {
			output.textContent = `Opened - value: ${value}`;
		},
		onChange: (value) => {
			output.textContent = `Changed - value: ${value}`;
		}
	});
	selectpicker.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!TIP]
> You can check this functional example on CodeSandbox at the link: [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/selectpicker/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/selectpicker/basic).

<a name="wui-datepicker"></a>

### WUIDatepicker

Versión: `0.5`

Component for the implementation of date type data inputs based on HTML element `<input type="date">`.

#### Sources

| Type | File |
|:----:| ---- |
| CSS  | [src/wui-js/main/datepicker/wui-datepicker-0.5.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/datepicker/wui-datepicker-0.5.css) |
| CSS  | [src/wui-js/main/datepicker/wui-datepicker-0.5.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/datepicker/wui-datepicker-0.5.root.css) |
| JS   | [src/wui-js/main/datepicker/wui-datepicker-0.5.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/datepicker/wui-datepicker-0.5.js) |

#### Constructor

| Type          | Description |
| ------------- | ----------- |
| WUIDatepicker | `WUIDatepicker([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property      | Type       | Default value        | Description |
| ------------- | ---------- | -------------------- | ----------- |
| selector      | `string`   | `".wui-datepicker"`  | (get/set)<br><br>CSS selector that defines the HTML container element of the object. If more than one element matches the selector, only the first match will be included. |
| locales       | `string`   | `"en-US"`            | (get/set)<br><br>Locale code in `<ISO 639-1>-<ISO 3166-1 alpha-2>` format. For example: `es-CL`, `en-US`, `fr-FR`, etc. |
| value         | `string`   | `""`                 | (get/set)<br><br>Selected date in `yyyy-mm-dd` format. |
| min           | `string`   | `""`                 | (get/set)<br><br>Minimum allowed date in `yyyy-mm-dd` format. |
| max           | `string`   | `""`                 | (get/set)<br><br>Maximum allowed date in `yyyy-mm-dd` format. |
| monthsNames   | `array`    | `[]`                 | (get/set)<br><br>Custom names for months. If defined, overwrites names generated by `locales`. |
| weekDaysNames | `array`    | `[]`                 | (get/set)<br><br>Custom names for days of the week. If defined, overwrites names generated by `locales`. |
| texts         | `object`   | `{}`                 | (get/set)<br><br>Custom texts for the component buttons and messages. |
| openDirection | `string`   | `"down"`             | (get/set)<br><br>Opening direction of the calendar.<br><br>Values:<br>• `"up"`, upwards.<br>• `"down"`, downwards. |
| boxAlign      | `string`   | `"left"`             | (get/set)<br><br>Horizontal alignment of the calendar relative to the input.<br><br>Values:<br>• `"left"`, left.<br>• `"center"`, center.<br>• `"right"`, right. |
| enabled       | `boolean`  | `true`               | (get/set)<br><br>Defines whether the input is enabled. |
| onOpen        | `function` | `null`               | (get/set)<br><br>Function run when the calendar is opened. The function receives the current selected value as a parameter. |
| onChange      | `function` | `null`               | (get/set)<br><br>Function run when the selected value changes. The function receives the new selected value as a parameter. |

#### Methods

| Method          | Return type          | Description |
| --------------- | -------------------- | ----------- |
| getElement      | `HTMLElement`        | `getElement()`<br><br>Returns the HTML container element of the object. |
| getViewElements | `Array<HTMLElement>` | `getViewElements()`<br><br>Returns an array of the HTML elements that are part of the value display. |
| getInput        | `HTMLElement`        | `getInput()`<br><br>Returns the HTML element associated with the base data input `<input type="date">`. |
| init            | `void`               | `init()`<br><br>Initializes the object. |
| open            | `void`               | `open()`<br><br>Opens the calendar. |
| close           | `void`               | `close()`<br><br>Closes the calendar. |
| toggle          | `void`               | `toggle()`<br><br>Toggles the opening state of the calendar. |
| toggleMode      | `void`               | `toggleMode()`<br><br>Toggles the view between days and months. |
| prev            | `void`               | `prev()`<br><br>Shows the previous period (month or year depending on the view). |
| next            | `void`               | `next()`<br><br>Shows the next period (month or year depending on the view). |
| cancel          | `void`               | `cancel()`<br><br>Cancels the current selection and reverts to the previous value, closing the calendar. |
| accept          | `void`               | `accept()`<br><br>Accepts the current selection and closes the calendar. |
| isOpen          | `boolean`            | `isOpen()`<br><br>Returns whether the calendar is open. |
| isEmpty         | `boolean`            | `isEmpty()`<br><br>Returns whether the calendar has no date selected. |
| isValid         | `boolean`            | `isValid()`<br><br>Returns whether the entered value corresponds to a valid date. |
| destroy         | `void`               | `destroy()`<br><br>Destroyer. |

#### CSS Variables

| Variable                                         | Description |
| ------------------------------------------------ | ----------- |
| `--wui-datepicker-borderradius`                  | Border radius of the datepicker container. |
| `--wui-datepicker-borderwidth`                   | Border width of the datepicker container. |
| `--wui-datepicker-bordercolor`                   | Border color of the datepicker container. |
| `--wui-datepicker-bgcolor`                       | Background color of the datepicker container. |
| `--wui-datepicker-opener-iconsize`               | Icon    size of the datepicker opener. |
| `--wui-datepicker-opener-iconcolor-out`          | Icon    color of the datepicker opener in normal state. |
| `--wui-datepicker-opener-iconcolor-over`         | Icon    color of the datepicker opener in hover state. |
| `--wui-datepicker-opener-iconcolor-disabled`     | Icon    color of the datepicker opener in disabled state. |
| `--wui-datepicker-opener-openicon-src`           | Image source of the datepicker open icon<br>(format: `url()` or `none` for the default source). |
| `--wui-datepicker-opener-closeicon-src`          | Image source of the datepicker close icon<br>(format: `url()` or `none` for the default source). |
| `--wui-datepicker-viewinput-paddingleft`         | Left padding of the view input fields. |
| `--wui-datepicker-viewinput-textcolor-out`       | Text color of the view input fields in normal state. |
| `--wui-datepicker-viewinput-textcolor-over`      | Text color of the view input fields in hover state. |
| `--wui-datepicker-viewinput-textcolor-disabled`  | Text color of the view input fields in disabled state. |
| `--wui-datepicker-box-shadowcolor`               | Shadow color of the calendar dropdown. |
| `--wui-datepicker-box-borderradius`              | Border radius of the calendar dropdown. |
| `--wui-datepicker-box-bordercolor`               | Border color of the calendar dropdown. |
| `--wui-datepicker-box-bgcolor`                   | Background color of the calendar dropdown. |
| `--wui-datepicker-box-period-iconsize`           | Icon    size of the calendar period selector (month/year). |
| `--wui-datepicker-box-period-iconcolor-out`      | Icon    color of the calendar period selector in normal state. |
| `--wui-datepicker-box-period-iconcolor-over`     | Icon    color of the calendar period selector in hover state. |
| `--wui-datepicker-box-period-iconcolor-disabled` | Icon    color of the calendar period selector in disabled state. |
| `--wui-datepicker-box-period-upicon-src`         | Image source of the period selector up icon<br>(format: `url()` or `none` for the default source). |
| `--wui-datepicker-box-period-downicon-src`       | Image source of the period selector down icon<br>(format: `url()` or `none` for the default source). |
| `--wui-datepicker-box-paging-iconsize`           | Icon    size of the calendar paging controls. |
| `--wui-datepicker-box-paging-iconcolor-out`      | Icon    color of the calendar paging controls in normal state. |
| `--wui-datepicker-box-paging-iconcolor-over`     | Icon    color of the calendar paging controls in hover state. |
| `--wui-datepicker-box-paging-iconcolor-disabled` | Icon    color of the calendar paging controls in disabled state. |
| `--wui-datepicker-box-paging-previcon-src`       | Image source of the calendar previous paging icon<br>(format: `url()` or `none` for the default source). |
| `--wui-datepicker-box-paging-nexticon-src`       | Image source of the calendar next paging icon<br>(format: `url()` or `none` for the default source). |
| `--wui-datepicker-box-month-titlecolor`          | Text color of the calendar month title. |
| `--wui-datepicker-box-month-bgcolor-today`       | Background color of the current month in the calendar. |
| `--wui-datepicker-box-month-bgcolor-over`        | Background color of calendar months in hover state. |
| `--wui-datepicker-box-month-bgcolor-selected`    | Background color of the selected month in the calendar. |
| `--wui-datepicker-box-month-textcolor-out`       | Text color of calendar months in normal state. |
| `--wui-datepicker-box-month-textcolor-over`      | Text color of calendar months in hover state. |
| `--wui-datepicker-box-month-textcolor-selected`  | Text color of the selected month in the calendar. |
| `--wui-datepicker-box-day-bgcolor-today`         | Background color of the current day in the calendar. |
| `--wui-datepicker-box-day-bgcolor-over`          | Background color of calendar days in hover state. |
| `--wui-datepicker-box-day-bgcolor-selected`      | Background color of the selected day in the calendar. |
| `--wui-datepicker-box-day-textcolor-out`         | Text color of calendar days in normal state. |
| `--wui-datepicker-box-day-textcolor-over`        | Text color of calendar days in hover state. |
| `--wui-datepicker-box-day-textcolor-selected`    | Text color of the selected day in the calendar. |
| `--wui-datepicker-box-button-textcolor-out`      | Text color of calendar buttons in normal state. |
| `--wui-datepicker-box-button-textcolor-over`     | Text color of calendar buttons in hover state. |
| `--wui-datepicker-mobile-overlay-bgcolor`        | Background color of the overlay in mobile mode (screen width less than 768px). |

#### Implementation

CSS code:

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

nav {
	display: flex;
	margin: 10px;
	align-items: center;
	gap: 10px;
}

.my-datepicker {
	max-width: 130px;
}

.my-output {
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/datepicker/wui-datepicker-0.5.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/datepicker/wui-datepicker-0.5.css">
<script type="text/javascript" src="/libraries/wui-js/main/datepicker/wui-datepicker-0.5.js"></script>
```

HTML code:

```html
<nav>
	<div class="wui-datepicker my-datepicker">
		<input type="date" name="myDate">
	</div>
	<div class="my-output"></div>
</nav>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".my-output");
	const datepicker = new WUIDatepicker({
		selector: ".wui-datepicker.my-datepicker",
		value: "2026-01-01",
		//locales: "en-US",
		//min: "",
		//max: "",
		//monthsNames: [],
		//weekDaysNames: [],
		//texts: {},
		//openDirection: "down",
		//boxAlign: "left",
		//enabled: true,
		onOpen: (value) => {
			output.textContent = `Opened - value: ${value}`;
		},
		onChange: (value) => {
			output.textContent = `Changed - value: ${value}`;
		}
	});
	datepicker.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!TIP]
> You can check this functional example on CodeSendbox at the link: [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/datepicker/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/datepicker/basic).

<a name="wui-timepicker"></a>

### WUITimepicker

Versión: `0.5`

Component for the implementation of time type data inputs based on HTML element `<input type="time">`.

#### Sources

| Type | File |
|:----:| ---- |
| CSS  | [src/wui-js/main/timepicker/wui-timepicker-0.5.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/timepicker/wui-timepicker-0.5.css) |
| CSS  | [src/wui-js/main/timepicker/wui-timepicker-0.5.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/timepicker/wui-timepicker-0.5.root.css) |
| JS   | [src/wui-js/main/timepicker/wui-timepicker-0.5.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/timepicker/wui-timepicker-0.5.js) |

#### Constructor

| Type          | Description |
| ------------- | ----------- |
| WUITimepicker | `WUITimepicker([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property      | Type       | Default value        | Description |
| ------------- | ---------- | -------------------- | ----------- |
| selector      | `string`   | `".wui-timepicker"`  | (get/set)<br><br>CSS selector that defines the HTML container element of the object. If more than one element matches the selector, only the first match will be included. |
| value         | `string`   | `""`                 | (get/set)<br><br>Selected time in `hh:mm` format (24 hours). |
| min           | `string`   | `"00:00"`            | (get/set)<br><br>Minimum allowed time in `hh:mm` format. |
| max           | `string`   | `"23:59"`            | (get/set)<br><br>Maximum allowed time in `hh:mm` format. |
| lang          | `string`   | `"en"`               | (get/set)<br><br>Component language.<br><br>Values:<br>• `"de"`, German.<br>• `"en"`, English.<br>• `"es"`, Spanish. |
| texts         | `object`   | `{}`                 | (get/set)<br><br>Custom texts for the component buttons and messages. |
| openDirection | `string`   | `"down"`             | (get/set)<br><br>Opening direction of the time picker.<br><br>Values:<br>• `"up"`, upwards.<br>• `"down"`, downwards. |
| boxAlign      | `string`   | `"left"`             | (get/set)<br><br>Horizontal alignment of the calendar relative to the input.<br><br>Values:<br>• `"left"`, left.<br>• `"center"`, center.<br>• `"right"`, right. |
| enabled       | `boolean`  | `true`               | (get/set)<br><br>Defines whether the input is enabled. |
| onOpen        | `function` | `null`               | (get/set)<br><br>Function run when the time picker is opened. The function receives the current selected value as a parameter. |
| onChange      | `function` | `null`               | (get/set)<br><br>Function run when the selected value changes. The function receives the new selected value as a parameter. |

#### Methods

| Method          | Return type          | Description |
| --------------- | -------------------- | ----------- |
| getElement      | `HTMLElement`        | `getElement()`<br><br>Returns the HTML container element of the object. |
| getViewElements | `Array<HTMLElement>` | `getViewElements()`<br><br>Returns an array of the HTML elements that are part of the value display. |
| getInput        | `HTMLElement`        | `getInput()`<br><br>Returns the HTML element associated with the base data input `<input type="time">`. |
| init            | `void`               | `init()`<br><br>Initializes the object. |
| open            | `void`               | `open()`<br><br>Opens the time picker. |
| close           | `void`               | `close()`<br><br>Closes the time picker. |
| toggle          | `void`               | `toggle()`<br><br>Toggles the opening state of the time picker. |
| cancel          | `void`               | `cancel()`<br><br>Cancels the current selection and reverts to the previous value, closing the time picker. |
| accept          | `void`               | `accept()`<br><br>Accepts the current selection and closes the time picker. |
| isOpen          | `boolean`            | `isOpen()`<br><br>Returns whether the time picker is open. |
| isEmpty         | `boolean`            | `isEmpty()`<br><br>Returns whether the time picker has no time selected. |
| isValid         | `boolean`            | `isValid()`<br><br>Returns whether the entered value corresponds to a valid time. |
| destroy         | `void`               | `destroy()`<br><br>Destroyer. |

#### CSS Variables

| Variable                                         | Description |
| ------------------------------------------------ | ----------- |
| `--wui-timepicker-borderradius`                  | Border radius of the timepicker container. |
| `--wui-timepicker-borderwidth`                   | Border width of the timepicker container. |
| `--wui-timepicker-bordercolor`                   | Border color of the timepicker container. |
| `--wui-timepicker-bgcolor`                       | Background color of the timepicker container. |
| `--wui-timepicker-opener-iconsize`               | Icon    size of the timepicker opener. |
| `--wui-timepicker-opener-iconcolor-out`          | Icon    color of the timepicker opener in normal state. |
| `--wui-timepicker-opener-iconcolor-over`         | Icon    color of the timepicker opener in hover state. |
| `--wui-timepicker-opener-iconcolor-disabled`     | Icon    color of the timepicker opener in disabled state. |
| `--wui-timepicker-opener-openicon-src`           | Image source of the timepicker open icon<br>(format: `url()` or `none` for the default source). |
| `--wui-timepicker-opener-closeicon-src`          | Image source of the timepicker close icon<br>(format: `url()` or `none` for the default source). |
| `--wui-timepicker-viewinput-paddingleft`         | Left padding of the view input fields. |
| `--wui-timepicker-viewinput-textcolor-out`       | Text color of the view input fields in normal state. |
| `--wui-timepicker-viewinput-textcolor-over`      | Text color of the view input fields in hover state. |
| `--wui-timepicker-viewinput-textcolor-disabled`  | Text color of the view input fields in disabled state. |
| `--wui-timepicker-box-shadowcolor`               | Shadow color of the time picker dropdown. |
| `--wui-timepicker-box-borderradius`              | Border radius of the time picker dropdown. |
| `--wui-timepicker-box-bordercolor`               | Border color of the time picker dropdown. |
| `--wui-timepicker-box-bgcolor`                   | Background color of the time picker dropdown. |
| `--wui-timepicker-box-scroll-bgcolor-out`        | Scrollbar color of the time picker dropdown in normal state. |
| `--wui-timepicker-box-scroll-bgcolor-over`       | Scrollbar color of the time picker dropdown in hover state. |
| `--wui-timepicker-box-option-textcolor-out`      | Text color of the time picker options in normal state. |
| `--wui-timepicker-box-option-bgcolor-over`       | Background color of the time picker options in hover state. |
| `--wui-timepicker-box-option-textcolor-over`     | Text color of the time picker options in hover state. |
| `--wui-timepicker-box-option-bgcolor-now`        | Background color of the current time option in the picker. |
| `--wui-timepicker-box-option-bgcolor-selected`   | Background color of the selected time option in the picker. |
| `--wui-timepicker-box-option-textcolor-selected` | Text color of the selected time option in the picker. |
| `--wui-timepicker-box-button-textcolor-out`      | Text color of the time picker buttons in normal state. |
| `--wui-timepicker-box-button-textcolor-over`     | Text color of the time picker buttons in hover state. |
| `--wui-timepicker-mobile-overlay-bgcolor`        | Background color of the overlay in mobile mode (screen width less than 768px). |

#### Implementation

CSS code:

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

nav {
	display: flex;
	margin: 10px;
	align-items: center;
	gap: 10px;
}

.my-timepicker {
	max-width: 90px;
}

.my-output {
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/timepicker/wui-timepicker-0.5.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/timepicker/wui-timepicker-0.5.css">
<script type="text/javascript" src="/libraries/wui-js/main/timepicker/wui-timepicker-0.5.js"></script>
```

HTML code:

```html
<nav>
	<div class="wui-timepicker my-timepicker">
		<input type="time" name="myTime">
	</div>
	<div class="my-output"></div>
</nav>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".my-output");
	const timepicker = new WUITimepicker({
		selector: ".wui-timepicker.my-timepicker",
		value: "10:30",
		//min: "00:00",
		//max: "23:59",
		//lang: "en",
		//texts: {},
		//openDirection: "down",
		//boxAlign: "left",
		//enabled: true,
		onOpen: (value) => {
			output.textContent = `Opened - value: ${value}`;
		},
		onChange: (value) => {
			output.textContent = `Changed - value: ${value}`;
		}
	});
	timepicker.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!TIP]
> You can check this functional example on CodeSandbox at the link: [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/timepicker/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/timepicker/basic).

<a name="wui-colorpicker"></a>

### WUIColorpicker

Version: `0.5`

Component for the implementation of color picker type data inputs based on HTML element `<input type="color">`.

#### Sources

| Type | File |
|:----:| ---- |
| CSS  | [src/wui-js/main/colorpicker/wui-colorpicker-0.5.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/colorpicker/wui-colorpicker-0.5.css) |
| CSS  | [src/wui-js/main/colorpicker/wui-colorpicker-0.5.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/colorpicker/wui-colorpicker-0.5.root.css) |
| JS   | [src/wui-js/main/colorpicker/wui-colorpicker-0.5.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/colorpicker/wui-colorpicker-0.5.js) |

#### Constructor

| Type           | Description |
| -------------- | ----------- |
| WUIColorpicker | `WUIColorpicker([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property      | Type       | Default value        | Description |
| ------------- | ---------- | -------------------- | ----------- |
| selector      | `string`   | `".wui-colorpicker"` | (get/set)<br><br>CSS selector that defines the HTML container element of the object. If more than one element matches the selector, only the first match will be included. |
| value         | `string`   | `""`                 | (get/set)<br><br>Selected color in hexadecimal format or CSS color name. Returns the value in hexadecimal. |
| emptyValue    | `string`   | `"#000001"`          | (get/set)<br><br>Hexadecimal value representing an empty or unselected color. |
| lang          | `string`   | `"en"`               | (get/set)<br><br>Component language.<br><br>Values:<br>• `"de"`, German.<br>• `"en"`, English.<br>• `"es"`, Spanish. |
| texts         | `object`   | `{}`                 | (get/set)<br><br>Custom texts for the component buttons and messages. |
| openDirection | `string`   | `"down"`             | (get/set)<br><br>Opening direction of the color picker.<br><br>Values:<br>• `"up"`, upwards.<br>• `"down"`, downwards. |
| boxAlign      | `string`   | `"left"`             | (get/set)<br><br>Horizontal alignment of the calendar relative to the input.<br><br>Values:<br>• `"left"`, left.<br>• `"center"`, center.<br>• `"right"`, right. |
| enabled       | `boolean`  | `true`               | (get/set)<br><br>Defines whether the data input is enabled. |
| onOpen        | `function` | `null`               | (get/set)<br><br>Function to execute when the color picker is opened. Receives the current value as an argument. |
| onChange      | `function` | `null`               | (get/set)<br><br>Function to execute when the selected value changes. Receives the new value as an argument. |

#### Methods

| Method          | Return type          | Description |
| --------------- | -------------------- | ----------- |
| getElement      | `HTMLElement`        | `getElement()`<br><br>Returns the HTML container element of the object. |
| getViewElements | `Array<HTMLElement>` | `getViewElements()`<br><br>Returns an array of the HTML elements that are part of the value display. |
| getInput        | `HTMLElement`        | `getInput()`<br><br>Returns the HTML element associated with the base data input `<input type="color">`. |
| init            | `void`               | `init()`<br><br>Initializes the object. |
| open            | `void`               | `open()`<br><br>Opens the color picker. |
| close           | `void`               | `close()`<br><br>Closes the color picker. |
| toggle          | `void`               | `toggle()`<br><br>Toggles the opening state of the color picker. |
| selectMode      | `void`               | `selectMode(mode)`<br><br>Arguments:<br>**• mode:** `string`.<br><br>Selects the display mode (`"grid"` or `"list"`). |
| cancel          | `void`               | `cancel()`<br><br>Cancels the current selection and reverts to the previous value, closing the color picker. |
| accept          | `void`               | `accept()`<br><br>Accepts the current selection and closes the color picker. |
| isOpen          | `boolean`            | `isOpen()`<br><br>Returns whether the color picker is open. |
| isEmpty         | `boolean`            | `isEmpty()`<br><br>Returns whether the color picker has no color selected. |
| isValid         | `boolean`            | `isValid()`<br><br>Returns whether the entered value corresponds to a valid color. |
| destroy         | `void`               | `destroy()`<br><br>Destroyer. |

#### CSS Variables

| Variable                                            | Description |
| --------------------------------------------------- | ----------- |
| `--wui-colorpicker-opener-iconsize`                 | Icon    size of the colorpicker opener. |
| `--wui-colorpicker-opener-iconcolor-out`            | Icon    color of the colorpicker opener in normal state. |
| `--wui-colorpicker-opener-iconcolor-over`           | Icon    color of the colorpicker opener in hover state. |
| `--wui-colorpicker-opener-iconcolor-disabled`       | Icon    color of the colorpicker opener in disabled state. |
| `--wui-colorpicker-opener-openicon-src`             | Source for the open icon<br>(format: `url()` or `none` for the default source). |
| `--wui-colorpicker-opener-closeicon-src`            | Source for the close icon<br>(format: `url()` or `none` for the default source). |
| `--wui-colorpicker-viewbutton-size`                 | Size of the color view button. |
| `--wui-colorpicker-viewbutton-bordercolor-out`      | Border color of the view button in normal state. |
| `--wui-colorpicker-viewbutton-bgcolor-out`          | Background color of the view button in normal state. |
| `--wui-colorpicker-viewbutton-bordercolor-over`     | Border color of the view button in hover state. |
| `--wui-colorpicker-viewbutton-bgcolor-over`         | Background color of the view button in hover state. |
| `--wui-colorpicker-viewbutton-bordercolor-disabled` | Border color of the view button in disabled state. |
| `--wui-colorpicker-viewbutton-bgcolor-disabled`     | Background color of the view button in disabled state. |
| `--wui-colorpicker-viewcolor-borderwidth`           | Border width of the color indicator in the view button. |
| `--wui-colorpicker-viewcolor-bordercolor`           | Border color of the color indicator in the view button. |
| `--wui-colorpicker-viewcolor-emptyicon-src`         | Source for the empty color preview icon<br>(format: `url()` or `none` for the default source). |
| `--wui-colorpicker-box-shadowcolor`                 | Shadow color of the color picker dropdown. |
| `--wui-colorpicker-box-borderradius`                | Border radius of the color picker dropdown. |
| `--wui-colorpicker-box-bordercolor`                 | Border color of the color picker dropdown. |
| `--wui-colorpicker-box-bgcolor`                     | Background color of the color picker dropdown. |
| `--wui-colorpicker-box-scroll-bgcolor-out`          | Scrollbar color of the picker dropdown in normal state. |
| `--wui-colorpicker-box-scroll-bgcolor-over`         | Scrollbar color of the picker dropdown in hover state. |
| `--wui-colorpicker-box-tab-textcolor-out`           | Text color of the picker tabs in normal state. |
| `--wui-colorpicker-box-tab-textcolor-selected`      | Text color of the picker tabs in selected state. |
| `--wui-colorpicker-box-option-bordercolor-out`      | Border color of the picker options in normal state. |
| `--wui-colorpicker-box-option-bgcolor-out`          | Background color of the picker options in normal state. |
| `--wui-colorpicker-box-option-bordercolor-over`     | Border color of the picker options in hover state. |
| `--wui-colorpicker-box-option-bgcolor-over`         | Background color of the picker options in hover state. |
| `--wui-colorpicker-box-option-bgcolor-selected`     | Background color of the picker options in selected state. |
| `--wui-colorpicker-box-option-textcolor-out`        | Text color of the picker options in normal state. |
| `--wui-colorpicker-box-option-textcolor-over`       | Text color of the picker options in hover state. |
| `--wui-colorpicker-box-option-textcolor-selected`   | Text color of the picker options in selected state. |
| `--wui-colorpicker-box-preview-textcolor-out`       | Text color of the picker preview in normal state. |
| `--wui-colorpicker-box-preview-textcolor-empty`     | Text color of the picker preview when empty. |
| `--wui-colorpicker-box-button-textcolor-out`        | Text color of the picker buttons in normal state. |
| `--wui-colorpicker-box-button-textcolor-over`       | Text color of the picker buttons in hover state. |
| `--wui-colorpicker-mobile-overlay-bgcolor`          | Background color of the overlay in mobile mode (screen width less than 768px). |

#### Implementation

CSS code:

```css
:root {

	/* wui-colorpicker */

	--wui-colorpicker-opener-iconsize: 30px;
	--wui-colorpicker-opener-iconcolor-out: #000;
	--wui-colorpicker-opener-iconcolor-over: #1e90ff;
	--wui-colorpicker-opener-iconcolor-disabled: #d5dce3;
	--wui-colorpicker-opener-openicon-src: none;
	--wui-colorpicker-opener-closeicon-src: none;
	--wui-colorpicker-viewbutton-size: 30px;
	--wui-colorpicker-viewbutton-bordercolor-out: rgb(from #1e90ff r g b / 20%);
	--wui-colorpicker-viewbutton-bordercolor-over: #1e90ff;
	--wui-colorpicker-viewbutton-bordercolor-invalid: #f44343;
	--wui-colorpicker-viewbutton-bordercolor-disabled: #d5dce3;
	--wui-colorpicker-viewbutton-bgcolor-out: transparent;
	--wui-colorpicker-viewbutton-bgcolor-over: transparent;
	--wui-colorpicker-viewbutton-bgcolor-disabled: transparent;
	--wui-colorpicker-viewcolor-borderwidth: 1px;
	--wui-colorpicker-viewcolor-bordercolor: rgb(from #1e90ff r g b / 20%);
	--wui-colorpicker-viewcolor-emptyicon-src: none;
	--wui-colorpicker-box-shadowcolor: #959da5;
	--wui-colorpicker-box-borderradius: 15px;
	--wui-colorpicker-box-bordercolor: #f0f0f3;
	--wui-colorpicker-box-bgcolor: rgb(from #fff r g b / 80%);
	--wui-colorpicker-box-scroll-bgcolor-out: rgb(from #353a40 r g b / 20%);
	--wui-colorpicker-box-scroll-bgcolor-over: rgb(from #353a40 r g b / 40%);
	--wui-colorpicker-box-tab-textcolor-out: #2d3a47;
	--wui-colorpicker-box-tab-textcolor-selected: #1e90ff;
	--wui-colorpicker-box-option-bordercolor-out: #f0f0f3;
	--wui-colorpicker-box-option-bordercolor-over: #f0f0f3;
	--wui-colorpicker-box-option-bgcolor-out: transparent;
	--wui-colorpicker-box-option-bgcolor-over: #f6f6fa;
	--wui-colorpicker-box-option-bgcolor-selected: #1e90ff;
	--wui-colorpicker-box-option-textcolor-out: #000;
	--wui-colorpicker-box-option-textcolor-over: #1e90ff;
	--wui-colorpicker-box-option-textcolor-selected: #fff;
	--wui-colorpicker-box-preview-textcolor-out: #000;
	--wui-colorpicker-box-preview-textcolor-empty: rgb(from #2d3a47 r g b / 60%);
	--wui-colorpicker-box-button-textcolor-out: #1e90ff;
	--wui-colorpicker-box-button-textcolor-over: #1e90ff;
	--wui-colorpicker-mobile-overlay-bgcolor: rgb(from #010203 r g b / 20%);
}
```

Código CSS:

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

nav {
	display: flex;
	margin: 10px;
	align-items: center;
	gap: 10px;
}

.my-colorpicker {}

.my-output {
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/colorpicker/wui-colorpicker-0.5.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/colorpicker/wui-colorpicker-0.5.css">
<script type="text/javascript" src="/libraries/wui-js/main/colorpicker/wui-colorpicker-0.5.js"></script>
```

HTML code:

```html
<nav>
	<div class="wui-colorpicker my-colorpicker">
		<input type="color" name="myColor">
	</div>
	<div class="my-output"></div>
</nav>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".my-output");
	const colorpicker = new WUIColorpicker({
		selector: ".wui-colorpicker.my-colorpicker",
		value: "#1e90ff",
		//emptyValue: "#000001",
		//lang: "en",
		//texts: {},
		//openDirection: "down",
		//boxAlign: "left",
		//enabled: true,
		onOpen: (value) => {
			output.textContent = `Opened - value: ${value}`;
		},
		onChange: (value) => {
			output.textContent = `Changed - value: ${value}`;
		}
	});
	colorpicker.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!TIP]
> You can check this functional example on CodeSandbox at the link: [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/colorpicker/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/colorpicker/basic).

<a name="wui-switch"></a>

### WUISwitch

Version: `0.6`

Component for the implementation of checkbox type data inputs based on HTML element `<input type="checkbox">`.

#### Sources

| Type | File |
|:----:| ---- |
| CSS  | [src/wui-js/main/switch/wui-switch-0.6.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/switch/wui-switch-0.6.css) |
| CSS  | [src/wui-js/main/switch/wui-switch-0.6.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/switch/wui-switch-0.6.root.css) |
| JS   | [src/wui-js/main/switch/wui-switch-0.6.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/switch/wui-switch-0.6.js) |

#### Constructor

| Type        | Description |
| ----------- | ----------- |
| WUISwitch | `WUISwitch([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property  | Type       | Default value   | Description |
| --------- | ---------- | --------------- | ----------- |
| selector  | `string`   | `".wui-switch"` | (get/set)<br><br>CSS selector defining the `HTMLDivElement` HTML element wrapping the `checkbox` type `HTMLInputElement` element that will be converted into the object. If more than one element matches the selector, only the first match will be included. |
| value     | `string`   | `"1"`           | (get/set)<br><br>Value that the checkbox will take when it is activated. |
| activated | `boolean`  | `false`         | (get/set)<br><br>Defines if the checkbox is activated. |
| enabled   | `boolean`  | `true`          | (get/set)<br><br>Defines if the checkbox is enabled. |
| onChange  | `function` | `null`          | (get/set)<br><br>Function run when the checkbox state changes. The function receives as a parameter the boolean state `activated` and the value of the check box. |

#### Methods

| Method          | Return type          | Description |
| --------------- | -------------------- | ----------- |
| getElement      | `HTMLDivElement`     | `getElement()`<br><br>Returns the HTML container element of the object. |
| getViewElements | `Array<HTMLElement>` | `getViewElements()`<br><br>Returns an array of the HTML elements that are part of the value display. |
| getInput        | `HTMLElement`        | `getInput()`<br><br>Returns the HTML element associated with the base data input `<input type="checkbox">`. |
| init            | `void`               | `init()`<br><br>Initializes the object. |
| toggle          | `void`               | `toggle()`<br><br>Toggles the activated/deactivated state of the checkbox. |
| destroy         | `void`               | `destroy()`<br><br>Destroyer. |

#### CSS Variables

| Variable                                    | Description |
| ------------------------------------------- | ----------- |
| `--wui-switch-button-size`                  | Size of the switch button. |
| `--wui-switch-bordercolor-out`              | Border color of the switch in normal state. |
| `--wui-switch-bordercolor-over`             | Border color of the switch in hover state. |
| `--wui-switch-bordercolor-activated`        | Border color of the switch in activated state. |
| `--wui-switch-bordercolor-disabled`         | Border color of the switch in disabled state. |
| `--wui-switch-bgcolor-out`                  | Background color of the switch in normal state. |
| `--wui-switch-bgcolor-over`                 | Background color of the switch in hover state. |
| `--wui-switch-bgcolor-activated`            | Background color of the switch in activated state. |
| `--wui-switch-bgcolor-disabled`             | Background color of the switch in disabled state. |
| `--wui-switch-button-bordercolor-out`       | Border color of the switch button in normal state. |
| `--wui-switch-button-bordercolor-over`      | Border color of the switch button in hover state. |
| `--wui-switch-button-bordercolor-activated` | Border color of the switch button in activated state. |
| `--wui-switch-button-bordercolor-disabled`  | Border color of the switch button in disabled state. |
| `--wui-switch-button-bgcolor-out`           | Background color of the switch button in normal state. |
| `--wui-switch-button-bgcolor-over`          | Background color of the switch button in hover state. |
| `--wui-switch-button-bgcolor-activated`     | Background color of the switch button in activated state. |
| `--wui-switch-button-bgcolor-disabled`      | Background color of the switch button in disabled state. |

#### Implementation

CSS code:

```css
html,
body {
	height: 100%;
	margin: 0;
	padding: 0;
}

nav {
	display: flex;
	margin: 10px;
	align-items: center;
	gap: 10px;
}

.my-switch {}

.my-output {
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/switch/wui-switch-0.6.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/switch/wui-switch-0.6.css">
<script type="text/javascript" src="/libraries/wui-js/main/switch/wui-switch-0.6.js"></script>
```

HTML code:

```html
<nav>
	<div class="wui-switch my-switch">
		<input type="checkbox" name="myCheckbox" value="1">
	</div>
	<div class="my-output"></div>
</nav>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".my-output");
	const switchbox = new WUISwitch({
		selector: ".wui-switch.my-switch",
		value: "1",
		activated: true,
		//enabled: true,
		onChange: (value, activated) => {
			output.textContent = `Change - value: ${value}, activated: ${activated}`;
		}
	});
	switchbox.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!TIP]
> You can check this functional example on CodeSandbox at the link: [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/switch/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/switch/basic).

<a name="wui-intensity"></a>

### WUIIntensity

Version: `0.4`

Component for the implementation of 4-level intensity selector type data inputs: none, low, half, and high based on HTML element `<input type="range">`.

#### Sources

| Type | File |
|:----:| ---- |
| CSS  | [src/wui-js/main/intensity/wui-intensity-0.4.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/intensity/wui-intensity-0.4.css) |
| CSS  | [src/wui-js/main/intensity/wui-intensity-0.4.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/intensity/wui-intensity-0.4.root.css) |
| JS   | [src/wui-js/main/intensity/wui-intensity-0.4.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/intensity/wui-intensity-0.4.js) |

#### Constructor

| Type         | Description |
| ------------ | ----------- |
| WUIIntensity | `WUIIntensity([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property | Type       | Default value      | Description |
| -------- | ---------- | ------------------ | ----------- |
| selector | `string`   | `".wui-intensity"` | (get/set)<br><br>CSS selector defining the `HTMLDivElement` HTML element wrapping the `range` type `HTMLInputElement` element that will be converted into the object. If more than one element matches the selector, only the first match will be included. |
| value    | `number`   | `0`                | (get/set)<br><br>Intensity value (0: none, 1: low, 2: half, 3: high). Also accepts strings `"none"`, `"low"`, `"half"`, `"high"`. |
| enabled  | `boolean`  | `true`             | (get/set)<br><br>Defines if the selector is enabled. |
| onChange | `function` | `null`             | (get/set)<br><br>Function run when the value changes. The function receives the integer value (0-3) and the associated string as parameters. |

#### Methods

| Method          | Return type          | Description |
| --------------- | -------------------- | ----------- |
| getElement      | `HTMLDivElement`     | `getElement()`<br><br>Returns the HTML container element of the object. |
| getViewElements | `Array<HTMLElement>` | `getViewElements()`<br><br>Returns an array of the HTML elements that are part of the value display. |
| getInput        | `HTMLInputElement`   | `getInput()`<br><br>Returns the HTML element associated with the base data input `<input type="range">`. |
| init            | `void`               | `init()`<br><br>Initializes the object. |
| destroy         | `void`               | `destroy()`<br><br>Destroyer. |

#### CSS Variables

| Variable                          | Description |
| --------------------------------- | ----------- |
| `--wui-intensity-height`          | Height of the intensity control. |
| `--wui-intensity-borderradius`    | Border radius of the intensity control. |
| `--wui-intensity-bordercolor-out`      | Border color of the intensity control in normal state. |
| `--wui-intensity-bordercolor-disabled` | Border color of the intensity control in disabled state. |
| `--wui-intensity-bgcolor-none`         | Background color of the intensity control at none level. |
| `--wui-intensity-bgcolor-low`     | Background color of the intensity control at low level. |
| `--wui-intensity-bgcolor-half`    | Background color of the intensity control at half level. |
| `--wui-intensity-bgcolor-high`    | Background color of the intensity control at high level. |

#### Implementation

CSS code:

```css
html,
body {
	height: 100%;
	margin: 0;
	padding: 0;
}

nav {
	display: flex;
	margin: 10px;
	align-items: center;
	gap: 10px;
}

.my-intensity {}

.my-output {
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/intensity/wui-intensity-0.4.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/intensity/wui-intensity-0.4.css">
<script type="text/javascript" src="/libraries/wui-js/main/intensity/wui-intensity-0.4.js"></script>
```

HTML code:

```html
<nav>
	<div class="wui-intensity my-intensity">
		<input type="range" name="myIntensity" value="0" min="0" max="3" step="1">
	</div>
	<div class="my-output"></div>
</nav>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".my-output");
	const intensity = new WUIIntensity({
		selector: ".wui-intensity.my-intensity",
		value: 1,
		//enabled: true,
		onChange: (event, value) => {
			output.textContent = `Change - value: ${value}`;
		}
	});
	intensity.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!TIP]
> You can check this functional example on CodeSandbox at the link: [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/intensity/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/intensity/basic).

<a name="wui-button"></a>

### WUIButton

Versión: `0.5`

Component for the implementation of based on HTML element `<button>`.

#### Sources

| Type | File |
|:----:| ---- |
| CSS  | [src/wui-js/main/button/wui-button-0.5.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/button/wui-button-0.5.css) |
| CSS  | [src/wui-js/main/button/wui-button-0.5.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/button/wui-button-0.5.root.css) |
| JS   | [src/wui-js/main/button/wui-button-0.5.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/button/wui-button-0.5.js) |

#### Constructor

| Type      | Description |
| --------- | ----------- |
| WUIButton | `WUIButton([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property     | Type       | Default value.  | Description |
| ------------ | ---------- | --------------- | ----------- |
| selector     | `string`   | `".wui-button"` | (get/set)<br><br>CSS selector that defines the HTML element of type `HTMLButtonElement` that will be converted into the object. If more than one element matches the selector, only the first match will be included. |
| text         | `string`   | `""`            | (get/set)<br><br>Text or HTML content of the element. Used only when `textClass` is `null`. |
| textClass    | `string`   | `null`          | (get/set)<br><br>CSS class applied to the `<span>` element rendered inside the button. When not `null`, a `<span class="{textClass}">` is rendered instead of the raw text. |
| textData     | `array`    | `null`          | (get/set)<br><br>Array of `[key, value]` pairs added as `data-*` attributes to the `<span>` element. Requires `textClass` to be set. Example: `[["id", "42"], ["lang", "en"]]` renders `data-id="42" data-lang="en"`. |
| iconClass    | `string`   | `null`          | (get/set)<br><br>CSS class applied to a `<div>` element rendered before the `<span>` inside the button. When not `null`, a `<div class="{iconClass}">` is prepended to the button content. Takes precedence over `iconImage`. |
| iconImage    | `string`   | `null`          | (get/set)<br><br>URL of an image rendered as `<img src="{iconImage}">` before the `<span>` inside the button. Used only when `iconClass` is `null`. |
| submit       | `boolean`  | `false`         | (get/set)<br><br>When `true`, adds the CSS class `submit` to the `<button>` element, applying submit button styles. |
| warning      | `boolean`  | `false`         | (get/set)<br><br>When `true`, adds the CSS class `warning` to the `<button>` element, applying warning button styles. |
| flat         | `boolean`  | `false`         | (get/set)<br><br>When `true`, adds the CSS class `flat` to the `<button>` element, applying flat button styles. |
| selectable   | `boolean`  | `false`         | (get/set)<br><br>Define whether the button is selectable. |
| locked       | `boolean`  | `false`         | (get/set)<br><br>Defines whether the button is locked. |
| enabled      | `boolean`  | `true`          | (get/set)<br><br>Defines whether the button is enabled. |
| onClick      | `function` | `null`          | (get/set)<br><br>Function run when the button is clicked. The function does not receive parameters. |
| onDblClick   | `function` | `null`          | (get/set)<br><br>Function run when the button is double-clicked. The function does not receive parameters. |

#### Methods

| Method       | Return type   | Description |
| ------------ | ------------- | ----------- |
| getElement   | `HTMLElement` | `getElement()`<br><br>Returns the HTML container element of the object. |
| init         | `void`        | `init()`<br><br>Initializes the object. |
| focus        | `void`        | `focus()`<br><br>Focus on the button. |
| select       | `select`      | `select()`<br><br>Select the button. |
| unselect     | `unselect`    | `unselect()`<br><br>Unselect the button. |
| isSelected   | `isSelected`  | `isSelected()`<br><br>Returns if the button is selected. |
| destroy      | `void`        | `destroy()`<br><br>Destroyer. |

#### CSS Variables

| Variable                                    | Description |
| ------------------------------------------- | ----------- |
| `--wui-button-default-minwidth`             | Minimum width of the default button. |
| `--wui-button-default-height`               | Height of the default button. |
| `--wui-button-default-bordercolor-out`      | Border color of the default button in normal state. |
| `--wui-button-default-bordercolor-over`     | Border color of the default button in hover state. |
| `--wui-button-default-bordercolor-selected` | Border color of the default button in selected state. |
| `--wui-button-default-bordercolor-disabled` | Border color of the default button in disabled state. |
| `--wui-button-default-bgcolor-out`          | Background color of the default button in normal state. |
| `--wui-button-default-bgcolor-over`         | Background color of the default button in hover state. |
| `--wui-button-default-bgcolor-selected`     | Background color of the default button in selected state. |
| `--wui-button-default-bgcolor-disabled`     | Background color of the default button in disabled state. |
| `--wui-button-default-textcolor-out`        | Text color of the default button in normal state. |
| `--wui-button-default-textcolor-over`       | Text color of the default button in hover state. |
| `--wui-button-default-textcolor-selected`   | Text color of the default button in selected state. |
| `--wui-button-default-textcolor-disabled`   | Text color of the default button in disabled state. |
| `--wui-button-default-textsize`             | Text size of the default button. |
| `--wui-button-submit-minwidth`              | Minimum width of the submit button. |
| `--wui-button-submit-height`                | Height of the submit button. |
| `--wui-button-submit-bordercolor-out`       | Border color of the submit button in normal state. |
| `--wui-button-submit-bordercolor-over`      | Border color of the submit button in hover state. |
| `--wui-button-submit-bordercolor-selected`  | Border color of the submit button in selected state. |
| `--wui-button-submit-bordercolor-disabled`  | Border color of the submit button in disabled state. |
| `--wui-button-submit-bgcolor-out`           | Background color of the submit button in normal state. |
| `--wui-button-submit-bgcolor-over`          | Background color of the submit button in hover state. |
| `--wui-button-submit-bgcolor-selected`      | Background color of the submit button in selected state. |
| `--wui-button-submit-bgcolor-disabled`      | Background color of the submit button in disabled state. |
| `--wui-button-submit-textcolor-out`         | Text color of the submit button in normal state. |
| `--wui-button-submit-textcolor-over`        | Text color of the submit button in hover state. |
| `--wui-button-submit-textcolor-selected`    | Text color of the submit button in selected state. |
| `--wui-button-submit-textcolor-disabled`    | Text color of the submit button in disabled state. |
| `--wui-button-submit-textsize`              | Text size of the submit button. |
| `--wui-button-warning-bordercolor-out`      | Border color of the warning button in normal state. |
| `--wui-button-warning-bordercolor-over`     | Border color of the warning button in hover state. |
| `--wui-button-warning-bordercolor-selected` | Border color of the warning button in selected state. |
| `--wui-button-warning-bordercolor-disabled` | Border color of the warning button in disabled state. |
| `--wui-button-warning-bgcolor-out`          | Background color of the warning button in normal state. |
| `--wui-button-warning-bgcolor-over`         | Background color of the warning button in hover state. |
| `--wui-button-warning-bgcolor-selected`     | Background color of the warning button in selected state. |
| `--wui-button-warning-bgcolor-disabled`     | Background color of the warning button in disabled state. |
| `--wui-button-warning-textcolor-out`        | Text color of the warning button in normal state. |
| `--wui-button-warning-textcolor-over`       | Text color of the warning button in hover state. |
| `--wui-button-warning-textcolor-selected`   | Text color of the warning button in selected state. |
| `--wui-button-warning-textcolor-disabled`   | Text color of the warning button in disabled state. |
| `--wui-button-icon-float-padding`           | Padding of the floating icons in the button. |
| `--wui-button-mobile-default-height`        | Height of the default button in mobile mode (screen width less than 768px). |
| `--wui-button-mobile-submit-height`         | Height of the submit button in mobile mode (screen width less than 768px). |
| `--wui-button-mobile-icon-float-padding`    | Padding of the floating icons in the button in mobile mode (screen width less than 768px). |

#### Implementation

CSS code:

```css
html,
body {
	height: 100%;
	margin: 0;
	padding: 0;
}

nav {
	display: flex;
	margin: 10px;
	align-items: center;
	gap: 10px;
}

.my-button {
	margin: 20px;
}

.my-output {
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.3.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.3.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/button/wui-button-0.5.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/button/wui-button-0.5.css">
<script type="text/javascript" src="/libraries/wui-js/main/button/wui-button-0.5.js"></script>
```

HTML code:

```html
<nav>
	<button class="wui-button my-button button1"></button>
	<button class="wui-button my-button button2"></button>
	<div class="my-output"></div>
</nav>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".my-output");
	const button1 = new WUIButton({
		selector: ".wui-button.button1",
		//text: "button 1",
		//textClass: null,
		//textData: null,
		//iconClass: null,
		//iconImage: null,
		//submit: false,
		//warning: false,
		//flat: false,
		//selectable: false,
		//locked: false,
		//enabled: true,
		onClick: () => {
			output.textContent = "Click button 1";
		},
		onDblClick: () => {
			output.textContent = "Double-Click button 1";
		}
	});
	const button2 = new WUIButton({
		selector: ".wui-button.button2",
		//text: "button 2",
		//iconClass: "wui-icon float-left mappointer-fill",
		//submit: true,
		onClick: () => {
			output.textContent = "Click button 2";
		},
		onDblClick: () => {
			output.textContent = "Double-Click button 2";
		}
	});
	button1.init();
	button2.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLButtonElement`, the object will not be initialized.

> [!TIP]
> You can check this functional example on CodeSandbox at the link: [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/button/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/button/basic).

<a name="goodpractices"></a>

## Good Coding Practices

### 1. Responsive HTML5

All WUI components are designed to work on mobile and desktop devices. Therefore, it is recommended to initialize the responsive HTML5.

```css
html,
body {
	height: 100%;
	margin: 0;
	padding: 0;
}
```

```html
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover">
	...
</head>
<body>
	...
</body>
</html>
```

### 2. Customizing components

WUI components can be customized using CSS. To do this, it is recommended to use a separate CSS file where the CSS variables of the components are loaded.

```css
:root {

	/* wui-scrolly */

	--wui-scrolly-paging-bgcolor: #f6f6fa;

	/* wui-icon */

	--wui-icon-bgcolor-out: rgb(from #353a40 r g b / 70%);
	--wui-icon-bgcolor-over: #353a40;

	/* ... */
}
```

### 3. Instance initialization

To avoid runtime problems, it is recommended to initialize WUI instances or objects once the DOM elements have been loaded.

```js
const init = () => {
	const form = new WUIForm({ ... });
	form.init();
}

window.addEventListener("DOMContentLoaded", init);
```

If you are using [Abbreviated Implementation](#abbreviated), the `DOMContentLoaded` event should be replaced by `wuiLoad`.

```js
window.addEventListener("wuiLoad", init);
```

> [!IMPORTANT]
> This event only works with the `wui.js` resource loader script.

### 4. Referencing components

When a view has several WUI components of the same or different classes, it is recommended to reference them through an array in the JS code to handle them coherently.

```js
const wuiComponents = [];

const init = () => {
	wuiComponents.form1 = new WUIForm({ ... });
	wuiComponents.button1 = new WUIButton({ ... });
	wuiComponents.button2 = new WUIButton({ ... });
	Object.values(wuiComponents).forEach((component) => {
		component.init();
	});
}

window.addEventListener("DOMContentLoaded", init);
```

<a name="demos"></a>

## Demos

This section contains examples of the implementations from the documentation and other complementary demos, all available in the **WUI/JS Demos** repository [https://github.com/wui-js/wuijs-demos](https://github.com/wui-js/wuijs-demos).

1.	[https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/resource-loader/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/resource-loader/basic)<br>
	This demo shows the use of the WUI Resource Loader script.<br><br>
2.	[https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/cookie/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/cookie/basic)<br>
	This demo shows the use of WUICookie's basic functionality.<br><br>
3.	[https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/body/import](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/body/import)<br>
	This demo shows the use of WUIBody's import functionality.<br><br>
4.	[https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/scrolly/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/scrolly/basic)<br>
	This demo shows the use of WUIScrolly's basic functionality.<br><br>
5.	[https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/icon/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/icon/basic)<br>
	This demo shows the use of WUIIcon's basic implementation.<br><br>
6.	[https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/fade/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/fade/basic)<br>
	This demo shows the use of WUIFade's basic functionality.<br><br>
7.	[https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/modal/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/modal/basic)<br>
	This demo shows the use of WUIModal's basic functionality.<br><br>
8.	[https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/paging/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/paging/basic)<br>
	This demo shows the use of WUIPaging's submenu functionality.<br><br>
9.	[https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/slider/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/slider/basic)<br>
	This demo shows the use of WUISlider's basic functionality.<br><br>
10.	[https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/menubar/submenu](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/menubar/submenu)<br>
	This demo shows the use of WUIMenubar's submenu functionality.<br><br>
11.	[https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/list/paging-buttongroup](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/list/paging-buttongroup)<br>
	This demo shows the use of WUIList's pagination functionality through HTML buttons.<br>
	The side button group with pull cover is configured with two buttons, one associated with a possible editing functionality and the other with deletion.<br>
	List data is loaded directly in component creation.<br><br>
12.	[https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/table/paging](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/table/paging)<br>
	This demo shows the use of WUITable's pagination functionality through HTML buttons.<br>
	Table data is loaded directly in component creation.<br><br>
13.	[https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/form/fillstyle](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/form/fillstyle)<br>
	This demo shows the use of WUIForm with fill style and native HTML inputs.<br><br>
14.	[https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/form/linestyle](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/form/linestyle)<br>
	This demo shows the use of WUIForm with line style and native HTML inputs.<br><br>
15.	[https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/form/wuiinputs](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/form/wuiinputs)<br>
	This demo shows the use of WUIForm with fill style and WUI inputs components.<br><br>
16.	[https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/format/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/format/basic)<br>
	This demo shows the use of WUIFormat for number, string and date formatting.<br><br>
17.	[https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/selectpicker/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/selectpicker/basic)<br>
	This demo shows the use of WUISelectpicker's basic functionality.<br><br>
18.	[https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/datepicker/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/datepicker/basic)<br>
	This demo shows the use of WUIDatepicker's basic functionality.<br><br>
19.	[https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/timepicker/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/datepicker/basic)<br>
	This demo shows the use of WUITimepicker's basic functionality.<br><br>
20.	[https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/colorpicker/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/datepicker/basic)<br>
	This demo shows the use of WUIColorpicker's basic functionality.<br><br>
21.	[https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/switch/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/switch/basic)<br>
	This demo shows the use of WUISwitch's basic functionality.<br><br>
22.	[https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/intensity/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/intensity/basic)<br>
	This demo shows the use of WUIIntensity's basic functionality.<br><br>
23.	[https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/button/basic](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/main/button/basic)<br>
	This demo shows the use of WUIButton's basic functionality.<br><br>

> [!NOTE]
> All demos from the [wuijs-demos](https://github.com/wui-js/wuijs-demos) repository can be reviewed on CodeSandbox at the following link [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/wui](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/wui).

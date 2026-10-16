> [!IMPORTANT]
> The GitHub account `@wuiproject` was migrated to `@wui-js` to match the name with the NPM account.

[English](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md) |
[Español](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md)
---

# wuijs-main-lib

<p align="center">
	<img src="https://github.com/wui-js/wuijs-main-lib/blob/main/imgs/logo/wuijs-main-logotype-color.svg" width="220" height="220">
</p>

|                      | |
| -------------------- | --- |
| **Library name**     | `wuijs-main-lib` |
| **Library version**  | `0.16.1` ([Change Log](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/CHANGELOG-en.md)) |
| **NPM package**      | `@wui-js/main` ([npm](https://www.npmjs.com/package/@wui-js/main)) |
| **Document version** | `0.16.1.20261016.0` |
| **License**          | `Apache License 2.0` |
| **Author**           | `Sergio E. Belmar V. <wuijs.project@gmail.com>` |
| **Repository**       | [https://github.com/wui-js/wuijs-main-lib](https://github.com/wui-js/wuijs-main-lib) |
| **Documentation**    | [https://docs.wuijs.dev](https://docs.wuijs.dev) |
| **Website**          | [https://wuijs.dev](https://wuijs.dev) |

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
	*   [WUIHttp](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/http/wui-http-en.md)
	*   [WUICookie](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/cookie/wui-cookie-en.md)
	*   [WUIHead](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/head/wui-head-en.md)
	*   [WUIBody](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/body/wui-body-en.md)
	*   [WUILanguage](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/language/wui-language-en.md)
	*   [WUIScrolly](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/scrolly/wui-scrolly-en.md)
	*   [WUIIcon](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/icon/wui-icon-en.md)
	*   [WUIFade](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/fade/wui-fade-en.md)
	*   [WUILoader](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/loader/wui-loader-en.md)
	*   [WUITooltip](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/tooltip/wui-tooltip-en.md)
	*   [WUIModal](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/modal/wui-modal-en.md)
	*   [WUIPaging](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/paging/wui-paging-en.md)
	*   [WUISlider](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/slider/wui-slider-en.md)
	*   [WUITabs](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/tabs/wui-tabs-en.md)
	*   [WUIMenubar](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/menubar/wui-menubar-en.md)
	*   [WUIList](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/list/wui-list-en.md)
	*   [WUITable](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/table/wui-table-en.md)
	*   [WUIForm](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/form/wui-form-en.md)
	*   [WUIFormat](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/format/wui-format-en.md)
	*   [WUISelectpicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/selectpicker/wui-selectpicker-en.md)
	*   [WUIDatepicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/datepicker/wui-datepicker-en.md)
	*   [WUITimepicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/timepicker/wui-timepicker-en.md)
	*   [WUIColorpicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/colorpicker/wui-colorpicker-en.md)
	*   [WUIAvatarpicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/avatarpicker/wui-avatarpicker-en.md)
	*   [WUISwitch](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/switch/wui-switch-en.md)
	*   [WUIIntensity](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/intensity/wui-intensity-en.md)
	*   [WUIButton](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/button/wui-button-en.md)
*	[Good Coding Practices](#goodpractices)
*   [Demos](#demos) (CodeSandbox)

<a name="overview"></a>

## Overview

WUI/JS Main Lib, an acronym for *Web User Interface JavaScript library*, is an open source JavaScript/CSS vanilla library for the rapid implementation of Web user interfaces composed of 27 classes, which can be used independently or together.

<a name="project"></a>

### About the WUI/JS Project

WUI/JS Main Lib is part of the WUI/JS project, which currently consists of 4 repositories:

-	[https://github.com/wui-js/wuijs-main-lib](https://github.com/wui-js/wuijs-main-lib)<br>
	UI Main library.<br><br>
-	[https://github.com/wui-js/wuijs-environment-lib](https://github.com/wui-js/wuijs-environment-lib)<br>
	UI Bridge library between a web environments and native web rendering engines.<br><br>
-	[https://github.com/wui-js/wuijs-plugins-lib](https://github.com/wui-js/wuijs-plugins-lib)<br>
	UI Plugins library.<br><br>
-	[https://github.com/wui-js/wuijs-demos](https://github.com/wui-js/wuijs-demos)<br>
	Repository with demos and usage examples for the project libraries.<br><br>

<a name="classtable"></a>

### Classes Table

| Class name                                                                                                             | Version | Description |
| ---------------------------------------------------------------------------------------------------------------------- | :------:| ----------- |
| [WUIHttp](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/http/wui-http-en.md)                         | `0.2`   | Utilities for making HTTP requests through `XMLHttpRequest` and `fetch()`, with token authentication, cancellation, download progress and response content conversion. |
| [WUICookie](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/cookie/wui-cookie-en.md)                   | `0.5`   | Utilities for cookies management. |
| [WUIHead](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/head/wui-head-en.md)                         | `0.5`   | Utilities for HTML head management. |
| [WUIBody](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/body/wui-body-en.md)                         | `0.10`  | Utilities for HTML body management. Allows the import of CSS/JS/HTML content and facilitates implementation in native mobile environments. |
| [WUILanguage](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/language/wui-language-en.md)             | `0.9`   | Utilities for interfaces with different languages management. Allows you to load language files in JS or JSON format and dynamically update the content of HTML elements based on the language. |
| [WUIScrolly](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/scrolly/wui-scrolly-en.md)                | `0.8`   | Utilities for animating HTML elements management using the "onscroll" event of the HTML page body. |
| [WUIIcon](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/icon/wui-icon-en.md)                         | `0.14`  | Pre-designed icons set loaded via CSS, for use in interfaces. |
| [WUIFade](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/fade/wui-fade-en.md)                         | `0.7`   | Utilities for fading out and fading control in HTML elements with opacity. |
| [WUILoader](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/loader/wui-loader-en.md)                   | `0.7`   | Component for the implementation of loading animations. |
| [WUITooltip](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/tooltip/wui-tooltip-en.md)                | `0.6`   | Component for the implementation of tooltip texts. |
| [WUIModal](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/modal/wui-modal-en.md)                      | `0.13`  | Component for the implementation of dialog boxes (type `message`) and pop-up windows (type `page`). |
| [WUIPaging](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/paging/wui-paging-en.md)                   | `0.12`  | Component for the implementation of paginated views with animated transitions. |
| [WUISlider](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/slider/wui-slider-en.md)                   | `0.10`  | Component for the implementation of slide presentations controlled by mouse/touch dragging and/or by event. |
| [WUITabs](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/tabs/wui-tabs-en.md)                         | `0.7`   | Component for the implementation of views accessible by tab selection. |
| [WUIMenubar](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/menubar/wui-menubar-en.md)                | `0.10`  | Component for the implementation of menu bars. |
| [WUIList](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/list/wui-list-en.md)                         | `0.12`  | Component for the implementation of data lists and buttons for each row optionally. |
| [WUITable](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/table/wui-table-en.md)                      | `0.13`  | Component for the implementation of data tables. Unlike the `WUIList` component, the `WUITable` component includes a column header. |
| [WUIForm](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/form/wui-form-en.md)                         | `0.15`  | Component for the implementation of data forms. This component allows the implementation of HTML data input elements such as `<input>`, `<select>`, and `<textarea>`, and WUI library objects such as `WUISelectpicker`, `WUIDatepicker`, `WUITimepicker`, `WUIColorpicker`, `WUISwitch`, `WUIIntensity`, and `WUIButton`. |
| [WUIFormat](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/format/wui-format-en.md)                   | `0.7`   | Utilities for management and validation `string`, `number` and `Date` data formats. |
| [WUISelectpicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/selectpicker/wui-selectpicker-en.md) | `0.15`  | Component for the implementation of multiple or exclusive selection list data inputs based on HTML element `<select>`. |
| [WUIDatepicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/datepicker/wui-datepicker-en.md)       | `0.14`  | Component for the implementation of date type data inputs based on HTML element `<input type="date">`. |
| [WUITimepicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/timepicker/wui-timepicker-en.md)       | `0.13`  | Component for the implementation of time type data inputs based on HTML element `<input type="time">`. |
| [WUIColorpicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/colorpicker/wui-colorpicker-en.md)    | `0.14`  | Component for the implementation of color picker type data inputs based on HTML element `<input type="color">`. |
| [WUIAvatarpicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/avatarpicker/wui-avatarpicker-en.md) | `0.2`   | Component for the implementation of avatar image type data inputs, with file loading, drag framing and scaling, based on HTML elements `<input type="file">` and `<input type="range">`. |
| [WUISwitch](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/switch/wui-switch-en.md)                   | `0.10`  | Component for the implementation of checkbox type data inputs based on HTML element `<input type="checkbox">`. |
| [WUIIntensity](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/intensity/wui-intensity-en.md)          | `0.7`   | Component for the implementation of 4-level intensity selector type data inputs: none, low, half, and high based on HTML element `<input type="range">`. |
| [WUIButton](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/button/wui-button-en.md)                   | `0.16`  | Component for the implementation of based on HTML element `<button>`. |

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
git clone --branch v0.16.1 https://git@github.com/wui-js/wuijs-main-lib.git
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
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/scrolly/wui-scrolly-0.8.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/scrolly/wui-scrolly-0.8.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.14.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.14.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/loader/wui-loader-0.7.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/loader/wui-loader-0.7.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tooltip/wui-tooltip-0.6.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tooltip/wui-tooltip-0.6.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/modal/wui-modal-0.13.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/modal/wui-modal-0.13.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/paging/wui-paging-0.12.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/paging/wui-paging-0.12.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/slider/wui-slider-0.10.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/slider/wui-slider-0.10.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tabs/wui-tabs-0.7.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tabs/wui-tabs-0.7.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/menubar/wui-menubar-0.10.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/menubar/wui-menubar-0.10.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/list/wui-list-0.12.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/list/wui-list-0.12.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/table/wui-table-0.13.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/table/wui-table-0.13.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/form/wui-form-0.15.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/form/wui-form-0.15.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/selectpicker/wui-selectpicker-0.15.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/selectpicker/wui-selectpicker-0.15.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/datepicker/wui-datepicker-0.14.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/datepicker/wui-datepicker-0.14.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/timepicker/wui-timepicker-0.13.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/timepicker/wui-timepicker-0.13.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/colorpicker/wui-colorpicker-0.14.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/colorpicker/wui-colorpicker-0.14.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/avatarpicker/wui-avatarpicker-0.2.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/avatarpicker/wui-avatarpicker-0.2.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/switch/wui-switch-0.10.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/switch/wui-switch-0.10.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/intensity/wui-intensity-0.7.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/intensity/wui-intensity-0.7.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/button/wui-button-0.16.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/button/wui-button-0.16.css">
		<script type="text/javascript" src="/libraries/wui-js/main/http/wui-http-0.2.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/cookie/wui-cookie-0.5.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/head/wui-head-0.5.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/body/wui-body-0.10.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/language/wui-language-0.9.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/scrolly/wui-scrolly-0.8.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/icon/wui-icon-0.14.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/fade/wui-fade-0.7.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/loader/wui-loader-0.7.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/tooltip/wui-tooltip-0.6.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/modal/wui-modal-0.13.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/paging/wui-paging-0.12.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/slider/wui-slider-0.10.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/tabs/wui-tabs-0.7.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/menubar/wui-menubar-0.10.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/list/wui-list-0.12.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/table/wui-table-0.13.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/form/wui-form-0.15.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/format/wui-format-0.7.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/selectpicker/wui-selectpicker-0.15.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/datepicker/wui-datepicker-0.14.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/timepicker/wui-timepicker-0.13.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/colorpicker/wui-colorpicker-0.14.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/avatarpicker/wui-avatarpicker-0.2.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/switch/wui-switch-0.10.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/intensity/wui-intensity-0.7.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/button/wui-button-0.16.js"></script>
	</head>
	<body>
	</body>
</html>
```

> [!NOTE]
> This implementation assumes installation via GitHub.
> If installed via NPM, the resource calls are made using the path `/node_modules/wui/`.
> ```html
> <script src="node_modules/@wui-js/main/button/wui-button-0.16.js"></script>
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
		<link type="text/css" rel="stylesheet" href="./settings/wui.root.css">
		<script type="text/javascript" src="/libraries/wui-js/main/wui.js?v=0.16.1"></script>
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
<script type="text/javascript" src="/libraries/wui-js/main/wui.js?v=0.16.1&c=selectpicker,switch"></script>
```

> [!NOTE]
> The `class` parameter does not distinguish between uppercase and lowercase.

Additionally, you can omit loading the `root.css` files for each library by adding the `root` parameter with the value `0` (zero) to the `wui.js` file URL.

```html
<script type="text/javascript" src="/libraries/wui-js/main/wui.js?v=0.16.1&c=selectpicker,switch&r=0"></script>
```

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-resource-loader-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-resource-loader-basic&lang=en).

<a name="classes"></a>

## Classes

The documentation of each class is in its own document, in the [`docs/classes/`](https://github.com/wui-js/wuijs-main-lib/tree/main/docs/classes) directory:

*   <a name="wui-http"></a>[WUIHttp](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/http/wui-http-en.md)
*   <a name="wui-cookie"></a>[WUICookie](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/cookie/wui-cookie-en.md)
*   <a name="wui-head"></a>[WUIHead](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/head/wui-head-en.md)
*   <a name="wui-body"></a>[WUIBody](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/body/wui-body-en.md)
*   <a name="wui-language"></a>[WUILanguage](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/language/wui-language-en.md)
*   <a name="wui-scrolly"></a>[WUIScrolly](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/scrolly/wui-scrolly-en.md)
*   <a name="wui-icon"></a>[WUIIcon](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/icon/wui-icon-en.md)
*   <a name="wui-fade"></a>[WUIFade](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/fade/wui-fade-en.md)
*   <a name="wui-loader"></a>[WUILoader](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/loader/wui-loader-en.md)
*   <a name="wui-tooltip"></a>[WUITooltip](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/tooltip/wui-tooltip-en.md)
*   <a name="wui-modal"></a>[WUIModal](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/modal/wui-modal-en.md)
*   <a name="wui-paging"></a>[WUIPaging](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/paging/wui-paging-en.md)
*   <a name="wui-slider"></a>[WUISlider](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/slider/wui-slider-en.md)
*   <a name="wui-tabs"></a>[WUITabs](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/tabs/wui-tabs-en.md)
*   <a name="wui-menubar"></a>[WUIMenubar](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/menubar/wui-menubar-en.md)
*   <a name="wui-list"></a>[WUIList](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/list/wui-list-en.md)
*   <a name="wui-table"></a>[WUITable](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/table/wui-table-en.md)
*   <a name="wui-form"></a>[WUIForm](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/form/wui-form-en.md)
	*   <a name="wui-form-buildhtml"></a>[Declarative building with `buildHtml()`](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/form/wui-form-en.md#wui-form-buildhtml)
*   <a name="wui-format"></a>[WUIFormat](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/format/wui-format-en.md)
*   <a name="wui-selectpicker"></a>[WUISelectpicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/selectpicker/wui-selectpicker-en.md)
*   <a name="wui-datepicker"></a>[WUIDatepicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/datepicker/wui-datepicker-en.md)
*   <a name="wui-timepicker"></a>[WUITimepicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/timepicker/wui-timepicker-en.md)
*   <a name="wui-colorpicker"></a>[WUIColorpicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/colorpicker/wui-colorpicker-en.md)
*   <a name="wui-avatarpicker"></a>[WUIAvatarpicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/avatarpicker/wui-avatarpicker-en.md)
*   <a name="wui-switch"></a>[WUISwitch](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/switch/wui-switch-en.md)
*   <a name="wui-intensity"></a>[WUIIntensity](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/intensity/wui-intensity-en.md)
*   <a name="wui-button"></a>[WUIButton](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/button/wui-button-en.md)

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

1.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-resource-loader-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-resource-loader-basic&lang=en)<br>
	This demo shows the use of the WUI Resource Loader script.<br><br>
2.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-http-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-http-basic&lang=en)<br>
	This demo shows the use of WUIHttp's basic functionality.<br><br>
3.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-cookie-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-cookie-basic&lang=en)<br>
	This demo shows the use of WUICookie's basic functionality.<br><br>
4.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-body-import&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-body-import&lang=en)<br>
	This demo shows the use of WUIBody's import functionality.<br><br>
5.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-language-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-language-basic&lang=en)<br>
	This demo shows the use of WUILanguage's basic functionality.<br><br>
6.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-scrolly-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-scrolly-basic&lang=en)<br>
	This demo shows the use of WUIScrolly's basic functionality.<br><br>
7.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-icon-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-icon-basic&lang=en)<br>
	This demo shows the use of WUIIcon's basic implementation.<br><br>
8.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-fade-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-fade-basic&lang=en)<br>
	This demo shows the use of WUIFade's basic functionality.<br><br>
9.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-loader-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-loader-basic&lang=en)<br>
	This demo shows the use of WUILoader's basic functionality.<br><br>
10.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-tooltip-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-tooltip-basic&lang=en)<br>
	This demo shows the use of WUITooltip's basic functionality.<br><br>
11.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-modal-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-modal-basic&lang=en)<br>
	This demo shows the use of WUIModal's basic functionality.<br><br>
12.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-paging-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-paging-basic&lang=en)<br>
	This demo shows the use of WUIPaging's submenu functionality.<br><br>
13.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-slider-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-slider-basic&lang=en)<br>
	This demo shows the use of WUISlider's basic functionality.<br><br>
14.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-tabs-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-tabs-basic&lang=en)<br>
	This demo shows the use of WUITabs's basic functionality.<br><br>
15.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-menubar-submenu&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-menubar-submenu&lang=en)<br>
	This demo shows the use of WUIMenubar's submenu functionality.<br><br>
16.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-list-paging-buttongroup&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-list-paging-buttongroup&lang=en)<br>
	This demo shows the use of WUIList's pagination functionality through HTML buttons.<br>
	The side button group with pull cover is configured with two buttons, one associated with a possible editing functionality and the other with deletion.<br>
	List data is loaded directly in component creation.<br><br>
17.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-table-paging&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-table-paging&lang=en)<br>
	This demo shows the use of WUITable's pagination functionality through HTML buttons.<br>
	Table data is loaded directly in component creation.<br><br>
18.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-form-fillstyle&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-form-fillstyle&lang=en)<br>
	This demo shows the use of WUIForm with fill style and native HTML inputs.<br><br>
19.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-form-linestyle&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-form-linestyle&lang=en)<br>
	This demo shows the use of WUIForm with line style and native HTML inputs.<br><br>
20.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-form-wuiinputs&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-form-wuiinputs&lang=en)<br>
	This demo shows the use of WUIForm with fill style and WUI inputs components.<br><br>
21.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-format-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-format-basic&lang=en)<br>
	This demo shows the use of WUIFormat for number, string and date formatting.<br><br>
22.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-selectpicker-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-selectpicker-basic&lang=en)<br>
	This demo shows the use of WUISelectpicker's basic functionality.<br><br>
23.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-datepicker-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-datepicker-basic&lang=en)<br>
	This demo shows the use of WUIDatepicker's basic functionality.<br><br>
24.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-timepicker-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-timepicker-basic&lang=en)<br>
	This demo shows the use of WUITimepicker's basic functionality.<br><br>
25.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-colorpicker-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-colorpicker-basic&lang=en)<br>
	This demo shows the use of WUIColorpicker's basic functionality.<br><br>
26.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-avatarpicker-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-avatarpicker-basic&lang=en)<br>
	This demo shows the use of WUIAvatarpicker's basic functionality.<br><br>
27.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-switch-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-switch-basic&lang=en)<br>
	This demo shows the use of WUISwitch's basic functionality.<br><br>
28.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-intensity-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-intensity-basic&lang=en)<br>
	This demo shows the use of WUIIntensity's basic functionality.<br><br>
29.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-button-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-button-basic&lang=en)<br>
	This demo shows the use of WUIButton's basic functionality.<br><br>

> [!NOTE]
> All demos from the [wuijs-demos](https://github.com/wui-js/wuijs-demos) repository can be reviewed on CodeSandbox at the following link [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/wui](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/wui).

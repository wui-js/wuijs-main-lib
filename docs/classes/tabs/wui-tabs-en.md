[English](wui-tabs-en.md) | [Español](wui-tabs-es.md)

[wuijs-main-lib](../../README-en.md)

# WUITabs

Version: `0.7`

Component for the implementation of views accessible by tab selection.

## Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/tabs/wui-tabs-0.7.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/tabs/wui-tabs-0.7.js) |
| CSS  | [src/wui-js/main/tabs/wui-tabs-0.7.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/tabs/wui-tabs-0.7.css) |
| CSS  | [src/wui-js/main/tabs/wui-tabs-0.7.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/tabs/wui-tabs-0.7.root.css) |

## Constructor

| Type    | Description |
| ------- | ----------- |
| WUITabs | `WUITabs([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

## Properties

| Property   | Type     | Default value | Description |
| ---------- | -------- | -------------- | ----------- |
| selector   | `string` | `""`           | (get/set)<br><br>CSS selector that defines the HTML container element of the tab component. If more than one element matches the selector, only the first match will be included. |
| layout     | `string` | `"top"`        | (get/set)<br><br>Tab bar position.<br><br>Values:<br>• `"top"`, at the top at the beginning of the display (default value).<br>• `"bottom"`, at the bottom at the end of the display. |
| index      | `number` | `null`         | (get/set)<br><br>Index of the currently selected tab. |
| dataTarget | `string` | `"target"`     | (get/set)<br><br>Name of the `data-*` attribute that holds each tab's identifier. |
| target     | `string` | `null`         | (get only)<br><br>Identifier of the currently selected tab. |

## Methods

| Method     | Return type   | Description |
| ---------- | ------------- | ----------- |
| getElement | `HTMLElement` | `getElement()`<br><br>Returns the HTML container element of the object. |
| getIndex   | `number`      | `getIndex([target])`<br><br>Arguments:<br>**• target:** `string` *optional*, tab identifier. If not specified, uses the current target.<br><br>Returns the index of a tab from its identifier. |
| getTarget  | `string`      | `getTarget([index])`<br><br>Arguments:<br>**• index:** `number` *optional*, tab index. If not specified, uses the current index.<br><br>Returns the identifier of a tab from its index. |
| getTabs    | `NodeList`    | `getTabs()`<br><br>Returns a list of all tab HTML elements (class `.tab`). |
| getPages   | `NodeList`    | `getPages()`<br><br>Returns a list of all page HTML elements (class `.page`). |
| init       | `void`        | `init()`<br><br>Initializes the object, attaching click events to tabs and selecting the default tab. |
| select     | `void`        | `select([target])`<br><br>Arguments:<br>**• target:** `string` or `number` *optional*, identifier or index of the tab to select. The default value is `0`.<br><br>Selects the given tab, showing the corresponding page. |
| destroy    | `void`        | `destroy()`<br><br>Destroyer. |

## CSS Variables

| Variable                              | Description |
| ------------------------------------- | ----------- |
| `--wui-tabs-shadowcolor`              | Shadow color for the controller. |
| `--wui-tabs-borderradius`             | Border radius for the controller. |
| `--wui-tabs-borderwidth`              | Border width for the controller. |
| `--wui-tabs-bordercolor`              | Border color for the controller. |
| `--wui-tabs-bgcolor`                  | Background color of the controller and pages.
| `--wui-tabs-scroll-bgcolor-out`       | Background color of the scrollbar in normal state. |
| `--wui-tabs-scroll-bgcolor-over`      | Background color of the scrollbar in hover/active state. |
| `--wui-tabs-tab-bordercolor-out`      | Border color of tabs in normal state. |
| `--wui-tabs-tab-bordercolor-over`     | Border color of tabs in hover state. |
| `--wui-tabs-tab-bordercolor-selected` | Border color of tabs in selected state. |
| `--wui-tabs-tab-bgcolor-out`          | Background color of tabs in normal state. |
| `--wui-tabs-tab-bgcolor-over`         | Background color of tabs in hover state. |
| `--wui-tabs-tab-bgcolor-selected`     | Background color of tabs in selected state. |
| `--wui-tabs-tab-iconcolor-out`        | Icon color of tabs in normal state. |
| `--wui-tabs-tab-iconcolor-over`       | Icon color of tabs in hover state. |
| `--wui-tabs-tab-iconcolor-selected`   | Icon color of tabs in selected state. |
| `~~--wui-tabs-tab-iconcolor-mobile~~` | Icon color of tabs in mobile mode. |
| `--wui-tabs-tab-textcolor-out`        | Text color of tabs in normal state. |
| `--wui-tabs-tab-textcolor-over`       | Text color of tabs in hover state. |
| `--wui-tabs-tab-textcolor-selected`   | Text color of tabs in selected state. |

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
	font-family: Arial, Helvetica, Verdana, sans-serif;
	font-size: 14px;
}

nav {
	position: absolute;
	top: 20px;
	left: 20px;
	right: 20px;
	bottom: 20px;
}

.my-tabs {
	height: 100%;
}

.my-tabs .page {
	padding-top: 40px;
	justify-content: center;
}

.my-tabs .page1 {
	height: 150%;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.8.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.8.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tabs/wui-tabs-0.7.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tabs/wui-tabs-0.7.css">
<script type="text/javascript" src="/libraries/wui-js/main/tabs/wui-tabs-0.7.js"></script>
```

HTML code:

```html
<nav>
	<div class="wui-tabs my-tabs">
		<div class="bar">
			<div class="tab" data-target="home">
				<div class="icon wui-icon wui-icon-home"></div>
				<div class="text">Inicio</div>
			</div>
			<div class="tab" data-target="profile">
				<div class="icon wui-icon wui-icon-user"></div>
				<div class="text">Perfil</div>
			</div>
			<div class="tab" data-target="settings">
				<div class="icon wui-icon wui-icon-settings"></div>
				<div class="text">Ajustes</div>
			</div>
		</div>
		<div class="body scroll">
			<div class="page page1">Contenido página 1</div>
			<div class="page">Contenido página 2</div>
			<div class="page">Contenido página 3</div>
		</div>
	</div>
</nav>
```

JS code:

```js
const init = () => {
	const tabs = new WUITabs({
		selector: ".wui-tabs.my-tabs",
		//layout: "top",
		//index: null,
		//dataTarget: "target"
	});
	tabs.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-tabs-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-tabs-basic&lang=en).

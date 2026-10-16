[English](wui-loader-en.md) | [Español](wui-loader-es.md)

[wuijs-main-lib](../../README-en.md)

# WUILoader

Version: `0.7`

Component for the implementation of loading animations.

## Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/loader/wui-loader-0.7.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/loader/wui-loader-0.7.js) |
| CSS  | [src/wui-js/main/loader/wui-loader-0.7.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/loader/wui-loader-0.7.css) |
| CSS  | [src/wui-js/main/loader/wui-loader-0.7.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/loader/wui-loader-0.7.root.css) |

## Constructor

| Type       | Description |
| ---------- | ----------- |
| WUILoader  | `WUILoader([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

## Properties

| Property  | Type     | Default value   | Description |
| --------- | -------- | --------------- | ----------- |
| selector  | `string` | `".wui-loader"` | (get/set)<br><br>CSS selector that defines the HTML element that will be converted into the object. If more than one element matches the selector, only the first match will be included. |
| style     | `string` | `"ring"`        | (get/set)<br><br>Loading animation style.<br><br>Values:<br>• `"ring"`, ring.<br>• `"dualring"`, dual ring.<br>• `"spinner"`, spinner.<br>• `"roller"`, roller.<br>• `"ellipsis"`, dots.<br>• `"grid"`, grid. |
| size      | `number` | `60`            | (get/set)<br><br>Loading animation size in pixels. |
| dataStyle | `string` | `"style"`       | (get/set)<br><br>Name of the `data-*` attribute that contains the value of the `style` property. |
| dataSize  | `string` | `"size"`        | (get/set)<br><br>Name of the `data-*` attribute that contains the value of the `size` property. |

## Methods

| Method      | Return type | Description |
| ----------- | ----------- | ----------- |
| getElements | `NodeList`  | `getElements()`<br><br>Returns a list of HTML elements with the containers of the loading animation objects. |
| init        | `void`      | `init()`<br><br>Initializes the loading animation objects. |
| destroy     | `void`      | `destroy()`<br><br>Destroyer. |

## CSS Variables

| Variable             | Description |
| -------------------- | ----------- |
| `--wui-loader-color` | Loading animation color. |

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
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;
	gap: 20px;
}

nav > div .text {
	margin-top: 10px;
	text-align: center;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/loader/wui-loader-0.7.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/loader/wui-loader-0.7.css">
<script type="text/javascript" src="/libraries/wui-js/main/loader/wui-loader-0.7.js"></script>
```

HTML code:

```html
<nav>
	<div>
		<div class="wui-loader my-loader-ring"></div>
		<div class="text">ring</div>
	</div>
	<div>
		<div class="wui-loader my-loader-dualring"></div>
		<div class="text">dualring</div>
	</div>
	<div>
		<div class="wui-loader my-loader-spinner"></div>
		<div class="text">spinner</div>
	</div>
	<div>
		<div class="wui-loader my-loader-roller"></div>
		<div class="text">roller</div>
	</div>
	<div>
		<div class="wui-loader my-loader-ellipsis"></div>
		<div class="text">ellipsis</div>
	</div>
	<div>
		<div class="wui-loader my-loader-grid"></div>
		<div class="text">grid</div>
	</div>
</nav>
```

JS code:

```js
const wuiComponents = {};

const init = () => {
	["ring", "dualring", "spinner", "roller", "ellipsis", "grid"].forEach(style => {
		wuiComponents[style+"Loader"] = new WUILoader({
			selector: `.wui-loader.my-loader-${style}`,
			style,
			//size: 60
		});
		wuiComponents[style+"Loader"].init();
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-loader-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-loader-basic&lang=en).

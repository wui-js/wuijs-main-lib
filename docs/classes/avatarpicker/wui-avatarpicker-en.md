[English](wui-avatarpicker-en.md) | [Español](wui-avatarpicker-es.md)

[wuijs-main-lib](../../README-en.md)

# WUIAvatarpicker

Version: `0.2`

Component for the implementation of avatar image type data inputs, with file loading, drag framing and scaling, based on HTML elements `<input type="file">` and `<input type="range">`.

## Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/avatarpicker/wui-avatarpicker-0.2.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/avatarpicker/wui-avatarpicker-0.2.js) |
| CSS  | [src/wui-js/main/avatarpicker/wui-avatarpicker-0.2.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/avatarpicker/wui-avatarpicker-0.2.css) |
| CSS  | [src/wui-js/main/avatarpicker/wui-avatarpicker-0.2.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/avatarpicker/wui-avatarpicker-0.2.root.css) |

## Constructor

| Type            | Description |
| --------------- | ----------- |
| WUIAvatarpicker | `WUIAvatarpicker([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

## Properties

| Property            | Type       | Default value         | Description |
| ------------------- | ---------- | --------------------- | ----------- |
| selector            | `string`   | `".wui-avatarpicker"` | (get/set)<br><br>CSS selector defining the HTML container element of the object. If more than one element matches the selector, only the first match will be included. |
| name                | `string`   | `""`                  | (get/set)<br><br>Defines the name of the `<input type="file">` data input. It is applied when the object is initialized. |
| size                | `number`   | `180`                 | (get/set)<br><br>Size in pixels of the preview area, the circular mask and the menu width. It is applied through the `--wui-avatarpicker-preview-size` CSS variable on the HTML container element. |
| source              | `string`   | `""`                  | (get/set)<br><br>URL or *data URL* of the image to load. When assigned, the image is loaded into the preview area. |
| params              | `object`   | `{}`                  | (get/set)<br><br>Image framing parameters: `top`, `left`, `width`, `height` (in pixels) and `scale` (percentage). They are updated when the image is loaded, dragged or scaled, and reset when a new file is imported or the image is cleared. If assigned before loading an image through `source`, they are used to restore its framing. |
| minImageSize        | `number`   | `180`                 | (get/set)<br><br>Minimum size in pixels of the image width and height. If the image is smaller, it is cleared and `onInvalid` is run with the `"imageSize"` type. |
| maxFileSize         | `number`   | `10485760`            | (get/set)<br><br>Maximum size in bytes of the image file (10 MB by default). If the file is larger, it is cleared and `onInvalid` is run with the `"fileSize"` type. |
| enabled             | `boolean`  | `true`                | (get/set)<br><br>Defines if the data input is enabled. When disabled, the image cannot be imported, dragged or scaled. |
| onRequirePermission | `function` | `null`                | (get/set)<br><br>Function run when the import button is pressed, before opening the file explorer. The function receives as parameter a continuation function that must be called to open the explorer (e.g. after requesting permissions in native environments). |
| onInvalid           | `function` | `null`                | (get/set)<br><br>Function run when the file or the image is not valid. The function receives as parameters the error type (`"fileSize"` or `"imageSize"`), the obtained value and the limit value. |
| onLoad              | `function` | `null`                | (get/set)<br><br>Function run when the image is loaded and framed. The function receives as parameter the `HTMLImageElement` element of the image. |

## Methods

| Method        | Return type        | Description |
| ------------- | ------------------ | ----------- |
| getElement    | `HTMLDivElement`   | `getElement()`<br><br>Returns the HTML container element of the object. |
| getInputFile  | `HTMLInputElement` | `getInputFile()`<br><br>Returns the HTML element associated with the base data input `<input type="file">`. |
| getInputRange | `HTMLInputElement` | `getInputRange()`<br><br>Returns the HTML element associated with the scale control `<input type="range">`. |
| init          | `void`             | `init()`<br><br>Initializes the object. |
| explore       | `void`             | `explore()`<br><br>Opens the file explorer to select an image if the object is enabled. |
| scale         | `void`             | `scale(scale)`<br><br>Arguments:<br>**• scale:** `number`.<br><br>Scales the image to the given percentage of its natural size, keeping the preview area covered. |
| clear         | `void`             | `clear()`<br><br>Clears the image, the data input and the framing parameters. |
| destroy       | `void`             | `destroy()`<br><br>Destroyer. |

## CSS Variables

| Variable                                                 | Description |
| -------------------------------------------------------- | ----------- |
| `--wui-avatarpicker-preview-size`                        | Initial size of the preview area. The `size` property overrides it on the container element. |
| `--wui-avatarpicker-range-thumb-size`                    | Size of the scale control thumb. |
| `--wui-avatarpicker-range-thumb-bgcolor-out`             | Background color of the scale control thumb in normal state. |
| `--wui-avatarpicker-range-thumb-bgcolor-over`            | Background color of the scale control thumb in hover state. |
| `--wui-avatarpicker-range-thumb-bgcolor-disabled`        | Background color of the scale control thumb in disabled state. |
| `--wui-avatarpicker-range-trackbar-height`               | Height of the scale control track bar. |
| `--wui-avatarpicker-range-trackbar-borderwidth`          | Border width of the scale control track bar. |
| `--wui-avatarpicker-range-trackbar-bordercolor-out`      | Border color of the scale control track bar in normal state. |
| `--wui-avatarpicker-range-trackbar-bordercolor-focus`    | Border color of the scale control track bar in hover or focus state. |
| `--wui-avatarpicker-range-trackbar-bordercolor-disabled` | Border color of the scale control track bar in disabled state. |
| `--wui-avatarpicker-range-trackbar-bgcolor-out`          | Background color of the scale control track bar in normal state. |
| `--wui-avatarpicker-range-trackbar-bgcolor-focus`        | Background color of the scale control track bar in hover or focus state. |
| `--wui-avatarpicker-range-trackbar-bgcolor-disabled`     | Background color of the scale control track bar in disabled state. |
| `--wui-avatarpicker-button-bgcolor-out`                  | Color of the button icons in normal state. |
| `--wui-avatarpicker-button-bgcolor-over`                 | Color of the button icons in hover state. |
| `--wui-avatarpicker-button-bgcolor-disabled`             | Color of the button icons in disabled state. |
| `--wui-avatarpicker-button-importicon-src`               | Custom SVG image of the import button icon (`url()`). With value `none` the default icon is used. |
| `--wui-avatarpicker-button-clearicon-src`                | Custom SVG image of the clear button icon (`url()`). With value `none` the default icon is used. |

## Implementation

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

.my-avatarpicker {}

.output {
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/avatarpicker/wui-avatarpicker-0.2.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/avatarpicker/wui-avatarpicker-0.2.css">
<script type="text/javascript" src="/libraries/wui-js/main/avatarpicker/wui-avatarpicker-0.2.js"></script>
```

HTML code:

```html
<nav>
	<div class="wui-avatarpicker my-avatarpicker">
		<input type="file" accept="image/gif, image/jpeg, image/png">
	</div>
	<div class="output"></div>
</nav>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const avatarpicker = new WUIAvatarpicker({
		selector: ".wui-avatarpicker.my-avatarpicker",
		name: "myAvatar",
		//size: 180,
		//source: "",
		//params: {},
		//minImageSize: 180,
		maxFileSize: 2097152,
		//enabled: true,
		//onRequirePermission: null,
		onInvalid: (type, value, limit) => {
			output.textContent = `Invalid - type: ${type}, value: ${value}, limit: ${limit}`;
		},
		onLoad: (image) => {
			output.textContent = `Load - scale: ${avatarpicker.params.scale}%`;
		}
	});
	avatarpicker.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-avatarpicker-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-avatarpicker-basic&lang=en).

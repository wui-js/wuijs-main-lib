[English](wui-colorpicker-en.md) | [Español](wui-colorpicker-es.md)

[wuijs-main-lib](../../README-en.md)

# WUIColorpicker

Version: `0.14`

Component for the implementation of color picker type data inputs based on HTML element `<input type="color">`.

## Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/colorpicker/wui-colorpicker-0.14.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/colorpicker/wui-colorpicker-0.14.js) |
| CSS  | [src/wui-js/main/colorpicker/wui-colorpicker-0.14.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/colorpicker/wui-colorpicker-0.14.css) |
| CSS  | [src/wui-js/main/colorpicker/wui-colorpicker-0.14.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/colorpicker/wui-colorpicker-0.14.root.css) |

## Constructor

| Type           | Description |
| -------------- | ----------- |
| WUIColorpicker | `WUIColorpicker([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

## Properties

| Property      | Type       | Default value        | Description |
| ------------- | ---------- | -------------------- | ----------- |
| selector      | `string`   | `".wui-colorpicker"` | (get/set)<br><br>CSS selector that defines the HTML container element of the object. If more than one element matches the selector, only the first match will be included. |
| lang          | `string`   | `"en"`               | (get/set)<br><br>Component language.<br><br>Values:<br>• `"de"`, German.<br>• `"en"`, English.<br>• `"es"`, Spanish. |
| name          | `string`   | `""`                 | (get/set)<br><br>Defines the name of the `<input type="color">` data input. |
| value         | `string`   | `""`                 | (get/set)<br><br>Selected color in hexadecimal format or CSS color name. Returns the value in hexadecimal. |
| emptyValue    | `string`   | `"#000001"`          | (get/set)<br><br>Hexadecimal value representing an empty or unselected color. |
| texts         | `object`   | `{}`                 | (get/set)<br><br>Custom texts for the component buttons and messages. |
| openDirection | `string`   | `"down"`             | (get/set)<br><br>Opening direction of the color picker.<br><br>Values:<br>• `"up"`, upwards.<br>• `"down"`, downwards. |
| boxAlign      | `string`   | `"left"`             | (get/set)<br><br>Horizontal alignment of the calendar relative to the input.<br><br>Values:<br>• `"left"`, left.<br>• `"center"`, center.<br>• `"right"`, right. |
| hidden        | `boolean`  | `false`              | (get/set)<br><br>Defines whether the component is hidden. When the component is hidden, the value preview is not displayed and the color picker can only be accessed via the `open()` method. |
| enabled       | `boolean`  | `true`               | (get/set)<br><br>Defines whether the data input is enabled. |
| onOpen        | `function` | `null`               | (get/set)<br><br>Function to execute when the color picker is opened. Receives the current value as an argument. |
| onChange      | `function` | `null`               | (get/set)<br><br>Function to execute when the selected value changes. Receives the new value as an argument. |
| onClose       | `function` | `null`               | (get/set)<br><br>Function run when the color picker is closed. The function receives the current selected value as a parameter. |

## Methods

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

## CSS Variables

| Variable                                            | Description |
| --------------------------------------------------- | ----------- |
| `--wui-colorpicker-opener-iconsize`                 | Icon size of the colorpicker opener. |
| `--wui-colorpicker-opener-iconcolor-out`            | Icon color of the colorpicker opener in normal state. |
| `--wui-colorpicker-opener-iconcolor-over`           | Icon color of the colorpicker opener in hover state. |
| `--wui-colorpicker-opener-iconcolor-disabled`       | Icon color of the colorpicker opener in disabled state. |
| `--wui-colorpicker-opener-openicon-src`             | Source for the open icon<br>(format: `url()` or `none` for the default source). |
| `--wui-colorpicker-opener-closeicon-src`            | Source for the close icon<br>(format: `url()` or `none` for the default source). |
| `--wui-colorpicker-viewbutton-size`                 | Size of the color view button. |
| `--wui-colorpicker-viewbutton-bordercolor-out`      | Border color of the view button in normal state. |
| `--wui-colorpicker-viewbutton-bordercolor-over`     | Border color of the view button in hover state. |
| `--wui-colorpicker-viewbutton-bordercolor-disabled` | Border color of the view button in disabled state. |
| `--wui-colorpicker-viewbutton-bgcolor-out`          | Background color of the view button in normal state. |
| `--wui-colorpicker-viewbutton-bgcolor-over`         | Background color of the view button in hover state. |
| `--wui-colorpicker-viewbutton-bgcolor-disabled`     | Background color of the view button in disabled state. |
| `--wui-colorpicker-viewcolor-borderwidth`           | Border width of the color indicator in the view button. |
| `--wui-colorpicker-viewcolor-bordercolor`           | Border color of the color indicator in the view button. |
| `--wui-colorpicker-viewcolor-emptyicon-src`         | Source for the empty color preview icon<br>(format: `url()` or `none` for the default source). |
| `--wui-colorpicker-box-shadowcolor`                 | Shadow color of the color picker dropdown. |
| `--wui-colorpicker-box-shadowopacity`               | Opacity of the shadow of the color picker dropdown. |
| `--wui-colorpicker-box-borderradius`                | Border radius of the color picker dropdown. |
| `--wui-colorpicker-box-bordercolor`                 | Border color of the color picker dropdown. |
| `--wui-colorpicker-box-bgcolor`                     | Background color of the color picker dropdown. |
| `--wui-colorpicker-box-scroll-bgcolor-out`          | Scrollbar color of the picker dropdown in normal state. |
| `--wui-colorpicker-box-scroll-bgcolor-over`         | Scrollbar color of the picker dropdown in hover state. |
| `--wui-colorpicker-box-tab-textcolor-out`           | Text color of the picker tabs in normal state. |
| `--wui-colorpicker-box-tab-textcolor-selected`      | Text color of the picker tabs in selected state. |
| `--wui-colorpicker-box-option-bordercolor-out`      | Border color of the picker options in normal state. |
| `--wui-colorpicker-box-option-bordercolor-over`     | Border color of the picker options in hover state. |
| `--wui-colorpicker-box-option-bgcolor-out`          | Background color of the picker options in normal state. |
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

## Implementation

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
	--wui-colorpicker-box-scroll-bgcolor-out: rgb(from #353a40 r g b / 40%);
	--wui-colorpicker-box-scroll-bgcolor-over: rgb(from #353a40 r g b / 70%);
	--wui-colorpicker-box-tab-textcolor-out: #2d3a47;
	--wui-colorpicker-box-tab-textcolor-selected: #1e90ff;
	--wui-colorpicker-box-option-bordercolor-out: #f0f0f3;
	--wui-colorpicker-box-option-bordercolor-over: #f0f0f3;
	--wui-colorpicker-box-option-bgcolor-out: transparent;
	--wui-colorpicker-box-option-bgcolor-over: #f6f6f6;
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

.my-colorpicker {}

.output {
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/colorpicker/wui-colorpicker-0.14.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/colorpicker/wui-colorpicker-0.14.css">
<script type="text/javascript" src="/libraries/wui-js/main/colorpicker/wui-colorpicker-0.14.js"></script>
```

HTML code:

```html
<nav>
	<div class="wui-colorpicker my-colorpicker">
		<input type="color" name="myColor">
	</div>
	<div class="output"></div>
</nav>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const colorpicker = new WUIColorpicker({
		selector: ".wui-colorpicker.my-colorpicker",
		//lang: "en",
		value: "#1e90ff",
		//emptyValue: "#000001",
		//texts: {},
		//openDirection: "down",
		//boxAlign: "left",
		//hidden: false,
		//enabled: true,
		onOpen: (value) => {
			output.textContent = `Opened - value: ${value}`;
		},
		onChange: (value) => {
			output.textContent = `Changed - value: ${value}`;
		},
		onClose: (value) => {
			output.textContent = `Closed - value: ${value}`;
		}
	});
	colorpicker.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-colorpicker-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-colorpicker-basic&lang=en).

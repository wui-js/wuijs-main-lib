[English](wui-timepicker-en.md) | [Español](wui-timepicker-es.md)

[wuijs-main-lib](../../README-en.md)

# WUITimepicker

Version: `0.13`

Component for the implementation of time type data inputs based on HTML element `<input type="time">`.

## Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/timepicker/wui-timepicker-0.13.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/timepicker/wui-timepicker-0.13.js) |
| CSS  | [src/wui-js/main/timepicker/wui-timepicker-0.13.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/timepicker/wui-timepicker-0.13.css) |
| CSS  | [src/wui-js/main/timepicker/wui-timepicker-0.13.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/timepicker/wui-timepicker-0.13.root.css) |

## Constructor

| Type          | Description |
| ------------- | ----------- |
| WUITimepicker | `WUITimepicker([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

## Properties

| Property      | Type       | Default value        | Description |
| ------------- | ---------- | -------------------- | ----------- |
| selector      | `string`   | `".wui-timepicker"`  | (get/set)<br><br>CSS selector that defines the HTML container element of the object. If more than one element matches the selector, only the first match will be included. |
| lang          | `string`   | `"en"`               | (get/set)<br><br>Component language.<br><br>Values:<br>• `"de"`, German.<br>• `"en"`, English.<br>• `"es"`, Spanish. |
| name          | `string`   | `""`                 | (get/set)<br><br>Defines the name of the `<input type="time">` data input. |
| value         | `string`   | `""`                 | (get/set)<br><br>Selected time in `hh:mm` format (24 hours). |
| min           | `string`   | `"00:00"`            | (get/set)<br><br>Minimum allowed time in `hh:mm` format. |
| max           | `string`   | `"23:59"`            | (get/set)<br><br>Maximum allowed time in `hh:mm` format. |
| texts         | `object`   | `{}`                 | (get/set)<br><br>Custom texts for the component buttons and messages. |
| openDirection | `string`   | `"down"`             | (get/set)<br><br>Opening direction of the time picker.<br><br>Values:<br>• `"up"`, upwards.<br>• `"down"`, downwards. |
| boxAlign      | `string`   | `"left"`             | (get/set)<br><br>Horizontal alignment of the calendar relative to the input.<br><br>Values:<br>• `"left"`, left.<br>• `"center"`, center.<br>• `"right"`, right. |
| hidden        | `boolean`  | `false`              | (get/set)<br><br>Defines whether the component is hidden. When the component is hidden, the value preview is not displayed and the time picker can only be accessed via the `open()` method. |
| enabled       | `boolean`  | `true`               | (get/set)<br><br>Defines whether the input is enabled. |
| onOpen        | `function` | `null`               | (get/set)<br><br>Function run when the time picker is opened. The function receives the current selected value as a parameter. |
| onChange      | `function` | `null`               | (get/set)<br><br>Function run when the selected value changes. The function receives the new selected value as a parameter. |
| onClose       | `function` | `null`               | (get/set)<br><br>Function run when the time picker is closed. The function receives the current selected value as a parameter. |

## Methods

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

## CSS Variables

| Variable                                         | Description |
| ------------------------------------------------ | ----------- |
| `--wui-timepicker-borderradius`                  | Border radius of the timepicker container. |
| `--wui-timepicker-borderwidth`                   | Border width of the timepicker container. |
| `--wui-timepicker-bordercolor-out`               | Border color of the timepicker container in normal state. |
| `--wui-timepicker-bordercolor-over`              | Border color of the timepicker container in hover state. |
| `--wui-timepicker-bordercolor-disabled`          | Border color of the timepicker container in disabled state. |
| `--wui-timepicker-bgcolor`                       | Background color of the timepicker container. |
| `--wui-timepicker-opener-iconsize`               | Icon size of the timepicker opener. |
| `--wui-timepicker-opener-iconcolor-out`          | Icon color of the timepicker opener in normal state. |
| `--wui-timepicker-opener-iconcolor-over`         | Icon color of the timepicker opener in hover state. |
| `--wui-timepicker-opener-iconcolor-disabled`     | Icon color of the timepicker opener in disabled state. |
| `--wui-timepicker-opener-openicon-src`           | Image source of the timepicker open icon<br>(format: `url()` or `none` for the default source). |
| `--wui-timepicker-opener-closeicon-src`          | Image source of the timepicker close icon<br>(format: `url()` or `none` for the default source). |
| `~~--wui-timepicker-viewinput-paddingleft~~`     | Left padding of the view input fields. |
| `--wui-timepicker-viewinput-leftpadding`         | Left padding of the view input fields. |
| `--wui-timepicker-viewinput-textcolor-out`       | Text color of the view input fields in normal state. |
| `--wui-timepicker-viewinput-textcolor-over`      | Text color of the view input fields in hover state. |
| `--wui-timepicker-viewinput-textcolor-disabled`  | Text color of the view input fields in disabled state. |
| `--wui-timepicker-box-shadowcolor`               | Shadow color of the time picker dropdown. |
| `--wui-timepicker-box-shadowopacity`             | Opacity of the shadow of the time picker dropdown. |
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
	margin: 10px;
	align-items: center;
	gap: 10px;
}

.my-timepicker {
	max-width: 90px;
}

.output {
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/timepicker/wui-timepicker-0.13.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/timepicker/wui-timepicker-0.13.css">
<script type="text/javascript" src="/libraries/wui-js/main/timepicker/wui-timepicker-0.13.js"></script>
```

HTML code:

```html
<nav>
	<div class="wui-timepicker my-timepicker">
		<input type="time" name="myTime">
	</div>
	<div class="output"></div>
</nav>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const timepicker = new WUITimepicker({
		selector: ".wui-timepicker.my-timepicker",
		//lang: "en",
		value: "10:30",
		//min: "00:00",
		//max: "23:59",
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
	timepicker.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-timepicker-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-timepicker-basic&lang=en).

[English](wui-selectpicker-en.md) | [Español](wui-selectpicker-es.md)

[wuijs-main-lib](../../README-en.md)

# WUISelectpicker

Version: `0.15`

Component for the implementation of multiple or exclusive selection list data inputs based on HTML element `<select>`.

## Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/selectpicker/wui-selectpicker-0.15.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/selectpicker/wui-selectpicker-0.15.js) |
| CSS  | [src/wui-js/main/selectpicker/wui-selectpicker-0.15.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/selectpicker/wui-selectpicker-0.15.css) |
| CSS  | [src/wui-js/main/selectpicker/wui-selectpicker-0.15.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/selectpicker/wui-selectpicker-0.15.root.css) |

## Constructor

| Type            | Description |
| --------------- | ----------- |
| WUISelectpicker | `WUISelectpicker([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

## Properties

| Property       | Type       | Default value         | Description |
| -------------- | ---------- | --------------------- | ----------- |
| selector       | `string`   | `".wui-selectpicker"` | (get/set)<br><br>CSS selector that defines the HTML container element of the object. If more than one element matches the selector, only the first match will be included. |
| lang           | `string`   | `"en"`                | (get/set)<br><br>Component language.<br><br>Values:<br>• `"de"`, German.<br>• `"en"`, English.<br>• `"es"`, Spanish. |
| name           | `string`   | `""`                  | (get/set)<br><br>Defines the name of the `<select>` data input. |
| value          | `string`   | `""`                  | (get/set)<br><br>Value of the initial options selection. |
| options        | `array`    | `[]`                  | (get/set)<br><br>Array of options for the selector according to the **Menu Options** definition. |
| text           | `string`   | `""`                  | (get)<br><br>Text of the initial options selection. |
| texts          | `object`   | `{}`                  | (get/set)<br><br>Custom texts for component buttons and messages. |
| openDirection  | `string`   | `"down"`              | (get/set)<br><br>Opening direction of the selector.<br><br>Values:<br>• `"up"`, upwards.<br>• `"down"`, downwards. |
| boxAlign       | `string`   | `"center"`            | (get/set)<br><br>Horizontal alignment of the selector box relative to the data entry.<br><br>Values:<br>• `"left"`, left.<br>• `"center"`, center.<br>• `"right"`, right. |
| required       | `boolean`  | `false`               | (get/set)<br><br>Defines if the selection of options is mandatory. Property disabled if `multiple` is `true`. |
| hidden         | `boolean`  | `false`               | (get/set)<br><br>Defines whether the component is in hidden mode. When the component is hidden, the value preview is not displayed and the selector can only be accessed via the `open()` method. |
| autochange     | `boolean`  | `true`                | (get/set)<br><br>Defines whether the selector executes the `onChange` property when an option changes or waits until the end of the process. If this property is false and the `hidden` property is enabled or the modal is being displayed in movable mode (on a screen with a width less than or equal to 767px), the "cancel" button will only close the modal; otherwise, the "cancel" button will restore the selector's original value when it is opened. |
| multiple       | `boolean`  | `false`               | (get/set)<br><br>Defines if the selector allows multiple selection. |
| separatorValue | `string`   | `","`                 | (get/set)<br><br>Character separator of values ​​in case of multiple selection. |
| separatorText  | `string`   | `", "`                | (get/set)<br><br>Character separator of texts in case of multiple selection. |
| filterable     | `boolean`  | `true`                | (get/set)<br><br>Defines if the selector allows filtering options by text input. |
| viewicon       | `boolean`  | `false`               | (get/set)<br><br>Defines if the selector shows the icon of the selected option. Property enabled if `multiple` and `filterable` are `false`. |
| viewtext       | `boolean`  | `true`                | (get/set)<br><br>Defines if the selector shows the text of the selected option. Property disabled if `multiple` and `filterable` are `false`. |
| enabled        | `boolean`  | `true`                | (get/set)<br><br>Defines whether the data input is enabled. |
| onStartOpen    | `function` | `null`                | (get/set)<br><br>Function run when the selector starts opening. If it returns exactly `false`, the opening is cancelled. |
| onOpen         | `function` | `null`                | (get/set)<br><br>Function run when the selector is opened. The function receives the current selected value as a parameter. |
| onChange       | `function` | `null`                | (get/set)<br><br>Function run when the selected value changes. The function receives the new selected value as a parameter. |
| onClose        | `function` | `null`                | (get/set)<br><br>Function run when the selector is closed. The function receives the current selected value as a parameter. |

## Menu Options

| Property  | Type      | Default value | Description |
| --------- | --------- | ------------- | ----------- |
| ~~icon~~  | `string`  | `undefined`   | CSS classes of the option icon. **Deprecated**, use `iconClass` instead. |
| iconClass | `string`  | `undefined`   | CSS classes of the option icon. |
| text      | `string`  | `""`          | Option text. |
| value     | `string`  | `""`          | Option value. |
| selected  | `boolean` | `false`       | Option selection state. |
| hidden    | `boolean` | `false`       | Defines whether the option is hidden from the list. |
| enabled   | `boolean` | `true`        | Defines whether the option is enabled. |

## Methods

| Method          | Return type          | Description |
| --------------- | -------------------- | ----------- |
| getElement      | `HTMLElement`        | `getElement()`<br><br>Returns the HTML container element of the object. |
| getBox          | `HTMLElement`        | `getBox()`<br><br>Returns the HTML element of the dropdown box. |
| getViewElements | `Array<HTMLElement>` | `getViewElements()`<br><br>Returns an array of the HTML elements that are part of the value display. |
| getInput        | `HTMLElement`        | `getInput()`<br><br>Returns the HTML element associated with the base data input `<select>`. |
| init            | `void`               | `init()`<br><br>Initializes the object. |
| addOption       | `void`               | `addOption(option)`<br><br>Arguments:<br>**• option:** `object`.<br><br>Add an option to the list, as defined by **Menu Options**. |
| hiddenOption    | `void`               | `hiddenOption(index[, hidden])`<br><br>Arguments:<br>**• index:** `number`<br>**• hidden:** `boolean` (optional, default `true`)<br><br>Hides (`true`) or shows (`false`) the option at position `index` of the list, both in the base `<select>` element and in the selector's option list. |
| enabledOption   | `void`               | `enabledOption(index[, enabled])`<br><br>Arguments:<br>**• index:** `number`<br>**• enabled:** `boolean` (optional, default `true`)<br><br>Enables (`true`) or disables (`false`) the option at position `index` of the list, both in the base `<select>` element and in the selector's option list. |
| ~~loadOptions~~ | `void`               | `loadOptions(options)` **Deprecated**, use `refresh()` instead.<br><br>Arguments:<br>**• options:** `array`.<br><br>Loads an array of options, clearing previously existing ones. |
| clearOptions    | `void`               | `clearOptions()`<br><br>Removes all options from the list. |
| refresh         | `void`               | `refresh(options)`<br><br>Arguments:<br>**• options:** `array`.<br><br>Loads an array of options, clearing previously existing ones. |
| open            | `void`               | `open()`<br><br>Opens the selector. In desktop mode, automatically reduces the visible option count so the list fits within the nearest ancestor that clips content (`overflow: hidden`, `auto`, `scroll` or `clip`), in addition to the viewport boundary. |
| close           | `void`               | `close()`<br><br>Closes the selector. |
| toggle          | `void`               | `toggle()`<br><br>Toggles the open state of the selector. |
| cancel          | `void`               | `cancel()`<br><br>Cancels the current selection and reverts to the previous value, closing the selector. |
| accept          | `void`               | `accept()`<br><br>Accepts the current selection and closes the selector. |
| isOpen          | `boolean`            | `isOpen()`<br><br>Returns whether the selector is open. |
| isEmpty         | `boolean`            | `isEmpty()`<br><br>Returns whether the selector has no options selected. |
| isValid         | `boolean`            | `isValid()`<br><br>Returns if the entered value corresponds to a valid option. |
| destroy         | `void`               | `destroy()`<br><br>Destroyer. |

## CSS Variables

| Variable                                             | Description |
| ---------------------------------------------------- | ----------- |
| `--wui-selectpicker-borderradius`                    | Border radius of the selectpicker container. |
| `--wui-selectpicker-borderwidth`                     | Border width of the selectpicker container. |
| `--wui-selectpicker-bordercolor-out`                 | Border color of the selectpicker container in normal state. |
| `--wui-selectpicker-bordercolor-over`                | Border color of the selectpicker container in hover state. |
| `--wui-selectpicker-bordercolor-disabled`            | Border color of the selectpicker container in disabled state. |
| `--wui-selectpicker-bgcolor`                         | Background color of the selectpicker container. |
| `--wui-selectpicker-opener-iconsize`                 | Icon size of the selectpicker opener. |
| `--wui-selectpicker-opener-iconcolor-out`            | Icon color of the selectpicker opener in normal state. |
| `--wui-selectpicker-opener-iconcolor-over`           | Icon color of the selectpicker opener in hover state. |
| `--wui-selectpicker-opener-iconcolor-disabled`       | Icon color of the selectpicker opener in disabled state. |
| `--wui-selectpicker-opener-openicon-src`             | Image source of the selectpicker open icon<br>(format: `url()` or `none` for the default source). |
| `--wui-selectpicker-opener-closeicon-src`            | Image source of the selectpicker close icon<br>(format: `url()` or `none` for the default source). |
| `--wui-selectpicker-viewicon-iconsize`               | Size of the view icon. |
| `--wui-selectpicker-viewicon-icongap`                | Gap between the text of the selected option and the view icon. |
| `--wui-selectpicker-viewicon-iconcolor`              | Color of the icon of the selected option. |
| `~~--wui-selectpicker-viewinput-paddingleft~~`       | Left padding of the view input field. |
| `--wui-selectpicker-viewinput-leftpadding`           | Left padding of the view input field. |
| `--wui-selectpicker-viewinput-textcolor-out`         | Text color of the view input field in normal state. |
| `--wui-selectpicker-viewinput-textcolor-over`        | Text color of the view input field in hover state. |
| `--wui-selectpicker-viewinput-textcolor-disabled`    | Text color of the view input field in disabled state. |
| `--wui-selectpicker-box-shadowcolor`                 | Shadow color of the dropdown box. |
| `--wui-selectpicker-box-shadowopacity`               | Opacity of the shadow of the dropdown box. |
| `--wui-selectpicker-box-width`                       | Width of the dropdown box. |
| `--wui-selectpicker-box-borderradius`                | Border radius of the dropdown box. |
| `--wui-selectpicker-box-bordercolor`                 | Border color of the dropdown box. |
| `--wui-selectpicker-box-bgcolor`                     | Background color of the dropdown box. |
| `--wui-selectpicker-box-scroll-bgcolor-out`          | Scrollbar color of the dropdown box in normal state. |
| `--wui-selectpicker-box-scroll-bgcolor-over`         | Scrollbar color of the dropdown box in hover state. |
| `--wui-selectpicker-box-option-borderradius`         | Border radius of the dropdown box options. |
| `--wui-selectpicker-box-option-bordercolor-out`      | Border color of the dropdown box options in normal state. |
| `--wui-selectpicker-box-option-bordercolor-over`     | Border color of the dropdown box options in hover state. |
| `--wui-selectpicker-box-option-bgcolor-out`          | Background color of the dropdown box options in normal state. |
| `--wui-selectpicker-box-option-bgcolor-over`         | Background color of the dropdown box options in hover state. |
| `--wui-selectpicker-box-option-iconsize`             | Icon size of the dropdown box options. |
| `--wui-selectpicker-box-option-iconopacity-out`      | Icon opacity of the dropdown box options in normal state. |
| `--wui-selectpicker-box-option-iconopacity-over`     | Icon opacity of the dropdown box options in hover state. |
| `--wui-selectpicker-box-option-iconopacity-selected` | Icon opacity of the dropdown box options in selected state. |
| `--wui-selectpicker-box-option-iconopacity-disabled` | Icon opacity of the dropdown box options in disabled state. |
| `--wui-selectpicker-box-option-iconcolor-out`        | Icon color of the dropdown box options in normal state. |
| `--wui-selectpicker-box-option-iconcolor-over`       | Icon color of the dropdown box options in hover state. |
| `--wui-selectpicker-box-option-iconcolor-selected`   | Icon color of the dropdown box options in selected state. |
| `--wui-selectpicker-box-option-iconcolor-disabled`   | Icon color of the dropdown box options in disabled state. |
| `--wui-selectpicker-box-option-checkicon-src`        | Image source of the option check icon<br>(format: `url()` or `none` for the default source). |
| `--wui-selectpicker-box-option-textcolor-empty`      | Text color of empty dropdown box options. |
| `--wui-selectpicker-box-option-textcolor-out`        | Text color of the dropdown box options in normal state. |
| `--wui-selectpicker-box-option-textcolor-over`       | Text color of the dropdown box options in hover state. |
| `--wui-selectpicker-box-option-textcolor-selected`   | Text color of the dropdown box options in selected state. |
| `--wui-selectpicker-box-option-textcolor-disabled`   | Text color of the dropdown box options in disabled state. |
| `--wui-selectpicker-box-button-maxwidth`             | Maximum width of the dropdown box footer buttons (applies in normal mode with `hidden: true`). |
| `--wui-selectpicker-box-button-height`               | Height of the dropdown box footer buttons (applies in normal mode with `hidden: true`). |
| `--wui-selectpicker-box-button-borderwidth`          | Border width of the dropdown box footer buttons (applies in normal mode with `hidden: true`). |
| `--wui-selectpicker-box-button-bordercolor-out`      | Border color of the dropdown box footer buttons in normal state (applies in normal mode with `hidden: true`). |
| `--wui-selectpicker-box-button-bordercolor-over`     | Border color of the dropdown box footer buttons in hover state (applies in normal mode with `hidden: true`). |
| `--wui-selectpicker-box-button-bgcolor-out`          | Background color of the dropdown box footer buttons in normal state (applies in normal mode with `hidden: true`). |
| `--wui-selectpicker-box-button-bgcolor-over`         | Background color of the dropdown box footer buttons in hover state (applies in normal mode with `hidden: true`). |
| `--wui-selectpicker-box-button-horizpadding`         | Horizontal padding of the dropdown box footer buttons (applies in normal mode with `hidden: true`). |
| `--wui-selectpicker-box-button-vertpadding`          | Vertical padding of the dropdown box footer buttons (applies in normal mode with `hidden: true`). |
| `--wui-selectpicker-box-button-textcolor-out`        | Text color of the dropdown box footer buttons in normal state. |
| `--wui-selectpicker-box-button-textcolor-over`       | Text color of the dropdown box footer buttons in hover state. |
| `--wui-selectpicker-mobile-overlay-bgcolor`          | Background color of the overlay in mobile mode (screen width less than 768px). |
| `--wui-selectpicker-mobile-box-width`                | Width of the dropdown box in mobile mode (screen width less than 768px). |
| `--wui-selectpicker-mobile-box-borderradius`         | Border radius of the dropdown box in mobile mode (screen width less than 768px). |
| `--wui-selectpicker-mobile-box-button-bordercolor`   | Border color of the dropdown box buttons in mobile mode. |

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

.output {
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/selectpicker/wui-selectpicker-0.15.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/selectpicker/wui-selectpicker-0.15.css">
<script type="text/javascript" src="/libraries/wui-js/main/selectpicker/wui-selectpicker-0.15.js"></script>
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
	<div class="output"></div>
</nav>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const selectpicker = new WUISelectpicker({
		selector: ".wui-selectpicker.my-selectpicker",
		//lang: "en",
		//options: [],
		value: "2",
		//texts: {},
		//openDirection: "down",
		//boxAlign: "center",
		//required: true,
		//hidden: false,
		//autochange: true,
		//multiple: false,
		//separatorValue: ",",
		//separatorText: ", ",
		//filterable: true,
		//viewicon: false,
		//viewtext: true,
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
	selectpicker.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-selectpicker-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-selectpicker-basic&lang=en).

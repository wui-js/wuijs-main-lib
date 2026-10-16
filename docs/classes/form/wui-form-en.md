[English](wui-form-en.md) | [Español](wui-form-es.md)

[wuijs-main-lib](../../README-en.md)

# WUIForm

Version: `0.15`

Component for the implementation of data forms. This component allows the implementation of HTML data input elements such as `<input>`, `<select>`, and `<textarea>`, and WUI library objects such as `WUISelectpicker`, `WUIDatepicker`, `WUITimepicker`, `WUIColorpicker`, `WUISwitch`, `WUIIntensity`, and `WUIButton`.

## Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/form/wui-form-0.15.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/form/wui-form-0.15.js) |
| CSS  | [src/wui-js/main/form/wui-form-0.15.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/form/wui-form-0.15.css) |
| CSS  | [src/wui-js/main/form/wui-form-0.15.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/form/wui-form-0.15.root.css) |

## Constructor

| Type    | Description |
| ------- | ----------- |
| WUIForm | `WUIForm([properties])`<br><br>Arguments:<br>**• properties:** `object` |

## Properties

| Property          | Type       | Default value | Description |
| ----------------- | ---------- | ------------- | ----------- |
| selector          | `string`   | `".wui-form"` | (get/set)<br><br>CSS selector that defines the HTML container element of the form. If more than one element matches the selector, only the first match will be included. |
| bodyItems         | `array`    | `[]`          | (get/set)<br><br>Array of field sets (`{ items: [...] }`) that declaratively describe the form body. Used as the default value of `buildHtml()`'s `bodyItems` parameter. |
| footerItems       | `array`    | `[]`          | (get/set)<br><br>Array of button/link descriptors for the form footer. Used as the default value of `buildHtml()`'s `footerItems` parameter. |
| fieldStyle        | `string`   | `"fill"`      | (get/set)<br><br>Form field style. Adds the corresponding CSS classes to the main form element when `init()` is executed.<br><br>Values:<br>• `"fill"`, fill (`fill-fields`).<br>• `"roundfill"`, fill with rounded corners (`fill-fields round-fields`).<br>• `"border"`, border (`border-fields`).<br>• `"roundborder"`, border with rounded corners (`border-fields round-fields`).<br>• `"line"`, bottom line (`line-fields`). |
| headerButtonStyle | `string`   | `"none"`      | (get/set)<br><br>Style of the form header (`.header`) buttons.<br><br>Values:<br>• `"none"`, no style.<br>• `"join"`, joins the contiguous buttons (adds the `join-buttons` CSS class to `.header` when `init()` is executed). |
| bodyButtonStyle   | `string`   | `"none"`      | (get/set)<br><br>Style of the form body (`.body`) buttons.<br><br>Values:<br>• `"none"`, no style.<br>• `"join"`, joins the contiguous buttons (adds the `join-buttons` CSS class to `.body` when `init()` is executed). |
| footerButtonStyle | `string`   | `"none"`      | (get/set)<br><br>Style of the form footer (`.footer`) buttons.<br><br>Values:<br>• `"none"`, no style.<br>• `"join"`, joins the contiguous buttons (adds the `join-buttons` CSS class to `.footer` when `init()` is executed). |
| submit            | `boolean`  | `true`        | (get/set)<br><br>Defines whether the form should be submitted natively when the submit event occurs. |
| onScrolling       | `function` | `null`        | (get/set)<br><br>Function run when the content of the form body is scrolled. |
| onSubmit          | `function` | `null`        | (get/set)<br><br>Function run when the form is submitted. |

## Methods

| Method        | Return type                                                | Description |
| ------------- | ---------------------------------------------------------- | ----------- |
| getElement    | `HTMLElement`                                              | `getElement()`<br><br>Returns the HTML container element of the form. |
| getForm       | `HTMLFormElement`                                          | `getForm()`<br><br>Returns the HTML `<form>` element. |
| getFormData   | `FormData`                                                 | `getFormData()`<br><br>Returns the form data. |
| getHeader     | `HTMLElement`                                              | `getHeader()`<br><br>Returns the HTML element of the form header section. |
| getBody       | `HTMLElement`                                              | `getBody()`<br><br>Returns the HTML element of the form body section. |
| getFooter     | `HTMLElement`                                              | `getFooter()`<br><br>Returns the HTML element of the form footer section. |
| getField      | `HTMLElement`                                              | `getField(name[, position])`<br><br>Arguments:<br>**• name:** `string`<br>**• position:** `number` (optional, default `0`)<br><br>Returns the HTML element containing the field identified by the input field name. For array-type inputs (`name="...[]"`), `position` selects which occurrence to target. |
| getIcon       | `HTMLElement`                                              | `getIcon(name[, position])`<br><br>Arguments:<br>**• name:** `string`<br>**• position:** `number` (optional, default `0`)<br><br>Returns the HTML element of the field icon section identified by the input field name. For array-type inputs (`name="...[]"`), `position` selects which occurrence to target. |
| getRightIcon  | `HTMLElement`                                              | `getRightIcon(name[, position])`<br><br>Arguments:<br>**• name:** `string`<br>**• position:** `number` (optional, default `0`)<br><br>Returns the HTML element of the field's trailing icon section identified by the input field name. For array-type inputs (`name="...[]"`), `position` selects which occurrence to target. |
| getLabel      | `HTMLLabelElement`                                         | `getLabel(name[, position])`<br><br>Arguments:<br>**• name:** `string`<br>**• position:** `number` (optional, default `0`)<br><br>Returns the HTML element of the section of the field label identified by the input field name. For array-type inputs (`name="...[]"`), `position` selects which occurrence to target. |
| getInput      | `HTMLInputElement\|HTMLSelectElement\|HTMLTextAreaElement` | `getInput(name[, position])`<br><br>Arguments:<br>**• name:** `string`<br>**• position:** `number` (optional, default `0`)<br><br>Returns the HTML element of the input field section identified by the input field name. For array-type inputs (`name="...[]"`), `position` selects which occurrence to target. |
| getData       | `HTMLDataElement`                                          | `getData(name[, position])`<br><br>Arguments:<br>**• name:** `string`<br>**• position:** `number` (optional, default `0`)<br><br>Returns the HTML element of the data section of the field identified by the style class name. For array-type inputs (`name="...[]"`), `position` selects which occurrence to target. |
| getText       | `HTMLElement`                                              | `getText(name[, position])`<br><br>Arguments:<br>**• name:** `string`<br>**• position:** `number` (optional, default `0`)<br><br>Returns the auxiliary HTML text element identified by the style class name. For array-type inputs (`name="...[]"`), `position` selects which occurrence to target. |
| getValue      | `string`                                                   | `getValue(name[, position])`<br><br>Arguments:<br>**• name:** `string`<br>**• position:** `number` (optional, default `0`)<br><br>Returns the value of the input field identified by the input field name or the value of the output field identified by the style class name. For array-type inputs (`name="...[]"`), `position` selects which occurrence to target. |
| setType       | `void`                                                     | `setType(name, type[, position])`<br><br>Arguments:<br>**• name:** `string`<br>**• type:** `string`<br>**• position:** `number` (optional, default `0`)<br><br>Sets the type of the input field identified by the input field name using the `type` attribute of the `<input>` tag. For array-type inputs (`name="...[]"`), `position` selects which occurrence to target. |
| setValue      | `HTMLInputElement\|HTMLSelectElement\|HTMLTextAreaElement` | `setValue(name, value[, position])`<br><br>Arguments:<br>**• name:** `string`<br>**• value:** `string`<br>**• position:** `number` (optional, default `0`)<br><br>Sets the value of the input field identified by the input field name. For array-type inputs (`name="...[]"`), `position` selects which occurrence to target. |
| setData       | `HTMLDataElement`                                          | `setData(name, value[, position])`<br><br>Arguments:<br>**• name:** `string`<br>**• value:** `mixed`<br>**• position:** `number` (optional, default `0`)<br><br>Sets the value of the HTML element in the data section of the field identified by the style class name. For array-type inputs (`name="...[]"`), `position` selects which occurrence to target. |
| setText       | `HTMLElement`                                              | `setText(name, value[, position])`<br><br>Arguments:<br>**• name:** `string`<br>**• value:** `string`<br>**• position:** `number` (optional, default `0`)<br><br>Sets the content of the auxiliary text HTML element identified by the style class name. For array-type inputs (`name="...[]"`), `position` selects which occurrence to target. |
| setEnabled    | `void`                                                     | `setEnabled(name, value[, position])`<br><br>Arguments:<br>**• name:** `string`<br>**• value:** `boolean`<br>**• position:** `number` (optional, default `0`)<br><br>Enables or disables the field identified by the input field name. For array-type inputs (`name="...[]"`), `position` selects which occurrence to target. |
| buildHtml     | `void`                                                     | `buildHtml([{ bodyItems, footerItems }])`<br><br>Arguments:<br>**• bodyItems:** `array` (optional, default `this.bodyItems`)<br>**• footerItems:** `array` (optional, default `this.footerItems`)<br><br>Builds the form body and footer HTML from declarative descriptors, without instantiating each field's WUI/JS object (that is left to the consumer, over the already-built HTML). Called automatically from `init()`. See [Declarative building with `buildHtml()`](#wui-form-buildhtml) below. |
| reset         | `void`                                                     | `reset()`<br><br>Resets the form values. |
| focus         | `void`                                                     | `focus(name[, position])`<br><br>Arguments:<br>**• name:** `string`<br>**• position:** `number` (optional, default `0`)<br><br>Sets the focus to the field identified by the input field name. For array-type inputs (`name="...[]"`), `position` selects which occurrence to target. |
| blur          | `void`                                                     | `blur(name[, position])`<br><br>Arguments:<br>**• name:** `string`<br>**• position:** `number` (optional, default `0`)<br><br>Removes focus from the field identified by the input field name. For array-type inputs (`name="...[]"`), `position` selects which occurrence to target. |
| closeKeyboard | `void`                                                     | `closeKeyboard()`<br><br>Blurs the currently focused element, closing the on-screen keyboard on mobile devices. |
| change        | `void`                                                     | `change(name[, position])`<br><br>Arguments:<br>**• name:** `string`<br>**• position:** `number` (optional, default `0`)<br><br>Triggers the change event in the field identified by the input field name. For array-type inputs (`name="...[]"`), `position` selects which occurrence to target. |
| autosize      | `void`                                                     | `autosize(name[, position])`<br><br>Arguments:<br>**• name:** `string`<br>**• position:** `number` (optional, default `0`)<br><br>Automatically adjusts the height of a text field `<textarea>` identified by the input field name. For array-type inputs (`name="...[]"`), `position` selects which occurrence to target. |
| destroy       | `void`                                                     | `destroy()`<br><br>Destroyer. |

## CSS Variables

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
| `--wui-form-label-inline-right`                  | Distance of the label from the right side of the field edge in `inline` mode. |
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
| `--wui-form-date-opener-iconsize`                | Icon size for the date picker opener. |
| `--wui-form-date-opener-iconcolor-out`           | Icon color for the date picker opener in normal state. |
| `--wui-form-date-opener-iconcolor-over`          | Icon color for the date picker opener in hover state. |
| `--wui-form-date-opener-iconcolor-disabled`      | Icon color for the date picker opener in disabled state. |
| `--wui-form-date-opener-openicon-src`            | Source for the date picker open icon<br>(format: `url()` or `none` for the default source). |
| `--wui-form-date-opener-closeicon-src`           | Source for the date picker close icon<br>(format: `url()` or `none` for the default source). |
| `--wui-form-time-opener-iconsize`                | Icon size for the time picker opener. |
| `--wui-form-time-opener-iconcolor-out`           | Icon color for the time picker opener in normal state. |
| `--wui-form-time-opener-iconcolor-over`          | Icon color for the time picker opener in hover state. |
| `--wui-form-time-opener-iconcolor-disabled`      | Icon color for the time picker opener in disabled state. |
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
| `--wui-form-select-opener-iconsize`              | Icon size for the select dropdown opener. |
| `--wui-form-select-opener-iconcolor-out`         | Icon color for the select opener in normal state. |
| `--wui-form-select-opener-iconcolor-over`        | Icon color for the select opener in hover state. |
| `--wui-form-select-opener-iconcolor-disabled`    | Icon color for the select opener in disabled state. |
| `--wui-form-select-opener-openicon-src`          | Source for the select open icon<br>(format: `url()` or `none` for the default source). |
| `--wui-form-select-opener-closeicon-src`         | Source for the select close icon<br>(format: `url()` or `none` for the default source). |
| `--wui-form-data-textcolor-out`                  | Text color of data elements in normal state. |
| `--wui-form-data-textcolor-disabled`             | Text color of data elements in disabled state. |
| `--wui-form-progress-borderwidth`                | Border width of progress bars. |
| `--wui-form-progress-bordercolor`                | Border color of progress bars. |
| `--wui-form-progress-valuecolor`                 | Color of the progress bar value/fill. In indeterminate bars (without the `value` attribute), color of the center of the animated gradient. |
| `--wui-form-progress-bgcolor`                    | Background color of progress bars. In indeterminate bars (without the `value` attribute), color of the ends of the animated gradient. |
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
	max-width: 400px;
	height: 400px;
}
```

HTML Head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.8.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.8.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/form/wui-form-0.15.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/form/wui-form-0.15.css">
<script type="text/javascript" src="/libraries/wui-js/main/form/wui-form-0.15.js"></script>
```

HTML code:

```html
<nav>
	<form name="myForm" class="wui-form my-form">
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

> [!NOTE]
> Style classes assigned when `init()` is executed:
> - Main element, according to `fieldStyle`: `fill-fields`, `border-fields` or `line-fields` (fill, border or bottom line), plus `round-fields` (rounded corners) for `"roundfill"` and `"roundborder"`.
> - `.header`, `.body` and `.footer`, according to `headerButtonStyle`, `bodyButtonStyle` and `footerButtonStyle`: `join-buttons` joins the contiguous buttons (`<button>` and `<input type="button">`) of the area, including those inside nested containers such as `<fieldset>`. The gap between them and the radius of the corners in contact are removed.
>
> Do not declare these classes in the HTML: `fieldStyle` always adds its class (`fill-fields` by default) and it would be combined with the declared one.

JS Code:

```js
const init = () => {
	const form = new WUIForm({
		selector: ".wui-form.my-form",
		fieldStyle: "line",
		submit: false,
		onScrolling: (top) => { },
		onSubmit: () => { }
	});
	form.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-form-linestyle&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-form-linestyle&lang=en).

<a name="wui-form-buildhtml"></a>

## Declarative building with `buildHtml()`

Instead of hand-writing the `<fieldset>` with its fields and the `<div class="footer">` with its buttons, they can be
declared through the `bodyItems`/`footerItems` properties (or `buildHtml()`'s equivalent parameters), and the method
builds the corresponding HTML. `buildHtml()` **only builds HTML** — it does not instantiate WUI/JS objects: fields of
type `wui-selectpicker`, `wui-datepicker`, `wui-timepicker`, `wui-colorpicker` and `wui-switch` require, after
`init()`, instantiating their classes (`WUISelectpicker`, `WUIDatepicker`, etc.) over the already-built HTML, same as
with a hand-written form.

`bodyItems` is an array of field sets, each shaped `{ items: [...] }`; each set becomes its own `<fieldset>`. Each
item in `items` accepts:

| Property  | Type               | Description |
| --------- | ------------------ | ----------- |
| type      | `string`           | Field type. One of: `text`, `number`, `date`, `month`, `week`, `time`, `color`, `range`, `checkbox`, `textarea`, `select`, `data`, `wui-selectpicker`, `wui-datepicker`, `wui-timepicker`, `wui-colorpicker`, `wui-switch`, or one of the structural types `legend`, `hr`, `div`, `p`, `message` (no associated input). Defaults to `text`. |
| name      | `string`           | `name` attribute of the input control. |
| value     | `string\|number`   | Initial value of the control. |
| label     | `string\|object`   | If `string`, creates a `<label>` with that text. If `object`, creates the `<label>` with no text (useful with `class`/`data` for integrations like `WUILanguage`) and accepts `for` (id of the control to bind). |
| icon      | `object`           | `{ class }`. Adds the icon on the left of the field (`icon-left` class). |
| options   | `array`            | For `select`/`wui-selectpicker`: array of `{ value, text, selected, class, data }`. |
| id        | `string`           | Id of the container element (for `wui-*` types, the wrapping `<div>`). |
| inputId   | `string`           | Id of the actual input control (the inner `<input>`/`<select>`). |
| min/max   | `string\|number`   | Limits for `number`, `date`, `month`, `week`, `time`, `range`. |
| noborder  | `boolean`          | Adds the `noborder` class to the field. |
| autosize  | `boolean`          | For `textarea`: automatically adjusts the height. |
| validate  | `boolean`          | Adds the validation icon/class (`icon-right`/`validate`). |
| text      | `string`           | For the structural types `legend`, `p`, `message`: text content. |
| class     | `string`           | Additional CSS class for the element. |
| data      | `object`           | `data-*` attributes of the element. |

`footerItems` is a flat array of button/link descriptors. Each item accepts `type` (`button`, default, or `link`),
`class`, `data`, `text` (`string` or `{ class }` for text via `WUILanguage`), `icon: { class }`, and — only for
`type: "link"` — `href`/`url` and `target`.

Example:

```js
const form = new WUIForm({
	selector: ".wui-form.my-form",
	bodyItems: [{
		items: [
			{ name: "nickname", type: "text", label: "Nickname", icon: { class: "wui-icon person-line" } },
			{ name: "role", type: "wui-selectpicker", label: "Role", options: [
				{ value: "user", text: "User" },
				{ value: "admin", text: "Admin" }
			] }
		]
	}],
	footerItems: [
		{ class: "wui-button cancel", text: "cancel" },
		{ class: "wui-button submit", text: "accept" }
	]
});
form.init();
// after init(), the <div class="wui-selectpicker"> already exists in the DOM
new WUISelectpicker({ selector: ".wui-selectpicker" }).init();
```

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-form-buildhtml&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-form-buildhtml&lang=en).

[English](wui-button-en.md) | [Español](wui-button-es.md)

[wuijs-main-lib](../../README-en.md)

# WUIButton

Version: `0.16`

Component for the implementation of based on HTML element `<button>`.

## Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/button/wui-button-0.16.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/button/wui-button-0.16.js) |
| CSS  | [src/wui-js/main/button/wui-button-0.16.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/button/wui-button-0.16.css) |
| CSS  | [src/wui-js/main/button/wui-button-0.16.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/button/wui-button-0.16.root.css) |

## Constructor

| Type      | Description |
| --------- | ----------- |
| WUIButton | `WUIButton([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

## Properties

| Property     | Type       | Default value.  | Description |
| ------------ | ---------- | --------------- | ----------- |
| selector     | `string`   | `".wui-button"` | (get/set)<br><br>CSS selector that defines the HTML element of type `HTMLButtonElement` that will be converted into the object. If more than one element matches the selector, only the first match will be included. |
| iconClass    | `string`   | `null`          | (get/set)<br><br>CSS class applied to a `<div>` element rendered before the `<span>` inside the button. When not `null`, a `<div class="{iconClass}">` is prepended to the button content. Takes precedence over `iconImage`. |
| iconImage    | `string`   | `null`          | (get/set)<br><br>URL of an image rendered as `<img src="{iconImage}">` before the `<span>` inside the button. Used only when `iconClass` is `null`. |
| text         | `string`   | `""`            | (get/set)<br><br>Text or HTML content of the element. Used only when `textClass` is `null`. |
| textClass    | `string`   | `null`          | (get/set)<br><br>CSS class applied to the `<span>` element rendered inside the button. When not `null`, a `<span class="{textClass}">` is rendered instead of the raw text. |
| textData     | `array`    | `null`          | (get/set)<br><br>Array of `[key, value]` pairs added as `data-*` attributes to the `<span>` element. Requires `textClass` to be set. Example: `[["id", "42"], ["lang", "en"]]` renders `data-id="42" data-lang="en"`. |
| submit       | `boolean`  | `false`         | (get/set)<br><br>When `true`, adds the CSS class `submit` to the `<button>` element, applying submit button styles. |
| warning      | `boolean`  | `false`         | (get/set)<br><br>When `true`, adds the CSS class `warning` to the `<button>` element, applying warning button styles. |
| flat         | `boolean`  | `false`         | (get/set)<br><br>When `true`, adds the CSS class `flat` to the `<button>` element, applying flat button styles. |
| selectable   | `boolean`  | `false`         | (get/set)<br><br>Defines whether the button is selectable. |
| locked       | `boolean`  | `false`         | (get/set)<br><br>Defines whether the button is locked. |
| enabled      | `boolean`  | `true`          | (get/set)<br><br>Defines whether the button is enabled. |
| onClick      | `function` | `null`          | (get/set)<br><br>Function run when the button is clicked. The function receives as parameter:<br><br>**• selected:** `boolean`, state of selection of the button. If the `selectable` property is `false`, the parameter will be `null`. |
| onDblClick   | `function` | `null`          | (get/set)<br><br>Function run when the button is double-clicked. The function receives as parameter:<br><br>**• selected:** `boolean`, state of selection of the button. If the `selectable` property is `false`, the parameter will be `null`. |

## Methods

| Method       | Return type   | Description |
| ------------ | ------------- | ----------- |
| getElement   | `HTMLElement` | `getElement()`<br><br>Returns the HTML container element of the object. |
| getIcon      | `HTMLElement` | `getIcon()`<br><br>Returns the HTML element containing the icon. This can be a `<div>` or `<img>` element depending on the property used for its implementation, `iconClass` or `iconImage` respectively. |
| getText      | `HTMLElement` | `getText()`<br><br>Returns the HTML element containing the text. This can be a `<span>` or the same `<button>` element depending on the properties used for its implementation. |
| init         | `void`        | `init()`<br><br>Initializes the object. |
| focus        | `void`        | `focus()`<br><br>Focus the button. |
| blur         | `void`        | `blur()`<br><br>Remove the focus from the button. |
| select       | `select`      | `select()`<br><br>Select the button. |
| unselect     | `unselect`    | `unselect()`<br><br>Unselect the button. |
| isSelected   | `isSelected`  | `isSelected()`<br><br>Returns if the button is selected. |
| destroy      | `void`        | `destroy()`<br><br>Destroyer. |

## CSS Variables

| Variable                                    | Description |
| ------------------------------------------- | ----------- |
| `--wui-button-default-minwidth`             | Minimum width of the default button. |
| `--wui-button-default-height`               | Height of the default button. |
| `--wui-button-default-borderwidth`          | Border width of the default button. |
| `--wui-button-default-bordercolor-out`      | Border color of the default button in normal state. |
| `--wui-button-default-bordercolor-over`     | Border color of the default button in hover state. |
| `--wui-button-default-bordercolor-selected` | Border color of the default button in selected state. |
| `--wui-button-default-bordercolor-disabled` | Border color of the default button in disabled state. |
| `--wui-button-default-bgcolor-out`          | Background color of the default button in normal state. |
| `--wui-button-default-bgcolor-over`         | Background color of the default button in hover state. |
| `--wui-button-default-bgcolor-selected`     | Background color of the default button in selected state. |
| `--wui-button-default-bgcolor-disabled`     | Background color of the default button in disabled state. |
| `--wui-button-default-horizpadding`         | Maximum horizontal padding of the default button. The applied value is computed with `clamp(min(5px, maximum), 5%, maximum)`, where the percentage is relative to the width of the button's containing element: it shrinks in narrow containers down to a minimum of `5px`, or down to the maximum if it is less than `5px`. |
| `--wui-button-default-vertpadding`          | Vertical padding of the default button. |
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
| `--wui-button-mobile-default-minwidth`      | Minimum width of the default button in mobile mode (screen width less than 768px). |
| `--wui-button-mobile-default-height`        | Height of the default button in mobile mode (screen width less than 768px). |
| `--wui-button-mobile-submit-minwidth`       | Minimum width of the submit button in mobile mode (screen width less than 768px). |
| `--wui-button-mobile-submit-height`         | Height of the submit button in mobile mode (screen width less than 768px). |
| `--wui-button-mobile-icon-float-padding`    | Padding of the floating icons in the button in mobile mode (screen width less than 768px). |

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

.my-button {
	margin: 20px;
}

.output {
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.8.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.8.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/button/wui-button-0.16.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/button/wui-button-0.16.css">
<script type="text/javascript" src="/libraries/wui-js/main/button/wui-button-0.16.js"></script>
```

HTML code:

```html
<nav>
	<button class="wui-button my-button button1"></button>
	<button class="wui-button my-button button2"></button>
	<div class="output"></div>
</nav>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const button1 = new WUIButton({
		selector: ".wui-button.button1",
		//iconClass: null,
		//iconImage: null,
		//text: "button 1",
		//textClass: null,
		//textData: null,
		//submit: false,
		//warning: false,
		//flat: false,
		//selectable: false,
		//locked: false,
		//enabled: true,
		onClick: (selected) => {
			output.textContent = "Click button 1";
		},
		onDblClick: (selected) => {
			output.textContent = "Double-Click button 1";
		}
	});
	const button2 = new WUIButton({
		selector: ".wui-button.button2",
		//iconClass: "wui-icon float-left mappointer-fill",
		//text: "button 2",
		//submit: true,
		onClick: (selected) => {
			output.textContent = "Click button 2";
		},
		onDblClick: (selected) => {
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
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-button-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-button-basic&lang=en).

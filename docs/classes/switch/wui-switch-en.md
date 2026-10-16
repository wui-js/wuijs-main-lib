[English](wui-switch-en.md) | [Español](wui-switch-es.md)

[wuijs-main-lib](../../README-en.md)

# WUISwitch

Version: `0.10`

Component for the implementation of checkbox type data inputs based on HTML element `<input type="checkbox">`.

## Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/switch/wui-switch-0.10.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/switch/wui-switch-0.10.js) |
| CSS  | [src/wui-js/main/switch/wui-switch-0.10.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/switch/wui-switch-0.10.css) |
| CSS  | [src/wui-js/main/switch/wui-switch-0.10.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/switch/wui-switch-0.10.root.css) |

## Constructor

| Type        | Description |
| ----------- | ----------- |
| WUISwitch | `WUISwitch([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

## Properties

| Property  | Type       | Default value   | Description |
| --------- | ---------- | --------------- | ----------- |
| selector  | `string`   | `".wui-switch"` | (get/set)<br><br>CSS selector defining the `HTMLDivElement` HTML element wrapping the `checkbox` type `HTMLInputElement` element that will be converted into the object. If more than one element matches the selector, only the first match will be included. |
| name      | `string`   | `""`            | (get/set)<br><br>Define the name of the data input `<input type="checkbox">`. |
| value     | `string`   | `"1"`           | (get/set)<br><br>Value that the checkbox will take when it is activated. |
| boolean   | `boolean`  | `false`         | (get/set)<br><br>Defines whether the component is in boolean mode. When the component is in boolean mode, the `change` event automatically modifies the `value` property to `1` if the `activated` property is true and to `0` if it is false. |
| activated | `boolean`  | `false`         | (get/set)<br><br>Defines if the checkbox is activated. |
| enabled   | `boolean`  | `true`          | (get/set)<br><br>Defines if the checkbox is enabled. |
| onChange  | `function` | `null`          | (get/set)<br><br>Function run when the checkbox state changes. The function receives as a parameter the boolean state `activated` and the value of the check box. |

## Methods

| Method          | Return type          | Description |
| --------------- | -------------------- | ----------- |
| getElement      | `HTMLDivElement`     | `getElement()`<br><br>Returns the HTML container element of the object. |
| getViewElements | `Array<HTMLElement>` | `getViewElements()`<br><br>Returns an array of the HTML elements that are part of the value display. |
| getInput        | `HTMLElement`        | `getInput()`<br><br>Returns the HTML element associated with the base data input `<input type="checkbox">`. |
| init            | `void`               | `init()`<br><br>Initializes the object. |
| toggle          | `void`               | `toggle()`<br><br>Toggles the activated/deactivated state of the checkbox. |
| destroy         | `void`               | `destroy()`<br><br>Destroyer. |

## CSS Variables

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

.my-switch {}

.output {
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/switch/wui-switch-0.10.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/switch/wui-switch-0.10.css">
<script type="text/javascript" src="/libraries/wui-js/main/switch/wui-switch-0.10.js"></script>
```

HTML code:

```html
<nav>
	<div class="wui-switch my-switch">
		<input type="checkbox" name="myCheckbox" value="1">
	</div>
	<div class="output"></div>
</nav>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".output");
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
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-switch-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-switch-basic&lang=en).

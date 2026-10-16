[English](wui-intensity-en.md) | [Español](wui-intensity-es.md)

[wuijs-main-lib](../../README-en.md)

# WUIIntensity

Version: `0.7`

Component for the implementation of 4-level intensity selector type data inputs: none, low, half, and high based on HTML element `<input type="range">`.

## Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/intensity/wui-intensity-0.7.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/intensity/wui-intensity-0.7.js) |
| CSS  | [src/wui-js/main/intensity/wui-intensity-0.7.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/intensity/wui-intensity-0.7.css) |
| CSS  | [src/wui-js/main/intensity/wui-intensity-0.7.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/intensity/wui-intensity-0.7.root.css) |

## Constructor

| Type         | Description |
| ------------ | ----------- |
| WUIIntensity | `WUIIntensity([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

## Properties

| Property | Type       | Default value      | Description |
| -------- | ---------- | ------------------ | ----------- |
| selector | `string`   | `".wui-intensity"` | (get/set)<br><br>CSS selector defining the `HTMLDivElement` HTML element wrapping the `range` type `HTMLInputElement` element that will be converted into the object. If more than one element matches the selector, only the first match will be included. |
| name     | `string`   | `""`                | (get/set)<br><br>Defines the name of the `<input type="range">` data input. |
| value    | `number`   | `0`                | (get/set)<br><br>Intensity value (0: none, 1: low, 2: half, 3: high). Also accepts strings `"none"`, `"low"`, `"half"`, `"high"`. |
| enabled  | `boolean`  | `true`             | (get/set)<br><br>Defines if the selector is enabled. |
| onChange | `function` | `null`             | (get/set)<br><br>Function run when the value changes. The function receives the integer value (0-3) and the associated string as parameters. |

## Methods

| Method          | Return type          | Description |
| --------------- | -------------------- | ----------- |
| getElement      | `HTMLDivElement`     | `getElement()`<br><br>Returns the HTML container element of the object. |
| getViewElements | `Array<HTMLElement>` | `getViewElements()`<br><br>Returns an array of the HTML elements that are part of the value display. |
| getInput        | `HTMLInputElement`   | `getInput()`<br><br>Returns the HTML element associated with the base data input `<input type="range">`. |
| init            | `void`               | `init()`<br><br>Initializes the object. |
| destroy         | `void`               | `destroy()`<br><br>Destroyer. |

## CSS Variables

| Variable                               | Description |
| -------------------------------------- | ----------- |
| `--wui-intensity-height`               | Height of the intensity control. |
| `--wui-intensity-borderradius`         | Border radius of the intensity control. |
| `--wui-intensity-bordercolor-out`      | Border color of the intensity control in normal state. |
| `--wui-intensity-bordercolor-disabled` | Border color of the intensity control in disabled state. |
| `--wui-intensity-bgcolor-none`         | Background color of the intensity control at none level. |
| `--wui-intensity-bgcolor-low`          | Background color of the intensity control at low level. |
| `--wui-intensity-bgcolor-half`         | Background color of the intensity control at half level. |
| `--wui-intensity-bgcolor-high`         | Background color of the intensity control at high level. |

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

.my-intensity {}

.output {
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/intensity/wui-intensity-0.7.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/intensity/wui-intensity-0.7.css">
<script type="text/javascript" src="/libraries/wui-js/main/intensity/wui-intensity-0.7.js"></script>
```

HTML code:

```html
<nav>
	<div class="wui-intensity my-intensity">
		<input type="range" name="myIntensity" value="0" min="0" max="3" step="1">
	</div>
	<div class="output"></div>
</nav>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const intensity = new WUIIntensity({
		selector: ".wui-intensity.my-intensity",
		value: 1,
		//enabled: true,
		onChange: (event, value) => {
			output.textContent = `Change - value: ${value}`;
		}
	});
	intensity.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-intensity-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-intensity-basic&lang=en).

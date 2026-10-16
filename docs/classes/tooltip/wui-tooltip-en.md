[English](wui-tooltip-en.md) | [Español](wui-tooltip-es.md)

[wuijs-main-lib](../../README-en.md)

# WUITooltip

Version: `0.6`

Component for the implementation of tooltip texts.

## Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/tooltip/wui-tooltip-0.6.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/tooltip/wui-tooltip-0.6.js) |
| CSS  | [src/wui-js/main/tooltip/wui-tooltip-0.6.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/tooltip/wui-tooltip-0.6.css) |
| CSS  | [src/wui-js/main/tooltip/wui-tooltip-0.6.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/tooltip/wui-tooltip-0.6.root.css) |

## Constructor

| Type       | Description |
| ---------- | ----------- |
| WUITooltip | `WUITooltip([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

## Properties

| Property | Type     | Default value            | Description |
| -------- | -------- | ------------------------ | ----------- |
| selector | `string` | `".wui-tooltip-target"` | (get/set)<br><br>CSS selector that defines the HTML elements that act as tooltip trigger targets. If more than one element matches the selector, all matches will be included. |

## Methods

| Method      | Return type | Description |
| ----------- | ----------- | ----------- |
| getElements | `NodeList`  | `getElements()`<br><br>Returns the list of HTML elements acting as tooltip trigger targets. |
| init        | `void`      | `init()`<br><br>Initializes the object, attaching hover events to all target elements. |
| lock        | `void`      | `lock()`<br><br>Locks all tooltips in the open state. |
| unlock      | `void`      | `unlock()`<br><br>Unlocks all tooltips, restoring normal hover behavior. |
| destroy     | `void`      | `destroy()`<br><br>Destroyer. |

## CSS Variables

| Variable                   | Description |
| -------------------------- | ----------- |
| `--wui-tooltip-open-delay` | Delay before the tooltip appears. |
| `--wui-tooltip-bgcolor`    | Background color of the tooltip. |
| `--wui-tooltip-textcolor`  | Text color of the tooltip. |

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

.my-container {
	position: relative;
	display: inline-block;
}

.my-container > button {
	height: 24px;
	-webkit-border-radius: 12px;
	-moz-border-radius: 12px;
	border-radius: 12px;
	border: 1px solid #ccc;
	background-color: transparent;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tooltip/wui-tooltip-0.6.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tooltip/wui-tooltip-0.6.css">
<script type="text/javascript" src="/libraries/wui-js/main/tooltip/wui-tooltip-0.6.js"></script>
```

HTML code:

```html
<nav>
	<div class="wui-tooltip-target my-container">
		<button>Hover me</button>
		<div class="wui-tooltip left">Left tooltip text</div>
	</div>
	<div class="wui-tooltip-target my-container">
		<button>Hover me</button>
		<div class="wui-tooltip top">Top tooltip text</div>
	</div>
	<div class="wui-tooltip-target my-container">
		<button>Hover me</button>
		<div class="wui-tooltip bottom">Bottom tooltip text</div>
	</div>
	<div class="wui-tooltip-target my-container">
		<button>Hover me</button>
		<div class="wui-tooltip bottom nowrap">Bottom nowrap tooltip text</div>
	</div>
	<div class="wui-tooltip-target my-container">
		<button>Hover me</button>
		<div class="wui-tooltip right">Right tooltip text</div>
	</div>
</nav>
```

JS code:

```js
const init = () => {
	const tooltip = new WUITooltip({
		selector: ".wui-tooltip-target.my-container"
	});
	tooltip.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-tooltip-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-tooltip-basic&lang=en).

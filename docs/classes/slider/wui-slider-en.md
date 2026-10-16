[English](wui-slider-en.md) | [Español](wui-slider-es.md)

[wuijs-main-lib](../../README-en.md)

# WUISlider

Version: `0.10`

Component for the implementation of slide presentations controlled by mouse/touch dragging and/or by event.

## Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/slider/wui-slider-0.10.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/slider/wui-slider-0.10.js) |
| CSS  | [src/wui-js/main/slider/wui-slider-0.10.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/slider/wui-slider-0.10.css) |
| CSS  | [src/wui-js/main/slider/wui-slider-0.10.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/slider/wui-slider-0.10.root.css) |

## Constructor

| Type      | Description |
| --------- | ----------- |
| WUISlider | `WUISlider([properties])`<br><br>Parameters:<br>**• properties:** `object` *optional* |

## Properties

| Property        | Type       | Default value   | Description |
| --------------- | ---------- | --------------- | ----------- |
| selector        | `string`   | `".wui-slider"` | (get/set)<br><br>CSS selector of the HTML container element of the slider. |
| transitionDelay | `number`   | `200`           | (get/set)<br><br>Duration in milliseconds of the transition between slides. It is applied through the `--wui-slider-transition-delay` CSS variable of the root element. |
| onChange        | `function` | `null`          | (get/set)<br><br>Function executed when the active slide changes through `prev()` or `next()`, once the transition has finished.<br><br>Function parameters:<br>**• index:** `number`, index of the active slide (starts at `0`). |

## Methods

| Method     | Return type   | Description |
| ---------- | ------------- | ----------- |
| getElement | `HTMLElement` | `getElement()`<br><br>Returns the root HTML element of the slider. |
| getBody    | `HTMLElement` | `getBody()`<br><br>Returns the internal `.body` HTML element that contains the slides. |
| getIndex   | `number`      | `getIndex()`<br><br>Returns the index of the active slide (starts at `0`). |
| init       | `void`        | `init()`<br><br>Initializes the slider: positions the slides, selects the first pagination indicator and attaches the interaction events (drag and touch). |
| prev       | `void`        | `prev()`<br><br>Moves the slider to the previous slide with animation. Has no effect if already on the first slide or while a transition is in progress. |
| next       | `void`        | `next()`<br><br>Moves the slider to the next slide with animation. Has no effect if already on the last slide or while a transition is in progress. |
| go         | `void`        | `go(index)`<br><br>Parameters:<br>**• index:** `number`, index of the target slide (starts at `0`)<br><br>Jumps directly to the indicated slide without transition animation. If a transition is in progress, it is cancelled. Does not execute `onChange`. |
| destroy    | `void`        | `destroy()`<br><br>Destroyer. |

## CSS Variables

| Variable                              | Description |
| ------------------------------------- | ----------- |
| `--wui-slider-transition-delay`       | Duration of the transition between slides. It is overridden by the `transitionDelay` property when `prev()` or `next()` is executed. |
| `--wui-slider-paging-bgcolor-hidden`  | Color of the pagination indicator in unselected state. |
| `--wui-slider-paging-bgcolor-visible` | Color of the pagination indicator in selected state. |

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

.my-slider {
	width: 100%;
	max-height: 400px;
}

.my-slider .slide {
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
}

.slide1 {
	background-color: #FF5C8A;
}

.slide2 {
	background-color: #8B5CF6;
}

.slide3 {
	background-color: #4DA3FF;
}

nav {
	display: flex;
	width: 100%;
	justify-content: center;
	margin-top: 10px;
	gap: 10px;
}

.output {
	width: 100%;
	height: 40px;
	margin: 10px;
	font-family: monospace;
}
```

HTML Header:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/slider/wui-slider-0.10.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/slider/wui-slider-0.10.css">
<script type="text/javascript" src="/libraries/wui-js/main/slider/wui-slider-0.10.js"></script>
```

HTML Code:

```html
<div class="wui-slider my-slider">
	<div class="body">
		<div class="slide slide1">Slide 1</div>
		<div class="slide slide2">Slide 2</div>
		<div class="slide slide3">Slide 3</div>
	</div>
	<div class="paging dots"></div>
</div>
<nav>
	<button class="my-button prev">&#9204; prev</button>
	<button class="my-button next">next &#9205;</button>
</nav>
<div class="output"></div>
```

JS Code:

```js
const init = () => {
	const prevButton = document.body.querySelector("button.prev");
	const nextButton = document.body.querySelector("button.next");
	const output = document.body.querySelector(".output");
	const slider = new WUISlider({
		selector: ".wui-slider.my-slider",
		transitionDelay: 300,
		onChange: (index) => {
			output.textContent = `Change to: ${index}`;
		}
	});
	slider.init();
	prevButton.addEventListener("click", () => {
		slider.prev();
	});
	nextButton.addEventListener("click", () => {
		slider.next();
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-slider-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-slider-basic&lang=en).

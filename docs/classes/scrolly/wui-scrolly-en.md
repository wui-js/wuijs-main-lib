[English](wui-scrolly-en.md) | [Español](wui-scrolly-es.md)

[wuijs-main-lib](../../README-en.md)

# WUIScrolly

Version: `0.8`

Utilities for animating HTML elements management using the "onscroll" event of the HTML page body.

## Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/scrolly/wui-scrolly-0.8.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/scrolly/wui-scrolly-0.8.js) |
| CSS  | [src/wui-js/main/scrolly/wui-scrolly-0.8.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/scrolly/wui-scrolly-0.8.css) |
| CSS  | [src/wui-js/main/scrolly/wui-scrolly-0.8.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/scrolly/wui-scrolly-0.8.root.css) |

## Constructor

| Type       | Description |
| ---------- | ----------- |
| WUIScrolly | `WUIScrolly([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

## Properties

| Property      | Type       | Default value               | Description |
| ------------- | ---------- | --------------------------- | ----------- |
| sections      | `array`    | `[]`                        | (get/set)<br><br>List of objects with the settings of the sections that will be incorporated into the animation, as defined in **Section Options**. These can be defined directly on this property or using the `addSection()` method. |
| behavior      | `string`   | `"smooth"`                  | (get/set)<br><br>Behavior for moving focus to the body of the HTML page.<br><br>Values:<br>• `"auto"`<br>• `"smooth"` |
| dataScrollY   | `string`   | `"scrollY"`                 | (get/set)<br><br>Name of the `data-*` attribute of the main document element (`<html>` / `document.documentElement`) that contains the numeric value measured in pixels of the total vertical scrolling of the HTML page, where `0` represents the top of the document (or no movement). |
| dataDelay     | `string`   | `"delay"`                   | (get/set)<br><br>Name of the `data-*` attribute that determines the time, measured in milliseconds, that it takes for an HTML element animated using CSS styles to animate once it is given focus. |
| onStart       | `function` | `null`                      | (get/set)<br><br>Function run when the scroll movement starts, either through the `scroll` events for the mouse or `touchmove` for the touch screen. |
| onMove        | `function` | `null`                      | (get/set)<br><br>Function run when the scroll movement is executed, either through the `scroll` events for the mouse or `touchmove` for the touch screen. |
| onStop        | `function` | `null`                      | (get/set)<br><br>Function run when the scroll movement ends, either through the `scroll` events for the mouse or `touchmove` for the touch screen. |
| scrollY       | `number`   | `0`                         | (get)<br><br>Vertical position of the page measured in pixels. |
| deltaY        | `number`   | `0`                         | (get)<br><br>Last step of scrolling in the vertical movement of the page, measured in pixels. |
| direction     | `string`   | `null`                      | (get)<br><br>Direction of vertical page movement.<br><br>Values:<br>• `"up"`<br>• `"down"` |
| sceneWidth    | `number`   | `WUIScrolly.screenWidth()`  | (get)<br><br>Scene width measured in pixels. |
| sceneHeight   | `number`   | `WUIScrolly.screenHeight()` | (get)<br><br>Scene height measured in pixels. |
| sceneIndex    | `number`   | `null`                      | (get)<br><br>Scene number. |
| sceneStep     | `number`   | `null`                      | (get)<br><br>Step number in a scene. |
| sceneProgress | `number`   | `null`                      | (get)<br><br>Percentage of progress of a step in a scene, with values ​​between `0` and `1`. |
| debug         | `boolean`  | `false`                     | (get/set)<br><br>Test mode. Prints to the console the `selector` and `height` values ​​of the scenes added in the startup instance, and `scrollY`, `y`, `index`, `sceneIndex`, `step`, `sceneStep`, and `progress` when they change. Enabled when the property value is `true`. |

## Section Options

| Property  | Type       | Default value | Description |
| --------- | ---------- | ------------- | ----------- |
| selector  | `string`   | `undefined`   | CSS selector that defines the HTML element to be included as a section. If more than one element matches the selector, only the first match will be included. *obligatory* |
| target    | `string`   | `undefined`   | Auxiliary name for referencing the section. Used in the `goSection()` method. |
| type      | `string`   | `"auto"`      | CSS behavior of the section height.<br><br>Values:<br>• `"auto"`<br>• `"static"` |
| height    | `number`   | `undefined`   | Section height. This can be expressed as a number associated with pixels or in a CSS compatible format. |
| steps     | `number`   | `undefined`   | Total number of steps defined in the `animation` animation function. |
| pages     | `number`   | `undefined`   | Total number of pages defined in the `animation` animation function. |
| animation | `function` | `undefined`   | `function(step, progress)`<br><br>Arguments:<br>**• step:** `number`, value between `0` and `pages - 1` <br>**• progress:** `number`, value between `0` and `1` <br><br>Function run when the scroll movement is executed in a section. |

## Methods

| Method     | Return type | Description |
| ---------- | ----------- | ----------- |
| init       | `void`      | `init()`<br><br>Initializes the object once the sections that make up the HTML page have been added. |
| stop       | `void`      | `stop()`<br><br>Interrupts the animation in its execution cycle. |
| addSection | `void`      | `addSection(options)`<br><br>Adds a new animated section settings to the object's section list, as defined in **Section Options:**. |
| goSection  | `void`      | `goSection(target[, done[, behavior]])`<br><br>Arguments:<br>**• target:** `string` <br>**• done:** `function` <br>**• behavior:** `string` <br><br>Moves the focus of the HTML page to the section specified by the `target` parameter. |
| selectPage | `void`      | `selectPage(sectionIndex, pageIndex)`<br><br>Arguments:<br>**• sectionIndex:** `number`, values ​​from `0` <br>**• pageIndex:** `number`, value between `0` and `pages - 1` <br><br>Moves the focus of the HTML page to the section specified by the `sectionIndex` parameter and advances to the `pageIndex` page in that section. |
| drawCenter | `void`      | `drawCenter()`<br><br>Draws the center of the visible part of the HTML page in the browser. |
| drawRuler  | `void`      | `drawRuler()`<br><br>Draws a vertical ruler with pixel measurements, on the left side of the HTML page. |
| destroy    | `void`      | `destroy()`<br><br>Destroyer. |

## CSS Variables

| Variable                               | Description |
| -------------------------------------- | ----------- |
| `--wui-scrolly-paging-bgcolor-hidden`  | Unselected page indicator color. |
| `--wui-scrolly-paging-bgcolor-visible` | Selected page indicator color. |

## CSS Styles for Animation

| Style         | Description |
| ------------- | ----------- |
| .fadein       | Enter and exits with opacity without movement. |
| .fadein-up    | Enter and exits with opacity from above. |
| .fadein-top   | Alias ​​of `.fadein-up`. |
| .fadein-left  | Enter and exit with opacity from the left. |
| .fadein-right | Enter and exit with opacity from the right. |

## Implementation

CSS code:

```css
html,
body {
	height: 100%; /* necessary */
}

body {
	font-family: Arial, Helvetica, Verdana, sans-serif;
	font-size: 14px;
}

.wui-scrolly {
	overflow-x: hidden;
	margin: 0;
	padding: 0;
}

.wui-scrolly > .section {
	width: 100%;
	background-color: lightgray;
}

.wui-scrolly > .section > .scene > .animation {
	position: relative;
}

.wui-scrolly > .section1 {
	background-color: #f1f1f1;
}

.wui-scrolly > .section2 > .scene.scene2 {
	display: flex;
	position: relative; /* necessary */
	align-items: center;
	justify-content: center;
	flex-direction: row;
	gap: 20px;
}

.wui-scrolly > .section2 {
	background-color: #e9e9e9;
}

.wui-scrolly > .section3 {
	background-color: #e1e1e1;
}

.wui-scrolly > .section3 > .scene > .animation > .my-element {
	left: -100px;
}

.my-element {
	display: flex;
	position: relative; /* necessary */
	width: 50px;
	height: 50px;
	margin: 5px;
	margin: 20px;
	background-color: dodgerblue;
	align-items: center;
	justify-content: center;
	color: #fff;
}

.output {
	margin: 10px;
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/scrolly/wui-scrolly-0.8.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/scrolly/wui-scrolly-0.8.css">
<script type="text/javascript" src="/libraries/wui-js/main/scrolly/wui-scrolly-0.8.js"></script>
```

HTML code:

```html
<body class="wui-scrolly">

	<!-- Cover -->

	<section class="section section1">
		<div class="scene">scroll down</div>
	</section>

	<!-- CSS animation -->

	<section class="section section2">
		<div class="scene scene2">
			<div class="my-element wui-scrolly-load fadein" data-delay=".0">1</div>
			<div class="my-element wui-scrolly-load fadein-left" data-delay=".2">2</div>
			<div class="my-element wui-scrolly-load fadein-top" data-delay=".4">3</div>
			<div class="my-element wui-scrolly-load fadein-right" data-delay=".8">4</div>
		</div>
	</section>

	<!-- JS animation -->

	<section class="section section3">
		<div class="scene">
			<div class="animation">
				<div class="my-element element5">5</div>
				<div class="my-element element6">6</div>
				<div class="my-element element7">7</div>
			</div>
			<div class="output"></div>
		</div>
		<div class="paging dots"></div>
	</section>
</body>
```

JS code:

```js
const init = () => {
	const element5 = document.body.querySelector(".section3 .my-element.element5");
	const element6 = document.body.querySelector(".section3 .my-element.element6");
	const element7 = document.body.querySelector(".section3 .my-element.element7");
	const output = document.body.querySelector(".section3 .output");
	const scrolly = new WUIScrolly({
		sections: [{
			selector: ".section1",
			target: "cover",
			type: "static",
			height: "100%"
		}, {
			selector: ".section2",
			target: "css-animation",
			type: "static",
			height: 400
		}, {
			selector: ".section3",
			target: "js-animation",
			type: "auto",
			height: 4500,
			steps: 3,
			pages: 3,
			animation: (step, progress) => {
				const direction = scrolly.direction;
				const left = step !== null ? parseInt(200 * progress - 100) + "px" : "100px";
				const text = `step: ${step}, progress: ${progress}, direction: ${direction}`;
				scrolly.selectPage(2, step);
				if (step === 0) {
					if (direction === "up") {
						element6.style.left = "-100px";
					}
					element5.style.left = left;
				} else if (step === 1) {
					if (direction === "down") {
						element5.style.left = "100px";
					} else if (direction === "up") {
						element7.style.left = "-100px";
					}
					element6.style.left = left;
				} else if (step === 2) {
					if (direction === "down") {
						element6.style.left = "100px";
					}
					element7.style.left = left;
				} else if (step === null) {
					element7.style.left = left;
				}
				output.textContent = text;
			}
		}],
		//behavior: "smooth",
		//dataScrollY: "scrollY",
		//dataDelay: "delay",
		//onStart: null,
		onMove: (index, step, progress) => {
			if (index === 1) {
				element5.style.left = "-100px";
			}
		},
		//onStop: null,
		debug: true
	});
	scrolly.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-scrolly-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-scrolly-basic&lang=en).

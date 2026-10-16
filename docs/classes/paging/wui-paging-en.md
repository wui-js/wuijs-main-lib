[English](wui-paging-en.md) | [Español](wui-paging-es.md)

[wuijs-main-lib](../../README-en.md)

# WUIPaging

Version: `0.12`

Component for the implementation of paginated views with animated transitions.

## Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/paging/wui-paging-0.12.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/paging/wui-paging-0.12.js) |
| CSS  | [src/wui-js/main/paging/wui-paging-0.12.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/paging/wui-paging-0.12.css) |
| CSS  | [src/wui-js/main/paging/wui-paging-0.12.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/paging/wui-paging-0.12.root.css) |

## Constructor

| Type      | Description |
| --------- | ----------- |
| WUIPaging | `WUIPaging([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

## Properties

| Property    | Type       | Default value | Description |
| ----------- | ---------- | ------------- | ----------- |
| selector    | `string`   | `""`          | (get/set)<br><br>CSS selector that defines the HTML container element of the object. If more than one element matches the selector, only the first match will be included. The element is located when the object is constructed. |
| index       | `number`   | `null`        | (get/set)<br><br>Index of the currently selected page. |
| dataTarget  | `string`   | `"target"`    | (get/set)<br><br>Name of the `data-*` attribute that contains the identifier of each page. |
| onSelect    | `function` | `null`        | (get/set)<br><br>Function executed when page selection starts. Receives the following arguments:<br><br>**• inputIndex:** `number`, index of the page to be selected.<br>**• inputTarget:** `string`, identifier of the page to be selected.<br>**• outputIndex:** `number`, index of the currently selected page.<br>**• outputTarget:** `string`, identifier of the currently selected page. |
| onChange    | `function` | `null`        | (get/set)<br><br>Function executed when the page change is completed, once the transition ends. Receives the following arguments:<br><br>**• index:** `number`, index of the newly selected page.<br>**• target:** `string`, identifier of the newly selected page. |
| onBack      | `function` | `null`        | (get/set)<br><br>Function executed when going back to a previous page from history is completed. Receives the following arguments:<br><br>**• index:** `number`, index of the page retrieved from history.<br>**• target:** `string`, identifier of the page retrieved from history. |
| onScrolling | `function` | `null`        | (get/set)<br><br>Function executed during scroll within a page with the `scroll` class. Receives the following argument:<br><br>**• scroll:** `number`, scroll position in pixels. |

## Methods

| Method     | Return type    | Description |
| ---------- | -------------- | ----------- |
| getElement | `HTMLElement`  | `getElement()`<br><br>Returns the HTML container element of the object. |
| getIndex   | `number`       | `getIndex([target])`<br><br>Arguments:<br>**• target:** `string` *optional*, page identifier. If not specified, uses the current target.<br><br>Returns the index of a page based on its identifier. |
| getTarget  | `string`       | `getTarget([index])`<br><br>Arguments:<br>**• index:** `number` *optional*, page index. If not specified, uses the current index.<br><br>Returns the identifier of a page based on its index. |
| getPages   | `NodeList`     | `getPages()`<br><br>Returns a list with all page-type HTML elements (with class `.page`). |
| getPage    | `HTMLElement`  | `getPage(target)`<br><br>Arguments:<br>**• target:** `string` or `number`, page identifier or index.<br><br>Returns the HTML element of a specific page. |
| init       | `void`         | `init()`<br><br>Initializes the object, setting the initial page and configuring scroll events. |
| select     | `void`         | `select(target[, onChange[, ]])`<br><br>Arguments:<br>**• target:** `string` or `number`, identifier or index of the page to select.<br>**• onChange:** `function` *optional*, function executed when the change is completed. The default value corresponds to the `onChange` property.<br>**• instant:** `boolean` *optional*, executes the page change instantly. The default value is `false`.<br><br>Selects and displays a page with transition animation. If a transition is in progress, it is completed immediately before starting the new one. With `instant` set to `true` the change is made without animation and `onChange` is executed immediately. |
| setHistory | `void`         | `setHistory([history])`<br><br>Arguments:<br>**• history:** `array` *optional*, list of page identifiers or indexes that make up the history.<br><br>Manually sets the navigation history. |
| back       | `void`         | `back([onBack])`<br><br>Arguments:<br>**• onBack:** `function` *optional*, function executed when going back is completed. The default value corresponds to the `onBack` property.<br><br>Goes back to the previous page in the history. When the transition ends, the `onChange` property function is executed, followed by `onBack`. |
| reset      | `void`         | `reset()`<br><br>Resets the component, selecting the first page instantly. |
| destroy    | `void`         | `destroy()`<br><br>Destroyer. |

## CSS Variables

| Variable                                | Description |
| --------------------------------------- | ----------- |
| `--wui-paging-page-transition-time`     | Duration time of the transition animation between pages. The end of the page change is detected with the `transitionend` event, so no additional synchronization is required. |
| `--wui-paging-page-bgcolor`             | Background color of the pages. |
| `--wui-paging-page-scroll-bgcolor-out`  | Scrollbar color in normal state (pages with `scroll` class). |
| `--wui-paging-page-scroll-bgcolor-over` | Scrollbar color in hover state (pages with `scroll` class). |

> [!NOTE]
> Page movement is implemented with the CSS `transform` property. The selected page is left with `transform: none`, so elements with `position: fixed` inside it (e.g. `WUIModal`) are positioned relative to the viewport. The `prefers-reduced-motion` preference is respected.

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

.my-paging {
	position: absolute;
}

.my-paging > .page > nav {
	position: absolute;
	top: 50%;
	left: 50%;
	display: flex;
	gap: 10px;
	transform: translate(-50%, -50%);
}

.my-paging > .page > nav > button {
	height: 24px;
	-webkit-border-radius: 12px;
	-moz-border-radius: 12px;
	border-radius: 12px;
	border: 1px solid #ccc;
	background-color: transparent;
}

.output {
	position: absolute;
	left: 0;
	bottom: 0;
	margin: 10px;
	font-family: monospace;
}
```

HTML header:

```html
<link rel="stylesheet" type="text/css" href="/libraries/wui-js/main/paging/wui-paging-0.12.root.css">
<link rel="stylesheet" type="text/css" href="/libraries/wui-js/main/paging/wui-paging-0.12.css">
<script type="text/javascript" src="/libraries/wui-js/main/paging/wui-paging-0.12.js"></script>
```

HTML code:

```html
<div class="wui-paging my-paging">
	<div class="page scroll" data-target="page1">
		<h1>Page 1</h1>
		<nav>
			<button class="my-button go-page2">go to page 2 &#9205;</button>
		</nav>
	</div>
	<div class="page scroll" data-target="page2">
		<h1>Page 2</h1>
		<nav>
			<button class="my-button go-page1">&#9204; go to page 1</button>
			<button class="my-button go-page3">go to page 3 &#9205;</button>
		</nav>
	</div>
	<div class="page scroll" data-target="page3">
		<h1>Page 3</h1>
		<nav>
			<button class="my-button go-page2">&#9204; go to page 2</button>
		</nav>
	</div>
</div>
<div class="output"></div>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const paging = new WUIPaging({
		selector: ".wui-paging.my-paging",
		//index: null,
		//dataTarget: "target",
		onSelect: (inputIndex, inputTarget, outputIndex, outputTarget) => {
			output.textContent = `Selecting page: ${inputTarget} (${inputIndex})`;
		},
		onChange: (index, target) => {
			output.textContent = `Change completed to: ${target} (${index})`;
		},
		onBack: (index, target) => {
			output.textContent = `Back to: ${target} (${index})`;
		},
		onScrolling: (scroll) => {
			output.textContent = `Scrolling at: ${scroll}px`;
		}
	});
	paging.init();
	["page1", "page2", "page3"].forEach(target => {
		document.querySelectorAll(".go-" + target).forEach(button => {
			button.addEventListener("click", () => {
				paging.select(target);
			});
		})
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!NOTE]
> Pages can have the `scroll` class to enable vertical scrolling. The component supports two transition modes: lateral movement (default) or opacity-based (by adding the `opacity` class to the main container).

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-paging-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-paging-basic&lang=en).

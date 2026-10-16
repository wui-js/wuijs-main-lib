[English](wui-list-en.md) | [Español](wui-list-es.md)

[wuijs-main-lib](../../README-en.md)

# WUIList

Version: `0.12`

Component for the implementation of data lists and buttons for each row optionally.

## Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/list/wui-list-0.12.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/list/wui-list-0.12.js) |
| CSS  | [src/wui-js/main/list/wui-list-0.12.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/list/wui-list-0.12.css) |
| CSS  | [src/wui-js/main/list/wui-list-0.12.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/list/wui-list-0.12.root.css) |

## Constructor

| Type    | Description |
| ------- | ----------- |
| WUIList | `WUIList([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

## Properties

| Property     | Type       | Default value | Description |
| ------------ | ---------- | ------------- | ----------- |
| selector     | `string`   | `".wui-list"` | (get/set)<br><br>CSS selector that defines the HTML element that will be converted into the object. If more than one element matches the selector, only the first match will be included. |
| paging       | `number`   | `0`           | (get/set)<br><br>Paging, or the number of rows per page in the list. A value of `0` indicates that the pagination will be the same length as rows; in other words, a value of `0` disables paging. |
| page         | `number`   | `0`           | (get)<br><br>Current page displayed in the list, where page `0` corresponds to the first page and the last to the total number of rows minus 1. |
| pages        | `number`   | `0`           | (get)<br><br>Total number of pages. |
| total        | `number`   | `0`           | (get)<br><br>Total number of rows. |
| columns      | `array`    | `[]`          | (get/set)<br><br>List of columns in the list, as defined by **Column Options**. |
| rows         | `array`    | `[]`          | (get/set)<br><br>List of rows in the list, as defined by **Row Options**. |
| buttons      | `array`    | `[]`          | (get/set)<br><br>List of row buttons in the list, as defined by **Row Button Options**. |
| buttonsStyle | `string`   | `"round"`     | (get/set)<br><br>Row button style.<br><br>Values:<br>• `"round"`, circular shape.<br>• `"stretch"`, square shape. |
| onPrint      | `function` | `null`        | (get/set)<br><br>Function run when a page or the entire list is displayed. The function receives as parameters:<br><br>**• page:** `number`, page number.<br>**• pages:** `number`, total pages.<br>**• total:** `number`, total rows. |
| onClick      | `function` | `null`        | (get/set)<br><br>Function run when a row is clicked. The function receives as parameters:<br><br>**• index:** `number`, row number.<br>**• id:** `string`, row id.<br>**• enabled:** `boolean`, row enable state.<br>**• options:** `object`, row settings options. |

## Column Options

| Property | Type     | Default value | Description |
| -------- | -------- | ------------- | ----------- |
| width    | `string` | `undefined`   | Column width. This can be expressed as a number associated with pixels or in a CSS compatible format. |
| align    | `string` | `"left"`      | Alignment mode for column content.<br><br>Values:<br>• `"left"`<br>• `"right"`<br>• `"center"` |

## Rows Options

| Property     | Type      | Default value | Description |
| ------------ | --------- | ------------- | ----------- |
| id           | `string`  | `undefined`   | Unique row identifier. |
| data         | `array`   | `[]`          | Array with the contents of the cells in the row. |
| innerContent | `string`  | `undefined`   | Optional inner row content, displayed at the bottom of the row. |
| innerOpened  | `boolean` | `false`       | Initial opening of optional inner row content. |
| buttons      | `array`   | `[]`          | Array of button options for the row, in the same order as the `buttons` property. Each item accepts the `iconClass` (`string`), `bgcolor` (`string`) and `enabled` (`boolean`) options, which take precedence over the same options defined in **Row Button Options**. |
| enabled      | `boolean` | `true`        | Defines whether the row is enabled. |

## Row Button Options

| Property  | Type.               | Default value | Description |
| --------- | ------------------- | ------------- | ----------- |
| iconClass | `string\|function`  | `undefined`   | CSS styles that define the row button icon. This option can optionally be used with the [WUIIcon](../icon/wui-icon-en.md) library by using the `wui-icon` style in conjunction with a specific icon style. |
| bgcolor   | `string\|function`  | `undefined`   | Background color in CSS compatible format. |
| enabled   | `boolean\|function` | `true`        | Defines whether the button is enabled. |
| onClick   | `function`          | `null`        | Function run when the button is clicked. It receives the parameters `index`, corresponding to the row position starting from `0`; and `id`, corresponding to the row's unique identifier. |

> [!IMPORTANT]
> Options that accept optional function values ​​(`iconClass`, `bgcolor` and `enabled`) receive the parameters `index`, corresponding to the row position starting from `0`; and `id`, corresponding to the row's unique identifier.

> [!NOTE]
> When the list defines row buttons, dragging a row to the left slides it to reveal its buttons and dragging it to the right closes it. The click that ends a drag does not execute `onClick`. The slide animation respects the `prefers-reduced-motion` preference.

## Methods

| Method       | Return type   | Description |
| ------------ | ------------- | ----------- |
| getElement   | `HTMLElement` | `getElement()`<br><br>Returns the HTML container element of the object. |
| init         | `void`        | `init()`<br><br>Initializes the object. |
| addColumn    | `void`        | `addColumn(options)`<br><br>Adds a new column settings to the object's column list, as defined in **Column Options**. |
| addRow       | `void`        | `addRow(options)`<br><br>Adds a new row settings to the object's rows list, as defined by **Row Options**. |
| addButton    | `void`        | `addButton(options)`<br><br>Adds a new row button settings to the object's list of row buttons, as defined by **RowButtonOptions**. |
| print        | `void`        | `print([page])`<br><br>Arguments:<br>**• page:** `number`, page number. The default value corresponds to the `page` property. If a value other than the `page` property is passed as a parameter and if it is valid, the property will take that value.<br><br>Prints a list view; this view can be a page or the entire list depending on the `paging` property and the `page` parameter. |
| enableRow    | `void`        | `enableRow(index[, enabled])`<br><br>Arguments:<br>**• index:** `number`, row number.<br>**• enabled:** `boolean`, row enable state. The default value is `true`.<br><br>Enables or disables a row. |
| openInnerRow | `void`        | `openInnerRow(index[, open])`<br><br>Arguments:<br>**• index:** `number`, row number.<br>**• open:** `boolean`, open state of the optional inner row content. The default value is `true`.<br><br>Opens or closes the optional inner row content. |
| firstPage    | `void`        | `firstPage()`<br><br>Displays the view of the first page. |
| lastPage     | `void`        | `lastPage()`<br><br>Displays the view of the last page. |
| prevPage     | `void`        | `prevPage()`<br><br>Displays the view of the previous page if it exists. |
| nextPage     | `void`        | `nextPage()`<br><br>Displays the next page view if one exists. |
| isPrevEnable | `boolean`     | `isPrevEnable()`<br><br>Returns whether a previous page exists. |
| isNextEnable | `boolean`     | `isNextEnable()`<br><br>Returns whether a next page exists. |
| destroy      | `void`        | `destroy()`<br><br>Destroyer. |

## CSS Variables

| Variable                             | Description |
| ------------------------------------ | ----------- |
| `--wui-list-shadowcolor`             | Shadow color for the list. |
| `--wui-list-borderradius`            | Border radius for the list. |
| `--wui-list-borderwidth`             | Border width for the list. |
| `--wui-list-bordercolor`             | Border color for the list. |
| `--wui-list-scroll-bgcolor-out`      | Background color of the scrollbar in normal state. |
| `--wui-list-scroll-bgcolor-over`     | Background color of the scrollbar in hover/active state. |
| `--wui-list-row-height`              | Height of list rows. |
| `--wui-list-row-borderwidth`         | Border width for rows. |
| `--wui-list-row-bordercolor-out`     | Border color of rows in normal state. |
| `--wui-list-row-bordercolor-over`    | Border color of rows in hover/focus state. |
| `--wui-list-row-bgcolor-out`         | Background color of rows in normal state. |
| `--wui-list-row-bgcolor-over`        | Background color of rows in hover/focus state. |
| `--wui-list-row-textcolor-out`       | Text color of rows in normal state. |
| `--wui-list-row-textcolor-over`      | Text color of rows in hover/focus state. |
| `--wui-list-row-textcolor-disabled`  | Text color of rows in disabled state. |
| `--wui-list-cell-leftpadding`        | Left cell padding. |
| `--wui-list-cell-rightpadding`       | Right cell padding. |
| `--wui-list-innerrow-borderwidth`    | Border width for inner rows (expandable content). |
| `--wui-list-innerrow-bordercolor`    | Border color for inner rows (expandable content). |
| `--wui-list-innerrow-bgcolor`        | Background color for inner rows (expandable content). |
| `--wui-list-innerrow-textcolor`      | Text color for inner rows (expandable content). |
| `--wui-list-buttons-bgcolor`         | Background color of the slidable row buttons area. |
| `--wui-list-button-size`             | Size of row buttons. |
| `~~--wui-list-button-hmargin~~`      | Horizontal margin between row buttons. |
| `--wui-list-button-horizontalmargin` | Horizontal margin between row buttons. |
| `--wui-list-button-borderradius`     | Border radius for row buttons. |
| `--wui-list-button-bgcolor-enabled`  | Background color of row buttons in enabled state. |
| `--wui-list-button-bgcolor-disabled` | Background color of row buttons in disabled state. |

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

header {
	display: flex;
	width: 600px;
	margin: 10px;
	justify-content: flex-end;
	align-items: center;
	gap: 5px;
}

header > button {
	min-width: 30px;
	height: 24px;
	-webkit-border-radius: 12px;
	-moz-border-radius: 12px;
	border-radius: 12px;
	border: 1px solid #ccc;
	background-color: transparent;
}

header > button.disabled {
	color: #ccc;
}

header > .paging {
	margin-left: 10px;
	font-size: 14px;
}

nav {
	width: 600px;
	margin: 10px;
}

footer {
	width: 600px;
}

.output {
	margin: 10px;
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.8.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.8.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/list/wui-list-0.12.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/list/wui-list-0.12.css">
<script type="text/javascript" src="/libraries/wui-js/main/list/wui-list-0.12.js"></script>
```

HTML code:

```html
<header>
	<button class="first">&#9198;</button>
	<button class="prev">&#9204;</button>
	<button class="next">&#9205;</button>
	<button class="last">&#9197;</button>
	<span class="paging"></span>
</header>
<nav>
	<div class="wui-list my-list"></div>
</nav>
<footer>
	<div class="output"></div>
</footer>
```

JS code:

```js
const init = () => {
	const firstButton = document.body.querySelector("header > button.first");
	const prevButton = document.body.querySelector("header > button.prev");
	const nextButton = document.body.querySelector("header > button.next");
	const lastButton = document.body.querySelector("header > button.last");
	const paging = document.body.querySelector("header > .paging");
	const output = document.body.querySelector("footer > .output");
	const list = new WUIList({
		selector: ".wui-list.my-list",
		paging: 5,
		columns: [{
			width: 10
		}, {
			width: 60,
			align: "center"
		}, {
			align: "left"
		}, {
			width: 60,
			align: "center"
		}],
		rows: [{
			id: "row1", data: ["", "A 1", "B 1", "C 1"]}, {
			id: "row2", data: ["", "A 2", "B 2", "C 2"], enabled: false}, {
			id: "row3", data: ["", "A 3", "B 3", "C 3"]}, {
			id: "row4", data: ["", "A 4", "B 4", "C 4"]}, {
			id: "row5", data: ["", "A 5", "B 5", "C 5"]}, {
			id: "row6", data: ["", "A 6", "B 6", "C 6"]}, {
			id: "row7", data: ["", "A 7", "B 7", "C 7"]}, {
			id: "row8", data: ["", "A 8", "B 8", "C 8"]}, {
			id: "row9", data: ["", "A 9", "B 9", "C 9"]}, {
			id: "row10", data: ["", "A 10", "B 10", "C 10"]}, {
			id: "row11", data: ["", "A 11", "B 11", "C 11"]}, {
			id: "row12", data: ["", "A 12", "B 12", "C 12"]
		}],
		buttons: [{
			iconClass: "wui-icon pencil-fill",
			bgcolor: "#1e90ff",
			onClick: (index, id) => {
				output.textContent = `Click edit button - index: ${index}, id: ${id}`;
			},
			enabled: true
		}, {
			iconClass: "wui-icon trash-fill",
			bgcolor: "#f44343",
			onClick: (index, id) => {
				output.textContent = `Click delete button - index: ${index}, id: ${id}`;
			},
			enabled: true
		}],
		buttonsStyle: "stretch",
		onPrint: (page, pages, total) => {
			if (list.hasPrevPage()) {
				firstButton.classList.remove("disabled");
				prevButton.classList.remove("disabled");
			} else {
				firstButton.classList.add("disabled");
				prevButton.classList.add("disabled");
			}
			if (list.hasNextPage()) {
				lastButton.classList.remove("disabled");
				nextButton.classList.remove("disabled");
			} else {
				lastButton.classList.add("disabled");
				nextButton.classList.add("disabled");
			}
			paging.innerHTML = `${page}/${pages} (${total})`;
		},
		onClick: (index, id, enabled, options) => {
			output.textContent = `Click row - index: ${index}, id: ${id}, enabled: ${enabled}`;
		}
	});
	list.init();
	firstButton.addEventListener("click", () => {
		if (!firstButton.classList.contains("disabled")) {
			list.firstPage();
		}
	});
	prevButton.addEventListener("click", () => {
		if (!prevButton.classList.contains("disabled")) {
			list.prevPage();
		}
	});
	lastButton.addEventListener("click", () => {
		if (!lastButton.classList.contains("disabled")) {
			list.lastPage();
		}
	});
	nextButton.addEventListener("click", () => {
		if (!nextButton.classList.contains("disabled")) {
			list.nextPage();
		}
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-list-paging-buttongroup&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-list-paging-buttongroup&lang=en).

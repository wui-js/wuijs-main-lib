[English](wui-table-en.md) | [Español](wui-table-es.md)

[wuijs-main-lib](../../README-en.md)

# WUITable

Version: `0.13`

Component for the implementation of data tables. Unlike the `WUIList` object, the `WUITable` object includes a column header.

## Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/table/wui-table-0.13.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/table/wui-table-0.13.js) |
| CSS  | [src/wui-js/main/table/wui-table-0.13.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/table/wui-table-0.13.css) |
| CSS  | [src/wui-js/main/table/wui-table-0.13.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/table/wui-table-0.13.root.css) |

## Constructor

| Type     | Description |
| -------- | ----------- |
| WUITable | `WUITable([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

## Properties

| Property     | Type       | Default value  | Description |
| ------------ | ---------- | -------------- | ----------- |
| selector     | `string`   | `".wui-table"` | (get/set)<br><br>CSS selector that defines the HTML element that will be converted into the object. If more than one element matches the selector, only the first match will be included. |
| width        | `string`   | `"auto"`       | (get/set)<br><br>Table width in CSS compatible format. |
| paging       | `number`   | `0`            | (get/set)<br><br>Paging, or the number of rows per page in the table. A value of `0` indicates that the pagination will be the same length as rows; in other words, a value of `0` disables paging. |
| resetPaging  | `boolean`  | `false`        | (get/set)<br><br>Defines whether pagination is reset when sorting by column. |
| page         | `number`   | `0`            | (get)<br><br>Current page displayed in the table, where page `0` corresponds to the first page and the last to the total number of rows minus 1. |
| pages        | `number`   | `0`            | (get)<br><br>Total number of pages. |
| total        | `number`   | `0`            | (get)<br><br>Total number of rows. |
| columns      | `array`    | `[]`           | (get/set)<br><br>List of columns in the table, as defined by **Column Options**. |
| rows         | `array`    | `[]`           | (get/set)<br><br>List of rows in the tabla, as defined by **Row Options**. |
| align        | `string`   | `"left"`       | (get/set)<br><br>Horizontal alignment mode for table content.<br><br>Values:<br>• `"left"`<br>• `"center"`<br>• `"right"` |
| valign       | `string`   | `"middle"`     | (get/set)<br><br>Vertical alignment mode for table content.<br><br>Values:<br>• `"top"`<br>• `"middle"`<br>• `"bottom"` |
| sortable     | `boolean`  | `true`         | (get/set)<br><br>Defines whether rows are sortable by column. |
| resizable    | `boolean`  | `true`         | (get/set)<br><br>Defines whether columns are resizable. |
| draggable    | `boolean`  | `true`         | (get/set)<br><br>Defines whether columns are draggable so their position can be changed. |
| selectable   | `boolean`  | `true`         | (get/set)<br><br>Defines whether rows are selectable. |
| onPrint      | `function` | `null`         | (get/set)<br><br>Function run when a page or the entire table is displayed. The function receives as parameters:<br><br>**• page:** `number`, page number.<br>**• pages:** `number`, total pages.<br>**• total:** `number`, total rows. |
| onClick      | `function` | `null`         | (get/set)<br><br>Function run when a row is clicked. The function receives as parameters:<br><br>**• index:** `number`, row number.<br>**• id:** `string`, row id.<br>**• enabled:** `boolean`, row enable state.<br>**• options:** `object`, row settings options. |
| onDblClick   | `function` | `null`         | (get/set)<br><br>Function run when a row is double-clicked. The function receives as parameters:<br><br>**• index:** `number`, row number.<br>**• id:** `string`, row id.<br>**• enabled:** `boolean`, row enable state.<br>**• options:** `object`, row settings options. |
| onSelect     | `function` | `null`         | (get/set)<br><br>Function run when a row is selected. The function receives as parameters:<br><br>**• index:** `number`, row number.<br>**• id:** `string`, row id.<br>**• enabled:** `boolean`, row enable state.<br>**• options:** `object`, row settings options. |

## Column Options

| Property  | Type      | Default value        | Description |
| --------- | --------- | -------------------- | ----------- |
| label     | `string`  | `""`                 | Column label. |
| width     | `string`  | `undefined`          | Column width. This can be expressed as a number associated with pixels or in a CSS compatible format. |
| align     | `string`  | `WUITable.align`     | Horizontal alignment mode for column content. This option takes precedence over the `align` property.<br><br>Values:<br>• `"left"`<br>• `"center"`<br>• `"right"` |
| valign    | `string`  | `WUITable.valign`    | Vertical alignment mode for column content. This option takes precedence over the `valign` property.<br><br>Values:<br>• `"top"`<br>• `"middle"`<br>• `"bottom"` |
| sortable  | `boolean` | `WUITable.sortable`  | Defines whether rows are sortable by column. This option takes precedence over the `sortable` property. |
| resizable | `boolean` | `WUITable.resizable` | Defines whether the column is resizable. This option takes precedence over the `resizable` property. |
| draggable | `boolean` | `WUITable.draggable` | Defines whether the column is draggable so its position can be changed. This option takes precedence over the `draggable` property. |

> [!IMPORTANT]
> The `width` row option will not take values ​​greater than the maximum width computed between all the cells belonging to the column.
> In this way, the `resizable` mode will only be able to reach that maximum value in each column.

## Rows Options

| Property   | Type      | Default value     | Description |
| ---------- | --------- | ----------------- | ----------- |
| id         | `string`  | `undefined`       | Unique row identifier. |
| align      | `string`  | `WUITable.align`  | Horizontal alignment mode for row content. This option takes precedence over the `align` property.<br><br>Values:<br>• `"left"`<br>• `"center"`<br>• `"right"` |
| valign     | `string`  | `WUITable.valign` | Vertical alignment mode for row content. This option takes precedence over the `valign` property.<br><br>Values:<br>• `"top"`<br>• `"middle"`<br>• `"bottom"` |
| data       | `array`   | `[]`              | Array with the contents of the cells in the row. |
| selectable | `boolean` | `true`            | Defines whether the row is selectable. The `selectable` property takes precedence over this option: if it is `false`, no row is selectable. A non-selectable row does not change its selection state when clicked or through the `selectRow()`, `selectPageRows()` and `selectAllRows()` methods, and it is not included in the result of `getSelectedIds()`. |
| selected   | `boolean` | `false`           | Defines whether the row is selected. |
| enabled    | `boolean` | `true`            | Defines whether the row is enabled. |

## Methods

| Method         | Return type   | Description |
| -------------- | ------------- | ----------- |
| getElement     | `HTMLElement` | `getElement()`<br><br>Returns the HTML container element of the object. |
| getSelectedIds | `Array`       | `getSelectedIds()`<br><br>Returns an array with the `id` values of the currently selected rows. |
| init           | `void`        | `init()`<br><br>Initializes the object. |
| addColumn      | `void`        | `addColumn(options)`<br><br>Adds a new column settings to the object's column list, as defined in **Column Options**. |
| addRow         | `void`        | `addRow(options)`<br><br>Adds a new row settings to the object's rows list, as defined by **Row Options**. |
| print          | `void`        | `print([page])`<br><br>Arguments:<br>**• page:** `number`, page number. The default value corresponds to the `page` property. If a value other than the `page` property is passed as a parameter and if it is valid, the property will take that value.<br><br>Prints a table view; this view can be a page or the entire table depending on the `paging` property and the `page` parameter. |
| sort           | `void`        | `first(index[, direction])`<br><br>Arguments:<br>**• index:** `number`, column number.<br>**• direction:** `string`, order direction, this can be: `"asc"` or `"desc"`. The default value is `asc`. |
| selectRow      | `void`        | `selectRow(index[, selected])`<br><br>Arguments:<br>**• index:** `number`, row number.<br>**• selected:** `boolean`, row selection state. The default is `true`.<br><br>Select or unselect a row. |
| selectPageRows | `void`        | `selectPageRows(page[, selected])`<br><br>Arguments:<br>**• page:** `number`, page number, starting at `0`.<br>**• selected:** `boolean`, rows selection state. The default is `true`.<br><br>Select or unselect all rows of a page. |
| selectAllRows  | `void`        | `selectAllRows([selected])`<br><br>Arguments:<br>**• selected:** `boolean`, rows selection state. The default is `true`.<br><br>Select or unselect all rows of the data, including those of pages not displayed. |
| enableRow      | `void`        | `enableRow(index[, enabled])`<br><br>Arguments:<br>**• index:** `number`, row number.<br>**• enabled:** `boolean`, row enable state. The default value is `true`.<br><br>Enables or disables a row. |
| firstPage      | `void`        | `firstPage()`<br><br>Displays the view of the first page. |
| lastPage       | `void`        | `lastPage()`<br><br>Displays the view of the last page. |
| prevPage       | `void`        | `prevPage()`<br><br>Displays the view of the previous page if it exists. |
| nextPage       | `void`        | `nextPage()`<br><br>Displays the next page view if one exists. |
| isPrevEnable   | `boolean`     | `isPrevEnable()`<br><br>Returns whether a previous page exists. |
| isNextEnable   | `boolean`     | `isNextEnable()`<br><br>Returns whether a next page exists. |
| destroy        | `void`        | `destroy()`<br><br>Destroyer. |

## CSS Variables

| Variable                                       | Description |
| ---------------------------------------------- | ----------- |
| `--wui-table-shadowcolor`                      | Shadow color for the table. |
| `--wui-table-width`                            | Table width. |
| `--wui-table-borderradius`                     | Border radius for the table. |
| `--wui-table-scroll-bgcolor-out`               | Background color of the horizontal scrollbar in normal state. |
| `--wui-table-scroll-bgcolor-over`              | Background color of the horizontal scrollbar in hover/active state. |
| `--wui-table-column-borderwidth`               | Border width for columns. |
| `--wui-table-column-bordercolor-out`           | Border color of columns in normal state. |
| `--wui-table-column-bordercolor-over`          | Border color of columns in hover/focus state. |
| `--wui-table-column-bordercolor-selected`      | Border color of columns in selected state. |
| `--wui-table-column-bordercolor-disabled`      | Border color of columns in disabled state. |
| `--wui-table-column-bgcolor-out`               | Background color of columns in normal state. |
| `--wui-table-column-bgcolor-over`              | Background color of columns in hover/focus state. |
| `--wui-table-column-bgcolor-selected`          | Background color of columns in selected state. |
| `--wui-table-column-bgcolor-disabled`          | Background color of columns in disabled state. |
| `--wui-table-column-textcolor-out`             | Text color of columns in normal state. |
| `--wui-table-column-textcolor-over`            | Text color of columns in hover/focus state. |
| `--wui-table-column-textcolor-selected`        | Text color of columns in selected state. |
| `--wui-table-column-textcolor-disabled`        | Text color of columns in disabled state. |
| `--wui-table-column-sorter-iconsize`           | Icon size for column sorting. |
| `--wui-table-column-sorter-iconcolor-out`      | Color of the sorting icon in normal state. |
| `--wui-table-column-sorter-iconcolor-over`     | Color of the sorting icon in hover state. |
| `--wui-table-column-sorter-iconcolor-disabled` | Color of the sorting icon in disabled state. |
| `--wui-table-column-sorter-ascicon-src`        | Source for the ascending sort icon<br>(format: `url()` or `none` for the default source). |
| `--wui-table-column-sorter-descicon-src`       | Source for the descending sort icon<br>(format: `url()` or `none` for the default source). |
| `--wui-table-column-resizer-bordercolor-out`   | Border color of the column resizer in normal state. |
| `--wui-table-column-resizer-bordercolor-over`  | Border color of the column resizer in hover state. |
| `--wui-table-column-dragger-bordercolor-over`  | Border color of the column during drag in hover state. |
| `--wui-table-column-dragger-bgcolor-drop`      | Background color of the column when dropping during drag. |
| `--wui-table-row-borderwidth`                  | Border width for rows. |
| `--wui-table-row-bordercolor-out`              | Border color of rows in normal state. |
| `--wui-table-row-bordercolor-over`             | Border color of rows in hover/focus state. |
| `--wui-table-row-bordercolor-selected`         | Border color of rows in selected state. |
| `--wui-table-row-bordercolor-disabled`         | Border color of rows in disabled state. |
| `--wui-table-row-bgcolor-out`                  | Background color of rows in normal state. |
| `--wui-table-row-bgcolor-over`                 | Background color of rows in hover/focus state. |
| `--wui-table-row-bgcolor-selected`             | Background color of rows in selected state. |
| `--wui-table-row-bgcolor-disabled`             | Background color of rows in disabled state. |
| `--wui-table-row-textcolor-out`                | Text color of rows in normal state. |
| `--wui-table-row-textcolor-over`               | Text color of rows in hover/focus state. |
| `--wui-table-row-textcolor-selected`           | Text color of rows in selected state. |
| `--wui-table-row-textcolor-disabled`           | Text color of rows in disabled state. |

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
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/table/wui-table-0.13.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/table/wui-table-0.13.css">
<script type="text/javascript" src="/libraries/wui-js/main/table/wui-table-0.13.js"></script>
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
	<div class="wui-table my-table"></div>
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
	const table = new WUITable({
		selector: ".wui-table.my-table",
		//width: "auto",
		paging: 5,
		resetPaging: true,
		columns: [{
			label: "A Column",
			width: 100
		}, {
			label: "B Column",
			width: 100
		}, {
			label: "C Column",
			width: 100
		}, {
			label: "D Column",
			width: 100
		}],
		rows: [{
			id: "row1", data: ["A 1", "B 1", "C 1", "D 1"]}, {
			id: "row2", data: ["A 2", "B 2", "C 2", "D 2"], enabled: false}, {
			id: "row3", data: ["A 3", "B 3", "C 3", "D 3"]}, {
			id: "row4", data: ["A 4", "B 4", "C 4", "D 4"]}, {
			id: "row5", data: ["A 5", "B 5", "C 5", "D 5"]}, {
			id: "row6", data: ["A 6", "B 6", "C 6", "D 6"]}, {
			id: "row7", data: ["A 7", "B 7", "C 7", "D 7"]}, {
			id: "row8", data: ["A 8", "B 8", "C 8", "D 8"]}, {
			id: "row9", data: ["A 9", "B 9", "C 9", "D 9"]}, {
			id: "row10", data: ["A 10", "B 10", "C 10", "D 10"]}, {
			id: "row11", data: ["A 11", "B 11", "C 11", "D 11"]}, {
			id: "row12", data: ["A 12", "B 12", "C 12", "D 12"]
		}],
		align: "center",
		//valign: "middle",
		//sortable: true,
		//resizable: true,
		//draggable: true,
		//selectable: true,
		onPrint: (page, pages, total) => {
			if (table.hasPrevPage()) {
				firstButton.classList.remove("disabled");
				prevButton.classList.remove("disabled");
			} else {
				firstButton.classList.add("disabled");
				prevButton.classList.add("disabled");
			}
			if (table.hasNextPage()) {
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
		},
		onDblClick: (index, id, enabled, options) => {
			output.textContent = `Double-Click row - index: ${index}, id: ${id}, enabled: ${enabled}`;
		},
		onSelect: (index, id, enabled, options) => {
			output.textContent = `Select row - index: ${index}, id: ${id}, enabled: ${enabled}`;
		}
	});
	table.init();
	firstButton.addEventListener("click", () => {
		if (!firstButton.classList.contains("disabled")) {
			table.firstPage();
		}
	});
	prevButton.addEventListener("click", () => {
		if (!prevButton.classList.contains("disabled")) {
			table.prevPage();
		}
	});
	lastButton.addEventListener("click", () => {
		if (!lastButton.classList.contains("disabled")) {
			table.lastPage();
		}
	});
	nextButton.addEventListener("click", () => {
		if (!nextButton.classList.contains("disabled")) {
			table.nextPage();
		}
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-table-paging&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-table-paging&lang=en).

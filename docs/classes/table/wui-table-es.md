[English](wui-table-en.md) | [Español](wui-table-es.md)

[wuijs-main-lib](../../README-es.md)

# WUITable

Versión: `0.13`

Componente para la implementación de tablas de datos. A diferencia del objeto `WUIList`, el objeto `WUITable` incluye una cabecera de columnas.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/main/table/wui-table-0.13.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/table/wui-table-0.13.js) |
| CSS  | [src/wui-js/main/table/wui-table-0.13.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/table/wui-table-0.13.css) |
| CSS  | [src/wui-js/main/table/wui-table-0.13.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/table/wui-table-0.13.root.css) |

## Constructor

| Tipo     | Descripción |
| -------- | ----------- |
| WUITable | `WUITable([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

## Propiedades

| Propiedad    | Tipo       | Valor predeterminado | Descripción |
| ------------ | ---------- | -------------------- | ----------- |
| selector     | `string`   | `".wui-table"`       | (get/set)<br><br>Selector CSS que define el elemento HTML que serán convertido en el objeto. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. |
| width        | `string`   | `"auto"`             | (get/set)<br><br>Ancho de la tabla en formato compatible CSS. |
| paging       | `number`   | `0`                  | (get/set)<br><br>Paginado o número de filas por pagina de la tabla. El valor `0` indica que el paginado tendrá el mismo largo que filas, dicho de tra manera, el valor `0` desactiva el paginado. |
| resetPaging  | `boolean`  | `false`              | (get/set)<br><br>Define si el paginado se reinicia al ordenar por columna. |
| page         | `number`   | `0`                  | (get)<br><br>Página actual mostrada en la tabla, donde la página `0` corresponde a la primera página y la última al número total de filas menos 1. |
| pages        | `number`   | `0`                  | (get)<br><br>Número total de páginas. |
| total        | `number`   | `0`                  | (get)<br><br>Número total de filas. |
| columns      | `array`    | `[]`                 | (get/set)<br><br>Lista de columnas de la tabla, según la definición de **Opciones de Columna**. |
| rows         | `array`    | `[]`                 | (get/set)<br><br>Lista de filas de la tabla, según la definición de **Opciones de Fila**. |
| align        | `string`   | `"left"`             | (get/set)<br><br>Modo de alineación horizontal del contenido de la tabla.<br><br>Valores:<br>• `"left"`<br>• `"center"`<br>• `"right"` |
| valign       | `string`   | `"middle"`           | (get/set)<br><br>Modo de alineación vertical del contenido de la tabla.<br><br>Valores:<br>• `"top"`<br>• `"middle"`<br>• `"bottom"` |
| sortable     | `boolean`  | `true`               | (get/set)<br><br>Define si las filas son ordenables por columna. |
| resizable    | `boolean`  | `true`               | (get/set)<br><br>Define si las columnas son redimensionables. |
| draggable    | `boolean`  | `true`               | (get/set)<br><br>Define si las columnas son arrastrables para poder cambiar su posición. |
| selectable   | `boolean`  | `true`               | (get/set)<br><br>Define si las filas son seleccionables. |
| onPrint      | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando una página o la totalidad de la tabla es despliega. La función recibe por parámetro:<br><br>**• page:** `number`, número de página.<br>**• pages:** `number`, total de página.<br>**• total:** `number`, total de filas. |
| onClick      | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando una fila es presionada. La función recibe por parámetro:<br><br>**• index:** `number`, número de fila.<br>**• id:** `string`, id de fila.<br>**• enabled:** `boolean`, estado de habilitación de fila.<br>**• options:** `object`, opciones de configuración de la fila. |
| onDblClick   | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando una fila es presionada dos veces. La función recibe por parámetro:<br><br>**• index:** `number`, número de fila.<br>**• id:** `string`, id de fila.<br>**• enabled:** `boolean`, estado de habilitación de fila.<br>**• options:** `object`, opciones de configuración de la fila. |
| onSelect     | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando una fila es seleccionada. La función recibe por parámetro:<br><br>**• index:** `number`, número de fila.<br>**• id:** `string`, id de fila.<br>**• enabled:** `boolean`, estado de habilitación de fila.<br>**• options:** `object`, opciones de configuración de la fila. |

## Opciones de Columna

| Propiedad | Tipo      | Valor predeterminado | Descripción |
| --------- | --------- | -------------------- | ----------- |
| label     | `string`  | `""`                 | Etiqueta de la columna. |
| width     | `string`  | `undefined`          | Ancho de la columna. Este puede estar expresado como número asociado a píxeles o en formato compatible CSS. |
| align     | `string`  | `WUITable.align`     | Modo de alineación horizontal del contenido de la columna. Esta opción tiene prioridad sobre la propiedad `align`.<br><br>Valores:<br>• `"left"`<br>• `"center"`<br>• `"right"` |
| valign    | `string`  | `WUITable.valign`    | Modo de alineación vertical del contenido de la columna. Esta opción tiene prioridad sobre la propiedad `valign`.<br><br>Valores:<br>• `"top"`<br>• `"middle"`<br>• `"bottom"` |
| sortable  | `boolean` | `WUITable.sortable`  | Define si las filas son ordenables en base a la columna. Esta opción tiene prioridad sobre la propiedad `sortable`. |
| resizable | `boolean` | `WUITable.resizable` | Define si la columna es redimensionables. Esta opción tiene prioridad sobre la propiedad `resizable`. |
| draggable | `boolean` | `WUITable.draggable` | Define si la columna es arrastrables para poder cambiar su posición. Esta opción tiene prioridad sobre la propiedad `draggable`. |

> [!IMPORTANT]
> La opción de fila `width` no tomará valores mayores al ancho máximo computado entre todas las celdas pertenecientes a la columna.
> De esta manera, el modo `resizable` sólo podrá alcanzar dicho valor máximo en cada columna.

## Opciones de Fila

| Propiedad  | Tipo      | Valor predeterminado | Descripción |
| ---------- | --------- | -------------------- | ----------- |
| id         | `string`  | `undefined`          | Identificador único de fila. |
| align      | `string`  | `WUITable.align`     | Modo de alineación horizontal del contenido de la fila. Esta opción tiene prioridad sobre la propiedad `align`.<br><br>Valores:<br>• `"left"`<br>• `"center"`<br>• `"right"` |
| valign     | `string`  | `WUITable.valign`    | Modo de alineación vertical del contenido de la fila. Esta opción tiene prioridad sobre la propiedad `valign`.<br><br>Valores:<br>• `"top"`<br>• `"middle"`<br>• `"bottom"` |
| data       | `array`   | `[]`                 | Arreglo con el contenido de las celdas de la fila. |
| selectable | `boolean` | `true`               | Define si la fila es seleccionable. La propiedad `selectable` tiene prioridad sobre esta opción: si es `false`, ninguna fila es seleccionable. Una fila no seleccionable no cambia su estado de selección al ser presionada ni mediante los métodos `selectRow()`, `selectPageRows()` y `selectAllRows()`, y no es incluida en el resultado de `getSelectedIds()`. |
| selected   | `boolean` | `false`              | Define si la fila está seleccionada. |
| enabled    | `boolean` | `true`               | Define si la fila está habilitada. |

## Métodos

| Método         | Tipo retorno  | Descripción |
| -------------- | ------------- | ----------- |
| getElement     | `HTMLElement` | `getElement()`<br><br>Retorna el elemento HTML contenedor del objeto. |
| getSelectedIds | `Array`       | `getSelectedIds()`<br><br>Retorna un arreglo con los valores `id` de las filas actualmente seleccionadas. |
| init           | `void`        | `init()`<br><br>Inicializa el objeto. |
| addColumn      | `void`        | `addColumn(options)`<br><br>Agrega la configuración de una nueva columna a la lista de columnas del objeto, según la definición de **Opciones de Columna**. |
| addRow         | `void`        | `addRow(options)`<br><br>Agrega la configuración de una nueva fila a la lista filas del objeto, según la definición de **Opciones de Fila**. |
| print          | `void`        | `print([page])`<br><br>Parámetros:<br>**• page:** `number`, número de página. El valor predeterminado corresponde a la propiedad `page`. Si se pasa como parámetro un valor distinto al de la propiedad `page` y si es válido, la propiedad tomará dicho valor.<br><br>Imprime la vista de una tabla, esta vista puede ser una página o la tabla completa según la propiedad `paging` y el parámetro `page`. |
| sort           | `void`        | `first(index[, direction])`<br><br>Parámetros:<br>**• index:** `number`, número de columns.<br>**• direction:** `string`, dirección de orden, esta puede ser: `"asc"` o `"desc"`. El valor predeterminado `asc`. |
| selectRow      | `void`        | `selectRow(index[, selected])`<br><br>Parámetros:<br>**• index:** `number`, número de fila.<br>**• selected:** `boolean`, estado de selección de la fila. El valor predeterminado `true`.<br><br>Selecciona o deselecciona una fila. |
| selectPageRows | `void`        | `selectPageRows(page[, selected])`<br><br>Parámetros:<br>**• page:** `number`, número de página, comenzando en `0`.<br>**• selected:** `boolean`, estado de selección de las filas. El valor predeterminado `true`.<br><br>Selecciona o deselecciona todas las filas de una página. |
| selectAllRows  | `void`        | `selectAllRows([selected])`<br><br>Parámetros:<br>**• selected:** `boolean`, estado de selección de las filas. El valor predeterminado `true`.<br><br>Selecciona o deselecciona todas las filas del data, incluidas las de páginas no desplegadas. |
| enableRow      | `void`        | `enableRow(index[, enabled])`<br><br>Parámetros:<br>**• index:** `number`, número de fila.<br>**• enabled:** `boolean`, estado de habilitación de la fila. El valor predeterminado `true`.<br><br>Hablita o deshabilita una fila. |
| firstPage      | `void`        | `firstPage()`<br><br>Despliega la vista de la primera página. |
| lastPage       | `void`        | `lastPage()`<br><br>Despliega la vista de la última página. |
| prevPage       | `void`        | `prevPage()`<br><br>Despliega la vista de la página previa si es que esta existe. |
| nextPage       | `void`        | `nextPage()`<br><br>Despliega la vista de la página siguiente si es que esta existe. |
| hasPrevPage    | `boolean`     | `hasPrevPage()`<br><br>Retorna si existe una página previa. |
| hasNextPage    | `boolean`     | `hasNextPage()`<br><br>Retorna si existe una página siguiente. |
| destroy        | `void`        | `destroy()`<br><br>Destructor. |

## Variables CSS

| Variable                                       | Descripción |
| ---------------------------------------------- | ----------- |
| `--wui-table-shadowcolor`                      | Color de la sombra de la tabla. |
| `--wui-table-width`                            | Ancho de la tabla. |
| `--wui-table-borderradius`                     | Radio de borde de la tabla. |
| `--wui-table-scroll-bgcolor-out`               | Color de fondo de la barra de desplazamiento horizontal en estado normal. |
| `--wui-table-scroll-bgcolor-over`              | Color de fondo de la barra de desplazamiento horizontal en estado hover/activo. |
| `--wui-table-column-borderwidth`               | Ancho del borde de las columnas. |
| `--wui-table-column-bordercolor-out`           | Color del borde de las columnas en estado normal. |
| `--wui-table-column-bordercolor-over`          | Color del borde de las columnas en estado hover/focus. |
| `--wui-table-column-bordercolor-selected`      | Color del borde de las columnas en estado seleccionado. |
| `--wui-table-column-bordercolor-disabled`      | Color de borde de las columnas en estado deshabilitado. |
| `--wui-table-column-bgcolor-out`               | Color de fondo de las columnas en estado normal. |
| `--wui-table-column-bgcolor-over`              | Color de fondo de las columnas en estado hover/focus. |
| `--wui-table-column-bgcolor-selected`          | Color de fondo de las columnas en estado seleccionado. |
| `--wui-table-column-bgcolor-disabled`          | Color de fondo de las columnas en estado deshabilitado. |
| `--wui-table-column-textcolor-out`             | Color del texto de las columnas en estado normal. |
| `--wui-table-column-textcolor-over`            | Color del texto de las columnas en estado hover/focus. |
| `--wui-table-column-textcolor-selected`        | Color del texto de las columnas en estado seleccionado. |
| `--wui-table-column-textcolor-disabled`        | Color del texto de las columnas en estado deshabilitado. |
| `--wui-table-column-sorter-iconsize`           | Tamaño del ícono de ordenamiento de columnas. |
| `--wui-table-column-sorter-iconcolor-out`      | Color del ícono de ordenamiento en estado normal. |
| `--wui-table-column-sorter-iconcolor-over`     | Color del ícono de ordenamiento en estado hover. |
| `--wui-table-column-sorter-iconcolor-disabled` | Color del ícono de ordenamiento en estado deshabilitado. |
| `--wui-table-column-sorter-ascicon-src`        | Fuente del ícono de ordenamiento ascendente<br>(formato: `url()` o `none` para utilizar la fuente predeterminada). |
| `--wui-table-column-sorter-descicon-src`       | Fuente del ícono de ordenamiento descendente<br>(formato: `url()` o `none` para utilizar la fuente predeterminada). |
| `--wui-table-column-resizer-bordercolor-out`   | Color del borde del redimensionador de columna en estado normal. |
| `--wui-table-column-resizer-bordercolor-over`  | Color del borde del redimensionador de columna en estado hover. |
| `--wui-table-column-dragger-bordercolor-over`  | Color del borde de la columna durante el arrastre en estado hover. |
| `--wui-table-column-dragger-bgcolor-drop`      | Color de fondo de la columna al soltar durante el arrastre. |
| `--wui-table-row-borderwidth`                  | Ancho de borde de las filas. | Ancho del borde de las filas. |
| `--wui-table-row-bordercolor-out`              | Color del borde de las filas en estado normal. |
| `--wui-table-row-bordercolor-over`             | Color del borde de las filas en estado hover/focus. |
| `--wui-table-row-bordercolor-selected`         | Color del borde de las filas en estado seleccionado. |
| `--wui-table-row-bordercolor-disabled`         | Color del borde de las filas en estado deshabilitado. |
| `--wui-table-row-bgcolor-out`                  | Color de fondo de las filas en estado normal. |
| `--wui-table-row-bgcolor-over`                 | Color de fondo de las filas en estado hover/focus. |
| `--wui-table-row-bgcolor-selected`             | Color de fondo de las filas en estado seleccionado. |
| `--wui-table-row-bgcolor-disabled`             | Color de fondo de las filas en estado deshabilitado. |
| `--wui-table-row-textcolor-out`                | Color del texto de las filas en estado normal. |
| `--wui-table-row-textcolor-over`               | Color del texto de las filas en estado hover/focus. |
| `--wui-table-row-textcolor-selected`           | Color del texto de las filas en estado seleccionado. |
| `--wui-table-row-textcolor-disabled`           | Color del texto de las filas en estado deshabilitado. |

## Implementación

Código CSS:

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

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/table/wui-table-0.13.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/table/wui-table-0.13.css">
<script type="text/javascript" src="/libraries/wui-js/main/table/wui-table-0.13.js"></script>
```

Código HTML:

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

Código JS:

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
			output.textContent = `Clic fila - índice: ${index}, id: ${id}, enabled: ${enabled}`;
		},
		onDblClick: (index, id, enabled, options) => {
			output.textContent = `Doble-Clic fila - índice: ${index}, id: ${id}, enabled: ${enabled}`;
		},
		onSelect: (index, id, enabled, options) => {
			output.textContent = `Selección fila - índice: ${index}, id: ${id}, enabled: ${enabled}`;
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
> Si el selector define un elemento que no es de tipo `HTMLDivElement`, el objeto no se inicializará.

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-table-paging&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-table-paging&lang=es).

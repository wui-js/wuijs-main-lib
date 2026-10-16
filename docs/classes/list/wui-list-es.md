[English](wui-list-en.md) | [Español](wui-list-es.md)

[wuijs-main-lib](../../README-es.md)

# WUIList

Versión: `0.12`

Componente para la implementación de listas de datos y botoneras para cada fila de manera opcional.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/main/list/wui-list-0.12.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/list/wui-list-0.12.js) |
| CSS  | [src/wui-js/main/list/wui-list-0.12.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/list/wui-list-0.12.css) |
| CSS  | [src/wui-js/main/list/wui-list-0.12.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/list/wui-list-0.12.root.css) |

## Constructor

| Tipo    | Descripción |
| ------- | ----------- |
| WUIList | `WUIList([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

## Propiedades

| Propiedad    | Tipo       | Valor predeterminado | Descripción |
| ------------ | ---------- | -------------------- | ----------- |
| selector     | `string`   | `".wui-list"`        | (get/set)<br><br>Selector CSS que define el elemento HTML que serán convertido en el objeto. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. |
| paging       | `number`   | `0`                  | (get/set)<br><br>Paginado o número de filas por pagina de la lista. El valor `0` indica que el paginado tendrá el mismo largo que filas, dicho de otra manera, el valor `0` desactiva el paginado. |
| page         | `number`   | `0`                  | (get)<br><br>Página actual mostrada en la lista, donde la página `0` corresponde a la primera página y la última al número total de filas menos 1. |
| pages        | `number`   | `0`                  | (get)<br><br>Número total de páginas. |
| total        | `number`   | `0`                  | (get)<br><br>Número total de filas. |
| columns      | `array`    | `[]`                 | (get/set)<br><br>Lista de columnas de la lista, según la definición de **Opciones de Columna**. |
| rows         | `array`    | `[]`                 | (get/set)<br><br>Lista de filas de la lista, según la definición de **Opciones de Fila**. |
| buttons      | `array`    | `[]`                 | (get/set)<br><br>Lista de botones de filas de la lista, según la definición de **Opciones de Botón de Fila**. |
| buttonsStyle | `string`   | `"round"`            | (get/set)<br><br>Estilo de los botones de fila.<br><br>Valores:<br>• `"round"`, forma circular.<br>• `"stretch"`, forma cuadrada. |
| onPrint      | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando se despliega una página o la totalidad de la lista. La función recibe por parámetro:<br><br>**• page:** `number`, número de página.<br>**• pages:** `number`, total de página.<br>**• total:** `number`, total de filas. |
| onClick      | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando una fila es presionada. La función recibe por parámetro:<br><br>**• index:** `number`, número de fila.<br>**• id:** `string`, id de fila.<br>**• enabled:** `boolean`, estado de habilitación de fila.<br>**• options:** `object`, opciones de configuración de la fila. |

## Opciones de Columna

| Propiedad | Tipo     | Valor predeterminado | Descripción |
| --------- | -------- | -------------------- | ----------- |
| width     | `string` | `undefined`          | Ancho de la columna. Este puede estar expresado como número asociado a píxeles o en formato compatible CSS. |
| align     | `string` | `"left"`             | Modo de alineación de el contenido de la columna.<br><br>Valores:<br>• `"left"`<br>• `"right"`<br>• `"center"` |

## Opciones de Fila

| Propiedad    | Tipo      | Valor predeterminado | Descripción |
| ------------ | --------- | -------------------- | ----------- |
| id           | `string`  | `undefined`          | Identificador único de fila. |
| data         | `array`   | `[]`                 | Arreglo con el contenido de las celdas de la fila. |
| innerContent | `string`  | `undefined`          | Contenido opcional de la fila interna, desplegado en la parte inferior de la fila. |
| innerOpened  | `boolean` | `false`              | Apertura inicial del contenido opcional de la fila interna. |
| buttons      | `array`   | `[]`                 | Arreglo de opciones de botón para la fila, en el mismo orden que la propiedad `buttons`. Cada elemento acepta las opciones `iconClass` (`string`), `bgcolor` (`string`) y `enabled` (`boolean`), las que tienen prioridad sobre las mismas opciones definidas en **Opciones de Botón de Fila**. |
| enabled      | `boolean` | `true`               | Define si la fila está habilitada. |

## Opciones de Botón de Fila

| Propiedad | Tipo                | Valor predeterminado | Descripción |
| --------- | ------------------- | -------------------- | ----------- |
| iconClass | `string\|function`  | `undefined`          | Estilos CSS que define el ícono del botón de fila. Esta opción puede ser utilizado opcionalmente con la librería [WUIIcon](../icon/wui-icon-es.md) mediante el estilo `wui-icon` conjuntamente a un estilo de ícono específico. |
| bgcolor   | `string\|function`  | `undefined`          | Color de fondo en formato compatible CSS. |
| enabled   | `boolean\|function` | `true`               | Define si el botón está habilitado. |
| onClick   | `function`          | `null`               | Función que se ejecuta cuando el botón es presionado. Reciben los parámetro `index`, correspondiente a la posición de la fila partiendo desde `0`; y `id`, correspondiente al Identificador único de fila. |

> [!IMPORTANT]
> Las opciones que aceptan valores opcionales de tipo función (`iconClass`, `bgcolor` y `enabled`), reciben los parámetro `index`, correspondiente a la posición de la fila partiendo desde `0`; e `id`, correspondiente al Identificador único de fila.

> [!NOTE]
> Cuando la lista define botones de fila, al arrastrar una fila hacia la izquierda esta se desplaza mostrando sus botones y al arrastrarla hacia la derecha se cierra. El clic que finaliza un arrastre no ejecuta `onClick`. La animación de desplazamiento respeta la preferencia `prefers-reduced-motion`.

## Métodos

| Método       | Tipo retorno  | Descripción |
| ------------ | ------------- | ----------- |
| getElement   | `HTMLElement` | `getElement()`<br><br>Retorna el elemento HTML contenedor del objeto. |
| init         | `void`        | `init()`<br><br>Inicializa el objeto. |
| addColumn    | `void`        | `addColumn(options)`<br><br>Agrega la configuración de una nueva columna a la lista de columnas del objeto, según la definición de **Opciones de Columna**. |
| addRow       | `void`        | `addRow(options)`<br><br>Agrega la configuración de una nueva fila a la lista filas del objeto, según la definición de **Opciones de Fila**. |
| addButton    | `void`        | `addButton(options)`<br><br>Agrega la configuración de un nuevo botón de fila a la lista de botones de fila del objeto, según la definición de **Opciones de Botón de Fila**. |
| print        | `void`        | `print([page])`<br><br>Parámetros:<br>**• page:** `number`, número de página. El valor predeterminado corresponde a la propiedad `page`. Si se pasa como parámetro un valor distinto al de la propiedad `page` y si es válido, la propiedad tomará dicho valor.<br><br>Imprime la vista de una lista, esta vista puede ser una página o la lista completa según la propiedad `paging` y el parámetro `page`. |
| enableRow    | `void`        | `enableRow(index[, enabled])`<br><br>Parámetros:<br>**• index:** `number`, número de fila.<br>**• enabled:** `boolean`, estado de habilitación de la fila. El valor predeterminado `true`.<br><br>Habilita o deshabilita una fila. |
| openInnerRow | `void`        | `openInnerRow(index[, open])`<br><br>Parámetros:<br>**• index:** `number`, número de fila.<br>**• open:** `boolean`, estado de apertura del contenido opcional de la fila interna. El valor predeterminado `true`.<br><br>Abre o cierra el contenido opcional de la fila interna. |
| firstPage    | `void`        | `firstPage()`<br><br>Despliega la vista de la primera página. |
| lastPage     | `void`        | `lastPage()`<br><br>Despliega la vista de la última página. |
| prevPage     | `void`        | `prevPage()`<br><br>Despliega la vista de la página previa si es que esta existe. |
| nextPage     | `void`        | `nextPage()`<br><br>Despliega la vista de la página siguiente si es que esta existe. |
| hasPrevPage  | `boolean`     | `hasPrevPage()`<br><br>Retorna si existe una página previa. |
| hasNextPage  | `boolean`     | `hasNextPage()`<br><br>Retorna si existe una página siguiente. |
| destroy      | `void`        | `destroy()`<br><br>Destructor. |

## Variables CSS

| Variable                             | Descripción |
| ------------------------------------ | ----------- |
| `--wui-list-shadowcolor`             | Color de la sombra de la lista. |
| `--wui-list-borderradius`            | Radio de borde de la lista. |
| `--wui-list-borderwidth`             | Ancho del borde de la lista. |
| `--wui-list-bordercolor`             | Color del borde de la lista. |
| `--wui-list-scroll-bgcolor-out`      | Color de fondo de la barra de desplazamiento en estado normal. |
| `--wui-list-scroll-bgcolor-over`     | Color de fondo de la barra de desplazamiento en estado hover/activo. |
| `--wui-list-row-height`              | Altura de las filas de la lista. |
| `--wui-list-row-borderwidth`         | Ancho del borde de las filas. |
| `--wui-list-row-bordercolor-out`     | Color del borde de las filas en estado normal. |
| `--wui-list-row-bordercolor-over`    | Color del borde de las filas en estado hover/focus. |
| `--wui-list-row-bgcolor-out`         | Color de fondo de las filas en estado normal. |
| `--wui-list-row-bgcolor-over`        | Color de fondo de las filas en estado hover/focus. |
| `--wui-list-row-textcolor-out`       | Color del texto de las filas en estado normal. |
| `--wui-list-row-textcolor-over`      | Color del texto de las filas en estado hover/focus. |
| `--wui-list-row-textcolor-disabled`  | Color del texto de las filas en estado deshabilitado. |
| `--wui-list-cell-leftpadding`        | Padding izquierdo de celda. |
| `--wui-list-cell-rightpadding`       | Padding derecho de celda. |
| `--wui-list-innerrow-borderwidth`    | Ancho del borde de las filas internas (contenido expandible). |
| `--wui-list-innerrow-bordercolor`    | Color del borde de las filas internas (contenido expandible). |
| `--wui-list-innerrow-bgcolor`        | Color de fondo de las filas internas (contenido expandible). |
| `--wui-list-innerrow-textcolor`      | Color del texto de las filas internas (contenido expandible). |
| `--wui-list-buttons-bgcolor`         | Color de fondo del área de botones deslizables de fila. |
| `--wui-list-button-size`             | Tamaño de los botones de fila. |
| `~~--wui-list-button-hmargin~~`      | Margen horizontal entre botones de fila. |
| `--wui-list-button-horizontalmargin` | Margen horizontal entre botones de fila. |
| `--wui-list-button-borderradius`     | Radio de borde de los botones de fila. |
| `--wui-list-button-bgcolor-enabled`  | Color de fondo de los botones de fila en estado habilitado. |
| `--wui-list-button-bgcolor-disabled` | Color de fondo de los botones de fila en estado deshabilitado. |

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
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.8.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.8.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/list/wui-list-0.12.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/list/wui-list-0.12.css">
<script type="text/javascript" src="/libraries/wui-js/main/list/wui-list-0.12.js"></script>
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
	<div class="wui-list my-list"></div>
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
				output.textContent = `Clic botón editar - índice: ${index}, id: ${id}`;
			},
			enabled: true
		}, {
			iconClass: "wui-icon trash-fill",
			bgcolor: "#f44343",
			onClick: (index, id) => {
				output.textContent = `Clic botón borrar - índice: ${index}, id: ${id}`;
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
			output.textContent = `Clic fila - índice: ${index}, id: ${id}, enabled: ${enabled}`;
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
> Si el selector define un elemento que no es de tipo `HTMLDivElement`, el objeto no se inicializará.

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-list-paging-buttongroup&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-list-paging-buttongroup&lang=es).

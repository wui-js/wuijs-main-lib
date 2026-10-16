[English](wui-datepicker-en.md) | [Español](wui-datepicker-es.md)

[wuijs-main-lib](../../README-es.md)

# WUIDatepicker

Versión: `0.14`

Componente para la implementación de entradas de datos de tipo fecha basada en el elemento HTML `<input type="date">`.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/main/datepicker/wui-datepicker-0.14.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/datepicker/wui-datepicker-0.14.js) |
| CSS  | [src/wui-js/main/datepicker/wui-datepicker-0.14.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/datepicker/wui-datepicker-0.14.css) |
| CSS  | [src/wui-js/main/datepicker/wui-datepicker-0.14.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/datepicker/wui-datepicker-0.14.root.css) |

## Constructor

| Tipo          | Descripción |
| ------------- | ----------- |
| WUIDatepicker | `WUIDatepicker([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

## Propiedades

| Propiedad     | Tipo       | Valor predeterminado | Descripción |
| ------------- | ---------- | -------------------- | ----------- |
| selector      | `string`   | `".wui-datepicker"`  | (get/set)<br><br>Selector CSS que define el elemento HTML contenedor del objeto. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. |
| locale        | `string`   | `"en-US"`            | (get/set)<br><br>Código de configuración regional en formato `<ISO 639-1>-<ISO 3166-1 alpha-2>`. Por ejemplo: `es-CL`, `en-US`, `fr-FR`, etc. |
| name          | `string`   | `""`                 | (get/set)<br><br>Define el nombre de la entrada de datos `<input type="date">`. |
| value         | `string`   | `""`                 | (get/set)<br><br>Fecha seleccionada en formato `yyyy-mm-dd`. |
| min           | `string`   | `""`                 | (get/set)<br><br>Fecha mínima permitida en formato `yyyy-mm-dd`. |
| max           | `string`   | `""`                 | (get/set)<br><br>Fecha máxima permitida en formato `yyyy-mm-dd`. |
| monthsNames   | `array`    | `[]`                 | (get/set)<br><br>Nombres personalizados para los meses. Si se define, sobrescribe los nombres generados por `locale`. |
| weekDaysNames | `array`    | `[]`                 | (get/set)<br><br>Nombres personalizados para los días de la semana. Si se define, sobrescribe los nombres generados por `locale`. |
| texts         | `object`   | `{}`                 | (get/set)<br><br>Textos personalizados para los botones y mensajes del componente. |
| openDirection | `string`   | `"down"`             | (get/set)<br><br>Dirección de apertura del calendario.<br><br>Valores:<br>• `"up"`, hacia arriba.<br>• `"down"`, hacia abajo. |
| boxAlign      | `string`   | `"left"`             | (get/set)<br><br>Alineación horizontal del calendario respecto a la entrada de datos.<br><br>Valores:<br>• `"left"`, izquierda.<br>• `"center"`, centro.<br>• `"right"`, derecha. |
| hidden        | `boolean`  | `false`              | (get/set)<br><br>Define si el componente está en modo oculto. Cuando el componente está en modo oculto no se despliega la previsualización del valor y sólo se puede acceder al calendario vía el método `open()`. |
| enabled       | `boolean`  | `true`               | (get/set)<br><br>Define si la entrada de datos está habilitada. |
| onOpen        | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando se abre el calendario. La función recibe por parámetro el valor actual seleccionado. |
| onChange      | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando cambia el valor seleccionado. La función recibe por parámetro el nuevo valor seleccionado. |
| onClose       | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando se cierra el calendario. La función recibe por parámetro el valor actual seleccionado. |

## Métodos

| Método          | Tipo retorno         | Descripción |
| --------------- | -------------------- | ----------- |
| getElement      | `HTMLElement`        | `getElement()`<br><br>Retorna el elemento HTML contenedor del objeto. |
| getViewElements | `Array<HTMLElement>` | `getViewElements()`<br><br>Retorna un arreglo de los elementos HTML que son parte de la visualización del valor. |
| getInput        | `HTMLElement`        | `getInput()`<br><br>Retorna el elemento HTML asociado a la entrada de datos base `<input type="date">`. |
| init            | `void`               | `init()`<br><br>Inicializa el objeto. |
| open         	  | `void`               | `open()`<br><br>Abre el calendario. |
| close           | `void`               | `close()`<br><br>Cierra el calendario. |
| toggle          | `void`               | `toggle()`<br><br>Alterna el estado de apertura del calendario. |
| toggleMode      | `void`               | `toggleMode()`<br><br>Alterna la vista entre días y meses. |
| prev            | `void`               | `prev()`<br><br>Muestra el periodo anterior (mes o año según la vista). |
| next            | `void`               | `next()`<br><br>Muestra el periodo siguiente (mes o año según la vista). |
| cancel          | `void`               | `cancel()`<br><br>Cancela la selección actual y revierte al valor anterior, cerrando el calendario. |
| accept          | `void`               | `accept()`<br><br>Acepta la selección actual y cierra el calendario. |
| isOpen          | `boolean`            | `isOpen()`<br><br>Retorna si el calendario está abierto. |
| isEmpty         | `boolean`            | `isEmpty()`<br><br>Retorna si el selector no tiene ninguna fecha seleccionada. |
| isValid         | `boolean`            | `isValid()`<br><br>Retorna si el valor ingresado corresponde a una fecha válida. |
| destroy         | `void`               | `destroy()`<br><br>Destructor. |

## Variables CSS

| Variable                                         | Descripción |
| ------------------------------------------------ | ----------- |
| `--wui-datepicker-borderradius`                  | Radio de borde del contenedor del datepicker. |
| `--wui-datepicker-borderwidth`                   | Ancho del borde del contenedor del datepicker. |
| `--wui-datepicker-bordercolor-out`               | Color del borde del contenedor del datepicker en estado normal. |
| `--wui-datepicker-bordercolor-over`              | Color del borde del contenedor del datepicker en estado hover. |
| `--wui-datepicker-bordercolor-disabled`          | Color del borde del contenedor del datepicker en estado deshabilitado. |
| `--wui-datepicker-bgcolor`                       | Color de fondo del contenedor del datepicker. |
| `--wui-datepicker-opener-iconsize`               | Tamaño del icono del abridor del datepicker. |
| `--wui-datepicker-opener-iconcolor-out`          | Color del icono del abridor del datepicker en estado normal. |
| `--wui-datepicker-opener-iconcolor-over`         | Color del icono del abridor del datepicker en estado hover. |
| `--wui-datepicker-opener-iconcolor-disabled`     | Color del icono del abridor del datepicker en estado deshabilitado. |
| `--wui-datepicker-opener-openicon-src`           | Fuente de la imagen del icono de apertura del datepicker<br>(formato: `url()` o `none` para utilizar la fuente predeterminada). |
| `--wui-datepicker-opener-closeicon-src`          | Fuente de la imagen del icono de cierre del datepicker<br>(formato: `url()` o `none` para utilizar la fuente predeterminada). |
| `~~--wui-datepicker-viewinput-paddingleft~~`     | Padding izquierdo de los campos de entrada de visualización. |
| `--wui-datepicker-viewinput-leftpadding`         | Padding izquierdo de los campos de entrada de visualización. |
| `--wui-datepicker-viewinput-textcolor-out`       | Color del texto de los campos de entrada de visualización en estado normal. |
| `--wui-datepicker-viewinput-textcolor-over`      | Color del texto de los campos de entrada de visualización en estado hover. |
| `--wui-datepicker-viewinput-textcolor-disabled`  | Color del texto de los campos de entrada de visualización en estado deshabilitado. |
| `--wui-datepicker-box-shadowcolor`               | Color de la sombra del calendario desplegable. |
| `--wui-datepicker-box-shadowopacity`             | Opacidad de la sombra del calendario desplegable. |
| `--wui-datepicker-box-borderradius`              | Radio de borde del calendario desplegable. |
| `--wui-datepicker-box-bordercolor`               | Color del borde del calendario desplegable. |
| `--wui-datepicker-box-bgcolor`                   | Color de fondo del calendario desplegable. |
| `--wui-datepicker-box-period-iconsize`           | Tamaño del icono del selector de periodo (mes/año) del calendario. |
| `--wui-datepicker-box-period-iconcolor-out`      | Color del icono del selector de periodo del calendario en estado normal. |
| `--wui-datepicker-box-period-iconcolor-over`     | Color del icono del selector de periodo del calendario en estado hover. |
| `--wui-datepicker-box-period-iconcolor-disabled` | Color del icono del selector de periodo del calendario en estado deshabilitado. |
| `--wui-datepicker-box-period-upicon-src`         | Fuente de la imagen del icono de cambio hacia arriba del selector de periodo<br>(formato: `url()` o `none` para utilizar la fuente predeterminada). |
| `--wui-datepicker-box-period-downicon-src`       | Fuente de la imagen del icono de cambio hacia abajo del selector de periodo<br>(formato: `url()` o `none` para utilizar la fuente predeterminada). |
| `--wui-datepicker-box-paging-iconsize`           | Tamaño de los iconos de paginación del calendario. |
| `--wui-datepicker-box-paging-iconcolor-out`      | Color de los iconos de paginación del calendario en estado normal. |
| `--wui-datepicker-box-paging-iconcolor-over`     | Color de los iconos de paginación del calendario en estado hover. |
| `--wui-datepicker-box-paging-iconcolor-disabled` | Color de los iconos de paginación del calendario en estado deshabilitado. |
| `--wui-datepicker-box-paging-previcon-src`       | Fuente de la imagen del icono de paginación anterior del calendario<br>(formato: `url()` o `none` para utilizar la fuente predeterminada). |
| `--wui-datepicker-box-paging-nexticon-src`       | Fuente de la imagen del icono de paginación siguiente del calendario<br>(formato: `url()` o `none` para utilizar la fuente predeterminada). |
| `--wui-datepicker-box-month-titlecolor`          | Color del título de los meses del calendario. |
| `--wui-datepicker-box-month-bgcolor-today`       | Color de fondo del mes actual del calendario. |
| `--wui-datepicker-box-month-bgcolor-over`        | Color de fondo de los meses del calendario en estado hover. |
| `--wui-datepicker-box-month-bgcolor-selected`    | Color de fondo del mes seleccionado del calendario. |
| `--wui-datepicker-box-month-textcolor-out`       | Color del texto de los meses del calendario en estado normal. |
| `--wui-datepicker-box-month-textcolor-over`      | Color del texto de los meses del calendario en estado hover. |
| `--wui-datepicker-box-month-textcolor-selected`  | Color del texto del mes seleccionado del calendario. |
| `--wui-datepicker-box-day-bgcolor-today`         | Color de fondo del día actual del calendario. |
| `--wui-datepicker-box-day-bgcolor-over`          | Color de fondo de los días del calendario en estado hover. |
| `--wui-datepicker-box-day-bgcolor-selected`      | Color de fondo del día seleccionado del calendario. |
| `--wui-datepicker-box-day-textcolor-out`         | Color del texto de los días del calendario en estado normal. |
| `--wui-datepicker-box-day-textcolor-over`        | Color del texto de los días del calendario en estado hover. |
| `--wui-datepicker-box-day-textcolor-selected`    | Color del texto del día seleccionado del calendario. |
| `--wui-datepicker-box-button-textcolor-out`      | Color del texto de los botones del calendario en estado normal. |
| `--wui-datepicker-box-button-textcolor-over`     | Color del texto de los botones del calendario en estado hover. |
| `--wui-datepicker-mobile-overlay-bgcolor`        | Color de fondo del overlay en modo móvil (ancho de pantalla menor a 768px). |

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

nav {
	display: flex;
	margin: 10px;
	align-items: center;
	gap: 10px;
}

.my-datepicker {
	max-width: 130px;
}

.output {
	font-family: monospace;
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/datepicker/wui-datepicker-0.14.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/datepicker/wui-datepicker-0.14.css">
<script type="text/javascript" src="/libraries/wui-js/main/datepicker/wui-datepicker-0.14.js"></script>
```

Código HTML:

```html
<nav>
	<div class="wui-datepicker my-datepicker">
		<input type="date" name="myDate">
	</div>
	<div class="output"></div>
</nav>
```

Código JS:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const datepicker = new WUIDatepicker({
		selector: ".wui-datepicker.my-datepicker",
		locale: "es-ES",
		value: "2026-01-01",
		//min: "",
		//max: "",
		//monthsNames: [],
		//weekDaysNames: [],
		//texts: {},
		//openDirection: "down",
		//boxAlign: "left",
		//hidden: false,
		//enabled: true,
		onOpen: (value) => {
			output.textContent = `Apertura - valor: ${value}`;
		},
		onChange: (value) => {
			output.textContent = `Cambio - valor: ${value}`;
		},
		onClose: (value) => {
			output.textContent = `Cierre - valor: ${value}`;
		}
	});
	datepicker.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> Si el selector define un elemento que no es de tipo `HTMLDivElement`, el objeto no se inicializará.

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-datepicker-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-datepicker-basic&lang=es).

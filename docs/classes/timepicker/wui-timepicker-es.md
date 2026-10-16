[English](wui-timepicker-en.md) | [Español](wui-timepicker-es.md)

[wuijs-main-lib](../../README-es.md)

# WUITimepicker

Versión: `0.13`

Componente para la implementación de entradas de datos de tipo hora basada en el elemento HTML `<input type="time">`.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/main/timepicker/wui-timepicker-0.13.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/timepicker/wui-timepicker-0.13.js) |
| CSS  | [src/wui-js/main/timepicker/wui-timepicker-0.13.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/timepicker/wui-timepicker-0.13.css) |
| CSS  | [src/wui-js/main/timepicker/wui-timepicker-0.13.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/timepicker/wui-timepicker-0.13.root.css) |

## Constructor

| Tipo          | Descripción |
| ------------- | ----------- |
| WUITimepicker | `WUITimepicker([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

## Propiedades

| Propiedad     | Tipo       | Valor predeterminado | Descripción |
| ------------- | ---------- | -------------------- | ----------- |
| selector      | `string`   | `".wui-timepicker"`  | (get/set)<br><br>Selector CSS que define el elemento HTML contenedor del objeto. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. |
| lang          | `string`   | `"en"`               | (get/set)<br><br>Idioma del componente.<br><br>Valores:<br>• `"de"`, Alemán.<br>• `"en"`, Inglés.<br>• `"es"`, Español. |
| name          | `string`   | `""`                 | (get/set)<br><br>Define el nombre de la entrada de datos `<input type="time">`. |
| value         | `string`   | `""`                 | (get/set)<br><br>Hora seleccionada en formato `hh:mm` (24 horas). |
| min           | `string`   | `"00:00"`            | (get/set)<br><br>Hora mínima permitida en formato `hh:mm`. |
| max           | `string`   | `"23:59"`            | (get/set)<br><br>Hora máxima permitida en formato `hh:mm`. |
| texts         | `object`   | `{}`                 | (get/set)<br><br>Textos personalizados para los botones y mensajes del componente. |
| openDirection | `string`   | `"down"`             | (get/set)<br><br>Dirección de apertura del selector de hora.<br><br>Valores:<br>• `"up"`, hacia arriba.<br>• `"down"`, hacia abajo. |
| boxAlign      | `string`   | `"left"`             | (get/set)<br><br>Alineación horizontal del calendario respecto a la entrada de datos.<br><br>Valores:<br>• `"left"`, izquierda.<br>• `"center"`, centro.<br>• `"right"`, derecha. |
| hidden        | `boolean`  | `false`              | (get/set)<br><br>Define si el componente está en modo oculto. Cuando el componente está en modo oculto no se despliega la previsualización del valor y sólo se puede acceder al selector de hora vía el método `open()`. |
| enabled       | `boolean`  | `true`               | (get/set)<br><br>Define si la entrada de datos está habilitada. |
| onOpen        | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando se abre el selector de hora. La función recibe por parámetro el valor actual seleccionado. |
| onChange      | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando cambia el valor seleccionado. La función recibe por parámetro el nuevo valor seleccionado. |
| onClose       | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando se cierra el selector de hora. La función recibe por parámetro el valor actual seleccionado. |

## Métodos

| Método          | Tipo retorno         | Descripción |
| --------------- | -------------------- | ----------- |
| getElement      | `HTMLElement`        | `getElement()`<br><br>Retorna el elemento HTML contenedor del objeto. |
| getViewElements | `Array<HTMLElement>` | `getViewElements()`<br><br>Retorna un arreglo de los elementos HTML que son parte de la visualización del valor. |
| getInput        | `HTMLElement`        | `getInput()`<br><br>Retorna el elemento HTML asociado a la entrada de datos base `<input type="time">`. |
| init            | `void`               | `init()`<br><br>Inicializa el objeto. |
| open            | `void`               | `open()`<br><br>Abre el selector. |
| close           | `void`               | `close()`<br><br>Cierra el selector. |
| toggle          | `void`               | `toggle()`<br><br>Alterna el estado de apertura del selector. |
| cancel          | `void`               | `cancel()`<br><br>Cancela la selección actual y revierte al valor anterior, cerrando el selector. |
| accept          | `void`               | `accept()`<br><br>Acepta la selección actual y cierra el selector. |
| isOpen          | `boolean`            | `isOpen()`<br><br>Retorna si el selector está abierto. |
| isEmpty         | `boolean`            | `isEmpty()`<br><br>Retorna si el selector no tiene ninguna hora seleccionada. |
| isValid         | `boolean`            | `isValid()`<br><br>Retorna si el valor ingresado corresponde a una hora válida. |
| destroy         | `void`               | `destroy()`<br><br>Destructor. |

## Variables CSS

| Variable                                         | Descripción |
| ------------------------------------------------ | ----------- |
| `--wui-timepicker-borderradius`                  | Radio de borde del contenedor del timepicker. |
| `--wui-timepicker-borderwidth`                   | Ancho del borde del contenedor del timepicker. |
| `--wui-timepicker-bordercolor-out`               | Color del borde del contenedor del timepicker en estado normal. |
| `--wui-timepicker-bordercolor-over`              | Color del borde del contenedor del timepicker en estado hover. |
| `--wui-timepicker-bordercolor-disabled`          | Color del borde del contenedor del timepicker en estado deshabilitado. |
| `--wui-timepicker-bgcolor`                       | Color de fondo del contenedor del timepicker. |
| `--wui-timepicker-opener-iconsize`               | Tamaño del icono del abridor del timepicker. |
| `--wui-timepicker-opener-iconcolor-out`          | Color del icono del abridor del timepicker en estado normal. |
| `--wui-timepicker-opener-iconcolor-over`         | Color del icono del abridor del timepicker en estado hover. |
| `--wui-timepicker-opener-iconcolor-disabled`     | Color del icono del abridor del timepicker en estado deshabilitado. |
| `--wui-timepicker-opener-openicon-src`           | Fuente de la imagen del icono de apertura del timepicker<br>(formato: `url()` o `none` para utilizar la fuente predeterminada). |
| `--wui-timepicker-opener-closeicon-src`          | Fuente de la imagen del icono de cierre del timepicker<br>(formato: `url()` o `none` para utilizar la fuente predeterminada). |
| `~~--wui-timepicker-viewinput-paddingleft~~`     | Padding izquierdo de los campos de entrada de visualización. |
| `--wui-timepicker-viewinput-leftpadding`         | Padding izquierdo de los campos de entrada de visualización. |
| `--wui-timepicker-viewinput-textcolor-out`       | Color del texto de los campos de entrada de visualización en estado normal. |
| `--wui-timepicker-viewinput-textcolor-over`      | Color del texto de los campos de entrada de visualización en estado hover. |
| `--wui-timepicker-viewinput-textcolor-disabled`  | Color del texto de los campos de entrada de visualización en estado deshabilitado. |
| `--wui-timepicker-box-shadowcolor`               | Color de la sombra del selector de hora desplegable. |
| `--wui-timepicker-box-shadowopacity`             | Opacidad de la sombra del selector de hora desplegable. |
| `--wui-timepicker-box-borderradius`              | Radio de borde del selector de hora desplegable. |
| `--wui-timepicker-box-bordercolor`               | Color del borde del selector de hora desplegable. |
| `--wui-timepicker-box-bgcolor`                   | Color de fondo del selector de hora desplegable. |
| `--wui-timepicker-box-scroll-bgcolor-out`        | Color de la barra de desplazamiento del selector de hora en estado normal. |
| `--wui-timepicker-box-scroll-bgcolor-over`       | Color de la barra de desplazamiento del selector de hora en estado hover. |
| `--wui-timepicker-box-option-textcolor-out`      | Color del texto de las opciones del selector de hora en estado normal. |
| `--wui-timepicker-box-option-bgcolor-over`       | Color de fondo de las opciones del selector de hora en estado hover. |
| `--wui-timepicker-box-option-textcolor-over`     | Color del texto de las opciones del selector de hora en estado hover. |
| `--wui-timepicker-box-option-bgcolor-now`        | Color de fondo de la opción de hora actual del selector. |
| `--wui-timepicker-box-option-bgcolor-selected`   | Color de fondo de la opción de hora seleccionada del selector. |
| `--wui-timepicker-box-option-textcolor-selected` | Color del texto de la opción de hora seleccionada del selector. |
| `--wui-timepicker-box-button-textcolor-out`      | Color del texto de los botones del selector de hora en estado normal. |
| `--wui-timepicker-box-button-textcolor-over`     | Color del texto de los botones del selector de hora en estado hover. |
| `--wui-timepicker-mobile-overlay-bgcolor`        | Color de fondo del overlay en modo móvil (ancho de pantalla menor a 768px). |

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

.my-timepicker {
	max-width: 90px;
}

.output {
	font-family: monospace;
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/timepicker/wui-timepicker-0.13.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/timepicker/wui-timepicker-0.13.css">
<script type="text/javascript" src="/libraries/wui-js/main/timepicker/wui-timepicker-0.13.js"></script>
```

Código HTML:

```html
<nav>
	<div class="wui-timepicker my-timepicker">
		<input type="time" name="myTime">
	</div>
	<div class="output"></div>
</nav>
```

Código JS:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const timepicker = new WUITimepicker({
		selector: ".wui-timepicker.my-timepicker",
		//lang: "en",
		value: "10:30",
		//min: "00:00",
		//max: "23:59",
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
	timepicker.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> Si el selector define un elemento que no es de tipo `HTMLDivElement`, el objeto no se inicializará.

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-timepicker-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-timepicker-basic&lang=es).

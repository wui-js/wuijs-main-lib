[English](wui-colorpicker-en.md) | [Español](wui-colorpicker-es.md)

[wuijs-main-lib](../../README-es.md)

# WUIColorpicker

Versión: `0.14`

Componente para la implementación de entradas de datos de tipo selector de color basada en el elemento HTML `<input type="color">`.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/main/colorpicker/wui-colorpicker-0.14.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/colorpicker/wui-colorpicker-0.14.js) |
| CSS  | [src/wui-js/main/colorpicker/wui-colorpicker-0.14.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/colorpicker/wui-colorpicker-0.14.css) |
| CSS  | [src/wui-js/main/colorpicker/wui-colorpicker-0.14.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/colorpicker/wui-colorpicker-0.14.root.css) |

## Constructor

| Tipo           | Descripción |
| -------------- | ----------- |
| WUIColorpicker | `WUIColorpicker([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

## Propiedades

| Propiedad     | Tipo       | Valor predeterminado | Descripción |
| ------------- | ---------- | -------------------- | ----------- |
| selector      | `string`   | `".wui-colorpicker"` | (get/set)<br><br>Selector CSS que define el elemento HTML contenedor del objeto. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. |
| lang          | `string`   | `"en"`               | (get/set)<br><br>Idioma del componente.<br><br>Valores:<br>• `"de"`, Alemán.<br>• `"en"`, Inglés.<br>• `"es"`, Español. |
| name          | `string`   | `""`                 | (get/set)<br><br>Define el nombre de la entrada de datos `<input type="color">`. |
| value         | `string`   | `""`                 | (get/set)<br><br>Color seleccionado en formato hexadecimal o nombre de color CSS. Retorna el valor en hexadecimal. |
| emptyValue    | `string`   | `"#000001"`          | (get/set)<br><br>Valor hexadecimal que representa un color vacío o no seleccionado. |
| texts         | `object`   | `{}`                 | (get/set)<br><br>Textos personalizados para los botones y mensajes del componente. |
| openDirection | `string`   | `"down"`             | (get/set)<br><br>Dirección de apertura del selector de color.<br><br>Valores:<br>• `"up"`, hacia arriba.<br>• `"down"`, hacia abajo. |
| boxAlign      | `string`   | `"left"`             | (get/set)<br><br>Alineación horizontal del calendario respecto a la entrada de datos.<br><br>Valores:<br>• `"left"`, izquierda.<br>• `"center"`, centro.<br>• `"right"`, derecha. |
| hidden        | `boolean`  | `false`              | (get/set)<br><br>Define si el componente está en modo oculto. Cuando el componente está en modo oculto no se despliega la previsualización del valor y sólo se puede acceder al selector de color vía el método `open()`. |
| enabled       | `boolean`  | `true`               | (get/set)<br><br>Define si la entrada de datos está habilitada. |
| onOpen        | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando se abre el selector de color. La función recibe por parámetro el valor actual seleccionado. |
| onChange      | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando cambia el valor seleccionado. La función recibe por parámetro el nuevo valor seleccionado. |
| onClose       | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando se cierra el selector de color. La función recibe por parámetro el valor actual seleccionado. |

## Métodos

| Método          | Tipo retorno         | Descripción |
| --------------- | -------------------- | ----------- |
| getElement      | `HTMLElement`        | `getElement()`<br><br>Retorna el elemento HTML contenedor del objeto. |
| getViewElements | `Array<HTMLElement>` | `getViewElements()`<br><br>Retorna un arreglo de los elementos HTML que son parte de la visualización del valor. |
| getInput        | `HTMLElement`        | `getInput()`<br><br>Retorna el elemento HTML asociado a la entrada de datos base `<input type="color">`. |
| init            | `void`               | `init()`<br><br>Inicializa el objeto. |
| open            | `void`               | `open()`<br><br>Abre el selector de color. |
| close           | `void`               | `close()`<br><br>Cierra el selector de color. |
| toggle          | `void`               | `toggle()`<br><br>Alterna el estado de apertura del selector de color. |
| selectMode      | `void`               | `selectMode(mode)`<br><br>Parámetros:<br>**• mode:** `string`.<br><br>Selecciona el modo de visualización (`"grid"` o `"list"`). |
| cancel          | `void`               | `cancel()`<br><br>Cancela la selección actual y revierte al valor anterior, cerrando el selector. |
| accept          | `void`               | `accept()`<br><br>Acepta la selección actual y cierra el selector. |
| isOpen          | `boolean`            | `isOpen()`<br><br>Retorna si el selector está abierto. |
| isEmpty         | `boolean`            | `isEmpty()`<br><br>Retorna si el selector no tiene ningún color seleccionado. |
| isValid         | `boolean`            | `isValid()`<br><br>Retorna si el valor corresponde a un color válido. |
| destroy         | `void`               | `destroy()`<br><br>Destructor. |

## Variables CSS

| Variable                                            | Descripción |
| --------------------------------------------------- | ----------- |
| `--wui-colorpicker-opener-iconsize`                 | Tamaño del icono del abridor del colorpicker. |
| `--wui-colorpicker-opener-iconcolor-out`            | Color del icono del abridor del colorpicker en estado normal. |
| `--wui-colorpicker-opener-iconcolor-over`           | Color del icono del abridor del colorpicker en estado hover. |
| `--wui-colorpicker-opener-iconcolor-disabled`       | Color del icono del abridor del colorpicker en estado deshabilitado. |
| `--wui-colorpicker-opener-openicon-src`             | Fuente del ícono de apertura<br>(formato: `url()` o `none` para la fuente por defecto). |
| `--wui-colorpicker-opener-closeicon-src`            | Fuente del ícono de cierre<br>(formato: `url()` o `none` para la fuente por defecto). |
| `--wui-colorpicker-viewbutton-size`                 | Tamaño del botón de visualización del color. |
| `--wui-colorpicker-viewbutton-bordercolor-out`      | Color del borde del botón de visualización en estado normal. |
| `--wui-colorpicker-viewbutton-bordercolor-over`     | Color del borde del botón de visualización en estado hover. |
| `--wui-colorpicker-viewbutton-bordercolor-disabled` | Color del borde del botón de visualización en estado deshabilitado. |
| `--wui-colorpicker-viewbutton-bgcolor-out`          | Color de fondo del botón de visualización en estado normal. |
| `--wui-colorpicker-viewbutton-bgcolor-over`         | Color de fondo del botón de visualización en estado hover. |
| `--wui-colorpicker-viewbutton-bgcolor-disabled`     | Color de fondo del botón de visualización en estado deshabilitado. |
| `--wui-colorpicker-viewcolor-borderwidth`           | Ancho del borde del indicador de color en el botón de visualización. |
| `--wui-colorpicker-viewcolor-bordercolor`           | Color del borde del indicador de color en el botón de visualización. |
| `--wui-colorpicker-viewcolor-emptyicon-src`         | Fuente del ícono de previsualización vacía<br>(formato: `url()` o `none` para la fuente por defecto). |
| `--wui-colorpicker-box-shadowcolor`                 | Color de la sombra del selector de color desplegable. |
| `--wui-colorpicker-box-shadowopacity`               | Opacidad de la sombra del selector de color desplegable. |
| `--wui-colorpicker-box-borderradius`                | Radio de borde del selector de color desplegable. |
| `--wui-colorpicker-box-bordercolor`                 | Color del borde del selector de color desplegable. |
| `--wui-colorpicker-box-bgcolor`                     | Color de fondo del selector de color desplegable. |
| `--wui-colorpicker-box-scroll-bgcolor-out`          | Color de la barra de desplazamiento del selector en estado normal. |
| `--wui-colorpicker-box-scroll-bgcolor-over`         | Color de la barra de desplazamiento del selector en estado hover. |
| `--wui-colorpicker-box-tab-textcolor-out`           | Color del texto de las pestañas del selector en estado normal. |
| `--wui-colorpicker-box-tab-textcolor-selected`      | Color del texto de las pestañas del selector en estado seleccionado. |
| `--wui-colorpicker-box-option-bordercolor-out`      | Color del borde de las opciones del selector en estado normal. |
| `--wui-colorpicker-box-option-bordercolor-over`     | Color del borde de las opciones del selector en estado hover. |
| `--wui-colorpicker-box-option-bgcolor-out`          | Color de fondo de las opciones del selector en estado normal. |
| `--wui-colorpicker-box-option-bgcolor-over`         | Color de fondo de las opciones del selector en estado hover. |
| `--wui-colorpicker-box-option-bgcolor-selected`     | Color de fondo de las opciones del selector en estado seleccionado. |
| `--wui-colorpicker-box-option-textcolor-out`        | Color del texto de las opciones del selector en estado normal. |
| `--wui-colorpicker-box-option-textcolor-over`       | Color del texto de las opciones del selector en estado hover. |
| `--wui-colorpicker-box-option-textcolor-selected`   | Color del texto de las opciones del selector en estado seleccionado. |
| `--wui-colorpicker-box-preview-textcolor-out`       | Color del texto de la vista previa del selector en estado normal. |
| `--wui-colorpicker-box-preview-textcolor-empty`     | Color del texto de la vista previa del selector cuando está vacía. |
| `--wui-colorpicker-box-button-textcolor-out`        | Color del texto de los botones del selector en estado normal. |
| `--wui-colorpicker-box-button-textcolor-over`       | Color del texto de los botones del selector en estado hover. |
| `--wui-colorpicker-mobile-overlay-bgcolor`          | Color de fondo del overlay en modo móvil (ancho de pantalla menor a 768px). |

## Implementación

Código CSS:

```css
:root {

	/* wui-colorpicker */

	--wui-colorpicker-opener-iconsize: 30px;
	--wui-colorpicker-opener-iconcolor-out: #000;
	--wui-colorpicker-opener-iconcolor-over: #1e90ff;
	--wui-colorpicker-opener-iconcolor-disabled: #d5dce3;
	--wui-colorpicker-opener-openicon-src: none;
	--wui-colorpicker-opener-closeicon-src: none;
	--wui-colorpicker-viewbutton-size: 30px;
	--wui-colorpicker-viewbutton-bordercolor-out: rgb(from #1e90ff r g b / 20%);
	--wui-colorpicker-viewbutton-bordercolor-over: #1e90ff;
	--wui-colorpicker-viewbutton-bordercolor-invalid: #f44343;
	--wui-colorpicker-viewbutton-bordercolor-disabled: #d5dce3;
	--wui-colorpicker-viewbutton-bgcolor-out: transparent;
	--wui-colorpicker-viewbutton-bgcolor-over: transparent;
	--wui-colorpicker-viewbutton-bgcolor-disabled: transparent;
	--wui-colorpicker-viewcolor-borderwidth: 1px;
	--wui-colorpicker-viewcolor-bordercolor: rgb(from #1e90ff r g b / 20%);
	--wui-colorpicker-viewcolor-emptyicon-src: none;
	--wui-colorpicker-box-shadowcolor: #959da5;
	--wui-colorpicker-box-borderradius: 15px;
	--wui-colorpicker-box-bordercolor: #f0f0f3;
	--wui-colorpicker-box-bgcolor: rgb(from #fff r g b / 80%);
	--wui-colorpicker-box-scroll-bgcolor-out: rgb(from #353a40 r g b / 40%);
	--wui-colorpicker-box-scroll-bgcolor-over: rgb(from #353a40 r g b / 70%);
	--wui-colorpicker-box-tab-textcolor-out: #2d3a47;
	--wui-colorpicker-box-tab-textcolor-selected: #1e90ff;
	--wui-colorpicker-box-option-bordercolor-out: #f0f0f3;
	--wui-colorpicker-box-option-bordercolor-over: #f0f0f3;
	--wui-colorpicker-box-option-bgcolor-out: transparent;
	--wui-colorpicker-box-option-bgcolor-over: #f6f6f6;
	--wui-colorpicker-box-option-bgcolor-selected: #1e90ff;
	--wui-colorpicker-box-option-textcolor-out: #000;
	--wui-colorpicker-box-option-textcolor-over: #1e90ff;
	--wui-colorpicker-box-option-textcolor-selected: #fff;
	--wui-colorpicker-box-preview-textcolor-out: #000;
	--wui-colorpicker-box-preview-textcolor-empty: rgb(from #2d3a47 r g b / 60%);
	--wui-colorpicker-box-button-textcolor-out: #1e90ff;
	--wui-colorpicker-box-button-textcolor-over: #1e90ff;
	--wui-colorpicker-mobile-overlay-bgcolor: rgb(from #010203 r g b / 20%);
}
```

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

.my-colorpicker {}

.output {
	font-family: monospace;
}
```

Código HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/colorpicker/wui-colorpicker-0.14.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/colorpicker/wui-colorpicker-0.14.css">
<script type="text/javascript" src="/libraries/wui-js/main/colorpicker/wui-colorpicker-0.14.js"></script>
```

Código HTML:

```html
<nav>
	<div class="wui-colorpicker my-colorpicker">
		<input type="color" name="myColor">
	</div>
	<div class="output"></div>
</nav>
```

Código JS:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const colorpicker = new WUIColorpicker({
		selector: ".wui-colorpicker.my-colorpicker",
		lang: "es",
		value: "#1e90ff",
		//emptyValue: "#000001",
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
	colorpicker.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> Si el selector define un elemento que no es de tipo `HTMLDivElement`, el objeto no se inicializará.

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-colorpicker-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-colorpicker-basic&lang=es).

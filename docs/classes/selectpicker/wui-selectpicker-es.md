[English](wui-selectpicker-en.md) | [Español](wui-selectpicker-es.md)

[wuijs-main-lib](../../README-es.md)

# WUISelectpicker

Versión: `0.15`

Componente para la implementación de entradas de datos de tipo lista de selección múltiple o excluyente basada en el elemento HTML `<select>`.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/main/selectpicker/wui-selectpicker-0.15.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/selectpicker/wui-selectpicker-0.15.js) |
| CSS  | [src/wui-js/main/selectpicker/wui-selectpicker-0.15.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/selectpicker/wui-selectpicker-0.15.css) |
| CSS  | [src/wui-js/main/selectpicker/wui-selectpicker-0.15.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/selectpicker/wui-selectpicker-0.15.root.css) |

## Constructor

| Tipo            | Descripción |
| --------------- | ----------- |
| WUISelectpicker | `WUISelectpicker([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

## Propiedades

| Propiedad      | Tipo       | Valor predeterminado  | Descripción |
| -------------- | ---------- | --------------------- | ----------- |
| selector       | `string`   | `".wui-selectpicker"` | (get/set)<br><br>Selector CSS que define el elemento HTML contenedor del objeto. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. |
| lang           | `string`   | `"en"`                | (get/set)<br><br>Idioma del componente.<br><br>Valores:<br>• `"de"`, Alemán.<br>• `"en"`, Inglés.<br>• `"es"`, Español. |
| name           | `string`   | `""`                  | (get/set)<br><br>Define el nombre de la entrada de datos `<select>`. |
| value          | `string`   | `""`                  | (get/set)<br><br>Valor de la selección de opciones inicial. |
| options        | `array`    | `[]`                  | (get/set)<br><br>Arreglo de opciones del selector según la definición de **Opciones de Menú**. |
| text           | `string`   | `""`                  | (get)<br><br>Texto de la selección de opciones inicial. |
| texts          | `object`   | `{}`                  | (get/set)<br><br>Textos personalizados para los botones y mensajes del componente. |
| openDirection  | `string`   | `"down"`              | (get/set)<br><br>Dirección de apertura del selector.<br><br>Valores:<br>• `"up"`, hacia arriba.<br>• `"down"`, hacia abajo. |
| boxAlign       | `string`   | `"center"`            | (get/set)<br><br>Alineación horizontal del selector respecto a la entrada de datos.<br><br>Valores:<br>• `"left"`, izquierda.<br>• `"center"`, centro.<br>• `"right"`, derecha. |
| required       | `boolean`  | `false`               | (get/set)<br><br>Define si la selección de opciones es obligatoria. Propiedad deshabilitada si `multiple` es `true`. |
| hidden         | `boolean`  | `false`               | (get/set)<br><br>Define si el componente está en modo oculto. Cuando el componente está en modo oculto no se despliega la previsualización del valor y sólo se puede acceder al selector vía el método `open()`. |
| autochange     | `boolean`  | `true`                | (get/set)<br><br>Define si el selector ejecuta la propiedad `onChange` al cambiar una opción o espera hasta el final del proceso. En caso que esta propiedad sea falsa y la propiedad `hidden` esté activada o se esté visualizando en modo móvil (en una pantalla con ancho menor o igual a 767px) el botón "cancelar" sólo cerrará el modal, en caso contrario, el botón "cancelar" restaurará el valor original del selector al momento de abrirlo. |
| multiple       | `boolean`  | `false`               | (get/set)<br><br>Define si el selector permite selección múltiple. |
| separatorValue | `string`   | `","`                 | (get/set)<br><br>Caracter separador de valores en caso de selección múltiple. |
| separatorText  | `string`   | `", "`                | (get/set)<br><br>Caracter separador de textos en caso de selección múltiple. |
| filterable     | `boolean`  | `true`                | (get/set)<br><br>Define si el selector permite filtrar opciones mediante entrada de texto. |
| viewicon       | `boolean`  | `false`               | (get/set)<br><br>Define si el selector muestra el ícono de la opción seleccionada. Propiedad habilitada si `multiple` y `filterable` son `false`. |
| viewtext       | `boolean`  | `true`                | (get/set)<br><br>Define si el selector muestra el texto de la opción seleccionada. Propiedad deshabilitada si `multiple` y `filterable` son `false`. |
| enabled        | `boolean`  | `true`                | (get/set)<br><br>Define si la entrada de datos está habilitada. |
| onStartOpen    | `function` | `null`                | (get/set)<br><br>Función que se ejecuta cuando el selector comienza a abrirse. Si retorna exactamente `false`, se cancela la apertura. |
| onOpen         | `function` | `null`                | (get/set)<br><br>Función que se ejecuta cuando se abre el selector. La función recibe por parámetro el valor actual seleccionado. |
| onChange       | `function` | `null`                | (get/set)<br><br>Función que se ejecuta cuando cambia el valor seleccionado. La función recibe por parámetro el nuevo valor seleccionado. |
| onClose        | `function` | `null`                | (get/set)<br><br>Función que se ejecuta cuando se cierra el selector. La función recibe por parámetro el valor actual seleccionado. |

## Opciones de Menú

| Propiedad | Tipo      | Valor predeterminado | Descripción |
| --------- | --------- | -------------------- | ----------- |
| ~~icon~~  | `string`  | `undefined`          | Clases CSS del ícono de la opción. **Deprecada**, usar `iconClass` en su lugar. |
| iconClass | `string`  | `undefined`          | Clases CSS del ícono de la opción. |
| text      | `string`  | `""`                 | Texto de la opción. |
| value     | `string`  | `""`                 | Valor de la opción. |
| selected  | `boolean` | `false`              | Estado de selección de la opción. |
| hidden    | `boolean` | `false`              | Define si la opción está oculta en la lista. |
| enabled   | `boolean` | `true`               | Define si la opción está habilitada. |

## Métodos

| Método          | Tipo retorno         | Descripción |
| --------------- | -------------------- | ----------- |
| getElement      | `HTMLElement`        | `getElement()`<br><br>Retorna el elemento HTML contenedor del objeto. |
| getBox          | `HTMLElement`        | `getBox()`<br><br>Retorna el elemento HTML de la caja desplegable. |
| getViewElements | `Array<HTMLElement>` | `getViewElements()`<br><br>Retorna un arreglo de los elementos HTML que son parte de la visualización del valor. |
| getInput        | `HTMLElement`        | `getInput()`<br><br>Retorna el elemento HTML asociado a la entrada de datos base `<select>`. |
| init            | `void`               | `init()`<br><br>Inicializa el objeto. |
| addOption       | `void`               | `addOption(option)`<br><br>Parámetros:<br>**• option:** `object`.<br><br>Agrega una opción a la lista, según la definición de **Opciones de Menú**. |
| hiddenOption    | `void`               | `hiddenOption(index[, hidden])`<br><br>Parámetros:<br>**• index:** `number`<br>**• hidden:** `boolean` (opcional, por defecto `true`)<br><br>Oculta (`true`) o muestra (`false`) la opción ubicada en la posición `index` de la lista, tanto en el elemento base `<select>` como en la lista de opciones del selector. |
| enabledOption   | `void`               | `enabledOption(index[, enabled])`<br><br>Parámetros:<br>**• index:** `number`<br>**• enabled:** `boolean` (opcional, por defecto `true`)<br><br>Habilita (`true`) o deshabilita (`false`) la opción ubicada en la posición `index` de la lista, tanto en el elemento base `<select>` como en la lista de opciones del selector. |
| ~~loadOptions~~ | `void`               | `loadOptions(options)` **Deprecado**, usar `refresh()` en su lugar.<br><br>Parámetros:<br>**• options:** `array`.<br><br>Carga un arreglo de opciones, limpiando las existentes previamente. |
| clearOptions    | `void`               | `clearOptions()`<br><br>Elimina todas las opciones de la lista. |
| refresh         | `void`               | `refresh(options)`<br><br>Parámetros:<br>**• options:** `array`.<br><br>Carga un arreglo de opciones, limpiando las existentes previamente. |
| open            | `void`               | `open()`<br><br>Abre la lista de opciones. En modo escritorio, reduce automáticamente la cantidad de opciones visibles para que la lista se ajuste dentro del ancestro más cercano que recorte contenido (`overflow: hidden`, `auto`, `scroll` o `clip`), además del límite del viewport. |
| close           | `void`               | `close()`<br><br>Cierra la lista de opciones. |
| toggle          | `void`               | `toggle()`<br><br>Alterna el estado de apertura de la lista de opciones. |
| cancel          | `void`               | `cancel()`<br><br>Cancela la selección actual y revierte al valor anterior, cerrando la lista. |
| accept          | `void`               | `accept()`<br><br>Acepta la selección actual y cierra la lista. |
| isOpen          | `boolean`            | `isOpen()`<br><br>Retorna si la lista de opciones está abierta. |
| isEmpty         | `boolean`            | `isEmpty()`<br><br>Retorna si el selector no tiene ninguna opción seleccionada. |
| isValid         | `boolean`            | `isValid()`<br><br>Retorna si el valor ingresado en el campo de texto corresponde a una opción válida. |
| destroy         | `void`               | `destroy()`<br><br>Destructor. |

## Variables CSS

| Variable                                             | Descripción |
| ---------------------------------------------------- | ----------- |
| `--wui-selectpicker-borderradius`                    | Radio de borde del contenedor del selectpicker. |
| `--wui-selectpicker-borderwidth`                     | Ancho del borde del contenedor del selectpicker. |
| `--wui-selectpicker-bordercolor-out`                 | Color del borde del contenedor del selectpicker en estado normal. |
| `--wui-selectpicker-bordercolor-over`                | Color del borde del contenedor del selectpicker en estado hover. |
| `--wui-selectpicker-bordercolor-disabled`            | Color del borde del contenedor del selectpicker en estado deshabilitado. |
| `--wui-selectpicker-bgcolor`                         | Color de fondo del contenedor del selectpicker. |
| `--wui-selectpicker-opener-iconsize`                 | Tamaño del icono del abridor del selectpicker. |
| `--wui-selectpicker-opener-iconcolor-out`            | Color del icono del abridor del selectpicker en estado normal. |
| `--wui-selectpicker-opener-iconcolor-over`           | Color del icono del abridor del selectpicker en estado hover. |
| `--wui-selectpicker-opener-iconcolor-disabled`       | Color del icono del abridor del selectpicker en estado deshabilitado. |
| `--wui-selectpicker-opener-openicon-src`             | Fuente de la imagen del icono de apertura del selectpicker<br>(formato: `url()` o `none` para utilizar la fuente predeterminada). |
| `--wui-selectpicker-opener-closeicon-src`            | Fuente de la imagen del icono de cierre del selectpicker<br>(formato: `url()` o `none` para utilizar la fuente predeterminada). |
| `--wui-selectpicker-viewicon-iconsize`               | Tamaño del icono de visualización. |
| `--wui-selectpicker-viewicon-icongap`                | Espacio entre el texto de la opción seleccionada y el icono de visualización. |
| `--wui-selectpicker-viewicon-iconcolor`              | Color del icono de la opción seleccionada. |
| `~~--wui-selectpicker-viewinput-paddingleft~~`       | Padding izquierdo del campo de entrada de visualización. |
| `--wui-selectpicker-viewinput-leftpadding`           | Padding izquierdo del campo de entrada de visualización. |
| `--wui-selectpicker-viewinput-textcolor-out`         | Color del texto del campo de entrada de visualización en estado normal. |
| `--wui-selectpicker-viewinput-textcolor-over`        | Color del texto del campo de entrada de visualización en estado hover. |
| `--wui-selectpicker-viewinput-textcolor-disabled`    | Color del texto del campo de entrada de visualización en estado deshabilitado. |
| `--wui-selectpicker-box-shadowcolor`                 | Color de la sombra de la caja desplegable. |
| `--wui-selectpicker-box-shadowopacity`               | Opacidad de la sombra de la caja desplegable. |
| `--wui-selectpicker-box-width`                       | Ancho de la caja desplegable. |
| `--wui-selectpicker-box-borderradius`                | Radio de borde de la caja desplegable. |
| `--wui-selectpicker-box-bordercolor`                 | Color del borde de la caja desplegable. |
| `--wui-selectpicker-box-bgcolor`                     | Color de fondo de la caja desplegable. |
| `--wui-selectpicker-box-scroll-bgcolor-out`          | Color de la barra de desplazamiento de la caja desplegable en estado normal. |
| `--wui-selectpicker-box-scroll-bgcolor-over`         | Color de la barra de desplazamiento de la caja desplegable en estado hover. |
| `--wui-selectpicker-box-option-borderradius`         | Radio de borde de las opciones de la caja desplegable. |
| `--wui-selectpicker-box-option-bordercolor-out`      | Color del borde de las opciones de la caja desplegable en estado normal. |
| `--wui-selectpicker-box-option-bordercolor-over`     | Color del borde de las opciones de la caja desplegable en estado hover. |
| `--wui-selectpicker-box-option-bgcolor-out`          | Color de fondo de las opciones de la caja desplegable en estado normal. |
| `--wui-selectpicker-box-option-bgcolor-over`         | Color de fondo de las opciones de la caja desplegable en estado hover. |
| `--wui-selectpicker-box-option-iconsize`             | Tamaño del icono de las opciones de la caja desplegable. |
| `--wui-selectpicker-box-option-iconopacity-out`      | Opacidad del icono de las opciones de la caja desplegable en estado normal. |
| `--wui-selectpicker-box-option-iconopacity-over`     | Opacidad del icono de las opciones de la caja desplegable en estado hover. |
| `--wui-selectpicker-box-option-iconopacity-selected` | Opacidad del icono de las opciones de la caja desplegable en estado seleccionado. |
| `--wui-selectpicker-box-option-iconopacity-disabled` | Opacidad del icono de las opciones de la caja desplegable en estado deshabilitado. |
| `--wui-selectpicker-box-option-iconcolor-out`        | Color del icono de las opciones de la caja desplegable en estado normal. |
| `--wui-selectpicker-box-option-iconcolor-over`       | Color del icono de las opciones de la caja desplegable en estado hover. |
| `--wui-selectpicker-box-option-iconcolor-selected`   | Color del icono de las opciones de la caja desplegable en estado seleccionado. |
| `--wui-selectpicker-box-option-iconcolor-disabled`   | Color del icono de las opciones de la caja desplegable en estado deshabilitado. |
| `--wui-selectpicker-box-option-checkicon-src`        | Fuente de la imagen del icono de verificación de las opciones<br>(formato: `url()` o `none` para utilizar la fuente predeterminada). |
| `--wui-selectpicker-box-option-textcolor-empty`      | Color del texto de las opciones vacías de la caja desplegable. |
| `--wui-selectpicker-box-option-textcolor-out`        | Color del texto de las opciones de la caja desplegable en estado normal. |
| `--wui-selectpicker-box-option-textcolor-over`       | Color del texto de las opciones de la caja desplegable en estado hover. |
| `--wui-selectpicker-box-option-textcolor-selected`   | Color del texto de las opciones de la caja desplegable en estado seleccionado. |
| `--wui-selectpicker-box-option-textcolor-disabled`   | Color del texto de las opciones de la caja desplegable en estado deshabilitado. |
| `--wui-selectpicker-box-button-maxwidth`             | Ancho máximo de los botones del pie de la caja desplegable (aplica en modo normal con `hidden: true`). |
| `--wui-selectpicker-box-button-height`               | Alto de los botones del pie de la caja desplegable (aplica en modo normal con `hidden: true`). |
| `--wui-selectpicker-box-button-borderwidth`          | Ancho del borde de los botones del pie de la caja desplegable (aplica en modo normal con `hidden: true`). |
| `--wui-selectpicker-box-button-bordercolor-out`      | Color del borde de los botones del pie de la caja desplegable en estado normal (aplica en modo normal con `hidden: true`). |
| `--wui-selectpicker-box-button-bordercolor-over`     | Color del borde de los botones del pie de la caja desplegable en estado hover (aplica en modo normal con `hidden: true`). |
| `--wui-selectpicker-box-button-bgcolor-out`          | Color de fondo de los botones del pie de la caja desplegable en estado normal (aplica en modo normal con `hidden: true`). |
| `--wui-selectpicker-box-button-bgcolor-over`         | Color de fondo de los botones del pie de la caja desplegable en estado hover (aplica en modo normal con `hidden: true`). |
| `--wui-selectpicker-box-button-horizpadding`         | Padding horizontal de los botones del pie de la caja desplegable (aplica en modo normal con `hidden: true`). |
| `--wui-selectpicker-box-button-vertpadding`          | Padding vertical de los botones del pie de la caja desplegable (aplica en modo normal con `hidden: true`). |
| `--wui-selectpicker-box-button-textcolor-out`        | Color del texto de los botones del pie de la caja desplegable en estado normal. |
| `--wui-selectpicker-box-button-textcolor-over`       | Color del texto de los botones del pie de la caja desplegable en estado hover. |
| `--wui-selectpicker-mobile-overlay-bgcolor`          | Color de fondo del overlay en modo móvil (ancho de pantalla menor a 768px). |
| `--wui-selectpicker-mobile-box-width`                | Ancho de la caja desplegable en modo móvil (ancho de pantalla menor a 768px). |
| `--wui-selectpicker-mobile-box-borderradius`         | Radio de borde de la caja desplegable en modo móvil (ancho de pantalla menor a 768px). |
| `--wui-selectpicker-mobile-box-button-bordercolor`   | Color del borde de los botones de la caja desplegable en modo móvil. |

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

.my-selectpicker {
	max-width: 200px;
}

.output {
	font-family: monospace;
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/selectpicker/wui-selectpicker-0.15.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/selectpicker/wui-selectpicker-0.15.css">
<script type="text/javascript" src="/libraries/wui-js/main/selectpicker/wui-selectpicker-0.15.js"></script>
```

Código HTML:

```html
<nav>
	<div class="wui-selectpicker my-selectpicker">
		<select name="mySelectpicker">
			<option value=""></option>
			<option value="1">Opción 1</option>
			<option value="2">Opción 2</option>
			<option value="3">Opción 3</option>
			<!--
			<option value="4">Option 4</option>
			<option value="5">Option 5</option>
			<option value="6">Option 6</option>
			<option value="7">Option 7</option>
			<option value="8">Option 8</option>
			<option value="9">Option 9</option>
			<option value="10">Option 10</option>
			<option value="11">Option 11</option>
			<option value="12">Option 12</option>
			<option value="13">Option 13</option>
			<option value="14">Option 14</option>
			<option value="15">Option 15</option>
			<option value="16">Option 16</option>
			<option value="17">Option 17</option>
			<option value="18">Option 18</option>
			<option value="19">Option 19</option>
			-->
		</select>
	</div>
	<div class="output"></div>
</nav>
```

Código JS:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const selectpicker = new WUISelectpicker({
		selector: ".wui-selectpicker.my-selectpicker",
		lang: "es",
		//options: [],
		value: "2",
		//texts: {},
		//openDirection: "down",
		//boxAlign: "center",
		//required: true,
		//hidden: false,
		//autochange: true,
		//multiple: false,
		//separatorValue: ",",
		//separatorText: ", ",
		//filterable: true,
		//viewicon: false,
		//viewtext: true,
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
	selectpicker.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> Si el selector define un elemento que no es de tipo `HTMLDivElement`, el objeto no se inicializará.

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-selectpicker-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-selectpicker-basic&lang=es).

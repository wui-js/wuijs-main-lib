[English](wui-form-en.md) | [Español](wui-form-es.md)

[wuijs-main-lib](../../README-es.md)

# WUIForm

Versión: `0.15`

Componente para la implementación de formularios de datos. Este componente permite la implementación de elementos HTML de entrada de datos tales como `<input>`, `<select>` y `<textarea>` y objetos de la librería WUI como `WUISelectpicker`, `WUIDatepicker`, `WUITimepicker`, `WUIColorpicker`, `WUISwitch`, `WUIIntensity` y `WUIButton`.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/main/form/wui-form-0.15.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/form/wui-form-0.15.js) |
| CSS  | [src/wui-js/main/form/wui-form-0.15.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/form/wui-form-0.15.css) |
| CSS  | [src/wui-js/main/form/wui-form-0.15.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/form/wui-form-0.15.root.css) |

## Constructor

| Tipo    | Descripción |
| ------- | ----------- |
| WUIForm | `WUIForm([properties])`<br><br>Parámetros:<br>**• properties:** `object` |

## Propiedades

| Propiedad         | Tipo       | Valor predeterminado | Descripción |
| ----------------- | ---------- | -------------------- | ----------- |
| selector          | `string`   | `".wui-form"`        | (get/set)<br><br>Selector CSS que define el elemento HTML contenedor del formulario. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. |
| bodyItems         | `array`    | `[]`                 | (get/set)<br><br>Arreglo de conjuntos de campos (`{ items: [...] }`) que describen declarativamente el cuerpo del formulario. Se utiliza como valor por defecto del parámetro `bodyItems` de `buildHtml()`. |
| footerItems       | `array`    | `[]`                 | (get/set)<br><br>Arreglo de descriptores de botones/enlaces del pie del formulario. Se utiliza como valor por defecto del parámetro `footerItems` de `buildHtml()`. |
| fieldStyle        | `string`   | `"fill"`             | (get/set)<br><br>Estilo de los campos del formulario. Agrega las clases CSS correspondientes al elemento principal del formulario al ejecutar `init()`.<br><br>Valores:<br>• `"fill"`, relleno (`fill-fields`).<br>• `"roundfill"`, relleno con esquinas redondeadas (`fill-fields round-fields`).<br>• `"border"`, borde (`border-fields`).<br>• `"roundborder"`, borde con esquinas redondeadas (`border-fields round-fields`).<br>• `"line"`, línea inferior (`line-fields`). |
| headerButtonStyle | `string`   | `"none"`             | (get/set)<br><br>Estilo de los botones de la cabecera (`.header`) del formulario.<br><br>Valores:<br>• `"none"`, sin estilo.<br>• `"join"`, une los botones contiguos (agrega la clase CSS `join-buttons` a `.header` al ejecutar `init()`). |
| bodyButtonStyle   | `string`   | `"none"`             | (get/set)<br><br>Estilo de los botones del cuerpo (`.body`) del formulario.<br><br>Valores:<br>• `"none"`, sin estilo.<br>• `"join"`, une los botones contiguos (agrega la clase CSS `join-buttons` a `.body` al ejecutar `init()`). |
| footerButtonStyle | `string`   | `"none"`             | (get/set)<br><br>Estilo de los botones del pie (`.footer`) del formulario.<br><br>Valores:<br>• `"none"`, sin estilo.<br>• `"join"`, une los botones contiguos (agrega la clase CSS `join-buttons` a `.footer` al ejecutar `init()`). |
| submit            | `boolean`  | `true`               | (get/set)<br><br>Define si el formulario debe enviarse de forma nativa al ocurrir el evento submit. |
| onScrolling       | `function` | `null`               | (get/set)<br><br>Función que se ejecuta al desplazar el contenido del cuerpo del formulario. |
| onSubmit          | `function` | `null`               | (get/set)<br><br>Función que se ejecuta al enviar el formulario. |

## Métodos

| Método        | Tipo retorno                                               | Descripción |
| ------------- | ---------------------------------------------------------- | ----------- |
| getElement    | `HTMLElement`                                              | `getElement()`<br><br>Retorna el elemento HTML contenedor del objeto. |
| getForm       | `HTMLFormElement`                                          | `getForm()`<br><br>Retorna el elemento HTML `<form>`. |
| getFormData   | `FormData`                                                 | `getFormData()`<br><br>Retorna los datos del formulario. |
| getHeader     | `HTMLElement`                                              | `getHeader()`<br><br>Retorna el elemento HTML de la sección de la cabecera del formulario. |
| getBody       | `HTMLElement`                                              | `getBody()`<br><br>Retorna el elemento HTML de la sección del cuerpo del formulario. |
| getFooter     | `HTMLElement`                                              | `getFooter()`<br><br>Retorna el elemento HTML de la sección del pie del formulario. |
| getField      | `HTMLElement`                                              | `getField(name[, position])`<br><br>Parámetros:<br>**• name:** `string`<br>**• position:** `number` (opcional, por defecto `0`)<br><br>Retorna el elemento HTML contenedor del campo identificado por el nombre del campo de entrada. Para campos de tipo arreglo (`name="...[]"`), `position` selecciona la ocurrencia a la que apuntar. |
| getIcon       | `HTMLElement`                                              | `getIcon(name[, position])`<br><br>Parámetros:<br>**• name:** `string`<br>**• position:** `number` (opcional, por defecto `0`)<br><br>Retorna el elemento HTML de la sección del ícono del campo identificado por el nombre del campo de entrada. Para campos de tipo arreglo (`name="...[]"`), `position` selecciona la ocurrencia a la que apuntar. |
| getRightIcon  | `HTMLElement`                                              | `getRightIcon(name[, position])`<br><br>Parámetros:<br>**• name:** `string`<br>**• position:** `number` (opcional, por defecto `0`)<br><br>Retorna el elemento HTML de la sección del ícono final del campo identificado por el nombre del campo de entrada. Para campos de tipo arreglo (`name="...[]"`), `position` selecciona la ocurrencia a la que apuntar. |
| getLabel      | `HTMLLabelElement`                                         | `getLabel(name[, position])`<br><br>Parámetros:<br>**• name:** `string`<br>**• position:** `number` (opcional, por defecto `0`)<br><br>Retorna el elemento HTML de la sección de la etiqueta del campo identificado por el nombre del campo de entrada. Para campos de tipo arreglo (`name="...[]"`), `position` selecciona la ocurrencia a la que apuntar. |
| getInput      | `HTMLInputElement\|HTMLSelectElement\|HTMLTextAreaElement` | `getInput(name[, position])`<br><br>Parámetros:<br>**• name:** `string`<br>**• position:** `number` (opcional, por defecto `0`)<br><br>Retorna el elemento HTML de la sección del campo de entrada identificado por el nombre del campo de entrada. Para campos de tipo arreglo (`name="...[]"`), `position` selecciona la ocurrencia a la que apuntar. |
| getData       | `HTMLDataElement`                                          | `getData(name[, position])`<br><br>Parámetros:<br>**• name:** `string`<br>**• position:** `number` (opcional, por defecto `0`)<br><br>Retorna el elemento HTML de la sección de datos del campo identificado por el nombre de la clase de estilo. Para campos de tipo arreglo (`name="...[]"`), `position` selecciona la ocurrencia a la que apuntar. |
| getText       | `HTMLElement`                                              | `getText(name[, position])`<br><br>Parámetros:<br>**• name:** `string`<br>**• position:** `number` (opcional, por defecto `0`)<br><br>Retorna el elemento HTML de texto auxiliar identificado por el nombre de la clase de estilo. Para campos de tipo arreglo (`name="...[]"`), `position` selecciona la ocurrencia a la que apuntar. |
| getValue      | `string`                                                   | `getValue(name[, position])`<br><br>Parámetros:<br>**• name:** `string`<br>**• position:** `number` (opcional, por defecto `0`)<br><br>Retorna el valor del campo de entrada identificado por el nombre del campo de entrada o el valor del campo de salida identificado por el nombre de la clase de estilo. Para campos de tipo arreglo (`name="...[]"`), `position` selecciona la ocurrencia a la que apuntar. |
| setType       | `void`                                                     | `setType(name, type[, position])`<br><br>Parámetros:<br>**• name:** `string`<br>**• type:** `string`<br>**• position:** `number` (opcional, por defecto `0`)<br><br>Establece el tipo del campo de entrada identificado por el nombre del campo de entrada mediante el atributo `type` de la etiqueta `<input>`. Para campos de tipo arreglo (`name="...[]"`), `position` selecciona la ocurrencia a la que apuntar. |
| setValue      | `HTMLInputElement\|HTMLSelectElement\|HTMLTextAreaElement` | `setValue(name, value[, position])`<br><br>Parámetros:<br>**• name:** `string`<br>**• value:** `string`<br>**• position:** `number` (opcional, por defecto `0`)<br><br>Establece el valor del campo de entrada identificado por el nombre del campo de entrada. Para campos de tipo arreglo (`name="...[]"`), `position` selecciona la ocurrencia a la que apuntar. |
| setData       | `HTMLDataElement`                                          | `setData(name, value[, position])`<br><br>Parámetros:<br>**• name:** `string`<br>**• value:** `mixed`<br>**• position:** `number` (opcional, por defecto `0`)<br><br>Establece el valor del elemento HTML de la sección de datos del campo identificado por el nombre de la clase de estilo. Para campos de tipo arreglo (`name="...[]"`), `position` selecciona la ocurrencia a la que apuntar. |
| setText       | `HTMLElement`                                              | `setText(name, value[, position])`<br><br>Parámetros:<br>**• name:** `string`<br>**• value:** `string`<br>**• position:** `number` (opcional, por defecto `0`)<br><br>Establece el contenido del elemento HTML de texto auxiliar identificado por el nombre de la clase de estilo. Para campos de tipo arreglo (`name="...[]"`), `position` selecciona la ocurrencia a la que apuntar. |
| setEnabled    | `void`                                                     | `setEnabled(name, value[, position])`<br><br>Parámetros:<br>**• name:** `string`<br>**• value:** `boolean`<br>**• position:** `number` (opcional, por defecto `0`)<br><br>Habilita o deshabilita el campo identificado por el nombre del campo de entrada. Para campos de tipo arreglo (`name="...[]"`), `position` selecciona la ocurrencia a la que apuntar. |
| buildHtml     | `void`                                                     | `buildHtml([{ bodyItems, footerItems }])`<br><br>Parámetros:<br>**• bodyItems:** `array` (opcional, por defecto `this.bodyItems`)<br>**• footerItems:** `array` (opcional, por defecto `this.footerItems`)<br><br>Construye el HTML del cuerpo y del pie del formulario a partir de descriptores declarativos, sin instanciar los objetos WUI/JS de cada campo (eso corresponde al consumidor, sobre el HTML ya construido). Se invoca automáticamente desde `init()`. Ver [Construcción declarativa con `buildHtml()`](#wui-form-buildhtml) más abajo. |
| reset         | `void`                                                     | `reset()`<br><br>Restablece los valores del formulario. |
| focus         | `void`                                                     | `focus(name[, position])`<br><br>Parámetros:<br>**• name:** `string`<br>**• position:** `number` (opcional, por defecto `0`)<br><br>Establece el foco en el campo identificado por el nombre del campo de entrada. Para campos de tipo arreglo (`name="...[]"`), `position` selecciona la ocurrencia a la que apuntar. |
| blur          | `void`                                                     | `blur(name[, position])`<br><br>Parámetros:<br>**• name:** `string`<br>**• position:** `number` (opcional, por defecto `0`)<br><br>Quita el foco del campo identificado por el nombre del campo de entrada. Para campos de tipo arreglo (`name="...[]"`), `position` selecciona la ocurrencia a la que apuntar. |
| closeKeyboard | `void`                                                     | `closeKeyboard()`<br><br>Quita el foco del elemento activo, cerrando el teclado en pantalla en dispositivos móviles. |
| change        | `void`                                                     | `change(name[, position])`<br><br>Parámetros:<br>**• name:** `string`<br>**• position:** `number` (opcional, por defecto `0`)<br><br>Desencadena el evento change en el campo identificado por el nombre del campo de entrada. Para campos de tipo arreglo (`name="...[]"`), `position` selecciona la ocurrencia a la que apuntar. |
| autosize      | `void`                                                     | `autosize(name[, position])`<br><br>Parámetros:<br>**• name:** `string`<br>**• position:** `number` (opcional, por defecto `0`)<br><br>Ajusta automáticamente la altura de un campo de texto `<textarea>` identificado por el nombre del campo de entrada. Para campos de tipo arreglo (`name="...[]"`), `position` selecciona la ocurrencia a la que apuntar. |
| destroy       | `void`                                                     | `destroy()`<br><br>Destructor. |

## Variables CSS

| Variable                                         | Descripción |
| ------------------------------------------------ | ----------- |
| `--wui-form-header-bordercolor`                  | Color del borde de la cabecera del formulario. |
| `--wui-form-header-titlecolor`                   | Color del texto del título en la cabecera del formulario. |
| `--wui-form-body-scroll-bgcolor-out`             | Color de fondo de la barra de desplazamiento del cuerpo en estado normal. |
| `--wui-form-body-scroll-bgcolor-over`            | Color de fondo de la barra de desplazamiento del cuerpo en estado hover/activo. |
| `--wui-form-line-bordercolor`                    | Color del borde de las líneas divisorias del formulario. |
| `--wui-form-fieldset-bgcolor`                    | Color de fondo de los conjuntos de campos (fieldset). |
| `--wui-form-legend-texttransform`                | Transformación de texto para las leyendas (legend) de los conjuntos de campos. |
| `--wui-form-legend-textcolor`                    | Color del texto de las leyendas (legend) de los conjuntos de campos. |
| `--wui-form-label-inline-right`                  | Distancia de la etiqueta desde el lado derecho del borde del campo en modo `inline`. |
| `--wui-form-label-textcolor-out`                 | Color del texto de las etiquetas (label) en estado normal. |
| `--wui-form-label-textcolor-focus`               | Color del texto de las etiquetas (label) en estado focus. |
| `--wui-form-label-textcolor-notempty`            | Color del texto de las etiquetas (label) cuando el campo no está vacío. |
| `--wui-form-label-textcolor-disabled`            | Color del texto de las etiquetas (label) en estado deshabilitado. |
| `--wui-form-input-height`                        | Altura de los campos de entrada. |
| `--wui-form-input-borderwidth`                   | Ancho del borde de los campos de entrada. |
| `--wui-form-input-borderradius`                  | Radio de borde de los campos de entrada. |
| `--wui-form-input-bordercolor-out`               | Color del borde de los campos de entrada en estado normal. |
| `--wui-form-input-bordercolor-focus`             | Color del borde de los campos de entrada en estado focus. |
| `--wui-form-input-bordercolor-invalid`           | Color del borde de los campos de entrada cuando son inválidos. |
| `--wui-form-input-bordercolor-disabled`          | Color del borde de los campos de entrada en estado deshabilitado. |
| `--wui-form-input-bgcolor-out`                   | Color de fondo de los campos de entrada en estado normal. |
| `--wui-form-input-bgcolor-focus`                 | Color de fondo de los campos de entrada en estado focus. |
| `--wui-form-input-bgcolor-disabled`              | Color de fondo de los campos de entrada en estado deshabilitado. |
| `--wui-form-input-textcolor-out`                 | Color del texto de los campos de entrada en estado normal. |
| `--wui-form-input-textcolor-over`                | Color del texto de los campos de entrada en estado hover. |
| `--wui-form-input-textcolor-disabled`            | Color del texto de los campos de entrada en estado deshabilitado. |
| `--wui-form-date-opener-iconsize`                | Tamaño del ícono de apertura del selector de fecha. |
| `--wui-form-date-opener-iconcolor-out`           | Color del ícono de apertura del selector de fecha en estado normal. |
| `--wui-form-date-opener-iconcolor-over`          | Color del ícono de apertura del selector de fecha en estado hover. |
| `--wui-form-date-opener-iconcolor-disabled`      | Color del ícono de apertura del selector de fecha en estado deshabilitado. |
| `--wui-form-date-opener-openicon-src`            | Fuente del ícono de apertura del selector de fecha<br>(formato: `url()` o `none` para utilizar la fuente predeterminada). |
| `--wui-form-date-opener-closeicon-src`           | Fuente del ícono de cierre del selector de fecha<br>(formato: `url()` o `none` para utilizar la fuente predeterminada). |
| `--wui-form-time-opener-iconsize`                | Tamaño del ícono de apertura del selector de hora. |
| `--wui-form-time-opener-iconcolor-out`           | Color del ícono de apertura del selector de hora en estado normal. |
| `--wui-form-time-opener-iconcolor-over`          | Color del ícono de apertura del selector de hora en estado hover. |
| `--wui-form-time-opener-iconcolor-disabled`      | Color del ícono de apertura del selector de hora en estado deshabilitado. |
| `--wui-form-time-opener-openicon-src`            | Fuente del ícono de apertura del selector de hora<br>(formato: `url()` o `none` para utilizar la fuente predeterminada). |
| `--wui-form-time-opener-closeicon-src`           | Fuente del ícono de cierre del selector de hora<br>(formato: `url()` o `none` para utilizar la fuente predeterminada). |
| `--wui-form-range-thumb-size`                    | Tamaño del pulgar (thumb) del control de rango (range). |
| `--wui-form-range-thumb-bgcolor-out`             | Color de fondo del pulgar del control de rango en estado normal. |
| `--wui-form-range-thumb-bgcolor-over`            | Color de fondo del pulgar del control de rango en estado hover. |
| `--wui-form-range-thumb-bgcolor-disabled`        | Color de fondo del pulgar del control de rango en estado deshabilitado. |
| `--wui-form-range-trackbar-height`               | Altura de la barra de pista (trackbar) del control de rango. |
| `--wui-form-range-trackbar-borderwidth`          | Ancho del borde de la barra de pista del control de rango. |
| `--wui-form-range-trackbar-bordercolor-out`      | Color del borde de la barra de pista del control de rango en estado normal. |
| `--wui-form-range-trackbar-bordercolor-focus`    | Color del borde de la barra de pista del control de rango en estado focus. |
| `--wui-form-range-trackbar-bordercolor-disabled` | Color del borde de la barra de pista del control de rango en estado deshabilitado. |
| `--wui-form-range-trackbar-bgcolor-out`          | Color de fondo de la barra de pista del control de rango en estado normal. |
| `--wui-form-range-trackbar-bgcolor-focus`        | Color de fondo de la barra de pista del control de rango en estado de enfoque. |
| `--wui-form-range-trackbar-bgcolor-disabled`     | Color de fondo de la barra de pista del control de rango en estado deshabilitado. |
| `--wui-form-select-opener-iconsize`              | Tamaño del ícono de apertura del selector (select). |
| `--wui-form-select-opener-iconcolor-out`         | Color del ícono de apertura del selector en estado normal. |
| `--wui-form-select-opener-iconcolor-over`        | Color del ícono de apertura del selector en estado hover. |
| `--wui-form-select-opener-iconcolor-disabled`    | Color del ícono de apertura del selector en estado deshabilitado. |
| `--wui-form-select-opener-openicon-src`          | Fuente del ícono de apertura del selector<br>(formato: `url()` o `none` para utilizar la fuente predeterminada). |
| `--wui-form-select-opener-closeicon-src`         | Fuente del ícono de cierre del selector<br>(formato: `url()` o `none` para utilizar la fuente predeterminada). |
| `--wui-form-data-textcolor-out`                  | Color del texto de los elementos de datos (data) en estado normal. |
| `--wui-form-data-textcolor-disabled`             | Color del texto de los elementos de datos (data) en estado deshabilitado. |
| `--wui-form-progress-borderwidth`                | Ancho del borde de las barras de progreso (progress). |
| `--wui-form-progress-bordercolor`                | Color del borde de las barras de progreso. |
| `--wui-form-progress-valuecolor`                 | Color del valor/relleno de las barras de progreso. En barras indeterminadas (sin atributo `value`), color del centro del degradado animado. |
| `--wui-form-progress-bgcolor`                    | Color de fondo de las barras de progreso. En barras indeterminadas (sin atributo `value`), color de los extremos del degradado animado. |
| `--wui-form-button-minwidth`                     | Ancho mínimo de los botones de acción del formulario. |
| `--wui-form-text-textcolor-out`                  | Color del texto auxiliar en estado normal. |
| `--wui-form-text-textcolor-disabled`             | Color del texto auxiliar en estado deshabilitado. |
| `--wui-form-text-linkcolor-out`                  | Color de los enlaces en el texto auxiliar en estado normal. |
| `--wui-form-text-linkcolor-highlight`            | Color de los enlaces en el texto auxiliar al resaltar. |
| `--wui-form-message-shadowcolor`                 | Color de la sombra de los mensajes del formulario. |
| `--wui-form-message-bgcolor`                     | Color de fondo de los mensajes del formulario. |
| `--wui-form-message-textcolor`                   | Color del texto de los mensajes del formulario. |
| `--wui-form-message-highlight-bgcolor`           | Color de fondo resaltado de los mensajes del formulario. |
| `--wui-form-message-highlight-textcolor`         | Color del texto resaltado de los mensajes del formulario. |
| `--wui-form-mobile-field-bordercolor`            | Color del borde de los campos en modo móvil. |
| `--wui-form-mobile-label-textcolor`              | Color del texto de las etiquetas en modo móvil. |
| `--wui-form-mobile-input-height`                 | Altura de los campos de entrada en modo móvil. |
| `--wui-form-mobile-input-bgcolor`                | Color de fondo de los campos de entrada en modo móvil. |
| `--wui-form-mobile-input-borderradius`           | Radio de borde de los campos de entrada en modo móvil. |

## Implementación

Código CSS:

```css
body {
	font-family: Arial, Helvetica, Verdana, sans-serif;
	font-size: 14px;
}

nav {
	max-width: 400px;
	height: 400px;
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.8.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.8.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/form/wui-form-0.15.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/form/wui-form-0.15.css">
<script type="text/javascript" src="/libraries/wui-js/main/form/wui-form-0.15.js"></script>
```

Código HTML:

```html
<nav>
	<form name="myForm" class="wui-form my-form">
		<input type="hidden" name="myHidden">
		<div class="header">Cabecera</div>
		<div class="body scroll">
			<fieldset>
				<legend>Conjunto de campos</legend>
				<div class="field icon-left">
					<div class="icon wui-icon text-left-line"></div>
					<label>Texto</label>
					<input type="text" name="text" value="">
				</div>
				<div class="field icon-left">
					<div class="icon wui-icon list-check-line"></div>
					<label>Selector</label>
					<select name="select">
						<option value=""></option>
						<option value="value1">valor 1</option>
						<option value="value2">valor 2</option>
						<option value="value3">valor 3</option>
					</select>
				</div>
				<div class="field icon-left">
					<div class="icon wui-icon calendar-line"></div>
					<label>Fecha</label>
					<input type="date" name="date" value="">
				</div>
				<div class="field icon-left">
					<div class="icon wui-icon time-line"></div>
					<label>Hora</label>
					<input type="time" name="time" value="">
				</div>
				<div class="field icon-left autosize">
					<div class="icon wui-icon text-paragraph-line"></div>
					<label for="wuiTextarea">Área de texto</label>
					<textarea name="textarea"></textarea>
				</div>
				<div class="field icon-left inline noborder">
					<div class="icon wui-icon palette-line"></div>
					<label>Color</label>
					<input type="color" name="color" value="">
				</div>
				<div class="field icon-left noborder">
					<div class="icon wui-icon thermometer-half-line"></div>
					<label>Rango</label>
					<input type="range" name="range" value="">
				</div>
				<div class="field icon-left inline noborder">
					<div class="icon wui-icon check-line"></div>
					<label for="checkbox" class="pointer">Caja de selección</label>
					<input id="checkbox" type="checkbox" name="checkbox" value="1">
				</div>
				<div class="field icon-left">
					<div class="icon wui-icon chat-left-text-line"></div>
					<label>Dato</label>
					<data class="name" value="dato">dato</data>
				</div>
				<div class="text my-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</div>
				<div class="message highlight center">
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</div>
			</fieldset>
		</div>
		<div class="footer">
			<button class="wui-button cancel">cancel</button>
			<button class="wui-button submit">submit</button>
		</div>
	</form>
</nav>
```

> [!NOTE]
> Clases de estilo asignadas al ejecutar `init()`:
> - Elemento principal, según `fieldStyle`: `fill-fields`, `border-fields` o `line-fields` (relleno, borde o línea inferior), más `round-fields` (esquinas redondeadas) en `"roundfill"` y `"roundborder"`.
> - `.header`, `.body` y `.footer`, según `headerButtonStyle`, `bodyButtonStyle` y `footerButtonStyle`: `join-buttons` une los botones contiguos (`<button>` e `<input type="button">`) de la zona, incluidos los que están dentro de contenedores anidados como `<fieldset>`. Se elimina la separación entre ellos y el radio de las esquinas que quedan en contacto.
>
> No declare estas clases en el HTML: `fieldStyle` siempre agrega su clase (por defecto `fill-fields`) y se combinaría con la declarada.

Código JS:

```js
const init = () => {
	const form = new WUIForm({
		selector: ".wui-form.my-form",
		fieldStyle: "line",
		submit: false,
		onScrolling: (top) => { },
		onSubmit: () => { }
	});
	form.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-form-linestyle&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-form-linestyle&lang=es).

<a name="wui-form-buildhtml"></a>

## Construcción declarativa con `buildHtml()`

En lugar de escribir a mano el `<fieldset>` con sus campos y el `<div class="footer">` con sus botones, se pueden
declarar mediante las propiedades `bodyItems`/`footerItems` (o los parámetros equivalentes de `buildHtml()`), y el
método construye el HTML correspondiente. `buildHtml()` **solo construye HTML** — no instancia objetos WUI/JS: los
campos de tipo `wui-selectpicker`, `wui-datepicker`, `wui-timepicker`, `wui-colorpicker` y `wui-switch` requieren que,
tras `init()`, se instancien sus clases (`WUISelectpicker`, `WUIDatepicker`, etc.) sobre el HTML ya construido, igual
que en un formulario escrito a mano.

`bodyItems` es un arreglo de conjuntos de campos, cada uno con la forma `{ items: [...] }`; cada conjunto se traduce en
un `<fieldset>` propio. Cada elemento de `items` admite:

| Propiedad | Tipo               | Descripción |
| --------- | ------------------ | ----------- |
| type      | `string`           | Tipo de campo. Uno de: `text`, `number`, `date`, `month`, `week`, `time`, `color`, `range`, `checkbox`, `textarea`, `select`, `data`, `wui-selectpicker`, `wui-datepicker`, `wui-timepicker`, `wui-colorpicker`, `wui-switch`, o uno de los tipos estructurales `legend`, `hr`, `div`, `p`, `message` (sin campo de entrada asociado). Por defecto `text`. |
| name      | `string`           | Atributo `name` del control de entrada. |
| value     | `string\|number`   | Valor inicial del control. |
| label     | `string\|object`   | Si es `string`, crea un `<label>` con ese texto. Si es `object`, crea el `<label>` sin texto (útil con `class`/`data` para integraciones como `WUILanguage`) y admite `for` (id del control a enlazar). |
| icon      | `object`           | `{ class }`. Agrega el ícono a la izquierda del campo (clase `icon-left`). |
| options   | `array`            | Para `select`/`wui-selectpicker`: arreglo de `{ value, text, selected, class, data }`. |
| id        | `string`           | Id del elemento contenedor (para tipos `wui-*`, el `<div>` envolvente). |
| inputId   | `string`           | Id del control de entrada real (el `<input>`/`<select>` interno). |
| min/max   | `string\|number`   | Límites para `number`, `date`, `month`, `week`, `time`, `range`. |
| noborder  | `boolean`          | Agrega la clase `noborder` al campo. |
| autosize  | `boolean`          | Para `textarea`: ajusta la altura automáticamente. |
| validate  | `boolean`          | Agrega el ícono/clase de validación (`icon-right`/`validate`). |
| text      | `string`           | Para los tipos estructurales `legend`, `p`, `message`: contenido de texto. |
| class     | `string`           | Clase CSS adicional del elemento. |
| data      | `object`           | Atributos `data-*` del elemento. |

`footerItems` es un arreglo plano de descriptores de botón/enlace. Cada elemento admite `type` (`button`, por
defecto, o `link`), `class`, `data`, `text` (`string` o `{ class }` para texto vía `WUILanguage`), `icon: { class }`,
y — solo para `type: "link"` — `href`/`url` y `target`.

Ejemplo:

```js
const form = new WUIForm({
	selector: ".wui-form.my-form",
	bodyItems: [{
		items: [
			{ name: "nickname", type: "text", label: "Nickname", icon: { class: "wui-icon person-line" } },
			{ name: "role", type: "wui-selectpicker", label: "Role", options: [
				{ value: "user", text: "User" },
				{ value: "admin", text: "Admin" }
			] }
		]
	}],
	footerItems: [
		{ class: "wui-button cancel", text: "cancel" },
		{ class: "wui-button submit", text: "accept" }
	]
});
form.init();
// tras init(), el <div class="wui-selectpicker"> ya existe en el DOM
new WUISelectpicker({ selector: ".wui-selectpicker" }).init();
```

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-form-buildhtml&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-form-buildhtml&lang=es).

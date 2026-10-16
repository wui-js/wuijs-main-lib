[English](wui-button-en.md) | [Español](wui-button-es.md)

[wuijs-main-lib](../../README-es.md)

# WUIButton

Versión: `0.16`

Componente para la implementación de botones basada en el elemento HTML `<button>`.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/main/button/wui-button-0.16.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/button/wui-button-0.16.js) |
| CSS  | [src/wui-js/main/button/wui-button-0.16.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/button/wui-button-0.16.css) |
| CSS  | [src/wui-js/main/button/wui-button-0.16.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/button/wui-button-0.16.root.css) |

## Constructor

| Tipo      | Descripción |
| --------- | ----------- |
| WUIButton | `WUIButton([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

## Propiedades

| Propiedad    | Tipo       | Valor predeterminado | Descripción |
| ------------ | ---------- | -------------------- | ----------- |
| selector     | `string`   | `".wui-button"`      | (get/set)<br><br>Selector CSS que define el elemento HTML de tipo `HTMLButtonElement` que serán convertido en el objeto. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. |
| iconClass    | `string`   | `null`               | (get/set)<br><br>Clase CSS aplicada a un elemento `<div>` renderizado antes del `<span>` dentro del botón. Cuando no es `null`, se antepone `<div class="{iconClass}">` al contenido del botón. Tiene precedencia sobre `iconImage`. |
| iconImage    | `string`   | `null`               | (get/set)<br><br>URL de una imagen renderizada como `<img src="{iconImage}">` antes del `<span>` dentro del botón. Se usa solo cuando `iconClass` es `null`. |
| text         | `string`   | `""`                 | (get/set)<br><br>Texto o contenido HTML del elemento. Se usa solo cuando `textClass` es `null`. |
| textClass    | `string`   | `null`               | (get/set)<br><br>Clase CSS aplicada al elemento `<span>` renderizado dentro del botón. Cuando no es `null`, se renderiza `<span class="{textClass}">` en lugar del texto plano. |
| textData     | `array`    | `null`               | (get/set)<br><br>Arreglo de pares `[key, value]` agregados como atributos `data-*` al elemento `<span>`. Requiere que `textClass` esté definido. Ejemplo: `[["id", "42"], ["lang", "es"]]` genera `data-id="42" data-lang="es"`. |
| submit       | `boolean`  | `false`              | (get/set)<br><br>Cuando es `true`, agrega la clase CSS `submit` al elemento `<button>`, aplicando los estilos de botón de envío. |
| warning      | `boolean`  | `false`              | (get/set)<br><br>Cuando es `true`, agrega la clase CSS `warning` al elemento `<button>`, aplicando los estilos de botón de advertencia. |
| flat         | `boolean`  | `false`              | (get/set)<br><br>Cuando es `true`, agrega la clase CSS `flat` al elemento `<button>`, aplicando los estilos de botón plano. |
| selectable   | `boolean`  | `false`              | (get/set)<br><br>Define si el botón es seleccionable. |
| locked       | `boolean`  | `false`              | (get/set)<br><br>Define si el botón está bloqueado. |
| enabled      | `boolean`  | `true`               | (get/set)<br><br>Define si el botón está habilitado. |
| onClick      | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando el botón es presionado. La función recibe por parámetro:<br><br>**• selected:** `boolean`, estado de selección del botón. Si la propiedad `selectable` es `false`, el parámetro será `null`. |
| onDblClick   | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando el botón es presionado dos veces. La función recibe por parámetro:<br><br>**• selected:** `boolean`, estado de selección del botón. Si la propiedad `selectable` es `false`, el parámetro será `null`. |

## Métodos

| Método       | Tipo retorno  | Descripción |
| ------------ | ------------- | ----------- |
| getElement   | `HTMLElement` | `getElement()`<br><br>Retorna el elemento HTML contenedor del objeto. |
| getIcon      | `HTMLElement` | `getIcon()`<br><br>Retorna el elemento HTML contenedor del ícono. Este puede ser un elemento `<div>` o un `<img>` según la propiedad utilizada para su implementación, `iconClass` o `iconImage` respectivamente. |
| getText      | `HTMLElement` | `getText()`<br><br>Retorna el elemento HTML contenedor del texto. Este pude ser un elemento `<span>` o el mismo elemento `<button>` según las propiedades utilizadas para su implementación. |
| init         | `void`        | `init()`<br><br>Inicializa el objeto. |
| focus        | `void`        | `focus()`<br><br>Da foco al botón. |
| blur         | `void`        | `blur()`<br><br>Saca el foco al botón. |
| select       | `select`      | `select()`<br><br>Selecciona el botón. |
| unselect     | `unselect`    | `unselect()`<br><br>Deselecciona el botón. |
| isSelected   | `isSelected`  | `isSelected()`<br><br>Retorna si el botón está seleccionado. |
| destroy      | `void`        | `destroy()`<br><br>Destructor. |

## Variables CSS

| Variable                                    | Descripción |
| ------------------------------------------- | ----------- |
| `--wui-button-default-minwidth`             | Ancho mínimo del botón por defecto. |
| `--wui-button-default-height`               | Altura del botón por defecto. |
| `--wui-button-default-borderwidth`          | Ancho del borde del botón por defecto. |
| `--wui-button-default-bordercolor-out`      | Color del borde del botón por defecto en estado normal. |
| `--wui-button-default-bordercolor-over`     | Color del borde del botón por defecto en estado hover. |
| `--wui-button-default-bordercolor-selected` | Color del borde del botón por defecto en estado seleccionado. |
| `--wui-button-default-bordercolor-disabled` | Color del borde del botón por defecto en estado deshabilitado. |
| `--wui-button-default-bgcolor-out`          | Color de fondo del botón por defecto en estado normal. |
| `--wui-button-default-bgcolor-over`         | Color de fondo del botón por defecto en estado hover. |
| `--wui-button-default-bgcolor-selected`     | Color de fondo del botón por defecto en estado seleccionado. |
| `--wui-button-default-bgcolor-disabled`     | Color de fondo del botón por defecto en estado deshabilitado. |
| `--wui-button-default-horizpadding`         | Padding horizontal máximo del botón por defecto. El valor aplicado se calcula con `clamp(min(5px, máximo), 5%, máximo)`, donde el porcentaje se calcula sobre el ancho del elemento contenedor del botón: se reduce en contenedores angostos hasta un mínimo de `5px`, o hasta el máximo si este es menor a `5px`. |
| `--wui-button-default-vertpadding`          | Padding vertical del botón por defecto. |
| `--wui-button-default-textcolor-out`        | Color del texto del botón por defecto en estado normal. |
| `--wui-button-default-textcolor-over`       | Color del texto del botón por defecto en estado hover. |
| `--wui-button-default-textcolor-selected`   | Color del texto del botón por defecto en estado seleccionado. |
| `--wui-button-default-textcolor-disabled`   | Color del texto del botón por defecto en estado deshabilitado. |
| `--wui-button-default-textsize`             | Tamaño del texto del botón por defecto. |
| `--wui-button-submit-minwidth`              | Ancho mínimo del botón de envío. |
| `--wui-button-submit-height`                | Altura del botón de envío. |
| `--wui-button-submit-bordercolor-out`       | Color del borde del botón de envío en estado normal. |
| `--wui-button-submit-bordercolor-over`      | Color del borde del botón de envío en estado hover. |
| `--wui-button-submit-bordercolor-selected`  | Color del borde del botón de envío en estado seleccionado. |
| `--wui-button-submit-bordercolor-disabled`  | Color del borde del botón de envío en estado deshabilitado. |
| `--wui-button-submit-bgcolor-out`           | Color de fondo del botón de envío en estado normal. |
| `--wui-button-submit-bgcolor-over`          | Color de fondo del botón de envío en estado hover. |
| `--wui-button-submit-bgcolor-selected`      | Color de fondo del botón de envío en estado seleccionado. |
| `--wui-button-submit-bgcolor-disabled`      | Color de fondo del botón de envío en estado deshabilitado. |
| `--wui-button-submit-textcolor-out`         | Color del texto del botón de envío en estado normal. |
| `--wui-button-submit-textcolor-over`        | Color del texto del botón de envío en estado hover. |
| `--wui-button-submit-textcolor-selected`    | Color del texto del botón de envío en estado seleccionado. |
| `--wui-button-submit-textcolor-disabled`    | Color del texto del botón de envío en estado deshabilitado. |
| `--wui-button-submit-textsize`              | Tamaño del texto del botón de envío. |
| `--wui-button-warning-bordercolor-out`      | Color del borde del botón de advertencia en estado normal. |
| `--wui-button-warning-bordercolor-over`     | Color del borde del botón de advertencia en estado hover. |
| `--wui-button-warning-bordercolor-selected` | Color del borde del botón de advertencia en estado seleccionado. |
| `--wui-button-warning-bordercolor-disabled` | Color del borde del botón de advertencia en estado deshabilitado. |
| `--wui-button-warning-bgcolor-out`          | Color de fondo del botón de advertencia en estado normal. |
| `--wui-button-warning-bgcolor-over`         | Color de fondo del botón de advertencia en estado hover. |
| `--wui-button-warning-bgcolor-selected`     | Color de fondo del botón de advertencia en estado seleccionado. |
| `--wui-button-warning-bgcolor-disabled`     | Color de fondo del botón de advertencia en estado deshabilitado. |
| `--wui-button-warning-textcolor-out`        | Color del texto del botón de advertencia en estado normal. |
| `--wui-button-warning-textcolor-over`       | Color del texto del botón de advertencia en estado hover. |
| `--wui-button-warning-textcolor-selected`   | Color del texto del botón de advertencia en estado seleccionado. |
| `--wui-button-warning-textcolor-disabled`   | Color del texto del botón de advertencia en estado deshabilitado. |
| `--wui-button-icon-float-padding`           | Padding de los iconos flotantes del botón. |
| `--wui-button-mobile-default-minwidth`      | Ancho mínimo del botón por defecto en modo móvil (ancho de pantalla menor a 768px). |
| `--wui-button-mobile-default-height`        | Altura del botón por defecto en modo móvil (ancho de pantalla menor a 768px). |
| `--wui-button-mobile-submit-minwidth`       | Ancho mínimo del botón de envío en modo móvil (ancho de pantalla menor a 768px). |
| `--wui-button-mobile-submit-height`         | Altura del botón de envío en modo móvil (ancho de pantalla menor a 768px). |
| `--wui-button-mobile-icon-float-padding`    | Padding de los iconos flotantes del botón en modo móvil (ancho de pantalla menor a 768px). |

## Implementación

Código CSS:

```css
html,
body {
	height: 100%;
	margin: 0;
	padding: 0;
}

nav {
	display: flex;
	margin: 10px;
	align-items: center;
	gap: 10px;
}

.my-button {
	margin: 20px;
}

.output {
	font-family: monospace;
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.8.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.8.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/button/wui-button-0.16.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/button/wui-button-0.16.css">
<script type="text/javascript" src="/libraries/wui-js/main/button/wui-button-0.16.js"></script>
```

Código HTML:

```html
<nav>
	<button class="wui-button my-button button1"></button>
	<button class="wui-button my-button button2"></button>
	<div class="output"></div>
</nav>
```

Código JS:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const button1 = new WUIButton({
		selector: ".wui-button.button1",
		//iconClass: null,
		//iconImage: null,
		//text: "botón 1",
		//textClass: null,
		//textData: null,
		//submit: false,
		//warning: false,
		//flat: false,
		//selectable: false,
		//locked: false,
		//enabled: true,
		onClick: (selected) => {
			output.textContent = "Clic button 1";
		},
		onDblClick: (selected) => {
			output.textContent = "Double-Clic button 1";
		}
	});
	const button2 = new WUIButton({
		selector: ".wui-button.button2",
		//iconClass: "wui-icon float-left mappointer-fill",
		//text: "botón 2",
		//submit: true,
		onClick: () => {
			output.textContent = "Clic button 2";
		},
		onDblClick: () => {
			output.textContent = "Double-Clic button 2";
		}
	});
	button1.init();
	button2.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> Si el selector define un elemento que no es de tipo `HTMLButtonElement`, el objeto no se inicializará.

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-button-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-button-basic&lang=es).

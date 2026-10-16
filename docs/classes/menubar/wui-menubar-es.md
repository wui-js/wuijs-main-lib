[English](wui-menubar-en.md) | [Español](wui-menubar-es.md)

[wuijs-main-lib](../../README-es.md)

# WUIMenubar

Versión: `0.10`

Componente para la implementación de barras de menú.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/main/menubar/wui-menubar-0.10.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/menubar/wui-menubar-0.10.js) |
| CSS  | [src/wui-js/main/menubar/wui-menubar-0.10.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/menubar/wui-menubar-0.10.css) |
| CSS  | [src/wui-js/main/menubar/wui-menubar-0.10.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/menubar/wui-menubar-0.10.root.css) |

## Constructor

| Tipo       | Descripción |
| ---------- | ----------- |
| WUIMenubar | `WUIMenubar([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

## Propiedades

| Propiedad           | Tipo       | Valor predeterminado | Descripción |
| ------------------- | ---------- | -------------------- | ----------- |
| selector            | `string`   | `".wui-menubar"`     | (get/set)<br><br>Selector CSS que define el elemento HTML que serán convertido en el objeto. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. |
| fixed               | `boolean`  | `false`              | (get/set)<br><br>Define si el menú se fija al borde de la pantalla. |
| centered            | `boolean`  | `true`               | (get/set)<br><br>Define si el menú se muestra centrado verticalmente. |
| compacted           | `boolean`  | `false`              | (get/set)<br><br>Define si el menú se muestra en formato compacto. |
| expansive           | `boolean`  | `true`               | (get/set)<br><br>Define si el menú se expande. La función de expansión es no es visible en modo móvil (cuando el ancho de la pantalla es inferior a `768px`). |
| autoClose           | `boolean`  | `true`               | (get/set)<br><br>Define si el submenú se cierra automáticamente hacer click en un botón de él. Si la propiedad es `false` se cargará en la parte superior del submenú un botón para cerrarlo manualmente. |
| hiddenPassiveBorder | `boolean`  | `false`              | (get/set)<br><br>Oculta el borde pasivo de la barra principal (top, left y bottom modo normal y left, right, bottom en modo móvil). |
| separations         | `boolean`  | `false`              | (get/set)<br><br>Define si entre las secciones de la barra de menú se incluye una línea de separación. |
| nowrapTooltips      | `boolean`  | `false`              | (get/set)<br><br>Define si los tooltips de los botones mantienen su texto en una sola línea (`white-space: nowrap`) en vez de ajustarse al ancho de su contenido. |
| topButtons          | `array`    | `[]`                 | (get/set)<br><br>Lista de botones de menú superior, según la definición de **Opciones de Botón**. Los botónes de esta sección no son visibles en modo móvil (cuando el ancho de la pantalla es inferior a `768px`). |
| mainButtons         | `array`    | `[]`                 | (get/set)<br><br>Lista de botones de menú principal, según la definición de **Opciones de Botón**. |
| bottomButtons       | `array`    | `[]`                 | (get/set)<br><br>Lista de botones de menú inferior, según la definición de **Opciones de Botón**. Los botónes de esta sección no son visibles en modo móvil (cuando el ancho de la pantalla es inferior a `768px`). |
| onClick             | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando un botón es presionado. La función recibe por parámetro:<br><br>**• id:** `string`, identificador único de botón. |
| onSelect            | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando un botón con propiedad `selectable` es seleccionado. La función recibe por parámetro:<br><br>**• id:** `string`, identificador único de botón. |

## Opciones de Botón

| Propiedad    | Tipo       | Valor predeterminado | Descripción |
| ------------ | ---------- | -------------------- | ----------- |
| id           | `string`   | `undefined`          | Identificador único de botón. |
| iconImage    | `string`   | `undefined`          | URL de la imagen asociada al botón de menú. |
| iconClass    | `string`   | `undefined`          | Estilos CSS que define el ícono del botón de menú. Esta opción puede ser utilizado opcionalmente con la librería [WUIIcon](../icon/wui-icon-es.md) mediante el estilo `wui-icon` conjuntamente a un estilo de ícono específico. |
| label        | `string`   | `""`                 | Texto de la etiqueta asociada al botón de menú. |
| radioMode    | `boolean`  | `true`               | Define si el botón se comporta como un botón en modo radio. |
| selectable   | `boolean`  | `true`               | Define si el botón es seleccionable. |
| hoverable    | `boolean`  | `true`               | Define si el botón reacciona al evento `hover`. |
| tooltipable  | `boolean`  | `true`               | Define si el botón muestra un tooltip cuando está contraido y el ancho de la pantalla es mayor o igual a `768px`. |
| selected     | `boolean`  | `false`              | Define si el botón se encuentra seleccionado. |
| enabled      | `boolean`  | `true`               | Define si el botón está habilitado. |
| onClick      | `function` | `null`               | Función que se ejecuta cuando el botón es presionado. Si está definida, esta opción tiene prioridad sobre la propiedad `onClick`. |

## Métodos

| Método           | Tipo retorno  | Descripción |
| ---------------- | ------------- | ----------- |
| getElement       | `HTMLElement` | `getElement()`<br><br>Retorna el elemento HTML contenedor del objeto. |
| getButtonOptions | `object`      | `getButtonOptions(id)`<br><br>Parámetros:<br>**• id:** `string`, identificador único de botón.<br><br>Retorna el objeto de opciones del botón de menú según el identificador único pasado por parámetro, o `null` si no existe. |
| init             | `void`        | `init()`<br><br>Inicializa el objeto. |
| selectButton     | `void`        | `selectButton(id[, selected[, runCallback]])`<br><br>Parámetros:<br>**• id:** `string`, identificador único de botón.<br>**• selected:** `boolean`, estado de selección del botón. El valor predeterminado `true`.<br>**• runCallback:** `boolean`, ejecuta las funciones `onClick` y `onSelect` del botón. El valor predeterminado `true`.<br><br>Selecciona o deselecciona un botón de menú. |
| enableButton     | `void`        | `enableButton(id[, enabled])`<br><br>Parámetros:<br>**• id:** `string`, identificador único de botón.<br>**• enabled:** `boolean`, estado de habilitación del botón. El valor predeterminado `true`.<br><br>Hablita o deshabilita un botón de menú. |
| setPhoto         | `void`        | `setPhoto(id[, src])`<br><br>Parámetros:<br>**• id:** `string`, identificador único de botón.<br>**• src:** `string`, fuente de la imagen. El valor predeterminado `""`.<br><br>Carga una imagen por encima del ícono de un botón. |
| setBubble        | `void`        | `setBubble(id, number)`<br><br>Parámetros:<br>**• id:** `string`, identificador único de botón.<br>**• number:** `number`, número que aparecerá en la burbuja. El valor `0` oculta la burbuja. |
| close            | `void`        | `close()`<br><br>Cierra el submenú en caso de estar desplegado. |
| destroy          | `void`        | `destroy()`<br><br>Destructor. |

## Variables CSS

| Variable                                          | Descripción |
| ------------------------------------------------- | ----------- |
| `--wui-menubar-shadowcolor`                       | Color de la sombra de las barras de menú y submenú. |
| `--wui-menubar-shadowopacity`                     | Opacidad de la sombra de las barras de menú y submenú. |
| `--wui-menubar-margin`                            | Margen exterior de la barra de menú respecto a los bordes de la ventana. |
| `--wui-menubar-bar-borderradius`                  | Radio de borde de la barra principal de menú. |
| `--wui-menubar-bar-bordercolor`                   | Color del borde de la barra principal de menú. |
| `--wui-menubar-bar-bgcolor-top`                   | Color de fondo superior de la barra principal (usado en gradiente). |
| `--wui-menubar-bar-bgcolor-bottom`                | Color de fondo inferior de la barra principal (usado en gradiente). |
| `--wui-menubar-bar-button-borderradius`           | Radio de borde de los botones de la barra principal. |
| `--wui-menubar-bar-button-bgcolor-out`            | Color de fondo de los botones de la barra principal en estado normal. |
| `--wui-menubar-bar-button-bgcolor-over`           | Color de fondo de los botones de la barra principal en estado hover/focus. |
| `--wui-menubar-bar-button-bgcolor-selected`       | Color de fondo de los botones de la barra principal en estado seleccionado. |
| `--wui-menubar-bar-button-bgcolor-disabled`       | Color de fondo de los botones de la barra principal en estado deshabilitado. |
| `--wui-menubar-bar-button-iconsize`               | Tamaño de los íconos de los botones de la barra principal. |
| `--wui-menubar-bar-button-iconcolor-out`          | Color de los íconos de los botones de la barra principal en estado normal. |
| `--wui-menubar-bar-button-iconcolor-over`         | Color de los íconos de los botones de la barra principal en estado hover/focus. |
| `--wui-menubar-bar-button-iconcolor-selected`     | Color de los íconos de los botones de la barra principal en estado seleccionado. |
| `--wui-menubar-bar-button-iconcolor-disabled`     | Color de los íconos de los botones de la barra principal en estado deshabilitado. |
| `--wui-menubar-bar-button-textcolor-out`          | Color del texto de los botones de la barra principal en estado normal. |
| `--wui-menubar-bar-button-textcolor-over`         | Color del texto de los botones de la barra principal en estado hover/focus. |
| `--wui-menubar-bar-button-textcolor-selected`     | Color del texto de los botones de la barra principal en estado seleccionado. |
| `--wui-menubar-bar-button-textcolor-disabled`     | Color del texto de los botones de la barra principal en estado deshabilitado. |
| `--wui-menubar-separation-bordercolor`            | Color de la línea de separación entre las secciones de la barra de menú. |
| `--wui-menubar-expander-bgcolor-out`              | Color de fondo del botón expansor/contrator en estado normal. |
| `--wui-menubar-expander-bgcolor-over`             | Color de fondo del botón expansor/contrator en estado hover. |
| `--wui-menubar-expander-iconsize`                 | Tamaño del ícono del botón expansor/contrator. |
| `--wui-menubar-expander-iconcolor-out`            | Color del ícono del botón expansor/contrator en estado normal. |
| `--wui-menubar-expander-iconcolor-over`           | Color del ícono del botón expansor/contrator en estado hover. |
| `--wui-menubar-expander-expandicon-src`           | Fuente del ícono de expansión<br>(formato: `url()` o `none` para utilizar la fuente predeterminada). |
| `--wui-menubar-expander-contracticon-src`         | Fuente del ícono de contracción<br>(formato: `url()` o `none` para utilizar la fuente predeterminada). |
| `--wui-menubar-opener-iconsize`                   | Tamaño del ícono del botón abridor de submenú. |
| `--wui-menubar-opener-openicon-src`               | Fuente del ícono de apertura de submenú<br>(formato: `url()` o `none` para utilizar la fuente predeterminada). |
| `--wui-menubar-opener-closeicon-src`              | Fuente del ícono de cierre de submenú<br>(formato: `url()` o `none` para utilizar la fuente predeterminada). |
| `--wui-menubar-submenu-borderradius`              | Radio de borde de la barra de submenú. |
| `--wui-menubar-submenu-bordercolor`               | Color del borde del submenú. |
| `--wui-menubar-submenu-bgcolor`                   | Color de fondo del submenú. |
| `--wui-menubar-submenu-button-borderradius`       | Radio de borde de los botones del submenú. |
| `--wui-menubar-submenu-button-bgcolor-out`        | Color de fondo de los botones del submenú en estado normal. |
| `--wui-menubar-submenu-button-bgcolor-over`       | Color de fondo de los botones del submenú en estado hover/focus. |
| `--wui-menubar-submenu-button-bgcolor-selected`   | Color de fondo de los botones del submenú en estado seleccionado. |
| `--wui-menubar-submenu-button-bgcolor-disabled`   | Color de fondo de los botones del submenú en estado deshabilitado. |
| `--wui-menubar-submenu-button-iconsize`           | Tamaño de los íconos de los botones del submenú. |
| `--wui-menubar-submenu-button-iconcolor-out`      | Color de los íconos de los botones del submenú en estado normal. |
| `--wui-menubar-submenu-button-iconcolor-over`     | Color de los íconos de los botones del submenú en estado hover/focus. |
| `--wui-menubar-submenu-button-iconcolor-selected` | Color de los íconos de los botones del submenú en estado seleccionado. |
| `--wui-menubar-submenu-button-iconcolor-disabled` | Color de los íconos de los botones del submenú en estado deshabilitado. |
| `--wui-menubar-submenu-button-textcolor-out`      | Color del texto de los botones del submenú en estado normal. |
| `--wui-menubar-submenu-button-textcolor-over`     | Color del texto de los botones del submenú en estado hover/focus. |
| `--wui-menubar-submenu-button-textcolor-selected` | Color del texto de los botones del submenú en estado seleccionado. |
| `--wui-menubar-submenu-button-textcolor-disabled` | Color del texto de los botones del submenú en estado deshabilitado. |
| `--wui-menubar-tooltip-bgcolor`                   | Color de fondo del tooltip que aparece al pasar el cursor sobre un botón contraído (solo desktop). |
| `--wui-menubar-tooltip-textcolor`                 | Color del texto del tooltip. |
| `--wui-menubar-bubble-bgcolor`                    | Color de fondo de la burbuja de notificación en los botones. |
| `--wui-menubar-bubble-textcolor`                  | Color del texto de la burbuja de notificación. |
| `--wui-menubar-mobile-bar-bgcolor-top`            | Color de fondo de la barra principal de menú en modo móvil. |
| `--wui-menubar-mobile-bar-bgcolor-bottom`         | Color de fondo de la barra principal de menú en modo móvil. |
| `--wui-menubar-mobile-bar-horizpadding`           | Margen horizontal interno de la barra principal de menú en modo móvil. |
| `--wui-menubar-mobile-bar-vertpadding`            | Margen vertical interno de la barra principal de menú en modo móvil. |
| `--wui-menubar-mobile-opener-closeicon-src`       | Fuente del ícono de cierre del submenú en modo móvil<br>(formato: `url()` o `none` para utilizar la fuente predeterminada). |

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

.output {
	position: absolute;
	top: 10px;
	left: 10px;
	right: 10px;
	text-align: right;
	font-family: monospace;
}

@media screen and (max-width: 767px) {
	.output {
		text-align: center:
	}
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.8.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.8.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/menubar/wui-menubar-0.10.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/menubar/wui-menubar-0.10.css">
<script type="text/javascript" src="/libraries/wui-js/main/menubar/wui-menubar-0.10.js"></script>
```

Cuerpo HTML:

```html
<div class="wui-menubar my-menubar"></div>
<div class="output"></div>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const menubar = new WUIMenubar({
		selector: ".wui-menubar.my-menubar",
		//fixed: false,
		centered: false,
		//compacted: false,
		//expansive: true,
		autoClose: false,
		//hiddenPassiveBorder: false,
		separations: true,
		//nowrapTooltips: false,
		topButtons: [{
			id: "logo",
			iconImage: "https://wuijs.dev/Images/Logo/wuijs-isotype-color.svg",
			label: "WUI /JS Lib",
			tooltipable: false,
			selectable: false
		}],
		mainButtons: [{
			id: "home",
			iconClass: "wui-icon home-fill",
			label: "Inicio",
			selected: true
		}, {
			id: "tools",
			iconClass: "wui-icon pencil-fill",
			label: "Herramientas",
			buttons: [{
				id: "users",
				iconClass: "wui-icon palette-fill",
				label: "Colores"
			}, {
				id: "zoomin",
				iconClass: "wui-icon zoomin-line",
				label: "Zoom in"
			}, {
				id: "zoomout",
				iconClass: "wui-icon zoomout-line",
				label: "Zoom out"
			}, {
				id: "images",
				iconClass: "wui-icon image-fill",
				label: "Imágenes"
			}]
		}, {
			id: "settings",
			iconClass: "wui-icon gear-fill",
			label: "Configuración",
			selectable: false
		}, {
			id: "account",
			iconClass: "wui-icon person-circle-fill",
			photoImage: "",
			label: "Cuenta",
			selectable: false
		}, {
			id: "notifications",
			iconClass: "wui-icon bell-fill",
			label: "Notificaciones",
			radio: false
		}],
		bottomButtons: [{
			id: "logout",
			iconClass: "wui-icon logout-line",
			label: "Cerrar sesión",
			selectable: false
		}],
		onClick: (id) => {
			output.textContent = `Clic - id botón: "${id}"`;
		},
		onSelect: (id) => {
			output.textContent = `Selección - id botón: "${id}"`;
		}
	});
	menubar.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> Si el selector define un elemento que no es de tipo `HTMLDivElement`, el objeto no se inicializará.

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-menubar-submenu&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-menubar-submenu&lang=es).

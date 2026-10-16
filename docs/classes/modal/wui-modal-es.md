[English](wui-modal-en.md) | [Español](wui-modal-es.md)

[wuijs-main-lib](../../README-es.md)

# WUIModal

Versión: `0.13`

Componente para la implementación de cuadros de diálogo (tipo `message`) y ventanas emergentes (tipo `page`).

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/main/modal/wui-modal-0.13.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/modal/wui-modal-0.13.js) |
| CSS  | [src/wui-js/main/modal/wui-modal-0.13.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/modal/wui-modal-0.13.css) |
| CSS  | [src/wui-js/main/modal/wui-modal-0.13.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/modal/wui-modal-0.13.root.css) |

## Constructor

| Tipo     | Descripción |
| -------- | ----------- |
| WUIModal | `WUIModal([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

## Propiedades

| Propiedad       | Tipo       | Valor predeterminado | Descripción |
| --------------- | ---------- | -------------------- | ----------- |
| selector        | `string`   | `""`                 | (get/set)<br><br>Selector CSS que define el elemento HTML contenedor del objeto. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. |
| mode            | `string`   | `"page"`             | (get/set)<br><br>Modo de visualización del modal.<br><br>Valores:<br>• `"message"`: cuadro de diálogo.<br>• `"page"`: ventana emergente.<br>• `"smallpage"`: ventana emergente pequeña.<br>• `"slidepage"`: ventana emergente lateral.<br><br>En modo móvil, los modos `"page"` y `"slidepage"` se muestran como una hoja que se desliza desde la parte inferior de la pantalla. |
| slidePosition   | `string`   | `"right"`            | (get/set)<br><br>Lado de la pantalla en el que se abre y cierra el modal cuando la propiedad `mode` es `"slidepage"`.<br><br>Valores:<br>• `"left"`<br>• `"right"`<br><br>Se aplica en la siguiente apertura del modal. No tiene efecto en modo móvil. |
| overlay         | `boolean`  | `true`               | (get/set)<br><br>Define si se muestra el overlay de fondo. En modo móvil el overlay siempre se muestra.<br><br>Cuando la propiedad `mode` es `"slidepage"` y el valor es `false`, el elemento contenedor se ajusta a la caja del modal, permitiendo interactuar con la página de fondo. |
| priority        | `boolean`  | `false`              | (get/set)<br><br>Define si el modal tiene prioridad de apilamiento (`z-index`) por sobre los modales sin prioridad. |
| transitionDelay | `number`   | `300`                | (get/set)<br><br>Duración de las transiciones de apertura y cierre del modal en milisegundos. La transición de maximización dura una décima parte de este valor. |
| onStartOpen     | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando inicia la apertura del modal. Si retorna exactamente `false`, se cancela la apertura. |
| onOpen          | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando el modal se ha abierto completamente. |
| onMaximize      | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando el modal se maximiza. |
| onScrolling     | `function` | `null`               | (get/set)<br><br>Función que se ejecuta durante el scroll del cuerpo del modal. |
| onStartClose    | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando inicia el cierre del modal. Si retorna exactamente `false`, se cancela el cierre. |
| onClose         | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando el modal se ha cerrado completamente. |
| onBack          | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando se pulsa el botón de retroceso del modal. |

## Métodos de la Clase

| Método           | Tipo retorno | Descripción |
| ---------------- | ------------ | ----------- |
| getAllInstances  | `Array`      | `WUIModal.getAllInstances()` *(método estático)*<br><br>Retorna todas las instancias de WUIModal. |
| getOpenInstances | `Array`      | `WUIModal.getOpenInstances()` *(método estático)*<br><br>Retorna todas las instancias abiertas de WUIModal. |
| closeAll         | `void`       | `WUIModal.closeAll([except])` *(método estático)*<br><br>Parámetros:<br>**• except:** `string` *opcional*, selector del modal que se excluirá de la secuencia de cierre.<br><br>Cierra todos los modales excepto el especificado por selector. |

## Métodos de la Instancia

| Método        | Tipo retorno  | Descripción |
| ------------- | ------------- | ----------- |
| getElement    | `HTMLElement` | `getElement()`<br><br>Retorna el elemento HTML contenedor del objeto. |
| getBox        | `HTMLElement` | `getBox()`<br><br>Retorna el elemento HTML de la caja del modal. |
| getHeader     | `HTMLElement` | `getHeader()`<br><br>Retorna el elemento HTML de la cabecera del modal. |
| getBack       | `HTMLElement` | `getBack()`<br><br>Retorna el elemento HTML del botón de retroceso del modal. |
| getTopbar     | `HTMLElement` | `getTopbar()`<br><br>Retorna el elemento HTML de la barra superior del modal. |
| getTitle      | `HTMLElement` | `getTitle()`<br><br>Retorna el elemento HTML del título del modal. |
| getClose      | `HTMLElement` | `getClose()`<br><br>Retorna el elemento HTML del botón de cierre del modal. |
| getBody       | `HTMLElement` | `getBody()`<br><br>Retorna el elemento HTML del cuerpo del modal. |
| getFooter     | `HTMLElement` | `getFooter()`<br><br>Retorna el elemento HTML del pie del modal. |
| getStatus     | `string`      | `getStatus()`<br><br>Retorna el estado actual del modal como cadena separada por comas. Posibles valores: `"opened"`, `"maximized"`, `"under"`, `"close"`. |
| setHeadBorder | `void`        | `setHeadBorder(border)`<br><br>Parámetros:<br>**• border:** `boolean`.<br><br>Establece si la cabecera tiene borde inferior. |
| init          | `void`        | `init()`<br><br>Inicializa el objeto. |
| open          | `void`        | `open([onOpen[, delay]])`<br><br>Parámetros:<br>**• onOpen:** `function` *opcional*, función que se ejecuta al abrir el modal. El valor predeterminado corresponde al de la propiedad `onOpen`.<br>**• delay:** `number` *opcional*, duración de apertura del modal en milisegundos. El valor predeterminado corresponde al de la propiedad `transitionDelay`.<br><br>Abre el modal. |
| resposive     | `void`        | `resposive()`<br><br>Ajusta el modal al tamaño de la ventana. |
| maximize      | `void`        | `maximize([onMaximize[, delay]])`<br><br>Parámetros:<br>**• onMaximize:** `function` *opcional*, función que se ejecuta al maximizar el modal. El valor predeterminado corresponde al de la propiedad `onMaximize`.<br>**• delay:** `number` *opcional*, duración de apertura del modal en milisegundos, de la cual la maximización utiliza una décima parte. El valor predeterminado corresponde al de la propiedad `transitionDelay`.<br><br>Maximiza el modal. |
| close         | `void`        | `close([onClose[, delay]])`<br><br>Parámetros:<br>**• onClose:** `function` *opcional*, función que se ejecuta al cerrar el modal. El valor predeterminado corresponde al de la propiedad `onClose`.<br>**• delay:** `number` *opcional*, duración de cierre del modal en milisegundos. El valor predeterminado corresponde al de la propiedad `transitionDelay`.<br><br>Cierra el modal. |
| isOpen        | `boolean`     | `isOpen()`<br><br>Retorna si el modal está abierto. |
| destroy       | `void`        | `destroy()`<br><br>Destructor. |

## Variables CSS

| Variable                                             | Descripción |
| ---------------------------------------------------- | ----------- |
| `--wui-modal-transition-delay`                       | Duración de las transiciones del modal. Los métodos `open()`, `maximize()` y `close()` la asignan en el elemento contenedor a partir de la propiedad `transitionDelay`. |
| `--wui-modal-overlay-bgcolor`                        | Color de fondo del overlay del modal. |
| `--wui-modal-box-borderwidth`                        | Ancho del borde de la caja del modal. |
| `--wui-modal-box-bordercolor`                        | Color del borde de la caja del modal. |
| `--wui-modal-box-borderradius`                       | Radio de borde de la caja del modal. |
| `--wui-modal-box-bgcolor`                            | Color de fondo de la caja del modal. |
| `--wui-modal-back-textcolor`                         | Color del texto del botón de retroceso. |
| `--wui-modal-close-bgcolor`                          | Color de fondo del botón de cierre. |
| `--wui-modal-topbar-height`                          | Altura de la barra superior del modal. |
| `--wui-modal-title-textfont`                         | Fuente del texto del título del modal. |
| `--wui-modal-title-textcase`                         | Transformación del texto del título (uppercase, lowercase, none). |
| `--wui-modal-title-textcolor`                        | Color del texto del título del modal. |
| `--wui-modal-body-scroll-bgcolor-out`                | Color de la barra de desplazamiento del cuerpo en estado normal. |
| `--wui-modal-body-scroll-bgcolor-over`               | Color de la barra de desplazamiento del cuerpo en estado hover. |
| `--wui-modal-footer-bordercolor`                     | Color del borde del pie del modal. |
| `--wui-modal-button-submit-bgcolor-mobile`           | Color de fondo del botón de envío en modo móvil. |
| `--wui-modal-button-submit-textcolor-mobile`         | Color del texto del botón de envío en modo móvil. |
| `--wui-modal-button-warning-textcolor-mobile`        | Color del texto del botón de advertencia en modo móvil. |
| `--wui-modal-message-box-width`                      | Ancho de la caja del modal tipo mensaje. |
| `--wui-modal-message-box-bgcolor`                    | Color de fondo de la caja del modal tipo mensaje. |
| `--wui-modal-message-box-textcolor`                  | Color del texto de la caja del modal tipo mensaje. |
| `--wui-modal-message-linkcolor`                      | Color de los enlaces en el modal tipo mensaje. |
| `--wui-modal-message-mobile-box-width`               | Ancho de la caja del modal tipo mensaje en modo móvil. |
| `--wui-modal-message-mobile-footer-bordercolor`      | Color del borde del pie del modal tipo mensaje en modo móvil. |
| `--wui-modal-message-mobile-button-bordercolor`      | Color del borde de los botones del modal tipo mensaje en modo móvil. |
| `--wui-modal-page-box-width`                         | Ancho de la caja del modal tipo página. |
| `--wui-modal-page-box-height`                        | Altura de la caja del modal tipo página. |
| `--wui-modal-page-box-borderradius`                  | Radio de borde de la caja del modal tipo página. |
| `--wui-modal-page-box-maxheight`                     | Altura máxima de la caja del modal tipo página. |
| `--wui-modal-page-box-bgcolor`                       | Color de fondo de la caja del modal tipo página. |
| `--wui-modal-page-header-topbar-bgcolor`             | Color de fondo de la barra superior de la cabecera del modal tipo página. |
| `--wui-modal-page-header-bordercolor`                | Color del borde de la cabecera del modal tipo página. |
| `--wui-modal-smallpage-box-width`                    | Ancho de la caja del modal tipo página pequeña. |
| `--wui-modal-smallpage-box-height`                   | Altura de la caja del modal tipo página pequeña. |
| `--wui-modal-slidepage-box-width`                    | Ancho de la caja del modal tipo página deslizante. |
| `--wui-modal-slidepage-box-margin`                   | Margen de la caja del modal tipo página deslizante. |
| `--wui-modal-mobile-page-box-topmargin`              | Margen superior de la caja del modal tipo página en modo móvil. |
| `--wui-modal-mobile-page-box-borderradius-maximized` | Radio de borde maximizado de la caja del modal tipo página en modo móvil. |

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

nav > button {
	height: 24px;
	-webkit-border-radius: 12px;
	-moz-border-radius: 12px;
	border-radius: 12px;
	border: 1px solid #ccc;
	background-color: transparent;
}

.my-modal > .box > .body > p {
	text-align: center;
}

.output {
	font-family: monospace;
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.8.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.8.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/modal/wui-modal-0.13.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/modal/wui-modal-0.13.css">
<script type="text/javascript" src="/libraries/wui-js/main/modal/wui-modal-0.13.js"></script>
```

Código HTML:

```html
<nav>
	<button class="open">abrir modal</button>
	<div class="output"></div>
</nav>
<div class="wui-modal my-modal page">
	<div class="box">
		<div class="header">
			<div class="topbar"></div>
			<div class="title">Título del Modal</div>
			<div class="close wui-icon close-lg-line"></div>
		</div>
		<div class="body">
			<p>Contenido del modal...</p>
		</div>
		<div class="footer">
			Pié de página
		</div>
	</div>
</div>
```

Código JS:

```js
const init = () => {
	const button = document.querySelector("button.open");
	const output = document.body.querySelector(".output");
	const modal = new WUIModal({
		selector: ".wui-modal.my-modal",
		//mode: "page",
		//slidePosition: "right",
		//overlay: true,
		//priority: false,
		//transitionDelay: 300,
		onStartOpen: () => {
			output.textContent = "Abriendo modal";
		},
		onOpen: () => {
			output.textContent = "Modal abierto";
		},
		//onMaximize: null,
		//onScrolling: null,
		onStartClose: () => {
			output.textContent = "Cerrando modal";
		},
		onClose: () => {
			output.textContent = "Modal cerrado";
		}
		//onBack: null
	});
	modal.init();
	button.addEventListener("click", () => {
		modal.open();
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> Si el selector define un elemento que no es de tipo `HTMLDivElement`, el objeto no se inicializará.

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-modal-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-modal-basic&lang=es).

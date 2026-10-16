[English](wui-paging-en.md) | [Español](wui-paging-es.md)

[wuijs-main-lib](../../README-es.md)

# WUIPaging

Versión: `0.12`

Componente para la implementación de vistas accesibles paginadamente con transiciones animadas.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/main/paging/wui-paging-0.12.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/paging/wui-paging-0.12.js) |
| CSS  | [src/wui-js/main/paging/wui-paging-0.12.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/paging/wui-paging-0.12.css) |
| CSS  | [src/wui-js/main/paging/wui-paging-0.12.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/paging/wui-paging-0.12.root.css) |

## Constructor

| Tipo      | Descripción |
| --------- | ----------- |
| WUIPaging | `WUIPaging([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

## Propiedades

| Propiedad   | Tipo       | Valor predeterminado | Descripción |
| ----------- | ---------- | -------------------- | ----------- |
| selector    | `string`   | `""`                 | (get/set)<br><br>Selector CSS que define el elemento HTML contenedor del objeto. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. El elemento se localiza al construir el objeto. |
| index       | `number`   | `null`               | (get/set)<br><br>Índice de la página actualmente seleccionada. |
| dataTarget  | `string`   | `"target"`           | (get/set)<br><br>Nombre del atributo `data-*` que contiene el identificador de cada página. |
| onSelect    | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando se inicia la selección de una página. Recibe los parámetros:<br><br>**• inputIndex:** `number`, índice de la página que se va a seleccionar.<br>**• inputTarget:** `string`, identificador de la página que se va a seleccionar.<br>**• outputIndex:** `number`, índice de la página actualmente seleccionada.<br>**• outputTarget:** `string`, identificador de la página actualmente seleccionada. |
| onChange    | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando se completa el cambio de página, al finalizar la transición. Recibe los parámetros:<br><br>**• index:** `number`, índice de la nueva página seleccionada.<br>**• target:** `string`, identificador de la nueva página seleccionada. |
| onBack      | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando se completa el retroceso a una página anterior del historial. Recibe los parámetros:<br><br>**• index:** `number`, índice de la página recuperada del historial.<br>**• target:** `string`, identificador de la página recuperada del historial. |
| onScrolling | `function` | `null`               | (get/set)<br><br>Función que se ejecuta durante el scroll dentro de una página con clase `scroll`. Recibe el parámetro:<br><br>**• scroll:** `number`, posición del scroll en píxeles. |

## Métodos

| Método     | Tipo retorno   | Descripción |
| ---------- | -------------- | ----------- |
| getElement | `HTMLElement`  | `getElement()`<br><br>Retorna el elemento HTML contenedor del objeto. |
| getIndex   | `number`       | `getIndex([target])`<br><br>Parámetros:<br>**• target:** `string` *opcional*, identificador de la página. Si no se especifica, utiliza el target actual.<br><br>Retorna el índice de una página según su identificador. |
| getTarget  | `string`       | `getTarget([index])`<br><br>Parámetros:<br>**• index:** `number` *opcional*, índice de la página. Si no se especifica, utiliza el índice actual.<br><br>Retorna el identificador de una página según su índice. |
| getPages   | `NodeList`     | `getPages()`<br><br>Retorna una lista con todos los elementos HTML de tipo página (con clase `.page`). |
| getPage    | `HTMLElement`  | `getPage(target)`<br><br>Parámetros:<br>**• target:** `string` o `number`, identificador o índice de la página.<br><br>Retorna el elemento HTML de una página específica. |
| init       | `void`         | `init()`<br><br>Inicializa el objeto, estableciendo la página inicial y configurando los eventos de scroll. |
| select     | `void`         | `select([target][, onChange[, instant]])`<br><br>Parámetros:<br>**• target:** `string` o `number` *opcional*, identificador o índice de la página a seleccionar. El valor por defecto es `0`.<br>**• onChange:** `function` *opcional*, función que se ejecuta al completar el cambio. El valor predeterminado corresponde al de la propiedad `onChange`.<br>**• instant:** `boolean` *opcional*, ejecuta el cambio de página de manera instantanea. El valor predeterminado es `false`.<br><br>Selecciona y muestra una página con animación de transición. Si hay una transición en curso, esta se completa de inmediato antes de iniciar la nueva. Con `instant` en `true` el cambio se realiza sin animación y `onChange` se ejecuta de forma inmediata. |
| setHistory | `void`         | `setHistory([history])`<br><br>Parámetros:<br>**• history:** `array` *opcional*, lista de identificadores o índices de páginas que conforman el historial.<br><br>Establece manualmente el historial de navegación. |
| back       | `void`         | `back([onBack])`<br><br>Parámetros:<br>**• onBack:** `function` *opcional*, función que se ejecuta al completar el retroceso. El valor predeterminado corresponde al de la propiedad `onBack`.<br><br>Retrocede a la página anterior del historial. Al finalizar la transición se ejecuta la función de la propiedad `onChange` y luego `onBack`. |
| reset      | `void`         | `reset()`<br><br>Reinicia el componente, seleccionando la primera página de forma instantánea. |
| destroy    | `void`         | `destroy()`<br><br>Destructor. |

## Variables CSS

| Variable                                | Descripción |
| --------------------------------------- | ----------- |
| `--wui-paging-page-transition-time`     | Tiempo de duración de la animación de transición entre páginas. El fin del cambio de página se detecta con el evento `transitionend`, por lo que no requiere sincronización adicional. |
| `--wui-paging-page-bgcolor`             | Color de fondo de las páginas. |
| `--wui-paging-page-scroll-bgcolor-out`  | Color de la barra de scroll en estado normal (páginas con clase `scroll`). |
| `--wui-paging-page-scroll-bgcolor-over` | Color de la barra de scroll en estado hover (páginas con clase `scroll`). |

> [!NOTE]
> El desplazamiento de páginas se implementa con la propiedad CSS `transform`. La página seleccionada queda con `transform: none`, por lo que los elementos con `position: fixed` en su interior (ej: `WUIModal`) se posicionan respecto de la ventana. Se respeta la preferencia `prefers-reduced-motion`.

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

.my-paging {
	position: absolute;
}

.my-paging > .page > nav {
	position: absolute;
	top: 50%;
	left: 50%;
	display: flex;
	gap: 10px;
	transform: translate(-50%, -50%);
}

.my-paging > .page > nav > button {
	height: 24px;
	-webkit-border-radius: 12px;
	-moz-border-radius: 12px;
	border-radius: 12px;
	border: 1px solid #ccc;
	background-color: transparent;
}

.output {
	position: absolute;
	left: 0;
	bottom: 0;
	margin: 10px;
	font-family: monospace;
}
```

Cabecera HTML:

```html
<link rel="stylesheet" type="text/css" href="/libraries/wui-js/main/paging/wui-paging-0.12.root.css">
<link rel="stylesheet" type="text/css" href="/libraries/wui-js/main/paging/wui-paging-0.12.css">
<script type="text/javascript" src="/libraries/wui-js/main/paging/wui-paging-0.12.js"></script>
```

Código HTML:

```html
<div class="wui-paging my-paging">
	<div class="page scroll" data-target="page1">
		<h1>Página 1</h1>
		<nav>
			<button class="my-button go-page2">ir a la página 2 &#9205;</button>
		</nav>
	</div>
	<div class="page scroll" data-target="page2">
		<h1>Página 2</h1>
		<nav>
			<button class="my-button go-page1">&#9204; ir a la página 1</button>
			<button class="my-button go-page3">ir a la página 3 &#9205;</button>
		</nav>
	</div>
	<div class="page scroll" data-target="page3">
		<h1>Página 3</h1>
		<nav>
			<button class="my-button go-page2">&#9204; ir a la página 2</button>
		</nav>
	</div>
</div>
<div class="output"></div>
```

Código JS:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const paging = new WUIPaging({
		selector: ".wui-paging.my-paging",
		//index: null,
		//dataTarget: "target",
		onSelect: (inputIndex, inputTarget, outputIndex, outputTarget) => {
			output.textContent = `Seleccionando página: ${inputTarget} (${inputIndex})`;
		},
		onChange: (index, target) => {
			output.textContent = `Cambio completado a: ${target} (${index})`;
		},
		onBack: (index, target) => {
			output.textContent = `Retroceso a: ${target} (${index})`;
		},
		onScrolling: (scroll) => {
			output.textContent = `Scroll en: ${scroll}px`;
		}
	});
	paging.init();
	["page1", "page2", "page3"].forEach(target => {
		document.querySelectorAll(".go-" + target).forEach(button => {
			button.addEventListener("click", () => {
				paging.select(target);
			});
		})
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> Si el selector define un elemento que no es de tipo `HTMLDivElement`, el objeto no se inicializará.

> [!NOTE]
> Las páginas pueden tener la clase `scroll` para permitir scroll vertical. El componente soporta dos modos de transición: movimiento lateral (predeterminado) o por opacidad (agregando la clase `opacity` al contenedor principal).

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-paging-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-paging-basic&lang=es).

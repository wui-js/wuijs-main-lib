[English](wui-slider-en.md) | [Español](wui-slider-es.md)

[wuijs-main-lib](../../README-es.md)

# WUISlider

Versión: `0.10`

Componente para la implementación de presentaciones de diapositivas controladas por arrastre de ratón/táctil y/o por evento.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/main/slider/wui-slider-0.10.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/slider/wui-slider-0.10.js) |
| CSS  | [src/wui-js/main/slider/wui-slider-0.10.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/slider/wui-slider-0.10.css) |
| CSS  | [src/wui-js/main/slider/wui-slider-0.10.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/slider/wui-slider-0.10.root.css) |

## Constructor

| Tipo      | Descripción |
| --------- | ----------- |
| WUISlider | `WUISlider([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

## Propiedades

| Propiedad       | Tipo       | Valor predeterminado | Descripción |
| --------------- | ---------- | -------------------- | ----------- |
| selector        | `string`   | `".wui-slider"`      | (get/set)<br><br>Selector CSS del elemento HTML contenedor del slider. |
| transitionDelay | `number`   | `200`                | (get/set)<br><br>Duración en milisegundos de la transición entre diapositivas. Se aplica mediante la variable CSS `--wui-slider-transition-delay` del elemento raíz. |
| onChange        | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando cambia la diapositiva activa mediante `prev()` o `next()`, una vez finalizada la transición.<br><br>Parámetros de la función:<br>**• index:** `number`, índice de la diapositiva activa (comienza en `0`). |

## Métodos

| Método     | Tipo retorno  | Descripción |
| ---------- | ------------- | ----------- |
| getElement | `HTMLElement` | `getElement()`<br><br>Retorna el elemento HTML raíz del slider. |
| getBody    | `HTMLElement` | `getBody()`<br><br>Retorna el elemento HTML interno `.body` que contiene las diapositivas. |
| getIndex   | `number`      | `getIndex()`<br><br>Retorna el índice de la diapositiva activa (comienza en `0`). |
| init       | `void`        | `init()`<br><br>Inicializa el slider: posiciona las diapositivas, marca el primer indicador de paginación y adjunta los eventos de interacción (arrastre y táctil). |
| prev       | `void`        | `prev()`<br><br>Desplaza el slider hacia la diapositiva anterior con animación. No tiene efecto si ya está en la primera diapositiva o si hay una transición en curso. |
| next       | `void`        | `next()`<br><br>Desplaza el slider hacia la siguiente diapositiva con animación. No tiene efecto si ya está en la última diapositiva o si hay una transición en curso. |
| go         | `void`        | `go(index)`<br><br>Parámetros:<br>**• index:** `number`, índice de la diapositiva destino (comienza en `0`)<br><br>Salta directamente a la diapositiva indicada sin animación de transición. Si hay una transición en curso, la cancela. No ejecuta `onChange`. |
| destroy    | `void`        | `destroy()`<br><br>Destructor. |

## Variables CSS

| Variable                              | Descripción |
| ------------------------------------- | ----------- |
| `--wui-slider-transition-delay`       | Duración de la transición entre diapositivas. Es sobrescrita por la propiedad `transitionDelay` al ejecutarse `prev()` o `next()`. |
| `--wui-slider-paging-bgcolor-hidden`  | Color del indicador de paginación en estado no seleccionado. |
| `--wui-slider-paging-bgcolor-visible` | Color del indicador de paginación en estado seleccionado. |

## Implementación

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

.my-slider {
	width: 100%;
	max-height: 400px;
}

.my-slider .slide {
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
}

.slide1 {
	background-color: #FF5C8A;
}

.slide2 {
	background-color: #8B5CF6;
}

.slide3 {
	background-color: #4DA3FF;
}

nav {
	display: flex;
	width: 100%;
	justify-content: center;
	margin-top: 10px;
	gap: 10px;
}

.output {
	width: 100%;
	height: 40px;
	margin: 10px;
	font-family: monospace;
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/slider/wui-slider-0.10.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/slider/wui-slider-0.10.css">
<script type="text/javascript" src="/libraries/wui-js/main/slider/wui-slider-0.10.js"></script>
```

Código HTML:

```html
<div class="wui-slider my-slider">
	<div class="body">
		<div class="slide slide1">Diapositiva 1</div>
		<div class="slide slide2">Diapositiva 2</div>
		<div class="slide slide3">Diapositiva 3</div>
	</div>
	<div class="paging dots"></div>
</div>
<nav>
	<button class="my-button prev">&#9204; anterior</button>
	<button class="my-button next">siguiente &#9205;</button>
</nav>
<div class="output"></div>
```

Código JS:

```js
const init = () => {
	const prevButton = document.body.querySelector("button.prev");
	const nextButton = document.body.querySelector("button.next");
	const output = document.body.querySelector(".output");
	const slider = new WUISlider({
		selector: ".wui-slider.my-slider",
		transitionDelay: 300,
		onChange: (index) => {
			output.textContent = `Cambio a: ${index}`;
		}
	});
	slider.init();
	prevButton.addEventListener("click", () => {
		slider.prev();
	});
	nextButton.addEventListener("click", () => {
		slider.next();
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> Si el selector define un elemento que no es de tipo `HTMLDivElement`, el objeto no se inicializará.

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-slider-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-slider-basic&lang=es).

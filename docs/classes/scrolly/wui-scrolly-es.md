[English](wui-scrolly-en.md) | [Español](wui-scrolly-es.md)

[wuijs-main-lib](../../README-es.md)

# WUIScrolly

Versión: `0.8`

Utilidades para el manejo de animación de elementos HTML mediante el evento "onscroll" del cuerpo de la página HTML.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/main/scrolly/wui-scrolly-0.8.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/scrolly/wui-scrolly-0.8.js) |
| CSS  | [src/wui-js/main/scrolly/wui-scrolly-0.8.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/scrolly/wui-scrolly-0.8.css) |
| CSS  | [src/wui-js/main/scrolly/wui-scrolly-0.8.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/scrolly/wui-scrolly-0.8.root.css) |

## Constructor

| Tipo       | Descripción |
| ---------- | ----------- |
| WUIScrolly | `WUIScrolly([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

## Propiedades

| Propiedad     | Tipo       | Valor predeterminado        | Descripción |
| ------------- | ---------- | --------------------------- | ----------- |
| sections      | `array`    | `[]`                        | (get/set)<br><br>Lista secciones que serán incorporadas a la animación, según la definición de **Opciones de Sección**. Estas pueden ser definidas directamente sobre esta propiedad o mediante el método `addSection()`. |
| behavior      | `string`   | `"smooth"`                  | (get/set)<br><br>Comportamiento para desplazar el foco en el cuerpo de la página HTML.<br><br>Valores:<br>• `"auto"`<br>• `"smooth"` |
| dataScrollY   | `string`   | `"scrollY"`                 | (get/set)<br><br>Nombre del atributo `data-*` del elemento de documento principal (`<html>` / `document.documentElement`) que contiene el valor numérico medido en píxeles del desplazamiento total del scroll vertical de la página HTML y donde `0` representa la parte superior del documento (o sin movimiento). |
| dataDelay     | `string`   | `"delay"`                   | (get/set)<br><br>Nombre del atributo `data-*` que determina el tiempo medido en milisegundos en que tarda en animarse un elemento HTML animados mediante estilos CSS una vez que se le da foco. |
| onStart       | `function` | `null`                      | (get/set)<br><br>Función que se ejecuta cuando inicia el movimiento del scroll, ya sea a travéz de los eventos `scroll` para ratón o `touchmove` para pantalla táctil. |
| onMove        | `function` | `null`                      | (get/set)<br><br>Función que se ejecuta cuando se ejecuta el movimiento del scroll, ya sea a travéz de los eventos `scroll` para ratón o `touchmove` para pantalla táctil. |
| onStop        | `function` | `null`                      | (get/set)<br><br>Función que se ejecuta cuando termina el movimiento del scroll, ya sea a travéz de los eventos `scroll` para ratón o `touchmove` para pantalla táctil. |
| scrollY       | `number`   | `0`                         | (get)<br><br>Posición vertical de la página medida en píxeles. |
| deltaY        | `number`   | `0`                         | (get)<br><br>Último paso de desplazamiento en el movimiento vertical de la página medida en píxeles. |
| direction     | `string`   | `null`                      | (get)<br><br>Sentido del movimiento vertical de la página.<br><br>Valores:<br>• `"up"`<br>• `"down"` |
| sceneWidth    | `number`   | `WUIScrolly.screenWidth()`  | (get)<br><br>Ancho de la escena medido en píxeles. |
| sceneHeight   | `number`   | `WUIScrolly.screenHeight()` | (get)<br><br>Alto de la escena medido en píxeles. |
| sceneIndex    | `number`   | `null`                      | (get)<br><br>Número de escena. |
| sceneStep     | `number`   | `null`                      | (get)<br><br>Número de paso en una escena. |
| sceneProgress | `number`   | `null`                      | (get)<br><br>Porcentaje de progreso de un paso en una escena, con valores entre `0` y `1`. |
| debug         | `boolean`  | `false`                     | (get/set)<br><br>Modo de testeo. Imprime en consola los valores `selector` y `height` de las escenas agregadas en la instancia de inicio y `scrollY`, `y`, `index`, `sceneIndex`, `step`, `sceneStep` y `progress` cuando estos cambian. Se habilitac cuando el valor de la propiedad es `true`. |

## Opciones de Sección

| Propiedad | Tipo       | Valor predeterminado | Descripción |
| --------- | ---------- | -------------------- | ----------- |
| selector  | `string`   | `undefined`          | Selector CSS que define el elemento HTML que serán incluido como sección. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. *obligatorio* |
| target    | `string`   | `undefined`          | Nombre auxiliar para referenciar la sección. Utilizado en el método `goSection()`. |
| type      | `string`   | `"auto"`             | Comportamiento CSS del alto de la sección.<br><br>Valores:<br>• `"auto"`<br>• `"static"` |
| height    | `number`   | `undefined`          | Alto de la sección. Este puede estar expresado como número asociado a píxeles o en formato compatible CSS. |
| steps     | `number`   | `undefined`          | Número total de pasos definidos en la función de animación `animation`. |
| pages     | `number`   | `undefined`          | Número total de paginas definidos en la función de animación `animation`. |
| animation | `function` | `undefined`          | `function(step, progress)`<br><br>Parámetros:<br>**• step:** `number`, valor entre `0` y `pages - 1` <br>**• progress:** `number`, valor entre `0` y `1` <br><br>Función que se ejecuta cuando se ejecuta el movimiento del scroll en una sección. |

## Métodos

| Método     | Tipo retorno | Descripción |
| ---------- | ------------ | ----------- |
| init       | `void`       | `init()`<br><br>Inicializa el objeto una vez agregadas las secciones que componen la página HTML. |
| stop       | `void`       | `stop()`<br><br>Interrumpe la animación en su ciclo de ejecución. |
| addSection | `void`       | `addSection(options)`<br><br>Agrega la configuración de una nueva sección animada a la lista de secciones del objeto, según la definición de **Opciones de Sección**. |
| goSection  | `void`       | `goSection(target[, done[, behavior]])`<br><br>Parámetros:<br>**• target:** `string` <br>**• done:** `function` <br>**• behavior:** `string` <br><br>Mueve el foco de la página HTML hasta la sección especificada por del parámetro `target`. |
| selectPage | `void`       | `selectPage(sectionIndex, pageIndex)`<br><br>Parámetros:<br>**• sectionIndex:** `number`, valores desde `0` <br>**• pageIndex:** `number`, valor entre `0` y `pages - 1` <br><br>Mueve el foco de la página HTML hasta la sección especificada por del parámetro `sectionIndex` y avanza hasta la página `pageIndex` de dicha sección. |
| drawCenter | `void`       | `drawCenter()`<br><br>Dibuja el centro de la parte visible de la página HTML en el navegador. |
| drawRuler  | `void`       | `drawRuler()`<br><br>Dibuja una regla vertical con medidas en píxeles, en el lado izquierdo de la página HTML. |
| destroy    | `void`       | `destroy()`<br><br>Destructor. |

## Variables CSS

| Variable                               | Descripción |
| -------------------------------------- | ----------- |
| `--wui-scrolly-paging-bgcolor-hidden`  | Color del indicador de página no seleccionada. |
| `--wui-scrolly-paging-bgcolor-visible` | Color del indicador de página seleccionada. |

## Estilos CSS para Animación

| Estilo        | Descripción |
| ------------- | ----------- |
| .fadein       | Entra y sale con opacidad sin movimiento. |
| .fadein-up    | Entra y sale con opacidad desde arriba. |
| .fadein-top   | Alias de `.fadein-up`. |
| .fadein-left  | Entra y sale con opacidad desde la izquierda. |
| .fadein-right | Entra y sale con opacidad desde la derecha. |

## Implementación

Código CSS:

```css
html,
body {
	height: 100%; /* necessary */
}

body {
	font-family: Arial, Helvetica, Verdana, sans-serif;
	font-size: 14px;
}

.wui-scrolly {
	overflow-x: hidden;
	margin: 0;
	padding: 0;
}

.wui-scrolly > .section {
	width: 100%;
	background-color: lightgray;
}

.wui-scrolly > .section > .scene > .animation {
	position: relative;
}

.wui-scrolly > .section1 {
	background-color: #f1f1f1;
}

.wui-scrolly > .section2 > .scene.scene2 {
	display: flex;
	position: relative; /* necessary */
	align-items: center;
	justify-content: center;
	flex-direction: row;
	gap: 20px;
}

.wui-scrolly > .section2 {
	background-color: #e9e9e9;
}

.wui-scrolly > .section3 {
	background-color: #e1e1e1;
}

.wui-scrolly > .section3 > .scene > .animation > .my-element {
	left: -100px;
}

.my-element {
	display: flex;
	position: relative; /* necessary */
	width: 50px;
	height: 50px;
	margin: 5px;
	margin: 20px;
	background-color: dodgerblue;
	align-items: center;
	justify-content: center;
	color: #fff;
}

.output {
	margin: 10px;
	font-family: monospace;
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/scrolly/wui-scrolly-0.8.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/scrolly/wui-scrolly-0.8.css">
<script type="text/javascript" src="/libraries/wui-js/main/scrolly/wui-scrolly-0.8.js"></script>
```

Código HTML:

```html
<body class="wui-scrolly">

	<!-- Portada -->

	<section class="section section1">
		<div class="scene">desplázate hacia abajo</div>
	</section>

	<!-- Animación CSS -->

	<section class="section section2">
		<div class="scene scene2">
			<div class="my-element wui-scrolly-load fadein" data-delay=".0">1</div>
			<div class="my-element wui-scrolly-load fadein-left" data-delay=".2">2</div>
			<div class="my-element wui-scrolly-load fadein-top" data-delay=".4">3</div>
			<div class="my-element wui-scrolly-load fadein-right" data-delay=".8">4</div>
		</div>
	</section>

	<!-- Animación JS -->

	<section class="section section3">
		<div class="scene">
			<div class="animation">
				<div class="my-element element5">5</div>
				<div class="my-element element6">6</div>
				<div class="my-element element7">7</div>
			</div>
			<div class="output"></div>
		</div>
		<div class="paging dots"></div>
	</section>
</body>
```

Código JS:

```js
const init = () => {
	const element5 = document.body.querySelector(".section3 .my-element.element5");
	const element6 = document.body.querySelector(".section3 .my-element.element6");
	const element7 = document.body.querySelector(".section3 .my-element.element7");
	const output = document.body.querySelector(".section3 .output");
	const scrolly = new WUIScrolly({
		sections: [{
			selector: ".section1",
			target: "cover",
			type: "static",
			height: "100%"
		}, {
			selector: ".section2",
			target: "css-animation",
			type: "static",
			height: 400
		}, {
			selector: ".section3",
			target: "js-animation",
			type: "auto",
			height: 4500,
			steps: 3,
			pages: 3,
			animation: (step, progress) => {
				const direction = scrolly.direction;
				const left = step !== null ? parseInt(200 * progress - 100) + "px" : "100px";
				const text = `paso: ${step}, progreso: ${progress}, dirección: ${direction}`;
				scrolly.selectPage(2, step);
				if (step === 0) {
					if (direction === "up") {
						element6.style.left = "-100px";
					}
					element5.style.left = left;
				} else if (step === 1) {
					if (direction === "down") {
						element5.style.left = "100px";
					} else if (direction === "up") {
						element7.style.left = "-100px";
					}
					element6.style.left = left;
				} else if (step === 2) {
					if (direction === "down") {
						element6.style.left = "100px";
					}
					element7.style.left = left;
				} else if (step === null) {
					element7.style.left = left;
				}
				output.textContent = text;
			}
		}],
		//behavior: "smooth",
		//dataScrollY: "scrollY",
		//dataDelay: "delay",
		//onStart: null,
		onMove: (index, step, progress) => {
			if (index === 1) {
				element5.style.left = "-100px";
			}
		},
		//onStop: null,
		debug: true
	});
	scrolly.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-scrolly-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-scrolly-basic&lang=es).

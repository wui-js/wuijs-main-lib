[English](wui-fade-en.md) | [Español](wui-fade-es.md)

[wuijs-main-lib](../../README-es.md)

# WUIFade

Versión: `0.7`

Utilidades para control de salida y entrada con opacidad (fade-out y fade-in respectivamente) de elementos HTML.

Es una clase estática que no posee un constructor ni propiedades.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/main/fade/wui-fade-0.7.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/fade/wui-fade-0.7.js) |

## Métodos

### Métodos estáticos de la clase `WUIFade`:

Un modo de utilizar la librería es mediante el llamado de los métodos estáticos directamente sobre la clase `WUIFade`:

| Método | Tipo retorno | Descripción |
| ------ | ------------ | ----------- |
| in     | `void`       | `in(element[, options])`<br><br>Parámetros:<br>**• element:** `HTMLElement` <br>**• options:** `object` *opcional*<br><br>Ejecuta la transición de entrada. |
| out    | `void`       | `out(element[, options])`<br><br>Parámetros:<br>**• element:** `HTMLElement` <br>**• options:** `object` *opcional*<br><br>Ejecuta la transición de salida. |

### Métodos extendidos de la clase `HTMLElement`:

Otro modo alternativo es mediante métodos extendidos de la clase `HTMLElement` por medio de su prototipo:

| Método.    | Tipo retorno | Descripción |
| ---------- | ------------ | ----------- |
| wuiFadein  | `void`       | `wuiFadein([options])`<br><br>Parámetros:<br>**• options:** `object` *opcional*<br><br>Ejecuta la transición de entrada. |
| wuiFadeout | `void`       | `wuiFadeout([options])`<br><br>Parámetros:<br>**• options:** `object` *opcional*<br><br>Ejecuta la transición de salida. |

> [!IMPORTANT]
> Cada modo de llamado de métodos se realiza sobre distintos tipos de clases, la primera se realiza sobre `WUIFade`, mientras que la segunda sobre `HTMLElement`.

### Opciones

| Opción   | Tipo       | Valor predeterminado | Descripción |
| -------- | ---------- | -------------------- | ----------- |
| delay    | `number`   | `400`                | Define el tiempo que tardará la transición del efecto de entrada y de salida medido en milisegundos. |
| display  | `string`   | `"block"`            | Establece el valor de la propiedad CSS `display` del elemento HTML al iniciar la transición de entrada. |
| force    | `boolean`  | `false`              | Ambos efectos, entrada y salida, son ejecutadas siempre y cuando la propiedad CSS `display` sea distinta a `options.display` y a `"none"` respectivamente. La opción `force` ignora esta validación. La transición de entrada también se ejecuta si hay una transición de salida en curso. |
| callback | `function` | `undefined`          | Función que se ejecuta al finalizar la transición. No se ejecuta si la transición es interrumpida por otra. |

> [!NOTE]
> La transición se implementa con la propiedad CSS `transition` sobre `opacity`, aplicada en línea sobre el elemento HTML durante el efecto. Al finalizar se restaura el valor en línea previo de `transition`. Si se ejecuta un efecto mientras otro está en curso sobre el mismo elemento, el efecto en curso se interrumpe y el nuevo continúa desde la opacidad actual.

## Implementación

Código CSS:

```CSS
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
	height: 100%;
	justify-content: center;
	align-items: center;
	gap: 20px;
}

nav button {
	height: 24px;
	-webkit-border-radius: 12px;
	-moz-border-radius: 12px;
	border-radius: 12px;
	border: 1px solid #ccc;
	background-color: transparent;
}

.my-element {
	display: none;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 64px;
	height: 64px;
	margin-top: 32px;
	margin-left: -32px;
	background-color: red;
}
```

Cabecera HTML:

```html
<script type="text/javascript" src="/libraries/wui-js/main/fade/wui-fade-0.7.js"></script>
```

Código HTML:

```html
<nav>
	<button class="fadein">fade-in</button>
	<button class="fadeout">fade-out</button>
	<div id="myElement" class="my-element"></div>
</nav>
```

Código JS:
```js
const init = () => {
	const element = document.getElementById("myElement");
	const fadeinButton = document.querySelector("button.fadein");
	const fadeoutButton = document.querySelector("button.fadeout");
	const options = {
		delay: 200,
		//display: "block"
	};
	fadeinButton.addEventListener("click", () => {
		element.wuiFadein(options);
		// o alternativamente
		//WUIFade.in(element, options);
	});
	fadeoutButton.addEventListener("click", () => {
		element.wuiFadeout(options);
		// o alternativamente
		//WUIFade.out(element, options);
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-fade-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-fade-basic&lang=es).

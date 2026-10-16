[English](wui-intensity-en.md) | [Español](wui-intensity-es.md)

[wuijs-main-lib](../../README-es.md)

# WUIIntensity

Versión: `0.7`

Componente para la implementación de entradas de datos de tipo selector de intensidad de 4 niveles: nada, bajo, medio y alto basada en el elemento HTML `<input type="range">`.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/main/intensity/wui-intensity-0.7.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/intensity/wui-intensity-0.7.js) |
| CSS  | [src/wui-js/main/intensity/wui-intensity-0.7.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/intensity/wui-intensity-0.7.css) |
| CSS  | [src/wui-js/main/intensity/wui-intensity-0.7.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/intensity/wui-intensity-0.7.root.css) |

## Constructor

| Tipo         | Descripción |
| ------------ | ----------- |
| WUIIntensity | `WUIIntensity([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

## Propiedades

| Propiedad | Tipo       | Valor predeterminado | Descripción |
| --------- | ---------- | -------------------- | ----------- |
| selector  | `string`   | `".wui-intensity"`   | (get/set)<br><br>Selector CSS que define el elemento HTML contenedor del objeto. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. |
| name      | `string`   | `""`                 | (get/set)<br><br>Define el nombre de la entrada de datos `<input type="range">`. |
| value     | `number`   | `0`                  | (get/set)<br><br>Valor de la intensidad (0: nada, 1: bajo, 2: medio, 3: alto). Acepta también las cadenas `"none"`, `"low"`, `"half"`, `"high"`. |
| enabled   | `boolean`  | `true`               | (get/set)<br><br>Define si el selector está habilitado. |
| onChange  | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando el valor cambia. La función recibe como parámetros el valor entero (0-3) y la cadena asociada. |

## Métodos

| Método          | Tipo retorno         | Descripción |
| --------------- | -------------------- | ----------- |
| getElement      | `HTMLDivElement`     | `getElement()`<br><br>Retorna el elemento HTML contenedor del objeto. |
| getViewElements | `Array<HTMLElement>` | `getViewElements()`<br><br>Retorna un arreglo de los elementos HTML que son parte de la visualización del valor. |
| getInput        | `HTMLInputElement`   | `getInput()`<br><br>Retorna el elemento HTML asociado a la entrada de datos base `<input type="range">`. |
| init            | `void`               | `init()`<br><br>Inicializa el objeto. |
| destroy         | `void`               | `destroy()`<br><br>Destructor. |

## Variables CSS

| Variable                               | Descripción |
| -------------------------------------- | ----------- |
| `--wui-intensity-height`               | Altura del control de intensidad. |
| `--wui-intensity-borderradius`         | Radio de borde del control de intensidad. |
| `--wui-intensity-bordercolor-out`      | Color del borde del control de intensidad en estado normal. |
| `--wui-intensity-bordercolor-disabled` | Color del borde del control de intensidad en estado deshabilitado. |
| `--wui-intensity-bgcolor-none`         | Color de fondo del control de intensidad en nivel ninguno. |
| `--wui-intensity-bgcolor-low`          | Color de fondo del control de intensidad en nivel bajo. |
| `--wui-intensity-bgcolor-half`         | Color de fondo del control de intensidad en nivel medio. |
| `--wui-intensity-bgcolor-high`         | Color de fondo del control de intensidad en nivel alto. |

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

.my-intensity {}

.output {
	font-family: monospace;
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/intensity/wui-intensity-0.7.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/intensity/wui-intensity-0.7.css">
<script type="text/javascript" src="/libraries/wui-js/main/intensity/wui-intensity-0.7.js"></script>
```

Código HTML:

```html
<nav>
	<div class="wui-intensity my-intensity">
		<input type="range" name="myIntensity" value="0" min="0" max="3" step="1">
	</div>
	<div class="output"></div>
</nav>
```

Código JS:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const intensity = new WUIIntensity({
		selector: ".wui-intensity.my-intensity",
		value: 1,
		//enabled: true,
		onChange: (event, value) => {
			output.textContent = `Cambio - valor: ${value}`;
		}
	});
	intensity.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> Si el selector define un elemento que no es de tipo `HTMLDivElement`, el objeto no se inicializará.

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-intensity-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-intensity-basic&lang=es).

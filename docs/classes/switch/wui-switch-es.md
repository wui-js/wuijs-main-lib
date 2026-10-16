[English](wui-switch-en.md) | [Español](wui-switch-es.md)

[wuijs-main-lib](../../README-es.md)

# WUISwitch

Versión: `0.10`

Componente para la implementación de entradas de datos de tipo casilla de verificación basada en el elemento HTML `<input type="checkbox">`.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/main/switch/wui-switch-0.10.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/switch/wui-switch-0.10.js) |
| CSS  | [src/wui-js/main/switch/wui-switch-0.10.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/switch/wui-switch-0.10.css) |
| CSS  | [src/wui-js/main/switch/wui-switch-0.10.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/switch/wui-switch-0.10.root.css) |

## Constructor

| Tipo        | Descripción |
| ----------- | ----------- |
| WUISwitch | `WUISwitch([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

## Propiedades

| Propiedad | Tipo       | Valor predeterminado | Descripción |
| --------- | ---------- | -------------------- | ----------- |
| selector  | `string`   | `".wui-switch"`      | (get/set)<br><br>Selector CSS que define el elemento HTML contenedor del objeto. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. |
| name      | `string`   | `""`                 | (get/set)<br><br>Define el nombre de la entrada de datos `<input type="checkbox">`. |
| value     | `string`   | `"1"`                | (get/set)<br><br>Valor que tomará la casilla de verificación cuando esté marcado. |
| boolean   | `boolean`  | `false`              | (get/set)<br><br>Define si el componente está en modo booleano. Cuando el componente está en modo booleano el evento `change` modifica automáticamente la propiedad `value` a `1` si la propiedad `activated` es verdadera y a `0` si es falsa. |
| activated | `boolean`  | `false`              | (get/set)<br><br>Define si la casilla de verificación está marcada. |
| enabled   | `boolean`  | `true`               | (get/set)<br><br>Define si la casilla de verificación está habilitada. |
| onChange  | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando el estado de la casilla de verificación cambia. La función recibe como parámetros el estado booleano `activated` y el valor de la casilla de verificación. |

## Métodos

| Método          | Tipo retorno         | Descripción |
| --------------- | -------------------- | ----------- |
| getElement      | `HTMLDivElement`     | `getElement()`<br><br>Retorna el elemento HTML contenedor del objeto. |
| getViewElements | `Array<HTMLElement>` | `getViewElements()`<br><br>Retorna un arreglo de los elementos HTML que son parte de la visualización del valor. |
| getInput        | `HTMLInputElement`   | `getInput()`<br><br>Retorna el elemento HTML asociado a la entrada de datos base `<input type="checkbox">`. |
| init            | `void`               | `init()`<br><br>Inicializa el objeto. |
| toggle          | `void`               | `toggle()`<br><br>Alterna el estado activado/desactivado de la casilla de verificación. |
| destroy         | `void`               | `destroy()`<br><br>Destructor. |

## Variables CSS

| Variable                                    | Descripción |
| ------------------------------------------- | ----------- |
| `--wui-switch-button-size`                  | Tamaño del botón del switch. |
| `--wui-switch-bordercolor-out`              | Color del borde del switch en estado normal. |
| `--wui-switch-bordercolor-over`             | Color del borde del switch en estado hover. |
| `--wui-switch-bordercolor-activated`        | Color del borde del switch en estado activado. |
| `--wui-switch-bordercolor-disabled`         | Color del borde del switch en estado deshabilitado. |
| `--wui-switch-bgcolor-out`                  | Color de fondo del switch en estado normal. |
| `--wui-switch-bgcolor-over`                 | Color de fondo del switch en estado hover. |
| `--wui-switch-bgcolor-activated`            | Color de fondo del switch en estado activado. |
| `--wui-switch-bgcolor-disabled`             | Color de fondo del switch en estado deshabilitado. |
| `--wui-switch-button-bordercolor-out`       | Color del borde del botón del switch en estado normal. |
| `--wui-switch-button-bordercolor-over`      | Color del borde del botón del switch en estado hover. |
| `--wui-switch-button-bordercolor-activated` | Color del borde del botón del switch en estado activado. |
| `--wui-switch-button-bordercolor-disabled`  | Color del borde del botón del switch en estado deshabilitado. |
| `--wui-switch-button-bgcolor-out`           | Color de fondo del botón del switch en estado normal. |
| `--wui-switch-button-bgcolor-over`          | Color de fondo del botón del switch en estado hover. |
| `--wui-switch-button-bgcolor-activated`     | Color de fondo del botón del switch en estado activado. |
| `--wui-switch-button-bgcolor-disabled`      | Color de fondo del botón del switch en estado deshabilitado. |

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

.my-switch {}

.output {
	font-family: monospace;
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/switch/wui-switch-0.10.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/switch/wui-switch-0.10.css">
<script type="text/javascript" src="/libraries/wui-js/main/switch/wui-switch-0.10.js"></script>
```

Código HTML:

```html
<nav>
	<div class="wui-switch my-switch">
		<input type="checkbox" name="myCheckbox" value="1">
	</div>
	<div class="output"></div>
</nav>
```

Código JS:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const switchbox = new WUISwitch({
		selector: ".wui-switch.my-switch",
		value: "1",
		activated: true,
		//enabled: true,
		onChange: (value, activated) => {
			output.textContent = `Cambio - valor: ${value}, activado: ${activated}`;
		}
	});
	switchbox.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> Si el selector define un elemento que no es de tipo `HTMLDivElement`, el objeto no se inicializará.

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-switch-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-switch-basic&lang=es).

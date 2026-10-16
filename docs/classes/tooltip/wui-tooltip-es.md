[English](wui-tooltip-en.md) | [Español](wui-tooltip-es.md)

[wuijs-main-lib](../../README-es.md)

# WUITooltip

Versión: `0.6`

Componente para la implementación de textos de información emergente (tooltip).

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/main/tooltip/wui-tooltip-0.6.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/tooltip/wui-tooltip-0.6.js) |
| CSS  | [src/wui-js/main/tooltip/wui-tooltip-0.6.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/tooltip/wui-tooltip-0.6.css) |
| CSS  | [src/wui-js/main/tooltip/wui-tooltip-0.6.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/tooltip/wui-tooltip-0.6.root.css) |

## Constructor

| Tipo       | Descripción |
| ---------- | ----------- |
| WUITooltip | `WUITooltip([propiedades])`<br><br>Argumentos:<br>**• propiedades:** `object` *opcional* |

## Propiedades

| Propiedad | Tipo     | Valor por defecto        | Descripción |
| --------- | -------- | ------------------------ | ----------- |
| selector  | `string` | `".wui-tooltip-target"` | (get/set)<br><br>Selector CSS que define los elementos HTML que actúan como disparadores del tooltip. Si más de un elemento coincide con el selector, todos serán incluidos. |

## Métodos

| Método      | Tipo de retorno | Descripción |
| ----------- | --------------- | ----------- |
| getElements | `NodeList`      | `getElements()`<br><br>Retorna la lista de elementos HTML que actúan como disparadores del tooltip. |
| init        | `void`          | `init()`<br><br>Inicializa el objeto, vinculando los eventos hover a todos los elementos objetivo. |
| lock        | `void`          | `lock()`<br><br>Bloquea todos los tooltips en estado abierto. |
| unlock      | `void`          | `unlock()`<br><br>Desbloquea todos los tooltips, restaurando el comportamiento hover normal. |
| destroy     | `void`          | `destroy()`<br><br>Destructor. |

## Variables CSS

| Variable                   | Descripción |
| -------------------------- | ----------- |
| `--wui-tooltip-open-delay` | Retraso antes de que aparezca el tooltip. |
| `--wui-tooltip-bgcolor`    | Color de fondo del tooltip. |
| `--wui-tooltip-textcolor`  | Color del texto del tooltip. |

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
	height: 100%;
	justify-content: center;
	align-items: center;
	gap: 20px;
}

.my-container {
	position: relative;
	display: inline-block;
}

.my-container > button {
	height: 24px;
	-webkit-border-radius: 12px;
	-moz-border-radius: 12px;
	border-radius: 12px;
	border: 1px solid #ccc;
	background-color: transparent;
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tooltip/wui-tooltip-0.6.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tooltip/wui-tooltip-0.6.css">
<script type="text/javascript" src="/libraries/wui-js/main/tooltip/wui-tooltip-0.6.js"></script>
```

Código HTML:

```html
<nav>
	<div class="wui-tooltip-target my-container">
		<button>Pasa el cursor aquí</button>
		<div class="wui-tooltip left">Texto del tooltip izquierda</div>
	</div>
	<div class="wui-tooltip-target my-container">
		<button>Pasa el cursor aquí</button>
		<div class="wui-tooltip top">Texto del tooltip arriba</div>
	</div>
	<div class="wui-tooltip-target my-container">
		<button>Pasa el cursor aquí</button>
		<div class="wui-tooltip bottom">Texto del tooltip abajo</div>
	</div>
	<div class="wui-tooltip-target my-container">
		<button>Pasa el cursor aquí</button>
		<div class="wui-tooltip bottom nowrap">Texto del tooltip abajo sin quiebre</div>
	</div>
	<div class="wui-tooltip-target my-container">
		<button>Pasa el cursor aquí</button>
		<div class="wui-tooltip right">Texto del tooltip derecha</div>
	</div>
</nav>
```

Código JS:

```js
const init = () => {
	const tooltip = new WUITooltip({
		selector: ".wui-tooltip-target.my-container"
	});
	tooltip.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-tooltip-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-tooltip-basic&lang=es).

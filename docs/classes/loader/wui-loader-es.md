[English](wui-loader-en.md) | [Español](wui-loader-es.md)

[wuijs-main-lib](../../README-es.md)

# WUILoader

Version: `0.7`

Componente para la implementación de animaciones de carga

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/main/loader/wui-loader-0.7.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/loader/wui-loader-0.7.js) |
| CSS  | [src/wui-js/main/loader/wui-loader-0.7.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/loader/wui-loader-0.7.css) |
| CSS  | [src/wui-js/main/loader/wui-loader-0.7.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/loader/wui-loader-0.7.root.css) |

## Constructor

| Tipo       | Descripción |
| ---------- | ----------- |
| WUILoader  | `WUILoader([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

## Propiedades

| Propiedad | Tipo     | Valor predeterminado | Descripción |
| --------- | -------- | -------------------- | ----------- |
| selector  | `string` | `".wui-loader"`      | (get/set)<br><br>Selector CSS que define el elemento HTML que serán convertido en el objeto. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. |
| style     | `string` | `"ring"`             | (get/set)<br><br>Estilo de la animación de carga.<br><br>Valores:<br>• `"ring"`, anillo.<br>• `"dualring"`, anillo dual.<br>• `"spinner"`, spinner.<br>• `"roller"`, roller.<br>• `"ellipsis"`, puntos.<br>• `"grid"`, grilla. |
| size      | `number` | `60`                 | (get/set)<br><br>Tamaño de la animación de carga en píxeles. |
| dataStyle | `string` | `"style"`            | (get/set)<br><br>Nombre del atributo `data-*` que contiene el valor de la propiedad `style`. |
| dataSize  | `string` | `"size"`             | (get/set)<br><br>Nombre del atributo `data-*` que contiene el valor de la propiedad `size`. |

## Métodos

| Método       | Tipo retorno | Descripción |
| ------------ | ------------ | ----------- |
| getElements  | `NodeList`   | `getElements()`<br><br>Retorna una lista de elementos HTML con los contenedores de los objetos tipo animación de carga. |
| init         | `void`       | `init()`<br><br>Inicializa los objetos tipo animación de carga	. |
| destroy      | `void`       | `destroy()`<br><br>Destructor. |

## Variables CSS

| Variable             | Descripción |
| -------------------- | ----------- |
| `--wui-loader-color` | Color de la animación de carga. |

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

nav > div .text {
	margin-top: 10px;
	text-align: center;
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/loader/wui-loader-0.7.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/loader/wui-loader-0.7.css">
<script type="text/javascript" src="/libraries/wui-js/main/loader/wui-loader-0.7.js"></script>
```

Código HTML:

```html
<nav>
	<div>
		<div class="wui-loader my-loader-ring"></div>
		<div class="text">ring</div>
	</div>
	<div>
		<div class="wui-loader my-loader-dualring"></div>
		<div class="text">dualring</div>
	</div>
	<div>
		<div class="wui-loader my-loader-spinner"></div>
		<div class="text">spinner</div>
	</div>
	<div>
		<div class="wui-loader my-loader-roller"></div>
		<div class="text">roller</div>
	</div>
	<div>
		<div class="wui-loader my-loader-ellipsis"></div>
		<div class="text">ellipsis</div>
	</div>
	<div>
		<div class="wui-loader my-loader-grid"></div>
		<div class="text">grid</div>
	</div>
</nav>
```

Código JS:

```js
const wuiComponents = {};

const init = () => {
	["ring", "dualring", "spinner", "roller", "ellipsis", "grid"].forEach(style => {
		wuiComponents[style+"Loader"] = new WUILoader({
			selector: `.wui-loader.my-loader-${style}`,
			style,
			//size: 60
		});
		wuiComponents[style+"Loader"].init();
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-loader-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-loader-basic&lang=es).

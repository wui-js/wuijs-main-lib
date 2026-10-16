[English](wui-tabs-en.md) | [Español](wui-tabs-es.md)

[wuijs-main-lib](../../README-es.md)

# WUITabs

Versión: `0.7`

Componente para la implementación de vistas accesibles por selección de pestañas.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/main/tabs/wui-tabs-0.7.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/tabs/wui-tabs-0.7.js) |
| CSS  | [src/wui-js/main/tabs/wui-tabs-0.7.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/tabs/wui-tabs-0.7.css) |
| CSS  | [src/wui-js/main/tabs/wui-tabs-0.7.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/tabs/wui-tabs-0.7.root.css) |

## Constructor

| Tipo    | Descripción |
| ------- | ----------- |
| WUITabs | `WUITabs([propiedades])`<br><br>Argumentos:<br>**• propiedades:** `object` *opcional* |

## Propiedades

| Propiedad  | Tipo     | Valor por defecto | Descripción |
| ---------- | -------- | ------------------ | ----------- |
| selector   | `string` | `""`               | (get/set)<br><br>Selector CSS que define el elemento HTML contenedor del componente de pestañas. Si más de un elemento coincide con el selector, solo se incluirá el primero. |
| layout     | `string` | `"top"`            | (get/set)<br><br>Posición de la barra de pestañas.<br><br>Valores:<br>• `"top"`, en la parte superior al principio del despliegue (valor por defecto).<br>• `"bottom"`, en la parte inferior al final del despliegue. |
| index      | `number` | `null`             | (get/set)<br><br>Índice de la pestaña actualmente seleccionada. |
| dataTarget | `string` | `"target"`         | (get/set)<br><br>Nombre del atributo `data-*` que contiene el identificador de cada pestaña. |
| target     | `string` | `null`             | (solo get)<br><br>Identificador de la pestaña actualmente seleccionada. |

## Métodos

| Método     | Tipo de retorno | Descripción |
| ---------- | --------------- | ----------- |
| getElement | `HTMLElement`   | `getElement()`<br><br>Retorna el elemento HTML contenedor del objeto. |
| getIndex   | `number`        | `getIndex([target])`<br><br>Parámetros:<br>**• target:** `string` *opcional*, identificador de la pestaña. Si no se especifica, utiliza el target actual.<br><br>Retorna el índice de una pestaña según su identificador. |
| getTarget  | `string`        | `getTarget([index])`<br><br>Parámetros:<br>**• index:** `number` *opcional*, índice de la pestaña. Si no se especifica, utiliza el índice actual.<br><br>Retorna el identificador de una pestaña según su índice. |
| getTabs    | `NodeList`      | `getTabs()`<br><br>Retorna una lista con todos los elementos HTML de tipo pestaña (con clase `.tab`). |
| getPages   | `NodeList`      | `getPages()`<br><br>Retorna una lista con todos los elementos HTML de tipo página (con clase `.page`). |
| init       | `void`          | `init()`<br><br>Inicializa el objeto, vinculando los eventos de clic a las pestañas y seleccionando la pestaña por defecto. |
| select     | `void`          | `select(target)`<br><br>Parámetros:<br>**• target:** `string` o `number` *opcional*, identificador o índice de la pestaña a seleccionar. El valor por defecto es `0`.<br><br>Selecciona la pestaña indicada, mostrando la página correspondiente. |
| destroy    | `void`          | `destroy()`<br><br>Destructor. |

## Variables CSS

| Variable                              | Descripción |
| ------------------------------------- | ----------- |
| `--wui-tabs-shadowcolor`              | Color de la sombra del controlador. |
| `--wui-tabs-borderradius`             | Radio de borde del controlador. |
| `--wui-tabs-borderwidth`              | Ancho del borde del controlador. |
| `--wui-tabs-bordercolor`              | Color del borde del controlador. |
| `--wui-tabs-bgcolor`                  | Color de fondo del controlador y de las páginas. |
| `--wui-tabs-scroll-bgcolor-out`       | Color de fondo de la barra de desplazamiento en estado normal. |
| `--wui-tabs-scroll-bgcolor-over`      | Color de fondo de la barra de desplazamiento en estado hover/activo. |
| `--wui-tabs-tab-bordercolor-out`      | Color de borde de la pestaña en estado normal. |
| `--wui-tabs-tab-bordercolor-over`     | Color de borde de la pestaña en estado hover. |
| `--wui-tabs-tab-bordercolor-selected` | Color de borde de la pestaña en estado seleccionado. |
| `--wui-tabs-tab-bgcolor-out`          | Color de fondo de las pestañas en estado normal. |
| `--wui-tabs-tab-bgcolor-over`         | Color de fondo de las pestañas en estado hover. |
| `--wui-tabs-tab-bgcolor-selected`     | Color de fondo de las pestañas en estado seleccionado. |
| `--wui-tabs-tab-iconcolor-out`        | Color de ícono de las pestañas en estado normal. |
| `--wui-tabs-tab-iconcolor-over`       | Color de ícono de las pestañas en estado hover. |
| `--wui-tabs-tab-iconcolor-selected`   | Color de ícono de las pestañas en estado seleccionado. |
| `~~--wui-tabs-tab-iconcolor-mobile~~` | Color de ícono de las pestañas en modo móvil. |
| `--wui-tabs-tab-textcolor-out`        | Color de texto de las pestañas en estado normal. |
| `--wui-tabs-tab-textcolor-over`       | Color de texto de las pestañas en estado hover. |
| `--wui-tabs-tab-textcolor-selected`   | Color de texto de las pestañas en estado seleccionado. |

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
	position: absolute;
	top: 20px;
	left: 20px;
	right: 20px;
	bottom: 20px;
}

.my-tabs {
	height: 100%;
}

.my-tabs .page {
	padding-top: 40px;
	justify-content: center;
}

.my-tabs .page1 {
	height: 150%;
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.8.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.8.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tabs/wui-tabs-0.7.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tabs/wui-tabs-0.7.css">
<script type="text/javascript" src="/libraries/wui-js/main/tabs/wui-tabs-0.7.js"></script>
```

Código HTML:

```html
<nav>
	<div class="wui-tabs my-tabs">
		<div class="bar">
			<div class="tab" data-target="home">
				<div class="icon wui-icon home-line"></div>
				<div class="text">Home</div>
			</div>
			<div class="tab" data-target="profile">
				<div class="icon wui-icon user-line"></div>
				<div class="text">Profile</div>
			</div>
			<div class="tab" data-target="settings">
				<div class="icon wui-icon gear-line"></div>
				<div class="text">Settings</div>
			</div>
		</div>
		<div class="body scroll">
			<div class="page page1">Page 1 content</div>
			<div class="page">Page 2 content</div>
			<div class="page">Page 3 content</div>
		</div>
	</div>
</nav>
```

Código JS:

```js
const init = () => {
	const tabs = new WUITabs({
		selector: ".wui-tabs.my-tabs",
		//layout: "top",
		//index: null,
		//dataTarget: "target"
	});
	tabs.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-tabs-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-tabs-basic&lang=es).

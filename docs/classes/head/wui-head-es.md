[English](wui-head-en.md) | [Español](wui-head-es.md)

[wuijs-main-lib](../../README-es.md)

# WUIHead

Versión: `0.5`

Utilidades para el manejo de la cabecera HTML.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/main/head/wui-head-0.5.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/head/wui-head-0.5.js) |

## Constructor

| Tipo    | Descripción |
| ------- | ----------- |
| WUIHead | `WUIHead()` |

## Propiedades

Clase sin propiedades.

## Métodos

| Método             | Tipo retorno | Descripción |
| ------------------ | ------------ | ----------- |
| setTitle           | `void`       | `setTitle(name)`<br><br>Parámetros:<br>**• name:** `string`<br><br>Establece el nombre del documento HTML mediante la etiqueta `<title>`. |
| setMetaContent     | `void`       | `setMetaContent(name, content)`<br><br>Parámetros:<br>**• name:** `string` <br>**• content:** `string`<br><br>Establece un meta valor en la cabecera del documento HTML mediante la etiqueta `<meta>`.<br>Revisar especificaciones y compatibilidad en [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name). |
| setApplicationName | `void`       | `setApplicationName(content)`<br>Alias de `setMetaContent("application-name", content)`<br><br>Parámetros:<br>**• content:** `string`<br><br>Establece el meta valor `application-name` en la cabecera del documento HTML. |
| setThemeColor      | `void`       | `setThemeColor(content)`<br>Alias de `setMetaContent("theme-color", content)`<br><br>Parámetros:<br>**• content:** `string`<br><br>Establece el meta valor `theme-color` en la cabecera del documento HTML.<br>Revisar especificaciones y compatibilidad en [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/theme-color). |
| addLink            | `void`       | `addLink(path, options)`<br><br>Parámetros:<br>**• path:** `string`, URL del recurso.<br>**• options:** `object`, propiedades a asignar al elemento `<link>` creado (por ejemplo `rel`, `type`). Si `options.refresh` es `true`, se agrega un parámetro dinámico get a `path` para forzar la recarga del recurso.<br><br>Agrega un elemento `<link>` a la cabecera del documento HTML. |
| addCss             | `void`       | `addCss(path)`<br>Alias de `addLink(path, { type: "text/css", rel: "stylesheet" })`<br><br>Parámetros:<br>**• path:** `string`, URL del archivo CSS.<br><br>Agrega una hoja de estilos CSS a la cabecera del documento HTML. |
| addScript          | `void`       | `addScript(path, options)`<br><br>Parámetros:<br>**• path:** `string`, URL del recurso.<br>**• options:** `object`, propiedades a asignar al elemento `<script>` creado (por ejemplo `type`, `async`). Si `options.refresh` es `true`, se agrega un parámetro dinámico get a `path` para forzar la recarga del recurso.<br><br>Agrega un elemento `<script>` a la cabecera del documento HTML. |
| addJs              | `void`       | `addJs(path)`<br>Alias de `addScript(path, { type: "text/javascript" })`<br><br>Parámetros:<br>**• path:** `string`, URL del archivo JavaScript.<br><br>Agrega un archivo JavaScript a la cabecera del documento HTML. |
| addResources       | `void`       | `addResources(resources)`<br><br>Parámetros:<br>**• resources:** `array`, lista de objetos de recurso con las claves:<br>**- path:** `string`, URL del recurso.<br>**- type:** `string` *opcional*, `"css"` o `"js"`. Si se omite, se infiere desde la extensión de `path` (`.css` o `.js`).<br>**- enabled:** `boolean` o `function` *opcional*, determina si el recurso se agrega. El valor por defecto es `true`.<br><br>Agrega en lote una lista de hojas de estilo CSS y archivos JavaScript a la cabecera del documento HTML, delegando en `addCss()` o `addJs()` según corresponda. Cada recurso se omite si `enabled` es `false` o retorna `false`. |
| refresh            | `void`       | `refresh()`<br><br>Recarga los archivos JS y CSS llamados desde la sección `<head>` del documento HTML, mediante el anexo de un parámetro dinámico get. |

## Implementación

Cabecera HTML:

```html
<title></title>
<meta name="application-name" content="">
<meta name="theme-color" content="">
<script type="text/javascript" src="/libraries/wui-js/main/head/wui-head-0.5.js"></script>
```

Código JS:

```js
const init = () => {
	const head = new WUIHead();
	head.setTitle("Título de prueba");
	head.setApplicationName("Aplicación de prueba");
	head.setThemeColor("#1e90ff");
}

window.addEventListener("DOMContentLoaded", init);
```

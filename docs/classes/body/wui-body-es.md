[English](wui-body-en.md) | [Español](wui-body-es.md)

[wuijs-main-lib](../../README-es.md)

# WUIBody

Versión: `0.10`

Utilidades para el manejo del cuerpo HTML. Permite la importación de contenido CSS/JS/HTML y facilita la implementación en entornos nativos móviles.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/main/body/wui-body-0.10.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/body/wui-body-0.10.js) |

## Constructor

| Tipo    | Descripción |
| ------- | ----------- |
| WUIBody | `WUIBody([properties])`<br><br>Parámetros:<br>**• properties:** `object` |

## Propiedades

| Propiedad       | Tipo       | Valor predeterminado | Descripción |
| --------------- | ---------- | -------------------- | ----------- |
| environment     | `string`   | `"web"`              | (get/set)<br><br>Entorno de despliegue de la interfaz web.<br><br>Valores:<br>• `"web"`<br>• `"native.android"`<br>• `"native.ios"` |
| importDirectory | `string`   | `""`                 | (get/set)<br><br>Ruta relativa del directorio donde se alojan los subdirectorio para importación de contenido. |
| importMode      | `string`   | `"fetch"`            | (get/set)<br><br>Método de recuperación de contenido para carga.<br><br>Valores:<br>• `"fetch"`<br>• `"xhr"`<br><br>Cuando el despliegue se realiza en ambientes nativos mediante WebView para Android o WebKit para iOS, se recomienda utilizar `"xhr"`. |
| onCompleted     | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando todos los contenidos son importados y cargados en el cuerpo de la página HTML. |
| debug           | `boolean`  | `false`              | (get/set)<br><br>Modo de testeo. Imprime en consola los contenidos importados cuando el valor de la propiedad es `true`. |

## Métodos

| Método         | Tipo retorno | Descripción |
| -------------- | ------------ | ----------- |
| import         | `void`       | `import(id, path[, done])`<br><br>Parámetros:<br>**• id:** `string`, especifica el id del elemento HTML donde se va a cargar el contenido.<br>**• path:** `string`, especifica la ruta del subdirectorio y el nombre de los archivos con extensión `.css`, `.htm` y `.js` que serán importados y cargados.<br>**• done:** `function` *opcional*, esta función que es ejecutada cuando la carga del contenido ha concluido.<br><br>Importa contenido CSS/JS/HTML referenciado a un elemento HTML por medio de su `id`. El contenido también se suele denominar "módulo" y es cargado en tres partes:<br>**• CSS:** mediante un elemento `<style>` que es insertado antes del contenido HTML.<br>**• HTML:** sobre el elemento identificado mediante su `id`.<br>**• JS:** mediante un elemento `<script>` que es insertado en el cuerpo del documento HTML. |
| compose        | `void`       | `compose(fragments[, target][, auto])`<br><br>Parámetros:<br>**• fragments:** `array`, arreglo de objetos que describen los fragmentos a importar. Cada objeto admite:<br>&nbsp;&nbsp;**◦ id:** `string`, id del elemento HTML contenedor del fragmento; también se utiliza como `id` para `import()`.<br>&nbsp;&nbsp;**◦ path:** `string`, ruta del subdirectorio y nombre de los archivos a importar (equivalente al parámetro `path` de `import()`).<br>&nbsp;&nbsp;**◦ tag:** `string` *opcional*, nombre de la etiqueta HTML del elemento contenedor a crear (por defecto `"div"`). Solo se utiliza cuando `auto` es `false`.<br>&nbsp;&nbsp;**◦ enabled:** `boolean` \| `function` *opcional*, determina si el fragmento se importa. Si es `function`, se evalúa su resultado. Por defecto se considera habilitado.<br>&nbsp;&nbsp;**◦ fragments:** `array` *opcional*, arreglo de sub-fragmentos que se importan de forma recursiva una vez concluida la importación del fragmento actual, sobre elementos contenedores ya existentes en el contenido importado.<br>&nbsp;&nbsp;**◦ done:** `function` *opcional*, función ejecutada cuando el fragmento (y sus sub-fragmentos) concluyen su importación.<br>**• target:** `HTMLElement` *opcional*, elemento HTML al que se agregan los contenedores de los fragmentos de primer nivel. Por defecto `document.body`.<br>**• auto:** `boolean` *opcional*, por defecto `true`. Cuando es `true`, la etiqueta del contenedor se infiere del `id` del fragmento: `header` si termina en "header", `footer` si termina en "footer", `section` si termina en "section", `form` si termina en "form", `fieldset` si termina en "fieldset", `button` si termina en "button", `script` si termina en "script", `div` en cualquier otro caso. Cuando es `false`, se utiliza el valor de `tag` de cada fragmento.<br><br>Compone el contenido CSS/JS/HTML de múltiples fragmentos de forma declarativa a partir de un arreglo de descriptores. Por cada fragmento habilitado, crea un elemento contenedor —no necesariamente `<section>`, puede ser `<form>`, `<fieldset>`, `<div>` u otra etiqueta— y delega la importación en `import()`. Los sub-fragmentos declarados en `fragments` se importan recursivamente sobre elementos contenedores ya existentes en el contenido importado. |
| prepare        | `void`       | `prepare()`<br><br>En función del valor del parámetro `environment`, modifica los elementos HTML de etiqueta `a`, `input` y `select` del cuerpo del documento HTML para adaptarlos a entornos nativos. |
| openUrl        | `void`       | `openUrl(url[, download])`<br><br>Parámetros:<br>**• id:** `string`, especifica la dirección URL que se requiere abrir o descargar.<br>**• download:** `string` *opcional*, especifica el nombre del archivo con que se descargará el contenido referido mediante la URL.<br><br>Abre o descarga un contenido mediante una dirección URL. Este método es requerido en entornos nativos ya que no se siempre se cuenta con soporte mediante WebView sobre Android o WebKit sobre iOS. |
| isCompleted    | `boolean`    | `isCompleted()`<br><br>Retorna `true` si todos los contenidos han sido importados y cargados, `false` en caso contrario. |
| destroy        | `void`       | `destroy()`<br><br>Destructor. |

## Implementación

Contenido CSS del archivo `./fragments/my-fragment/fragment.css`:

```css
.my-fragment {
	margin: 10px;
}

.my-fragment a,
.my-fragment a:visited {
	text-decoration: none;
	font-size: 20px;
	color: blue;
}
```

Contenido HTML del archivo `./fragments/my-fragment/fragment.htm`:

```html
<section id="myFragment" class="my-fragment">
	<a href="https://www.google.com">Google!</a><a href="https://wuijs.dev" target="_blank">go to WUI/JS Project website!</a>
</section>
```

Contenido JS del archivo `./fragments/my-fragment/fragment.js`:

```js
const myFragmentContentLog = (content) => {
	const output = document.body.querySelector(".output");
	output.innerHTML = `<pre>${content}</pre>`;
}
```

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

.output {
	margin: 10px;
	font-family: monospace;
}
```

Cabecera HTML:

```html
<script type="text/javascript" src="/libraries/wui-js/main/body/wui-body-0.10.js"></script>
```

Código HTML:

```html
<section id="myFragment"></section>
<div class="output"><pre>cargando contenido...</pre></div>
```

Código JS:

```js
const init = () => {
	const body = new WUIBody({
		//environment: "web",
		importDirectory: "./fragments/",
		//importMode: "fetch",
		onCompleted: () => {
			body.prepare();
		},
		debug: true
	});
	body.import("myFragment", "my-fragment/fragment", () => {
		myFragmentContentLog("contenido de prueba cargado");
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-body-import&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-body-import&lang=es).

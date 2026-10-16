[English](wui-http-en.md) | [Español](wui-http-es.md)

[wuijs-main-lib](../../README-es.md)

# WUIHttp

Versión: `0.2`

Utilidades para la realización de peticiones HTTP mediante `XMLHttpRequest` y `fetch()`, con autenticación por token, cancelación, progreso de descarga y conversión del contenido de la respuesta.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/main/http/wui-http-0.2.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/http/wui-http-0.2.js) |

## Constructor

| Tipo    | Descripción |
| ------- | ----------- |
| WUIHttp | `WUIHttp([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

## Propiedades

| Propiedad | Tipo     | Valor predeterminado | Descripción |
| --------- | -------- | -------------------- | ----------- |
| token     | `string` | `null`               | (get/set)<br><br>Token de autenticación. Si está definido, se envía en la cabecera `Authorization: Bearer {token}` de cada petición, salvo que la opción `token` de la petición lo sobrescriba. Acepta `null` para eliminarlo. |

## Métodos

| Método        | Tipo retorno      | Descripción |
| ------------- | ----------------- | ----------- |
| getUrlContent | `Promise<any>`    | `getUrlContent([options])`<br><br>Parámetros:<br>**• options:** `object` *opcional*<br><br>Realiza una petición mediante `XMLHttpRequest` y retorna el contenido según la opción `responseType`. Permite seguir el progreso de descarga con la opción `onProgress`. Si el estado HTTP no está entre 200 y 299 la promesa se rechaza con el código de estado; si la petición se cancela, con `"abort"`. Con `responseType` `"json"`, si el contenido no es JSON válido retorna `{ content: <texto> }`. |
| response      | `Promise<any>`    | `response([options])`<br><br>Parámetros:<br>**• options:** `object` *opcional*<br><br>Realiza una petición mediante `fetch()` y retorna el contenido según la opción `responseType`. Si la respuesta no es `ok` lanza el código de estado HTTP; si la petición se cancela, lanza el `AbortError` de `fetch`. |
| responseJson  | `Promise<object>` | `responseJson([options])`<br><br>Parámetros:<br>**• options:** `object` *opcional*<br><br>Equivalente a `response()` con `responseType` `"json"`. No modifica el objeto `options` recibido. |

## Opciones de Petición

| Opción       | Tipo             | Valor predeterminado | Descripción |
| ------------ | ---------------- | -------------------- | ----------- |
| url          | `string`         | `""`                 | URL de destino. En las peticiones `GET` se agrega el parámetro `_` con una marca de tiempo para evitar el uso de caché. |
| method       | `string`         | `"GET"`              | Método HTTP de la petición. |
| token        | `string`         |                      | Token de autenticación de la petición. Tiene prioridad sobre la propiedad `token`. |
| headers      | `object`         | `{}`                 | Cabeceras adicionales. Tienen prioridad sobre las cabeceras generadas (`Authorization`, `Content-Type`). |
| body         | `object\|string` | `""`                 | Cuerpo de la petición. No se envía en las peticiones `GET` ni `HEAD`. Un objeto se envía serializado como JSON; tanto un objeto como una cadena JSON válida agregan la cabecera `Content-Type: application/json`. |
| responseType | `string`         | `"text"`             | Tipo del contenido retornado.<br><br>Valores:<br>• `"text"`, cadena de texto.<br>• `"json"`, objeto JSON.<br>• `"blob"`, objeto `Blob`.<br>• `"arraybuffer"`, objeto `ArrayBuffer`.<br>• `"objecturl"`, URL de objeto creada con `URL.createObjectURL()`.<br>• `"base64"`, *data URL* en base64 con el tipo de contenido deducido de la extensión de la URL, sin considerar sus parámetros (`?`) ni fragmento (`#`). |
| signal       | `AbortSignal`    |                      | Señal de un `AbortController` para cancelar la petición. |
| onProgress   | `function`       |                      | Sólo `getUrlContent()`. Función que se ejecuta durante la descarga. Recibe como parámetro un objeto con las propiedades `loaded`, `total`, `lengthComputable` y `progress` (fracción entre 0 y 1, o `null` si el tamaño total es desconocido). |

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
	font-size: 14px;
}

nav {
	display: flex;
	margin: 10px;
	align-items: center;
	gap: 10px;
}

.output {
	margin: 10px;
	font-family: monospace;
}
```

Cabecera HTML:

```html
<script type="text/javascript" src="/libraries/wui-js/main/http/wui-http-0.2.js"></script>
```

Código HTML:

```html
<nav>
	<button class="load-text">Texto</button>
	<button class="load-json">JSON</button>
	<button class="cancel">Cancelar</button>
</nav>
<div class="output"></div>
```

Código JSON (`data.json`):

```json
{
	"name": "WUIHttp",
	"version": "0.1"
}
```

Código JS:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const http = new WUIHttp({
		//token: null
	});
	let controller = null;
	document.body.querySelector(".load-text").addEventListener("click", async () => {
		controller = new AbortController();
		try {
			const content = await http.getUrlContent({
				url: "./data.json",
				//method: "GET",
				//token: "",
				//headers: {},
				//body: "",
				responseType: "text",
				signal: controller.signal,
				onProgress: ({ loaded, total }) => {
					output.textContent = `Progreso - ${loaded} / ${total} bytes`;
				}
			});
			output.textContent = `Texto - contenido: ${content}`;
		} catch (error) {
			output.textContent = `Error - ${error}`;
		}
	});
	document.body.querySelector(".load-json").addEventListener("click", async () => {
		controller = new AbortController();
		try {
			const data = await http.responseJson({
				url: "./data.json",
				signal: controller.signal
			});
			output.textContent = `JSON - nombre: ${data.name}, versión: ${data.version}`;
		} catch (error) {
			output.textContent = `Error - ${error}`;
		}
	});
	document.body.querySelector(".cancel").addEventListener("click", () => {
		if (controller) {
			controller.abort();
		}
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-http-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-http-basic&lang=es).

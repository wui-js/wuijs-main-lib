[English](wui-cookie-en.md) | [Español](wui-cookie-es.md)

[wuijs-main-lib](../../README-es.md)

# WUICookie

Versión: `0.5`

Utilidades para el manejo de cookies.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/main/cookie/wui-cookie-0.5.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/cookie/wui-cookie-0.5.js) |

## Constructor

| Tipo      | Descripción |
| --------- | ----------- |
| WUICookie | `WUICookie([properties])`<br><br>Parámetros:<br>**• properties:** `object` |

## Propiedades

| Propiedad | Tipo      | Valor predeterminado | Descripción |
| --------- | --------- | -------------------- | ----------- |
| domain    | `string`  | `location.hostname`  | (get/set)<br><br>Define el dominio desde el que se puede acceder a la cookie. Por defecto, es el host actual. Al configurarlo como un dominio principal (p. ej., ejemplo.com para sub.ejemplo.com), los subdominios pueden acceder a él. |
| path      | `string`  | `"./"`               | (get/set)<br><br>Especifica la ruta válida para la cookie. El valor predeterminado es la ruta actual siendo el valor vacío equivalente a este. Al establecer "/", la cookie es accesible en todo el dominio. |
| minutes   | `number`  | `525600`             | (get/set)<br><br>Especifica la duración medida en minutos que tendrá la cookie. El valor predeterminado equivale a 365 días. |
| overssl   | `boolean` | `false`              | (get/set)<br><br>Si se establece como `true`, la cookie solo se enviará a través de conexiones HTTPS. |

## Métodos

| Método | Tipo retorno | Descripción |
| ------ | ------------ | ----------- |
| encode | `string`     | `encode(name, value[, options])`<br><br>Parámetros:<br>**• name:** `string` <br>**• value:** `string` <br>**• options:** `object` *opcional*<br><br>Retorna la cadena codificada de una cookie. |
| set    | `string`     | `set(name, value[, options])`<br><br>Parámetros:<br>**• name:** `string` <br>**• value:** `string` <br>**• options:** `object` *opcional*<br><br>Agrega o modifica una cookie y retorna su cadena codificada. |
| get    | `string`     | `get(name)`<br><br>Parámetros:<br>**• name:** `string`<br><br>Lee el contenido de una cookie mediante su nombre. |
| remove | `void`       | `remove(name)`<br><br>Parámetros:<br>**• name:** `string`<br><br>Elimina una cookie mediante su nombre. |

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

.output {
	margin: 10px;
	font-family: monospace;
}
```

Cabecera HTML:

```html
<script type="text/javascript" src="/libraries/wui-js/main/cookie/wui-cookie-0.5.js"></script>
```

Código HTML:

```html
<div class="output"></div>
```

Código JS:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const cookie = new WUICookie({
		//domain: location.hostname,
		//path: "./",
		//minutes: 365*24*60,
		//overssl: false
	});
	const encode = cookie.set("mycookie", "test");
	const value = cookie.get("mycookie");
	output.innerHTML = "<pre>"
		+ `Value codificado : ${encode}\n`
		+ `Value leído.     : ${value}\n`
		+ "</pre>";
}

window.addEventListener("DOMContentLoaded", init);
```

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-cookie-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-cookie-basic&lang=es).

[English](wui-language-en.md) | [Español](wui-language-es.md)

[wuijs-main-lib](../../README-es.md)

# WUILanguage

Versión: `0.9`

Utilidades para el manejo de interfaces con distintos lenguajes. Permite cargar archivos de idioma en formato JS o JSON y actualizar dinámicamente el contenido de los elementos HTML según el idioma seleccionado.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/main/language/wui-language-0.9.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/language/wui-language-0.9.js) |

## Constructor

| Tipo        | Descripción |
| ----------- | ----------- |
| WUILanguage | `WUILanguage([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

## Propiedades

| Propiedad       | Tipo       | Valor predeterminado | Descripción |
| --------------- | ---------- | -------------------- | ----------- |
| selector        | `string`   | `".wui-language"`    | (get/set)<br><br>Selector CSS para los elementos HTML que serán cargados. Este puede ser aplicado al atributo `content` del elemento `meta`, a la propiedad `innerHTML` de los elementos: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `div`, `span`, `p`, `i`, `li`, `a`, `legend`, `label`, `option`, `data`, `button` y al atributo `placeholder` de los elementos `input` y `textarea`. |
| directory       | `string`   | `"languages/"`       | (get/set)<br><br>Ruta del directorio donde se encuentran los archivos de idioma. |
| sets            | `array`    | `["main"]`           | (get/set)<br><br>Lista de nombres del conjuntos del idioma a cargar. |
| fixedDictionary | `object`   | `{}`                 | (get/set)<br><br>Diccionario de términos cuyas llaves son reemplazadas por su valor en los textos de todos los idiomas cargados.<br><br>Formato: `{"{llave}": "valor"}` |
| langDictionary  | `object`   | `{}`                 | (get/set)<br><br>Diccionario de términos por idioma cuyas llaves son reemplazadas por su valor solo en los textos del idioma correspondiente.<br><br>Formato: `{"{idioma}": {"{llave}": "valor"}}` |
| lang            | `string`   | `"en"`               | (get/set)<br><br>Código de idioma en formato ISO 639-1. |
| mode            | `string`   | `"js"`               | (get/set)<br><br>Formato de los archivos de idioma.<br><br>Valores:<br>• `"js"`<br>• `"json"` |
| dataKey         | `string`   | `"key"`              | (get/set)<br><br>Nombre del atributo `data-*` que contiene la clave de texto en los elementos HTML. |
| dataOutput      | `string`   | `"text"`             | (get/set)<br><br>Nombre del atributo `data-*` donde se puede colocar el texto cargado. |
| onLoad          | `function` | `null`               | (get/set)<br><br>Función que se ejecuta cuando la carga de idioma ha finalizado. |

## Métodos

| Método  | Tipo retorno | Descripción |
| ------- | ------------ | ----------- |
| load    | `void`       | `load([lang[, sets[, callback]]])`<br><br>Parámetros:<br>**• lang:** `string` *opcional* (valor predeterminado corresponde a la propiedad `lang` del objeto)<br>**• sets:** `array` *opcional* (valor predeterminado corresponde a la propiedad `sets` del objeto)<br>**• callback** `function` *opcional*<br><br>Carga los archivos de idioma indicados por idioma y conjunto y, actualiza los elementos HTML marcados con el selector CSS. |
| refresh | `void`       | `refresh([selector[, lang]])`<br><br>Parámetros:<br>**• selector:** `string` *opcional* (valor predeterminado corresponde a la propiedad `selector` del objeto)<br>**• lang:** `string` *opcional* (valor predeterminado corresponde a la propiedad `lang` del objeto)<br><br>Recarga el texto contenido en los elementos anidados de el elemento HTML especificado en el argumento `selector`. |
| destroy | `void`       | `destroy()`<br><br>Destructor. |

## Implementación

Código JSON archivo `main-es.json` (textos en inglés):

```json
{
	"titles": {
		"test": "Test title"
	},
	"texts": {
		"test": "Test text"
	}
}
```

Código JSON archivo `main-es.json` (textos en español):

```json
{
	"titles": {
		"test": "Titulo prueba"
	},
	"texts": {
		"test": "Texto prueba"
	}
}
```

Código JS archivo `main-en.js` (textos en inglés):

```js
return {
	titles: {
		test: "Test title"
	},
	texts: {
		test: "Test text"
	}
};
```

Código JS archivo `main-es.js` (textos en español):

```js
return {
	titles: {
		test: "Titulo prueba"
	},
	texts: {
		test: "Texto prueba"
	}
};
```

> [!IMPORTANT]
> Si se utiliza `js` como formato de los archivos de idioma, dicho archivo debe ser inicializado por la palabra reservada `return` seguido de un objeto `{}`.

> [!TIP]
> Si se desea agregar contenido dinámico dentro de un texto, se recomienda utilizar formato de los archivos de idioma `js` (`mode: "js"`) y agregar el texto mediante el método de interpolación de cadenas, conocido también como literales de plantilla. Por ejemplo, ``mykey: `My ${var} text` ``.

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
	margin: 20px;
}

nav select {
	margin-top: 20px;
	-webkit-border-radius: 12px;
	-moz-border-radius: 12px;
	border-radius: 12px;
	border: 1px solid #ccc;
	background-color: transparent;
}
```

Cabecera HTML:

```html
<script type="text/javascript" src="/libraries/wui-js/main/language/wui-language-0.9.js"></script>
```

Código HTML:

```html
<nav>
	<h1 class="wui-language" data-key="titles.test"></h1>
	<div class="wui-language" data-key="texts.test"></div>
	<select>
		<option></option>
		<option value="en">english</option>
		<option value="es">español</option>
	</select>
</nav>
```

Código JS:

```js
const init = () => {
	const dropdown = document.body.querySelector("select");
	const language = new WUILanguage({
		//selector: ".wui-language",
		//directory: "languages/",
		//sets: ["main"],
		//fixedDictionary: {},
		//langDictionary: {},
		lang: "es",
		//mode: "js",
		//dataKey: "key",
		//dataOutput: "text",
		onLoad: (...args) => {
			[lang, languages] = args;
			console.log("Language loaded:", lang, languages);
		}
	});
	let lang = language.lang;
	let languages = {};
	language.load();
	dropdown.addEventListener("change", () => {
		const value = dropdown.value;
		if (value !== "") {
			language.load(value);
		}
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> El archivo de idioma debe estar en la ruta `./languages/main-es.js` o `./languages/main-es.json` según el set, idioma y modo que se emplee. Es importante que los archivos de idioma tengan la forma `{set}-{lang}.{mode}`, en caso contrario, el archivo no podrá ser importado.

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-language-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-language-basic&lang=es).

Es posible realizar combinaciones de conjuntos de archivos de un mismo idioma, por ejemplo, si se cuenta con un archivo `main-es.js` y otro `main2-es.js` que complemente al primero, se pueden llamar simultáneamente mediante la propiedad `sets`.

Código JS:

```js
// Opción 1: Actualizar la propiedad sets y posteriormente recargar.
language.sets = ["main", "main2"];
language.load(); 

// Opción 2: Recargar pasando como parámetro ella combinación de conjuntos.
language.load("es", ["main", "main2"]);
```

Las propiedades `fixedDictionary` y `langDictionary` permiten definir diccionarios de términos cuyas llaves son reemplazadas por su valor al momento de cargar los archivos de idioma. Esto permite emplear el modo `json`, que no admite inserciones de variables JavaScript, en lugar del modo `js`.

Las llaves de `fixedDictionary` se reemplazan en los textos de todos los idiomas cargados, mientras que las de `langDictionary` se reemplazan solo en los textos del idioma al que pertenecen. Cuando una misma llave está definida en ambos diccionarios, prevalece la de `langDictionary`.

Código JSON archivo `main-es.json`:

```json
{
	"titles": {
		"welcome": "{greeting}, bienvenido a {app}"
	},
	"texts": {
		"version": "Versión {version} de {app}"
	}
}
```

Código JS:

```js
const language = new WUILanguage({
	lang: "es",
	mode: "json",
	fixedDictionary: {
		"{app}": "WUI/JS",
		"{version}": "0.16.1"
	},
	langDictionary: {
		en: {
			"{greeting}": "Hello"
		},
		es: {
			"{greeting}": "Hola"
		}
	}
});

language.load();
// titles.welcome -> "Hola, bienvenido a WUI/JS"
// texts.version  -> "Versión 0.16.1 de WUI/JS"
```

> [!IMPORTANT]
> El reemplazo se aplica una única vez, durante la carga de cada archivo de idioma. Dado que los archivos ya cargados no se vuelven a descargar, ambos diccionarios deben estar definidos antes de la primera llamada al método `load()` de cada conjunto e idioma.

> [!NOTE]
> Una llave que comienza o termina con un carácter alfanumérico solo se reemplaza cuando coincide con una palabra completa. Por ejemplo, la llave `app` no reemplaza el texto contenido en la palabra `application`. Esta restricción no aplica a las llaves delimitadas por caracteres no alfanuméricos, como `{app}`.

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-language-dictionary&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-language-dictionary&lang=es).

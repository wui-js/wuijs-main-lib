[English](wui-language-en.md) | [Español](wui-language-es.md)

[wuijs-main-lib](../../README-en.md)

# WUILanguage

Version: `0.9`

Utilities for interfaces with different languages management. Allows you to load language files in JS or JSON format and dynamically update the content of HTML elements based on the language.

## Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/language/wui-language-0.9.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/language/wui-language-0.9.js) |

## Constructor

| Type        | Description |
| ----------- | ----------- |
| WUILanguage | `WUILanguage([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

## Properties

| Property        | Type       | Default value     | Description |
| --------------- | ---------- | ----------------- | ----------- |
| selector        | `string`   | `".wui-language"` | (get/set)<br><br>CSS selector for HTML elements to be loaded. This can be applied to the `content` attribute of the `meta` element, to the `innerHTML` property of the elements: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `div`, `span`, `p`, `i`, `li`, `a`, `legend`, `label`, `option`, `data`, `button`, and to the `placeholder` attribute of the `input` and `textarea` elements. |
| directory       | `string`   | `"languages/"`    | (get/set)<br><br>Path to the directory where the language files are located. |
| sets            | `array`    | `["main"]`        | (get/set)<br><br>List of language set names to load. |
| fixedDictionary | `object`   | `{}`              | (get/set)<br><br>Dictionary of terms whose keys are replaced by their value in the texts of every loaded language.<br><br>Format: `{"{key}": "value"}` |
| langDictionary  | `object`   | `{}`              | (get/set)<br><br>Dictionary of terms per language whose keys are replaced by their value only in the texts of the matching language.<br><br>Format: `{"{language}": {"{key}": "value"}}` |
| lang            | `string`   | `"en"`            | (get/set)<br><br>Language code in ISO 639-1 format. |
| mode            | `string`   | `"js"`            | (get/set)<br><br>Language file format.<br><br>Values:<br>• `"js"`<br>• `"json"` |
| dataKey         | `string`   | `"key"`           | (get/set)<br><br>Name of the `data-*` attribute that contains the text key in HTML elements. |
| dataOutput      | `string`   | `"text"`          | (get/set)<br><br>Name of the `data-*` attribute where the loaded text can be placed. |
| onLoad          | `function` | `null`            | (get/set)<br><br>Function run when the language loading has finished. |

## Methods

| Method  | Return type | Description |
| ------- | ----------- | ----------- |
| load    | `void`      | `load([lang[, sets]])`<br><br>Arguments:<br>**• lang:** `string` *optional* (default value corresponds to the `lang` property of the object)<br>**• sets:** `array` *optional* (default value corresponds to the `sets` property of the object)<br>**• callback** `function` *optional*<br><br>Loads the language files indicated by language and set, and updates the HTML elements marked with the CSS selector. |
| refresh | `void`      | `refresh([selector[, lang]])`<br><br>Arguments:**• selector:** `string` *optional* (default value corresponds to the `selector` property of the object)<br>**• lang:** `string` *optional* (default value corresponds to the `lang` property of the object)<br><br>Reloads the text contained in the nested elements of the HTML element specified in the `selector` argument. |
| destroy | `void`      | `destroy()`<br><br>Destroyer. |

## Implementation

JSON code file `main-en.json` (english texts):

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

JSON code file `main-es.json` (Spanish texts):

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

JS code file `main-en.js` (english texts):

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

JS code file `main-es.js` (Spanish texts):

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
> If `js` is used as the format for language files, said file must be initialized by the `return` keyword followed by a `{}` object.

> [!TIP]
> If you want to add dynamic content within a text, It is recommended to use the `js` language file format (`mode: "js"`) and add the text using the string interpolation method, also known as template literals. I.e. ``mykey: `My ${var} text` ``.

CSS code:

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

HTML head:

```html
<script type="text/javascript" src="/libraries/wui-js/main/language/wui-language-0.9.js"></script>
```

HTML code:

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

JS code:

```js
const init = () => {
	const dropdown = document.body.querySelector("select");
	const language = new WUILanguage({
		//selector: ".wui-language",
		//directory: "languages/",
		//sets: ["main"],
		//fixedDictionary: {},
		//langDictionary: {},
		lang: "en",
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
> The language file must be in the path `./languages/main-en.js` or `./languages/main-en.json` depending on the set, language and mode used. It is important that language files are in the form `{set}-{lang}.{mode}`, otherwise the file cannot be imported.

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-language-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-language-basic&lang=en).

It is possible to combine sets of files from the same language, for example, if you have a `main-es.js` file and another `main2-es.js` file that complements the first, they can be called simultaneously using the `sets` property.

JS code:

```js
// Option 1: Update the sets property and then reload.
language.sets = ["main", "main2"];
language.load(); 

// Option 2: Reload by passing the combination of sets as a parameter.
language.load("en", ["main", "main2"]);
```

The `fixedDictionary` and `langDictionary` properties allow defining dictionaries of terms whose keys are replaced by their value when the language files are loaded. This makes it possible to use the `json` mode, which does not support JavaScript variable insertions, instead of the `js` mode.

The keys of `fixedDictionary` are replaced in the texts of every loaded language, whereas those of `langDictionary` are replaced only in the texts of the language they belong to. When the same key is defined in both dictionaries, the one from `langDictionary` prevails.

JSON code of the `main-en.json` file:

```json
{
	"titles": {
		"welcome": "{greeting}, welcome to {app}"
	},
	"texts": {
		"version": "{app} version {version}"
	}
}
```

JS code:

```js
const language = new WUILanguage({
	lang: "en",
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
// titles.welcome -> "Hello, welcome to WUI/JS"
// texts.version  -> "WUI/JS version 0.16.1"
```

> [!IMPORTANT]
> The replacement is applied only once, while each language file is being loaded. Since already loaded files are not downloaded again, both dictionaries must be defined before the first call to the `load()` method for each set and language.

> [!NOTE]
> A key starting or ending with an alphanumeric character is only replaced when it matches a whole word. For example, the key `app` does not replace the text contained in the word `application`. This restriction does not apply to keys delimited by non-alphanumeric characters, such as `{app}`.

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-language-dictionary&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-language-dictionary&lang=en).

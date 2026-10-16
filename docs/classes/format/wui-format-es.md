[English](wui-format-en.md) | [Español](wui-format-es.md)

[wuijs-main-lib](../../README-es.md)

# WUIFormat

Versión: `0.7`

Utilidades para manejo y validación de formatos de datos de tipo `string`, `number` y `Date`.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/main/format/wui-format-0.7.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/format/wui-format-0.7.js) |

## Métodos Estáticos

| Método             | Tipo retorno | Descripción |
| ------------------ | ------------ | ----------- |
| numberToString     | `string`     | `numberToString(number[, options])`<br><br>Parámetros:<br>**• number:** `number`, número a formatear.<br>**• options:** `Object` *opcional*, opciones de formateo.<br><br>Formatea un número a una cadena. |
| numberToSizeString | `string`     | `numberToSizeString(number)`<br><br>Parámetros:<br>**• number:** `number`, número a formatear.<br><br>Formatea un número a una cadena que representa el tamaño de archivo (B, KB, MB, TB). |
| numberToModule11   | `string`     | `numberToModule11(number, codeTen)`<br><br>Parámetros:<br>**• number:** `string`, número a validar (incluido dígito verificador).<br>**• codeTen:** `string`, carácter por el que se reemplazará el dígito verificador en caso que sea 10.<br><br>Calcula el dígito verificador módulo 11. |
| numberToModule23   | `string`     | `numberToModule23(number, map)`<br><br>Parámetros:<br>**• number:** `string`, número a validar.<br>**• map:** `string`, cadena de caracteres de mapeo.<br><br>Calcula el dígito verificador módulo 23. |
| dateToString       | `string`     | `dateToString(date[, format[, options]])`<br><br>Parámetros:<br>**• date:** `Date`, fecha a formatear.<br>**• format:** `string` *opcional*, formato de fecha esperado (valor predeterminado `"yyyy-mm-dd"`).<br>**• options:** `Object` *opcional*, opciones de formateo.<br><br>Formatea una fecha a cadena usando `Date.prototype.wuiDefaults`. |
| validateDate       | `boolean`    | `validateDate(date[, format])`<br><br>Parámetros:<br>**• date:** `string`, fecha a validar.<br>**• format:** `string` *opcional*, formato de fecha esperado (valor predeterminado `"yyyy-mm-dd"`).<br><br>Valida una fecha en formato cadena. |
| validateEmail      | `boolean`    | `validateEmail(email)`<br><br>Parámetros:<br>**• email:** `string`, dirección de correo.<br><br>Valida una dirección de correo electrónico. |
| validateEmailList  | `boolean`    | `validateEmailList(list[, separator])`<br><br>Parámetros:<br>**• list:** `string`, lista de direcciones de correo.<br>**• separator:** `string` *opcional*, carácter(es) de separación de lista.<br><br>Valida una lista de correos electrónicos. |
| validatePhone      | `boolean`    | `validatePhone(phone[, length])`<br><br>Parámetros:<br>**• phone:** `string`, número telefónico.<br>**• length:** `number` *opcional*, largo del número telefónico.<br><br>Valida un número de teléfono. |
| validatePhoneList  | `boolean`    | `validatePhoneList(list[, length[, separator]])`<br><br>Parámetros:<br>**• list:** `string`, lista de números telefónicos.<br>**• length:** `number` *opcional*, largo del número telefónico.<br>**• separator:** `string` *opcional*, carácter(es) de separación de lista.<br><br>Valida una lista de números de teléfono. |
| validateUrl        | `boolean`    | `validateUrl(url)`<br><br>Parámetros:<br>**• url:** `string`, dirección URL.<br><br>Valida una dirección URL. |
| validateUrlList    | `boolean`    | `validateUrlList(list[, separator])`<br><br>Parámetros:<br>**• list:** `string`, lista de direcciones URL.<br>**• separator:** `string` *opcional*, carácter(es) de separación de lista.<br><br>Valida una lista de URLs. |
| validateIpv4       | `boolean`    | `validateIpv4(ipv4)`<br><br>Parámetros:<br>**• ipv4:** `string`, dirección de IPv4.<br><br>Valida una dirección IPv4. |
| validateModule11   | `boolean`    | `validateModule11(value, codeTen)`<br><br>Parámetros:<br>**• value:** `string`, cadena a validar (incluido dígito verificador).<br>**• codeTen:** `string`, carácter por el que se reemplazará el dígito verificador en caso que sea 10.<br><br>Valida una cadena incluido el dígito verificador módulo 11. |
| validateModule23   | `boolean`    | `validateModule23(value, map)`<br><br>Parámetros:<br>**• value:** `string`, cadena a validar (incluido dígito verificador).<br>**• map:** `string`, cadena de caracteres de mapeo.<br><br>Valida una cadena incluido el dígito verificador módulo 23. |
| validateNid        | `boolean`    | `validateNid(nid, countryCode)`<br><br>Parámetros:<br>**• nid:** `string`, valor a validar.<br>**• countryCode:** `string`, código de país en formato ISO 3166-1 alpha-2 con soporte para CL, PY y ES.<br><br>Valida un documento de identidad nacional. |
| loadDate           | `Date`       | `loadDate(date[, format[, options]])`<br><br>Parámetros:<br>**• date:** `string`, fecha a cargar.<br>**• format:** `string` *opcional*, formato de fecha.<br>**• options:** `object` *opcional*, opciones de fecha, según la definición de **Valores predeterminados** `<Date.prototype.wuiDefaults>`.<br><br>Carga una fecha a partir de una cadena. |

## Extensiones de Prototipo Number `Number.prototype`

### Valores predeterminados `Number.prototype.wuiDefaults`

| Propiedad          | Tipo             | Valor predeterminado | Descripción |
| ------------------ | ---------------- | -------------------- | ----------- |
| numberPrefix       | `string`         | `""`                 | Prefijo de la cadena de retorno empleado por los métodos `WUIFormat.numberToString()` y `Number.prototype.wuiToString()`. |
| numberSufix        | `string`         | `""`                 | Sufijo de la cadena de retorno empleado por los métodos `WUIFormat.numberToString()` y `Number.prototype.wuiToString()`. |
| thousandsSeparator | `string`         | `","`                | Separador de miles de la cadena de retorno empleado por los métodos `WUIFormat.numberToString()` y `Number.prototype.wuiToString()`. |
| decimalLength      | `number\|string` | `"auto"`             | Largo del decimal de la cadena de retorno empleado por los métodos `WUIFormat.numberToString()` y `Number.prototype.wuiToString()`. |
| decimalSeparator   | `string`         | `"."`                | Separador del decimal de la cadena de retorno empleado por los métodos `WUIFormat.numberToString()` y `Number.prototype.wuiToString()`. |

### Métodos

| Método          | Tipo retorno | Descripción |
| --------------- | ------------ | ----------- |
| wuiSetDefaults  | `number`     | `wuiSetDefaults(options)`<br><br>Parámetros:<br>**• options:** `object` *opcional*, opciones de fecha, según la definición de **Valores predeterminados** `<Date.prototype.wuiDefaults>`.<br><br>Actualiza el valor de los valores por defecto. |
| wuiToString     | `string`     | `wuiToString([options])`<br><br>Parámetros:<br>**• options:** `Object` *opcional*, opciones de formateo.<br><br>Formatea un número a una cadena. |
| wuiToSizeString | `string`     | `wuiToSizeString()`<br><br>Formatea un número a una cadena que representa el tamaño de archivo (B, KB, MB, TB). |
| wuiToModule11   | `string`     | `wuiToModule11(codeTen)`<br><br>Parámetros:<br>**• codeTen:** `string`, carácter por el que se reemplazará el dígito verificador en caso que sea 10.<br><br>Calcula el dígito verificador módulo 11. |
| wuiToModule23   | `string`     | `wuiToModule23(map)`<br><br>Parámetros:<br>**• map:** `string`, cadena de caracteres de mapeo.<br><br>Calcula el dígito verificador módulo 23. |

## Extensiones de Prototipo String `String.prototype`

### Valores predeterminados `String.prototype.wuiDefaults`

| Propiedad          | Tipo     | Valor predeterminado | Descripción |
| ------------------ | -------- | -------------------- | ----------- |
| emailListSeparator | `string` | `","`                | Separador compuesto por uno o más caracteres utilizada para la validación de listas de direcciones de correos. |
| phoneLength        | `number` | `10`                 | Largo requerido para la validación de un número de teléfono. |
| phoneListSeparator | `string` | `","`                | Separador compuesto por uno o más caracteres utilizada para la validación de listas de números de teléfono. |
| urlListSeparator   | `string` | `","`                | Separador compuesto por uno o más caracteres utilizada para la validación de listas de direcciones URLs. |

### Métodos

| Método               | Tipo retorno | Descripción |
| -------------------- | ------------ | ----------- |
| wuiSetDefaults       | `string`     | `wuiSetDefaults(options)`<br><br>Parámetros:<br>**• options:** `object` *opcional*, opciones de fecha, según la definición de **Valores predeterminados** `<Date.prototype.wuiDefaults>`.<br><br>Actualiza el valor de los valores por defecto. |
| wuiValidateDate      | `boolean`    | `wuiValidateDate([format])`<br><br>Parámetros:<br>**• format:** `string` *opcional*, formato de fecha esperado (valor predeterminado `"yyyy-mm-dd"`).<br><br>Valida una fecha en formato cadena. |
| wuiValidateEmail     | `boolean`    | `wuiValidateEmail()`<br><br>Valida una dirección de correo electrónico. |
| wuiValidateEmailList | `boolean`    | `wuiValidateEmailList([separator])`<br><br>Parámetros:<br>**• separator:** `string` *opcional*, carácter(es) de separación de lista.<br><br>Valida una lista de correos electrónicos. |
| wuiValidatePhone     | `boolean`    | `wuiValidatePhone([length])`<br><br>Parámetros:<br>**• length:** `number` *opcional*, largo del número telefónico.<br><br>Valida un número de teléfono. |
| wuiValidatePhoneList | `boolean`    | `wuiValidatePhoneList([length, separator])`<br><br>Parámetros:<br>**• length:** `number` *opcional*, largo del número telefónico.<br>**• separator:** `string` *opcional*, carácter(es) de separación de lista.<br><br>Valida una lista de números de teléfono. |
| wuiValidateUrl       | `boolean`    | `wuiValidateUrl()`<br><br>Valida una dirección URL. |
| wuiValidateUrlList   | `boolean`    | `wuiValidateUrlList([separator])`<br><br>Parámetros:<br>**• separator:** `string` *opcional*, carácter(es) de separación de lista.<br><br>Valida una lista de URLs. |
| wuiValidateIpv4      | `boolean`    | `wuiValidateIpv4()`<br><br>Valida una dirección IPv4. |
| wuiValidateModule11  | `boolean`    | `wuiValidateModule11(codeTen)`<br><br>Parámetros:<br>**• codeTen:** `string`, carácter por el que se reemplazará el dígito verificador en caso que sea 10.<br><br>Valida una cadena incluido el dígito verificador módulo 11. |
| wuiValidateModule23  | `boolean`    | `wuiValidateModule23(map)`<br><br>Parámetros:<br>**• map:** `string`, cadena de caracteres de mapeo.<br><br>Valida una cadena incluido el dígito verificador módulo 23. |
| wuiValidateNid       | `boolean`    | `wuiValidateNid(countryCode)`<br><br>Parámetros:<br>**• countryCode:** `string`, código de país en formato ISO 3166-1 alpha-2 con soporte para CL, PY y ES.<br><br>Valida un documento de identidad nacional. |

## Extensiones de Prototipo Date `Date.prototype`

### Valores predeterminados `Date.prototype.wuiDefaults`

| Propiedad        | Tipo            | Valor predeterminado    | Descripción |
| ---------------- | --------------- | ----------------------- | ----------- |
| utc              | `boolean`       | `false`                 | Indica si se debe usar la hora universal coordinada (UTC). |
| locale           | `string`        | `"en-US"`               | Código de configuración regional en formato `<ISO 639-1>-<ISO 3166-1 alpha-2>`. Por ejemplo: `es-CL`, `en-US`, `fr-FR`, etc. |
| dateFormat       | `string`        | `"yyyy-mm-dd"`          | Formato de fecha, según la definición de **Partes del formato de fecha/hora**.|
| timeFormat       | `string`        | `"hh:MM:ss"`            | Formato de hora, según la definición de **Partes del formato de fecha/hora**. |
| datetimeFormat   | `string`        | `"yyyy-mm-dd hh:MM:ss"` | Formato de fecha/hora, según la definición de **Partes del formato de fecha/hora**. |
| formatDelimiters | `Array<string>` | `["[", "]"]`            | Caracteres de no texto utilizados para delimitar texto fijo en el formato. Se eliminan al convertir un objeto de fecha a cadena. |

### Partes del formato de fecha/hora

| Parte | Descripción |
| ----- | ----------- |
| yyyy  | Año en formato de 4 dígitos. |
| yy    | Año en formato de 2 dígitos. |
| mmmm  | Mes en formato nombre completo. |
| mmm   | Mes en formato de las primeras 3 iniciales del nombre. |
| mm    | Mes en formato de 2 dígitos. |
| m     | Mes en formato de número entero. |
| dd    | Día del mes en formato de 2 dígitos. |
| d     | Día del mes en formato de número entero. |
| w     | Día de la semana en formato de número entero, donde domingo es `0`. |
| DDDD  | Nombre del día de la semana en formato nombre completo. |
| DDD   | Nombre del día de la semana en formato de las primeras 3 iniciales del nombre. |
| DD    | Nombre del día de la semana en formato de las primeras 2 iniciales del nombre. |
| D     | Nombre del día de la semana en formato de número entero. |
| hh    | Hora en formato de 2 dígitos. |
| h     | Hora en formato de número entero. |
| MM    | Minuto en formato de 2 dígitos. |
| M     | Minuto en formato de número entero. |
| ss    | Segundo en formato de 2 dígitos. |
| s     | Segundo en formato de número entero. |
| SSS   | Milisegundo en formato de 3 dígitos. |
| S     | Milisegundo en formato de número entero. |
| zzz   | Desplazamiento de zona horaria en formato "±hh:MM". |
| zz    | Desplazamiento de zona horaria en formato "±hhMM". |
| z     | Desplazamiento de zona horaria en formato de número entero medido en minutos. |

### Formatos de carga predefinidos

| Formato               | Valor |
| --------------------- | ----- |
| `"datetime\|default"` | `Date.prototype.wuiDefaults.datetimeFormat` |
| `"numeric"`           | `"yyyymmddhhMMss"` |
| `"standard"`          | `"yyyy-mm-dd hh:MM:ss"` |
| `"longtime"`          | `"yyyy-mm-dd[T]hh:MM:ss"` |

### Formatos de salida predefinidos

| Formato                      | Valor |
| ---------------------------- | ----- |
| `"datetime\|default"`        | `Date.prototype.wuiDefaults.datetimeFormat` |
| `"date"`                     | `Date.prototype.wuiDefaults.dateFormat` |
| `"time"`                     | `Date.prototype.wuiDefaults.timeFormat` |
| `"numeric"`                  | `"yyyymmddhhMMss"` |
| `"standard"`                 | `"yyyy-mm-dd hh:MM:ss"` |
| `"longtime"`                 | `"yyyy-mm-dd[T]hh:MM:ss"` |
| `"rfc3339\|atom"`            | `"yyyy-mm-dd[T]hh:MM:ss.SSS[Z]"` |
| `"rfc1123\|rfc2616\|cookie"` | `"DDD, dd-mmm-yyyy hh:MM:ss GMT"` |
| `"rfc3501"`                  | `"dd-mmm-yyyy hh:MM:ss zz"` |

### Métodos

| Método         | Tipo retorno | Descripción |
| -------------- | ------------ | ----------- |
| wuiSetDefaults | `Date`       | `wuiSetDefaults(options)`<br><br>Parámetros:<br>**• options:** `object` *opcional*, opciones de fecha, según la definición de **Valores predeterminados** `<Date.prototype.wuiDefaults>`.<br><br>Actualiza el valor de los valores por defecto. |
| wuiLoad        | `Date`       | `wuiLoad(value[, format[, options]])`<br><br>Parámetros:<br>**• value:** `string`, fecha a cargar.<br>**• format:** `string` *opcional*, formato de fecha (valor predeterminado `"default"`).<br>**• options:** `object` *opcional*, opciones de fecha, según la definición de **Valores predeterminados** `<Date.prototype.wuiDefaults>`.<br><br>Carga una fecha a partir de una cadena. |
| wuiToString    | `string`     | `wuiToString([format[, options]])`<br><br>Parámetros:<br>**• format:** `string` *opcional*, formato de fecha (valor predeterminado `"default"`).<br>**• options:** `object` *opcional*, opciones de fecha, según la definición de **Valores predeterminados** `<Date.prototype.wuiDefaults>`.<br><br>Convierte una fecha a cadena. |
| wuiDayName     | `string`     | `wuiDayName([day])`<br><br>Parámetros:<br>**• day:** `number` *opcional*, día de la semana (valor predeterminado `this.getDay()`).<br><br>Retorna el nombre del día de la semana. |
| wuiMonthName   | `string`     | `wuiMonthName([month])`<br><br>Parámetros:<br>**• month:** `number` *opcional*, mes (valor predeterminado `this.getMonth()`).<br><br>Retorna el nombre del mes. |

## Implementación

Código CSS:

```css
.output {
	position: relative;
	margin: 10px;
	font-family: monospace;
}
```

Cabecera HTML:

```html
<script type="text/javascript" src="/libraries/wui-js/main/format/wui-format-0.7.js"></script>
```

HTML code:

```html
<h2>Number methods</h2>
<div class="output numberFormatting"></div>
<div class="output numberSizeFormatting"></div>
<div class="output numberModule11Formatting"></div>
<div class="output numberModule23Formatting"></div>

<h2>String methods</h2>
<div class="output stringDateValidation"></div>
<div class="output stringEmailValidation"></div>
<div class="output stringURLValidation"></div>
<div class="output stringIPv4Validation"></div>
<div class="output stringModule11Validation"></div>
<div class="output stringModule23Validation"></div>
<div class="output stringNIDValidation"></div>

<h2>Date methods</h2>
<div class="output dateLocalFormatting"></div>
<div class="output dateUTCFormatting"></div>
```

Código JS:

```js
// Métodos de números

const numberInitDefaults = () => {
	//Number.prototype.wuiDefaults.numberPrefix = "";
	//Number.prototype.wuiDefaults.numberSufix = "";
	Number.prototype.wuiDefaults.thousandsSeparator = ".";
	Number.prototype.wuiDefaults.decimalLength = 2;
	Number.prototype.wuiDefaults.decimalSeparator = ",";
}

const numberFormatting = () => {
	const inputValue = 1234.567;
	const output = document.body.querySelector(".output.numberFormatting");
	const outputValue = inputValue.wuiToString({ numberPrefix: "$ " });
	output.innerHTML = "<pre>"
		+ `<b>Formateo numérico</b>\n`
		+ `valor entrada : ${inputValue}\n`
		+ `valor salida  : ${outputValue}\n`
		+ "</pre>";
}

const numberSizeFormatting = () => {
	const inputValue = 1234.567;
	const output = document.body.querySelector(".output.numberSizeFormatting");
	const outputValue = inputValue.wuiToSizeString({});
	output.innerHTML = "<pre>"
		+ `<b>Formateo numérico de tamaño digital</b>\n`
		+ `valor entrada : ${inputValue}\n`
		+ `valor salida  : ${outputValue}\n`
		+ "</pre>";
}

const numberModule11Formatting = () => {
	const inputValue = 1234567;
	const inputCode10 = "K";
	const output = document.body.querySelector(".output.numberModule11Formatting");
	const outputValue = inputValue.wuiToModule11(inputCode10);
	output.innerHTML = "<pre>"
		+ `<b>Formateo numérico de módulo 11</b>\n`
		+ `valor entrada     : ${inputValue}\n`
		+ `código 10 entrada : ${inputCode10}\n`
		+ `valor salida      : ${outputValue}\n`
		+ "</pre>";
}

const numberModule23Formatting = () => {
	const inputValue = 1234567;
	const inputMap = "TRWAGMYFPDXBNJZSQVHLCKET";
	const output = document.body.querySelector(".output.numberModule23Formatting");
	const outputValue = inputValue.wuiToModule23(inputMap);
	output.innerHTML = "<pre>"
		+ `<b>Numeric module 23 formatting</b>\n`
		+ `valor entrada : ${inputValue}\n`
		+ `mapa entrada  : ${inputMap}\n`
		+ `valor salida  : ${outputValue}\n`
		+ "</pre>";
}

// Métodos de cadenas

const stringDateValidation = () => {
	const inputFormat = "yyyy-mm-dd";
	const inputValue = "2023-12-31";
	const output = document.body.querySelector(".output.stringDateValidation");
	const outputValid = inputValue.wuiValidateDate(inputFormat);
	output.innerHTML = "<pre>"
		+ `<b>Validación de fecha</b>\n`
		+ `formato entrada   : ${inputFormat}\n`
		+ `valor entrada     : ${inputValue}\n`
		+ `validación salida : ${outputValid}\n`
		+ "</pre>";
}

const stringEmailValidation = () => {
	const inputValue = "test@example.com";
	const output = document.body.querySelector(".output.stringEmailValidation");
	const outputValid = inputValue.wuiValidateEmail();
	output.innerHTML = "<pre>"
		+ `<b>Validación de correo</b>\n`
		+ `valor entrada     : ${inputValue}\n`
		+ `validación salida : ${outputValid}\n`
		+ "</pre>";
}

const stringURLValidation = () => {
	const inputValue = "https://www.example.com";
	const output = document.body.querySelector(".output.stringURLValidation");
	const outputValid = inputValue.wuiValidateUrl();
	output.innerHTML = "<pre>"
		+ `<b>Validación de URL</b>\n`
		+ `valor entrada     : ${inputValue}\n`
		+ `validación salida : ${outputValid}\n`
		+ "</pre>";
}

const stringIPv4Validation = () => {
	const inputValue = "127.0.0.1";
	const output = document.body.querySelector(".output.stringIPv4Validation");
	const outputValid = inputValue.wuiValidateIpv4();
	output.innerHTML = "<pre>"
		+ `<b>Validación de IP v4</b>\n`
		+ `valor entrada     : ${inputValue}\n`
		+ `validación salida : ${outputValid}\n`
		+ "</pre>";
}

const stringModule11Validation = () => {
	const inputValue = "1234567-4";
	const inputCode10 = "K";
	const output = document.body.querySelector(".output.stringModule11Validation");
	const outputValid = inputValue.wuiValidateModule11(inputCode10);
	output.innerHTML = "<pre>"
		+ `<b>Validación de módulo 11</b>\n`
		+ `valor entrada     : ${inputValue}\n`
		+ `código 10 entrada : ${inputCode10}\n`
		+ `validación salida : ${outputValid}\n`
		+ "</pre>";
}

const stringModule23Validation = () => {
	const inputValue = "1234567-L";
	const inputMap = "TRWAGMYFPDXBNJZSQVHLCKET";
	const output = document.body.querySelector(".output.stringModule23Validation");
	const outputValid = inputValue.wuiValidateModule23(inputMap);
	output.innerHTML = "<pre>"
		+ `<b>Validación de módulo 23</b>\n`
		+ `valor entrada     : ${inputValue}\n`
		+ `mapa entrada      : ${inputMap}\n`
		+ `validación salida : ${outputValid}\n`
		+ "</pre>";
}

const stringNIDValidation = () => {
	const inputValue = "1.234.567-4";
	const inputCountryCode = "CL";
	const output = document.body.querySelector(".output.stringNIDValidation");
	const outputValid = inputValue.wuiValidateNid(inputCountryCode);
	output.innerHTML = "<pre>"
		+ `<b>Validación de DNI</b>\n`
		+ `valor entrada       : ${inputValue}\n`
		+ `código país entrada : ${inputCountryCode}\n`
		+ `validación salida   : ${outputValid}\n`
		+ "</pre>";
}

// Métodos de fechas

const dateInitDefaults = () => {
	//Date.prototype.wuiDefaults.utc = false;
	//Date.prototype.wuiDefaults.locale = "en-US";
	//Date.prototype.wuiDefaults.dateFormat = "yyyy-mm-dd";
	//Date.prototype.wuiDefaults.timeFormat = "hh:MM:ss";
	//Date.prototype.wuiDefaults.datetimeFormat = "yyyy-mm-dd hh:MM:ss";
	//Date.prototype.wuiDefaults.formatDelimiters = ["[", "]"];
}

const dateLocalFormatting = () => {
	const inputFormat = "yyyy-mm-dd";
	const inputValue = "2023-12-31";
	const date = new Date().wuiLoad(inputValue, inputFormat);
	const output = document.body.querySelector(".output.dateLocalFormatting");
	const outputFormat = "dd/mm/yyyy hh:MM [GMT]zz";
	const outputValue = date.wuiToString(outputFormat, { utc: false });
	output.innerHTML = "<pre>"
		+ `<b>Formateo de fecha local</b>\n`
		+ `formato entrada : ${inputFormat}\n`
		+ `valor entrada   : ${inputValue}\n`
		+ `fecha local     : ${date}\n`
		+ `formato salida  : ${outputFormat}\n`
		+ `valor salida    : ${outputValue}\n`
		+ "</pre>";
}

const dateUTCFormatting = () => {
	const inputFormat = "yyyy-mm-dd";
	const inputValue = "2023-12-31";
	const date = new Date().wuiLoad(inputValue, inputFormat);
	const output = document.body.querySelector(".output.dateUTCFormatting");
	const outputFormat = "dd/mm/yyyy hh:MM [GMT]zz";
	const outputValue = date.wuiToString(outputFormat, { utc: true });
	output.innerHTML = "<pre>"
		+ `<b>Formateo de fecha UTC</b>\n`
		+ `formato entrada : ${inputFormat}\n`
		+ `valor entrada   : ${inputValue}\n`
		+ `fecha utc       : ${date}\n`
		+ `formato salida  : ${outputFormat}\n`
		+ `valor salida    : ${outputValue}\n`
		+ "</pre>";
}

// Inicio

window.addEventListener("DOMContentLoaded", () => {

	numberInitDefaults();
	numberFormatting();
	numberSizeFormatting();
	numberModule11Formatting();

	stringDateValidation();
	stringEmailValidation();
	stringURLValidation();
	stringIPv4Validation();
	stringModule11Validation();
	stringModule23Validation();
	stringNIDValidation();

	dateInitDefaults();
	dateLocalFormatting();
	dateUTCFormatting();
});
```

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-format-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-format-basic&lang=es).

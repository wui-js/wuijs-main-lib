[English](wui-format-en.md) | [Español](wui-format-es.md)

[wuijs-main-lib](../../README-en.md)

# WUIFormat

Version: `0.7`

Utilities for management and validation `string`, `number` and `Date` data formats.

## Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/format/wui-format-0.7.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/format/wui-format-0.7.js) |

## Static Methods

| Method             | Return type  | Description |
| ------------------ | ------------ | ----------- |
| numberToString     | `string`     | `numberToString(number[, options])`<br><br>Arguments:<br>**• number:** `number`, number to format.<br>**• options:** `Object` *optional*, formatting options.<br><br>Formats a number to string. |
| numberToSizeString | `string`     | `numberToSizeString(number)`<br><br>Arguments:<br>**• number:** `number`, number to format.<br><br>Formats a number to file size (B, KB, MB, TB). |
| numberToModule11   | `string`     | `numberToModule11(number, codeTen)`<br><br>Arguments:<br>**• number:** `string`, number to validate (including check digit).<br>**• codeTen:** `string`, character to replace the check digit if it is 10.<br><br>Calculates the module 11 check digit. |
| numberToModule23   | `string`     | `numberToModule23(number, map)`<br><br>Arguments:<br>**• number:** `string`, number to validate.<br>**• map:** `string`, mapping string.<br><br>Calculates the module 23 check digit. |
| dateToString       | `string`     | `dateToString(date[, format[, options]])`<br><br>Arguments:<br>**• date:** `Date`, date to format.<br>**• format:** `string` *optional*, expected date format (default value `"yyyy-mm-dd"`).<br>**• options:** `Object` *optional*, options of formatting.<br><br>Formats a date to string using `Date.prototype.wuiDefaults`. |
| validateDate       | `boolean`    | `validateDate(date[, format])`<br><br>Arguments:<br>**• date:** `string`, date to validate.<br>**• format:** `string` *optional*, expected date format (default value `"yyyy-mm-dd"`).<br><br>Validates a date in string format. |
| validateEmail      | `boolean`    | `validateEmail(email)`<br><br>Arguments:<br>**• email:** `string`, email address.<br><br>Validates an email address. |
| validateEmailList  | `boolean`    | `validateEmailList(list[, separator])`<br><br>Arguments:<br>**• list:** `string`, list of email addresses.<br>**• separator:** `string` *optional*, list separator character(s).<br><br>Validates a list of email addresses. |
| validatePhone      | `boolean`    | `validatePhone(phone[, length])`<br><br>Arguments:<br>**• phone:** `string`, phone number.<br>**• length:** `number` *optional*, length of the telephone number.<br><br>Validates a phone number. |
| validatePhoneList  | `boolean`    | `validatePhoneList(list[, length[, separator]])`<br><br>Arguments:<br>**• list:** `string`, list of number phones.<br>**• length:** `number` *optional*, length of the telephone number.<br>**• separator:** `string` *optional*, list separator character(s).<br><br>Validates a list of phone numbers. |
| validateUrl        | `boolean`    | `validateUrl(url)`<br><br>Arguments:<br>**• url:** `string`, URL address.<br><br>Validates a URL address. |
| validateUrlList    | `boolean`    | `validateUrlList(list[, separator])`<br><br>Arguments:<br>**• list:** `string`, list of URL addresses.<br>**• separator:** `string` *optional*, list separator character(s).<br><br>Validates a list of URLs. |
| validateIpv4       | `boolean`    | `validateIpv4(ipv4)`<br><br>Arguments:<br>**• ipv4:** `string`, IPv4 address.<br><br>Validates an IPv4 address. |
| validateModule11   | `boolean`    | `validateModule11(value, codeTen)`<br><br>Arguments:<br>**• value:** `string`, string to validate (including check digit).<br>**• codeTen:** `string`, character to replace the check digit if it is 10.<br><br>Validate a string including the modulo 11 check digit. |
| validateModule23   | `boolean`    | `validateModule23(value, map)`<br><br>Arguments:<br>**• value:** `string`, string to validate (including check digit).<br>**• map:** `string`, mapping character string.<br><br>Validate a string including the modulo 23 check digit. |
| validateNid        | `boolean`    | `validateNid(nid, countryCode)`<br><br>Arguments:<br>**• nid:** `string`, value to validate.<br>**• countryCode:** `string`, country code in ISO 3166-1 alpha-2 format with support for CL, PY and ES.<br><br>Validates a national identity document. |
| loadDate           | `Date`       | `loadDate(date[, format[, options]])`<br><br>Arguments:<br>**• date:** `string`, date to load.<br>**• format:** `string` *optional*, date format.<br>**• options:** `object` *optional*, date options, according to the definition of **Default values** `<Date.prototype.wuiDefaults>`.<br><br>Load a date from a string. |

## Number Prototype Extensions `Number.prototype`

### Defaults `Number.prototype.wuiDefaults`

| Property           | Type             | Default value | Description |
| ------------------ | ---------------- | ------------- | ----------- |
| numberPrefix       | `string`         | `""`          | Return string prefix used by the `WUIFormat.numberToString()` and `Number.prototype.wuiToString()` methods. |
| numberSufix        | `string`         | `""`          | Return string suffix used by the `WUIFormat.numberToString()` and `Number.prototype.wuiToString()` methods. |
| thousandsSeparator | `string`         | `","`         | Thousands separator of the return string used by the `WUIFormat.numberToString()` and `Number.prototype.wuiToString()` methods. |
| decimalLength      | `number\|string` | `"auto"`      | Length of the decimal portion of the return string used by the `WUIFormat.numberToString()` and `Number.prototype.wuiToString()` methods. |
| decimalSeparator   | `string`         | `"."`         | Decimal separator of the return string used by the `WUIFormat.numberToString()` and `Number.prototype.wuiToString()` methods. |

### Methods

| Method          | Return type  | Description |
| --------------- | ------------ | ----------- |
| wuiSetDefaults  | `number`     | `wuiSetDefaults(options)`<br><br>Arguments:<br>**• options:** `object` *optional*, date options, according to the definition of **Default values** `<Date.prototype.wuiDefaults>`.<br><br>Updates the default values. |
| wuiToString     | `string`     | `wuiToString([options])`<br><br>Arguments:<br>**• options:** `Object` *optional*, formatting options.<br><br>Formats a number to string. |
| wuiToSizeString | `string`     | `wuiToSizeString()`<br><br>Formats a number to file size (B, KB, MB, TB). |
| wuiToModule11   | `string`     | `wuiToModule11(codeTen)`<br><br>Arguments:<br>**• codeTen:** `string`, character to replace the check digit if it is 10.<br><br>Calculates the module 11 check digit. |
| wuiToModule23   | `string`     | `wuiToModule23(map)`<br><br>Arguments:<br>**• map:** `string`, mapping string.<br><br>Calculates the module 23 check digit. |

## String Prototype Extensions `String.prototype`

### Defaults `String.prototype.wuiDefaults`

| Property           | Type     | Default value | Description |
| ------------------ | -------- | ------------- | ----------- |
| emailListSeparator | `string` | `","`         | Separator consisting of one or more characters used for the validation of mailing address lists. |
| phoneLength        | `number` | `10`          | Length required for validation of a telephone number. |
| phoneListSeparator | `string` | `","`         | Separator consisting of one or more characters used for the validation of telephone number lists. |
| urlListSeparator   | `string` | `","`         | Separator consisting of one or more characters used for the validation of URL address lists. |

### Methods

| Method               | Return type  | Description |
| -------------------- | ------------ | ----------- |
| wuiSetDefaults       | `string`     | `wuiSetDefaults(options)`<br><br>Arguments:<br>**• options:** `object` *optional*, date options, according to the definition of **Default values** `<Date.prototype.wuiDefaults>`.<br><br>Updates the default values. |
| wuiValidateDate      | `boolean`    | `wuiValidateDate([format])`<br><br>Arguments:<br>**• format:** `string` *optional*, expected date format (default value `"yyyy-mm-dd"`).<br><br>Validates a date in string format. |
| wuiValidateEmail     | `boolean`    | `wuiValidateEmail()`<br><br>Validates an email address. |
| wuiValidateEmailList | `boolean`    | `wuiValidateEmailList([separator])`<br><br>Arguments:<br>**• separator:** `string` *optional*, list separator character(s).<br><br>Validates a list of email addresses. |
| wuiValidatePhone     | `boolean`    | `wuiValidatePhone([length])`<br><br>Arguments:<br>**• length:** `number` *optional*, length of the telephone number.<br><br>Validates a phone number. |
| wuiValidatePhoneList | `boolean`    | `wuiValidatePhoneList([length, separator])`<br><br>Arguments:<br>**• length:** `number` *optional*, length of the telephone number.<br>**• separator:** `string` *optional*, list separator character(s).<br><br>Validates a list of phone numbers. |
| wuiValidateUrl       | `boolean`    | `wuiValidateUrl()`<br><br>Validates a URL address. |
| wuiValidateUrlList   | `boolean`    | `wuiValidateUrlList([separator])`<br><br>Arguments:<br>**• separator:** `string` *optional*, list separator character(s).<br><br>Validates a list of URLs. |
| wuiValidateIpv4      | `boolean`    | `wuiValidateIpv4()`<br><br>Validates an IPv4 address. |
| wuiValidateModule11  | `boolean`    | `wuiValidateModule11(codeTen)`<br><br>Arguments:<br>**• codeTen:** `string`, character to replace the check digit if it is 10.<br><br>Validate a string including the modulo 11 check digit. |
| wuiValidateModule23  | `boolean`    | `wuiValidateModule23(map)`<br><br>Arguments:<br>**• map:** `string`, mapping character string.<br><br>Validate a string including the modulo 23 check digit. |
| wuiValidateNid       | `boolean`    | `wuiValidateNid(countryCode)`<br><br>Arguments:<br>**• countryCode:** `string`, country code in ISO 3166-1 alpha-2 format with support for CL, PY and ES.<br><br>Validates a national identity document. |

## Date Prototype Extensions `Date.prototype`

### Defaults `Date.prototype.wuiDefaults`

| Property         | Type            | Default value           | Description |
| ---------------- | --------------- | ----------------------- | ----------- |
| utc              | `boolean`       | `false`                 | Indicate whether Coordinated Universal Time (UTC) should be used. |
| locale           | `string`        | `"en-US"`               | Locale code in `<ISO 639-1>-<ISO 3166-1 alpha-2>` format. For example: `es-CL`, `en-US`, `fr-FR`, etc. |
| dateFormat       | `string`        | `"yyyy-mm-dd"`          | Format of the date, as defined by **Date/time format parts**. |
| timeFormat       | `string`        | `"hh:MM:ss"`            | Format of the time, as defined by **Date/time format parts**. |
| datetimeFormat   | `string`        | `"yyyy-mm-dd hh:MM:ss"` | Format of the date and time, as defined by **Date/time format parts**. |
| formatDelimiters | `Array<string>` | `["[", "]"]`            | No text characters used to delimit fixed text in the format. These are removed when converting to a date object to string. |

### Date/time format parts

| Part | Description |
| ---- | ----------- |
| yyyy | Year in 4 digits format. |
| yy   | Year in 2 digits format. |
| mmmm | Month in full name format. |
| mmm  | Month in 3 initials format. |
| mm   | Month in 2 digits format. |
| m    | Month in integer number format. |
| dd   | Day of the month in 2 digits format. |
| d    | Day of the month in integer number format. |
| w    | Day of the week in integer number format, where Sunday is `0`. |
| DDDD | Day of the week in full name format. |
| DDD  | Day of the week in 3 initials format. |
| DD   | Day of the week in 2 initials format. |
| D    | Day of the week in integer number format. |
| hh   | Hour in 2 digits format. |
| h    | Hour in integer number format. |
| MM   | Minute in 2 digits format. |
| M    | Minute in integer number format. |
| ss   | Second in 2 digits format. |
| s    | Second in integer number format. |
| SSS  | Millisecond in 3 digits format. |
| S    | Millisecond in integer number format. |
| zzz  | Time zone offset in "±hh:MM" format. |
| zz   | Time zone offset in "±hhMM" format. |
| z    | Time zone offset in integer number format measured in minutes. |

### Predefined load formats

| Format                | Value |
| ---------------------    | ----- |
| `"datetime\|default"` | `Date.prototype.wuiDefaults.datetimeFormat` |
| `"numeric"`           | `"yyyymmddhhMMss"` |
| `"standard"`          | `"yyyy-mm-dd hh:MM:ss"` |
| `"longtime"`          | `"yyyy-mm-dd[T]hh:MM:ss"` |

### Predefined output formats

| Format                       | Value |
| ----------------------------    | ----- |
| `"datetime\|default"`        | `Date.prototype.wuiDefaults.datetimeFormat` |
| `"date"`                     | `Date.prototype.wuiDefaults.dateFormat` |
| `"time"`                     | `Date.prototype.wuiDefaults.timeFormat` |
| `"numeric"`                  | `"yyyymmddhhMMss"` |
| `"standard"`                 | `"yyyy-mm-dd hh:MM:ss"` |
| `"longtime"`                 | `"yyyy-mm-dd[T]hh:MM:ss"` |
| `"rfc3339\|atom"`            | `"yyyy-mm-dd[T]hh:MM:ss.SSS[Z]"` |
| `"rfc1123\|rfc2616\|cookie"` | `"DDD, dd-mmm-yyyy hh:MM:ss GMT"` |
| `"rfc3501"`                  | `"dd-mmm-yyyy hh:MM:ss tz"` |

### Methods

| Method         | Return type | Description |
| -------------- | ----------- | ----------- |
| wuiSetDefaults | `Date`      | `wuiSetDefaults(options)`<br><br>Arguments:<br>**• options:** `object` *optional*, date options, according to the definition of **Default values** `<Date.prototype.wuiDefaults>`.<br><br>Updates the default values. |
| wuiLoad        | `Date`      | `wuiLoad(value[, format[, options]])`<br><br>Arguments:<br>**• value:** `string`, date to load.<br>**• format:** `string` *optional*, date format (default value `"default"`).<br>**• options:** `object` *optional*, date options, according to the definition of **Default values** `<Date.prototype.wuiDefaults>`.<br><br>Load a date from a string. |
| wuiToString    | `string`    | `wuiToString([format[, options]])`<br><br>Arguments:<br>**• format:** `string` *optional*, date format (default value `"default"`).<br>**• options:** `object` *optional*, date options, according to the definition of **Default values** `<Date.prototype.wuiDefaults>`.<br><br>Converts a date to a string. |
| wuiDayName     | `string`    | `wuiDayName([day])`<br><br>Arguments:<br>**• day:** `number` *optional*, day of the week (default value `this.getDay()`).<br><br>Returns the name of the day of the week. |
| wuiMonthName   | `string`    | `wuiMonthName([month])`<br><br>Arguments:<br>**• month:** `number` *optional*, month (default value `this.getMonth()`).<br><br>Returns the name of the month. |

## Implementation

CSS Code:

```css
.output {
	position: relative;
	margin: 10px;
	font-family: monospace;
}
```

HTML head:

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

JS code:

```js
// Number methods

const numberInitDefaults = () => {
	//Number.prototype.wuiDefaults.numberPrefix = "";
	//Number.prototype.wuiDefaults.numberSufix = "";
	//Number.prototype.wuiDefaults.thousandsSeparator = ",";
	Number.prototype.wuiDefaults.decimalLength = 2;
	//Number.prototype.wuiDefaults.decimalSeparator = ".";
}

const numberFormatting = () => {
	const inputValue = 1234.567;
	const output = document.body.querySelector(".output.numberFormatting");
	const outputValue = inputValue.wuiToString({ numberPrefix: "$ " });
	output.innerHTML = "<pre>"
		+ `<b>Numeric formatting</b>\n`
		+ `input value  : ${inputValue}\n`
		+ `output value : ${outputValue}\n`
		+ "</pre>";
}

const numberSizeFormatting = () => {
	const inputValue = 1234.567;
	const output = document.body.querySelector(".output.numberSizeFormatting");
	const outputValue = inputValue.wuiToSizeString({});
	output.innerHTML = "<pre>"
		+ `<b>Numeric digital size formatting</b>\n`
		+ `input value  : ${inputValue}\n`
		+ `output value : ${outputValue}\n`
		+ "</pre>";
}

const numberModule11Formatting = () => {
	const inputValue = 1234567;
	const inputCode10 = "K";
	const output = document.body.querySelector(".output.numberModule11Formatting");
	const outputValue = inputValue.wuiToModule11(inputCode10);
	output.innerHTML = "<pre>"
		+ `<b>Numeric module 11 formatting</b>\n`
		+ `input value    : ${inputValue}\n`
		+ `input code 10  : ${inputCode10}\n`
		+ `output value   : ${outputValue}\n`
		+ "</pre>";
}

const numberModule23Formatting = () => {
	const inputValue = 1234567;
	const inputMap = "TRWAGMYFPDXBNJZSQVHLCKET";
	const output = document.body.querySelector(".output.numberModule23Formatting");
	const outputValue = inputValue.wuiToModule23(inputMap);
	output.innerHTML = "<pre>"
		+ `<b>Numeric module 23 formatting</b>\n`
		+ `input value    : ${inputValue}\n`
		+ `input map      : ${inputMap}\n`
		+ `output value   : ${outputValue}\n`
		+ "</pre>";
}

// String methods

const stringDateValidation = () => {
	const inputFormat = "yyyy-mm-dd";
	const inputValue = "2023-12-31";
	const output = document.body.querySelector(".output.stringDateValidation");
	const outputValid = inputValue.wuiValidateDate(inputFormat);
	output.innerHTML = "<pre>"
		+ `<b>Date validation</b>\n`
		+ `input format : ${inputFormat}\n`
		+ `input value  : ${inputValue}\n`
		+ `output valid : ${outputValid}\n`
		+ "</pre>";
}

const stringEmailValidation = () => {
	const inputValue = "test@example.com";
	const output = document.body.querySelector(".output.stringEmailValidation");
	const outputValid = inputValue.wuiValidateEmail();
	output.innerHTML = "<pre>"
		+ `<b>Email validation</b>\n`
		+ `input value  : ${inputValue}\n`
		+ `output valid : ${outputValid}\n`
		+ "</pre>";
}

const stringURLValidation = () => {
	const inputValue = "https://www.example.com";
	const output = document.body.querySelector(".output.stringURLValidation");
	const outputValid = inputValue.wuiValidateUrl();
	output.innerHTML = "<pre>"
		+ `<b>URL validation</b>\n`
		+ `input value  : ${inputValue}\n`
		+ `output valid : ${outputValid}\n`
		+ "</pre>";
}

const stringIPv4Validation = () => {
	const inputValue = "127.0.0.1";
	const output = document.body.querySelector(".output.stringIPv4Validation");
	const outputValid = inputValue.wuiValidateIpv4();
	output.innerHTML = "<pre>"
		+ `<b>IPv4 validation</b>\n`
		+ `input value  : ${inputValue}\n`
		+ `output valid : ${outputValid}\n`
		+ "</pre>";
}

const stringModule11Validation = () => {
	const inputValue = "1234567-4";
	const inputCode10 = "K";
	const output = document.body.querySelector(".output.stringModule11Validation");
	const outputValid = inputValue.wuiValidateModule11(inputCode10);
	output.innerHTML = "<pre>"
		+ `<b>Module 11 validation</b>\n`
		+ `input value   : ${inputValue}\n`
		+ `input code 10 : ${inputCode10}\n`
		+ `output valid  : ${outputValid}\n`
		+ "</pre>";
}

const stringModule23Validation = () => {
	const inputValue = "1234567-L";
	const inputMap = "TRWAGMYFPDXBNJZSQVHLCKET";
	const output = document.body.querySelector(".output.stringModule23Validation");
	const outputValid = inputValue.wuiValidateModule23(inputMap);
	output.innerHTML = "<pre>"
		+ `<b>Module 23 validation</b>\n`
		+ `input value  : ${inputValue}\n`
		+ `input map    : ${inputMap}\n`
		+ `output valid : ${outputValid}\n`
		+ "</pre>";
}

const stringNIDValidation = () => {
	const inputValue = "1.234.567-4";
	const inputCountryCode = "CL";
	const output = document.body.querySelector(".output.stringNIDValidation");
	const outputValid = inputValue.wuiValidateNid(inputCountryCode);
	output.innerHTML = "<pre>"
		+ `<b>NID validation</b>\n`
		+ `input value        : ${inputValue}\n`
		+ `input country code : ${inputCountryCode}\n`
		+ `output valid       : ${outputValid}\n`
		+ "</pre>";
}

// Date methods

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
		+ `<b>Local date formatting</b>\n`
		+ `input format  : ${inputFormat}\n`
		+ `input value   : ${inputValue}\n`
		+ `local date    : ${date}\n`
		+ `output format : ${outputFormat}\n`
		+ `output value  : ${outputValue}\n`
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
		+ `<b>UTC date formatting</b>\n`
		+ `input format  : ${inputFormat}\n`
		+ `input value   : ${inputValue}\n`
		+ `utc date      : ${date}\n`
		+ `output format : ${outputFormat}\n`
		+ `output value  : ${outputValue}\n`
		+ "</pre>";
}

// Init

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
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-format-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-format-basic&lang=en).

> [!IMPORTANT]
> La cuenta de GitHub `@wuiproject` se migró a `@wui-js` para que coincidiera con el nombre de la cuenta de NPM.

[English](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md) |
[Español](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md)
---

# wuijs-main-lib

<p align="center">
	<img src="https://github.com/wui-js/wuijs-main-lib/blob/main/imgs/logo/wuijs-main-logotype-color.svg" width="220" height="220">
</p>

|                       | |
| --------------------- | --- |
| **Nombre librería**   | `wuijs-main-lib` |
| **Versión librería**  | `0.16.1` ([Registro de Cambios](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/CHANGELOG-es.md)) |
| **Paquete npm**       | `@wui-js/main` ([npm](https://www.npmjs.com/package/@wui-js/main)) |
| **Versión documento** | `0.16.1.20261016.0` |
| **Licencia**          | `Licencia Apache 2.0` |
| **Autor**             | `Sergio E. Belmar V. <wuijs.project@gmail.com>` |
| **Repositorio**       | [https://github.com/wui-js/wuijs-main-lib](https://github.com/wui-js/wuijs-main-lib) |
| **Documentación**     | [https://docs.wuijs.dev](https://docs.wuijs.dev) |
| **Sitio web**         | [https://wuijs.dev](https://wuijs.dev) |

## Índice

*   [Descripción General](#overview)
	*   [Acerca del Proyecto WUI/JS](#project)
	*   [Tabla de Clases](#classtable)
	*   [Mapa de Directorios](#dirmap)
*   [Instalación](#install)
*   [Implementación](#implementation)
	*   [Implementación Estándar](#standard)
	*   [Implementación Abreviada](#abbreviated)
*   [Clases](#classes)
	*   [WUIHttp](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/http/wui-http-es.md)
	*   [WUICookie](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/cookie/wui-cookie-es.md)
	*   [WUIHead](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/head/wui-head-es.md)
	*   [WUIBody](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/body/wui-body-es.md)
	*   [WUILanguage](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/language/wui-language-es.md)
	*   [WUIScrolly](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/scrolly/wui-scrolly-es.md)
	*   [WUIIcon](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/icon/wui-icon-es.md)
	*   [WUIFade](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/fade/wui-fade-es.md)
	*   [WUILoader](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/loader/wui-loader-es.md)
	*   [WUITooltip](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/tooltip/wui-tooltip-es.md)
	*   [WUIModal](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/modal/wui-modal-es.md)
	*   [WUIPaging](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/paging/wui-paging-es.md)
	*   [WUISlider](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/slider/wui-slider-es.md)
	*   [WUITabs](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/tabs/wui-tabs-es.md)
	*   [WUIMenubar](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/menubar/wui-menubar-es.md)
	*   [WUIList](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/list/wui-list-es.md)
	*   [WUITable](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/table/wui-table-es.md)
	*   [WUIForm](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/form/wui-form-es.md)
	*   [WUIFormat](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/format/wui-format-es.md)
	*   [WUISelectpicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/selectpicker/wui-selectpicker-es.md)
	*   [WUIDatepicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/datepicker/wui-datepicker-es.md)
	*   [WUITimepicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/timepicker/wui-timepicker-es.md)
	*   [WUIColorpicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/colorpicker/wui-colorpicker-es.md)
	*   [WUIAvatarpicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/avatarpicker/wui-avatarpicker-es.md)
	*   [WUISwitch](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/switch/wui-switch-es.md)
	*   [WUIIntensity](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/intensity/wui-intensity-es.md)
	*   [WUIButton](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/button/wui-button-es.md)
*	[Buenas Prácticas de Codificación](#goodpractices)
*   [Demos](#demos) (CodeSandbox)

<a name="overview"></a>

## Descripción General

WUI/JS Main Lib, acrónimo del inglés *Web User Interface JavaScript library*, es una librería vainilla JavaScript/CSS de código abierto orientada a la implementación rápida de interfaces de usuario Web compuesta por 27 clases, las que pueden ser utilizadas de manera independiente o conjunta.

<a name="project"></a>

### Acerca del Proyecto WUI/JS

WUI/JS Main Lib es parte del proyecto WUI/JS, que consta actualmente de 4 repositorios:

-	[https://github.com/wui-js/wuijs-main-lib](https://github.com/wui-js/wuijs-main-lib)<br>
	Librería Principal UI.<br><br>
-	[https://github.com/wui-js/wuijs-environment-lib](https://github.com/wui-js/wuijs-environment-lib)<br>
	Librería Puente UI entre entornos web y motores de renderizado web nativos.<br><br>
-	[https://github.com/wui-js/wuijs-plugins-lib](https://github.com/wui-js/wuijs-plugins-lib)<br>
	Librería de Complementos UI.<br><br>
-	[https://github.com/wui-js/wuijs-demos](https://github.com/wui-js/wuijs-demos)<br>
	Repositorio con demos y ejemplos de uso de las librerías del proyecto.<br><br>

<a name="classtable"></a>

### Tabla de Clases

| Nombre Clase                                                                                                           | Version | Descripción |
| ---------------------------------------------------------------------------------------------------------------------- | :------:| ----------- |
| [WUIHttp](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/http/wui-http-es.md)                         | `0.2`   | Utilidades para la realización de peticiones HTTP mediante `XMLHttpRequest` y `fetch()`, con autenticación por token, cancelación, progreso de descarga y conversión del contenido de la respuesta. |
| [WUICookie](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/cookie/wui-cookie-es.md)                   | `0.5`   | Utilidades para el manejo de cookies. |
| [WUIHead](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/head/wui-head-es.md)                         | `0.5`   | Utilidades para el manejo de la cabecera HTML. |
| [WUIBody](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/body/wui-body-es.md)                         | `0.10`  | Utilidades para el manejo del cuerpo HTML. Permite la importación de contenido CSS/JS/HTML y facilita la implementación en entornos nativos móviles. |
| [WUILanguage](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/language/wui-language-es.md)             | `0.9`   | Utilidades para el manejo de interfaces con distintos lenguajes. Permite cargar archivos de idioma en formato JS o JSON y actualizar dinámicamente el contenido de los elementos HTML según el idioma. |
| [WUIScrolly](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/scrolly/wui-scrolly-es.md)                | `0.8`   | Utilidades para el manejo de animación de elementos HTML mediante el evento "onscroll" del cuerpo de la página HTML. |
| [WUIIcon](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/icon/wui-icon-es.md)                         | `0.14`  | Conjunto de íconos prediseñados y carga mediante CSS, para uso en interfaces. |
| [WUIFade](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/fade/wui-fade-es.md)                         | `0.7`   | Utilidades para control de salida y entrada con opacidad (fade-out y fade-in respectivamente) de elementos HTML. |
| [WUILoader](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/loader/wui-loader-es.md)                   | `0.7`   | Componente para la implementación de animaciones de carga. |
| [WUITooltip](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/tooltip/wui-tooltip-es.md)                | `0.6`   | Componente para la implementación de textos emergentes. |
| [WUIModal](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/modal/wui-modal-es.md)                      | `0.13`  | Componente para la implementación de cuadros de diálogo (tipo `message`) y ventanas emergentes (tipo `page`). |
| [WUIPaging](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/paging/wui-paging-es.md)                   | `0.12`  | Componente para la implementación de vistas accesibles paginadamente con transiciones animadas. |
| [WUISlider](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/slider/wui-slider-es.md)                   | `0.10`  | Componente para la implementación de presentaciones de diapositivas controladas por arrastre de ratón/táctil y/o por evento. |
| [WUITabs](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/tabs/wui-tabs-es.md)                         | `0.7`   | Componente para la implementación de vistas accesibles mediante selección por pestaña. |
| [WUIMenubar](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/menubar/wui-menubar-es.md)                | `0.10`  | Componente para la implementación de barras de menú. |
| [WUIList](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/list/wui-list-es.md)                         | `0.12`  | Componente para la implementación de listas de datos y botoneras para cada fila de manera opcional. |
| [WUITable](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/table/wui-table-es.md)                      | `0.13`  | Componente para la implementación de tablas de datos. A diferencia del componente `WUIList`, el componente `WUITable` incluye una cabecera de columnas. |
| [WUIForm](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/form/wui-form-es.md)                         | `0.15`  | Componente para la implementación de formularios de datos. Este componente permite la implementación de elementos HTML de entrada de datos tales como `<input>`, `<select>` y `<textarea>` y objetos de la librería WUI como `WUISelectpicker`, `WUIDatepicker`, `WUITimepicker`, `WUIColorpicker`, `WUISwitch`, `WUIIntensity` y `WUIButton`. |
| [WUIFormat](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/format/wui-format-es.md)                   | `0.7`   | Utilidades para manejo y validación de formatos de datos de tipo `string`, `number` y `Date`. |
| [WUISelectpicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/selectpicker/wui-selectpicker-es.md) | `0.15`  | Componente para la implementación de entradas de datos de tipo lista de selección múltiple o excluyente basada en el elemento HTML `<select>`. |
| [WUIDatepicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/datepicker/wui-datepicker-es.md)       | `0.14`  | Componente para la implementación de entradas de datos de tipo fecha basada en el elemento HTML `<input type="date">`. |
| [WUITimepicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/timepicker/wui-timepicker-es.md)       | `0.13`  | Componente para la implementación de entradas de datos de tipo hora basada en el elemento HTML `<input type="time">`. |
| [WUIColorpicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/colorpicker/wui-colorpicker-es.md)    | `0.14`  | Componente para la implementación de entradas de datos de tipo selector de color basada en el elemento HTML `<input type="color">`. |
| [WUIAvatarpicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/avatarpicker/wui-avatarpicker-es.md) | `0.2`   | Componente para la implementación de entradas de datos de tipo imagen de avatar, con carga de archivo, encuadre por arrastre y escalado, basada en los elementos HTML `<input type="file">` y `<input type="range">`. |
| [WUISwitch](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/switch/wui-switch-es.md)                   | `0.10`  | Componente para la implementación de entradas de datos de tipo casilla de verificación basada en el elemento HTML `<input type="checkbox">`. |
| [WUIIntensity](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/intensity/wui-intensity-es.md)          | `0.7`   | Componente para la implementación de entradas de datos de tipo selector de intensidad de 4 niveles: nada, bajo, medio y alto basada en el elemento HTML `<input type="range">`. |
| [WUIButton](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/button/wui-button-es.md)                   | `0.16`  | Componente para la implementación de botones basada en el elemento HTML `<button>`. |

<a name="dirmap"></a>

### Mapa de Directorios

```bash
wuijs-main-lib/
├── docs/
├── imgs/
│   ├── icons/
│   └── logo/
├── legacy/
│   └── wui-js/
│       └── main/
├── src/
│   └── wui-js/
│       └── main/
├── tools/
└── tests/
```

| Ruta                                                                                         | Descripción |
| -------------------------------------------------------------------------------------------- | ----------- |
| [docs](https://github.com/wui-js/wuijs-main-lib/tree/main/docs/)                             | Documentación. |
| [imgs](https://github.com/wui-js/wuijs-main-lib/tree/main/imgs/)                             | Imágenes utilizadas en la documentación. |
| [imgs/icons](https://github.com/wui-js/wuijs-main-lib/tree/main/imgs/icons/)                 | Íconos generados por la herramienta `/tools/svg-icon-maker.py` a partir de la clase WUIIcon. |
| [imgs/logo](https://github.com/wui-js/wuijs-main-lib/tree/main/imgs/logo/)                   | Logotipo e isotipo del proyecto en formato SVG y PNG. |
| [legacy](https://github.com/wui-js/wuijs-main-lib/tree/main/legacy/)                         | Fuentes obsoletas con versiones anteriores. |
| [legacy/wui-js](https://github.com/wui-js/wuijs-main-lib/tree/main/legacy/wui-js/)           | Directorio del proyecto WUI/JS. |
| [legacy/wui-js/main](https://github.com/wui-js/wuijs-main-lib/tree/main/legacy/wui-js/main/) | Librería WUI/JS Main (versiones anteriores). |
| [src](https://github.com/wui-js/wuijs-main-lib/tree/main/src/)                               | Fuentes principales de la última versión. |
| [src/wui-js](https://github.com/wui-js/wuijs-main-lib/tree/main/src/wui-js)                  | Directorio del proyecto WUI/JS. |
| [src/wui-js/main](https://github.com/wui-js/wuijs-main-lib/tree/main/src/wui-js/main/)       | Librería WUI/JS Main. |
| [tools](https://github.com/wui-js/wuijs-main-lib/tree/main/tools/)                           | Herramientas complementarias. |
| [tests](https://github.com/wui-js/wuijs-main-lib/tree/main/tests/)                           | Scripts de testeo. |

<a name="install"></a>

## Instalación

**Opción 1: Instalar desde fuente**

Para instalar la librería WUI/JS desde GitHub, se debe clonar el repositorio oficial en GitHub (`wui-js/wuijs-main-lib`).
Suponiendo que el proyecto donde se implementará tenga un directorio de código fuente `./src` y, dentro de este, un directorio de librerías `./src/libraries`, debe escribir lo siguiente en la terminal:

```bash
git clone --branch v0.16.1 https://git@github.com/wui-js/wuijs-main-lib.git
cp -r ./wuijs-main-lib/src/wui-js/ ../src/libraries/
```

Opcionalmente puede ser descargada desde los mismos repositorios en formato ZIP.

```bash
wget https://github.com/wui-js/wuijs-main-lib/archive/refs/heads/main.zip
unzip main.zip
cp -r ./wuijs-main-lib-main/src/wui-js/ ../src/libraries/
```

**Opción 2: Instalar mediante npm**

Para instalar la librería WUI/JS mediante npm:

```bash
npm i @wui-js/main
```

Los recursos quedarán disponibles en la ruta `./node_modules/@wui-js/main`.

<a name="implementation"></a>

## Implementación

La librería WUI puede incluirse en un proyecto de dos formas: en modo estándar, enlazando individualmente los archivos CSS y JS de cada componente, o en modo abreviado, mediante el script `wui.js` que gestiona la carga automática de los componentes indicados.

> [!NOTE]
> El uso obligatorio del archivo de configuración `wui.css` fue deprecado a partir de la versión `0.6.0`.

<a name="standard"></a>

### Implementación Estándar

Para habilitar todas las clases se deben implementar las dependencias CSS y JS de las librerías en la cabecera HTML de la página web.

Suponiendo que las librerías se encuentren en el directorio `/libraries/`, la cabecera HTML queda de la forma:

Código HTML:

```html
<!DOCTYPE html>
<html>
	<head>
		<title></title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover">
		<meta name="application-name" content="">
		<meta name="theme-color" content="">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/scrolly/wui-scrolly-0.8.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/scrolly/wui-scrolly-0.8.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.14.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.14.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/loader/wui-loader-0.7.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/loader/wui-loader-0.7.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tooltip/wui-tooltip-0.6.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tooltip/wui-tooltip-0.6.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/modal/wui-modal-0.13.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/modal/wui-modal-0.13.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/paging/wui-paging-0.12.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/paging/wui-paging-0.12.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/slider/wui-slider-0.10.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/slider/wui-slider-0.10.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tabs/wui-tabs-0.7.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/tabs/wui-tabs-0.7.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/menubar/wui-menubar-0.10.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/menubar/wui-menubar-0.10.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/list/wui-list-0.12.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/list/wui-list-0.12.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/table/wui-table-0.13.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/table/wui-table-0.13.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/form/wui-form-0.15.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/form/wui-form-0.15.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/selectpicker/wui-selectpicker-0.15.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/selectpicker/wui-selectpicker-0.15.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/datepicker/wui-datepicker-0.14.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/datepicker/wui-datepicker-0.14.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/timepicker/wui-timepicker-0.13.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/timepicker/wui-timepicker-0.13.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/colorpicker/wui-colorpicker-0.14.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/colorpicker/wui-colorpicker-0.14.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/avatarpicker/wui-avatarpicker-0.2.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/avatarpicker/wui-avatarpicker-0.2.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/switch/wui-switch-0.10.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/switch/wui-switch-0.10.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/intensity/wui-intensity-0.7.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/intensity/wui-intensity-0.7.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/button/wui-button-0.16.root.css">
		<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/button/wui-button-0.16.css">
		<script type="text/javascript" src="/libraries/wui-js/main/http/wui-http-0.2.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/cookie/wui-cookie-0.5.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/head/wui-head-0.5.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/body/wui-body-0.10.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/language/wui-language-0.9.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/scrolly/wui-scrolly-0.8.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/icon/wui-icon-0.14.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/fade/wui-fade-0.7.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/loader/wui-loader-0.7.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/tooltip/wui-tooltip-0.6.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/modal/wui-modal-0.13.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/paging/wui-paging-0.12.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/slider/wui-slider-0.10.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/tabs/wui-tabs-0.7.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/menubar/wui-menubar-0.10.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/list/wui-list-0.12.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/table/wui-table-0.13.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/form/wui-form-0.15.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/format/wui-format-0.7.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/selectpicker/wui-selectpicker-0.15.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/datepicker/wui-datepicker-0.14.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/timepicker/wui-timepicker-0.13.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/colorpicker/wui-colorpicker-0.14.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/avatarpicker/wui-avatarpicker-0.2.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/switch/wui-switch-0.10.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/intensity/wui-intensity-0.7.js"></script>
		<script type="text/javascript" src="/libraries/wui-js/main/button/wui-button-0.16.js"></script>
	</head>
	<body>
	</body>
</html>
```

> [!NOTE]
> Esta implementación supone la instalación vía GitHub.
> Si se instaló vía NPM el llamado a los recursos es mediante la ruta `/node_modules/wui/`.
> ```html
> <script src="node_modules/@wui-js/main/button/wui-button-0.16.js"></script>
> ```

> [!TIP]
> En caso que se requiere customizar el diseño, se puede agregar un archivo CSS con la personalización de las variables CSS de los archivos `*.root.css `que se necesiten.
> En el estándar del proyecto WUI/JS a este archivo se le llama `wui.root.css`.

<a name="abbreviated"></a>

### Implementación Abreviada

Desde la versión 0.4.0 se agregó un cargador de recursos para la implementación abreviada de las librerías WUI.
Este cargador permite integrar todas las librerías WUI en una página web, ya sea de manera completa o parcial, sin requerir la inclusión manual de los archivos JavaScript y CSS correspondientes a cada librería.

```html
<!DOCTYPE html>
<html>
	<head>
		<title></title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover">
		<meta name="application-name" content="">
		<meta name="theme-color" content="">
		<link type="text/css" rel="stylesheet" href="./settings/wui.root.css">
		<script type="text/javascript" src="/libraries/wui-js/main/wui.js?v=0.16.1"></script>
	</head>
	<body>
	</body>
</html>
```

Para especificar la versión de la librería WUI, se debe agregar el parámetro `version` (o su alias corto `v`) en la URL del archivo `wui.js`.
Si no se especifica el parámetro `version` se asumirá la versión instalada.

> [!TIP]
> Para una correcta implementación abreviada revise la sección [Buenas Prácticas de Codificación](#goodpractices).

> [!TIP]
> Para una implementación simplificada del archivo `wui.root.css`, opcionalmente se puede utilizar el plugin [WUIPluginThemes](https://github.com/wui-js/wuijs-plugins-lib?tab=readme-ov-file#wuipluginthemes) proporcionado en la librería [wuijs-plugins-lib](https://github.com/wui-js/wuijs-plugins-lib).

Opcionalmente se pueden incluir las librerías de manera individual, para ello se debe agregar mediante el parámetro `class` (o su alias corto `c`) en la URL del archivo `wui.js`.
Los nombres de las librerías pasadas en el parámetro `class` no deben contener el sufijo de versión (`-x.x`) ya que la versión será definida automáticamente por el script de carga simple.

```html
<script type="text/javascript" src="/libraries/wui-js/main/wui.js?v=0.16.1&c=selectpicker,switch"></script>
```

> [!NOTE]
> El parámetro `class` no distingue entre mayúsculas y minúsculas.

Adicionalmente se puede omitir la carga de los archivos `root.css` de cada librería agregando el parámetro `root` con el valor `0` (cero) en la URL del archivo `wui.js`.

```html
<script type="text/javascript" src="/libraries/wui-js/main/wui.js?v=0.16.1&c=selectpicker,switch&r=0"></script>
```

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-resource-loader-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-resource-loader-basic&lang=es).

<a name="classes"></a>

## Clases

La documentación de cada clase está en un documento propio, en el directorio [`docs/classes/`](https://github.com/wui-js/wuijs-main-lib/tree/main/docs/classes):

*   <a name="wui-http"></a>[WUIHttp](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/http/wui-http-es.md)
*   <a name="wui-cookie"></a>[WUICookie](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/cookie/wui-cookie-es.md)
*   <a name="wui-head"></a>[WUIHead](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/head/wui-head-es.md)
*   <a name="wui-body"></a>[WUIBody](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/body/wui-body-es.md)
*   <a name="wui-language"></a>[WUILanguage](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/language/wui-language-es.md)
*   <a name="wui-scrolly"></a>[WUIScrolly](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/scrolly/wui-scrolly-es.md)
*   <a name="wui-icon"></a>[WUIIcon](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/icon/wui-icon-es.md)
*   <a name="wui-fade"></a>[WUIFade](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/fade/wui-fade-es.md)
*   <a name="wui-loader"></a>[WUILoader](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/loader/wui-loader-es.md)
*   <a name="wui-tooltip"></a>[WUITooltip](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/tooltip/wui-tooltip-es.md)
*   <a name="wui-modal"></a>[WUIModal](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/modal/wui-modal-es.md)
*   <a name="wui-paging"></a>[WUIPaging](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/paging/wui-paging-es.md)
*   <a name="wui-slider"></a>[WUISlider](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/slider/wui-slider-es.md)
*   <a name="wui-tabs"></a>[WUITabs](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/tabs/wui-tabs-es.md)
*   <a name="wui-menubar"></a>[WUIMenubar](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/menubar/wui-menubar-es.md)
*   <a name="wui-list"></a>[WUIList](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/list/wui-list-es.md)
*   <a name="wui-table"></a>[WUITable](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/table/wui-table-es.md)
*   <a name="wui-form"></a>[WUIForm](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/form/wui-form-es.md)
	*   <a name="wui-form-buildhtml"></a>[Construcción declarativa con `buildHtml()`](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/form/wui-form-es.md#wui-form-buildhtml)
*   <a name="wui-format"></a>[WUIFormat](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/format/wui-format-es.md)
*   <a name="wui-selectpicker"></a>[WUISelectpicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/selectpicker/wui-selectpicker-es.md)
*   <a name="wui-datepicker"></a>[WUIDatepicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/datepicker/wui-datepicker-es.md)
*   <a name="wui-timepicker"></a>[WUITimepicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/timepicker/wui-timepicker-es.md)
*   <a name="wui-colorpicker"></a>[WUIColorpicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/colorpicker/wui-colorpicker-es.md)
*   <a name="wui-avatarpicker"></a>[WUIAvatarpicker](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/avatarpicker/wui-avatarpicker-es.md)
*   <a name="wui-switch"></a>[WUISwitch](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/switch/wui-switch-es.md)
*   <a name="wui-intensity"></a>[WUIIntensity](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/intensity/wui-intensity-es.md)
*   <a name="wui-button"></a>[WUIButton](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/classes/button/wui-button-es.md)

<a name="goodpractices"></a>

## Buenas Prácticas de Codificación

### 1. Iniciar HTML5 responsivo

Todos los componentes WUI están diseñados para funcionar en dispositivos móviles y de escritorio. Por lo tanto, se recomienda iniciar el HTML5 responsivo.

```css
html,
body {
	height: 100%;
	margin: 0;
	padding: 0;
}
```

```html
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover">
	...
</head>
<body>
	...
</body>
</html>
```

### 2. Personalización de los componentes

Los componentes WUI pueden ser personalizados mediante CSS. Para ello, se recomienda la utilización de un archivo CSS independiente donde se carguen las variables CSS de los componentes.

```css
:root {

	/* wui-scrolly */

	--wui-scrolly-paging-bgcolor: #f6f6fa;

	/* wui-icon */

	--wui-icon-bgcolor-out: rgb(from #353a40 r g b / 70%);
	--wui-icon-bgcolor-over: #353a40;

	/* ... */
}
```

### 3. Inicialización de instancias

Para evitar problemas en los tiempos de ejecución, se recomienda inicializar las instancias u objetos WUI una vez que se hayan cargado los elementos del DOM.

```js
const init = () => {
	const form = new WUIForm({ ... });
	form.init();
}

window.addEventListener("DOMContentLoaded", init);
```

Si se está utilizando [Implementación Abreviada](#abbreviated), el evento `DOMContentLoaded` debe reemplazarse por `wuiLoad`.

```js
window.addEventListener("wuiLoad", init);
```

> [!IMPORTANT]
> Este evento funciona únicamente con el script cargador de recursos `wui.js`.

### 4. Uso de componentes referenciados

Cuando una vista posee varios componentes WUI de la misma o distintas clases, se recomienda referenciarlos mediante un array en el código JS para manejarlos de manera coherente.

```js
const wuiComponents = [];

const init = () => {
	wuiComponents.form1 = new WUIForm({ ... });
	wuiComponents.button1 = new WUIButton({ ... });
	wuiComponents.button2 = new WUIButton({ ... });
	Object.values(wuiComponents).forEach((component) => {
		component.init();
	});
}

window.addEventListener("DOMContentLoaded", init);
```

<a name="demos"></a>

## Demos

Esta sección recoge los ejemplos de las implementaciones de la documentación y otros demos complementarios, todos disponibles en el repositorio **WUI/JS Demos** [https://github.com/wui-js/wuijs-demos](https://github.com/wui-js/wuijs-demos).

1.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-resource-loader-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-resource-loader-basic&lang=es)<br>
	Esta demostración muestra el uso del script cargador de recursos de WUI.<br><br>
2.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-http-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-http-basic&lang=es)<br>
	Esta demostración muestra el uso de las funciones básicas de WUIHttp.<br><br>
3.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-cookie-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-cookie-basic&lang=es)<br>
	Esta demostración muestra el uso de la funcionalidad básica de WUICookie.<br><br>
4.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-body-import&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-body-import&lang=es)<br>
	Esta demostración muestra el uso de la funcionalidad de importación de WUIBody.<br><br>
5.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-language-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-language-basic&lang=es)<br>
	Esta demostración muestra el uso de la funcionalidad básica de WUILanguage.<br><br>
6.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-scrolly-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-scrolly-basic&lang=es)<br>
	Esta demostración muestra el uso de la funcionalidad básica de WUIScrolly.<br><br>
7.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-icon-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-icon-basic&lang=es)<br>
	Esta demostración muestra el uso de la funcionalidad básica de WUIIcon.<br><br>
8.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-fade-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-fade-basic&lang=es)<br>
	Esta demostración muestra el uso de la funcionalidad básica de WUIFade.<br><br>
9.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-loader-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-loader-basic&lang=es)<br>
	Esta demostración muestra el uso de la funcionalidad básica de WUILoader.<br><br>
10.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-tooltip-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-tooltip-basic&lang=es)<br>
	Esta demostración muestra el uso de la funcionalidad básica de WUITooltip.<br><br>
11.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-modal-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-modal-basic&lang=es)<br>
	Esta demostración muestra el uso de la funcionalidad básica de WUIModal.<br><br>
12.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-paging-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-paging-basic&lang=es)<br>
	Esta demostración muestra el uso de la funcionalidad de submenú de WUIPaging.<br><br>
13.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-slider-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-slider-basic&lang=es)<br>
	Esta demostración muestra el uso de la funcionalidad de submenú de WUISlider.<br><br>
14.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-tabs-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-tabs-basic&lang=es)<br>
	Esta demostración muestra el uso de la funcionalidad básica de WUITabs.<br><br>
15.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-menubar-submenu&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-menubar-submenu&lang=es)<br>
	Esta demostración muestra el uso de la funcionalidad de submenú de WUIMenubar.<br><br>
16.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-list-paging-buttongroup&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-list-paging-buttongroup&lang=es)<br>
	Esta demostración muestra el uso de la funcionalidad de paginación de WUIList mediante botones HTML.<br>
	El grupo de botones laterales con tapa extraíble está configurado con dos botones: uno asociado con una posible función de edición y el otro con la de eliminación.<br>
	Los datos de la lista se cargan directamente durante la creación del componente.<br><br>
17.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-table-paging&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-table-paging&lang=es)<br>
	Esta demostración muestra el uso de la función de paginación de WUITable mediante botones HTML.<br>
	Los datos de la tabla se cargan directamente durante la creación del componente.<br><br>
18.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-form-fillstyle&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-form-fillstyle&lang=es)<br>
	Esta demostración muestra el uso de WUIForm con estilo de relleno y entradas HTML nativas.<br><br>
19.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-form-linestyle&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-form-linestyle&lang=es)<br>
	Esta demostración muestra el uso de WUIForm con estilo de línea y entradas HTML nativas.<br><br>
20.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-form-wuiinputs&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-form-wuiinputs&lang=es)<br>
	Esta demostración muestra el uso de WUIForm con estilo de relleno y componentes de entrada WUI.<br><br>
21.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-format-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-format-basic&lang=es)<br>
	Esta demostración muestra el uso de WUIFormat para el formato de números, cadenas y fechas.<br><br>
22.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-selectpicker-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-selectpicker-basic&lang=es)<br>
	Esta demostración muestra el uso de las funciones básicas de WUISelectpicker.<br><br>
23.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-datepicker-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-datepicker-basic&lang=es)<br>
	Esta demostración muestra el uso de las funciones básicas de WUIDatepicker.<br><br>
24.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-timepicker-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-timepicker-basic&lang=es)<br>
	Esta demostración muestra el uso de las funciones básicas de WUITimepicker.<br><br>
25.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-colorpicker-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-colorpicker-basic&lang=es)<br>
	Esta demostración muestra el uso de las funciones básicas de WUIColorpicker.<br><br>
26.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-avatarpicker-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-avatarpicker-basic&lang=es)<br>
	Esta demostración muestra el uso de las funciones básicas de WUIAvatarpicker.<br><br>
27.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-switch-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-switch-basic&lang=es)<br>
	Esta demostración muestra el uso de las funciones básicas de WUISwitch.<br><br>
28.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-intensity-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-intensity-basic&lang=es)<br>
	Esta demostración muestra el uso de las funciones básicas de WUIIntensity.<br><br>
29.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-button-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-button-basic&lang=es)<br>
	Esta demostración muestra el uso de las funciones básicas de WUIButton.<br><br>

> [!NOTE]
> Todos los demos del repositorio [wuijs-demos](https://github.com/wui-js/wuijs-demos) se pueden revisar en CodeSandbox en el enlace [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/wui](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/wui).

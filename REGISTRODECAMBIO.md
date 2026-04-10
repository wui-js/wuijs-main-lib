# Registro de Cambio

## [v0.5.1] - 2026-04-09

Características:

1. Se actualizó el cargador de recursos `wui.js`.

## [v0.5.0] - 2026-04-09

Características:

> [!NOTE]
> Se cambió el dueño del repositorio oficial de **@wuijsproject** a **@wui-js** con el fin de tener integridad entre las cuentas en GitHub y NPM.

1. Habilitación de instalación vía NPM.
2. Cambio de nombre del repositorio de `wuijs-lib` a `wuijs-main-lib` para que las rutas de los modos de instalación vía GitHub y NPM fuesen análogas.
3. Cambio de nombre del directorio fuente de `src/wui` a `src/wui-js/main` para dar soporte a integración con otras librerías del proyecto WUI/JS.
4. Se actualizó el cargador de recursos `wui.js`.

## [v0.4.0] - 2026-03-20

Características:

1. Se renombraron los directorios y archivos fuente a minúscula (ej: `src/WUI/Slider/WUISlider-0.3.js` → `src/wui/slider/wui-slider-0.4.js`).
2. Se agregó el cargador de recursos `wui.js`.
3. Actualización versión clase WUICookie a 0.4.
	- Se renombró el directorio y archivos a minúscula.
	- Se corrigió error en el método `get()` donde un espacio inicial en la cadena de la cookie causaba un desplazamiento de índice, retornando `=valor` en lugar de `valor`.
4. Actualización versión clase WUIHead a 0.3.
	- Se renombró el directorio y archivos a minúscula.
5. Actualización versión clase WUIBody a 0.3.
	- Se renombró el directorio y archivos a minúscula.
6. Actualización versión clase WUILanguage a 0.3.
	- Se renombró el directorio y archivos a minúscula.
7. Actualización versión clase WUIScrolly a 0.4.
	- Se renombró el directorio y archivos a minúscula.
8. Actualización versión clase WUIIcon a 0.2.
	- Se renombró el directorio y archivos a minúscula.
	- Se corrigió error tipográfico en los nombres de clases CSS de iconos: `excamation` → `exclamation` (clases afectadas: `exclamation-line`, `exclamation-lg-line`, `exclamation-circle-line`, `exclamation-circle-fill`, `exclamation-triangle-line`, `exclamation-triangle-fill`).
9. Actualización versión clase WUIFade a 0.2.
	- Se renombró el directorio y archivos a minúscula.
10. Actualización versión clase WUILoader a 0.3.
	- Se renombró el directorio y archivos a minúscula.
11. Actualización versión clase WUITooltip a 0.2.
	- Se renombró el directorio y archivos a minúscula.
12. Actualización versión clase WUIModal a 0.3.
	- Se renombró el directorio y archivos a minúscula.
	- Se agregó un elemento hijo `.overlay` dedicado para gestionar el fondo de superposición, reemplazando el enfoque anterior basado en la clase CSS `.over`.
	- Se corrigió la animación del modal de página en móvil, corrigiendo el cálculo de la posición `top` del modal subyacente al apilar modales.
	- Se corrigió error de la clase `.slide` en modales de página en móvil en la media query responsive.
13. Actualización versión clase WUIPaging a 0.3.
	- Se renombró el directorio y archivos a minúscula.
14. Actualización versión clase WUISlider a 0.4.
	- Se renombró el directorio y archivos a minúscula.
15. Actualización versión clase WUITabs a 0.2.
	- Se renombró el directorio y archivos a minúscula.
16. Actualización versión clase WUIMenubar a 0.2.
	- Se renombró el directorio y archivos a minúscula.
17. Actualización versión clase WUIList a 0.3.
	- Se renombró el directorio y archivos a minúscula.
18. Actualización versión clase WUITable a 0.4.
	- Se renombró el directorio y archivos a minúscula.
19. Actualización versión clase WUIForm a 0.4.
	- Se renombró el directorio y archivos a minúscula.
20. Actualización versión clase WUIFormat a 0.3.
	- Se renombró el directorio y archivos a minúscula.
21. Actualización versión clase WUISelectpicker a 0.3.
	- Se renombró el directorio y archivos a minúscula.
22. Actualización versión clase WUIDatepicker a 0.3.
	- Se renombró el directorio y archivos a minúscula.
23. Actualización versión clase WUITimepicker a 0.3.
	- Se renombró el directorio y archivos a minúscula.
24. Actualización versión clase WUIColorpicker a 0.3.
	- Se renombró el directorio y archivos a minúscula.
25. Actualización versión clase WUISwitch a 0.4.
	- Se renombró el directorio y archivos a minúscula.
26. Actualización versión clase WUIIntensity a 0.2.
	- Se renombró el directorio y archivos a minúscula.
27. Actualización versión clase WUIButton a 0.3.
	- Se renombró el directorio y archivos a minúscula.

## [v0.3.0] - 2026-02-09

Características:

1. Cambio de nombre clase WUICheckbox versión 0.2 a WUISwitch versión 0.3.
2. Actualización versión clase WUICookie a 0.3.
	- Se agregó el método `encode()`.
	- Se agregó un retorno tipo `cadena` al método `set()` con la cookie codificada.
	- Se reemplazó la sentencia `max-age` por `expires` en la codificación de la cookie.
3. Actualización versión clase WUIScrolly a 0.3.
	- Se cambié el nombre de la variable CSS `--wui-scrolly-paging-bgcolor` a `--wui-scrolly-paging-bgcolor-hidden`.
	- Se agregó la variable CSS `--wui-scrolly-paging-bgcolor-visible`.
4. Actualización versión clase WUISlider a 0.3.
	- Se cambié el nombre de la variable CSS `--wui-slider-dot-bgcolor` a `--wui-slider-paging-bgcolor-hidden`.
	- Se cambié el nombre de la variable CSS `--wui-slider-dot-bgcolor-selected` a `--wui-slider-paging-bgcolor-visible`.
	- Se eliminó la variable CSS `--wui-slider-dots-bgcolor`.
5. Actualización versión clase WUITable a 0.3.
	- Se agregó propiedad `resetPaging`.
	- Se agregó columna de relleno para mantener el ancho de la tabla.
6. Actualización versión clase WUIForm a 0.3.
	- Se agregó compatibilidad con WUISwitch versión 0.3.
	- Se agregó el estilo de formulario "fill".
7. Actualización versión clase WUIFormat a 0.3.
	- Se agregó el método `wuiDayName()` al tipo de dato `Date`.
	- Se agregó el método `wuiMonthName()` al tipo de dato `Date`.

## [v0.2.0] - 2025-12-01

Características:

1. Inclusión de [Documentación](./LEEME.md).
2. Se agregó clase WUIMenubar versión 0.1.
3. Se agregó clase WUIIntensity versión 0.1.
4. Actualización versión clase WUICookie a 0.2.
	- Se agregó soporte para valores privados.
	- Se agregó el método `remove()`, que permite eliminar una cookie mediante su nombre.
	- Se corrigió error en el método público `remove()`.
5. Actualización versión clase WUIHead a 0.2.
	- Se mejoró el código para evitar XSS attacks.
	- Se corrigió error para asegurar referencia a elementos del DOM.
6. Actualización versión clase WUIBody a 0.2.
	- Se agregó soporte para valores privados.
7. Actualización versión clase WUILanguage a 0.2.
	- Se cambió el valor por defecto de la propiedad `lang` a `"en"`.
	- Se agregó soporte para valores privados.
	- Se agregó la propiedad `mode`, para dar soporte a archivo de lenguaje en formato JS y JSON.
	- Se agregó el método `refresh()`, que permite actualizar el contenido de un elemento HTML específico.
	- Se eliminó la constante global `languajes` y se reemplazó por una definición variable, opcional y externa a la clase, que es asignada mediante la propiedad `onLoad()` (ver ejemplo de implementación en [Documentación](./LEEME.md?#wuiLanguage)).
8. Actualización versión clase WUIScrolly a 0.2.
	- Se agregó soporte para valores privados.
	- Se agregó el alias `.fadein-top` a la clase de estilo `fadein-up`.
	- Se agregó la propiedad `direction`.
	- Se agregaron los argumentos `sceneIndex`, `sceneStep` y `sceneProgress` a la propuedad `onMove()`.
9. Actualización versión clase WUILoader a 0.2.
	- Se agregó soporte para valores privados.
	- Se corrigió error en el método `init()`.
10. Actualización versión clase WUIModal a 0.2.
	- Se agregó soporte para valores privados.
	- Se agregó el método `destroy()`.
	- Se corrigió error en el evento de arrastre al maximizar y cerrar un modal con estilo página usando el evento `mousedown`, habilitándo únicamente cuando el botón izquierdo permanece presionado.
11. Actualización versión clase WUIPaging a 0.2.
	- Se agregó soporte para valores privados.
	- Se agregó el método `destroy()`.
12. Actualización versión clase WUISlider a 0.2.
	- Se agregó soporte para valores privados.
	- Se corrigió error en el evento de arrastre al desplazar una diapositiva usando el evento `mousedown`, habilitándo únicamente cuando el botón izquierdo permanece presionado.
	- Se corrigió error en el método `load()`.
13. Actualización versión clase WUIList a 0.2.
	- Se agregó soporte para paginado.
	- Se agregó el método `destroy()`.
	- Se agregó la variable CSS `--wui-list-shadowcolor`.
	- Se renombró el método `first()` a `firstPage()`.
	- Se renombró el método `last()` a `lastPage()`.
	- Se renombró el método `prev()` a `prevPage()`.
	- Se renombró el método `next()` a `nextPage()`.
	- Se renombró el método `isPrevEnable()` a `hasPrevPage()`.
	- Se renombró el método `isNextEnable()` a `hasNextPage()`.
	- Se corrigió error en el evento de arrastre al aperturar y cerrar la botonoera de cada fila usando el evento `mousedown`, habilitándo únicamente cuando el botón izquierdo permanece presionado.
14. Actualización versión clase WUITable a 0.2.
	- Se agregó soporte para valores privados.
	- Se agregó soporte para formato CSS claro/oscuro.
	- Se agregó el método `destroy()`.
	- Se agregó la variable CSS `--wui-table-shadowcolor`.
	- Se renombró el método `first()` a `firstPage()`.
	- Se renombró el método `last()` a `lastPage()`.
	- Se renombró el método `prev()` a `prevPage()`.
	- Se renombró el método `next()` a `nextPage()`.
	- Se renombró el método `isPrevEnable()` a `hasPrevPage()`.
	- Se renombró el método `isNextEnable()` a `hasNextPage()`.
15. Actualización versión clase WUIForm a 0.2.
	- Se agregó soporte para valores privados.
	- Se agregó soporte para formato CSS claro/oscuro.
	- Se agregó el método `getIcon()`.
	- Se agregó la variable CSS `--wui-form-message-shadowcolor`.
16. Actualización versión clase WUIFormat a 0.2.
	- Se agregó soporte para `"Windows Phone"` en los métodos `getOS()` y `getMobileOS()`.
	- Se agregó manejo de error en el método `wuiToString()`.
17. Actualización versión clase WUISelectpicker a 0.2.
	- Se agregó soporte para valores privados.
	- Se agregó soporte para formato CSS claro/oscuro.
	- Se agregó la propiedad de sólo lectura `text`.
	- Se agregó el método `destroy()`.
	- Se agregó la variable CSS `--wui-selectpicker-box-shadowcolor`.
	- Se agregó posicionamiento relativo al elemento HTML.
	- Se corrigió error al cargar la propiedad `value` al instanciar el objeto.
	- Se corrigió error para asegurar referencia a elementos del DOM de tipo `HTMLInputElement`.
	- Se corrigió error en el método privado `#addHTMLOption()`.
	- Se deprecó el método `getValue()`, reemplazado por la propiedad de sólo lectura `value`.
	- Se deprecó el método `getText()`, reemplazado por la propiedad de sólo lectura `text`.
18. Actualización versión clase WUIDatepicker a 0.2.
	- Se agregó soporte para valores privados.
	- Se agregó soporte para formato CSS claro/oscuro.
	- Se agregó el método `destroy()`.
	- Se agregó la variable CSS `--wui-datepicker-box-shadowcolor`.
	- Se agregó posicionamiento relativo al elemento HTML.
	- Se corrigió error al cargar la propiedad `value` al instanciar el objeto.
	- Se corrigió error para asegurar referencia a elementos del DOM de tipo `HTMLInputElement`.
19. Actualización versión clase WUITimepicker a 0.2.
	- Se agregó soporte para valores privados.
	- Se agregó soporte para formato CSS claro/oscuro.
	- Se agregó el método `destroy()`.
	- Se agregó la variable CSS `--wui-timepicker-box-shadowcolor`.
	- Se agregó posicionamiento relativo al elemento HTML.
	- Se corrigió error al cargar la propiedad `value` al instanciar el objeto.
	- Se corrigió error para asegurar referencia a elementos del DOM de tipo `HTMLInputElement`.
20. Actualización versión clase WUIColorpicker a 0.2.
	- Se agregó soporte para valores privados.
	- Se agregó soporte para formato CSS claro/oscuro.
	- Se agregó el método `destroy()`.
	- Se agregó la variable CSS `--wui-colorpicker-box-shadowcolor`.
	- Se agregó posicionamiento relativo al elemento HTML.
	- Se corrigió error para asegurar referencia a elementos del DOM de tipo `HTMLInputElement`.
21. Actualización versión clase WUICheckbox a 0.2.
	- Se agregó soporte para valores privados.
	- Se corrigió error en el evento de arrastre al seleccionar y deseleccionar la caja de verificación usando el evento `mousedown`, habilitándo únicamente cuando el botón izquierdo permanece presionado.
	- Se corrigió error para asegurar referencia a elementos del DOM de tipo `HTMLInputElement`.
22. Actualización versión clase WUIButton a 0.2.
	- Se agregó soporte para valores privados.
	- Se agregó propiedad `onDblClick`.
	- Se corrigió error para asegurar referencia a elementos del DOM de tipo `HTMLButtonElement`.

## [v0.1.0] - 2024-05-01

Características:

1. Versión de lanzamiento.

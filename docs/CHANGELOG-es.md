> [!IMPORTANT]
> La cuenta de GitHub `@wuiproject` se migró a `@wui-js` para que coincidiera con el nombre de la cuenta de NPM.

[English](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/CHANGELOG-en.md) |
[Español](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/CHANGELOG-es.md)
---

# Registro de Cambios

## [v0.14.1] - 2026-09-08

Características:

1. Se agregó el script `prepare` a `package.json` para que una instalación vía tag de git (`npm install github:wui-js/wuijs-main-lib#vX.Y.Z`) produzca la misma estructura de archivos aplanada que una instalación desde el registro de npm.
2. Se actualizó cargador de recursos `wui.js`.
3. Se actualizó versión clase WUIBody a `0.9`.
	- Se agregaron los sufijos `button` y `script` como sufijos válidos del módo automático (`auto=true`) para ids de secciones en el método `importSections()`.
	- Se corrigió error en el método `prepare()`.
4. Se actualizó versión clase WUIIcon a `0.12`.
	- Se agregó el ícono `stripe-fill`.
	- Se agregó el ícono `stripe-color`.
	- Se agregó el ícono `paypal-fill`.
	- Se agregó el ícono `paypal-color`.

## [v0.14.0] - 2026-09-04

Características:

1. Se actualizó cargador de recursos `wui.js`.
2. Se actualizó versión clase WUIHead a `0.5`.
	- Se agregó el método `addLink()`.
	- Se agregó el método `addScript()`.
	- Se agregó el método `addCss()`.
	- Se agregó el método `addJs()`.
	- Se agregó el método `addResources()`.
3. Se actualizó versión clase WUIBody a `0.8`.
	- Se agregó el sufijo `fieldset` como sufijo válido del módo automático (`auto=true`) para ids de secciones en el método `importSections()`.
4. Se actualizó versión clase WUILanguage a `0.7`.
	- Se agregaron los elementos de carga HTML `<ol>`, `<strong>`, `<b>` y `<select>`.
5. Se actualizó versión clase WUIIcon a `0.11`.
	- Se agregó el ícono `credit-card-line`.
	- Se agregó el ícono `credit-card-fill`.
	- Se agregó el ícono `crown-line`.
	- Se agregó el ícono `crown-fill`.
	- Se agregó el ícono `hourglass-empty-line`.
	- Se agregó el ícono `hourglass-bottom-line`.
	- Se agregó el ícono `hourglass-middle-line`.
	- Se agregó el ícono `hourglass-top-line`.
	- Se agregó el ícono `arrow-circle-clockwise-line`.
	- Se agregó el ícono `arrow-circle-counterclockwise-line`.
	- Se agregó el ícono `arrow-circle-dual-clockwise-line`.
	- Se agregó el ícono `arrow-circle-dual-counterclockwise-line`.
	- Se agregó el ícono `calendar-check-line`.
	- Se agregó el ícono `calendar-check-fill`.
	- Se agregó el ícono `calendar-plus-line`.
	- Se agregó el ícono `calendar-plus-fill`.
	- Se agregó el ícono `calendar-dash-line`.
	- Se agregó el ícono `calendar-dash-fill`.
	- Se agregó el ícono `calendar-x-line`.
	- Se agregó el ícono `calendar-x-fill`.
	- Se renombró el ícono `cash-alt-fill` a `cash-alt-fill`.
6. Se actualizó versión clase WUIModal a `0.11`.
	- Se corrigió error en las reglas CSS para botones del footer en modo móvil.
7. Se actualizó versión clase WUIPaging a `0.10`.
	- Se corrigió error en el método `#index2target()`: el parámetro `index` recibido era ignorado, retornando siempre el target del índice actual en vez del solicitado.
	- Se corrigió error en el método `select()`: la propiedad interna de target ahora almacena el valor resuelto desde el dataset en vez del argumento crudo recibido (que podía ser numérico).
8. Se actualizó versión clase WUITabs a `0.7`.
	- Se agregó la variable CSS `--wui-tabs-tab-bordercolor-out`.
	- Se agregó la variable CSS `--wui-tabs-tab-bordercolor-over`.
	- Se agregó la variable CSS `--wui-tabs-tab-bordercolor-selected`.
	- Se agregó el estilo CSS `border` para mostrar borde de las pestañas.
	- Se agregó el estilo CSS `fill` para omitir borde de las pestañas.
	- Se agregó el estilo CSS `curve` para acentuar el radio de los bordes de las pestañas.
	- Se trasladó el estilo CSS `scroll` del elemento `.body` a `.page`.
	- Se agregó la propiedad `dataTarget` (por defecto `"target"`) y la propiedad de solo lectura `target`, con el mismo manejo de índice/target de `WUIPaging`.
	- Se agregaron los métodos `getIndex()`, `getTarget()`, `getTabs()` y `getPages()`.
	- El método `select()` ahora acepta un identificador de pestaña (`string`) además de un índice (`number`).
9. Se actualizó versión clase WUIMenubar a `0.10`.
	- Se corrigió posición de inicio del submenú en modo móvil.
10. Se actualizó versión clase WUIList a `0.9`.
	- Se agregó la variable CSS `--wui-list-cell-leftpadding`.
	- Se agregó la variable CSS `--wui-list-cell-rightpaddingt`.
	- Se renombró la variable CSS `--wui-list-button-hmargin` a `--wui-list-button-horizontalmargin`.
11. Se actualizó versión clase WUITable a `0.10`.
	- Se agregó `min-width: 0` a la regla CSS `div.wui-table`, para que el elemento pueda encogerse por debajo del ancho de su contenido cuando se usa como flex item.
	- Con `resizable: false`, el `width` de una columna ahora se aplica como `width` y `min-width` a la vez (antes solo `width`, que `table-layout: auto` trata como sugerencia y terminaba comprimiendo): se respetan los anchos pedidos y la tabla scrollea horizontalmente dentro de `div.wui-table` cuando su suma excede el contenedor. Con `resizable: true` (default) el `width` sigue actuando como `max-width`, sin cambios.
12. Se actualizó versión clase WUIForm a `0.12`.
	- Se agregó la variable CSS `--wui-form-label-inline-right`.
	- Se agregó la regla CSS `.wui-form fieldset > :is(.text, .message).small` para textos pequeños bajo la entrada de datos.
	- Se agregó la regla CSS `.wui-form fieldset > .text:is(.left, .center, .right)` para alineación de textos.
	- Se agregó `min-width: 0` a la regla CSS `.wui-form fieldset`: el user agent stylesheet del navegador aplica `min-inline-size: min-content` al `fieldset`, lo que fijaba un piso igual al ancho min-content de su contenido — un hijo ancho (por ejemplo un `.wui-table` con anchos de columna fijos) hacía crecer al fieldset, y a todo su entorno, más allá del ancho del contenedor.
13. Se actualizó versión clase WUISelectpicker a `0.14`.
	- Se renombró la variable CSS `--wui-selectpicker-viewinput-paddingleft` a `--wui-selectpicker-viewinput-leftpadding`.
14. Se actualizó versión clase WUIDatepicker a `0.12`.
	- Se renombró la variable CSS `--wui-datepicker-viewinput-paddingleft` a `--wui-datepicker-viewinput-leftpadding`.
15. Se actualizó versión clase WUITimepicker a `0.12`.
	- Se renombró la variable CSS `--wui-timepicker-viewinput-paddingleft` a `--wui-timepicker-viewinput-leftpadding`.
16. Se actualizó versión clase WUISwitch a `0.10`.
	- Se agregó el evento `change` a la propiedad `activated`.
	- Se agregó el evento `change` al método `toggle()`.
17. Se actualizó versión clase WUIButton a `0.14`.
	- Se agregó la regla CSS `.wui-button > .wui-icon:is(.float-left, .float-right).mobile-disabled` para deshabilitar en modo móvil.

## [v0.13.2] - 2026-07-22

Características:

1. Se actualizó cargador de recursos `wui.js`.
2. Se actualizó versión clase WUIBody a `0.7`.
	- Se agregó el método `importSections()`.
3. Se actualizó versión clase WUIIcon a `0.10`.
	- Se agregó el ícono `person-exclamation-line`.
	- Se agregó el ícono `person-exclamation-fill`.
	- Se agregó el ícono `person-gear-line`.
	- Se agregó el ícono `person-gear-fill`.
4. Se actualizó versión clase WUIModal a `0.10`.
	- Se corrigió en la apertura de modal con estilo `page small`. Métodos `open()` y `resposive()` forzaran `height: auto` y un desplazamiento `top` de página completa en modo móvil para el estilo `page small`, lo que impedía que la caja se ajustara a `--wui-modal-smallpage-box-height` y emergiera desde la parte inferior de la pantalla.
	- Se corrigió que el efecto `under` en modo móvil (clase `.under`, atenuado del overlay y animación de compresión de la caja) se aplicara sin importar el tipo de modal. Ahora requiere que tanto el modal que se abre como el que queda debajo sean de tipo `page` y no `small`.
	- `onStartOpen` y `onStartClose` ahora cancelan la apertura/cierre cuando retornan exactamente `false`.
5. Se actualizó versión clase WUIMenubar a `0.9`.
	- Los tooltips de los botones ahora muestran una pestaña en la parte izquierda, al igual que el estilo `.left` de `WUITooltip`, y ajustan su ancho al contenido de texto en vez de usar un tamaño fijo.
	- Se agregó la propiedad booleana `fixed` (por defecto `false`) para fijar la barra al borde de la pantalla. |
	- Se agregó la propiedad booleana `nowrapTooltips` (por defecto `false`) para mantener el texto de los tooltips en una sola línea.
6. Se actualizó versión clase WUIForm a `0.11`.
	- Se extendió el alcance de la regla `.hidden` a `.field`, `text` y `.message`.
	- Se agregó soporte para entradas de datos de tipo arreglo (`[name="...[]"]`). Los métodos `getField()`, `getIcon()`, `getRightIcon()`, `getLabel()`, `getInput()`, `getData()`, `getText()`, `getValue()`, `setType()`, `setValue()`, `setData()`, `setText()`, `setEnabled()`, `focus()`, `blur()`, `change()` y `autosize()` ahora aceptan un parámetro `position` (por defecto `0`) para apuntar a una ocurrencia específica.
	- Se eliminaron selectores CSS muertos que dependían de una clase `.field.disabled` que `setEnabled()` nunca asignaba (openers de date/time/select). El color de la etiqueta deshabilitada ahora usa `label:has(~ input:disabled, ...)` en vez de una clase `.disabled` gestionada por JS; `setEnabled()` ya no alterna `.disabled` en la etiqueta ni en el input mismo (el input ya dependía del selector nativo `:disabled`).
7. Se actualizó versión clase WUIButton a `0.13`.
	- Se agregó el método `getText()`.
	- El estilo del estado deshabilitado ahora usa las pseudo-clases nativas `:disabled`/`:enabled` en vez de una clase `.disabled` gestionada por JS, simplificando `#setStyle()` y el setter `enabled`.

## [v0.13.1] - 2026-07-20

Características:

1. Se actualizó cargador de recursos `wui.js`.
2. Se actualizó versión clase WUIHead a `0.4`.
	- Se refactorizó el código JS.
3. Se actualizó versión clase WUIBody a `0.6`.
	- Se refactorizó el código JS.
	- Se forzó nomenclatura camelCase en siglas de métodos públicos: `openURL()` → `openUrl()`.
4. Se actualizó versión clase WUIIcon a `0.9`.
	- Se agregaron los íconos `mail-check-line`, `mail-check-fill`, `mail-exclamation-line` y `mail-exclamation-line`.
	- Se refactorizó el código CSS.
	- Se corrigió nomenclatura kebab-case en 11 clases de color (`darkSlateGray`, `slateGrey`, `lightSlateGrey`, `aliceBlue`, `darkTurquoise`, `deepSkyBlue`, `dodgerBlue`, `cornflowerBlue`, `rebeccaPurple`, `darkViolet`, `deepPink`) → `dark-slate-gray`, `slate-grey`, `light-slate-grey`, `alice-blue`, `dark-turquoise`, `deep-sky-blue`, `dodger-blue`, `cornflower-blue`, `rebecca-purple`, `dark-violet`, `deep-pink`. **Cambio incompatible**: el HTML que use las clases antiguas debe actualizarse.
5. Se actualizó versión clase WUIFade a `0.5`.
	- Se refactorizó el código JS.
	- Se reemplazó el método estático expuesto `_initClass()` por un bloque de inicialización estático, ejecutado automáticamente al evaluarse la clase.
6. Se actualizó versión clase WUILoader a `0.7`.
	- Se refactorizó el código JS.
7. Se actualizó versión clase WUITooltip a `0.6`.
	- Se refactorizó el código JS.
8. Se actualizó versión clase WUIModal a `0.9`.
	- Se refactorizó el código JS.
	- Se refactorizó el código CSS.
	- Se reemplazó el método estático expuesto `_initClass()` por un bloque de inicialización estático, ejecutado automáticamente al evaluarse la clase.
	- Se corrigió error en estilo CSS de scroll.
9. Se actualizó versión clase WUIPaging a `0.9`.
	- Se corrigió error en estilo CSS de scroll.
10. Se actualizó versión clase WUISlider a `0.8`.
	- Se refactorizó el código JS.
	- Se refactorizó el código CSS.
11. Se actualizó versión clase WUITabs a `0.6`.
	- Se refactorizó el código JS.
	- Se refactorizó el código CSS.
	- Se corrigió error en estilo CSS de scroll.
12. Se actualizó versión clase WUIMenubar a `0.8`.
	- Se refactorizó el código JS.
	- Se refactorizó el código CSS.
	- Se renombró el método `getButton()` a `getButtonOptions()`: el método retorna el objeto de opciones/configuración del botón, no un elemento del DOM ni una instancia de botón.
13. Se actualizó versión clase WUIList a `0.8`.
	- Se refactorizó el código JS.
	- Se refactorizó el código CSS.
	- Se corrigió error en estilo CSS de scroll.
14. Se actualizó versión clase WUITable a `0.9`.
	- Se refactorizó el código JS.
	- Se refactorizó el código CSS.
	- Se corrigió error en estilo CSS de scroll.
15. Se actualizó versión clase WUIForm a `0.10`.
	- Se refactorizó el código JS.
	- Se refactorizó el código CSS.
	- Se corrigió error en el tamaño de los textos en modo escritorio y móvil.
	- Se corrigió error en estilo CSS de scroll.
	- Se agregó el método `closeKeyboard()`.
	- Se renombró el método `getRighticon()` a `getRightIcon()` para forzar nomenclatura camelCase.
16. Se actualizó versión clase WUIFormat a `0.5`.
	- Se reemplazó el método estático expuesto `_initClass()` por un bloque de inicialización estático, ejecutado automáticamente al evaluarse la clase.
	- Se forzó nomenclatura camelCase en siglas de métodos públicos: `validateURL()` → `validateUrl()`, `validateURLList()` → `validateUrlList()`, `validateNID()` → `validateNid()`.
17. Se actualizó versión clase WUISelectpicker a `0.13`.
	- Se refactorizó el código JS.
	- Se refactorizó el código CSS.
	- Se agregó la propiedad de cadena `name`.
	- Se corrigió error en el tamaño de los textos en modo escritorio y móvil.
	- Se corrigió error en estilo CSS de scroll.
	- Se eliminó la variable CSS `--wui-selectpicker-box-button-textsize`.
	- Se reemplazó el método estático expuesto `_initClass()` por un bloque de inicialización estático, ejecutado automáticamente al evaluarse la clase.
	- `open()` ahora detecta elementos ancestros que recortan contenido mediante `overflow: hidden|auto|scroll|clip` y reduce `maxOptions` para que la lista completa de opciones permanezca visible dentro del límite de recorte más cercano, en vez de considerar únicamente el viewport (solo en modo escritorio).
	- Se corrigió que `#loadBox()` desplazara el scroll a una posición no alineada a un múltiplo del alto de fila al centrar la opción seleccionada, provocando que la primera o la última opción visible se viera recortada. La posición de scroll ahora se redondea a la fila completa más cercana, dejando un espacio consistente (igual al padding del contenedor) antes de la primera opción visible.
18. Se actualizó versión clase WUIDatepicker a `0.11`.
	- Se refactorizó el código JS.
	- Se reemplazó el método estático expuesto `_initClass()` por un bloque de inicialización estático, ejecutado automáticamente al evaluarse la clase.
	- Se agregó la propiedad de cadena `name`.
19. Se actualizó versión clase WUITimepicker a `0.11`.
	- Se refactorizó el código JS.
	- Se refactorizó el código CSS.
	- Se agregó la propiedad de cadena `name`.
	- Se corrigió error en estilo CSS de scroll.
20. Se actualizó versión clase WUIColorpicker a `0.12`.
	- Se refactorizó el código JS.
	- Se refactorizó el código CSS.
	- Se agregó la propiedad de cadena `name`.
	- Se corrigió error en estilo CSS de scroll.
21. Se actualizó versión clase WUISwitch a `0.9`.
	- Se refactorizó el código JS.
	- Se agregó la propiedad de cadena `name`.
	- Se agregó la propiedad booleana `boolean`.
22. Se actualizó versión clase WUIIntensity a `0.7`.
	- Se refactorizó el código JS.
	- Se refactorizó el código CSS.
	- Se agregó la propiedad de cadena `name`.
23. Se actualizó versión clase WUIButton a `0.12`.
	- Se refactorizó el código JS.
	- Se refactorizó el código CSS.

## [v0.12.0] - 2026-06-24

Características:

1. Se actualizó cargador de recursos `wui.js`.
2. Se actualizó versión clase WUIScrolly a `0.7`.
	- Se refactorizó el código CSS.
3. Se actualizó versión clase WUIIcon a `0.8`.
	- Se refactorizó el código CSS.
	- Se corrigió error en los íconos `gitlab-fill`, `gitlab-color`, `google-fill`, `google-color`, `googledrive-fill` y `googledrive-color`.
4. Se actualizó versión clase WUILoader a `0.6`.
	- Se refactorizó el código CSS.
5. Se actualizó versión clase WUITooltip a `0.5`.
	- Se refactorizó el código CSS.
6. Se actualizó versión clase WUIModal a `0.8`.
	- Se refactorizó el código CSS.
	- Se agregó compatibilidad del estilo del scroll con navegador FireFox.
7. Se actualizó versión clase WUIPaging a `0.8`.
	- Se refactorizó el código CSS.
	- Se agregó compatibilidad del estilo del scroll con navegador FireFox.
8. Se actualizó versión clase WUISlider a `0.7`.
	- Se refactorizó el código CSS.
9. Se actualizó versión clase WUITabs a `0.5`.
	- Se refactorizó el código CSS.
	- Se agregó compatibilidad del estilo del scroll con navegador FireFox.
10. Se actualizó versión clase WUIMenubar a `0.7`.
	- Se refactorizó el código CSS.
11. Se actualizó versión clase WUIList a `0.7`.
	- Se refactorizó el código CSS.
	- Se agregó compatibilidad del estilo del scroll con navegador FireFox.
12. Se actualizó versión clase WUITable a `0.8`.
	- Se refactorizó el código CSS.
	- Se agregó compatibilidad del estilo del scroll con navegador FireFox.
13. Se actualizó versión clase WUIForm a `0.9`.
	- Se refactorizó el código CSS.
	- Se agregó compatibilidad del estilo del scroll con navegador FireFox.
14. Se actualizó versión clase WUISelectpicker a `0.12`.
	- Se refactorizó el código CSS.
	- Se agregó compatibilidad del estilo del scroll con navegador FireFox.
15. Se actualizó versión clase WUIDatepicker a `0.10`.
	- Se refactorizó el código CSS.
16. Se actualizó versión clase WUITimepicker a `0.10`.
	- Se refactorizó el código CSS.
	- Se agregó compatibilidad del estilo del scroll con navegador FireFox.
17. Se actualizó versión clase WUIColorpicker a `0.11`.
	- Se refactorizó el código CSS.
	- Se agregó compatibilidad del estilo del scroll con navegador FireFox.
18. Se actualizó versión clase WUISwitch a `0.8`.
	- Se refactorizó el código CSS.
19. Se actualizó versión clase WUIIntensity a `0.6`.
	- Se refactorizó el código CSS.
20. Se actualizó versión clase WUIButton a `0.11`.
	- Se refactorizó el código CSS.

## [v0.11.0] - 2026-06-12

Características:

1. Se actualizó cargador de recursos `wui.js`.
2. Se actualizó versión clase WUICookie a `0.5`.
	- Se refactorizó el código JS.
3. Se actualizó versión clase WUIBody a `0.5`.
	- Se refactorizó el código JS.
4. Se actualizó versión clase WUILanguage a `0.6`.
	- Se refactorizó el código JS.
5. Se actualizó versión clase WUIScrolly a `0.6`.
	- Se refactorizó el código JS.
6. Se actualizó versión clase WUIIcon a `0.7`.
	- Se agregó la clase JS `WUIIcon`.
	- Se corrigió error en los íconos `claude-color` y `wuijs-color`.
7. Se actualizó versión clase WUIFade a `0.4`.
	- Se refactorizó el código JS.
	- Se corrigió error en caso en métodos `in()` y `out()` cuando el parámetro `target` no existía.
8. Se actualizó versión clase WUILoader a `0.5`.
	- Se refactorizó el código JS.
9. Se actualizó versión clase WUITooltip a `0.4`.
	- Se refactorizó el código JS.
	- Se corrigió error en el posicionamiento del tooltip cuando el texto tiene más de una línea.
10. Se actualizó versión clase WUISlider a `0.6`.
	- Se refactorizó el código JS.
11. Se actualizó versión clase WUITabs a `0.4`.
	- Se agregó la variable CSS `--wui-tabs-shadowcolor`.
	- Se agregó la variable CSS `--wui-tabs-borderradius`.
	- Se agregó la variable CSS `--wui-tabs-borderwidth`.
	- Se agregó la variable CSS `--wui-tabs-bordercolor`.
	- Se agregó la variable CSS `--wui-tabs-bgcolor`.
	- Se agregó la variable CSS `--wui-tabs-scroll-bgcolor-out`.
	- Se agregó la variable CSS `--wui-tabs-scroll-bgcolor-over`.
	- Se agregó la variable CSS `--wui-tabs-tab-bgcolor-selected`.
	- Se agregó la variable CSS `--wui-tabs-tab-iconcolor-selected`.
	- Se agregó la variable CSS `--wui-tabs-tab-textcolor-selected`.
	- Se eliminó la variable CSS `--wui-tabs-tab-iconcolor-mobile`.
	- Se agregó la propiedad de selección `layout`.
	- Se refactorizó el código JS.
12. Se actualizó versión clase WUIMenubar a `0.6`.
	- Se agregó la propiedad booleana `centered`.
	- Se agregó la propiedad booleana `separations`.
	- Se mejoró la visualización de cierre del submenú en modo móvil.
	- Se refactorizó el código JS.
	- Se corrigió error en apertura de submenú en modo móvil.
13. Se actualizó versión clase WUIList a `0.6`.
	- Se refactorizó el código JS.
14. Se actualizó versión clase WUITable a `0.7`.
	- Se refactorizó el código JS.
15. Se actualizó versión clase WUIForm a `0.8`.
	- Se corrigió error de visualización en el estilo del scroll en modo móvil.
16. Se actualizó versión clase WUISelectpicker a `0.11`.
	- Se mejoró el cálculo del alto de la caja de selección según el área disponible para despliegue y las propiedades `openDirection` y `hidden`.
	- Se corrigió error en la ejecución de la propiedad `onChange` en el evento del botón "aceptar", cuando la propiedad `autochange` era verdadera.
	- Se corrigió error de visualización en el estilo del scroll.
17. Se actualizó versión clase WUIDatepicker a `0.9`.
	- Se corrigió error en apertura del calendario.
18. Se actualizó versión clase WUIColorpicker a `0.10`.
	- Se corrigió error de visualización en la lista de colores.
19. Se actualizó versión clase WUIButton a `0.10`.
	- Se agregó la variable CSS `--wui-button-mobile-submit-minwidth`.
	- Se agregó el método `getIcon()`.

## [v0.10.0] - 2026-06-03

Características:

1. Se actualizó cargador de recursos `wui.js`.
2. Se actualizó versión clase WUIModal a `0.7`.
	- Se refactorizó el código JS.
3. Se actualizó versión clase WUIPaging a `0.7`.
	- Se agregó el parámetro booleano `instant` al método `select`.
	- Se refactorizó el código JS.
4. Se actualizó versión clase WUIForm a `0.7`.
	- Se adaptó CSS para WUISelectpicker `0.10`.
	- Se refactorizó el código JS.
5. Se actualizó versión clase WUIFormat a `0.4`.
	- Se agregó el método `Number.prototype.wuiSetDefaults()`.
	- Se agregó el método `String.prototype.wuiSetDefaults()`.
	- Se agregó el método `Date.prototype.wuiSetDefaults()`.
	- Se actualizó la lista de TLDs `String.prototype.wuiConstants.tlds` a versión `20260602`.
	- Se actualizó la lista de idiomas `Date.prototype.wuiConstants.locales` a versión `20250617`.
	- Se refactorizó el código JS.
6. Se actualizó versión clase WUISelectpicker a `0.10`.
	- Se agregó la propiedad de función `onClose`.
	- Se agregó efecto fadein y fadeout en la apertura y cierre de la caja de selección en modo móvil y oculto.
	- Se corrigió error de carga de valores de opción desde los elemento html preexistentes.
	- Se corrigió error de prioridad z-index del elemento overlay.
	- Se refactorizó el código JS.
7. Se actualizó versión clase WUIDatepicker a `0.8`.
	- Se agregó la propiedad booleana `hidden`.
	- Se agregó la propiedad de función `onClose`.
	- Se refactorizó el código JS.
8. Se actualizó versión clase WUITimepicker a `0.9`.
	- Se agregó la propiedad booleana `hidden`.
	- Se agregó la propiedad de función `onClose`.
	- Se refactorizó el código JS.
9. Se actualizó versión clase WUIColorpicker a `0.9`.
	- Se agregó la propiedad booleana `hidden`.
	- Se agregó la propiedad de función `onClose`.
	- Se refactorizó el código JS.
10. Se actualizó versión clase WUISwitch a `0.7`.
	- Se refactorizó el código JS.
11. Se actualizó versión clase WUIIntensity a `0.5`.
	- Se refactorizó el código JS.
12. Se actualizó versión clase WUIButton a `0.9`.
	- Se refactorizó el código JS.

## [v0.9.2] - 2026-05-28

Características:

1. Revisión clase WUISelectpicker a `0.9`.

## [v0.9.1] - 2026-05-28

Características:

1. Revisión clase WUISelectpicker a `0.9`.

## [v0.9.0] - 2026-05-28

Características:

1. Se actualizó cargador de recursos `wui.js`.
2. Se actualizó versión clase WUISelectpicker a `0.9`.
	- Se corrigió error en la carga de las opciones del componente en base a elementos `<select>` previamente cargados.

## [v0.8.1] - 2026-05-28

Características:

1. Se actualizó cargador de recursos `wui.js`.
2. Se actualizó versión clase WUIPaging a `0.6`.
	- Se mejoró el manejo de páginas fuera de vista.

## [v0.8.0] - 2026-05-26

Características:

1. Se actualizó cargador de recursos `wui.js`.
2. Se actualizó versión clase WUILanguage a `0.6`.
	- Se agregó el parámetro `callback` al método `load()`.
	- Se corrigió error en el método `refresh()`.
3. Se actualizó versión clase WUIIcon a `0.5`.
	- Se agregó el ícono `.print-line`.
	- Se agregó el ícono `.print-fill`.
	- Se agregó el ícono `.threedots-horizontal`.
	- Se agregó el ícono `.threedots-vertical`.
	- Se agregó el ícono `.blockquote-left-line`.
	- Se agregó el ícono `.blockquote-right-line`.
	- Se agregó el ícono `.code-line`.
	- Se agregó el ícono `.code-slash-line`.
4. Se actualizó versión clase WUIModal a `0.6`.
	- Se actualizó valores de las variables CSS en archivo `.root.css`.
	- Se actualizó el padding horizontal en el título del modal para mayor exposición.
5. Se actualizó versión clase WUIPaging a `0.5`.
	- Se actualizó valores de las variables CSS en archivo `.root.css`.
6. Se actualizó versión clase WUIList a `0.5`.
	- Se actualizó valores de las variables CSS en archivo `.root.css`.
7. Se actualizó versión clase WUITable a `0.6`.
	- Se actualizó valores de las variables CSS en archivo `.root.css`.
8. Se actualizó versión clase WUIForm a `0.6`.
	- Se actualizó valores de las variables CSS en archivo `.root.css`.
	- Se agregó el método `getRighticon()`.
9. Se actualizó versión clase WUISelectpicker a `0.8`.
	- Se agregó la propiedad booleana `required`.
	- Se agregó la propiedad booleana `hidden`.
	- Se agregó la propiedad booleana `autochange`.
	- Se agregó la opción de texto `textClass`.
	- Se renombró la variable CSS `--wui-selectpicker-box-button-bordercolor` a `--wui-selectpicker-mobile-box-button-bordercolor`.
	- Se agregó la variable CSS `--wui-selectpicker-box-button-maxwidth`.
	- Se agregó la variable CSS `--wui-selectpicker-box-button-height`.
	- Se agregó la variable CSS `--wui-selectpicker-box-button-borderwidth`.
	- Se agregó la variable CSS `--wui-selectpicker-box-button-bordercolor-out`.
	- Se agregó la variable CSS `--wui-selectpicker-box-button-bordercolor-over`.
	- Se agregó la variable CSS `--wui-selectpicker-box-button-bgcolor-out`.
	- Se agregó la variable CSS `--wui-selectpicker-box-button-bgcolor-over`.
	- Se agregó la variable CSS `--wui-selectpicker-box-button-horizpadding`.
	- Se agregó la variable CSS `--wui-selectpicker-box-button-vertpadding`.
	- Se agregó la variable CSS `--wui-selectpicker-box-button-textsize`.
	- Se renombró el método `refresh` a `setOptions`.
	- Se actualizó valores de las variables CSS en archivo `.root.css`.
10. Se actualizó versión clase WUITimepicker a `0.8`.
	- Se actualizó valores de las variables CSS en archivo `.root.css`.
11. Se actualizó versión clase WUIColorpicker a `0.8`.
	- Se actualizó valores de las variables CSS en archivo `.root.css`.
12. Se actualizó versión clase WUIButton a `0.8`.
	- Se optimizó el método `init()`.
	- Se corrigió error al cargar la propiedad `textData`.

## [v0.7.1] - 2026-05-16

Características:

1. Se actualizó cargador de recursos `wui.js`.
2. Se actualizó versión clase WUIBody a `0.4`.
	- Se agregó el método `isCompleted()`.
3. Se actualizó versión clase WUILanguage a `0.4`.
	- Se corrigió error en el método `load()`.
4. Se actualizó versión clase WUIIcon a `0.5`.
	- Se renombró la clase `.columnsgap-line` a `.columns-gap-line`.
	- Se agregó el ícono `.columns-line`.
	- Se agregó el ícono `.columns-x2-line`.
	- Se agregó el ícono `.columns-x3-line`.
	- Se agregó el ícono `.grid3x2-gap-line`.
	- Se agregó el ícono `.grid3x3-gap-line`.
	- Se agregó el ícono `.leftbar-line`.
	- Se agregó el ícono `.leftbar-fill`.
	- Se agregó el ícono `.rightbar-line`.
	- Se agregó el ícono `.rightbar-fill`.
5. Se actualizó versión clase WUIMenubar a `0.5`.
	- Se agregó la propiedad booleana `hiddenPassiveBorder`.
	- Se agregó la variable CSS `--wui-menubar-shadowopacity`.
	- Se agregó la variable CSS `--wui-menubar-bar-borderradius`.
	- Se agregó la variable CSS `--wui-menubar-bar-button-borderradius`.
	- Se agregó la variable CSS `--wui-menubar-submenu-borderradius`.
	- Se agregó la variable CSS `--wui-menubar-submenu-button-borderradius`.
	- Se agregó la variable CSS `--wui-menubar-mobile-bar-bgcolor-top`.
	- Se agregó la variable CSS `--wui-menubar-mobile-bar-bgcolor-bottom`.
	- Se eliminó la variable CSS `--wui-menubar-borderradius`.
6. Se actualizó versión clase WUISelectpicker a `0.7`.
	- Se agregó la propiedad de arreglo `options`.
	- Se agregó la propiedad de cadena `boxAlign`. Valores: `"left"`, `"center"`, `"right"`.
	- Se agregó la propiedad booleana `viewicon`, para mostrar los íconos de la opción seleccionada.
	- Se agregó la propiedad booleana `viewtest`, para mostrar los textos de la opción seleccionada.
	- Se renombró el método `loadOptions` a `refresh`.
	- Se renombró la opción de ícono `icon` a `iconClass`.
	- Se renombró la variable CSS `--wui-selectpicker-bordercolor` a `--wui-selectpicker-bordercolor-out`.
	- Se agregó la variable CSS `--wui-selectpicker-bordercolor-over`.
	- Se agregó la variable CSS `--wui-selectpicker-bordercolor-disabled`.
	- Se agregó la variable CSS `--wui-selectpicker-viewicon-iconsize`.
	- Se agregó la variable CSS `--wui-selectpicker-viewicon-icongap`.
	- Se agregó la variable CSS `--wui-selectpicker-viewicon-iconcolor`.
	- Se agregó la variable CSS `--wui-selectpicker-box-shadowopacity`.
	- Se agregó la variable CSS `--wui-selectpicker-box-width`.
	- Se corrigió error de visualización de la caja cuando no existen opciones.
	- Se corrigió error de uso de opción de ícono.
	- Se corrigió error en la acción cancelar en el modo móvil.
7. Se actualizó versión clase WUIDatepicker a `0.7`.
	- Se renombró la variable CSS `--wui-datepicker-bordercolor` a `--wui-datepicker-bordercolor-out`.
	- Se agregó la variable CSS `--wui-datepicker-bordercolor-over`.
	- Se agregó la variable CSS `--wui-datepicker-bordercolor-disabled`.
	- Se agregó la variable CSS `--wui-datepicker-box-shadowopacity`.
8. Se actualizó versión clase WUITimepicker a `0.7`.
	- Se renombró la variable CSS `--wui-timepicker-bordercolor` a `--wui-timepicker-bordercolor-out`.
	- Se agregó la variable CSS `--wui-timepicker-bordercolor-over`.
	- Se agregó la variable CSS `--wui-timepicker-bordercolor-disabled`.
	- Se agregó la variable CSS `--wui-timepicker-box-shadowopacity`.
9. Se actualizó versión clase WUIColorpicker a `0.7`.
	- Se agregó la variable CSS `--wui-colorpicker-box-shadowopacity`.

## [v0.7.0] - 2026-05-14

Características:

1. Se actualizó cargador de recursos `wui.js`.
2. Se actualizó versión clase WUIButton a `0.7`.
	- Se corrigió error de sobreescritura de las propiedades `iconClass`, `textClass`, `text` y `textData` al momento de construir el elemento HTML.

## [v0.6.2] - 2026-05-08

Características:

1. Se actualizó cargador de recursos `wui.js`.
2. Se actualizó versión clase WUIDatepicker a `0.6`.
	- Se corrigió error de posición de la caja del selector de fecha al mostrarse en dispositivos móviles.
3. Se actualizó versión clase WUITimepicker a `0.6`.
	- Se corrigió error de posición de la caja del selector de hora al mostrarse en dispositivos móviles.
4. Se actualizó versión clase WUIColorpicker a `0.6`.
	- Se corrigió error de posición de la caja del selector de colores al mostrarse en dispositivos móviles.

## [v0.6.1] - 2026-05-06

Características:

1. Liberación del sitio oficial de documentación de WUI/JS: [https://docs.wuijs.dev](https://docs.wuijs.dev)
2. Se actualizó cargador de recursos `wui.js`.
3. Se actualizó versión clase WUIIcon a `0.4`.
	- Se agregó el ícono `.copy-line`.
	- Se agregó el ícono `.copy-fill`.
	- Se agregó el ícono `.sun-line`.
	- Se agregó el ícono `.sun-fill`.
4. Se actualizó versión clase WUISelectpicker a `0.6`.
	- Se mejoró evento `onChange` para que se dispare de manera diferida en dispositivos móviles (al presionar el botón Aceptar) y de manera inmediata en los navegadores de escritorio.
5. Se actualizó versión clase WUIButton a `0.6`.
	- Se agregó el argumento `selected` de tipo `booleano` a los parámetros `onClick` y `onDblClick`.
	- Se modificó set de propiedades `textClass`, `textData`, `iconClass` e `iconImage` para actualizar construcción HTML del botón.
	- Se modificó set de propiedades `submit`, `warning` y `flat` para actualizar estilos CSS del botón.

## [v0.6.0] - 2026-05-01

Características:

1. Se actualizó cargador de recursos `wui.js`.
2. Se actualizó versión clase WUIBody a `0.3`.
	- Se agregó el método `destroy()`.
3. Se actualizó versión clase WUILanguage a `0.3`.
	- Se agregó el método `destroy()`.
4. Se actualizó versión clase WUIScrolly a `0.5`.
	- Se agregó archivo `.root.css` con los valores por defecto de las variables CSS.
	- Se agregó el método `destroy()`.
	- Se actualizó el método `init()` para almacenar referencias a los handlers de eventos a nivel de documento para una correcta limpieza.
5. Se actualizó versión clase WUIIcon a `0.3`.
	- Se agregó archivo `.root.css` con los valores por defecto de las variables CSS.
	- Se agregó el ícono `.exclamation-octagon-line`.
	- Se agregó el ícono `.warning-octagon-line`.
	- Se agregó el ícono `.exclamation-octagon-fill`.
	- Se agregó el ícono `.warning-octagon-fill`.
	- Se agregó el ícono `.x-triangle-line`.
	- Se agregó el ícono `.close-triangle-line`.
	- Se agregó el ícono `.error-triangle-line`.
	- Se agregó el ícono `.x-triangle-fill`.
	- Se agregó el ícono `.close-triangle-fill`.
	- Se agregó el ícono `.error-triangle-fill`.
	- Se agregó el ícono `.claude-fill`.
	- Se agregó el ícono `.claude-color`.
6. Se actualizó versión clase WUIFade a `0.3`
	- Se agregó archivo `.root.css` con los valores por defecto de las variables CSS.
7. Se actualizó versión clase WUILoader a `0.4`.
	- Se agregó archivo `.root.css` con los valores por defecto de las variables CSS.
	- Se agregó el método `destroy()`.
8. Se actualizó versión clase WUITooltip a `0.3`.
	- Se agregó archivo `.root.css` con los valores por defecto de las variables CSS.
	- Se agregó el método `destroy()`.
	- Se actualizó el método `init()` para almacenar referencias a los handlers de eventos por elemento para una correcta limpieza.
9. Se actualizó versión clase WUIModal a `0.5`.
	- Se agregó archivo `.root.css` con los valores por defecto de las variables CSS.
	- Se agregó el método `destroy()`.
10. Se actualizó versión clase WUIPaging a `0.4`.
	- Se agregó archivo `.root.css` con los valores por defecto de las variables CSS.
	- Se agregó el método `destroy()`.
11. Se actualizó versión clase WUISlider a `0.5`.
	- Se agregó archivo `.root.css` con los valores por defecto de las variables CSS.
	- Se agregó el método `destroy()`.
	- Se actualizó el método `load()` para almacenar referencias a los handlers de eventos a nivel de documento por slide para una correcta limpieza.
12. Se actualizó versión clase WUITabs a `0.3`.
	- Se agregó archivo `.root.css` con los valores por defecto de las variables CSS.
	- Se agregó el método `destroy()`.
13. Se actualizó versión clase WUIMenubar a `0.4`.
	- Se agregó archivo `.root.css` con los valores por defecto de las variables CSS.
	- Se corrigió error en la carga del estilo de los botones deshabilitados de la barra de menú (`--wui-menubar-bar-button-textcolor-disabled`).
	- Se corrigió el método `destroy()`: el elemento raíz no se eliminaba del DOM.
14. Se actualizó versión clase WUIList a `0.4`.
	- Se agregó archivo `.root.css` con los valores por defecto de las variables CSS.
15. Se actualizó versión clase WUITable a `0.5`.
	- Se agregó archivo `.root.css` con los valores por defecto de las variables CSS.
	- Se agregó la variable CSS `--wui-table-column-bordercolor-disabled`.
	- Se agregó la variable CSS `--wui-table-row-bordercolor-disabled`.
16. Se actualizó versión clase WUIForm a `0.5`.
	- Se agregó archivo `.root.css` con los valores por defecto de las variables CSS.
	- Se agregó el método `destroy()`.
	- Se actualizó `#darkModeListener()` para almacenar referencias al observer y al handler del media query para una correcta limpieza.
17. Se actualizó versión clase WUISelectpicker a `0.5`.
	- Se agregó archivo `.root.css` con los valores por defecto de las variables CSS.
	- Se actualizó `#darkModeListener()` para almacenar referencias al observer y al handler del media query para una correcta limpieza.
	- Se actualizó el método `destroy()` para desconectar el observer de dark mode y el listener del media query.
	- Se corrigió error en la carga del estilo de los bordes de las opciones (`--wui-selectpicker-box-option-bordercolor-out`).
18. Se actualizó versión clase WUIDatepicker a `0.5`.
	- Se agregó archivo `.root.css` con los valores por defecto de las variables CSS.
	- Se actualizó `#darkModeListener()` para almacenar referencias al observer y al handler del media query para una correcta limpieza.
	- Se actualizó el método `destroy()` para desconectar el observer de dark mode y el listener del media query.
19. Se actualizó versión clase WUITimepicker a `0.5`.
	- Se agregó archivo `.root.css` con los valores por defecto de las variables CSS.
	- Se actualizó `#darkModeListener()` para almacenar referencias al observer y al handler del media query para una correcta limpieza.
	- Se actualizó el método `destroy()` para desconectar el observer de dark mode y el listener del media query.
20. Se actualizó versión clase WUIColorpicker a `0.5`.
	- Se agregó archivo `.root.css` con los valores por defecto de las variables CSS.
	- Se actualizó `#darkModeListener()` para almacenar referencias al observer y al handler del media query para una correcta limpieza.
	- Se actualizó el método `destroy()` para desconectar el observer de dark mode y el listener del media query.
21. Se actualizó versión clase WUISwitch a `0.6`.
	- Se agregó archivo `.root.css` con los valores por defecto de las variables CSS.
22. Se actualizó versión clase WUIIntensity a `0.4`.
	- Se agregó archivo `.root.css` con los valores por defecto de las variables CSS.
	- Se corrigió error en la carga del estilo en estado deshabilitado (`--wui-intensity-bordercolor-disabled`).
23. Se actualizó versión clase WUIButton a `0.5`.
	- Se agregó archivo `.root.css` con los valores por defecto de las variables CSS.
	- Se agregó el método `destroy()`.
	- Se agregó la variable CSS `--wui-button-default-borderwidth`.
	- Se agregó la variable CSS `--wui-button-default-horizpadding`.
	- Se agregó la variable CSS `--wui-button-default-vertpadding`.
	- Se agregó la variable CSS `--wui-button-mobile-default-minwidth`.
	- Se corrigió error en la carga del estilo de botones de tipo submit en estado seleccionado (`--wui-button-submit-bgcolor-selected`) y deshabilitado (`--wui-button-submit-bgcolor-disabled`).

## [v0.5.2] - 2026-04-19

Características:

1. Se actualizó cargador de recursos `wui.js`.
2. Se actualizó versión clase WUIModal a `0.4`.
	- Se agregó la variable CSS `--wui-modal-mobile-page-box-topmargin` para mejorar compatibilidad con pantallas iPhone.
	- Se agregó la variable CSS `--wui-modal-mobile-page-box-borderradius-maximized` para mejorar compatibilidad con pantallas iPhone.
	- Se corrigió error en el método `close()` donde no se redimensionaba el modal subyacente al cerrar el modal actual.
3. Se actualizó versión clase WUIMenubar a `0.3`.
	- Se agregó la propiedad `compacted`.
	- Se agregó la variable CSS `--wui-menubar-mobile-bar-horizpadding` para mejorar compatibilidad con pantallas iPhone.
	- Se agregó la variable CSS `--wui-menubar-mobile-bar-vertpadding` para mejorar compatibilidad con pantallas iPhone.
4. Actualización versión clase WUISelectpicker a `0.4`.
	- Se mejoró el método `init()` para soporte de elementos HTML vacíos.
5. Actualización versión clase WUIDatepicker a `0.4`.
	- Se mejoró el método `init()` para soporte de elementos HTML vacíos.
6. Actualización versión clase WUITimepicker a `0.4`.
	- Se mejoró el método `init()` para soporte de elementos HTML vacíos.
7. Actualización versión clase WUIColorpicker a `0.4`.
	- Se mejoró el método `init()` para soporte de elementos HTML vacíos.
8. Actualización versión clase WUISwitch a `0.5`.
	- Se mejoró el método `init()` para soporte de elementos HTML vacíos.
9. Actualización versión clase WUIIntensity a `0.3`.
	- Se mejoró el método `init()` para soporte de elementos HTML vacíos.
10. Actualización versión clase WUIButton a `0.4`.
	- Se agregó la propiedad `textClass`.
	- Se agregó la propiedad `textData`.
	- Se agregó la propiedad `iconClass`.
	- Se agregó la propiedad `iconImage`.
	- Se agregó la propiedad `submit`.	
	- Se agregó la propiedad `warning`.
	- Se agregó la propiedad `flat`.
	- Se mejoró el método `init()` para soporte de elementos HTML vacíos.

## [v0.5.1] - 2026-04-09

Características:

1. Se actualizó cargador de recursos `wui.js`.

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
3. Actualización versión clase WUICookie a `0.4`.
	- Se renombró el directorio y archivos a minúscula.
	- Se corrigió error en el método `get()` donde un espacio inicial en la cadena de la cookie causaba un desplazamiento de índice, retornando `=valor` en lugar de `valor`.
4. Actualización versión clase WUIHead a `0.3`.
	- Se renombró el directorio y archivos a minúscula.
5. Actualización versión clase WUIBody a `0.3`.
	- Se renombró el directorio y archivos a minúscula.
6. Actualización versión clase WUILanguage a `0.3`.
	- Se renombró el directorio y archivos a minúscula.
7. Actualización versión clase WUIScrolly a `0.4`.
	- Se renombró el directorio y archivos a minúscula.
8. Actualización versión clase WUIIcon a `0.2`.
	- Se renombró el directorio y archivos a minúscula.
	- Se corrigió error tipográfico en los nombres de clases CSS de íconos: `excamation` → `exclamation` (clases afectadas: `exclamation-line`, `exclamation-lg-line`, `exclamation-circle-line`, `exclamation-circle-fill`, `exclamation-triangle-line`, `exclamation-triangle-fill`).
9. Actualización versión clase WUIFade a `0.2`.
	- Se renombró el directorio y archivos a minúscula.
10. Actualización versión clase WUILoader a `0.3`.
	- Se renombró el directorio y archivos a minúscula.
11. Actualización versión clase WUITooltip a `0.2`.
	- Se renombró el directorio y archivos a minúscula.
12. Actualización versión clase WUIModal a `0.3`.
	- Se renombró el directorio y archivos a minúscula.
	- Se agregó un elemento hijo `.overlay` dedicado para gestionar el fondo de superposición, reemplazando el enfoque anterior basado en la clase CSS `.over`.
	- Se corrigió la animación del modal de página en móvil, corrigiendo el cálculo de la posición `top` del modal subyacente al apilar modales.
	- Se corrigió error de la clase `.slide` en modales de página en móvil en la media query responsive.
13. Actualización versión clase WUIPaging a `0.3`.
	- Se renombró el directorio y archivos a minúscula.
14. Actualización versión clase WUISlider a `0.4`.
	- Se renombró el directorio y archivos a minúscula.
15. Actualización versión clase WUITabs a `0.2`.
	- Se renombró el directorio y archivos a minúscula.
16. Actualización versión clase WUIMenubar a `0.2`.
	- Se renombró el directorio y archivos a minúscula.
17. Actualización versión clase WUIList a `0.3`.
	- Se renombró el directorio y archivos a minúscula.
18. Actualización versión clase WUITable a `0.4`.
	- Se renombró el directorio y archivos a minúscula.
19. Actualización versión clase WUIForm a `0.4`.
	- Se renombró el directorio y archivos a minúscula.
20. Actualización versión clase WUIFormat a `0.3`.
	- Se renombró el directorio y archivos a minúscula.
21. Actualización versión clase WUISelectpicker a `0.3`.
	- Se renombró el directorio y archivos a minúscula.
22. Actualización versión clase WUIDatepicker a `0.3`.
	- Se renombró el directorio y archivos a minúscula.
23. Actualización versión clase WUITimepicker a `0.3`.
	- Se renombró el directorio y archivos a minúscula.
24. Actualización versión clase WUIColorpicker a `0.3`.
	- Se renombró el directorio y archivos a minúscula.
25. Actualización versión clase WUISwitch a `0.4`.
	- Se renombró el directorio y archivos a minúscula.
26. Actualización versión clase WUIIntensity a `0.2`.
	- Se renombró el directorio y archivos a minúscula.
27. Actualización versión clase WUIButton a `0.3`.
	- Se renombró el directorio y archivos a minúscula.

## [v0.3.0] - 2026-02-09

Características:

1. Cambio de nombre clase WUICheckbox versión 0.2 a WUISwitch versión 0.3.
2. Actualización versión clase WUICookie a `0.3`.
	- Se agregó el método `encode()`.
	- Se agregó un retorno tipo `cadena` al método `set()` con la cookie codificada.
	- Se reemplazó la sentencia `max-age` por `expires` en la codificación de la cookie.
3. Actualización versión clase WUIScrolly a `0.3`.
	- Se cambié el nombre de la variable CSS `--wui-scrolly-paging-bgcolor` a `--wui-scrolly-paging-bgcolor-hidden`.
	- Se agregó la variable CSS `--wui-scrolly-paging-bgcolor-visible`.
4. Actualización versión clase WUISlider a `0.3`.
	- Se cambié el nombre de la variable CSS `--wui-slider-dot-bgcolor` a `--wui-slider-paging-bgcolor-hidden`.
	- Se cambié el nombre de la variable CSS `--wui-slider-dot-bgcolor-selected` a `--wui-slider-paging-bgcolor-visible`.
	- Se eliminó la variable CSS `--wui-slider-dots-bgcolor`.
5. Actualización versión clase WUITable a `0.3`.
	- Se agregó la propiedad `resetPaging`.
	- Se agregó columna de relleno para mantener el ancho de la tabla.
6. Actualización versión clase WUIForm a `0.3`.
	- Se agregó compatibilidad con WUISwitch versión 0.3.
	- Se agregó el estilo de formulario "fill".
7. Actualización versión clase WUIFormat a `0.3`.
	- Se agregó el método `wuiDayName()` al tipo de dato `Date`.
	- Se agregó el método `wuiMonthName()` al tipo de dato `Date`.

## [v0.2.0] - 2025-12-01

Características:

1. Inclusión de [Documentación](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md).
2. Se agregó clase WUIMenubar versión `0.1`.
3. Se agregó clase WUIIntensity versión `0.1`.
4. Actualización versión clase WUICookie a `0.2`.
	- Se agregó soporte para valores privados.
	- Se agregó el método `remove()`, que permite eliminar una cookie mediante su nombre.
	- Se corrigió error en el método público `remove()`.
5. Actualización versión clase WUIHead a `0.2`.
	- Se mejoró el código para evitar XSS attacks.
	- Se corrigió error para asegurar referencia a elementos del DOM.
6. Actualización versión clase WUIBody a `0.2`.
	- Se agregó soporte para valores privados.
7. Actualización versión clase WUILanguage a `0.2`.
	- Se cambió el valor por defecto de la propiedad `lang` a `"en"`.
	- Se agregó soporte para valores privados.
	- Se agregó la propiedad `mode`, para dar soporte a archivo de lenguaje en formato JS y JSON.
	- Se agregó el método `refresh()`, que permite actualizar el contenido de un elemento HTML específico.
	- Se eliminó la constante global `languajes` y se reemplazó por una definición variable, opcional y externa a la clase, que es asignada mediante la propiedad `onLoad()` (ver ejemplo de implementación en [Documentación](./LEEME.md?#wuiLanguage)).
8. Actualización versión clase WUIScrolly a `0.2`.
	- Se agregó soporte para valores privados.
	- Se agregó el alias `.fadein-top` a la clase de estilo `fadein-up`.
	- Se agregó la propiedad `direction`.
	- Se agregaron los argumentos `sceneIndex`, `sceneStep` y `sceneProgress` a la propuedad `onMove()`.
9. Actualización versión clase WUILoader a `0.2`.
	- Se agregó soporte para valores privados.
	- Se corrigió error en el método `init()`.
10. Actualización versión clase WUIModal a `0.2`.
	- Se agregó soporte para valores privados.
	- Se agregó el método `destroy()`.
	- Se corrigió error en el evento de arrastre al maximizar y cerrar un modal con estilo página usando el evento `mousedown`, habilitándo únicamente cuando el botón izquierdo permanece presionado.
11. Actualización versión clase WUIPaging a `0.2`.
	- Se agregó soporte para valores privados.
	- Se agregó el método `destroy()`.
12. Actualización versión clase WUISlider a `0.2`.
	- Se agregó soporte para valores privados.
	- Se corrigió error en el evento de arrastre al desplazar una diapositiva usando el evento `mousedown`, habilitándo únicamente cuando el botón izquierdo permanece presionado.
	- Se corrigió error en el método `load()`.
13. Actualización versión clase WUIList a `0.2`.
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
14. Actualización versión clase WUITable a `0.2`.
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
15. Actualización versión clase WUIForm a `0.2`.
	- Se agregó soporte para valores privados.
	- Se agregó soporte para formato CSS claro/oscuro.
	- Se agregó el método `getIcon()`.
	- Se agregó la variable CSS `--wui-form-message-shadowcolor`.
16. Actualización versión clase WUIFormat a `0.2`.
	- Se agregó soporte para `"Windows Phone"` en los métodos `getOS()` y `getMobileOS()`.
	- Se agregó manejo de error en el método `wuiToString()`.
17. Actualización versión clase WUISelectpicker a `0.2`.
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
18. Actualización versión clase WUIDatepicker a `0.2`.
	- Se agregó soporte para valores privados.
	- Se agregó soporte para formato CSS claro/oscuro.
	- Se agregó el método `destroy()`.
	- Se agregó la variable CSS `--wui-datepicker-box-shadowcolor`.
	- Se agregó posicionamiento relativo al elemento HTML.
	- Se corrigió error al cargar la propiedad `value` al instanciar el objeto.
	- Se corrigió error para asegurar referencia a elementos del DOM de tipo `HTMLInputElement`.
19. Actualización versión clase WUITimepicker a `0.2`.
	- Se agregó soporte para valores privados.
	- Se agregó soporte para formato CSS claro/oscuro.
	- Se agregó el método `destroy()`.
	- Se agregó la variable CSS `--wui-timepicker-box-shadowcolor`.
	- Se agregó posicionamiento relativo al elemento HTML.
	- Se corrigió error al cargar la propiedad `value` al instanciar el objeto.
	- Se corrigió error para asegurar referencia a elementos del DOM de tipo `HTMLInputElement`.
20. Actualización versión clase WUIColorpicker a `0.2`.
	- Se agregó soporte para valores privados.
	- Se agregó soporte para formato CSS claro/oscuro.
	- Se agregó el método `destroy()`.
	- Se agregó la variable CSS `--wui-colorpicker-box-shadowcolor`.
	- Se agregó posicionamiento relativo al elemento HTML.
	- Se corrigió error para asegurar referencia a elementos del DOM de tipo `HTMLInputElement`.
21. Actualización versión clase WUICheckbox a `0.2`.
	- Se agregó soporte para valores privados.
	- Se corrigió error en el evento de arrastre al seleccionar y deseleccionar la caja de verificación usando el evento `mousedown`, habilitándo únicamente cuando el botón izquierdo permanece presionado.
	- Se corrigió error para asegurar referencia a elementos del DOM de tipo `HTMLInputElement`.
22. Actualización versión clase WUIButton a `0.2`.
	- Se agregó soporte para valores privados.
	- Se agregó la propiedad `onDblClick`.
	- Se corrigió error para asegurar referencia a elementos del DOM de tipo `HTMLButtonElement`.

## [v0.1.0] - 2024-05-01

Características:

1. Versión de lanzamiento.

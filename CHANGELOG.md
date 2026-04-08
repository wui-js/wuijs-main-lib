# Change Log

## [v0.4.2] - 2026-04-08

Features:

1. Enable installation via NPM.

## [v0.4.0] - 2026-03-20

Features:

1. Renamed source directories and files to lowercase (e.g. `src/WUI/Slider/WUISlider-0.3.js` → `src/wui/slider/wui-slider-0.4.js`).
2. WUICookie version class update to 0.4.
	- Renamed the directory and files to lowercase.
	- Fixed bug in the `get()` method where a leading space in the cookie string caused an off-by-one error, returning `=value` instead of `value`.
3. WUIHead version class update to 0.3.
	- Renamed the directory and files to lowercase.
4. WUIBody version class update to 0.3.
	- Renamed the directory and files to lowercase.
5. WUILanguage version class update to 0.3.
	- Renamed the directory and files to lowercase.
6. WUIScrolly version class update to 0.4.
	- Renamed the directory and files to lowercase.
7. WUIIcon version class update to 0.2.
	- Renamed the directory and files to lowercase.
	- Fixed typo in CSS icon class names: `excamation` → `exclamation` (affected classes: `exclamation-line`, `exclamation-lg-line`, `exclamation-circle-line`, `exclamation-circle-fill`, `exclamation-triangle-line`, `exclamation-triangle-fill`).
8. WUIFade version class update to 0.2.
	- Renamed the directory and files to lowercase.
9. WUILoader version class update to 0.3.
	- Renamed the directory and files to lowercase.
10. WUITooltip version class update to 0.2.
	- Renamed the directory and files to lowercase.
11. WUIModal version class update to 0.3.
	- Renamed the directory and files to lowercase.
	- Added a dedicated `.overlay` child element to handle the overlay background, replacing the previous approach based on the `.over` CSS class.
	- Fixed mobile page modal animation by correcting the `top` position calculation on the underlying modal when stacking.
	- Fixed bug in the `.slide` class for mobile page modals in the responsive media query.
12. WUIPaging version class update to 0.3.
	- Renamed the directory and files to lowercase.
13. WUISlider version class update to 0.4.
	- Renamed the directory and files to lowercase.
14. WUITabs version class update to 0.2.
	- Renamed the directory and files to lowercase.
15. WUIMenubar version class update to 0.2.
	- Renamed the directory and files to lowercase.
16. WUIList version class update to 0.3.
	- Renamed the directory and files to lowercase.
17. WUITable version class update to 0.4.
	- Renamed the directory and files to lowercase.
18. WUIForm version class update to 0.4.
	- Renamed the directory and files to lowercase.
19. WUIFormat version class update to 0.3.
	- Renamed the directory and files to lowercase.
20. WUISelectpicker version class update to 0.3.
	- Renamed the directory and files to lowercase.
21. WUIDatepicker version class update to 0.3.
	- Renamed the directory and files to lowercase.
22. WUITimepicker version class update to 0.3.
	- Renamed the directory and files to lowercase.
23. WUIColorpicker version class update to 0.3.
	- Renamed the directory and files to lowercase.
24. WUISwitch version class update to 0.4.
	- Renamed the directory and files to lowercase.
25. WUIIntensity version class update to 0.2.
	- Renamed the directory and files to lowercase.
26. WUIButton version class update to 0.3.
	- Renamed the directory and files to lowercase.

## [v0.3.0] - 2026-02-09

Features:

1. Added simple loading scripts `WUI.js`.
2. Changed the name of the WUICheckbox class from version 0.2 to WUISwitch version 0.3.
3. WUICookie version class update to 0.3.
	- Added `encode()` method.
	- Added a `string` return type to the `set()` method with the encoded cookie.
	- Changed the `max-age` statement by `expires` in the cookie encoding..
4. WUIScrolly version class update to 0.3.
	- Changed the name of the CSS variable `--wui-scrolly-paging-bgcolor` to `--wui-scrolly-paging-bgcolor-hidden`.
	- Added the CSS variable `--wui-scrolly-paging-bgcolor-visible`.
5. WUISlider version class update to 0.3.
	- Changed the name of the CSS variable `--wui-slider-dot-bgcolor` to `--wui-slider-paging-bgcolor-hidden`.
	- Changed the name of the CSS variable `--wui-slider-dot-bgcolor-selected` to `--wui-slider-paging-bgcolor-visible`.
	- Removed the CSS variable `--wui-slider-dots-bgcolor`.
6. WUITable version class update to 0.3.
	- Added `resetPaging` property.
	- Added filler column to maintain table width.
7. WUIForm version class update to 0.3.
	- Added compatibility with WUISwitch version 0.3.
	- Added "fill" form style.
8. WUIFormat version class update to 0.3.
	- Added the `wuiDayName()` method to the `Date` data type.
	- Added the `wuiMonthName()` method to the `Date` data type.

## [v0.2.0] - 2025-12-01

Features:

1. Inclusion of [Documentation](./README.md).
2. Added WUIMenubar class version 0.1.
3. Added WUIIntensity class version 0.1.
4. WUICookie version class update to 0.2.
	- Added support for private values.
	- Added the `remove()` method, which allows removing a cookie by its name.
	- Fixed bug in the `remove()` method.
5. WUIHead version class update to 0.2.
	- Improved code to prevent XSS attacks.
	- Fixed bug to ensure DOM element references.
6. WUIBody version class update to 0.2.
	- Added support for private values.
7. WUILanguage version class update to 0.2.
	- Changed the default value of the `lang` property by `"en"`.
	- Added support for private values.
	- Added the `mode` property, to support files in JS and JSON format.
	- Added the `refresh()` method, which allows updating the content of a specific HTML element.
	- Removed global constant `languages` and replaced with a variable definition, optional and external to the class, which is assigned using the `onLoad()` property (see implementation example in [Documentation](./README.md?#wuiLanguage)).
8. WUIScrolly version class update to 0.2.
	- Added support for private values.
	- Added `.fadein-top` alias to the style class `fadein-up`.
	- Added `direction` property.
	- Added `sceneIndex`, `sceneStep` and `sceneProgress` arguments were added to the `onMove()` property.
9. WUILoader version class update to 0.2.
	- Added support for private values.
	- Fixed bug in `init()` method.
10. WUIModal version class update to 0.2.
	- Added support for private values.
	- Added `destroy()` method.
	- Fixed bug in drag event when maximizing and closing a page-style modal using the `mousedown` event, enabling it only when the left mouse button remains pressed.
11. WUIPaging version class update to 0.2.
	- Added support for private values.
	- Added `destroy()` method.
12. WUISlider version class update to 0.2.
	- Added support for private values.
	- Fixed bug in drag event when moving a scene using the `mousedown` event, enabling it only when the left button remains pressed.
	- Fixed bug in `load()` method.
13. WUIList version class update to 0.2.
	- Added support for paging.
	- Added `destroy()` method.
	- Added `--wui-list-shadowcolor` CSS var.
	- Renamed the `first()` method to `firstPage()`.
	- Renamed the `last()` method to `lastPage()`.
	- Renamed the `prev()` method to `prevPage()`.
	- Renamed the `next()` method to `nextPage()`.
	- Renamed the `isPrevEnable()` method to `hasPrevPage()`.
	- Renamed the `isNextEnable()` method to `hasNextPage()`.
	- Fixed bug in drag event when opening and closing the button bar of each row using the `mousedown` event, enabling it only when the left mouse button remains pressed.
14. WUITable version class update to 0.2.
	- Added support for private values.
	- Added support for light/dark CSS formatting.
	- Added `destroy()` method.
	- Added `--wui-table-shadowcolor` CSS var.
15. WUIForm version class update to 0.2.
	- Added support for private values.
	- Added support for light/dark CSS formatting.
	- Added `getIcon()` method.
	- Added `--wui-form-message-shadowcolor` CSS var.
	- Renamed the `first()` method to `firstPage()`.
	- Renamed the `last()` method to `lastPage()`.
	- Renamed the `prev()` method to `prevPage()`.
	- Renamed the `next()` method to `nextPage()`.
	- Renamed the `isPrevEnable()` method to `hasPrevPage()`.
	- Renamed the `isNextEnable()` method to `hasNextPage()`.
16. WUIFormat version class update to 0.2.
	- Added support for `Windows Phone` in the `getOS()` and `getMobileOS()` methods.
	- Added error handling to the `wuiToString()` method.
17. WUISelectpicker version class update to 0.2.
	- Added support for private values.
	- Added support for light/dark CSS formatting.
	- Added `text` get property.
	- Added `destroy()` method.
	- Added `--wui-selectpicker-box-shadowcolor` CSS var.
	- Added relative positioning to the HTML element.
	- Fixed bug to load the `value` property when instantiating the object.
	- Fixed bug to ensure HTML element references of type `HTMLInputElement`.
	- Fixed bug in private method `#addHTMLOption()`.
	- Deprecated `getValue()` method, replaced by the read-only property `value`.
	- Deprecated `getText()` method, replaced by the read-only property `text`.
18. WUIDatepicker version class update to 0.2.
	- Added support for private values.
	- Added support for light/dark CSS formatting.
	- Added `destroy()` method.
	- Added `--wui-datepicker-box-shadowcolor` CSS var.
	- Added relative positioning to the HTML element.
	- Fixed bug to load the `value` property when instantiating the object.
	- Fixed bug to ensure HTML element references of type `HTMLInputElement`.
19. WUITimepicker version class update to 0.2.
	- Added support for private values.
	- Added support for light/dark CSS formatting.
	- Added `destroy()` method.
	- Added `--wui-timepicker-box-shadowcolor` CSS var.
	- Added relative positioning to the HTML element.
	- Fixed bug to load the `value` property when instantiating the object.
	- Fixed bug to ensure HTML element references of type `HTMLInputElement`.
20. WUIColorpicker version class update to 0.2.
	- Added support for private values.
	- Added support for light/dark CSS formatting.
	- Added `destroy()` method.
	- Added `--wui-colorpicker-box-shadowcolor` CSS var.
	- Added relative positioning to the HTML element.
	- Fixed bug to ensure HTML element references of type `HTMLInputElement`.
21. WUICheckbox version class update to 0.2.
	- Added support for private values.
	- Fixed bug in drag event when selecting and deselecting the checkbox using the `mousedown` event, enabling it only when the left button remains pressed.
	- Fixed bug to ensure HTML element references of type `HTMLInputElement`.
22. WUIButton version class update to 0.2.
	- Added support for private values.
	- Added `onDblClick` property.
	- Fixed bug to ensure HTML element references of type `HTMLButtonElement`.

## [v0.1.0] - 2024-05-01

Features:

1. Release version.

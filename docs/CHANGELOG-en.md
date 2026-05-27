> [!IMPORTANT]
> The GitHub account `@wuiproject` was migrated to `@wui-js` to match the name with the NPM account.

[English](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/CHANGELOG-en.md) |
[Español](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/CHANGELOG-es.md)
---

# Change Log

## [v0.8.1] - 2026-05-28

Features:

1. Updated the resource loader `wui.js`.
2. WUIPaging version class update to `0.6`.
	- Improved handling of out-of-view pages.

## [v0.8.0] - 2026-05-26

Features:

1. Updated the resource loader `wui.js`.
2. WUILanguage version class update to `0.6`.
	- Added `callback` parameter to the `load()` method.
	- Fixed `refresh()` method error.
3. WUIIcon version class update to `0.5`.
	- Added `.print-line` CSS class.
	- Added `.print-fill` CSS class.
	- Added `.blockquote-left-line` CSS class.
	- Added `.blockquote-right-line` CSS class.
	- Added `.code-line` CSS class.
	- Added `.code-slash-line` CSS class.
4. WUIModal version class update to `0.6`.
	- Updated CSS variables values in `.root.css` file.
	- The horizontal padding in the modal title was updated for greater visibility.
5. WUIPaging version class update to `0.5`.
	- Updated CSS variables values in `.root.css` file.
6. WUIList version class update to `0.5`.
	- Updated CSS variables values in `.root.css` file.
7. WUITable version class update to `0.6`.
	- Updated CSS variables values in `.root.css` file.
8. WUIForm version class update to `0.6`.
	- Updated CSS variables values in `.root.css` file.
	- Added `getRighticon()` method.
9. WUISelectpicker version class update to `0.8`.
	- Added boolean property `required`.
	- Added boolean property `hidden`.
	- Added boolean property `autochange`.
	- Added text option `textClass`.
	- Renamed `--wui-selectpicker-box-button-bordercolor` CSS var to `--wui-selectpicker-mobile-box-button-bordercolor`.
	- Added `--wui-selectpicker-box-button-maxwidth` CSS var.
	- Added `--wui-selectpicker-box-button-height` CSS var.
	- Added `--wui-selectpicker-box-button-borderwidth` CSS var.
	- Added `--wui-selectpicker-box-button-bordercolor-out` CSS var.
	- Added `--wui-selectpicker-box-button-bordercolor-over` CSS var.
	- Added `--wui-selectpicker-box-button-bgcolor-out` CSS var.
	- Added `--wui-selectpicker-box-button-bgcolor-over` CSS var.
	- Added `--wui-selectpicker-box-button-horizpadding` CSS var.
	- Added `--wui-selectpicker-box-button-vertpadding` CSS var.
	- Added `--wui-selectpicker-box-button-textsize` CSS var.
	- Renamed method `refresh` to `setOptions`.
	- Updated CSS variables values in `.root.css` file.
10. WUITimepicker version class update to `0.8`.
	- Updated CSS variables values in `.root.css` file.
11. WUIColorpicker version class update to `0.8`.
	- Updated CSS variables values in `.root.css` file.
12. WUIButton version class update to `0.8`.
	- Optimized `init()` method.
	- Fixed error loading the `textData` property.

## [v0.7.1] - 2026-05-16

Features:

1. Updated the resource loader `wui.js`.
2. WUIBody version class update to `0.4`.
	- Added `isCompleted()` method.
3. WUILanguage version class update to `0.4`.
	- Fixed `load()` method error.
4. WUIIcon version class update to `0.5`.
	- Renamed `.columnsgap-line` CSS class to `.columns-gap-line`.
	- Added `.columns-line` CSS class.
	- Added `.columns-x2-line` CSS class.
	- Added `.columns-x3-line` CSS class.
	- Added `.grid3x2-gap-line` CSS class.
	- Added `.grid3x3-gap-line` CSS class.
	- Added `.leftbar-line` CSS class.
	- Added `.leftbar-fill` CSS class.
	- Added `.rightbar-line` CSS class.
	- Added `.rightbar-fill` CSS class.
5. WUIMenubar version class update to `0.5`.
	- Added boolean property `hiddenPassiveBorder`, to hide the passive border of the main bar.
	- Added `--wui-menubar-shadowopacity` CSS var.
	- Added `--wui-menubar-bar-borderradius` CSS var.
	- Added `--wui-menubar-bar-button-borderradius` CSS var.
	- Added `--wui-menubar-submenu-borderradius` CSS var.
	- Added `--wui-menubar-submenu-button-borderradius` CSS var.
	- Added `--wui-menubar-mobile-bar-bgcolor-top` CSS var.
	- Added `--wui-menubar-mobile-bar-bgcolor-bottom` CSS var.
	- Removed `--wui-menubar-borderradius` CSS var.
6. WUISelectpicker version class update to `0.7`.
	- Added array property `options`.
	- Added string property `boxAlign`. Values: `"left"`, `"center"`, `"right"`.
	- Added boolean property `viewicon`, to show the icons of the selected option.
	- Added boolean property `viewtest`, to show the texts of the selected option.
	- Renamed method `loadOptions` to `refresh`.
	- Renamed option property `icon` to `iconClass`.
	- Renamed `--wui-selectpicker-bordercolor` CSS var to `--wui-selectpicker-bordercolor-out`.
	- Added `--wui-selectpicker-bordercolor-over` CSS var.
	- Added `--wui-selectpicker-bordercolor-disabled` CSS var.
	- Added `--wui-selectpicker-viewicon-iconsize` CSS var.
	- Added `--wui-selectpicker-viewicon-icongap` CSS var.
	- Added `--wui-selectpicker-viewicon-iconcolor` CSS var.
	- Added `--wui-selectpicker-box-shadowopacity` CSS var.
	- Added `--wui-selectpicker-box-width` CSS var.
	- Fixed an error in the display of the box when there are no options.
	- Fixed an error in the use of the icon option.
	- Fixed an error in the cancel action on mobile devices.
7. WUIDatepicker version class update to `0.7`.
	- Renamed `--wui-datepicker-bordercolor` CSS var to `--wui-datepicker-bordercolor-out`.
	- Added `--wui-datepicker-bordercolor-over` CSS var.
	- Added `--wui-datepicker-bordercolor-disabled` CSS var.
	- Added `--wui-datepicker-box-shadowopacity` CSS var.
8. WUITimepicker version class update to `0.7`.
	- Renamed `--wui-timepicker-bordercolor` CSS var to `--wui-timepicker-bordercolor-out`.
	- Added `--wui-timepicker-bordercolor-over` CSS var.
	- Added `--wui-timepicker-bordercolor-disabled` CSS var.
	- Added `--wui-timepicker-box-shadowopacity` CSS var.
9. WUIColorpicker version class update to `0.7`.
	- Added `--wui-colorpicker-box-shadowopacity` CSS var.

## [v0.7.0] - 2026-05-14

Features:

1. Updated the resource loader `wui.js`.
2. WUIButton version class update to `0.7`.
	- Fixed an error in overwriting the `iconClass`, `textClass`, `text` and `textData` properties when the HTML element was constructed.

## [v0.6.2] - 2026-05-08

Features:

1. Updated the resource loader `wui.js`.
2. WUIDatepicker version class update to `0.6`.
	- Fixed an error in the selector date box position on mobile devices.
3. WUITimepicker version class update to `0.6`.
	- Fixed an error in the selector time box position on mobile devices.
4. WUIColorpicker version class update to `0.6`.
	- Fixed an error in the selector color box position on mobile devices.

## [v0.6.1] - 2026-05-06

Features:

1. Release of the official documentation site for WUI/JS: [https://docs.wuijs.dev](https://docs.wuijs.dev)
2. Updated the resource loader `wui.js`.
3. WUIIcon version class update to `0.4`.
	- Added `.copy-line` CSS class.
	- Added `.copy-fill` CSS class.
	- Added `.sun-line` CSS class.
	- Added `.sun-fill` CSS class.
4. WUISelectpicker version class update to `0.6`.
	- Improved `onChange` event to trigger later on mobile devices (upon pressing the OK button) and immediately on desktop browsers.
5. WUIButton version class update to `0.6`.
	- Added the `selected` argument of `boolean` type to the `onClick` and `onDblClick` parameters.
	- Modified set of properties `textClass`, `textData`, `iconClass` and `iconImage` to update HTML button construction.
	- Modified set of properties `submit`, `warning` and `flat` to update button CSS styles.

## [v0.6.0] - 2026-05-01

Features:

1. Updated the resource loader `wui.js`.
2. WUIBody version class update to `0.3`.
	- Added `destroy()` method.
3. WUILanguage version class update to `0.3`.
	- Added `destroy()` method.
4. WUIScrolly version class update to `0.5`.
	- Added `.root.css` file with CSS default variable values.
	- Added `destroy()` method.
	- Updated `init()` method to store document-level event handler references for proper cleanup.
5. WUIIcon version class update to `0.3`.
	- Added `.root.css` file with CSS default variable values.
	- Added `.exclamation-octagon-line` CSS class.
	- Added `.warning-octagon-line` CSS class.
	- Added `.exclamation-octagon-fill` CSS class.
	- Added `.warning-octagon-fill` CSS class.
	- Added `.x-triangle-line` CSS class.
	- Added `.close-triangle-line` CSS class.
	- Added `.error-triangle-line` CSS class.
	- Added `.x-triangle-fill` CSS class.
	- Added `.close-triangle-fill` CSS class.
	- Added `.error-triangle-fill` CSS class.
	- Added `.claude-fill` CSS class.
	- Added `.claude-color` CSS class.
6. WUIFade version class update to `0.3`.
	- Added `.root.css` file with CSS default variable values.
7. WUILoader version class update to `0.4`.
	- Added `.root.css` file with CSS default variable values.
	- Added `destroy()` method.
8. WUITooltip version class update to `0.3`.
	- Added `.root.css` file with CSS default variable values.
	- Added `destroy()` method.
	- Updated `init()` method to store event handler references per element for proper cleanup.
9. WUIModal version class update to `0.5`.
	- Added `.root.css` file with CSS default variable values.
	- Fixed an error in the custom webkit scrollbar style (`scrollbar-color` conflict and `:is()` pseudo-selector incompatibility).
10. WUIPaging version class update to `0.4`.
	- Added `.root.css` file with CSS default variable values.
	- Added `destroy()` method.
	- Fixed an error in the custom webkit scrollbar style (`scrollbar-color` conflict and `:is()` pseudo-selector incompatibility).
11. WUISlider version class update to `0.5`.
	- Added `.root.css` file with CSS default variable values.
	- Added `destroy()` method.
	- Updated `load()` method to store document-level event handler references per slide for proper cleanup.
12. WUITabs version class update to `0.3`.
	- Added `.root.css` file with CSS default variable values.
	- Added `destroy()` method.
13. WUIMenubar version class update to `0.4`.
	- Added `.root.css` file with CSS default variable values.
	- Fixed an error in loading the style of disabled buttons on the menu bar (`--wui-menubar-bar-button-textcolor-disabled`).
	- Fixed `destroy()` method: root element was not removed from DOM.
14. WUIList version class update to `0.4`.
	- Added `.root.css` file with CSS default variable values.
	- Fixed an error in the custom webkit scrollbar style (`scrollbar-color` conflict and `:is()` pseudo-selector incompatibility).
15. WUITable version class update to `0.5`.
	- Added `.root.css` file with CSS default variable values.
	- Added `--wui-table-column-bordercolor-disabled` CSS var.
	- Added `--wui-table-row-bordercolor-disabled` CSS var.
	- Fixed an error in the custom webkit scrollbar style (`scrollbar-color` conflict and `:is()` pseudo-selector incompatibility).
16. WUIForm version class update to `0.5`.
	- Added `.root.css` file with CSS default variable values.
	- Added `destroy()` method.
	- Updated `#darkModeListener()` to store observer and media query handler references for proper cleanup.
	- Fixed an error in the custom webkit scrollbar style (`scrollbar-color` conflict and `:is()` pseudo-selector incompatibility).
17. WUISelectpicker version class update to `0.5`.
	- Added `.root.css` file with CSS default variable values.
	- Updated `#darkModeListener()` to store observer and media query handler references for proper cleanup.
	- Updated `destroy()` method to disconnect the dark mode observer and media query listener.
	- Fixed an error in loading the style of the options borders (`--wui-selectpicker-box-option-bordercolor-out`).
	- Fixed an error in the custom webkit scrollbar style (`scrollbar-color` conflict and `:is()` pseudo-selector incompatibility).
18. WUIDatepicker version class update to `0.5`.
	- Added `.root.css` file with CSS default variable values.
	- Updated `#darkModeListener()` to store observer and media query handler references for proper cleanup.
	- Updated `destroy()` method to disconnect the dark mode observer and media query listener.
19. WUITimepicker version class update to `0.5`.
	- Added `.root.css` file with CSS default variable values.
	- Updated `#darkModeListener()` to store observer and media query handler references for proper cleanup.
	- Updated `destroy()` method to disconnect the dark mode observer and media query listener.
	- Fixed an error in the custom webkit scrollbar style (`scrollbar-color` conflict and `:is()` pseudo-selector incompatibility).
20. WUIColorpicker version class update to `0.5`.
	- Added `.root.css` file with CSS default variable values.
	- Updated `#darkModeListener()` to store observer and media query handler references for proper cleanup.
	- Updated `destroy()` method to disconnect the dark mode observer and media query listener.
	- Fixed an error in the custom webkit scrollbar style (`scrollbar-color` conflict and `:is()` pseudo-selector incompatibility).
21. WUISwitch version class update to `0.6`.
	- Added `.root.css` file with CSS default variable values.
22. WUIIntensity version class update to `0.4`.
	- Added `.root.css` file with CSS default variable values.
	- Fixed an error in loading the style in disabled state (`--wui-menubar-bar-button-textcolor-disabled`).
23. WUIButton version class update to `0.5`.
	- Added `.root.css` file with CSS default variable values.
	- Added `destroy()` method.
	- Added `--wui-button-default-borderwidth` CSS var.
	- Added `--wui-button-default-horizpadding` CSS var.
	- Added `--wui-button-default-vertpadding` CSS var.
	- Added `--wui-button-mobile-default-minwidth` CSS var.
	- Fixed an error in loading the style of submit buttons in selected state (`--wui-button-submit-bgcolor-selected`) and disabled state (`--wui-button-submit-bgcolor-disabled`).

## [v0.5.2] - 2026-04-19

Features:

1. Updated the resource loader `wui.js`.
2. WUIModal version class update to `0.4`.
	- Added `--wui-modal-mobile-page-box-topmargin` CSS var to improve compatibility with iPhone screens.
	- Added `--wui-modal-mobile-page-box-borderradius-maximized` CSS var to improve compatibility with iPhone screens.
	- Fixed bug in the `close()` method where the underlying modal was not resized when the current modal was closed.
3. WUIMenubar version class update to `0.3`.
	- Added `compacted` property.
	- Added `--wui-menubar-mobile-bar-horizpadding` CSS var to improve compatibility with iPhone screens.
	- Added `--wui-menubar-mobile-bar-vertpadding` CSS var to improve compatibility with iPhone screens.
4. WUISelectpicker version class update to `0.4`.
	- Improved `init()` method for support of empty HTML elements.
5. WUIDatepicker version class update to `0.4`.
	- Improved `init()` method for support of empty HTML elements.
6. WUITimepicker version class update to `0.4`.
	- Improved `init()` method for support of empty HTML elements.
7. WUIColorpicker version class update to `0.4`.
	- Improved `init()` method for support of empty HTML elements.
8. WUISwitch version class update to `0.5`.
	- Improved `init()` method for support of empty HTML elements.
9. WUIIntensity version class update to `0.2`.
	- Improved `init()` method for support of empty HTML elements.
10. WUIButton version class update to `0.4`.
	- Added `textClass` property.
	- Added `textData` property.
	- Added `iconClass` property.
	- Added `iconImage` property.
	- Added `submit` property.
	- Added `warning` property.
	- Added `flat` property.
	- Improved `init()` method for support of empty HTML elements.

## [v0.5.1] - 2026-04-09

Features:

1. Updated the resource loader `wui.js`.

## [v0.5.0] - 2026-04-09

Features:

> [!NOTE]
> The owner of the official repository changed from **@wuijsproject** to **@wui-js** in order to have integrity between the GitHub and NPM accounts.

1. Enable installation via NPM.
2. Change the name of the repository from `wuijs-lib` to `wuijs-main-lib` so that the paths for the installation methods via GitHub and NPM were analogous.
3. Change the name of the source directory from `src/wui` to `src/wui-js/main` to support integration with other libraries of the WUI/JS project.
4. Updated the resource loader `wui.js`.

## [v0.4.0] - 2026-03-20

Features:

1. Renamed source directories and files to lowercase (e.g. `src/WUI/Slider/WUISlider-0.3.js` → `src/wui/slider/wui-slider-0.4.js`).
2. Added simple loading scripts `wui.js`.
3. WUICookie version class update to `0.4`.
	- Renamed the directory and files to lowercase.
	- Fixed bug in the `get()` method where a leading space in the cookie string caused an off-by-one error, returning `=value` instead of `value`.
4. WUIHead version class update to `0.3`.
	- Renamed the directory and files to lowercase.
5. WUIBody version class update to `0.3`.
	- Renamed the directory and files to lowercase.
6. WUILanguage version class update to `0.3`.
	- Renamed the directory and files to lowercase.
7. WUIScrolly version class update to `0.4`.
	- Renamed the directory and files to lowercase.
8. WUIIcon version class update to `0.2`.
	- Renamed the directory and files to lowercase.
	- Fixed typo in CSS icon class names: `excamation` → `exclamation` (affected classes: `exclamation-line`, `exclamation-lg-line`, `exclamation-circle-line`, `exclamation-circle-fill`, `exclamation-triangle-line`, `exclamation-triangle-fill`).
9. WUIFade version class update to `0.2`.
	- Renamed the directory and files to lowercase.
10. WUILoader version class update to `0.3`.
	- Renamed the directory and files to lowercase.
11. WUITooltip version class update to `0.2`.
	- Renamed the directory and files to lowercase.
12. WUIModal version class update to `0.3`.
	- Renamed the directory and files to lowercase.
	- Added a dedicated `.overlay` child element to handle the overlay background, replacing the previous approach based on the `.over` CSS class.
	- Fixed mobile page modal animation by correcting the `top` position calculation on the underlying modal when stacking.
	- Fixed bug in the `.slide` class for mobile page modals in the responsive media query.
13. WUIPaging version class update to `0.3`.
	- Renamed the directory and files to lowercase.
14. WUISlider version class update to `0.4`.
	- Renamed the directory and files to lowercase.
15. WUITabs version class update to `0.2`.
	- Renamed the directory and files to lowercase.
16. WUIMenubar version class update to `0.2`.
	- Renamed the directory and files to lowercase.
17. WUIList version class update to `0.3`.
	- Renamed the directory and files to lowercase.
18. WUITable version class update to `0.4`.
	- Renamed the directory and files to lowercase.
19. WUIForm version class update to `0.4`.
	- Renamed the directory and files to lowercase.
20. WUIFormat version class update to `0.3`.
	- Renamed the directory and files to lowercase.
21. WUISelectpicker version class update to `0.3`.
	- Renamed the directory and files to lowercase.
22. WUIDatepicker version class update to `0.3`.
	- Renamed the directory and files to lowercase.
23. WUITimepicker version class update to `0.3`.
	- Renamed the directory and files to lowercase.
24. WUIColorpicker version class update to `0.3`.
	- Renamed the directory and files to lowercase.
25. WUISwitch version class update to `0.4`.
	- Renamed the directory and files to lowercase.
26. WUIIntensity version class update to `0.2`.
	- Renamed the directory and files to lowercase.
27. WUIButton version class update to `0.3`.
	- Renamed the directory and files to lowercase.

## [v0.3.0] - 2026-02-09

Features:

1. Changed the name of the WUICheckbox class from version 0.2 to WUISwitch version 0.3.
2. WUICookie version class update to `0.3`.
	- Added `encode()` method.
	- Added a `string` return type to the `set()` method with the encoded cookie.
	- Changed the `max-age` statement by `expires` in the cookie encoding..
3. WUIScrolly version class update to `0.3`.
	- Changed `--wui-scrolly-paging-bgcolor` to `--wui-scrolly-paging-bgcolor-hidden` CSS var.
	- Added `--wui-scrolly-paging-bgcolor-visible` CSS var.
4. WUISlider version class update to `0.3`.
	- Changed `--wui-slider-dot-bgcolor` to `--wui-slider-paging-bgcolor-hidden` CSS var.
	- Changed `--wui-slider-dot-bgcolor-selected` to `--wui-slider-paging-bgcolor-visible` CSS var.
	- Removed `--wui-slider-dots-bgcolor` CSS var.
5. WUITable version class update to `0.3`.
	- Added `resetPaging` property.
	- Added filler column to maintain table width.
6. WUIForm version class update to `0.3`.
	- Added compatibility with WUISwitch version 0.3.
	- Added "fill" form style.
7. WUIFormat version class update to `0.3`.
	- Added `wuiDayName()` method to the `Date` data type.
	- Added `wuiMonthName()` method to the `Date` data type.

## [v0.2.0] - 2025-12-01

Features:

1. Inclusion of [Documentation](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md).
2. Added WUIMenubar class version `0.1`.
3. Added WUIIntensity class version `0.1`.
4. WUICookie version class update to `0.2`.
	- Added support for private values.
	- Added the `remove()` method, which allows removing a cookie by its name.
	- Fixed bug in the `remove()` method.
5. WUIHead version class update to `0.2`.
	- Improved code to prevent XSS attacks.
	- Fixed bug to ensure DOM element references.
6. WUIBody version class update to `0.2`.
	- Added support for private values.
7. WUILanguage version class update to `0.2`.
	- Changed the default value of the `lang` property by `"en"`.
	- Added support for private values.
	- Added the `mode` property, to support files in JS and JSON format.
	- Added the `refresh()` method, which allows updating the content of a specific HTML element.
	- Removed global constant `languages` and replaced with a variable definition, optional and external to the class, which is assigned using the `onLoad()` property (see implementation example in [Documentation](./README.md?#wuiLanguage)).
8. WUIScrolly version class update to `0.2`.
	- Added support for private values.
	- Added `.fadein-top` alias to the style class `fadein-up`.
	- Added `direction` property.
	- Added `sceneIndex`, `sceneStep` and `sceneProgress` arguments were added to the `onMove()` property.
9. WUILoader version class update to `0.2`.
	- Added support for private values.
	- Fixed bug in `init()` method.
10. WUIModal version class update to `0.2`.
	- Added support for private values.
	- Added `destroy()` method.
	- Fixed bug in drag event when maximizing and closing a page-style modal using the `mousedown` event, enabling it only when the left mouse button remains pressed.
11. WUIPaging version class update to `0.2`.
	- Added support for private values.
	- Added `destroy()` method.
12. WUISlider version class update to `0.2`.
	- Added support for private values.
	- Fixed bug in drag event when moving a scene using the `mousedown` event, enabling it only when the left button remains pressed.
	- Fixed bug in `load()` method.
13. WUIList version class update to `0.2`.
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
14. WUITable version class update to `0.2`.
	- Added support for private values.
	- Added support for light/dark CSS formatting.
	- Added `destroy()` method.
	- Added `--wui-table-shadowcolor` CSS var.
15. WUIForm version class update to `0.2`.
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
16. WUIFormat version class update to `0.2`.
	- Added support for `Windows Phone` in the `getOS()` and `getMobileOS()` methods.
	- Added error handling to the `wuiToString()` method.
17. WUISelectpicker version class update to `0.2`.
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
18. WUIDatepicker version class update to `0.2`.
	- Added support for private values.
	- Added support for light/dark CSS formatting.
	- Added `destroy()` method.
	- Added `--wui-datepicker-box-shadowcolor` CSS var.
	- Added relative positioning to the HTML element.
	- Fixed bug to load the `value` property when instantiating the object.
	- Fixed bug to ensure HTML element references of type `HTMLInputElement`.
19. WUITimepicker version class update to `0.2`.
	- Added support for private values.
	- Added support for light/dark CSS formatting.
	- Added `destroy()` method.
	- Added `--wui-timepicker-box-shadowcolor` CSS var.
	- Added relative positioning to the HTML element.
	- Fixed bug to load the `value` property when instantiating the object.
	- Fixed bug to ensure HTML element references of type `HTMLInputElement`.
20. WUIColorpicker version class update to `0.2`.
	- Added support for private values.
	- Added support for light/dark CSS formatting.
	- Added `destroy()` method.
	- Added `--wui-colorpicker-box-shadowcolor` CSS var.
	- Added relative positioning to the HTML element.
	- Fixed bug to ensure HTML element references of type `HTMLInputElement`.
21. WUICheckbox version class update to `0.2`.
	- Added support for private values.
	- Fixed bug in drag event when selecting and deselecting the checkbox using the `mousedown` event, enabling it only when the left button remains pressed.
	- Fixed bug to ensure HTML element references of type `HTMLInputElement`.
22. WUIButton version class update to `0.2`.
	- Added support for private values.
	- Added `onDblClick` property.
	- Fixed bug to ensure HTML element references of type `HTMLButtonElement`.

## [v0.1.0] - 2024-05-01

Features:

1. Release version.

[English](wui-menubar-en.md) | [Español](wui-menubar-es.md)

[wuijs-main-lib](../../README-en.md)

# WUIMenubar

Version: `0.10`

Component for the implementation of menu bars.

## Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/menubar/wui-menubar-0.10.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/menubar/wui-menubar-0.10.js) |
| CSS  | [src/wui-js/main/menubar/wui-menubar-0.10.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/menubar/wui-menubar-0.10.css) |
| CSS  | [src/wui-js/main/menubar/wui-menubar-0.10.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/menubar/wui-menubar-0.10.root.css) |

## Constructor

| Type       | Description |
| ---------- | ----------- |
| WUIMenubar | `WUIMenubar([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

## Properties

| Property            | Type       | Default value.   | Description |
| ------------------- | ---------- | ---------------- | ----------- |
| selector            | `string`   | `".wui-menubar"` | (get/set)<br><br>CSS selector that defines the HTML element that will be converted into the object. If more than one element matches the selector, only the first match will be included. |
| fixed               | `boolean`  | `false`          | (get/set)<br><br>Defines whether the menu is fixed to the edge of the screen.
| centered            | `boolean`  | `true`           | (get/set)<br><br>Defines whether the menu is displayed vertically centered. |
| compacted           | `boolean`  | `false`          | (get/set)<br><br>Defines whether the menu is displayed in a compact format. |
| expansive           | `boolean`  | `true`           | (get/set)<br><br>Defines whether the menu expands.. The function of expansion is not visible in mobile mode (when the screen width is less than `768px`). |
| autoClose           | `boolean`  | `true`           | (get/set)<br><br>Defines whether the submenu closes automatically when a button within it is clicked. If the property is `false`, a button to close the submenu manually will be loaded at the top. |
| hiddenPassiveBorder | `boolean`  | `false`          | (get/set)<br><br>Hides the passive border of the main bar (top, left and bottom in normal mode and left, right and bottom in mobile mode). |
| separations         | `boolean`  | `false`          | (get/set)<br><br>Defines whether a separator line is included between the menu bar sections. |
| nowrapTooltips      | `boolean`  | `false`          | (get/set)<br><br>Defines whether button tooltips keep their text on a single line (`white-space: nowrap`) instead of wrapping to fit their content width. |
| topButtons          | `array`    | `[]`             | (get/set)<br><br>List of menu top buttons, as defined by **Button Options**. These buttons are not visible in mobile mode (when the screen width is less than `768px`). |
| mainButtons         | `array`    | `[]`             | (get/set)<br><br>List of menu main buttons, as defined by **Button Options**. |
| bottomButtons       | `array`    | `[]`             | (get/set)<br><br>List of menu bottom buttons, as defined by **Button Options**. These buttons are not visible in mobile mode (when the screen width is less than `768px`). |
| onClick             | `function` | `null`           | (get/set)<br><br>Function run when a button is clicked. The function receives as parameters:<br><br>**• id:** `string`, unique button identifier. |
| onSelect            | `function` | `null`           | (get/set)<br><br>Function run when a button with the `selectable` property is selected. The function receives as parameters:<br><br>**• id:** `string`, unique button identifier. |

## Button Options

| Property     | Type       | Default value | Description |
| ------------ | ---------- | ------------- | ----------- |
| id           | `string`   | `undefined`   | Unique button identifier. |
| iconImage    | `string`   | `undefined`   | URL of the image associated with the menu button. |
| iconClass    | `string`   | `undefined`   | CSS styles that define the menu button icon. This option can optionally be used with the [WUIIcon](../icon/wui-icon-en.md) library by using the `wui-icon` style in conjunction with a specific icon style. |
| label        | `string`   | `""`          | Label text associated with the menu button. |
| radioMode    | `boolean`  | `true`        | Defines whether the button behaves like a radio mode button. |
| selectable   | `boolean`  | `true`        | Defines whether the button is selectable. |
| hoverable    | `boolean`  | `true`        | Defines whether the button reacts to the `hover` event. |
| tooltipable  | `boolean`  | `true`        | Defines whether the button displays a tooltip when collapsed and the screen width is greater than or equal to `768px`. |
| selected     | `boolean`  | `false`       | Defines whether the button is selected. |
| enabled      | `boolean`  | `true`        | Defines whether the button is enabled. |
| onClick      | `function` | `null`        | Function run when the button is clicked. If defined, this option takes precedence over the `onClick` property. |

## Methods

| Method           | Return type   | Description |
| ---------------- | ------------- | ----------- |
| getElement       | `HTMLElement` | `getElement()`<br><br>Returns the HTML container element of the object. |
| getButtonOptions | `object`      | `getButtonOptions(id)`<br><br>Arguments:<br>**• id:** `string`, unique button identifier.<br><br>Returns the menu button options object according to the unique button identifier passed as argument, or `null` if it does not exist. |
| init             | `void`        | `init()`<br><br>Initializes the object. |
| selectButton     | `void`        | `selectButton(id[, selected[, runCallback]])`<br><br>Arguments:<br>**• id:** `string`, unique button identifier.<br>**• selected:** `boolean`, button selection state. The default value is `true`. <br>**• runCallback:** `boolean`, run the `onClick` and `onSelect` callbacks. The default value is `true`.<br><br>Select or unselect a menu button. |
| enableButton     | `void`        | `enableButton(id[, enabled])`<br><br>Arguments:<br>**• id:** `string`, unique button identifier.<br>**• enabled:** `boolean`, button enable state. The default value is `true`.<br><br>Enables or disables a menu button. |
| setPhoto         | `void`        | `setPhoto(id[, src])`<br><br>Arguments:<br>**• id:** `string`, unique button identifier.<br>**• src:** `string`, image source. The default value is `""`.<br><br>Upload an image above a button icon. |
| setBubble        | `void`        | `setBubble(id, number)`<br><br>Arguments:<br>**• id:** `string`, unique button identifier.<br>**• number:** `number`, number that will appear in the bubble. The value `0` hides the bubble. |
| close            | `void`        | `close()`<br><br>Close the submenu if it is open. |
| destroy          | `void`        | `destroy()`<br><br>Destroyer. |

## CSS Variables

| Variable                                          | Description |
| ------------------------------------------------- | ----------- |
| `--wui-menubar-shadowcolor`                       | Shadow color for the menu and submenu bars. |
| `--wui-menubar-shadowopacity`                     | Shadow opacity for the menu and submenu bars. |
| `--wui-menubar-margin`                            | Outer margin of the menu bar relative to the window edges. |
| `--wui-menubar-bar-borderradius`                  | Border radius for the main menu bar. |
| `--wui-menubar-bar-bordercolor`                   | Border color of the main menu bar. |
| `--wui-menubar-bar-bgcolor-top`                   | Top background color of the main bar (used in gradient). |
| `--wui-menubar-bar-bgcolor-bottom`                | Bottom background color of the main bar (used in gradient). |
| `--wui-menubar-bar-button-borderradius`           | Border radius for the main bar buttons. |
| `--wui-menubar-bar-button-bgcolor-out`            | Background color of main bar buttons in normal state. |
| `--wui-menubar-bar-button-bgcolor-over`           | Background color of main bar buttons in hover/focus state. |
| `--wui-menubar-bar-button-bgcolor-selected`       | Background color of main bar buttons in selected state. |
| `--wui-menubar-bar-button-bgcolor-disabled`       | Background color of main bar buttons in disabled state. |
| `--wui-menubar-bar-button-iconsize`               | Icon size for main bar buttons. |
| `--wui-menubar-bar-button-iconcolor-out`          | Icon color of main bar buttons in normal state. |
| `--wui-menubar-bar-button-iconcolor-over`         | Icon color of main bar buttons in hover/focus state. |
| `--wui-menubar-bar-button-iconcolor-selected`     | Icon color of main bar buttons in selected state. |
| `--wui-menubar-bar-button-iconcolor-disabled`     | Icon color of main bar buttons in disabled state. |
| `--wui-menubar-bar-button-textcolor-out`          | Text color of main bar buttons in normal state. |
| `--wui-menubar-bar-button-textcolor-over`         | Text color of main bar buttons in hover/focus state. |
| `--wui-menubar-bar-button-textcolor-selected`     | Text color of main bar buttons in selected state. |
| `--wui-menubar-bar-button-textcolor-disabled`     | Text color of main bar buttons in disabled state. |
| `--wui-menubar-separation-bordercolor`            | Color of the separator line between menu bar sections. |
| `--wui-menubar-expander-bgcolor-out`              | Background color of the expander/contractor button in normal state. |
| `--wui-menubar-expander-bgcolor-over`             | Background color of the expander/contractor button in hover state. |
| `--wui-menubar-expander-iconsize`                 | Icon size of the expander/contractor button. |
| `--wui-menubar-expander-iconcolor-out`            | Icon color of the expander/contractor button in normal state. |
| `--wui-menubar-expander-iconcolor-over`           | Icon color of the expander/contractor button in hover state. |
| `--wui-menubar-expander-expandicon-src`           | Source for the expand icon<br>(format: `url()` or `none` for the default source). |
| `--wui-menubar-expander-contracticon-src`         | Source for the contract icon<br>(format: `url()` or `none` for the default source). |
| `--wui-menubar-opener-iconsize`                   | Icon size of the submenu opener button. |
| `--wui-menubar-opener-openicon-src`               | Source for the submenu open icon<br>(format: `url()` or `none` for the default source). |
| `--wui-menubar-opener-closeicon-src`              | Source for the submenu close icon<br>(format: `url()` or `none` for the default source). |
| `--wui-menubar-submenu-borderradius`              | Border radius for the submenu. |
| `--wui-menubar-submenu-bordercolor`               | Border color of the submenu. |
| `--wui-menubar-submenu-bgcolor`                   | Background color of the submenu. |
| `--wui-menubar-submenu-button-borderradius`       | Border radius for submenu buttons. |
| `--wui-menubar-submenu-button-bgcolor-out`        | Background color of submenu buttons in normal state. |
| `--wui-menubar-submenu-button-bgcolor-over`       | Background color of submenu buttons in hover/focus state. |
| `--wui-menubar-submenu-button-bgcolor-selected`   | Background color of submenu buttons in selected state. |
| `--wui-menubar-submenu-button-bgcolor-disabled`   | Background color of submenu buttons in disabled state. |
| `--wui-menubar-submenu-button-iconsize`           | Icon size for submenu buttons. |
| `--wui-menubar-submenu-button-iconcolor-out`      | Icon color of submenu buttons in normal state. |
| `--wui-menubar-submenu-button-iconcolor-over`     | Icon color of submenu buttons in hover/focus state. |
| `--wui-menubar-submenu-button-iconcolor-selected` | Icon color of submenu buttons in selected state. |
| `--wui-menubar-submenu-button-iconcolor-disabled` | Icon color of submenu buttons in disabled state. |
| `--wui-menubar-submenu-button-textcolor-out`      | Text color of submenu buttons in normal state. |
| `--wui-menubar-submenu-button-textcolor-over`     | Text color of submenu buttons in hover/focus state. |
| `--wui-menubar-submenu-button-textcolor-selected` | Text color of submenu buttons in selected state. |
| `--wui-menubar-submenu-button-textcolor-disabled` | Text color of submenu buttons in disabled state. |
| `--wui-menubar-tooltip-bgcolor`                   | Background color of the tooltip that appears when hovering over a collapsed button (desktop only). |
| `--wui-menubar-tooltip-textcolor`                 | Text color of the tooltip. |
| `--wui-menubar-bubble-bgcolor`                    | Background color of the notification bubble on buttons. |
| `--wui-menubar-bubble-textcolor`                  | Text color of the notification bubble. |
| `--wui-menubar-mobile-bar-bgcolor-top`            | Top background color of the main menu bar in mobile mode (used in gradient). |
| `--wui-menubar-mobile-bar-bgcolor-bottom`         | Bottom background color of the main menu bar in mobile mode (used in gradient). |
| `--wui-menubar-mobile-bar-horizpadding`           | Horizontal inner padding of the main menu bar in mobile mode. |
| `--wui-menubar-mobile-bar-vertpadding`            | Vertical inner padding of the main menu bar in mobile mode. |
| `--wui-menubar-mobile-opener-closeicon-src`       | Source for the submenu close icon in mobile mode<br>(format: `url()` or `none` for the default source). |

## Implementation

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

.output {
	position: absolute;
	top: 10px;
	left: 10px;
	right: 10px;
	text-align: right;
	font-family: monospace;
}

@media screen and (max-width: 767px) {
	.output {
		text-align: center:
	}
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.8.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.8.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/menubar/wui-menubar-0.10.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/menubar/wui-menubar-0.10.css">
<script type="text/javascript" src="/libraries/wui-js/main/menubar/wui-menubar-0.10.js"></script>
```

HTML code:

```html
<div class="wui-menubar my-menubar"></div>
<div class="output"></div>
```

JS code:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const menubar = new WUIMenubar({
		selector: ".wui-menubar.my-menubar",
		//fixed: false,
		centered: false,
		//compacted: false,
		//expansive: true,
		autoClose: false,
		//hiddenPassiveBorder: false,
		separations: true,
		//nowrapTooltips: false,
		topButtons: [{
			id: "logo",
			iconImage: "https://wuijs.dev/Images/Logo/wuijs-isotype-color.svg",
			label: "WUI /JS Lib",
			tooltipable: false,
			selectable: false
		}],
		mainButtons: [{
			id: "zones",
			iconClass: "wui-icon home-fill",
			label: "Home",
			selected: true
		}, {
			id: "settings",
			iconClass: "wui-icon gear-fill",
			label: "Settings",
			selectable: false
		}, {
			id: "tools",
			iconClass: "wui-icon pencil-fill",
			label: "Tools",
			buttons: [{
				id: "users",
				iconClass: "wui-icon palette-fill",
				label: "Colors"
			}, {
				id: "zoomin",
				iconClass: "wui-icon zoomin-line",
				label: "Zoom in"
			}, {
				id: "zoomout",
				iconClass: "wui-icon zoomout-line",
				label: "Zoom out"
			}, {
				id: "images",
				iconClass: "wui-icon image-fill",
				label: "Images"
			}]
		}, {
			id: "account",
			iconClass: "wui-icon person-circle-fill",
			photoImage: "",
			label: "Account",
			selectable: false
		}, {
			id: "notifications",
			iconClass: "wui-icon bell-fill",
			label: "Notifications",
			radio: false
		}],
		bottomButtons: [{
			id: "logout",
			iconClass: "wui-icon logout-line",
			label: "Logout",
			selectable: false
		}],
		onClick: (id) => {
			output.textContent = `Click - id button: "${id}"`;
		},
		onSelect: (id) => {
			output.textContent = `Select - id button: "${id}"`;
		}
	});
	menubar.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-menubar-submenu&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-menubar-submenu&lang=en).

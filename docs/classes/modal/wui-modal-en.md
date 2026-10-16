[English](wui-modal-en.md) | [Español](wui-modal-es.md)

[wuijs-main-lib](../../README-en.md)

# WUIModal

Version: `0.13`

Component for the implementation of dialog boxes (type `message`) and pop-up windows (type `page`).

## Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/modal/wui-modal-0.13.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/modal/wui-modal-0.13.js) |
| CSS  | [src/wui-js/main/modal/wui-modal-0.13.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/modal/wui-modal-0.13.css) |
| CSS  | [src/wui-js/main/modal/wui-modal-0.13.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/modal/wui-modal-0.13.root.css) |

## Constructor

| Type     | Description |
| -------- | ----------- |
| WUIModal | `WUIModal([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

## Properties

| Property        | Type       | Default value | Description |
| --------------- | ---------- | ------------- | ----------- |
| selector        | `string`   | `""`          | (get/set)<br><br>CSS selector that defines the HTML container element of the object. If there is more than one matching element with the selector, only the first match will be included. |
| mode            | `string`   | `"page"`      | (get/set)<br><br>Display mode of the modal.<br><br>Values:<br>• `"message"`: dialog box.<br>• `"page"`: pop-up window.<br>• `"smallpage"`: small pop-up window.<br>• `"slidepage"`: side pop-up window.<br><br>In mobile mode, the `"page"` and `"slidepage"` modes are displayed as a sheet that slides up from the bottom of the screen. |
| slidePosition   | `string`   | `"right"`     | (get/set)<br><br>Side of the screen on which the modal opens and closes when the `mode` property is `"slidepage"`.<br><br>Values:<br>• `"left"`<br>• `"right"`<br><br>It is applied on the next opening of the modal. It has no effect in mobile mode. |
| overlay         | `boolean`  | `true`        | (get/set)<br><br>Defines whether the background overlay is displayed. In mobile mode the overlay is always displayed.<br><br>When the `mode` property is `"slidepage"` and the value is `false`, the container element fits the modal box, allowing interaction with the background page. |
| priority        | `boolean`  | `false`       | (get/set)<br><br>Defines whether the modal has stacking priority (`z-index`) over modals without priority. |
| transitionDelay | `number`   | `300`         | (get/set)<br><br>Duration of the modal opening and closing transitions in milliseconds. The maximize transition lasts one tenth of this value. |
| onStartOpen     | `function` | `null`        | (get/set)<br><br>Function that is executed when the modal starts opening. If it returns exactly `false`, the opening is cancelled. |
| onOpen          | `function` | `null`        | (get/set)<br><br>Function that is executed when the modal has completely opened. |
| onMaximize      | `function` | `null`        | (get/set)<br><br>Function that is executed when the modal is maximized. |
| onScrolling     | `function` | `null`        | (get/set)<br><br>Function that is executed during scrolling of the modal body. |
| onStartClose    | `function` | `null`        | (get/set)<br><br>Function that is executed when the modal starts closing. If it returns exactly `false`, the closing is cancelled. |
| onClose         | `function` | `null`        | (get/set)<br><br>Function that is executed when the modal has completely closed. |
| onBack          | `function` | `null`        | (get/set)<br><br>Function that is executed when the modal back button is pressed. |

## Class Methods

| Method           | Return type | Description |
| ---------------- | ----------- | ----------- |
| getAllInstances  | `Array`     | `WUIModal.getAllInstances()` *(static method)*<br><br>Returns all instances of WUIModal. |
| getOpenInstances | `Array`     | `WUIModal.getOpenInstances()` *(static method)*<br><br>Returns all open instances of WUIModal. |
| closeAll         | `void`      | `WUIModal.closeAll([except])` *(static method)*<br><br>Arguments:<br>**• except:** `string` *optional*, selector of the modal that will be excluded from the closing sequence.<br><br>Closes all modals except the one specified by selector. |

## Instance Methods

| Method        | Return type   | Description |
| ------------- | ------------- | ----------- |
| getElement    | `HTMLElement` | `getElement()`<br><br>Returns the HTML container element of the object. |
| getBox        | `HTMLElement` | `getBox()`<br><br>Returns the HTML element of the modal box. |
| getHeader     | `HTMLElement` | `getHeader()`<br><br>Returns the HTML element of the modal header. |
| getBack       | `HTMLElement` | `getBack()`<br><br>Returns the HTML element of the modal back button. |
| getTopbar     | `HTMLElement` | `getTopbar()`<br><br>Returns the HTML element of the modal top bar. |
| getTitle      | `HTMLElement` | `getTitle()`<br><br>Returns the HTML element of the modal title. |
| getClose      | `HTMLElement` | `getClose()`<br><br>Returns the HTML element of the modal close button. |
| getBody       | `HTMLElement` | `getBody()`<br><br>Returns the HTML element of the modal body. |
| getFooter     | `HTMLElement` | `getFooter()`<br><br>Returns the HTML element of the modal footer. |
| getStatus     | `string`      | `getStatus()`<br><br>Returns the current modal status as a comma-separated string. Possible values: `"opened"`, `"maximized"`, `"under"`, `"close"`. |
| setHeadBorder | `void`        | `setHeadBorder(border)`<br><br>Arguments:<br>**• border:** `boolean`.<br><br>Sets whether the header has a bottom border. |
| init          | `void`        | `init()`<br><br>Initializes the object. |
| open          | `void`        | `open([onOpen[, delay]])`<br><br>Arguments:<br>**• onOpen:** `function` *optional*, this function is executed when the modal is opened. The default value corresponds to the `onOpen` property.<br>**• delay:** `number` *optional*, modal opening duration in milliseconds. The default value corresponds to that of the `transitionDelay` property.<br><br>Opens the modal. |
| resposive     | `void`        | `resposive()`<br><br>Adjusts the modal to the window size. |
| maximize      | `void`        | `maximize([onMaximize[, delay]])`<br><br>Arguments:<br>**• onMaximize:** `function` *optional*, this function is executed when the modal is maximized. The default value corresponds to the `onMaximize` property.<br>**• delay:** `number` *optional*, modal opening duration in milliseconds, of which maximizing uses one tenth. The default value corresponds to that of the `transitionDelay` property.<br><br>Maximizes the modal. |
| close         | `void`        | `close([onClose[, delay]])`<br><br>Arguments:<br>**• onClose:** `function` *optional*, this function is executed when the modal closes. The default value corresponds to the `onClose` property.<br>**• delay:** `number` *optional*, modal closing duration in milliseconds. The default value corresponds to that of the `transitionDelay` property.<br><br>Closes the modal. |
| isOpen        | `boolean`     | `isOpen()`<br><br>Returns whether the modal is open. |
| destroy       | `void`        | `destroy()`<br><br>Destructor. |

## CSS Variables

| Variable                                             | Description |
| ---------------------------------------------------- | ----------- |
| `--wui-modal-transition-delay`                       | Duration of the modal transitions. The `open()`, `maximize()` and `close()` methods assign it on the container element from the `transitionDelay` property. |
| `--wui-modal-overlay-bgcolor`                        | Background color of the modal overlay. |
| `--wui-modal-box-borderwidth`                        | Border width of the modal box. |
| `--wui-modal-box-bordercolor`                        | Border color of the modal box. |
| `--wui-modal-box-borderradius`                       | Border radius of the modal box. |
| `--wui-modal-box-bgcolor`                            | Background color of the modal box. |
| `--wui-modal-back-textcolor`                         | Text color of the back button. |
| `--wui-modal-close-bgcolor`                          | Background color of the close button. |
| `--wui-modal-topbar-height`                          | Height of the modal top bar. |
| `--wui-modal-title-textfont`                         | Font of the modal title text. |
| `--wui-modal-title-textcase`                         | Text transformation of the title (uppercase, lowercase, none). |
| `--wui-modal-title-textcolor`                        | Text color of the modal title. |
| `--wui-modal-body-scroll-bgcolor-out`                | Scrollbar color of the body in normal state. |
| `--wui-modal-body-scroll-bgcolor-over`               | Scrollbar color of the body in hover state. |
| `--wui-modal-footer-bordercolor`                     | Border color of the modal footer. |
| `--wui-modal-button-submit-bgcolor-mobile`           | Background color of the submit button in mobile mode. |
| `--wui-modal-button-submit-textcolor-mobile`         | Text color of the submit button in mobile mode. |
| `--wui-modal-button-warning-textcolor-mobile`        | Text color of the warning button in mobile mode. |
| `--wui-modal-message-box-width`                      | Width of the message type modal box. |
| `--wui-modal-message-box-bgcolor`                    | Background color of the message type modal box. |
| `--wui-modal-message-box-textcolor`                  | Text color of the message type modal box. |
| `--wui-modal-message-linkcolor`                      | Link color in the message type modal. |
| `--wui-modal-message-mobile-box-width`               | Width of the message type modal box in mobile mode. |
| `--wui-modal-message-mobile-footer-bordercolor`      | Footer border color of the message type modal in mobile mode. |
| `--wui-modal-message-mobile-button-bordercolor`      | Button border color of the message type modal in mobile mode. |
| `--wui-modal-page-box-width`                         | Width of the page type modal box. |
| `--wui-modal-page-box-height`                        | Height of the page type modal box. |
| `--wui-modal-page-box-borderradius`                  | Border radius of the page type modal box. |
| `--wui-modal-page-box-maxheight`                     | Maximum height of the page type modal box. |
| `--wui-modal-page-box-bgcolor`                       | Background color of the page type modal box. |
| `--wui-modal-page-header-topbar-bgcolor`             | Background color of the page type modal header top bar. |
| `--wui-modal-page-header-bordercolor`                | Border color of the page type modal header. |
| `--wui-modal-smallpage-box-width`                    | Width of the small page type modal box. |
| `--wui-modal-smallpage-box-height`                   | Height of the small page type modal box. |
| `--wui-modal-slidepage-box-width`                    | Width of the slide page type modal box. |
| `--wui-modal-slidepage-box-margin`                   | Margin of the slide page type modal box. |
| `--wui-modal-mobile-page-box-topmargin`              | Top margin of the page type modal box in mobile mode. |
| `--wui-modal-mobile-page-box-borderradius-maximized` | Border radius of the maximized page type modal box in mobile mode. |

## Implementation

CSS Code:

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
	display: flex;
	margin: 10px;
	align-items: center;
	gap: 10px;
}

nav > button {
	height: 24px;
	-webkit-border-radius: 12px;
	-moz-border-radius: 12px;
	border-radius: 12px;
	border: 1px solid #ccc;
	background-color: transparent;
}

.my-modal > .box > .body > p {
	text-align: center;
}

.output {
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.8.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/icon/wui-icon-0.8.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/modal/wui-modal-0.13.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/modal/wui-modal-0.13.css">
<script type="text/javascript" src="/libraries/wui-js/main/modal/wui-modal-0.13.js"></script>
```

HTML code:

```html
<nav>
	<button class="open">open modal</button>
	<div class="output"></div>
</nav>
<div class="wui-modal my-modal page">
	<div class="box">
		<div class="header">
			<div class="topbar"></div>
			<div class="title">Modal Title</div>
			<div class="close wui-icon close-lg-line"></div>
		</div>
		<div class="body">
			<p>Modal content...</p>
		</div>
		<div class="footer">
			Footer
		</div>
	</div>
</div>
```

JS code:

```js
const init = () => {
	const button = document.querySelector("button.open");
	const output = document.body.querySelector(".output");
	const modal = new WUIModal({
		selector: ".wui-modal.my-modal",
		//mode: "page",
		//slidePosition: "right",
		//overlay: true,
		//priority: false,
		//transitionDelay: 300,
		onStartOpen: () => {
			output.textContent = "Opening modal";
		},
		onOpen: () => {
			output.textContent = "Modal opened";
		},
		//onMaximize: null,
		//onScrolling: null,
		onStartClose: () => {
			output.textContent = "Closing modal";
		},
		onClose: () => {
			output.textContent = "Modal closed";
		}
		//onBack: null
	});
	modal.init();
	button.addEventListener("click", () => {
		modal.open();
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-modal-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-modal-basic&lang=en).

[English](wui-fade-en.md) | [Español](wui-fade-es.md)

[wuijs-main-lib](../../README-en.md)

# WUIFade

Version: `0.7`

Utilities for fading out and fading control in HTML elements with opacity.

It is a static class that does not have a constructor or properties.

## Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/main/fade/wui-fade-0.7.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/fade/wui-fade-0.7.js) |

## Methods

### Static methods of the `WUIFade` class:

One way to use the library is by calling static methods directly on the `WUIFade` class:

| Method | Return type | Description |
| ------ | ----------- | ----------- |
| in     | `void`      | `in(element[, options])`<br><br>Arguments:<br>**• element:** `HTMLElement` <br>**• options:** `object` *optional*<br><br>Execute the fadein transition. |
| out    | `void`      | `out(element[, options])`<br><br>Arguments:<br>**• element:** `HTMLElement` <br>**• options:** `object` *optional*<br><br>Execute the fadeout transition. |

### Extended methods of the `HTMLElement` class:

Another alternative way is through extended methods of the `HTMLElement` class through its prototype:

| Method.    | Return type | Description |
| ---------- | ----------- | ----------- |
| wuiFadein  | `void`      | `wuiFadein([options])`<br><br>Arguments:<br>**• options:** `object` *optional*<br><br>Execute the fadein transition. |
| wuiFadeout | `void`      | `wuiFadeout([options])`<br><br>Arguments:<br>**• options:** `object` *optional*<br><br>Execute the fadeout transition. |

> [!IMPORTANT]
> Each method call mode is performed on different types of classes, the first is signaled on `WUIFade`, while the second on `HTMLElement`.

### Options

| Option   | Type       | Default value | Description |
| -------- | ---------- | ------------- | ----------- |
| delay    | `number`   | `400`         | Define the time it will take for the transition effect in and out, measured in milliseconds. |
| display  | `string`   | `"block"`     | Sets the value of the CSS `display` property of the HTML element when the incoming transition starts. |
| force    | `boolean`  | `false`       | Both the entrance and exit effects are executed as long as the CSS `display` property is different from `options.display` and `"none"`, respectively. The `force` option ignores this validation. The entrance transition is also executed if an exit transition is in progress. |
| callback | `function` | `undefined`   | Function executed when the transition ends. It is not executed if the transition is interrupted by another one. |

> [!NOTE]
> The transition is implemented with the CSS `transition` property on `opacity`, applied inline on the HTML element during the effect. When it ends, the previous inline `transition` value is restored. If an effect is executed while another one is in progress on the same element, the ongoing effect is interrupted and the new one continues from the current opacity.

## Implementation

CSS code:

```CSS
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
	height: 100%;
	justify-content: center;
	align-items: center;
	gap: 20px;
}

nav button {
	height: 24px;
	-webkit-border-radius: 12px;
	-moz-border-radius: 12px;
	border-radius: 12px;
	border: 1px solid #ccc;
	background-color: transparent;
}

.my-element {
	display: none;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 64px;
	height: 64px;
	margin-top: 32px;
	margin-left: -32px;
	background-color: red;
}
```

HTML head:

```html
<script type="text/javascript" src="/libraries/wui-js/main/fade/wui-fade-0.7.js"></script>
```

HTML code:

```html
<nav>
	<button class="fadein">fade-in</button>
	<button class="fadeout">fade-out</button>
	<div id="myElement" class="my-element"></div>
</nav>
```

JS code:
```js
const init = () => {
	const element = document.getElementById("myElement");
	const fadeinButton = document.querySelector("button.fadein");
	const fadeoutButton = document.querySelector("button.fadeout");
	const options = {
		delay: 200,
		//display: "block"
	};
	fadeinButton.addEventListener("click", () => {
		element.wuiFadein(options);
		// or alternatively
		//WUIFade.in(element, options);
	});
	fadeoutButton.addEventListener("click", () => {
		element.wuiFadeout(options);
		// or alternatively
		//WUIFade.out(element, options);
	});
}

window.addEventListener("DOMContentLoaded", init);
```

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-fade-basic&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-fade-basic&lang=en).

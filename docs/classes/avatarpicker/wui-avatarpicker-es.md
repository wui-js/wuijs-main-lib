[English](wui-avatarpicker-en.md) | [Español](wui-avatarpicker-es.md)

[wuijs-main-lib](../../README-es.md)

# WUIAvatarpicker

Versión: `0.2`

Componente para la implementación de entradas de datos de tipo imagen de avatar, con carga de archivo, encuadre por arrastre y escalado, basada en los elementos HTML `<input type="file">` y `<input type="range">`.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/main/avatarpicker/wui-avatarpicker-0.2.js](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/avatarpicker/wui-avatarpicker-0.2.js) |
| CSS  | [src/wui-js/main/avatarpicker/wui-avatarpicker-0.2.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/avatarpicker/wui-avatarpicker-0.2.css) |
| CSS  | [src/wui-js/main/avatarpicker/wui-avatarpicker-0.2.root.css](https://github.com/wui-js/wuijs-main-lib/blob/main/src/wui-js/main/avatarpicker/wui-avatarpicker-0.2.root.css) |

## Constructor

| Tipo            | Descripción |
| --------------- | ----------- |
| WUIAvatarpicker | `WUIAvatarpicker([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

## Propiedades

| Propiedad           | Tipo       | Valor predeterminado  | Descripción |
| ------------------- | ---------- | --------------------- | ----------- |
| selector            | `string`   | `".wui-avatarpicker"` | (get/set)<br><br>Selector CSS que define el elemento HTML contenedor del objeto. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. |
| name                | `string`   | `""`                  | (get/set)<br><br>Define el nombre de la entrada de datos `<input type="file">`. Se aplica al inicializar el objeto. |
| size                | `number`   | `180`                 | (get/set)<br><br>Tamaño en píxeles del área de previsualización, de la máscara circular y del ancho del menú. Se aplica mediante la variable CSS `--wui-avatarpicker-preview-size` en el elemento HTML contenedor. |
| source              | `string`   | `""`                  | (get/set)<br><br>URL o *data URL* de la imagen a cargar. Al asignarse, la imagen se carga en el área de previsualización. |
| params              | `object`   | `{}`                  | (get/set)<br><br>Parámetros de encuadre de la imagen: `top`, `left`, `width`, `height` (en píxeles) y `scale` (porcentaje). Se actualizan al cargar, arrastrar o escalar la imagen, y se reinician al importar un nuevo archivo o limpiar la imagen. Si se asignan antes de cargar una imagen mediante `source`, se utilizan para restaurar su encuadre. |
| minImageSize        | `number`   | `180`                 | (get/set)<br><br>Tamaño mínimo en píxeles del ancho y alto de la imagen. Si la imagen es menor, se limpia y se ejecuta `onInvalid` con el tipo `"imageSize"`. |
| maxFileSize         | `number`   | `10485760`            | (get/set)<br><br>Tamaño máximo en bytes del archivo de imagen (10 MB por defecto). Si el archivo es mayor, se limpia y se ejecuta `onInvalid` con el tipo `"fileSize"`. |
| enabled             | `boolean`  | `true`                | (get/set)<br><br>Define si la entrada de datos está habilitada. Deshabilitada, no permite importar, arrastrar ni escalar la imagen. |
| onRequirePermission | `function` | `null`                | (get/set)<br><br>Función que se ejecuta al presionar el botón de importación, antes de abrir el explorador de archivos. La función recibe como parámetro una función de continuación que debe ser invocada para abrir el explorador (ej: tras solicitar permisos en entornos nativos). |
| onInvalid           | `function` | `null`                | (get/set)<br><br>Función que se ejecuta cuando el archivo o la imagen no son válidos. La función recibe como parámetros el tipo de error (`"fileSize"` o `"imageSize"`), el valor obtenido y el valor límite. |
| onLoad              | `function` | `null`                | (get/set)<br><br>Función que se ejecuta cuando la imagen se carga y encuadra. La función recibe como parámetro el elemento `HTMLImageElement` de la imagen. |

## Métodos

| Método        | Tipo retorno       | Descripción |
| ------------- | ------------------ | ----------- |
| getElement    | `HTMLDivElement`   | `getElement()`<br><br>Retorna el elemento HTML contenedor del objeto. |
| getInputFile  | `HTMLInputElement` | `getInputFile()`<br><br>Retorna el elemento HTML asociado a la entrada de datos base `<input type="file">`. |
| getInputRange | `HTMLInputElement` | `getInputRange()`<br><br>Retorna el elemento HTML asociado al control de escala `<input type="range">`. |
| init          | `void`             | `init()`<br><br>Inicializa el objeto. |
| explore       | `void`             | `explore()`<br><br>Abre el explorador de archivos para seleccionar una imagen si el objeto está habilitado. |
| scale         | `void`             | `scale(scale)`<br><br>Parámetros:<br>**• scale:** `number`.<br><br>Escala la imagen al porcentaje indicado respecto a su tamaño natural, manteniendo el área de previsualización cubierta. |
| clear         | `void`             | `clear()`<br><br>Limpia la imagen, la entrada de datos y los parámetros de encuadre. |
| destroy       | `void`             | `destroy()`<br><br>Destructor. |

## Variables CSS

| Variable                                                 | Descripción |
| -------------------------------------------------------- | ----------- |
| `--wui-avatarpicker-preview-size`                        | Tamaño inicial del área de previsualización. La propiedad `size` lo sobrescribe en el elemento contenedor. |
| `--wui-avatarpicker-range-thumb-size`                    | Tamaño del selector del control de escala. |
| `--wui-avatarpicker-range-thumb-bgcolor-out`             | Color de fondo del selector del control de escala en estado normal. |
| `--wui-avatarpicker-range-thumb-bgcolor-over`            | Color de fondo del selector del control de escala en estado hover. |
| `--wui-avatarpicker-range-thumb-bgcolor-disabled`        | Color de fondo del selector del control de escala en estado deshabilitado. |
| `--wui-avatarpicker-range-trackbar-height`               | Altura de la barra del control de escala. |
| `--wui-avatarpicker-range-trackbar-borderwidth`          | Ancho del borde de la barra del control de escala. |
| `--wui-avatarpicker-range-trackbar-bordercolor-out`      | Color del borde de la barra del control de escala en estado normal. |
| `--wui-avatarpicker-range-trackbar-bordercolor-focus`    | Color del borde de la barra del control de escala en estado hover o foco. |
| `--wui-avatarpicker-range-trackbar-bordercolor-disabled` | Color del borde de la barra del control de escala en estado deshabilitado. |
| `--wui-avatarpicker-range-trackbar-bgcolor-out`          | Color de fondo de la barra del control de escala en estado normal. |
| `--wui-avatarpicker-range-trackbar-bgcolor-focus`        | Color de fondo de la barra del control de escala en estado hover o foco. |
| `--wui-avatarpicker-range-trackbar-bgcolor-disabled`     | Color de fondo de la barra del control de escala en estado deshabilitado. |
| `--wui-avatarpicker-button-bgcolor-out`                  | Color de los íconos de los botones en estado normal. |
| `--wui-avatarpicker-button-bgcolor-over`                 | Color de los íconos de los botones en estado hover. |
| `--wui-avatarpicker-button-bgcolor-disabled`             | Color de los íconos de los botones en estado deshabilitado. |
| `--wui-avatarpicker-button-importicon-src`               | Imagen SVG personalizada del ícono del botón de importación (`url()`). Con valor `none` se utiliza el ícono predeterminado. |
| `--wui-avatarpicker-button-clearicon-src`                | Imagen SVG personalizada del ícono del botón de limpieza (`url()`). Con valor `none` se utiliza el ícono predeterminado. |

## Implementación

Código CSS:

```css
html,
body {
	height: 100%;
	margin: 0;
	padding: 0;
}

nav {
	display: flex;
	margin: 10px;
	align-items: center;
	gap: 10px;
}

.my-avatarpicker {}

.output {
	font-family: monospace;
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/avatarpicker/wui-avatarpicker-0.2.root.css">
<link type="text/css" rel="stylesheet" href="/libraries/wui-js/main/avatarpicker/wui-avatarpicker-0.2.css">
<script type="text/javascript" src="/libraries/wui-js/main/avatarpicker/wui-avatarpicker-0.2.js"></script>
```

Código HTML:

```html
<nav>
	<div class="wui-avatarpicker my-avatarpicker">
		<input type="file" accept="image/gif, image/jpeg, image/png">
	</div>
	<div class="output"></div>
</nav>
```

Código JS:

```js
const init = () => {
	const output = document.body.querySelector(".output");
	const avatarpicker = new WUIAvatarpicker({
		selector: ".wui-avatarpicker.my-avatarpicker",
		name: "myAvatar",
		//size: 180,
		//source: "",
		//params: {},
		//minImageSize: 180,
		maxFileSize: 2097152,
		//enabled: true,
		//onRequirePermission: null,
		onInvalid: (type, value, limit) => {
			output.textContent = `Inválido - tipo: ${type}, valor: ${value}, límite: ${limit}`;
		},
		onLoad: (image) => {
			output.textContent = `Carga - escala: ${avatarpicker.params.scale}%`;
		}
	});
	avatarpicker.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!IMPORTANT]
> Si el selector define un elemento que no es de tipo `HTMLDivElement`, el objeto no se inicializará.

> [!TIP]
> Puede revisar este ejemplo funcional en el enlace: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-avatarpicker-basic&lang=es](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-main-avatarpicker-basic&lang=es).

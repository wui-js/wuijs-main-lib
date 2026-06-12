/*
 * @file wui-colorpicker-0.10.js
 * @class WUIColorpicker
 * @version 0.10
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUIColorpicker {

	static version = "0.10";
	static #defaults = {
		selector: ".wui-colorpicker",
		lang: "en",
		value: "",
		emptyValue: "#000001",
		texts: {},
		openDirection: "down",
		boxAlign: "left",
		hidden: false,
		enabled: true,
		onOpen: null,
		onChange: null,
		onClose: null
	};
	static #icons = {
		"opener-open": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z'/></svg>",
		"opener-close": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z'/></svg>",
		"viewcolor-empty": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor'><path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/><path d='M13.654 2.346a.5.5 0 0 1 0 .708l-10.5 10.5a.5.5 0 0 1-.708-.708l10.5-10.5a.5.5 0 0 1 .708 0Z'/></svg>"
	};
	static #texts = {
		de: {
			empty: "leer",
			grid: "Raster",
			list: "Liste",
			cancel: "Abbrechen",
			accept: "Akzeptieren",
			colors: {

				// Neutrals

				black: "Schwarz",
				darkSlateGray: "Dunkles Schiefergrau",
				dimGray: "Mattgrau",
				slateGray: "Schiefergrau",
				gray: "Grau",
				lightSlateGray: "Helles Schiefergrau",
				darkGray: "Dunkelgrau",
				silver: "Silber",
				gainsboro: "Gainsboro",
				whiteSmoke: "Rauchweiß",
				aliceBlue: "Aliceblau",
				ghostWhite: "Geisterweiß",
				white: "Weiß",

				// Reds and pinks

				darkRed: "Dunkelrot",
				red: "Rot",
				fireBrick: "Ziegelrot",
				crimson: "Karmesinrot",
				pink: "Pink",
				lightPink: "Hellrosa",
				hotPink: "Kräftiges Pink",
				deepPink: "Tiefpink",
				paleVioletRed: "Blasses Violettrot",
				mediumVioletRed: "Mittleres Violettrot",

				// Oranges

				coral: "Koralle",
				tomato: "Tomatenrot",
				orangeRed: "Orangerot",
				darkOrange: "Dunkelorange",
				orange: "Orange",
				bisque: "Bisque",
				blanchedAlmond: "Mandelweiß",
				navajoWhite: "Navajoweiß",
				seashell: "Muschelweiß",

				// Yellows

				gold: "Gold",
				yellow: "Gelb",
				lightYellow: "Hellgelb",
				lemonChiffon: "Zitronenchiffon",
				lightGoldenRodYellow: "Helles Goldrutengelb",
				papayaWhip: "Papayacreme",
				moccasin: "Mokassin",
				peachPuff: "Pfirsich",
				cornsilk: "Maisseide",

				// Greens

				darkGreen: "Dunkelgrün",
				green: "Grün",
				forestGreen: "Waldgrün",
				seaGreen: "Seegrün",
				mediumSeaGreen: "Mittleres Seegrün",
				limeGreen: "Limettengrün",
				lime: "Limette",
				springGreen: "Frühlingsgrün",
				mediumSpringGreen: "Mittleres Frühlingsgrün",
				lightGreen: "Hellgrün",
				paleGreen: "Blassgrün",
				honeyDew: "Honigtau",

				// Cyans

				darkCyan: "Dunkelcyan",
				teal: "Blaugrün",
				aqua: "Aqua",
				lightCyan: "Hellcyan",
				darkTurquoise: "Dunkeltürkis",
				turquoise: "Türkis",
				mediumTurquoise: "Mittleres Türkis",
				mintCream: "Minzcreme",

				// Blues

				midnightBlue: "Mitternachtsblau",
				navy: "Marineblau",
				darkBlue: "Dunkelblau",
				mediumBlue: "Mittelblau",
				blue: "Blau",
				dodgerBlue: "Dodgerblau",
				deepSkyBlue: "Tiefes Himmelblau",
				skyBlue: "Himmelblau",
				lightSkyBlue: "Helles Himmelblau",
				steelBlue: "Stahlblau",
				lightSteelBlue: "Helles Stahlblau",
				aliceBlue: "Aliceblau",

				// Violets

				indigo: "Indigo",
				purple: "Purpur",
				darkMagenta: "Dunkelmagenta",
				darkViolet: "Dunkelviolett",
				mediumPurple: "Mittleres Purpur",
				orchid: "Orchidee",
				violet: "Violett",
				plum: "Pflaume",
				thistle: "Distel",
				lavender: "Lavendel",
				rebeccaPurple: "Rebeccapurpur",

				// Browns

				saddleBrown: "Sattelbraun",
				sienna: "Siena",
				chocolate: "Schokolade",
				darkGoldenRod: "Dunkle Goldrute",
				peru: "Peru",
				rosyBrown: "Rosabraun",
				goldenRod: "Goldrute",
				burlyWood: "Kräftiges Holz",
				wheat: "Weizen",
				tan: "Hellbraun",
				linen: "Leinen",

				// Whites

				floralWhite: "Blütenweiß",
				ivory: "Elfenbein",
				oldLace: "Alte Spitze",
				antiqueWhite: "Antikweiß",
				cornsilk: "Maisseide"
			}
		},
		en: {
			empty: "empty",
			grid: "grid",
			list: "list",
			cancel: "cancel",
			accept: "accept",
			colors: {

				// Neutrals

				black: "black",
				darkSlateGray: "dark slate gray",
				dimGray: "dim gray",
				slateGray: "slate gray",
				gray: "gray",
				lightSlateGray: "light slate gray",
				darkGray: "dark gray",
				silver: "silver",
				gainsboro: "gainsboro",
				whiteSmoke: "white smoke",
				aliceBlue: "alice blue",
				ghostWhite: "ghost white",
				white: "white",

				// Reds and pinks

				darkRed: "dark red",
				red: "red",
				fireBrick: "fire brick",
				crimson: "crimson",
				pink: "pink",
				lightPink: "light pink",
				hotPink: "hot pink",
				deepPink: "deep pink",
				paleVioletRed: "pale violet red",
				mediumVioletRed: "medium violet red",

				// Oranges

				coral: "coral",
				tomato: "tomato",
				orangeRed: "orange red",
				darkOrange: "dark orange",
				orange: "orange",
				bisque: "bisque",
				blanchedAlmond: "blanched almond",
				navajoWhite: "navajo white",
				seashell: "seashell",

				// Yellows

				gold: "gold",
				yellow: "yellow",
				lightYellow: "light yellow",
				lemonChiffon: "lemon chiffon",
				lightGoldenRodYellow: "light golden rod yellow",
				papayaWhip: "papaya whip",
				moccasin: "moccasin",
				peachPuff: "peach puff",
				cornsilk: "cornsilk",

				// Greens

				darkGreen: "dark green",
				green: "green",
				forestGreen: "forest green",
				seaGreen: "sea green",
				mediumSeaGreen: "medium sea green",
				limeGreen: "lime green",
				lime: "lime",
				springGreen: "spring green",
				mediumSpringGreen: "medium spring green",
				lightGreen: "light green",
				paleGreen: "pale green",
				honeyDew: "honeydew",

				// Cyanes

				darkCyan: "dark cyan",
				teal: "teal",
				aqua: "aqua",
				lightCyan: "light cyan",
				darkTurquoise: "dark turquoise",
				turquoise: "turquoise",
				mediumTurquoise: "medium turquoise",
				mintCream: "mint cream",

				// Blues

				midnightBlue: "midnight blue",
				navy: "navy",
				darkBlue: "dark blue",
				mediumBlue: "medium blue",
				blue: "blue",
				dodgerBlue: "dodger blue",
				deepSkyBlue: "deep sky blue",
				skyBlue: "sky blue",
				lightSkyBlue: "light sky blue",
				steelBlue: "steel blue",
				lightSteelBlue: "light steel blue",
				aliceBlue: "alice blue",

				// Violets

				indigo: "indigo",
				purple: "purple",
				darkMagenta: "dark magenta",
				darkViolet: "dark violet",
				mediumPurple: "medium purple",
				orchid: "orchid",
				violet: "violet",
				plum: "plum",
				thistle: "thistle",
				lavender: "lavender",
				rebeccaPurple: "rebecca purple",

				// Browns

				saddleBrown: "saddle brown",
				sienna: "sienna",
				chocolate: "chocolate",
				darkGoldenRod: "dark golden rod",
				peru: "peru",
				rosyBrown: "rosy brown",
				goldenRod: "golden rod",
				burlyWood: "burly wood",
				wheat: "wheat",
				tan: "tan",
				linen: "linen",

				// Whites

				floralWhite: "floral white",
				ivory: "ivory",
				oldLace: "old lace",
				antiqueWhite: "antique white",
				cornsilk: "cornsilk"
			}
		},
		es: {
			empty: "vacío",
			grid: "grilla",
			list: "lista",
			cancel: "cancelar",
			accept: "aceptar",
			colors: {

				// Neutrals

				black: "negro",
				darkSlateGray: "gris pizarra oscuro",
				dimGray: "gris oscuro",
				slateGray: "gris pizarra",
				gray: "gris",
				lightSlateGray: "gris pizarra claro",
				darkGray: "gris oscuro",
				silver: "plata",
				gainsboro: "gainsboro",
				whiteSmoke: "humo blanco",
				aliceBlue: "azul alice",
				ghostWhite: "blanco fantasma",
				white: "blanco",

				// Reds and pinks

				darkRed: "rojo oscuro",
				red: "rojo",
				fireBrick: "ladrillo refractario",
				crimson: "carmesí",
				pink: "rosa",
				lightPink: "rosa claro",
				hotPink: "rosa fuerte",
				deepPink: "rosa intenso",
				paleVioletRed: "rojo violeta pálido",
				mediumVioletRed: "rojo violeta medio",

				// Oranges

				coral: "coral",
				tomato: "tomate",
				orangeRed: "rojo anaranjado",
				darkOrange: "naranja oscuro",
				orange: "naranja",
				bisque: "sopa de mariscos",
				blanchedAlmond: "almendra blanqueada",
				navajoWhite: "blanco navajo",
				seashell: "concha marina",

				// Yellows

				gold: "oro",
				yellow: "amarillo",
				lightYellow: "amarillo claro",
				lemonChiffon: "gasa de limón",
				lightGoldenRodYellow: "amarillo vara de oro claro",
				papayaWhip: "papaya batida",
				moccasin: "mocasín",
				peachPuff: "melocotón",
				cornsilk: "seda de maíz",

				// Greens

				darkGreen: "verde oscuro",
				green: "verde",
				forestGreen: "verde bosque",
				seaGreen: "verde marino",
				mediumSeaGreen: "verde marino medio",
				limeGreen: "verde lima",
				lime: "lima",
				springGreen: "verde primavera",
				mediumSpringGreen: "verde primavera medio",
				lightGreen: "verde claro",
				paleGreen: "verde pálido",
				honeyDew: "rocío de miel",

				// Cyanes

				darkCyan: "cian oscuro",
				teal: "verde azulado",
				aqua: "agua",
				lightCyan: "cian claro",
				darkTurquoise: "turquesa oscuro",
				turquoise: "turquesa",
				mediumTurquoise: "turquesa medio",
				mintCream: "crema de menta",

				// Blues

				midnightBlue: "azul medianoche",
				navy: "azul marino",
				darkBlue: "azul oscuro",
				mediumBlue: "azul medio",
				blue: "azul",
				dodgerBlue: "azul dodger",
				deepSkyBlue: "azul cielo profundo",
				skyBlue: "azul cielo",
				lightSkyBlue: "azul cielo claro",
				steelBlue: "azul acero",
				lightSteelBlue: "azul acero claro",
				aliceBlue: "azul alice",

				// Violets

				indigo: "índigo",
				purple: "púrpura",
				darkMagenta: "magenta oscuro",
				darkViolet: "violeta oscuro",
				mediumPurple: "púrpura medio",
				orchid: "orquídea",
				violet: "violeta",
				plum: "ciruela",
				thistle: "cardo",
				lavender: "lavanda",
				rebeccaPurple: "púrpura rebecca",

				// Browns

				saddleBrown: "marrón silla",
				sienna: "siena",
				chocolate: "chocolate",
				darkGoldenRod: "vara de oro oscuro",
				peru: "perú",
				rosyBrown: "marrón rosado",
				goldenRod: "vara de oro",
				burlyWood: "madera robusta",
				wheat: "trigo",
				tan: "bronceado",
				linen: "lino",

				// Whites

				floralWhite: "blanco floral",
				ivory: "marfil",
				oldLace: "encaje antiguo",
				antiqueWhite: "blanco antiguo",
				cornsilk: "seda de maíz"
			}
		}
	};
	static #colors = {
		grid: [
			["#ffffff", "#ebebeb", "#d6d6d6", "#c2c2c2", "#adadad", "#999999", "#858585", "#707070", "#5c5c5c", "#474747", "#333333", "#000000"],
			["#01374a", "#001d57", "#12013b", "#2f043d", "#3c081a", "#5c0600", "#591d00", "#583300", "#563c00", "#666100", "#4f5503", "#263d0e"],
			["#024d65", "#002f7b", "#1a0a52", "#450c59", "#550f2a", "#831200", "#7b2a00", "#7b4901", "#785800", "#8d8600", "#6f760a", "#38571a"],
			["#056e8f", "#0042a9", "#2c0777", "#61177c", "#79193d", "#b51a00", "#ad3f00", "#a96800", "#a57b02", "#c5bc00", "#9aa50d", "#4d7a27"],
			["#028cb4", "#0056d6", "#371a94", "#7a219e", "#99234f", "#e22400", "#da5100", "#d38302", "#d19d00", "#f5ec00", "#c3d118", "#659d34"],
			["#00a1d8", "#0161fe", "#4d22b2", "#982abd", "#b92d5d", "#ff4013", "#ff6a00", "#ffab02", "#fec701", "#fffb41", "#dbeb38", "#76bb41"],
			["#02c7fc", "#3a87fe", "#5e30eb", "#be37f3", "#e63c7b", "#ff6151", "#ff8648", "#feb43f", "#fecb3e", "#fff76b", "#e3ef65", "#96d35f"],
			["#50d6fc", "#73a7ff", "#864ffe", "#d357fe", "#ee709e", "#ff8c82", "#ffa57d", "#ffc777", "#ffd977", "#fff994", "#e9f28f", "#b1dd8b"],
			["#93e3fd", "#a7c6ff", "#b18cfe", "#e292fe", "#f4a4c0", "#ffb5af", "#ffc5ab", "#ffd9a8", "#fee4a8", "#fffbba", "#f2f7b7", "#cde8b5"],
			["#cbf0ff", "#d3e1ff", "#d9c8fe", "#efcaff", "#f9d3df", "#ffdbd8", "#ffe2d7", "#ffecd4", "#fff3d6", "#fefcdd", "#f9fadb", "#dfedd4"]
		],
		list: {

			// Neutrals

			"#000000": "black",
			"#2f4f4f": "darkSlateGray",
			"#696969": "dimGray",
			"#708090": "slateGray",
			"#808080": "gray",
			"#778899": "lightSlateGray",
			"#a9a9a9": "darkGray",
			"#c0c0c0": "silver",
			"#dcdcdc": "gainsboro",
			"#f5f5f5": "whiteSmoke",
			"#f0f8ff": "aliceBlue",
			"#f8f8ff": "ghostWhite",
			"#ffffff": "white",

			// Reds and pinks

			"#8b0000": "darkRed",
			"#ff0000": "red",
			"#b22222": "fireBrick",
			"#dc143c": "crimson",
			"#ffc0cb": "pink",
			"#ffb6c1": "lightPink",
			"#ff69b4": "hotPink",
			"#ff1493": "deepPink",
			"#db7093": "paleVioletRed",
			"#c71585": "mediumVioletRed",

			// Oranges

			"#ff7f50": "coral",
			"#ff6347": "tomato",
			"#ff4500": "orangeRed",
			"#ff8c00": "darkOrange",
			"#ffa500": "orange",
			"#ffe4c4": "bisque",
			"#ffebcd": "blanchedAlmond",
			"#ffdead": "navajoWhite",
			"#fff5ee": "seashell",

			// Yellows

			"#ffd700": "gold",
			"#ffff00": "yellow",
			"#ffffe0": "lightYellow",
			"#fffacd": "lemonChiffon",
			"#fafad2": "lightGoldenRodYellow",
			"#ffefd5": "papayaWhip",
			"#ffe4b5": "moccasin",
			"#ffdab9": "peachPuff",
			"#fff8dc": "cornsilk",

			// Greens

			"#006400": "darkGreen",
			"#008000": "green",
			"#228b22": "forestGreen",
			"#2e8b57": "seaGreen",
			"#3cb371": "mediumSeaGreen",
			"#32cd32": "limeGreen",
			"#00ff00": "lime",
			"#00ff7f": "springGreen",
			"#00fa9a": "mediumSpringGreen",
			"#90ee90": "lightGreen",
			"#98fb98": "paleGreen",
			"#f0fff0": "honeyDew",

			// Cyanes

			"#008b8b": "darkCyan",
			"#008080": "teal",
			"#00ffff": "aqua",
			"#e0ffff": "lightCyan",
			"#00ced1": "darkTurquoise",
			"#40e0d0": "turquoise",
			"#48d1cc": "mediumTurquoise",
			"#f5fffa": "mintCream",

			// Blues

			"#191970": "midnightBlue",
			"#000080": "navy",
			"#00008b": "darkBlue",
			"#0000cd": "mediumBlue",
			"#0000ff": "blue",
			"#1e90ff": "dodgerBlue",
			"#00bfff": "deepSkyBlue",
			"#87ceeb": "skyBlue",
			"#87cefa": "lightSkyBlue",
			"#4682b4": "steelBlue",
			"#b0c4de": "lightSteelBlue",
			"#f0f8ff": "aliceBlue",

			// Violets

			"#4b0082": "indigo",
			"#800080": "purple",
			"#8b008b": "darkMagenta",
			"#9400d3": "darkViolet",
			"#9370db": "mediumPurple",
			"#da70d6": "orchid",
			"#ee82ee": "violet",
			"#dda0dd": "plum",
			"#d8bfd8": "thistle",
			"#e6e6fa": "lavender",
			"#663399": "rebeccaPurple",

			// Browns

			"#8b4513": "saddleBrown",
			"#a0522d": "sienna",
			"#d2691e": "chocolate",
			"#b8860b": "darkGoldenRod",
			"#cd853f": "peru",
			"#bc8f8f": "rosyBrown",
			"#daa520": "goldenRod",
			"#deb887": "burlyWood",
			"#f5deb3": "wheat",
			"#d2b48c": "tan",
			"#faf0e6": "linen",

			// Whites

			"#fffaf0": "floralWhite",
			"#fffff0": "ivory",
			"#fdf5e6": "oldLace",
			"#faebd7": "antiqueWhite",
			"#fff8dc": "cornsilk"
		}
	};

	#properties = {};
	#htmlElement;
	#htmlElements = {
		input: null,
		opener: null,
		button: null,
		buttonColor: null,
		overlay: null,
		box: null,
		header: null,
		gridTab: null,
		listTab: null,
		grid: null,
		list: null,
		preview: null,
		previewColor: null,
		previewText: null,
		footer: null,
		cancelButton: null,
		acceptButton: null
	};
	#targetValue;
	#cancelValue;
	#colorScheme;
	#darkModeCleanup;

	constructor(properties = {}) {
		const defaults = structuredClone(WUIColorpicker.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
		this.#colorScheme = null;
		this.#initHTML();
	}

	get selector() {
		return this.#properties.selector;
	}

	get lang() {
		return this.#properties.lang;
	}

	get value() {
		return (this.#htmlElements.input instanceof HTMLInputElement ? (this.#htmlElements.input.value === this.#properties.emptyValue ? "" : this.#htmlElements.input.value) : this.#properties.value);
	}

	get emptyValue() {
		return this.#properties.emptyValue;
	}

	get texts() {
		return this.#properties.texts;
	}

	get openDirection() {
		return this.#properties.openDirection;
	}

	get boxAlign() {
		return this.#properties.boxAlign;
	}

	get hidden() {
		return this.#properties.hidden;
	}

	get enabled() {
		return this.#properties.enabled;
	}

	get onOpen() {
		return this.#properties.onOpen;
	}

	get onChange() {
		return this.#properties.onChange;
	}

	get onClose() {
		return this.#properties.onClose;
	}

	set selector(value) {
		if (typeof (value) === "string" && value !== "") {
			this.#properties.selector = value;
		}
	}

	set lang(value) {
		if (typeof (value) === "string" && value.match(/^\w{2}$/)) {
			this.#properties.lang = value.toLowerCase();
		}
	}

	set value(value) {
		if (typeof (value) === "string" && (value.match(/^#([0-9A-F]{3}){1,2}$/i) || Object.values(WUIColorpicker.#colors.list).map(x => x.toLowerCase()).indexOf(value.toLowerCase()) > 0) && (typeof (this.#properties.enabled) === "undefined" || this.#properties.enabled)) {
			this.#setValue(value.toLowerCase());
			this.#prepare();
		}
	}

	set emptyValue(value) {
		if (typeof (value) === "string" && value.match(/^#([0-9A-F]{3}){1,2}$/i)) {
			this.#properties.emptyValue = value.toLowerCase();
		}
	}

	set texts(value) {
		if (typeof (value) === "object" && !Array.isArray(value) && value !== null) {
			Object.keys(WUIColorpicker.#texts.en).forEach(text => {
				if (!(text in value)) {
					value[text] = "";
				}
			});
			this.#properties.texts = value;
		}
	}

	set openDirection(value) {
		if (typeof (value) === "string" && value.match(/^(up|down)$/i)) {
			this.#properties.openDirection = value.toLowerCase();
		}
	}

	set boxAlign(value) {
		if (typeof (value) === "string" && value.match(/^(left|center|right)$/i)) {
			this.#properties.boxAlign = value.toLowerCase();
		}
	}

	set hidden(value) {
		if (typeof (value) === "boolean") {
			this.#properties.hidden = value;
		}
	}

	set enabled(value) {
		if (typeof (value) === "boolean") {
			const { input, button } = this.#htmlElements;
			this.#properties.enabled = value;
			if (input instanceof HTMLInputElement) {
				input.disabled = !value;
			}
			if (button instanceof HTMLButtonElement) {
				button.disabled = !value;
				if (value) {
					button.removeAttribute("disabled");
				} else {
					button.setAttribute("disabled", "true");
				}
			}
			this.#setStyle();
		}
	}

	set onOpen(value) {
		if (typeof (value) === "function" || value == null) {
			this.#properties.onOpen = value;
		}
	}

	set onChange(value) {
		if (typeof (value) === "function" || value == null) {
			this.#properties.onChange = value;
		}
	}

	set onClose(value) {
		if (typeof (value) === "function" || value == null) {
			this.#properties.onClose = value;
		}
	}

	#loadHTML() {
		const sel = this.#properties.selector;
		this.#htmlElement = document.querySelector(sel);
		this.#htmlElements = {
			input: document.querySelector(sel + " > input[type='color']"),
			opener: document.querySelector(sel + " > .opener"),
			button: document.querySelector(sel + " > .button"),
			buttonColor: document.querySelector(sel + " > .button > .color"),
			overlay: document.querySelector(sel + " > .overlay"),
			box: document.querySelector(sel + " > .box"),
			header: document.querySelector(sel + " > .box > .header"),
			gridTab: document.querySelector(sel + " > .box > .header > .tab.grid"),
			listTab: document.querySelector(sel + " > .box > .header > .tab.list"),
			grid: document.querySelector(sel + " > .box > .grid"),
			list: document.querySelector(sel + " > .box > .list"),
			preview: document.querySelector(sel + " > .box > .preview"),
			previewColor: document.querySelector(sel + " > .box > .preview > .color"),
			previewText: document.querySelector(sel + " > .box > .preview > .text"),
			footer: document.querySelector(sel + " > .box > .footer"),
			cancelButton: document.querySelector(sel + " > .box > .footer > .cancel"),
			acceptButton: document.querySelector(sel + " > .box > .footer > .accept")
		};
	}

	#buildHTML() {
		if (this.#htmlElement instanceof HTMLDivElement) {
			if (!this.#htmlElements.input) {
				this.#htmlElements.input = document.createElement("input");
				this.#htmlElements.input.type = "color";
				this.#htmlElement.appendChild(this.#htmlElements.input);
			}
			if (!this.hidden) {
				if (!this.#htmlElements.opener) {
					this.#htmlElements.opener = document.createElement("div");
					this.#htmlElements.opener.className = "opener";
					this.#htmlElement.appendChild(this.#htmlElements.opener);
				}
				if (!this.#htmlElements.button) {
					this.#htmlElements.button = document.createElement("button");
					this.#htmlElements.button.className = "button";
					this.#htmlElement.appendChild(this.#htmlElements.button);
				}
				if (!this.#htmlElements.buttonColor) {
					this.#htmlElements.buttonColor = document.createElement("div");
					this.#htmlElements.buttonColor.className = "color";
					this.#htmlElements.button.appendChild(this.#htmlElements.buttonColor);
				}
			}
			if (!this.#htmlElements.overlay) {
				this.#htmlElements.overlay = document.createElement("div");
				this.#htmlElements.overlay.className = "overlay";
				this.#htmlElement.appendChild(this.#htmlElements.overlay);
			}
			if (!this.#htmlElements.box) {
				this.#htmlElements.box = document.createElement("div");
				this.#htmlElements.box.className = "box";
				this.#htmlElement.appendChild(this.#htmlElements.box);
			}
			if (!this.#htmlElements.header) {
				this.#htmlElements.header = document.createElement("div");
				this.#htmlElements.header.className = "header";
				this.#htmlElements.box.appendChild(this.#htmlElements.header);
			}
			if (!this.#htmlElements.gridTab) {
				this.#htmlElements.gridTab = document.createElement("div");
				this.#htmlElements.gridTab.className = "tab grid";
				this.#htmlElements.header.appendChild(this.#htmlElements.gridTab);
			}
			if (!this.#htmlElements.listTab) {
				this.#htmlElements.listTab = document.createElement("div");
				this.#htmlElements.listTab.className = "tab list";
				this.#htmlElements.header.appendChild(this.#htmlElements.listTab);
			}
			if (!this.#htmlElements.grid) {
				this.#htmlElements.grid = document.createElement("div");
				this.#htmlElements.grid.className = "grid";
				this.#htmlElements.box.appendChild(this.#htmlElements.grid);
			}
			if (!this.#htmlElements.list) {
				this.#htmlElements.list = document.createElement("div");
				this.#htmlElements.list.className = "list";
				this.#htmlElements.box.appendChild(this.#htmlElements.list);
			}
			if (!this.#htmlElements.preview) {
				this.#htmlElements.preview = document.createElement("div");
				this.#htmlElements.preview.className = "preview";
				this.#htmlElements.box.appendChild(this.#htmlElements.preview);
			}
			if (!this.#htmlElements.previewColor) {
				this.#htmlElements.previewColor = document.createElement("div");
				this.#htmlElements.previewColor.className = "color";
				this.#htmlElements.preview.appendChild(this.#htmlElements.previewColor);
			}
			if (!this.#htmlElements.previewText) {
				this.#htmlElements.previewText = document.createElement("div");
				this.#htmlElements.previewText.className = "text";
				this.#htmlElements.preview.appendChild(this.#htmlElements.previewText);
			}
			if (!this.#htmlElements.footer) {
				this.#htmlElements.footer = document.createElement("div");
				this.#htmlElements.footer.className = "footer";
				this.#htmlElements.box.appendChild(this.#htmlElements.footer);
			}
			if (!this.#htmlElements.cancelButton) {
				this.#htmlElements.cancelButton = document.createElement("button");
				this.#htmlElements.cancelButton.className = "cancel";
				this.#htmlElements.footer.appendChild(this.#htmlElements.cancelButton);
			}
			if (!this.#htmlElements.acceptButton) {
				this.#htmlElements.acceptButton = document.createElement("button");
				this.#htmlElements.acceptButton.className = "accept";
				this.#htmlElements.footer.appendChild(this.#htmlElements.acceptButton);
			}
		}
	}

	#initHTML() {
		this.#loadHTML();
		this.#buildHTML();
	}

	getElement() {
		return this.#htmlElement;
	}

	getViewElements() {
		return [this.#htmlElements.button];
	}

	getInput() {
		return this.#htmlElements.input;
	}

	#getSRCIcon(name) {
		const element = this.#htmlElement || document.documentElement;
		const src = getComputedStyle(element).getPropertyValue("--wui-colorpicker-" + name + "icon-src");
		return src !== "" && !src.match(/^(none|url\(\))$/) ? src : "url(\"data:image/svg+xml," + WUIColorpicker.#icons[name] + "\")";
	}

	#setValue(value) {
		const { input } = this.#htmlElements;
		const list = WUIColorpicker.#colors.list;
		const inverse = Object.fromEntries(Object.entries(list).map(([code, name]) => [name.toLowerCase(), code]));
		value = value.toLowerCase().trim();
		value = (value in inverse ? inverse[value] : (value || this.emptyValue)).trim();
		this.#properties.value = value;
		if (input instanceof HTMLInputElement) {
			input.value = value;
			input.dispatchEvent(new Event("change"));
		}
	}

	#setStyle() {
		const htmlElement = this.#htmlElement;
		const { input } = this.#htmlElements;
		if (htmlElement instanceof HTMLDivElement && input instanceof HTMLInputElement) {
			const disabled = input.disabled;
			if (disabled) {
				htmlElement.classList.add("disabled");
			} else {
				htmlElement.classList.remove("disabled");
			}
		}
	}

	init() {
		const htmlElement = this.#htmlElement;
		const { input, button, grid, list, opener, gridTab, listTab, overlay, box, cancelButton, acceptButton } = this.#htmlElements;
		if (htmlElement instanceof HTMLDivElement && input instanceof HTMLInputElement) {
			const debounce = (fn) => {
				let frame;
				return (...params) => {
					if (frame) {
						cancelAnimationFrame(frame);
					}
					frame = requestAnimationFrame(() => {
						fn(...params);
					});
				};
			};
			const optionOnClick = (option, mode) => {
				const selected = !Boolean(option.classList.contains("selected"));
				const targetValue = option.dataset.value || "";
				const value = selected ? targetValue : "";
				this.#htmlElements[mode].querySelectorAll(mode === "list" ? ".option" : ".color").forEach(div => {
					if (typeof (div.dataset.value) !== "undefined" && div.dataset.value !== targetValue) {
						div.classList.remove("selected");
					}
				});
				option.classList.toggle("selected");
				this.#targetValue = value;
				this.#setValue(value);
				this.#refreshView();
			};
			if (this.hidden) {
				htmlElement.classList.add("hidden");
			} else {
				opener.style.maskImage = this.#getSRCIcon("opener-open");
				if (!this.enabled) {
					button.setAttribute("disabled", "true");
				} else {
					button.removeAttribute("disabled");
				}
			}
			if (!this.enabled) {
				input.setAttribute("disabled", "true");
			} else {
				input.removeAttribute("disabled");
			}
			htmlElement.addEventListener("click", event => {
				if (this.enabled && (
					event.target.classList.contains("wui-colorpicker") ||
					event.target.classList.contains("opener") ||
					event.target.classList.contains("button") ||
					(event.target.classList.contains("color") && event.target.parentNode.classList.contains("button")))) {
					this.toggle();
				}
			});
			if (input.getAttribute("style") !== null) {
				input.removeAttributeNode(input.getAttributeNode("style"));
			}
			input.addEventListener("change", () => {
				if (typeof (this.onChange) === "function") {
					this.onChange(input.value);
				}
			});
			overlay.classList.add("hidden");
			box.classList.add(this.boxAlign, this.openDirection, "hidden");
			grid.innerHTML = "";
			gridTab.classList.add("selected");
			gridTab.addEventListener("click", () => { this.selectMode("grid"); });
			WUIColorpicker.#colors.grid.forEach(row => {
				row.forEach(value => {
					const option = document.createElement("div");
					const selected = Boolean(input.value.toLowerCase() === value.toLowerCase());
					option.className = "color" + (selected ? " selected" : "");
					option.style.backgroundColor = value;
					option.dataset.value = value;
					option.addEventListener("click", () => { optionOnClick(option, "grid"); });
					grid.appendChild(option);
				});
			});
			list.innerHTML = "";
			list.classList.add("hidden");
			list.dataset.scroll = 0;
			listTab.addEventListener("click", () => { this.selectMode("list"); });
			Object.entries(WUIColorpicker.#colors.list).forEach(([value, name]) => {
				const option = document.createElement("div");
				const color = document.createElement("div");
				const text = document.createElement("div");
				const selected = Boolean(input.value.toLowerCase() === value.toLowerCase());
				color.className = "color";
				color.style.backgroundColor = value;
				text.className = "text";
				text.textContent = name.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
				option.className = "option " + name + (selected ? " selected" : "");
				option.dataset.value = value.toLowerCase();
				option.appendChild(color);
				option.appendChild(text);
				option.addEventListener("click", () => { optionOnClick(option, "list"); });
				list.appendChild(option);
			});
			["scroll", "touchmove"].forEach(type => {
				list.addEventListener(type, debounce(() => {
					let top = list.scrollTop;
					if (top < 0) {
						top = 0;
					}
					list.dataset.scroll = top;
				}), { passive: true });
			});
			cancelButton.addEventListener("click", () => { this.cancel(); });
			acceptButton.addEventListener("click", () => { this.accept(); });
			this.#prepare();
			this.#setStyle();
			this.#darkModeListener(() => {
				this.#setStyle();
			});
			if (this.#properties.value !== "") {
				this.value = this.#properties.value;
			}
		}
	}

	#prepare() {
		const { gridTab, listTab, cancelButton, acceptButton, list, input } = this.#htmlElements;
		const texts = WUIColorpicker.#texts;
		const lang = this.lang;
		const instanceTexts = this.texts;
		this.#targetValue = input instanceof HTMLInputElement ? input.value : "";
		this.#cancelValue = this.#targetValue;
		if (gridTab instanceof HTMLDivElement && listTab instanceof HTMLDivElement) {
			gridTab.textContent = instanceTexts.grid !== "" ? instanceTexts.grid : lang in texts ? texts[lang].grid : "";
			listTab.textContent = instanceTexts.list !== "" ? instanceTexts.list : lang in texts ? texts[lang].list : "";
		}
		if (cancelButton instanceof HTMLButtonElement && acceptButton instanceof HTMLButtonElement) {
			cancelButton.textContent = instanceTexts.cancel !== "" ? instanceTexts.cancel : lang in texts ? texts[lang].cancel : "";
			acceptButton.textContent = instanceTexts.accept !== "" ? instanceTexts.accept : lang in texts ? texts[lang].accept : "";
		}
		if (list instanceof HTMLDivElement && lang.match(/(en|es)/)) {
			Object.values(WUIColorpicker.#colors.list).forEach(name => {
				const text = list.querySelector(`.option.${name} > .text`);
				text.textContent = texts[lang].colors[name];
			});
		}
		this.#refreshView();
	}

	#refreshView() {
		const { buttonColor, previewColor, previewText } = this.#htmlElements;
		if (buttonColor instanceof HTMLDivElement && previewColor instanceof HTMLDivElement && previewText instanceof HTMLDivElement) {
			const texts = WUIColorpicker.#texts;
			const list = WUIColorpicker.#colors.list;
			const value = this.#targetValue;
			const lang = this.lang;
			const previewName = false;
			const empty = Boolean(value === "" || value === this.emptyValue);
			const bgcolor = empty ? "transparent" : value;
			const bgimage = empty ? this.#getSRCIcon("viewcolor-empty") : "none";
			buttonColor.style.backgroundColor = bgcolor;
			buttonColor.style.maskImage = bgimage;
			previewColor.style.backgroundColor = bgcolor;
			previewColor.style.maskImage = bgimage;
			previewText.innerHTML = empty ? texts[lang].empty : value in list && previewName ? list[value].toLowerCase() : value;
			if (empty) {
				buttonColor.classList.add("empty");
				previewColor.classList.add("empty");
				previewText.classList.add("empty");
			} else {
				buttonColor.classList.remove("empty");
				previewColor.classList.remove("empty");
				previewText.classList.remove("empty");
			}
		}
	}

	#loadBox() {
		const value = this.#targetValue;
		["grid", "list"].forEach(name => {
			const content = this.#htmlElements[name];
			content.querySelectorAll(name === "grid" ? ".color" : ".option").forEach(opt => {
				if (typeof (opt.dataset.value) !== "undefined") {
					if (opt.dataset.value === value) {
						opt.classList.add("selected");
						this.selectMode(name);
					} else {
						opt.classList.remove("selected");
					}
				}
			});
		});
	}

	open() {
		const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
		const { opener, overlay, box } = this.#htmlElements;
		if ((this.hidden || opener instanceof HTMLDivElement) && overlay instanceof HTMLDivElement && box instanceof HTMLDivElement) {
			if (!this.hidden) {
				opener.style.maskImage = this.#getSRCIcon("opener-close");
			}
			overlay.style.zIndex = 101;
			overlay.classList.remove("hidden");
			box.className = `box ${this.boxAlign} ${this.openDirection}`;
			box.style.marginBottom = !mobile && this.openDirection === "up" ? this.#htmlElement.clientHeight + "px" : "auto";
			this.#prepare();
			this.#loadBox();
			if (typeof (this.onOpen) === "function") {
				this.onOpen(this.value);
			}
		}
	}

	close() {
		const { opener, overlay, box } = this.#htmlElements;
		if ((this.hidden || opener instanceof HTMLDivElement) && overlay instanceof HTMLDivElement && box instanceof HTMLDivElement) {
			if (!this.hidden) {
				opener.style.maskImage = this.#getSRCIcon("opener-open");
			}
			overlay.classList.add("hidden");
			overlay.style.zIndex = 100;
			box.classList.add("hidden");
			if (typeof (this.onClose) === "function") {
				this.onClose(this.value);
			}
		}
	}

	toggle() {
		const { box } = this.#htmlElements;
		if (box instanceof HTMLDivElement) {
			if (box.classList.contains("hidden")) {
				this.open();
			} else {
				this.close();
			}
		}
	}

	selectMode(mode) {
		const { input, list } = this.#htmlElements;
		["grid", "list"].forEach(name => {
			const tab = this.#htmlElements[name + "Tab"];
			const content = this.#htmlElements[name];
			if (tab instanceof HTMLDivElement && content instanceof HTMLDivElement) {
				if (name === mode) {
					tab.classList.add("selected");
					content.classList.remove("hidden");
				} else {
					tab.classList.remove("selected");
					content.classList.add("hidden");
				}
			}
		});
		if (mode === "list" && list instanceof HTMLDivElement) {
			const listColors = WUIColorpicker.#colors.list;
			const value = input.value || "";
			if (value in listColors) {
				const option = list.querySelector(".option." + listColors[value]);
				list.scrollTop = option.offsetTop - parseInt((list.clientHeight - option.clientHeight) / 2);
			} else {
				list.scrollTop = 0;
			}
		}
	}

	cancel() {
		this.#targetValue = this.#cancelValue;
		this.#setValue(this.#cancelValue);
		this.#refreshView();
		this.close();
	}

	accept() {
		this.close();
	}

	isOpen() {
		const { box } = this.#htmlElements;
		return Boolean(box instanceof HTMLDivElement ? !box.classList.contains("hidden") : false);
	}

	isEmpty() {
		const { input } = this.#htmlElements;
		return Boolean(input instanceof HTMLInputElement && input.value === "");
	}

	isValid() {
		const { input } = this.#htmlElements;
		return Boolean(input instanceof HTMLInputElement && input.value.match(/^#([0-9A-F]{3}){1,2}$/i));
	}

	#darkModeListener(callback) {
		const observer = new MutationObserver(() => {
			const colorScheme = getComputedStyle(document.documentElement).getPropertyValue("color-scheme").trim();
			if (this.#colorScheme !== colorScheme) {
				this.#colorScheme = colorScheme;
				callback();
			}
		});
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["style", "class"],
			subtree: false
		});
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		mediaQuery.addEventListener("change", callback);
		this.#darkModeCleanup = () => {
			observer.disconnect();
			mediaQuery.removeEventListener("change", callback);
		};
	}

	destroy() {
		this.close();
		if (typeof this.#darkModeCleanup === "function") {
			this.#darkModeCleanup();
			this.#darkModeCleanup = undefined;
		}
		const htmlElement = this.#htmlElement;
		if (htmlElement instanceof HTMLDivElement) {
			Object.entries(this.#htmlElements).forEach(([key, element]) => {
				if (element) {
					element.remove();
				}
				this.#htmlElements[key] = null;
			});
			htmlElement.innerHTML = "";
			htmlElement.remove();
		}
		Object.keys(this.#properties).forEach(name => {
			delete this.#properties[name];
		});
		this.#targetValue = undefined;
		this.#cancelValue = undefined;
		this.#colorScheme = undefined;
	}
}

/*
HTML output:
<div class="wui-colorpicker">
	<input type="color" value="(name)" value="">
	<div class="opener"></div>
	<button class="button">
		<div class="color"></div>
	</button>
	<div class="overlay"></div>
	<div class="box">
		<div class="header">
			<div class="tab grid"></div>
			<div class="tab list"></div>
		</div>
		<div class="grid">
			<div class="color" data-value="value1"></div>
			[...]
		</div>
		<div class="list">
			<div class="option" data-value="value1">
				<div class="color"></div>
				<div class="text"></div>
			</div>
			[...]
		</div>
		<div class="preview">
			<div class="color"></div>
			<div class="text"></div>
		</div>
		<div class="footer">
			<button class="cancel"></button>
			<button class="accept"></button>
		</div>
	</div>
</div>
*/

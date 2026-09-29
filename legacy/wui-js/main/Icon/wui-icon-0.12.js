/*
 * @file wui-icon-0.12.js
 * @class WUIIcon
 * @version 0.12
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUIIcon {

	static version = "0.12";

	static getNames() {
		const names = new Set();
		for (const sheet of document.styleSheets) {
			try {
				const rules = sheet.cssRules || sheet.rules;
				if (!rules) continue;
				for (const rule of rules) {
					if (rule.type === CSSRule.STYLE_RULE && rule.selectorText) {
						const regex = /\.wui-icon\.([\w-]+)/g;
						let match;
						while ((match = regex.exec(rule.selectorText)) !== null) {
							const name = match[1];
							if (rule.selectorText.includes(":not") || /^(hidden|color)$/.test(name)) {
								continue;
							}
							names.add(name);
						}
					}
				}
			} catch (e) {
				console.warn(`The style sheet could not be read: ${sheet.href}`, e);
			}
		}
		return Array.from(names).sort();
	}
}
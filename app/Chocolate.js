'use strict';

const Styles = require('./styles/Styles');
const Main = require('./main/Main');

module.exports = class Chocolate {

	constructor(params) {
		const options = Main.parametersChecker(params);
		const items = document.querySelectorAll(".js-item");
		const gridContainer = document.querySelector('.js-chocolate');

        // *********** Set styles *********** //
        Styles.setItemStylesBeforeGridCreated(items, options.columnWidth, gridContainer, options.containerMaxWidth);

		// *********** Resize *********** //
		Main.runResize(items, options);
	}
};

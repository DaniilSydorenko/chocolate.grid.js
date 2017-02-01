'use strict';

/**
 * Dependencies
 */
var Sizes = require('../sizes/Sizes');
var Styles = require('../styles/Styles');

class Main {

	run(params) {

	}

	setListeners() {

	}

	resizeContainer(params) {
		//@TODO:
		// remove listeners
		// Run first
		setSize();

		window.addEventListener('resize', setSize);

		function setSize() {
			if (window.innerWidth <= params.maxWidth) {

				let columns = Sizes.getColumnNumber(window.innerWidth, params.colWidth + params.colMargin);
				let numbers = Sizes.getHeightOfElements(params.elements);
				let containerFullWidth = Sizes.getContainerWidth(params.colWidth, params.columns, params.colMargin);

				Styles.replaceItems({
					itemsHeight: numbers,
					columnsNumber: columns,
					itemSelector: params.itemSelector,
					itemWidth: params.colWidth,
					itemMargin: params.colMargin,
					containerSelector: params.containerSelector,
					containerFullWidth: containerFullWidth
				});
			}
		}
	}
}

module.exports = new Main();
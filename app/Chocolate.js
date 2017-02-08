'use strict';

/**
 * Dependencies
 */
var Sizes = require('./sizes/Sizes');
var Styles = require('./styles/Styles');
var Grid = require('./grid/Grid');
var Main = require('./main/Main');

module.exports = class Chocolate {

	constructor(params) {

		var options = {};

		//@TODO: Parameters checker
		options.containerSelector = Main.parametersChecker(params, 'containerSelector', 'string');
		options.containerMaxWidth = Main.parametersChecker(params, 'containerMaxWidth', 'number');
		options.itemSelector = Main.parametersChecker(params, 'itemSelector', 'string');
		options.columnWidth = Main.parametersChecker(params, 'columnWidth', 'number');
		options.columnMargin = Main.parametersChecker(params, 'columnMargin', 'number');

		//@TODO: Move logic to main, leave only params checker ???
		//Main.run({
		//	 containerSelector
		//	 containerMaxWidth
		//	 itemSelector
		//	 columnWidth
		//	 columnMargin
		// })

		var elements = document.querySelectorAll(".js-item");
		var gridContainer = document.querySelector('.js-chocolate');

		Styles.setElementStylesBeforeGridCreated(elements, options.columnWidth, gridContainer, options.containerMaxWidth);

		/**
		 * Common func for static grid and resize
		 *
		 * @param containerWidth
		 * @returns {{numbers: *, columns: *, containerFullWidth: *}}
		 */
		function sizesForGrid(containerWidth) {
			let numbers = Sizes.getHeightOfElements(elements);
			let columns = Sizes.getColumnNumber(containerWidth, options.columnWidth);
			let containerFullWidth = Sizes.getContainerWidth(options.columnWidth, columns, options.columnMargin);

			return {
				numbers: numbers,
				columns: columns,
				containerFullWidth: containerFullWidth
			};
		}

		let sizes = sizesForGrid(gridContainer.clientWidth);

		Styles.replaceItems({
			itemsHeight: sizes.numbers,
			columnsNumber: sizes.columns,
			itemSelector: options.itemSelector,
			itemWidth: options.columnWidth,
			itemMargin: options.columnMargin,
			containerSelector: options.containerSelector,
			containerFullWidth:sizes. containerFullWidth
		});

		// *********** Resize *********** //
		setSize();

		//@TODO:
		// remove listeners
		window.addEventListener('resize', setSize);

		function setSize() {
			if (window.innerWidth <= options.containerMaxWidth) {
				let sizes = sizesForGrid(window.innerWidth);
				Styles.replaceItems({
					itemsHeight: sizes.numbers,
					columnsNumber: sizes.columns,
					itemSelector: options.itemSelector,
					itemWidth: options.columnWidth,
					itemMargin: options.columnMargin,
					containerSelector: options.containerSelector,
					containerFullWidth: sizes.containerFullWidth
				});
			}
		}
	}
};





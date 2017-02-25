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

		options.containerSelector = Main.parametersChecker(params, 'containerSelector', 'string');
		options.containerMaxWidth = Main.parametersChecker(params, 'containerMaxWidth', 'number');
		options.itemSelector = Main.parametersChecker(params, 'itemSelector', 'string');
		options.columnWidth = Main.parametersChecker(params, 'columnWidth', 'number');
		options.columnMargin = Main.parametersChecker(params, 'columnMargin', 'number');

		var items = document.querySelectorAll(".js-item");
		var gridContainer = document.querySelector('.js-chocolate');

		Styles.setItemStylesBeforeGridCreated(items, options.columnWidth, gridContainer, options.containerMaxWidth);

		/**
		 * Common func for static grid and resize
		 *
		 * @param containerWidth
		 * @returns {{numbers: *, columns: *, containerFullWidth: *}}
		 */
		function sizesForGrid(containerWidth) {
			let numbers = Sizes.getHeightOfItems(items);
			let columns = Sizes.getColumnNumber(containerWidth, options.columnWidth);
			let containerFullWidth = Sizes.getContainerWidth(options.columnWidth, columns, options.columnMargin);

			return {
				numbers: numbers,
				columns: columns,
				containerFullWidth: containerFullWidth
			};
		}

		/**
		 * Wrapper for big call of replaceItems({...})
		 *
		 * @param options
		 * @param container
		 */
		function replaceItemsWrapper(options, container) {
			let sizes = sizesForGrid(container);

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

		replaceItemsWrapper(options, gridContainer.clientWidth);

		for (let ai = 0; ai < items.length; ai++) {
			items[ai].style.transition = "all ease .7s"; // animation
			items[ai].style.opacity = 1; // opacity
		}

		// *********** Resize *********** //
		setSize(); // First call
		window.addEventListener('resize', setSize);
		var tempResize = window.innerWidth; // Remember temporary width of window

		function setSize() {
			if (window.innerWidth <= options.containerMaxWidth) {
				Styles.setItemStylesAfterGridCreated(items, options.columnWidth, gridContainer, options.containerMaxWidth);

				if (tempResize <= window.innerWidth) {
					replaceItemsWrapper(options, window.innerWidth);
				} else {
					replaceItemsWrapper(options, window.innerWidth - (options.columnWidth / 2));
				}

				tempResize = window.innerWidth;
			}
		}
		// *********** Resize END *********** //
	}
};

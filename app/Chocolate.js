'use strict';

/**
 * Dependencies
 */
const Sizes = require('./sizes/Sizes');
const Styles = require('./styles/Styles');
const Grid = require('./grid/Grid');
const Main = require('./main/Main');

module.exports = class Chocolate {

	constructor(params) {

		const options = {};

		if (Main.parametersChecker(params)) {
            Object.assign(options, params);
        }

		const items = document.querySelectorAll(".js-item");
		const gridContainer = document.querySelector('.js-chocolate');

		Styles.setItemStylesBeforeGridCreated(items, options.columnWidth, gridContainer, options.containerMaxWidth);

		// @TODO replace
		const sizesForGrid = (containerWidth) => {
			let numbers = Sizes.getHeightOfItems(items);
			let columns = Sizes.getColumnNumber(containerWidth, options.columnWidth);
			let containerFullWidth = Sizes.getContainerWidth(options.columnWidth, columns, options.columnMargin);

			return {
				numbers: numbers,
				columns: columns,
				containerFullWidth: containerFullWidth
			};
		};

        // @TODO replace
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

		// *********** Resize *********** //
		setSize(); // First call

		window.addEventListener('resize', setSize);

		let tempResize = window.innerWidth; // Remember temporary width of window

		function setSize() {
			if (window.innerWidth <= options.containerMaxWidth) {
				replaceItemsWrapper(options, window.innerWidth - (options.columnWidth / 2));
				tempResize = window.innerWidth;
			} else {
                replaceItemsWrapper(options, options.containerMaxWidth - (options.columnWidth / 2));
			}

            for (let ai = 0; ai < items.length; ai++) {
                items[ai].style.opacity = 1; // fade in effect
            }
		}
		// *********** Resize END *********** //
	}
};

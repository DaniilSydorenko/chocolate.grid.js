'use strict';

class Sizes {
	constructor() {

	}

	getResponsiveColumnNumber() {
		// TODO
	}

	getColumnNumber(containerWidth, columnWidth) {
		return Math.floor(containerWidth / columnWidth);
	}

	getContainerWidth(columnWidth, columnNumber, columnMargin) {
		// Minus last right margin
		return columnNumber * (columnWidth + columnMargin) - columnMargin;
	}

	getHeightOfItems(items) {
		let numbers = [];
		for (let index = 0; index < items.length; index++) {
			numbers.push({
                [index]: items[index].clientHeight
            });
		}
		return numbers;
	}

	getItemsWidth(items) {
		let numbers = [];
		for (let index = 0; index < items.length; index++) {
			numbers.push({
                [index]: items[index].clientWidth
            });
		}
		return numbers;
	}
}

module.exports = new Sizes();


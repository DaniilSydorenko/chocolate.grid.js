'use strict';

class Sizes {
	constructor() {
		this._height = window.innerHeight;
		this._width = window.innerWidth;
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
			var obj1 = {
				[index]: items[index].clientHeight
			};
			numbers.push(obj1);
		}
		return numbers;
	}

	getItemsWidth(items) {
		let numbers = [];
		for (let index = 0; index < items.length; index++) {
			var obj1 = {
				[index]: items[index].clientWidth
			};
			numbers.push(obj1);
		}
		return numbers;
	}
}

module.exports = new Sizes();


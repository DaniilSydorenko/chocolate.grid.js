'use strict';

/**
 * Dependencies
 */
var Sizes = require('./sizes/Sizes');
var Styles = require('./styles/Styles');
var Grid = require('./grid/Grid');
var Main = require('./main/Main');
var Instafeed = require('instafeed.js');

module.exports = class Chocolate {

	constructor(params) {



		var elements = document.querySelectorAll(".js-tile");
		let gridContainer = document.querySelector('.js-chocolate');

		Sizes.setElementsHeight(elements);

		this._containerSelector = params.containerSelector;
		this._itemSelector = params.itemSelector;
		this._columnUserWidth = params.columnWidth;
		this._columnUserMargin = params.columnMargin;
		this._columnWidth = elements[0].clientWidth;
		this._containerWidth = gridContainer.clientWidth;
		this._containerUserMaxWidth = params.containerMaxWidth;

		let numbers = Sizes.getHeightOfElements(elements);
		let columns = Sizes.getColumnNumber(this._containerWidth, this._columnUserWidth);
		let containerFullWidth = Sizes.getContainerWidth(this._columnUserWidth, columns, this._columnUserMargin);

		Styles.replaceItems({
			itemsHeight: numbers,
			columnsNumber: columns,
			itemSelector: this._itemSelector,
			itemWidth: this._columnUserWidth,
			itemMargin: this._columnUserMargin,
			containerSelector: this._containerSelector,
			containerFullWidth: containerFullWidth
		});

		var colWidth = this._columnUserWidth,
			colMargin = this._columnUserMargin,
			containerSelector = this._containerSelector,
			maxWidth = this._containerUserMaxWidth,
			itemSelector = this._itemSelector;


		// *********** Resize *********** //
		setSize();

		window.addEventListener('resize', setSize);

		function setSize() {
			if (window.innerWidth <= maxWidth) {

				let columns = Sizes.getColumnNumber(window.innerWidth, colWidth + colMargin);
				let numbers = Sizes.getHeightOfElements(elements);
				let containerFullWidth = Sizes.getContainerWidth(colWidth, columns, colMargin);

				Styles.replaceItems({
					itemsHeight: numbers,
					columnsNumber: columns,
					itemSelector: itemSelector,
					itemWidth: colWidth,
					itemMargin: colMargin,
					containerSelector: containerSelector,
					containerFullWidth: containerFullWidth
				});
			}
		}
	}

};





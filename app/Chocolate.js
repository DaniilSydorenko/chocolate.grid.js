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

		/*
		 Available params:
		 containerSelector
		 containerMaxWidth(no)
		 tileSelector --->itemSelector
		 columnWidth
		 columnMargin
		 */

		var elements = document.querySelectorAll(".js-tile");
		let gridContainer = document.querySelector('.js-chocolate');

		Sizes.setElementsHeight(elements);

		// Set grid, params, etc
		// Set number of columns and container width
		this._containerSelector = params.containerSelector;
		this._tileSelector = params.tileSelector;
		this._columnUserWidth = params.columnWidth;
		//this._containerUserWidth = params.containerWidth;
		this._columnUserMargin = params.columnMargin;
		this._columnWidth = elements[0].clientWidth;
		this._containerWidth = gridContainer.clientWidth;
		this._containerUserMaxWidth = params.containerMaxWidth;

		let numbers = Sizes.getElementsHeights(elements);
		let columns = Sizes.getColumnNumber(this._containerWidth, this._columnUserWidth);
		let grid = Grid.createGrid(numbers, columns);
		let containerFullWidth = Sizes.getContainerWidth(this._columnUserWidth, columns, this._columnUserMargin);

		// Init style
		Styles.setStyleToItems(grid, elements, gridContainer, containerFullWidth - this._columnUserMargin); // Minus last right margin

		var colWidth = this._columnUserWidth,
			colMargin = this._columnUserMargin,
			maxWidth = this._containerUserMaxWidth;

		setSize();

		window.addEventListener('resize', setSize);

		function setSize() {
			let containerWidth = document.querySelector('.js-chocolate').clientWidth;

			function reCounting() {
				let columns = Sizes.getColumnNumber(window.innerWidth, colWidth + colMargin);
				let numbers = Sizes.getElementsHeights(elements);
				let grid = Grid.createGrid(numbers, columns);
				let containerFullWidth = Sizes.getContainerWidth(colWidth, columns, colMargin) - colMargin;

				return {
					'columns': columns,
					'numbers': numbers,
					'grid': grid,
					'containerFullWidth': containerFullWidth
				};
			}

			if (window.innerWidth <= maxWidth) {
				// Get new columns number because window width is only one important
				let data = reCounting();
				Styles.setStyleToItems(data.grid, elements, gridContainer, data.containerFullWidth);
			}

		}

		//@TODO:
		// remove listeners
		// change somewhere vars -> lets
		// create grid with prototype
		// grid -> Map?
	}

};





'use strict';

/**
 * Dependencies
 */
var Sizes = require('./app/sizes/sizes');
var Styles = require('./app/styles/styles');
var Grid = require('./app/grid/grid');
var Colors = require('./app/colors/colors');

module.exports = class Chocolate {

	constructor(params) {

		var elements = document.querySelectorAll(".js-tile");
		var element = document.querySelector(".js-tile");
		let gridContainer = document.querySelector('.js-chocolate');


		var elementsIMG = document.querySelectorAll(".js-tile");
		Sizes.setElementsHeight(elementsIMG);

		this._containerSelector = params.containerSelector;
		this._tileSelector = params.tileSelector;

        // Set grid, params, etc
        // Set number of columns and container width
        this._columnUserWidth = params.columnWidth;
        //this._containerUserWidth = params.containerWidth;

		this._columnUserMargin = params.columnMargin;

		this._columnWidth = elements[0].clientWidth;
		this._containerWidth = gridContainer.clientWidth;

		let numbers = Sizes.getElementsHeights(elements);
		let columns = Sizes.getColumnNumber(this._containerWidth, this._columnUserWidth);

		let grid = Grid.createGrid(numbers, columns);

		let containerFullWidth = Sizes.getContainerWidth(this._columnUserWidth, columns, this._columnUserMargin);

		// Init style
		Styles.setStyleToItems(grid, elements, gridContainer, containerFullWidth -20);


		var colWidth = this._columnUserWidth,
			colMargin = this._columnUserMargin;

		setSize();

		window.addEventListener('resize', setSize);

		function setSize(){
			let containerWidth = document.querySelector('.js-chocolate').clientWidth;

			if (window.innerWidth <= containerWidth) {
				// recounting
				console.log(containerWidth);

				// Get new columns number because window width is only one important
				let columns = Sizes.getColumnNumber(window.innerWidth, colWidth + colMargin);

				let numbers = Sizes.getElementsHeights(elements);

				let grid = Grid.createGrid(numbers, columns);

				let containerFullWidth = Sizes.getContainerWidth(colWidth, columns, colMargin) - 20;

				//console.log(columns);
				//console.log(containerFullWidth);

				Styles.setStyleToItems(grid, elements, gridContainer, containerFullWidth);

			} else if (window.innerWidth <= 1400) { // maxWidth instead 1400px
				let columns = Sizes.getColumnNumber(window.innerWidth, colWidth + colMargin);

				let numbers = Sizes.getElementsHeights(elements);

				let grid = Grid.createGrid(numbers, columns);

				let containerFullWidth = Sizes.getContainerWidth(colWidth, columns, colMargin) - 20;

				//console.log(columns);
				//console.log(containerFullWidth);

				Styles.setStyleToItems(grid, elements, gridContainer, containerFullWidth);
			}

			// pass new value of container and set new styles
		}

		//@TODO:
		// remove listeners
		// change somewhere vars -> lets
		// create grid with prototype
		// grid -> Map?
	}

};





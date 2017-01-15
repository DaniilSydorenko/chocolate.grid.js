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

		this._containerSelector = params.containerSelector;
		this._tileSelector = params.tileSelector;

        // Set grid, params, etc
        // Set number of columns and container width
        this._columnUserWidth = params.columnWidth;
        this._containerUserWidth = params.containerWidth;


		var elements = document.querySelectorAll(".js-tile");
		var element = document.querySelector(".js-tile");
		let gridContainer = document.querySelector('.js-chocolate');

		this._columnWidth = elements[0].clientWidth;
		this._containerWidth = gridContainer.clientWidth;

		let numbers = Sizes.getElementsHeights(elements);
		let columns = Sizes.getColumnNumber(this._containerUserWidth, this._columnUserWidth);

		let grid = Grid.createGrid(numbers, columns);

		// Init style
		Styles.setStyleToItems(grid, elements, gridContainer);


		//this.watchGridSize();


		// window resize
		window.addEventListener('resize', function(){
			//console.log("cont: " + gridContainer.clientWidth);
			//console.log("win: " + window.innerWidth);

			//if (window.innerWidth < gridContainer.clientWidth) {
			if (window.innerWidth < 1200) {
				// recounting
				// createGrid(containerWidth)
				// setStyles()

				let numbers = Sizes.getElementsHeights(elements);
				let columns = Sizes.getColumnNumber(gridContainer.clientWidth, element.clientWidth);

				console.log(columns);

				let grid = Grid.createGrid(numbers, columns);

				Styles.setStyleToItems(grid, elements, gridContainer);

			}

			// pass new value of container and set new styles
		});

		//@TODO remove listeners

	}


	//watchGridSize() {
	//	window.addEventListener('resize', function(){
	//		console.log(11);
	//	});
	//}


    //@TODO
    /*
       create func that set cols depends of viewport width and cols width
       1200px, col - 300 - it means 4 cols - I need this value ---> 4 !!!
     */

    // change somewhere vars -> lets

    // create grid with prototype
    // grid -> Map?

};





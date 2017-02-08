'use strict';

/**
 * Dependencies
 */
var Grid = require('../grid/Grid');

class Styles {

	/**
	 * Good way to set styles on items before grid is ready
	 *
	 * @param elements
	 * @param itemWidth
	 * @param container
	 * @param containerMaxWidth
	 */
	setElementStylesBeforeGridCreated(elements, itemWidth, container, containerMaxWidth) {
		container.style.maxWidth = containerMaxWidth + "px";

		for (let e = 0; e < elements.length; e++) {
			elements[e].style.width = itemWidth + "px"; // item width
			elements[e].style.position = "absolute"; // item position
			elements[e].style.transition = "all ease .5s"; // animation
		}
	}

	/**
	 * Create grid and set all items in grid
	 *
	 * @param params
	 */
	replaceItems(params) {
		// Get grid
		var grid = Grid.createGrid(params.itemsHeight, params.columnsNumber);

		 //Get items and container
		var items = document.querySelectorAll(params.itemSelector);
		var container = document.querySelector(params.containerSelector);
		var itemWidth = params.itemWidth;

		for (var col in grid) {
			if (grid.hasOwnProperty(col)) {
				var column = grid[col];
				var sum = 0;
				var mapOfSums = []; // For TEST

				for (let e = 0; e < column.length; e++) {
					var item = column[e];

					for (let index in item) {
						if (item.hasOwnProperty(index)) {
							items[index].style.transform =
								"matrix(1, 0, 0, 1, " +
								((params.itemWidth + params.itemMargin) * col) + ", " + // Left
								(sum + (params.itemMargin * e)) + ")"; // Top

							sum += item[index]; // Should count MARGINS !!!
							mapOfSums.push(sum);
						}
					}
				}
			}
		}

		// console.log(mapOfSums); // Sum of Last columns. NEED: Sum of biggest column
		// add max Width
		container.style.position = "relative";
		container.style.margin = "0 auto"; // depends of size, if not 100%
		container.style.height = sum + 'px'; // Height??
		container.style.width = params.containerFullWidth + 'px';
	}
}

module.exports = new Styles();

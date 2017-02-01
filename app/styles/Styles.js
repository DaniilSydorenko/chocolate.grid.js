'use strict';

/**
 * Dependencies
 */
var Sizes = require('../sizes/Sizes');
var Grid = require('../grid/Grid');

class Styles {

	/**
	 *
	 * @param params
	 */
	replaceItems(params) {
		// Get grid
		var grid = Grid.createGrid(params.itemsHeight, params.columnsNumber);

		 //Get items and container
		var items = document.querySelectorAll(params.itemSelector);
		var container = document.querySelector(params.containerSelector);

		for (var col in grid) {
			if (grid.hasOwnProperty(col)) {
				var column = grid[col];
				var sum = 0;
				var mapOfSums = []; // For TEST

				for (let e = 0; e < column.length; e++) {
					var item = column[e];

					for (let index in item) {
						if (item.hasOwnProperty(index)) {
							// Set items positions
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

		//console.log(mapOfSums); // Sum of Last columns. NEED: Sum of biggest column

		container.style.height = sum + 'px'; // Height??
		container.style.width = params.containerFullWidth + 'px';
	}
}

module.exports = new Styles();

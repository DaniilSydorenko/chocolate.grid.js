'use strict';

class Grid {
	constructor() {

	}

	/**
	 * Get every element with index and height and return array of heights for every column
	 * @param column
	 * @param storage
	 */
	getMapOfHeightsForEveryColumn(column) {
		let mapOfHeights = [];
		for (var forSumCol of column) {
			let index = Object.keys(forSumCol)[0];
			mapOfHeights.push(parseInt(index));
		}

		return mapOfHeights;
	}

	/**
	 * Return index of column with smallest sum
	 * @param storage
	 */
	getIndexOfSmallestColumn(storage) {
		let i = 0;
		let	v = storage[0];
		for (let t = 1; t < storage.length; t++) {
			if (storage[t] < v) {
				v = storage[t];
				i = t;
			}
		}

		return i;
	}



	/**
	 * Create grid
	 * @TODO Make it more easier
	 */
	createGrid(elementsOfGrid, columns) {
		var elementsCount = elementsOfGrid.length,
			grid = {};

		// Set columns
		for (var j = 0; j < columns; j++) {
			grid[j] = [];
		}

		var gridLength = Object.keys(grid).length;

		// All magic happens here
		for (var i = 0; i < elementsCount; i++) {
			for (var col = 0; col < gridLength && elementsOfGrid.length > 0; col++) { // Till elements array will not be empty
				var number = elementsOfGrid.splice(0, 1)[0]; // Grab first element till zero length

				if (number) { // Here start to fill columns by elements
					if (grid[col].length === 0) {
						grid[col].push(number); // Push element if column is empty
					} else if (grid[col].length > 0) { // if not empty should detect smallest column
						var elementsSumStorage = []; // Store sum of heights for all counted elements

						for (var c = 0; c < gridLength; c++) {
							// Convert object to simple numbers for sum counting
							let mapOfHeights = this.getMapOfHeightsForEveryColumn(grid[c]);

							if (mapOfHeights.length === 1) {
								elementsSumStorage.push(mapOfHeights[0]);
							} else if (mapOfHeights.length > 1) {
								var total = mapOfHeights.reduce(function (a, b) {
									return a + b;
								});
								elementsSumStorage.push(total);
							}
						}

						let indexOfSmallestColumn = this.getIndexOfSmallestColumn(elementsSumStorage);
						grid[indexOfSmallestColumn].push(number); // Insert value to the smallest column
					}
				}
			}
		}

		return grid; // Finally we got a grid with sorted elements
	}

}

module.exports = new Grid();
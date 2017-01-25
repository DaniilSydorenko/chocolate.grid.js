'use strict';

class Grid {
	constructor() {

	}

	/**
	 * Return index of column with smallest sum
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

						for (var c = 0; c < gridLength; c++) { // change on "of" or "simple for"
							// Convert object to simple numbers for sum counting
							let gridColumn = grid[c];
							let properValues = [];

							for (var forSumCol of gridColumn) { // Get every element(object{index:height})
								let newVal = false;
								for (var colVal in forSumCol) {
									if (forSumCol.hasOwnProperty(colVal)) {
										newVal = parseInt(forSumCol[colVal]);
									}
								}
								if (newVal != false) {
									properValues.push(newVal);
								}
							}

							if (properValues.length === 1) {
								elementsSumStorage.push(properValues[0]);
							} else if (properValues.length > 1) {
								var total = properValues.reduce(function (a, b) {
									return a + b;
								});
								if (total != false) {
									elementsSumStorage.push(total);
								}
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


	setGridColumns() {
		let gridContainer = document.querySelector('.js-chocolate');

		for (let i = 0; i < 3; i++) {

			// Create grid columns
			var gridVerticalColumn = document.createElement('div');
			gridVerticalColumn.id = "col-" + i;

			let elements = document.getElementsByClassName('col-' + i);

			for (let e = 0; e <= elements.length; e++) {
				var el = elements[e];
				gridVerticalColumn.appendChild(elements[e]);
			}

			gridContainer.appendChild(gridVerticalColumn);

		}

	}
}

module.exports = new Grid();
var Grid = require('./app/grid/grid');

module.exports = class Chocolate {
	constructor(grid, item) {
		this._gridBody = grid;
		this._gridItem = item;

		this._name = 'Full parameters';
		this._grid = 0;
	}

	showAll() {
		console.log(this._gridBody, this._gridItem);
	}

	getFullParams() {
		return {
			height: this._gridBody,
			width: this._gridItem
		}
	}

	get grid() {
		return this._grid = Grid.getFullGrid();
	}

	getMultiGrid() {
		return this.grid.filter(function (i) {
			return i < 20;
		});
	}

	getMultiGrid2() {
		return this.grid.map(function (i) {
			return i * 2;
		});
	}

	/**
	 * Simple counter
	 */
	setColGrid() {
		var elements = document.getElementsByClassName('js-tile');

		var numbers = [];

		for (var element of elements) {
			numbers.push(element.clientHeight)
		}

		var nlength = numbers.length;
		var columns = 3;
		var grid = {};

		// Set columns
		for (var j = 0; j < columns; j++) {
			grid[j] = [];
		}

		// Get numbers
		for (var i = 0; i < nlength; i++) {

			for (var col in grid) {

				if (grid.hasOwnProperty(col)) {

					var number = numbers.splice(0, 1)[0];

					if (number) {

						if (grid[col].length < 1) {
							// IF EMPTY
							grid[col].push(number);

						} else if (grid[col].length >= 1) {
							// IF NOT EMPTY

							var allCols = [];

							for (var c in grid) {

								if (grid.hasOwnProperty(c)) {
									var s = grid[c];
									if (s.length === 1) {
										allCols.push(s[0]);
									} else if (s.length > 1) {

										var total = s.reduce(function (a, b) {
											return a + b;
										});

										allCols.push(total);
									}
								}
							}

							// Get index of smallest value
							var index = 0;
							var value = allCols[0];
							for (var t = 1; t < allCols.length; t++) {
								if (allCols[t] < value) {
									value = allCols[t];
									index = t;
								}
							}

							// Insert value to the smallest column
							grid[index].push(number);
						}
					}

				}
			}
		}

		//console.log(grid);
	}

	/**
	 * Object counter
	 */
	setColGrid2() {
		var elements = document.getElementsByClassName('js-tile');

		var numbers = [];

		for (var key in elements) {
			if (elements.hasOwnProperty(key)) {
				var obj1 = {
					[key]: elements[key].clientHeight
				};
				console.log(elements[key].clientHeight);
				numbers.push(obj1);
			}
		}

		var nlength = numbers.length;
		var columns = 3;
		var grid = {};

		// Set columns
		for (var j = 0; j < columns; j++) {
			grid[j] = [];
		}

		// Get numbers
		for (var i = 0; i < nlength; i++) {

			for (var col in grid) {

				if (grid.hasOwnProperty(col)) {
					var number = numbers.splice(0, 1)[0]; // Grab first element

					if (number) {

						if (grid[col].length < 1) {
							grid[col].push(number); // Push element if column iss empty

						} else if (grid[col].length >= 1) {
							var allCols = []; // Count sum of heights of all former elements if column is not empty

							for (var c in grid) {

								if (grid.hasOwnProperty(c)) {
									var s = grid[c];

									// Convert object to simple numbers for sum counting
									var properValues = [];
									for (var forSumCol of s) {

										var newVal = 0;

										for (var colVal in forSumCol) {
											if (forSumCol.hasOwnProperty(colVal)) {
												newVal = parseInt(forSumCol[colVal]);
											}
										}

										properValues.push(newVal);
									}

									if (properValues.length === 1) {
										allCols.push(properValues[0]);

									} else if (properValues.length > 1) {
										var total = properValues.reduce(function (a, b) {
											return a + b;
										});

										allCols.push(total);
									}
								}
							}

							// Get index of smallest value
							var index = 0,
								value = allCols[0];
							for (let t = 1; t < allCols.length; t++) {
								if (allCols[t] < value) {
									value = allCols[t];
									index = t;
								}
							}

							// Insert value to the smallest column
							grid[index].push(number);

						}
					}

				}
			}
		}

		// Finally we got a grid with sorted elements
		return grid;

	}


	setStyle() {

		let grid = this.setColGrid2();
		console.log(grid);
		let elements = document.getElementsByClassName('js-tile');
		for (var col in grid) {
			if (grid.hasOwnProperty(col)) {

				let column = grid[col];
				var sum = 0;

				for (let e = 0; e < column.length; e++) {
					let element = column[e];

					for (let index in element) {

						if (element.hasOwnProperty(index)) {

							// set style
							console.log("Column: " + col + " Index: " + index + " and value: " + element[index] + " SUM: " + sum);

							let gridColumn = parseInt(col) + 1;
							let sumWithMargin = sum + (10*e);

							elements[index].style.left = (302 * col) + "px";
							elements[index].style.top = (sum + (10*e))+ "px";
							elements[index].innerHTML = "<p>Height: " + element[index] + " and Sum: " + sum + "</p>";
							//elements[index].style.transform = "translate(" + (100 * col) + "%" + "," + (sum + (10*e))+ "px)";

							sum += element[index];
						}
					}
				}
			}
		}
		// Nepravilnyj posdhet, nado sumirovat dlinu otstupov
		console.log(sum);

		document.getElementsByClassName('js-chocolate')[0].style.height = sum + 'px';
	}

};


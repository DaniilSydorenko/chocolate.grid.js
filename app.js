/**
 * Dependencies
 */
var Sizes = require('./app/sizes/sizes');
var Grid = require('./app/grid/grid');
var Colors = require('./app/colors/colors');

module.exports = class Chocolate {
	constructor(grid, item) {
        // Set grid, params, etc

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


    //@TODO
    /*
           create func that set cols depends of viewport width and cols width
           1200px, col - 300 - it means 4 cols - I need this value ---> 4 !!!

           BUILD COLUMN

     */


    // separate get heights
    // separate

    // change somewhere vars -> lets

    // create grid with prototype
    // grid -> Map?

	/**
	 * Object counter
	 */
	setColGrid2() {

        //
		var elements = document.getElementsByClassName('js-tile');
		var numbers = [];

		for (var key in elements) {
			if (elements.hasOwnProperty(key)) {
				var obj1 = {
					[key]: elements[key].clientHeight
				};
				//console.log(elements[key].clientHeight);
				numbers.push(obj1);
			}
		}

		var nlength = numbers.length;
		var columns = 3; // this value will get from separate func !!!!

		var grid = {};

		// Set columns
		for (var j = 0; j < columns; j++) {
			grid[j] = [];
		}

        //////////////////////////////
            /*
                get element quantity
                set grid
             */
        //////////////////////////////

		// Get numbers
		for (var i = 0; i < nlength; i++) {

			for (var col in grid) { // change on "of" or "simple for"

                //console.log("---> Column1: " + col);

                if (grid.hasOwnProperty(col)) { // remove
					var number = numbers.splice(0, 1)[0]; // Grab first element

					if (number) { // ?

                        // Here start to fill columns by elements
						if (grid[col].length < 1) {
							grid[col].push(number); // Push element if column is empty

                        // if not empty should detect smallest column
						} else if (grid[col].length >= 1) { // Simple else ?

							var allCols = []; // Count sum of heights of all former elements if column is not empty | change on CONST
                            // All const on top !!

							for (var c in grid) { // change on "of" or "simple for"

								//console.log("---> Column2: " + c);

								if (grid.hasOwnProperty(c)) { // remove

									var s = grid[c]; // column

									// Convert object to simple numbers for sum counting
									var properValues = []; // All const on top !!??

									for (var forSumCol of s) { // go thru elements

										var newVal = 0; // All const on top !!?? | zero as default ???

										for (var colVal in forSumCol) { // change on "of" or "simple for"
											if (forSumCol.hasOwnProperty(colVal)) { //remove
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

                            // Move to separate func
							// Get index of smallest value
							var index = 0, // All const on top !!??
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

		//console.log(grid);
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

							elements[index].style.left = (400 * col) + "px";
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
		//console.log(sum);

		document.getElementsByClassName('js-chocolate')[0].style.height = sum + 'px';
	}

};

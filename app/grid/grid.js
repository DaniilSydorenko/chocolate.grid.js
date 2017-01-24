'use strict';

class Grid {
    constructor() {

    }

    /**
     * Create grid
     */
    createGrid(numbers, columns) {
        //var elements = document.querySelectorAll(".js-tile");
        //var numbers = Sizes.getElementsHeights(elements);

        var nlength = numbers.length;

        // !!!!!!
        //var columns = Sizes.getColumnNumber(this._containerUserWidth, this._columnUserWidth);

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
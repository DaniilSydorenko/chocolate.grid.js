'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/******/(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};

	/******/ // The require function
	/******/function __webpack_require__(moduleId) {

		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;

		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };

		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ // Flag the module as loaded
		/******/module.loaded = true;

		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}

	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;

	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;

	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "";

	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

	window.Chocolate = __webpack_require__(1);

	/***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

	/**
  * Dependencies
  */
	var Sizes = __webpack_require__(2);
	var Grid = __webpack_require__(3);
	var Colors = __webpack_require__(4);

	module.exports = function () {
		function Chocolate(grid, item) {
			_classCallCheck(this, Chocolate);

			// Set grid, params, etc

			this._gridBody = grid;
			this._gridItem = item;

			this._name = 'Full parameters';
			this._grid = 0;
		}

		_createClass(Chocolate, [{
			key: 'showAll',
			value: function showAll() {
				console.log(this._gridBody, this._gridItem);
			}
		}, {
			key: 'getFullParams',
			value: function getFullParams() {
				return {
					height: this._gridBody,
					width: this._gridItem
				};
			}
		}, {
			key: 'getMultiGrid',
			value: function getMultiGrid() {
				return this.grid.filter(function (i) {
					return i < 20;
				});
			}
		}, {
			key: 'getMultiGrid2',
			value: function getMultiGrid2() {
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

		}, {
			key: 'setColGrid2',
			value: function setColGrid2() {

				//
				var elements = document.getElementsByClassName('js-tile');
				var numbers = [];

				for (var key in elements) {
					if (elements.hasOwnProperty(key)) {
						var obj1 = _defineProperty({}, key, elements[key].clientHeight);
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

					for (var col in grid) {
						// change on "of" or "simple for"

						//console.log("---> Column1: " + col);

						if (grid.hasOwnProperty(col)) {
							// remove
							var number = numbers.splice(0, 1)[0]; // Grab first element

							if (number) {
								// ?

								// Here start to fill columns by elements
								if (grid[col].length < 1) {
									grid[col].push(number); // Push element if column is empty

									// if not empty should detect smallest column
								} else if (grid[col].length >= 1) {
									// Simple else ?

									var allCols = []; // Count sum of heights of all former elements if column is not empty | change on CONST
									// All const on top !!

									for (var c in grid) {
										// change on "of" or "simple for"

										//console.log("---> Column2: " + c);

										if (grid.hasOwnProperty(c)) {
											// remove

											var s = grid[c]; // column

											// Convert object to simple numbers for sum counting
											var properValues = []; // All const on top !!??

											var _iteratorNormalCompletion = true;
											var _didIteratorError = false;
											var _iteratorError = undefined;

											try {
												for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
													var forSumCol = _step.value;
													// go thru elements

													var newVal = 0; // All const on top !!?? | zero as default ???

													for (var colVal in forSumCol) {
														// change on "of" or "simple for"
														if (forSumCol.hasOwnProperty(colVal)) {
															//remove
															newVal = parseInt(forSumCol[colVal]);
														}
													}

													properValues.push(newVal);
												}
											} catch (err) {
												_didIteratorError = true;
												_iteratorError = err;
											} finally {
												try {
													if (!_iteratorNormalCompletion && _iterator.return) {
														_iterator.return();
													}
												} finally {
													if (_didIteratorError) {
														throw _iteratorError;
													}
												}
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
									var index = 0,
									    // All const on top !!??
									value = allCols[0];
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

				// Finally we got a grid with sorted elements
				return grid;
			}
		}, {
			key: 'setStyle',
			value: function setStyle() {

				var grid = this.setColGrid2();

				//console.log(grid);
				var elements = document.getElementsByClassName('js-tile');
				for (var col in grid) {
					if (grid.hasOwnProperty(col)) {

						var column = grid[col];
						var sum = 0;

						for (var e = 0; e < column.length; e++) {
							var element = column[e];

							for (var index in element) {

								if (element.hasOwnProperty(index)) {

									// set style
									console.log("Column: " + col + " Index: " + index + " and value: " + element[index] + " SUM: " + sum);

									var gridColumn = parseInt(col) + 1;
									var sumWithMargin = sum + 10 * e;

									elements[index].style.left = 400 * col + "px";
									elements[index].style.top = sum + 10 * e + "px";
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
		}, {
			key: 'grid',
			get: function get() {
				return this._grid = Grid.getFullGrid();
			}
		}]);

		return Chocolate;
	}();

	/***/
},
/* 2 */
/***/function (module, exports) {
	var Sizes = function () {
		function Sizes() {
			_classCallCheck(this, Sizes);

			this._height = window.innerHeight;
			this._width = window.innerWidth;
		}

		_createClass(Sizes, [{
			key: 'height',
			get: function get() {
				return this._height;
			}
		}, {
			key: 'width',
			get: function get() {
				return this._width;
			}
		}]);

		return Sizes;
	}();

	module.exports = new Sizes();

	/***/
},
/* 3 */
/***/function (module, exports) {
	var Grid = function () {
		function Grid() {
			_classCallCheck(this, Grid);

			this._quantity = 24;
			this._cols = 12;
			this._rows = 12;
		}

		_createClass(Grid, [{
			key: 'getFullGrid',
			value: function getFullGrid() {
				return [this._cols, this._rows, this._quantity];
			}
		}]);

		return Grid;
	}();

	module.exports = new Grid();

	/***/
},
/* 4 */
/***/function (module, exports) {
	var Colors = function () {
		function Colors() {
			_classCallCheck(this, Colors);

			this._blue = "#cbd0e1";
			this._green = "#d1f313";
			this._red = "#ff0000";
		}

		_createClass(Colors, [{
			key: 'colors',
			get: function get() {
				return [this._blue, this._green, this._red];
			}
		}]);

		return Colors;
	}();

	module.exports = new Colors();

	/***/
}
/******/]);
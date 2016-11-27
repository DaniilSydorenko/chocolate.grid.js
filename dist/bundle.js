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

	var Grid = __webpack_require__(2);

	module.exports = function () {
		function Chocolate(grid, item) {
			_classCallCheck(this, Chocolate);

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

			/**
    * Simple counter
    */

		}, {
			key: 'setColGrid',
			value: function setColGrid() {
				var elements = document.getElementsByClassName('js-tile');

				var numbers = [];

				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var element = _step.value;

						numbers.push(element.clientHeight);
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

		}, {
			key: 'setColGrid2',
			value: function setColGrid2() {
				var elements = document.getElementsByClassName('js-tile');

				var numbers = [];

				for (var key in elements) {
					if (elements.hasOwnProperty(key)) {
						var obj1 = _defineProperty({}, key, elements[key].clientHeight);
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
											var _iteratorNormalCompletion2 = true;
											var _didIteratorError2 = false;
											var _iteratorError2 = undefined;

											try {
												for (var _iterator2 = s[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
													var forSumCol = _step2.value;


													var newVal = 0;

													for (var colVal in forSumCol) {
														if (forSumCol.hasOwnProperty(colVal)) {
															newVal = parseInt(forSumCol[colVal]);
														}
													}

													properValues.push(newVal);
												}
											} catch (err) {
												_didIteratorError2 = true;
												_iteratorError2 = err;
											} finally {
												try {
													if (!_iteratorNormalCompletion2 && _iterator2.return) {
														_iterator2.return();
													}
												} finally {
													if (_didIteratorError2) {
														throw _iteratorError2;
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

									// Get index of smallest value
									var index = 0,
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
				console.log(grid);
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

									elements[index].style.left = 302 * col + "px";
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
				console.log(sum);

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
}
/******/]);
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _types = require('../types');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
	function Utils() {
		_classCallCheck(this, Utils);

		this.getColumnNumber = function (containerWidth, columnWidth, columnMargin) {
			var scrollBarPixelWidth = 17;
			var columnNumber = Math.floor((containerWidth + columnMargin - scrollBarPixelWidth) / (columnWidth + columnMargin));
			return columnNumber === 0 ? 1 : columnNumber;
		};

		this.getContainerWidth = function (columnWidth, columnNumber, columnMargin) {
			return columnNumber * (columnWidth + columnMargin) - columnMargin;
		};

		this.getIndexOfSmallestColumn = function (allColumns) {
			return allColumns.indexOf(Math.min.apply(Math, _toConsumableArray(allColumns)));
		};

		this.getMapOfHeightsForEveryColumn = function (column) {
			// $FlowFixMe
			return column.map(function (e) {
				return parseInt(e[Object.keys(e)[0]]);
			});
		};
	}

	_createClass(Utils, [{
		key: 'getHeightOfItems',


		// OBJECT ???
		value: function getHeightOfItems(items) {
			var numbers = [];
			items.forEach(function (e, i) {
				numbers.push(_defineProperty({}, i, e.offsetHeight));
			});
			return numbers;
		}
	}, {
		key: 'getSumOfHeightsForColumns',
		value: function getSumOfHeightsForColumns(grid) {
			var _this = this;

			// $FlowFixMe
			return Object.keys(grid).map(function (i) {
				var mapOfHeights = _this.getMapOfHeightsForEveryColumn(grid[parseInt(i)]);
				if (mapOfHeights.length === 1) {
					return mapOfHeights[0];
				} else if (mapOfHeights.length > 1) {
					return mapOfHeights.reduce(function (a, b) {
						return a + b;
					});
				}
			});
		}
	}, {
		key: 'getContainerHeight',
		value: function getContainerHeight(columnMargin, grid) {
			var sumOfHeightsForColumns = this.getSumOfHeightsForColumns(grid);
			// $FlowFixMe
			var maxVal = Math.max.apply(Math, _toConsumableArray(sumOfHeightsForColumns));
			return maxVal + grid[sumOfHeightsForColumns.indexOf(maxVal)].length * columnMargin;
		}
	}, {
		key: 'formatData',
		value: function formatData(containerWidth, columnWidth, columnMargin, items) {
			var itemsHeight = this.getHeightOfItems(items);
			var columnsNumber = this.getColumnNumber(containerWidth, columnWidth, columnMargin);
			var containerFullWidth = this.getContainerWidth(columnWidth, columnsNumber, columnMargin);
			return {
				itemsHeight: itemsHeight,
				columnsNumber: columnsNumber,
				columnWidth: columnWidth,
				columnMargin: columnMargin,
				containerFullWidth: containerFullWidth
			};
		}
	}]);

	return Utils;
}();

exports.default = new Utils();
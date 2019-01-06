'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _types = require('../types');

var _Styles = require('../styles/Styles');

var _Styles2 = _interopRequireDefault(_Styles);

var _Utils = require('../utils/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Grid = function () {
	function Grid(params, items, container) {
		_classCallCheck(this, Grid);

		_Styles2.default.setContainerStyles(container, _Utils2.default.getContainerHeight(params.columnMargin, this.createGrid(params, items)), params.containerFullWidth);
	}

	_createClass(Grid, [{
		key: 'createGrid',
		value: function createGrid(params, items) {
			var itemsHeight = params.itemsHeight,
			    columnsNumber = params.columnsNumber,
			    columnWidth = params.columnWidth,
			    columnMargin = params.columnMargin;

			var grid = {};
			var elementsOfGrid = itemsHeight;
			var indexOfSmallestColumn = 0;
			var sumOfHeightsForColumns = 0;
			var numberOfElementsInGrid = elementsOfGrid.length;

			for (var j = 0; j < columnsNumber; j++) {
				grid[j] = [];
			}

			for (var i = 0; i < numberOfElementsInGrid && elementsOfGrid.length > 0; i++) {
				for (var col = 0; col < columnsNumber && elementsOfGrid.length > 0; col++) {
					// Till elements array will not be empty
					var elementOfGrid = elementsOfGrid.splice(0, 1)[0]; // Grab first element till zero length
					if (elementOfGrid) {
						// Here start to fill columns by elements
						var position = { top: 0, left: 0, index: col };
						if (grid[col].length === 0) {
							// Push first element if column is empty
							position.left = (columnWidth + columnMargin) * col;
						} else if (grid[col].length > 0) {
							// if not empty should detect smallest column
							sumOfHeightsForColumns = _Utils2.default.getSumOfHeightsForColumns(grid);
							indexOfSmallestColumn = _Utils2.default.getIndexOfSmallestColumn(sumOfHeightsForColumns);
							position.top = sumOfHeightsForColumns[indexOfSmallestColumn] + columnMargin * grid[indexOfSmallestColumn].length;
							position.left = (columnWidth + columnMargin) * indexOfSmallestColumn;
							position.index = indexOfSmallestColumn;
						}
						grid[position.index].push(elementOfGrid);
						_Styles2.default.setItemStyles(items[Object.keys(elementOfGrid)[0]], position.top, position.left);
					}
				}
			}
			return grid;
		}
	}]);

	return Grid;
}();

exports.default = Grid;
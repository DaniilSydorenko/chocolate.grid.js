'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _types = require('../types');

var _Grid = require('../grid/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Utils = require('../utils/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _Styles = require('../styles/Styles');

var _Styles2 = _interopRequireDefault(_Styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// TODO: Horizontal grid
// TODO: new properties: fullSizeOfContainer, sideMargin, bottomMargin
// TODO: TESTS

var Main = function () {
	function Main(params) {
		_classCallCheck(this, Main);

		var items = document.querySelectorAll('.chocolate-item');
		var gridContainer = document.querySelector('.chocolate-container');
		var columnWidth = params.columnWidth,
		    columnMargin = params.columnMargin,
		    containerMaxWidth = params.containerMaxWidth,
		    transitionDuration = params.transitionDuration,
		    transitionTimingFunction = params.transitionTimingFunction;


		_Styles2.default.setItemStylesBeforeGridCreated(items, columnWidth, gridContainer, containerMaxWidth, transitionDuration, transitionTimingFunction);

		this.setSize(containerMaxWidth, columnWidth, columnMargin, items, gridContainer)();

		window.addEventListener('resize', this.setSize(containerMaxWidth, columnWidth, columnMargin, items, gridContainer));
	}

	_createClass(Main, [{
		key: 'setSize',
		value: function setSize(containerMaxWidth, columnWidth, columnMargin, items, gridContainer) {
			return function () {
				var containerWidth = window.innerWidth <= containerMaxWidth ? window.innerWidth : containerMaxWidth;

				var params = _Utils2.default.formatData(containerWidth, columnWidth, columnMargin, items);

				new _Grid2.default(params, items, gridContainer);
			};
		}
	}]);

	return Main;
}();

exports.default = Main;
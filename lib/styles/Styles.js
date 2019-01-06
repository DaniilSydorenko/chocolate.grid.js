'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Styles = function () {
	function Styles() {
		_classCallCheck(this, Styles);
	}

	_createClass(Styles, [{
		key: 'setItemStylesBeforeGridCreated',
		value: function setItemStylesBeforeGridCreated(items, width, container, containerMaxWidth) {
			var transitionDuration = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0.5;
			var transitionTimingFunction = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'ease';

			container.style.maxWidth = containerMaxWidth + 'px';
			items.forEach(function (item, i) {
				item.style.width = width + 'px';
				item.style.position = "absolute";
				item.style.transition = 'all ' + transitionTimingFunction + ' ' + transitionDuration + 's';
				item.querySelector('.text').textContent = '' + i; // TEMPORARY
			});
		}
	}, {
		key: 'setContainerStyles',
		value: function setContainerStyles(container, height, width) {
			container.style.position = 'relative';
			container.style.marginLeft = 'auto'; // depends of size, if not 100%
			container.style.marginRight = 'auto'; // depends of size, if not 100%
			container.style.height = height + 'px';
			container.style.width = width + 'px';
		}
	}, {
		key: 'setItemStyles',
		value: function setItemStyles(item, top, left) {
			item.style.top = top + 'px';
			item.style.left = left + 'px';
		}
	}]);

	return Styles;
}();

exports.default = new Styles();
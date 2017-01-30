'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

	'use strict';

	window.Chocolate = __webpack_require__(1);

	/***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	/**
  * Dependencies
  */

	var Sizes = __webpack_require__(2);
	var Styles = __webpack_require__(3);
	var Grid = __webpack_require__(4);
	var Main = __webpack_require__(5);
	var Instafeed = __webpack_require__(6);

	module.exports = function Chocolate(params) {
		_classCallCheck(this, Chocolate);

		// Selector checking: string, length,
		// Sperva :
		//params.hasOwnProperty('containerSelector');
		//if (typeof params.containerSelector === "string") {
		//	if (params.containerSelector.length > 0) {
		//
		//	}
		//}

		/*
  	Main.run({
  		width: --
  		margin: ---
  	})
   */

		/*
  	 Available params:
  	 containerSelector
  	 containerMaxWidth
  	 itemSelector --->itemSelector
  	 columnWidth
  	 columnMargin
  	 fullScreen(?)
   */

		//var userFeed = new Instafeed({
		//	get: 'user',
		//	userId: 1704058022,
		//	accessToken: '1704058022.bc0a4c1.39e93bdc2ef0467c87ac170cc2a3f9ac',
		//	resolution: 'low_resolution',
		//	target: 'js-chocolate',
		//	template: '<div id="instagram" class="js-tile"><img src="{{image}}" class="instagram-img" /></div>',
		//	success: function(data) {
		//		console.log(data);
		//	}
		//});
		//
		//userFeed.run();

		var elements = document.querySelectorAll(".js-tile");
		var gridContainer = document.querySelector('.js-chocolate');

		Sizes.setElementsHeight(elements);

		this._containerSelector = params.containerSelector;
		this._itemSelector = params.itemSelector;
		this._columnUserWidth = params.columnWidth;
		//this._containerUserWidth = params.containerWidth;
		this._columnUserMargin = params.columnMargin;
		this._columnWidth = elements[0].clientWidth;
		this._containerWidth = gridContainer.clientWidth;
		this._containerUserMaxWidth = params.containerMaxWidth;

		var numbers = Sizes.getHeightOfElements(elements);
		var columns = Sizes.getColumnNumber(this._containerWidth, this._columnUserWidth);
		var containerFullWidth = Sizes.getContainerWidth(this._columnUserWidth, columns, this._columnUserMargin);

		Styles.replaceItems({
			itemsHeight: numbers,
			columnsNumber: columns,
			itemSelector: this._itemSelector,
			itemWidth: this._columnUserWidth,
			itemMargin: this._columnUserMargin,
			containerSelector: this._containerSelector,
			containerFullWidth: containerFullWidth
		});

		var colWidth = this._columnUserWidth,
		    colMargin = this._columnUserMargin,
		    maxWidth = this._containerUserMaxWidth;

		setSize();

		window.addEventListener('resize', setSize);

		function setSize() {

			function reCounting() {
				var columns = Sizes.getColumnNumber(window.innerWidth, colWidth + colMargin);
				var numbers = Sizes.getHeightOfElements(elements);
				var grid = Grid.createGrid(numbers, columns);
				var containerFullWidth = Sizes.getContainerWidth(colWidth, columns, colMargin);

				return {
					'columns': columns,
					'numbers': numbers,
					'grid': grid,
					'containerFullWidth': containerFullWidth
				};
			}

			if (window.innerWidth <= maxWidth) {
				// Get new columns number because window width is only one important
				var data = reCounting();
				Styles.replaceItems(data.grid, elements, gridContainer, data.containerFullWidth);
			}
		}

		//@TODO:
		// remove listeners
		// change somewhere vars -> lets
		// create grid with prototype
		// grid -> Map?
	};

	/***/
},
/* 2 */
/***/function (module, exports) {

	'use strict';

	var Sizes = function () {
		function Sizes() {
			_classCallCheck(this, Sizes);

			this._height = window.innerHeight;
			this._width = window.innerWidth;
		}

		_createClass(Sizes, [{
			key: 'setElementsHeight',
			value: function setElementsHeight(elements) {
				for (var e = 0; e < elements.length; e++) {
					elements[e].setAttribute("data-height", elements[e].clientHeight);
				}
			}
		}, {
			key: 'getColumnNumber',
			value: function getColumnNumber(containerWidth, columnWidth) {
				// container width exmp - 1200
				// col width exmp - 250
				// col number exmp - 4
				// 1200 / 250 = 4x250 + 200 // poka bez shiriny kolony
				// permanent margin ??

				//@TODO
				// Responsive column
				// Permanent column
				// need percents

				return Math.floor(containerWidth / columnWidth);
			}
		}, {
			key: 'getContainerWidth',
			value: function getContainerWidth(columnWidth, columnNumber, columnMargin) {
				// Minus last right margin
				return columnNumber * (columnWidth + columnMargin) - columnMargin;
			}
		}, {
			key: 'getHeightOfElements',
			value: function getHeightOfElements(elements) {
				var numbers = [];
				for (var index = 0; index < elements.length; index++) {
					var obj1 = _defineProperty({}, index, elements[index].clientHeight);
					numbers.push(obj1);
				}
				return numbers;
			}
		}, {
			key: 'getElementsWidth',
			value: function getElementsWidth(elements) {
				var numbers = [];
				for (var index = 0; index < elements.length; index++) {
					var obj1 = _defineProperty({}, index, elements[index].clientWidth);
					numbers.push(obj1);
				}
				return numbers;
			}
		}, {
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
/***/function (module, exports, __webpack_require__) {

	'use strict';

	/**
  * Dependencies
  */

	var Sizes = __webpack_require__(2);
	var Grid = __webpack_require__(4);

	var Styles = function () {
		function Styles() {
			_classCallCheck(this, Styles);

			this._blue = "#cbd0e1";
			this._green = "#d1f313";
			this._red = "#ff0000";
		}

		_createClass(Styles, [{
			key: 'colors',
			value: function colors() {
				return [this._blue, this._green, this._red];
			}
		}, {
			key: 'replaceItems',
			value: function replaceItems(params) {
				// Get grid
				var grid = Grid.createGrid(params.itemsHeight, params.columnsNumber);

				//Get items and container
				var items = document.querySelectorAll(params.itemSelector);
				var container = document.querySelector(params.containerSelector);

				for (var col in grid) {
					if (grid.hasOwnProperty(col)) {
						var column = grid[col];
						var sum = 0;
						var mapOfSums = [];

						for (var e = 0; e < column.length; e++) {
							var item = column[e];

							for (var index in item) {
								if (item.hasOwnProperty(index)) {
									// Set items positions
									items[index].style.transform = "matrix(1, 0, 0, 1, " + (params.itemWidth + params.itemMargin) * col + ", " + ( // Left
									sum + params.itemMargin * e) + ")"; // Top

									sum += item[index]; // Should count MARGINS !!!
									mapOfSums.push(sum);
								}
							}
						}
					}
				}

				console.log(mapOfSums);
				container.style.height = sum + 'px'; // Height??
				container.style.width = params.containerFullWidth + 'px';
			}
		}]);

		return Styles;
	}();

	module.exports = new Styles();

	/***/
},
/* 4 */
/***/function (module, exports) {

	'use strict';

	var Grid = function () {
		function Grid() {
			_classCallCheck(this, Grid);
		}

		_createClass(Grid, [{
			key: 'getMapOfHeightsForEveryColumn',

			/**
    * Get every element{index:height} and return array of heights for every column
    *
    * @param column
    */
			value: function getMapOfHeightsForEveryColumn(column) {
				var mapOfHeights = [];
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = column[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var indexHeight = _step.value;

						var index = Object.keys(indexHeight)[0];
						mapOfHeights.push(parseInt(indexHeight[index]));
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

				return mapOfHeights;
			}

			/**
    * Return index of column with smallest sum
    *
    * @param storage
    */

		}, {
			key: 'getIndexOfSmallestColumn',
			value: function getIndexOfSmallestColumn(storage) {
				var i = 0;
				var v = storage[0];
				for (var t = 1; t < storage.length; t++) {
					if (storage[t] < v) {
						v = storage[t];
						i = t;
					}
				}

				return i;
			}

			/**
    * Make me magic here please and create grid :)
    *
    * @param elementsOfGrid
    * @param columns
    * @returns {{}}
    */

		}, {
			key: 'createGrid',
			value: function createGrid(elementsOfGrid, columns) {
				var elementsCount = elementsOfGrid.length,
				    grid = {};

				// Set columns amount
				for (var j = 0; j < columns; j++) {
					grid[j] = [];
				}

				var gridLength = Object.keys(grid).length;

				for (var i = 0; i < elementsCount; i++) {
					for (var col = 0; col < gridLength && elementsOfGrid.length > 0; col++) {
						// Till elements array will not be empty
						var elementOfGrid = elementsOfGrid.splice(0, 1)[0]; // Grab first element till zero length
						if (elementOfGrid) {
							// Here start to fill columns by elements
							if (grid[col].length === 0) {
								grid[col].push(elementOfGrid); // Push element if column is empty
							} else if (grid[col].length > 0) {
								// if not empty should detect smallest column
								var elementsSumStorage = []; // Store sum of heights for all counted elements

								for (var c = 0; c < gridLength; c++) {
									var mapOfHeights = this.getMapOfHeightsForEveryColumn(grid[c]);

									if (mapOfHeights.length === 1) {
										elementsSumStorage.push(mapOfHeights[0]);
									} else if (mapOfHeights.length > 1) {
										var total = mapOfHeights.reduce(function (a, b) {
											return a + b;
										});
										elementsSumStorage.push(total);
									}
								}

								var indexOfSmallestColumn = this.getIndexOfSmallestColumn(elementsSumStorage);
								grid[indexOfSmallestColumn].push(elementOfGrid); // Insert value to the smallest column
							}
						}
					}
				}

				return grid; // Finally we got a grid with sorted elements
			}
		}]);

		return Grid;
	}();

	module.exports = new Grid();

	/***/
},
/* 5 */
/***/function (module, exports) {

	'use strict';

	var Main = function () {
		function Main() {
			_classCallCheck(this, Main);
		}

		_createClass(Main, [{
			key: 'run',
			value: function run() {}
		}, {
			key: 'setListeners',
			value: function setListeners() {}
		}, {
			key: 'resizeContainer',
			value: function resizeContainer() {}
		}]);

		return Main;
	}();

	/***/
},
/* 6 */
/***/function (module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; // Generated by CoffeeScript 1.9.3
	(function () {
		var Instafeed;

		Instafeed = function () {
			function Instafeed(params, context) {
				var option, value;
				this.options = {
					target: 'instafeed',
					get: 'popular',
					resolution: 'thumbnail',
					sortBy: 'none',
					links: true,
					mock: false,
					useHttp: false
				};
				if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object') {
					for (option in params) {
						value = params[option];
						this.options[option] = value;
					}
				}
				this.context = context != null ? context : this;
				this.unique = this._genKey();
			}

			Instafeed.prototype.hasNext = function () {
				return typeof this.context.nextUrl === 'string' && this.context.nextUrl.length > 0;
			};

			Instafeed.prototype.next = function () {
				if (!this.hasNext()) {
					return false;
				}
				return this.run(this.context.nextUrl);
			};

			Instafeed.prototype.run = function (url) {
				var header, instanceName, script;
				if (typeof this.options.clientId !== 'string') {
					if (typeof this.options.accessToken !== 'string') {
						throw new Error("Missing clientId or accessToken.");
					}
				}
				if (typeof this.options.accessToken !== 'string') {
					if (typeof this.options.clientId !== 'string') {
						throw new Error("Missing clientId or accessToken.");
					}
				}
				if (this.options.before != null && typeof this.options.before === 'function') {
					this.options.before.call(this);
				}
				if (typeof document !== "undefined" && document !== null) {
					script = document.createElement('script');
					script.id = 'instafeed-fetcher';
					script.src = url || this._buildUrl();
					header = document.getElementsByTagName('head');
					header[0].appendChild(script);
					instanceName = "instafeedCache" + this.unique;
					window[instanceName] = new Instafeed(this.options, this);
					window[instanceName].unique = this.unique;
				}
				return true;
			};

			Instafeed.prototype.parse = function (response) {
				var anchor, childNodeCount, childNodeIndex, childNodesArr, e, eMsg, fragment, header, htmlString, httpProtocol, i, image, imageObj, imageString, imageUrl, images, img, imgHeight, imgOrient, imgUrl, imgWidth, instanceName, j, k, len, len1, len2, node, parsedLimit, reverse, sortSettings, targetEl, tmpEl;
				if ((typeof response === 'undefined' ? 'undefined' : _typeof(response)) !== 'object') {
					if (this.options.error != null && typeof this.options.error === 'function') {
						this.options.error.call(this, 'Invalid JSON data');
						return false;
					} else {
						throw new Error('Invalid JSON response');
					}
				}
				if (response.meta.code !== 200) {
					if (this.options.error != null && typeof this.options.error === 'function') {
						this.options.error.call(this, response.meta.error_message);
						return false;
					} else {
						throw new Error("Error from Instagram: " + response.meta.error_message);
					}
				}
				if (response.data.length === 0) {
					if (this.options.error != null && typeof this.options.error === 'function') {
						this.options.error.call(this, 'No images were returned from Instagram');
						return false;
					} else {
						throw new Error('No images were returned from Instagram');
					}
				}
				if (this.options.success != null && typeof this.options.success === 'function') {
					this.options.success.call(this, response);
				}
				this.context.nextUrl = '';
				if (response.pagination != null) {
					this.context.nextUrl = response.pagination.next_url;
				}
				if (this.options.sortBy !== 'none') {
					if (this.options.sortBy === 'random') {
						sortSettings = ['', 'random'];
					} else {
						sortSettings = this.options.sortBy.split('-');
					}
					reverse = sortSettings[0] === 'least' ? true : false;
					switch (sortSettings[1]) {
						case 'random':
							response.data.sort(function () {
								return 0.5 - Math.random();
							});
							break;
						case 'recent':
							response.data = this._sortBy(response.data, 'created_time', reverse);
							break;
						case 'liked':
							response.data = this._sortBy(response.data, 'likes.count', reverse);
							break;
						case 'commented':
							response.data = this._sortBy(response.data, 'comments.count', reverse);
							break;
						default:
							throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.");
					}
				}
				if (typeof document !== "undefined" && document !== null && this.options.mock === false) {
					images = response.data;
					parsedLimit = parseInt(this.options.limit, 10);
					if (this.options.limit != null && images.length > parsedLimit) {
						images = images.slice(0, parsedLimit);
					}
					fragment = document.createDocumentFragment();
					if (this.options.filter != null && typeof this.options.filter === 'function') {
						images = this._filter(images, this.options.filter);
					}
					if (this.options.template != null && typeof this.options.template === 'string') {
						htmlString = '';
						imageString = '';
						imgUrl = '';
						tmpEl = document.createElement('div');
						for (i = 0, len = images.length; i < len; i++) {
							image = images[i];
							imageObj = image.images[this.options.resolution];
							if ((typeof imageObj === 'undefined' ? 'undefined' : _typeof(imageObj)) !== 'object') {
								eMsg = "No image found for resolution: " + this.options.resolution + ".";
								throw new Error(eMsg);
							}
							imgWidth = imageObj.width;
							imgHeight = imageObj.height;
							imgOrient = "square";
							if (imgWidth > imgHeight) {
								imgOrient = "landscape";
							}
							if (imgWidth < imgHeight) {
								imgOrient = "portrait";
							}
							imageUrl = imageObj.url;
							httpProtocol = window.location.protocol.indexOf("http") >= 0;
							if (httpProtocol && !this.options.useHttp) {
								imageUrl = imageUrl.replace(/https?:\/\//, '//');
							}
							imageString = this._makeTemplate(this.options.template, {
								model: image,
								id: image.id,
								link: image.link,
								type: image.type,
								image: imageUrl,
								width: imgWidth,
								height: imgHeight,
								orientation: imgOrient,
								caption: this._getObjectProperty(image, 'caption.text'),
								likes: image.likes.count,
								comments: image.comments.count,
								location: this._getObjectProperty(image, 'location.name')
							});
							htmlString += imageString;
						}
						tmpEl.innerHTML = htmlString;
						childNodesArr = [];
						childNodeIndex = 0;
						childNodeCount = tmpEl.childNodes.length;
						while (childNodeIndex < childNodeCount) {
							childNodesArr.push(tmpEl.childNodes[childNodeIndex]);
							childNodeIndex += 1;
						}
						for (j = 0, len1 = childNodesArr.length; j < len1; j++) {
							node = childNodesArr[j];
							fragment.appendChild(node);
						}
					} else {
						for (k = 0, len2 = images.length; k < len2; k++) {
							image = images[k];
							img = document.createElement('img');
							imageObj = image.images[this.options.resolution];
							if ((typeof imageObj === 'undefined' ? 'undefined' : _typeof(imageObj)) !== 'object') {
								eMsg = "No image found for resolution: " + this.options.resolution + ".";
								throw new Error(eMsg);
							}
							imageUrl = imageObj.url;
							httpProtocol = window.location.protocol.indexOf("http") >= 0;
							if (httpProtocol && !this.options.useHttp) {
								imageUrl = imageUrl.replace(/https?:\/\//, '//');
							}
							img.src = imageUrl;
							if (this.options.links === true) {
								anchor = document.createElement('a');
								anchor.href = image.link;
								anchor.appendChild(img);
								fragment.appendChild(anchor);
							} else {
								fragment.appendChild(img);
							}
						}
					}
					targetEl = this.options.target;
					if (typeof targetEl === 'string') {
						targetEl = document.getElementById(targetEl);
					}
					if (targetEl == null) {
						eMsg = "No element with id=\"" + this.options.target + "\" on page.";
						throw new Error(eMsg);
					}
					targetEl.appendChild(fragment);
					header = document.getElementsByTagName('head')[0];
					header.removeChild(document.getElementById('instafeed-fetcher'));
					instanceName = "instafeedCache" + this.unique;
					window[instanceName] = void 0;
					try {
						delete window[instanceName];
					} catch (_error) {
						e = _error;
					}
				}
				if (this.options.after != null && typeof this.options.after === 'function') {
					this.options.after.call(this);
				}
				return true;
			};

			Instafeed.prototype._buildUrl = function () {
				var base, endpoint, final;
				base = "https://api.instagram.com/v1";
				switch (this.options.get) {
					case "popular":
						endpoint = "media/popular";
						break;
					case "tagged":
						if (!this.options.tagName) {
							throw new Error("No tag name specified. Use the 'tagName' option.");
						}
						endpoint = "tags/" + this.options.tagName + "/media/recent";
						break;
					case "location":
						if (!this.options.locationId) {
							throw new Error("No location specified. Use the 'locationId' option.");
						}
						endpoint = "locations/" + this.options.locationId + "/media/recent";
						break;
					case "user":
						if (!this.options.userId) {
							throw new Error("No user specified. Use the 'userId' option.");
						}
						endpoint = "users/" + this.options.userId + "/media/recent";
						break;
					default:
						throw new Error("Invalid option for get: '" + this.options.get + "'.");
				}
				final = base + "/" + endpoint;
				if (this.options.accessToken != null) {
					final += "?access_token=" + this.options.accessToken;
				} else {
					final += "?client_id=" + this.options.clientId;
				}
				if (this.options.limit != null) {
					final += "&count=" + this.options.limit;
				}
				final += "&callback=instafeedCache" + this.unique + ".parse";
				return final;
			};

			Instafeed.prototype._genKey = function () {
				var S4;
				S4 = function S4() {
					return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
				};
				return "" + S4() + S4() + S4() + S4();
			};

			Instafeed.prototype._makeTemplate = function (template, data) {
				var output, pattern, ref, varName, varValue;
				pattern = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/;
				output = template;
				while (pattern.test(output)) {
					varName = output.match(pattern)[1];
					varValue = (ref = this._getObjectProperty(data, varName)) != null ? ref : '';
					output = output.replace(pattern, function () {
						return "" + varValue;
					});
				}
				return output;
			};

			Instafeed.prototype._getObjectProperty = function (object, property) {
				var piece, pieces;
				property = property.replace(/\[(\w+)\]/g, '.$1');
				pieces = property.split('.');
				while (pieces.length) {
					piece = pieces.shift();
					if (object != null && piece in object) {
						object = object[piece];
					} else {
						return null;
					}
				}
				return object;
			};

			Instafeed.prototype._sortBy = function (data, property, reverse) {
				var sorter;
				sorter = function sorter(a, b) {
					var valueA, valueB;
					valueA = this._getObjectProperty(a, property);
					valueB = this._getObjectProperty(b, property);
					if (reverse) {
						if (valueA > valueB) {
							return 1;
						} else {
							return -1;
						}
					}
					if (valueA < valueB) {
						return 1;
					} else {
						return -1;
					}
				};
				data.sort(sorter.bind(this));
				return data;
			};

			Instafeed.prototype._filter = function (images, filter) {
				var filteredImages, fn, i, image, len;
				filteredImages = [];
				fn = function fn(image) {
					if (filter(image)) {
						return filteredImages.push(image);
					}
				};
				for (i = 0, len = images.length; i < len; i++) {
					image = images[i];
					fn(image);
				}
				return filteredImages;
			};

			return Instafeed;
		}();

		(function (root, factory) {
			if (true) {
				return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			} else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
				return module.exports = factory();
			} else {
				return root.Instafeed = factory();
			}
		})(this, function () {
			return Instafeed;
		});
	}).call(this);

	/***/
}
/******/]);
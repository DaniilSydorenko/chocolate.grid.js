'use strict';

/**
 * Dependencies
 */
var Sizes = require('./sizes/Sizes');
var Styles = require('./styles/Styles');
var Grid = require('./grid/Grid');
var Main = require('./main/Main');
var Instafeed = require('instafeed.js');

module.exports = class Chocolate {

	constructor(params) {

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
		let gridContainer = document.querySelector('.js-chocolate');

		Sizes.setElementsHeight(elements);

		this._containerSelector = params.containerSelector;
		this._itemSelector = params.itemSelector;
		this._columnUserWidth = params.columnWidth;
		//this._containerUserWidth = params.containerWidth;
		this._columnUserMargin = params.columnMargin;
		this._columnWidth = elements[0].clientWidth;
		this._containerWidth = gridContainer.clientWidth;
		this._containerUserMaxWidth = params.containerMaxWidth;

		let numbers = Sizes.getHeightOfElements(elements);
		let columns = Sizes.getColumnNumber(this._containerWidth, this._columnUserWidth);
		let containerFullWidth = Sizes.getContainerWidth(this._columnUserWidth, columns, this._columnUserMargin);

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
				let columns = Sizes.getColumnNumber(window.innerWidth, colWidth + colMargin);
				let numbers = Sizes.getHeightOfElements(elements);
				let grid = Grid.createGrid(numbers, columns);
				let containerFullWidth = Sizes.getContainerWidth(colWidth, columns, colMargin);

				return {
					'columns': columns,
					'numbers': numbers,
					'grid': grid,
					'containerFullWidth': containerFullWidth
				};
			}

			if (window.innerWidth <= maxWidth) {
				// Get new columns number because window width is only one important
				let data = reCounting();
				Styles.replaceItems(data.grid, elements, gridContainer, data.containerFullWidth);
			}

		}

		//@TODO:
		// remove listeners
		// change somewhere vars -> lets
		// create grid with prototype
		// grid -> Map?
	}

};





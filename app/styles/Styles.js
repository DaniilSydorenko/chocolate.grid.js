'use strict';

const Grid = require('../grid/Grid');

class Styles {

	/**
	 * Good way to set styles on items before grid is ready
	 *
	 * @param items
	 * @param itemWidth
	 * @param container
	 * @param containerMaxWidth
	 */
	setItemStylesBeforeGridCreated(items, itemWidth, container, containerMaxWidth) {
		container.style.maxWidth = containerMaxWidth + "px";
		for (let e = 0; e < items.length; e++) {
			items[e].style.width = itemWidth + "px"; // item width
			items[e].style.position = "absolute"; // item position
			items[e].style.opacity = 0;
            items[e].style.transition = "all ease .5s"; // animation
        }
	}

	/**
	 * Replace all items in the grid
	 *
	 * @param params
	 */
	replaceItems(params) {
		// Get grid
		const grid = Grid.createGrid(params.itemsHeight, params.columnsNumber);

		// Get items and container
		var items = document.querySelectorAll(params.itemSelector);
		var container = document.querySelector(params.containerSelector);
		var containerHeight = null;

		for (let col in grid) {
			if (grid.hasOwnProperty(col)) {
				var column = grid[col];
				var positionTop = 0;
				var fullSumOfHeights = 0;

				for (let e = 0; e < column.length; e++) {
					var item = column[e];
					for (let index in item) {
						if (item.hasOwnProperty(index)) {

                            // items[index].style.width = params.itemWidth + "px"; // item width
                            // items[index].style.position = "absolute"; // item position
                            // items[index].style.opacity = 0;
                            // items[index].style.transition = "all ease .5s"; // animation

							items[index].style.top = positionTop + (params.itemMargin * e) + "px";
							items[index].style.left = (params.itemWidth + params.itemMargin) * col + "px";

							//items[index].style.transform =
							//	"matrix(1, 0, 0, 1, " +
							//	((params.itemWidth + params.itemMargin) * col) + ", " + // Left
							//	(positionTop + (params.itemMargin * e)) + ")"; // Top

							positionTop += item[index]; // Sum of heights for top position of next item
							fullSumOfHeights += (item[index] + params.itemMargin); // Sum of all items heights and margins for current column
						}
					}
				}

				if (containerHeight === null || containerHeight < fullSumOfHeights) {
					containerHeight = fullSumOfHeights;
				}
			}
		}

		container.style.position = "relative";
		container.style.marginLeft = "auto"; // depends of size, if not 100%
		container.style.marginRight = "auto"; // depends of size, if not 100%
		container.style.height = containerHeight + 'px';
		container.style.width = params.containerFullWidth + 'px';

	}
}

module.exports = new Styles();

class Sizes {
    /**
	 *
     * @param containerWidth
     * @param columnWidth
     * @return {number}
     */
	getColumnNumber(containerWidth, columnWidth) {
		return Math.floor(containerWidth / columnWidth);
	}

    /**
	 *
     * @param columnWidth
     * @param columnNumber
     * @param columnMargin
     * @return {number}
     */
	getContainerWidth(columnWidth, columnNumber, columnMargin) {
		return columnNumber * (columnWidth + columnMargin) - columnMargin;
	}

    /**
	 *
     * @param items
     * @return {Array}
     */
	getHeightOfItems(items) {
		let numbers = [];
		for (let index = 0; index < items.length; index++) {
			numbers.push({
                [index]: items[index].clientHeight
            });
		}
		return numbers;
	}

    /**
	 *
     * @param items
     * @return {Array}
     */
	getItemsWidth(items) {
		let numbers = [];
		for (let index = 0; index < items.length; index++) {
			numbers.push({
                [index]: items[index].clientWidth
            });
		}
		return numbers;
	}

    /**
     * Get every element{index:height} and return array of heights for every column
     * @param column [{index:height}]
     * @returns []
     */
    getMapOfHeightsForEveryColumn (column) {
        let mapOfHeights = []
        for (let indexHeight of column) {
            let index = Object.keys(indexHeight)[0]
            mapOfHeights.push(parseInt(indexHeight[index]))
        }
        return mapOfHeights
    }

    /**
     * Return index of column with smallest sum of heights
     * @param allColumns
     * @return {number}
     */
    getIndexOfSmallestColumn (allColumns) {
        let i = 0;
        let v = allColumns[0];
        for (let t = 1; t < allColumns.length; t++) {
            if (allColumns[t] < v) {
                v = allColumns[t];
                i = t;
            }
        }
        return i;
    }

    /**
     * Get sum of all heights for every column
     * @param grid
     * @param gridLength
     * @return {Array}
     */
    getSumOfHeightsForColumns (grid, gridLength) {
        let data = [];
        for (let c = 0; c < gridLength; c++) {
            let mapOfHeights = this.getMapOfHeightsForEveryColumn(grid[c])
            if (mapOfHeights.length === 1) {
                data.push(mapOfHeights[0]);
            } else if (mapOfHeights.length > 1) {
                let total = mapOfHeights.reduce(function (a, b) {
                    return a + b;
                })
                data.push(total);
            }
        }
        return data;
    }
}

export default new Sizes();

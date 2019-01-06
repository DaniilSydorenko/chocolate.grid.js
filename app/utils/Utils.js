// @flow

import { IndexHeightItem, Params, GridType } from '../types'

class Utils {
	getColumnNumber = (containerWidth: number, columnWidth: number, columnMargin: number) => {
		const scrollBarPixelWidth = 17;
		const columnNumber = Math.floor(((containerWidth + columnMargin) - scrollBarPixelWidth) / (columnWidth + columnMargin));
		return columnNumber === 0 ? 1 : columnNumber;
	}

	getContainerWidth = (columnWidth: number, columnNumber: number, columnMargin: number) => {
		return columnNumber * (columnWidth + columnMargin) - columnMargin;
	}

	getIndexOfSmallestColumn = (allColumns: Array<number>) => {
		return allColumns.indexOf(Math.min(...allColumns))
	}

	getMapOfHeightsForEveryColumn = (column: Array<IndexHeightItem>) => {
		// $FlowFixMe
		return column.map((e: IndexHeightItem) => {
			return parseInt(e[Object.keys(e)[0]]);
		})
	}
	
	// OBJECT ???
	getHeightOfItems (items: Array<HTMLElement>) {
		const numbers = []
		items.forEach((e, i) => {
			numbers.push({
				[i]: e.offsetHeight
			})
		})
		return numbers
	}

	getSumOfHeightsForColumns (grid: GridType) {
		// $FlowFixMe
		return Object.keys(grid).map((i: string) => {
			let mapOfHeights = this.getMapOfHeightsForEveryColumn(grid[parseInt(i)])
			if (mapOfHeights.length === 1) {
				return mapOfHeights[0]
			} else if (mapOfHeights.length > 1) {
				return mapOfHeights.reduce(function (a, b) {
					return a + b
				})
			}
		})
	}
	
	getContainerHeight (columnMargin: number, grid: GridType) {
		let sumOfHeightsForColumns = this.getSumOfHeightsForColumns(grid)
		// $FlowFixMe
		let maxVal = Math.max(...sumOfHeightsForColumns)
		return maxVal + grid[sumOfHeightsForColumns.indexOf(maxVal)].length * columnMargin
	}
	
	formatData (containerWidth: number, columnWidth: number, columnMargin: number, items: Array<HTMLElement>) {
		const itemsHeight = this.getHeightOfItems(items);
		const columnsNumber = this.getColumnNumber(containerWidth, columnWidth, columnMargin)
		const containerFullWidth = this.getContainerWidth(columnWidth, columnsNumber, columnMargin)
		return {
			itemsHeight,
			columnsNumber,
			columnWidth,
			columnMargin,
			containerFullWidth
		}
	}
}

export default new Utils()

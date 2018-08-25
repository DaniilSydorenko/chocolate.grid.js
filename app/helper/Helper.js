import Errors from '../errors/Errors'

class Helper {
	getColumnNumber = (containerWidth, columnWidth) => Math.floor(containerWidth / columnWidth);
	
	getContainerWidth = (columnWidth, columnNumber, columnMargin) => columnNumber * (columnWidth + columnMargin) - columnMargin;
	
	getIndexOfSmallestColumn = (allColumns) => allColumns.indexOf(Math.min(...allColumns));
	
	getMapOfHeightsForEveryColumn = (column) => column.map(e => parseInt(e[Object.keys(e)[0]]));
	
	getHeightOfItems (items) {
		const numbers = []
		items.forEach((e, i) => {
			numbers.push({
				[i]: e.clientHeight
			})
		})
		return numbers
	}
	
	getSumOfHeightsForColumns (grid) {
		return Object.keys(grid).map(i => {
			let mapOfHeights = this.getMapOfHeightsForEveryColumn(grid[i])
			if (mapOfHeights.length === 1) {
				return mapOfHeights[0]
			} else if (mapOfHeights.length > 1) {
				return mapOfHeights.reduce(function (a, b) {
					return a + b
				})
			}
		})
	}
	
	parametersChecker (params) {
		const properties = [
			{name: 'containerSelector', type: 'string'},
			{name: 'containerMaxWidth', type: 'number'},
			{name: 'itemSelector', type: 'string'},
			{name: 'columnWidth', type: 'number'},
			{name: 'columnMargin', type: 'number'}
		]
		
		properties.map(function (property) {
			if (params.hasOwnProperty(property.name)) {
				if (typeof params[property.name] === property.type) {
					if (params[property.name] === undefined && params[property.name] === null &&
						params[property.name] === false && params[property.name] === '') {
						Errors.throwError(property.name, 'E_003')
					}
				} else {
					Errors.throwError(property.name, 'E_002')
				}
			} else {
				Errors.throwError(property.name, 'E_001')
			}
		})
		return params
	}
	
	incomingData (containerWidth, options, items) {
		const numbers = this.getHeightOfItems(items)
		const columns = this.getColumnNumber(containerWidth, options.columnWidth)
		const containerFullWidth = this.getContainerWidth(options.columnWidth, columns, options.columnMargin)
		return {
			itemsHeight: numbers,
			columnsNumber: columns,
			itemSelector: options.itemSelector,
			itemWidth: options.columnWidth,
			itemMargin: options.columnMargin,
			containerSelector: options.containerSelector,
			containerFullWidth: containerFullWidth
		}
	}
}

export default new Helper()

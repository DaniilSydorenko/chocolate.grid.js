class Utils {
	getColumnNumber = (containerWidth, columnWidth) => Math.floor(containerWidth / columnWidth)
	
	getContainerWidth = (columnWidth, columnNumber, columnMargin) => columnNumber * (columnWidth + columnMargin) - columnMargin
	
	getIndexOfSmallestColumn = (allColumns) => allColumns.indexOf(Math.min(...allColumns))
	
	getMapOfHeightsForEveryColumn = (column) => column.map(e => parseInt(e[Object.keys(e)[0]]))
	
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
	
	getContainerHeight(columnMargin, grid) {
		let sumOfHeightsForColumns = this.getSumOfHeightsForColumns(grid);
		let maxVal = Math.max(...sumOfHeightsForColumns);
		return maxVal + grid[sumOfHeightsForColumns.indexOf(maxVal)].length * columnMargin;
	}
	
	throwError (customMessage, errorCode) {
		throw new Error(customMessage + ': ' + errorCode)
	}
	
	guard (params) {
		const properties = [
			{name: 'containerSelector', type: 'string'},
			{name: 'containerMaxWidth', type: 'number'},
			{name: 'itemSelector', type: 'string'},
			{name: 'columnWidth', type: 'number'},
			{name: 'columnMargin', type: 'number'}
		]
		
		const errorCodes = {
			E_001: 'Property is not defined',
			E_002: 'Invalid type of parameter',
			E_003: 'Property is empty',
			E_004: 'Invalid size of container',
			E_005: 'Invalid value',
			E_006: 'Missing container selector property',
			E_007: 'Missing item selector property',
			E_008: 'Missing width of item',
			E_009: 'Missing margin property',
			E_010: 'Missing container max width property'
		}
		
		properties.map(function (property) {
			if (params.hasOwnProperty(property.name)) {
				if (typeof params[property.name] === property.type) {
					if (params[property.name] === undefined && params[property.name] === null &&
						params[property.name] === false && params[property.name] === '') {
						this.throwError(property.name, errorCodes['E_003'])
					}
				} else {
					this.throwError(property.name, errorCodes['E_002'])
				}
			} else {
				this.throwError(property.name, errorCodes['E_001'])
			}
		})
		return params
	}
	
	formatData (containerWidth, options, items) {
		const {itemSelector, columnWidth, columnMargin, containerSelector} = options
		const itemsHeight = this.getHeightOfItems(items)
		const columnsNumber = this.getColumnNumber(containerWidth, columnWidth)
		const containerFullWidth = this.getContainerWidth(columnWidth, columnsNumber, columnMargin)
		return {
			itemsHeight,
			columnsNumber,
			itemSelector,
			columnWidth,
			columnMargin,
			containerSelector,
			containerFullWidth
		}
	}
}

export default new Utils()

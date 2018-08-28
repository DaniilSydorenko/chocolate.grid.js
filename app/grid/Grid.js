import Styles from '../styles/Styles'
import Utils from '../utils/Utils'

class Grid {
	constructor (params, items, container) {
		Styles.setContainerStyles(
			container,
			Utils.getContainerHeight(params.columnMargin, this.createGrid(params, items)),
			params.containerFullWidth
		)
	}
	
	createGrid (params, items) {
		const {itemsHeight, columnsNumber, columnWidth, columnMargin} = params
		let elementsOfGrid = itemsHeight
		let indexOfSmallestColumn = 0
		let sumOfHeightsForColumns = 0
		
		const numberOfElementsInGrid = elementsOfGrid.length
		const grid = {}
		
		for (let j = 0; j < columnsNumber; j++) {
			grid[j] = []
		}
		
		for (let i = 0; i < numberOfElementsInGrid; i++) {
			for (let col = 0; col < columnsNumber && elementsOfGrid.length > 0; col++) { // Till elements array will not be empty
				let elementOfGrid = elementsOfGrid.splice(0, 1)[0] // Grab first element till zero length
				if (elementOfGrid) { // Here start to fill columns by elements
					const position = {top: 0, left: 0, index: col}
					if (grid[col].length === 0) { // Push first element if column is empty
						position.left = (columnWidth + columnMargin) * col
					} else if (grid[col].length > 0) { // if not empty should detect smallest column
						sumOfHeightsForColumns = Utils.getSumOfHeightsForColumns(grid)
						indexOfSmallestColumn = Utils.getIndexOfSmallestColumn(sumOfHeightsForColumns)
						position.top = sumOfHeightsForColumns[indexOfSmallestColumn]
							+ (columnMargin * grid[indexOfSmallestColumn].length)
						position.left = (columnWidth + columnMargin) * indexOfSmallestColumn
						position.index = indexOfSmallestColumn
					}
					grid[position.index].push(elementOfGrid)
					Styles.setItemStyles(items[Object.keys(elementOfGrid)[0]], position.top, position.left)
				}
			}
		}
		return grid
	}
}

export default Grid

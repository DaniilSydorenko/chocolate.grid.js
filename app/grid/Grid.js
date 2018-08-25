import Styles from '../styles/Styles';
import Helper from '../helper/Helper';

class Grid {
    constructor (params, items, container) {
        this.setGridContainerStyles(params, container, this.createGrid(params, items))
    }

    createGrid(params, items) {
        // TODO params destruction ?

        let elementsOfGrid = params.itemsHeight
        let numberOfColumns = params.columnsNumber
        let indexOfSmallestColumn = 0;
        let sumOfHeightsForColumns = 0;

        const numberOfElementsInGrid = elementsOfGrid.length;
        const grid = {};

        // Set columns amount
        for (let j = 0; j < numberOfColumns; j++) {
            grid[j] = []
        }

        for (let i = 0; i < numberOfElementsInGrid; i++) {
            for (let col = 0; col < numberOfColumns && elementsOfGrid.length > 0; col++) { // Till elements array will not be empty
                let elementOfGrid = elementsOfGrid.splice(0, 1)[0] // Grab first element till zero length

                if (elementOfGrid) { // Here start to fill columns by elements
                    const item = items[Object.keys(elementOfGrid)[0]];

                    if (grid[col].length === 0) { // Push first element if column is empty
                        Styles.setItemStyles(item, 0, (params.itemWidth + params.itemMargin) * col); // Set item of grid styles
                        grid[col].push(elementOfGrid)

                    } else if (grid[col].length > 0) { // if not empty should detect smallest column
                        sumOfHeightsForColumns = Helper.getSumOfHeightsForColumns(grid);
                        indexOfSmallestColumn = Helper.getIndexOfSmallestColumn(sumOfHeightsForColumns);

                        /*** Set item of grid styles ***/
                        Styles.setItemStyles(
                            item,
                            sumOfHeightsForColumns[indexOfSmallestColumn] + (params.itemMargin * grid[indexOfSmallestColumn].length),
                            (params.itemWidth + params.itemMargin) * indexOfSmallestColumn
                        );

                        grid[indexOfSmallestColumn].push(elementOfGrid); // Add next element to the smallest column
                    }
                }
            }
        }

        return grid;
    }
    
    getContainerHeight(params, grid) {
		let sumOfHeightsForColumns = Helper.getSumOfHeightsForColumns(grid);
		let maxVal = Math.max(...sumOfHeightsForColumns);
		let maxValColIndex = sumOfHeightsForColumns.indexOf(maxVal);
		return maxVal + grid[maxValColIndex].length * params.itemMargin;
    }

    setGridContainerStyles(params, container, grid) {
        // TODO MAYBE move set styles to main and leave in grid only calculation?
        Styles.setContainerStyles(container, this.getContainerHeight(params, grid), params.containerFullWidth);
    }
}

export default Grid;

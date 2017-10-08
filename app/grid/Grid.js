import Styles from '../styles/Styles';
import Calculator from '../calculator/Calculator';

class Grid {
    /**
     * Calculate heights, sort the elements and return grid of elements
     * @param params
     * @param items
     * @param container
     * @returns {{}}
     */
    constructor (params, items, container) {
        let elementsOfGrid = params.itemsHeight
        let numberOfColumns = params.columnsNumber

        const numberOfElementsInGrid = elementsOfGrid.length,
            grid = {}

        // Set columns amount
        for (let j = 0; j < numberOfColumns; j++) {
            grid[j] = []
        }

        let sumOfHeightsForColumns = 0;
        let indexOfSmallestColumn = 0;
        let maxSumColHeight = null

        for (let i = 0; i < numberOfElementsInGrid; i++) {
            for (let col = 0; col < numberOfColumns && elementsOfGrid.length > 0; col++) { // Till elements array will not be empty
                let elementOfGrid = elementsOfGrid.splice(0, 1)[0] // Grab first element till zero length

                if (elementOfGrid) { // Here start to fill columns by elements
                    const item = items[Object.keys(elementOfGrid)[0]];

                    if (grid[col].length === 0) { // Push first element if column is empty
                        Styles.setItemStyles(item, 0, (params.itemWidth + params.itemMargin) * col); // Set item of grid styles
                        grid[col].push(elementOfGrid)

                    } else if (grid[col].length > 0) { // if not empty should detect smallest column
                        sumOfHeightsForColumns = Calculator.getSumOfHeightsForColumns(grid, numberOfColumns);
                        indexOfSmallestColumn = Calculator.getIndexOfSmallestColumn(sumOfHeightsForColumns);

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

            /*** Set height of chocolate container ***/
            sumOfHeightsForColumns = Calculator.getSumOfHeightsForColumns(grid, numberOfColumns);
            let maxVal = Math.max(...sumOfHeightsForColumns);
            let colIndex = sumOfHeightsForColumns.indexOf(maxVal);
            maxSumColHeight = maxVal + grid[colIndex].length * params.itemMargin;
        }

        /*** Set width, height and margin of container ***/
        Styles.setContainerStyles(container, maxSumColHeight, params.containerFullWidth);
    }
}

export default Grid;

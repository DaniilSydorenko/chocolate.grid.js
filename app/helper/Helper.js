import Calculator from '../calculator/Calculator';
import Errors from '../errors/Errors';

class Helper {
    constructor () {
        this.properties = [
            {
                name: 'containerSelector',
                type: 'string'
            },
            {
                name: 'containerMaxWidth',
                type: 'number'
            },
            {
                name: 'itemSelector',
                type: 'string'
            },
            {
                name: 'columnWidth',
                type: 'number'
            },
            {
                name: 'columnMargin',
                type: 'number'
            },
        ]
    }

    /**
     *
     * @param params
     * @return {*}
     */
    parametersChecker (params) {
        this.properties.map(function (property) {
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

    /**
     *
     * @param containerWidth
     * @param options
     * @param items
     * @return {{itemsHeight: Array, columnsNumber: number, itemSelector: (*|string), itemWidth: (number|*), itemMargin: number, containerSelector: (*|string), containerFullWidth: number}}
     */
    incomingData (containerWidth, options, items) {
        const numbers = Calculator.getHeightOfItems(items)
        const columns = Calculator.getColumnNumber(containerWidth, options.columnWidth)
        const containerFullWidth = Calculator.getContainerWidth(options.columnWidth, columns, options.columnMargin)

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

export default new Helper();

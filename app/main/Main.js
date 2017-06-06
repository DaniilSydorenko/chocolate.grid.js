'use strict';

const Sizes = require('../sizes/Sizes');
const Styles = require('../styles/Styles');
const Errors = require('../errors/Errors');

class Main {

    constructor() {
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

    parametersChecker(params) {
        this.properties.map(function (property) {
            if (params.hasOwnProperty(property.name)) {
                if (typeof params[property.name] === property.type) {
                    if (params[property.name] === undefined && params[property.name] === null &&
                        params[property.name] === false && params[property.name] === '') {
                        Errors.throwError(property.name, 'E_003');
                    }
                } else {
                    Errors.throwError(property.name, 'E_002');
                }
            } else {
                Errors.throwError(property.name, 'E_001');
            }
        });
        return params;
    }

    incomingData(containerWidth, options, items) {
        let numbers = Sizes.getHeightOfItems(items);
        let columns = Sizes.getColumnNumber(containerWidth, options.columnWidth);
        let containerFullWidth = Sizes.getContainerWidth(options.columnWidth, columns, options.columnMargin);

        return {
            itemsHeight: numbers,
            columnsNumber: columns,
            itemSelector: options.itemSelector,
            itemWidth: options.columnWidth,
            itemMargin: options.columnMargin,
            containerSelector: options.containerSelector,
            containerFullWidth: containerFullWidth
        };
    }

    runResize(items, options) {
        let setSize = () => {
            if (window.innerWidth <= options.containerMaxWidth) {
                Styles.replaceItems(this.incomingData(window.innerWidth - (options.columnWidth / 2), options, items));
            } else {
                Styles.replaceItems(this.incomingData(options.containerMaxWidth - (options.columnWidth / 2), options, items));
            }

            for (let ai = 0; ai < items.length; ai++) {
                items[ai].style.opacity = 1; // fade in effect
            }
        };

        setSize(); // First call

        window.addEventListener('resize', setSize); // Set listener
    }

}

module.exports = new Main();
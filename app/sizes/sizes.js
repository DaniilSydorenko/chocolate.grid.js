'use strict';

module.exports = class Sizes {
    constructor() {
        this._height = window.innerHeight;
        this._width = window.innerWidth;
    }

    get height() {
        return this._height;
    }

    get width() {
        return this._width;
    }

    static getColumnNumber(containerWidth, columnsWidth) {

        // container width exmp - 1200
        // col width exmp - 250
        // col number exmp - 4
        // 1200 / 250 = 4x250 + 200 // poka bez shiriny kolony
        // permanent margin ??

        //@TODO
        // Responsive column
        // Permanent column

        let columnNumber = Math.floor(containerWidth / columnsWidth); // 4 - 25%

        let columnWidth = 100 / columnNumber;

        // need percents

        return columnNumber;
    }


    static getElementsHeights(elements) {
        let numbers = [];
        for (let index = 0; index < elements.length; index++) {
            var obj1 = {
                [index]: elements[index].clientHeight
            };
            numbers.push(obj1);
        }

        return numbers;
    }
};


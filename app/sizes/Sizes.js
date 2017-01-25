'use strict';

class Sizes {
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

    setElementsHeight(elements) {
        for (let e = 0; e < elements.length; e++) {
            elements[e].setAttribute("data-height", elements[e].clientHeight);
        }
    }

    getColumnNumber(containerWidth, columnWidth) {
        // container width exmp - 1200
        // col width exmp - 250
        // col number exmp - 4
        // 1200 / 250 = 4x250 + 200 // poka bez shiriny kolony
        // permanent margin ??

        //@TODO
        // Responsive column
        // Permanent column
        // need percents

        return Math.floor(containerWidth / columnWidth);
    }

    getContainerWidth(columnWidth, columnNumber, columnMargin) {
        //
        return columnNumber * (columnWidth + columnMargin);
    }

    getElementsHeights(elements) {
        let numbers = [];
        for (let index = 0; index < elements.length; index++) {
            var obj1 = {
                [index]: elements[index].clientHeight
            };
            numbers.push(obj1);
        }
        return numbers;
    }

    getElementsWidth(elements) {
        let numbers = [];
        for (let index = 0; index < elements.length; index++) {
            var obj1 = {
                [index]: elements[index].clientWidth
            };
            numbers.push(obj1);
        }
        return numbers;
    }
}

module.exports = new Sizes();


"use strict";

const errors = require('../app/errors/Errors');
const grid = require('../app/grid/Grid');
const main = require('../app/main/Main');
const sizes = require('../app/sizes/Sizes');
const styles = require('../app/styles/Styles');

/** Tests for Error **/

describe("errors", () => {

});

const html = [];
let item1 = "<div class='js-item' style='width: 250px; height: 320px'></div>";
let item2 = "<div class='js-item'></div>";

describe("parameters checking test", () => {
    let params = {};

    beforeEach(() => {
        params = {
            containerSelector: '.js-chocolate',
            containerMaxWidth: 1400,
            itemSelector: '.js-item',
            columnWidth: 250,
            columnMargin: 20
        };
    });

    it("return true", () => expect(main.parametersChecker(params)).toBeTruthy());
});



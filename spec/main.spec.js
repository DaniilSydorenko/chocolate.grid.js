"use strict";

const main = require('../app/main/Main');

describe("Tests for Main", () => {
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

    it("parametersChecker: returns true", () => expect(main.parametersChecker(params)).toBeTruthy());
});



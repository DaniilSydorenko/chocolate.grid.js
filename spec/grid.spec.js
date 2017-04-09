"use strict";

const grid = require('../app/grid/Grid');

describe("Test for Grid", () => {
    let mapOfHeights = [];
    let smallestIndex = null;
    let fullGrid = {};

    beforeEach(() => {
        const arrayOfHeights = [
            { 0: 268 },
            { 1: 494 },
            { 2: 175 },
            { 3: 350 },
            { 4: 190 },
            { 5: 275 }
        ];

        mapOfHeights = grid.getMapOfHeightsForEveryColumn(arrayOfHeights);
        smallestIndex = grid.getIndexOfSmallestColumn([220, 310, 195, 455, 130]);
        fullGrid = grid.createGrid(arrayOfHeights, 3);
    });

    it("getMapOfHeightsForEveryColumn: returns array of numbers", () => expect(mapOfHeights).toEqual(jasmine.any(Array)));
    it("getMapOfHeightsForEveryColumn: value type number", () => expect(mapOfHeights[0]).toEqual(jasmine.any(Number)));
    it("getIndexOfSmallestColumn: returns number", () => expect(smallestIndex).toEqual(jasmine.any(Number)));
    it("createGrid: returns object of arrays", () => expect(fullGrid).toEqual(jasmine.any(Object)));
    it("createGrid: returns array", () => expect(fullGrid[0]).toEqual(jasmine.any(Array)))
});

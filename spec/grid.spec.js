"use strict";

const grid = require('../app/grid/Grid');

/** Tests for Grid **/

describe("returns array with numbers", () => {
    let mapOfHeights = [];

    beforeEach(() => {
        mapOfHeights = grid.getMapOfHeightsForEveryColumn([
            { 0: 268 },
            { 1: 494 },
            { 2: 175 },
            { 3: 350 },
            { 4: 190 },
            { 5: 275 }
        ]);
    });

    it("returns array of numbers", () => expect(mapOfHeights).toEqual(jasmine.any(Array)));
    it("type of number", () => expect(mapOfHeights[0]).toEqual(jasmine.any(Number)));
});

describe("returns array of numbers", () => {
   let smallestIndex = null;

   beforeEach(() => {
       smallestIndex = grid.getIndexOfSmallestColumn([220, 310, 195, 455, 130]);
   });

   it("returns number", () => expect(smallestIndex).toEqual(jasmine.any(Number)));

});

describe("grid creation test", () => {
    let fullGrid = {};

    beforeEach(() => {
        fullGrid = grid.createGrid([
            { 0: 268 },
            { 1: 494 },
            { 2: 175 },
            { 3: 350 },
            { 4: 190 },
            { 5: 275 }
        ], 3);
    });

    it("returns object of arrays", () => expect(fullGrid).toEqual(jasmine.any(Object)));
    it("returns array", () => expect(fullGrid[0]).toEqual(jasmine.any(Array)))
});

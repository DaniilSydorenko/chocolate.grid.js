const grig = require('../app/grid/Grid');
const main = require('../app/main/Main');

// describe("grid creation test", function () {
//     it("returns array", function () {
//         expect(grig.createGrid());
//     });
// });

describe("parameters checking test", function () {
    it("return true", function () {
        let params = {
            containerSelector: '.js-chocolate',
            containerMaxWidth: 1400,
            itemSelector: '.js-item',
            columnWidth: 250,
            columnMargin: 20
        };
        expect(main.parametersChecker(params));
    });
});



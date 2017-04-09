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
        return true;
    }

    setListeners() {

    }

    resizeContainer(params) {

    }
}

module.exports = new Main();
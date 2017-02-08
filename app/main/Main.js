'use strict';

/**
 * Dependencies
 */
var Sizes = require('../sizes/Sizes');
var Styles = require('../styles/Styles');
var Errors = require('../errors/Errors');

class Main {

	run(params) {

	}

	parametersChecker(params, property, type) {
		if (params.hasOwnProperty(property)) {
			if (typeof params[property] === type) {
				if (params[property] !== undefined && params[property] !== null && params[property] != false) {
					return params[property];
				} else {
					Errors.throwError(property, 'E_003');
				}
			} else {
				Errors.throwError(property, 'E_002');
			}
		} else {
			Errors.throwError(property, 'E_001');
		}
	}

	setListeners() {

	}

	resizeContainer(params) {

	}
}

module.exports = new Main();
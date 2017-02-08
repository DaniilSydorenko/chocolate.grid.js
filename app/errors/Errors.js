"use strict";

class Errors {
	constructor() {
		this.E_001 = 'Property is not defined';
		this.E_002 = 'Invalid type of parameter';
		this.E_003 = 'Property is empty';
		this.E_004 = 'Invalid size of container';
		this.E_005 = 'Invalid value';
		this.E_006 = 'Missing container selector property';
		this.E_007 = 'Missing item selector property';
		this.E_008 = 'Missing width of item property';
		this.E_009 = 'Missing margin property';
		this.E_010 = 'Missing container max width property';
	}

	throwError(customMessage, errorCode) {
		throw new Error(customMessage + ": " + this[errorCode]);
	}
}

module.exports = new Errors();
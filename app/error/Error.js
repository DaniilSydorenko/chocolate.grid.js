"use strict";

class Error {
	constructor() {
		this.E_001 = 'Invalid container selector';
		this.E_002 = 'Invalid item selector';
		this.E_003 = 'Invalid ';
		this.E_004 = 'Invalid ';
		this.E_005 = 'Invalid ';

		this.E_006 = 'Missing container selector property';
		this.E_007 = 'Missing item selector property';
		this.E_008 = 'Missing width of item property';
		this.E_009 = 'Missing margin property';
		this.E_010 = 'Missing container max width property';
	}

	throwError(errorCode) {
		throw new Error(this[errorCode]);
	}
}
class Colors {
    constructor() {
        this._blue = "#cbd0e1";
        this._green = "#d1f313";
        this._red = "#ff0000";
    }

    get colors() {
        return [
            this._blue,
            this._green,
            this._red
        ];
    }
}

module.exports = new Colors();
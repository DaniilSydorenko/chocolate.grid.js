class Grid {
    constructor() {
        this._quantity = 24;
        this._cols = 12;
        this._rows = 12;
    }

    getFullGrid() {
        return [
            this._cols,
            this._rows,
            this._quantity
        ]
    }
}

module.exports = new Grid();
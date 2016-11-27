class Sizes {
    constructor() {
        this._height = window.innerHeight;
        this._width = window.innerWidth;
    }

    get height() {
        return this._height;
    }

    get width() {
        return this._width;
    }
}

module.exports = new Sizes();
class Rektangel {

    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    setSize(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }

    isSquare() {
        return this.length == this.width
    }

    invert() {
        let temp = this.length;
        this.length = this.width;
        this.width = temp;
    }
}

module.exports = Rektangel;
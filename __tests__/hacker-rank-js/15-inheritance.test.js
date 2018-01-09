'use strict'

class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

Rectangle.prototype.area = function() {
    return this.w * this.h;
}

class Square extends Rectangle {

    constructor(s) {
        super(s,s);
    }
}

test('', () => {
    var rec = new Rectangle(3, 4);
    var sqr = new Square(3);

    expect(rec.area()).toBe(12);
    expect(sqr.area()).toBe(9);
})
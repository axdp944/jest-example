'use strict'

function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a + b);
    this.area = a * b;
}

test('constructor function "Rectangle" contains the expected properties', () => {
    const rec = new Rectangle(4,5);
    expect(rec.length).toBe(4);
    expect(rec.width).toBe(5);
    expect(rec.perimeter).toBe(18);
    expect(rec.area).toBe(20);
});

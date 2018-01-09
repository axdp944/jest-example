'use strict'

class Polygon {

    constructor(len) {
        this.values = len;
    }

    perimeter(){
        var total = 0;
        for (var i = 0; i < this.values.length; i++){
            total += this.values[i];
        }

        return total;
    }
}

test('perimeter should sum all values together', () => {
    let triangle = new Polygon([3,4,5,6,7]);
    expect(triangle.perimeter()).toBe(25);
});



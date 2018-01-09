'use strict';

function getCount(objects) {
    var counter = 0;

    for (var i = 0; i < objects.length; i++){
        if (Object(objects[i]).x === Object(objects[i]).y){
            counter++;
        }
    }
    return counter;
}

test('Should return count of objects where x and y are equal values', ()=> {
    expect(getCount([{ x: 1, y: 1 },{ x: 2, y: 3 }, { x: 3, y: 3 },{ x: 3, y: 4 },{ x: 4, y: 5 }])).toBe(2);
});

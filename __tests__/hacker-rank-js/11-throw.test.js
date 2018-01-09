'use strict';

function isPositive(a) {
    if (a > 0){
        return "YES";
    } else if (a === 0) {
        throw 'Zero Error';
    } else if (a < 0) {
        throw new Error('Negative Error');
    }
}

test('Return "YES", if number is positive', () => {
    expect(isPositive(1)).toBe('YES');
});

test('Return "Zero Error", if number is 0', () => {
    expect(function(){isPositive(0);}).toThrow("Zero Error");
});

test('Return "Negative Error", if number is negative', () => {
    expect(function(){isPositive(-1);}).toThrow('Negative Error');
});



'use strict'


function reverseString(s) {
    try {
        return s.split('').reverse().join('');
    } catch (e) {
        return e.toString();
    }
}

test('Reverse the string', () => {
    expect(reverseString("1234")).toBe("4321");
});

test('Return the expection if caught', () => {
    expect(reverseString(Number(1234))).toBe('TypeError: s.split is not a function');
});
'use strict';

function getLetter(s) {
    let letter;
    // Write your code here
    var result = (s.substr(0, 1));
    switch (true) {
        case 'aeiou'.includes(result):
            letter = "A";
            break;
        case "bcdefg".includes(result):
            letter = "B";
            break;
        case "hjklm".includes(result):
            letter = "C";
            break;
        case "npqrstvwxyz".includes(result):
            letter = "D";
            break;
    }
    return letter;
}

test('Returns "A", when first letter in lower-case string contains a vowel', () => {
    expect(getLetter('and')).toBe('A');
});
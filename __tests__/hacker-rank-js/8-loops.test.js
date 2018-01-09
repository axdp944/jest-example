'use strict';

function vowelsAndConsonants(s) {

    var value = '';

    for (var i = 0, len = s.length; i < len; i++) {
        if ('aeiou'.includes(s.charAt(i))){
            value += s.charAt(i);
        }
    }

    for (var i = 0, len = s.length; i < len; i++) {
        if (!'aeiou'.includes(s.charAt(i))){
            value += s.charAt(i);
        }
    }

    return value;
}

test('Loops test', () => {
    expect(vowelsAndConsonants('javascriptloops')).toBe('aaioojvscrptlps');

});
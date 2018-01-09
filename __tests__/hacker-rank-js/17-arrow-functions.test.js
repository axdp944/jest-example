'use strict'

function modifyArray(nums) {
    const arr = nums.map(num => {
        return num % 2 ? num * 3 : num * 2;
    });
    return arr;
}

test('Returns array where input of odd numbers multipled by 3' +
    'and even numbers multipled by 2', () => {
    var inputArr = [1,2,3,4,5];
    expect(modifyArray(inputArr)).toEqual([3,4,9,8,15]);
})
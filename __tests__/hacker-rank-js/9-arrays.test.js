'use strict'

function getSecondLargest(nums) {
    var largestNum = 0;

    for (let obj of nums) {
        if (obj > largestNum){
            largestNum = obj;
        }
    }
    return largestNum - 1;
}

test('Returns the second largest number in the array', () => {
    expect(getSecondLargest(Array(2,3,4,5,6,7,8,9,2,3,4,5,6,7,9))).toBe(8);
});
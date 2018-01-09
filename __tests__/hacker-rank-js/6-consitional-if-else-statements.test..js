'use strict';

function getGrade(score) {
    let grade;
    // Write your code here
    if ( score > 25  ){
        grade = 'A'
    } else if ( score > 20 && score <= 25 ){
        grade = 'B'
    } else if ( score > 15 && score <=20 ){
        grade = 'C'
    } else if ( score > 10 && score <=15 ){
        grade = 'D'
    } else if ( score > 5 && score <= 10 ){
        grade = 'E'
    } else if ( score > 0 && score <= 5 ){
        grade = 'F'
    }
    return grade;
}

test('Returns "A", when grade > 25', () => {
    expect(getGrade(26)).toBe('A');
});

test('Returns "B", when grade = 25', () => {
    expect(getGrade(25)).toBe('B');
});

test('Returns "B", when grade lt 25', () => {
    expect(getGrade(24)).toBe('B');
});

test('Returns "C", when grade = 20', () => {
    expect(getGrade(20)).toBe('C');
});

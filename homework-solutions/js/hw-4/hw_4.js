"use strict";
// task_1

let salary = 1000;
let grade;
if(salary >= 1000) {
    grade = "middle";
} else {
    grade = "junior"
}
console.log(grade);

//  Task_2

let minAge = 18;
let maxAge = 60;
let age = 'a';

if (typeof age === 'string' && !isNaN(age)) {
    age = Number(age);
}
if (typeof age !== 'number' || isNaN(age)) {
    console.log('Incorrect data type'); 
} else {
    if(age < minAge) {
        console.log(`You don't have access cause your age is ${age}.It's less then ${minAge}`);
    } else if (age >= minAge && age < maxAge) {
        console.log("Welcome!");
    } else if (age > maxAge) {
        console.log('Keep calm and look Culture channel');
    } else {
        console.log('Technical work');
    }
}



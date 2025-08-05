"use strict";
/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

const n = 7;
const strN = String(n);
const nn = strN + strN;
const nnn = strN + strN + strN;
const sum = n + Number(nn) + Number(nnn);
console.log(`${n} + ${nn} + ${nnn} = ${sum}`);
"use strict";
/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];  
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];  
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];  
 
const competitorLower = [];  
for (let i = 0; i < competitorPizzas.length; i++) {  
  competitorLower.push(competitorPizzas[i].toLowerCase());  
}  
 
let resultUnique = [];  
for (let i = 0; i < myPizzasT1.length; i++) {  
  const pizzaLower = myPizzasT1[i].toLowerCase();  
  let found = false;  
  for (let j = 0; j < competitorLower.length; j++) {  
    if (competitorLower[j] === pizzaLower) {  
      found = true;  
      break;  
    }  
  }  
  if (!found) {  
    resultUnique.push(myPizzasT1[i]);  
  }  
}  
if (resultUnique.length === 0) {  
  resultUnique = null;  
}  

let resultNull = [];  
for (let i = 0; i < myPizzasT2.length; i++) {  
  const pizzaLower = myPizzasT2[i].toLowerCase();  
  let found = false;  
  for (let j = 0; j < competitorLower.length; j++) {  
    if (competitorLower[j] === pizzaLower) {  
      found = true;  
      break;  
    }  
  }  
  if (!found) {  
    resultNull.push(myPizzasT2[i]);  
  }  
}  
if (resultNull.length === 0) {  
  resultNull = null;  
}  

console.log(resultUnique);
console.log(resultNull);

export { resultNull, resultUnique };

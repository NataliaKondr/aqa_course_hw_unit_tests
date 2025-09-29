// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта


function getKeyByValue<T extends Record<string, any>>(
    obj: T,
    value: T[keyof T]
): keyof T | undefined {
    for (const key in obj) {
        if (obj[key] === value) {
            return key;
        }
    }
    return undefined;
}

const car = {
    make: "Renault",
    model: "Logan",
    year: 2019,
};

const key1 = getKeyByValue(car, "Logan"); 
const key2 = getKeyByValue(car, 2019);    
const key3 = getKeyByValue(car, "Honda"); 

console.log(key1); 
console.log(key2); 
console.log(key3); 
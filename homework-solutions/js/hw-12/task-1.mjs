// 1.Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds

function delayTwoSeconds(callback) {
    setTimeout(callback, 2000);
}
delayTwoSeconds(() => console.log("This message will appear in 2 seconds"));

// 2.Создайте переменную, в которую присвоите новый промис.Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат его резолва в консоль
const resolvedPromise = new Promise((resolve, reject) => {
    resolve(1);
});

resolvedPromise.then((resolvedPromise) => {
    console.log(`Result:${resolvedPromise}`);
});

// 3.Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed".Обработайте промис методом .catch и выведите результат его резолва в консоль
const rejectedPromise = new Promise((resolve, reject) => {
    reject("Promise failed");
});

rejectedPromise.catch((error) => {
    console.error(error);
});

// 4.Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.

function promiseNumber(num) {
    return new Promise((resolve, reject) => {
        resolve(num);
    });
}
promiseNumber(3).then((value) => console.log(value));


// 5.Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите в консоль результаты работы каждого промиса через .then

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
    .then((results) => {
        console.log("Result Promise.all:");
        results.forEach((result) => console.log(result));
    });

// 6.Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите в консоль статус и результат каждого промиса через .then

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
    .then((results) => {
        console.log("Results Promise.allSettled:");
        results.forEach((result) => {
            console.log(`Status: ${result.status}, Result: ${result.value}`);
        });
    });

// 7.Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

async function handlePromiseAll() {
    try {
        const results = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
        console.log("Results Promise.all (async/await):");
        results.forEach((result) => console.log(result));
    } catch (error) {
        console.error("Error:", error);
    }
}

handlePromiseAll();

async function handlePromiseAllSettled() {
    try {
        const results = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
        console.log("Results Promise.allSettled (async/await):");
        results.forEach((result) => {
            console.log(`Status: ${result.status}, Result: ${result.value}`);
        });
    } catch (error) {
        console.error(error);
    }
}

handlePromiseAllSettled();
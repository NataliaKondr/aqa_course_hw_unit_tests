// 1. Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee
// 2. Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee (использовать keyof)
// 3. Создайте тип QaKeys, который будет содержать лишь ключи объекта QA(использовать keyof и typeof)
// 4. Создайте тип UserType из объекта QA (используйте typeof)
// 5. Создайте тип, в котором все поля интерфейса IEmployee будут необязательными
// 6. Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee
// 7. Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager
// 8. Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми (readonly)
// 9. Создайте объект с помощью Record, в ключах которого будут строки, а в значениях - ключи объекта QA (Используйте Record, keyof, typeof)

interface IEmployee {
    name: string;
    salary: number;
    isManager: boolean;
}

const QA: IEmployee = {
    name: "Black Jack",
    salary: 50000,
    isManager: false,
};

type EmployeeKeys = keyof IEmployee;
type QaKeys = keyof typeof QA;
type UserType = typeof QA;
type PartialEmployee = Partial<IEmployee>;
type NameAndSalary = Pick<IEmployee, "name" | "salary">;
type WithoutIsManager = Omit<IEmployee, "isManager">;
type ReadonlyEmployee = Readonly<IEmployee>;
 
const qaKeysRecord: Record<string, keyof typeof QA> = {
    first: "name",
    second: "salary",
    third: "isManager",
};

// Необходимо создать классовую структуру
// 1. Создайте интерфейс IVehicle:
//   Методы:
//     - getDetails(): string — возвращает информацию о транспортном средстве.
//     - start(): string — возвращает строку "The vehicle is starting".

// 2. Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
//   Реализуйте конструктор с полями:
//     - make (строка)
//     - model (строка)
//   Добавьте методы:
//     - start, возвращающего строку: "The vehicle {make} {model} is starting.".
//     - Абстрактный метод getDetails, который нужно реализовать в классах-наследниках.

// 3. Создайте класс Car, который наследует Vehicle:
//     - Добавляет поле year (число).
//     - Реализует метода getDetails, возвращающего строку: "{make} {model}, {year}".
// 4. Создайте объект класса Car и проверьте работоспособность

interface IVehicle {
    getDetails(): string;
    start(): string;
}

abstract class Vehicle implements IVehicle {
    constructor(
        public make: string, 
        public model: string
        ) {}

    start(): string {
        return `The vehicle ${this.make} ${this.model} is starting.`;
    }

    abstract getDetails(): string;
}

class Car extends Vehicle {
    constructor(
        make: string,
        model: string, 
        public year: number
        ) {
        super(make, model);
    }

    getDetails(): string {
        return `${this.make} ${this.model}, ${this.year}`;
    }
}

const myCar = new Car("Renault", "Logan", 2019);

console.log(myCar.start());      
console.log(myCar.getDetails()); 
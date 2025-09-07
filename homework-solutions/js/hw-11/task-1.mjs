class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.#salary = salary;
  };

  get firstName() {
    return this._firstName;
  };
  set firstName(value){
    if (!value || typeof value !== 'string' || value.trim() === '') {
      throw new Error("Please enter a valid string");
    }
    this._firstName = value;
  };

  get lastName() {
    return this._lastName;
  };
  set lastName(value){
    if (!value || typeof value !== 'string' || value.trim() === '') {
      throw new Error("Please enter a valid string");
    }
    this._lastName = value;
  };

  get profession() {
    return this._profession;
  };
  set profession(value){
    if (!value || typeof value !== 'string' || value.trim() === '') {
      throw new Error("Please enter a valid string");
    }
    this._profession = value;
  };

  get salary() {
    return this.#salary;
  };
  set salary(value){
    if (!value || typeof value !== 'number' || value < 0) {
       throw new Error("Please enter a valid number");
    } 
    this.#salary = value;
  };

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
console.log(emp1.firstName); // "John"
emp1.salary = 3100;
console.log(emp1.salary); // 3100


class Company {
  #employees;
  constructor(title, phone, address) {
    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = [];
  }

  get title() {
    return this._title;
  };
  set title(value) {
    if (typeof value === 'string') 
    this._title = value;
  };

  get phone() {
    return this._phone;
  };
  set phone(value) {
    if (typeof value === 'number') 
    this._phone = value;
  };

  get address() {
    return this._address;
  };
  set address(value) {
    if (typeof value === 'string') 
    this._address = value;
  };

  addEmployee(employee) {
    if (employee instanceof Employee) {
      this.#employees.push(employee);
    } else if (employee != {}) throw Error
  };

  getEmployees() {
    return this.#employees;
  };

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
};

const company = new Company('Tech Corp', 123456, 'Main Street');
const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);
company.addEmployee(emp1);
company.addEmployee(emp2);
console.log(company.getEmployees()); // [Employee, Employee]
console.log(company.getInfo()); // Информация о компании
export { Employee, Company };

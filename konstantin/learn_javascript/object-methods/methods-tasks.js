// Использование "this" в литерале объекта
// важность: 5
// Здесь функция makeUser возвращает объект.

// Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Каким будет результат?

// my first answer - 'John'
// correct answer - error




// Создайте калькулятор
// важность: 5
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   // ... ваш код ...
// };

const calculator = {

  read() {
    this.a = +prompt('Number 1');
    this.b = +prompt('Number 2');
  },

  sum() {
    return endSum = this.a + this.b;
  },

  mul() {
    return endMul = this.a * this.b;  
  }

}


calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
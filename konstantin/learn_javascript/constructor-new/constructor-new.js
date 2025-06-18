// Создайте калькулятор при помощи конструктора, new Calculator
// важность: 5
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:

let calculator = new Calculator();
calculator.read();

function Calculator() {
    this.read = function() {
        this.a = +prompt('Enter a', 0);
        this.b = +prompt('Enter b', 0);
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
       return this.a * this.b;
    };
}

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );




// Создайте new Accumulator
// важность: 5
// Создайте функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

let Accumulator = function(startingValue) {
    startingValue = this.value;

    this.read = function() {
        let value2 = prompt('New number:');
        value2 += this.value;
    }
    } // incorrect 

    // correct way:

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt('How much more to add?');
    };
} 
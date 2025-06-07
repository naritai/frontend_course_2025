/*
    Базовый набор задач с использованием функций
    Для решения создай файл functions-solution.js в своей папке 
    по пути YOUR_NAME/js-problems/functions-solution.js
**/

// Задача 1
// Напиши функцию square(num), которая возвращает квадрат числа.
// решение

function square(num) {
  if (typeof num !== number) {
    throw new Error('num is not a number');
  }

  return num * num;
}

console.log(square(25));

// Задача 2
// Напиши функцию  isEven(n) - должна возвращать true, если число чётное.
// решение

function isEven(n) {
    if (typeof n === "number" && n % 2 === 0) {
        return true;
    } 
}

console.log(isEven(4));

// Задача 3
// Напиши функцию min(a, b), которая возвращает наименьшее из двух чисел.
// решение

function min(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("a or b is not Number");
    }
    if (a < b) {
        return `min = ${a}`;
    } else if (b < a) {
        return `min = ${b}`;
    } else {
        return `a и b равны`;
    }
}


console.log(min(4, 7));

// Задача 4
// Напиши функцию inRange(num, min, max), которая проверяет, лежит ли число в диапазоне.
// решение

function inRange(num, min, max) {
    if (typeof num !== "number" || typeof min !== "number" || typeof max !== "number") {
        return "Все аргументы должны быть числами";
    }
    if (num > min && num < max) {
        return `${num} в границах заданного диапазона`;
    } else {
        return `${num} вне заданного диапазона`;
    }
}

console.log(inRange(18, 1, 31));

// Задача 5
// Напиши функцию isPalindrome(str), которая возвращает true, если строка читается одинаково в обе стороны.
// решение

function isPalindrome(str) {
    if (typeof str !== "string") {
        throw new Error("str is not String")
    }

    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    return (str === reversedStr) ? `${str} - полиндром` : `${str} не является полиндромом`;
}

console.log(isPalindrome("221122"));

// Задача 6
// Напиши функцию random(min, max), которая возвращает случайное число от min до max.
// Подсказка - используй Math.random() и какие-нибудь методы округления (Math.round, Math.floor, Math.ceil)
// решение 

function random(min, max) {
  if (min >= max) {
    return "Минимум должен быть меньше максимума";
  }

  min = Math.ceil(min); // Округляем min до большего целого числа
  max = Math.floor(max); // Округляем max до меньшего целого числа

  return Math.floor(Math.random() * (max - min + 1)) + min; // работа со сдвигом в нужный диапазон 
}

console.log(random(-5, 10));

// Задача 7
// Напиши функцию charCount(str, char), которая возвращает число вхождений символа.
// решение 

function charCount(str, char) {
  if (
    typeof str !== 'string' ||
    typeof char !== 'string' ||
    char.length !== 1
  ) {
    return "аргументы введены некорректно";
  }

  countChar = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
        countChar += 1;
    }
  }
  return countChar;
}

console.log(charCount("hello world", "l"));

// Задача 8
// Напиши функцию универсального калькулятора calculate(a, b, operator)
// calculate(3, 2, '*'); ---> 6
// calculate(6, 41, '+'); ---> 47
// не забудь обработать деление на 0 (в этом случае выброси ошибку - throw new Error('невозможная операция'))
// решение 

function calculate(a, b, operator) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error(`Аргументы ${a} и ${b} должны быть числами`);
  }

  if (typeof operator !== 'string') {
    throw new Error(`Аргумент ${operator} должен быть строкой`);
  }

  if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
    throw new Error(`Недопустимый ${operator}. Вот допустимые значения : +, -, *, /`);
  }

    let result;

  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      if (b === 0) {
        throw new Error("Деление на ноль невозможно");
      }
      result = a / b;
      break;
    }
    return result;
}

console.log(calculate(3, 2, '*')); 

// Задача 9
// Напиши функцию map(fn, array), которая принимает на вход функцию и массив,
// и обрабатывает каждый элемент массива этой функцией, возвращая новый массив.
// Пример:
// function square(x) { return x * x; } // возведение в квадрат
// console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
// console.log(map(square, [])); // []

// Обрати внимание: функция не должна изменять переданный ей массив:
// const arr = [1, 2, 3];
// console.log(map(square, arr)); // [1, 4, 9]
// console.log(arr); // [1, 2, 3]
// решение

const arr = [1, 2, 3];

function map(fn, array) {
    if (typeof fn !== "function" || !Array.isArray(array)) {
        throw new Error("fn должен быть функцией, а array - массивом");
    }

    const mapArray = [];
    for (let i = 0; i < array.length; i++) {
      mapArray.push(fn(array[i]));
    }

  return mapArray
}

console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]


// Задача 10
// Напиши функцию, считающую число свойств в объекте:
// const a = { a: 1, b: 2 };
// console.log(count(a)); // 2
// const b = function () {};
// console.log(count(b)); // 0
// const c = [1, 2, 3];
// console.log(count(c)); // 3
// const d = [];
// d[100] = 1;
// console.log(count(d)); // 1

// подсказка: надо использовать специальный цикл для объектов for (let key in obj) {}
// решение 

function count(obj) {
  if (typeof obj !== "object" || obj === null) {
    return 0;
  }
  
  let countObj = 0 ;
  for (let key in obj) {
    if(obj.hasOwnProperty(key)){
      countObj += 1;
    }
  }
  return countObj;
}

const c = [1, 2, 3];
console.log(count(c)); // 3
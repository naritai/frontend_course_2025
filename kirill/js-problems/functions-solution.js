/*
    Базовый набор задач с использованием функций
    Для решения создай файл functions-solution.js в своей папке 
    по пути YOUR_NAME/js-problems/functions-solution.js
**/

// Задача 1
// Напиши функцию square(num), которая возвращает квадрат числа.
// решение

function square(num) {
    if(typeof num === "number") {
        return num * num;
    } else {
        return "Япона мать! Что тяжелого ввести число?";
    }
}

console.log(square(25));

// Задача 2
// Напиши функцию  isEven(n) - должна возвращать true, если число чётное.
// решение

function isEven(n) {
    if (typeof n === "number" && n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4));

// Задача 3
// Напиши функцию min(a, b), которая возвращает наименьшее из двух чисел.
// решение

function min(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Оба аргумента должны быть числами";
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
        return "заданный аргумент не является строкой";
    }

    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    if (str === reversedStr) {
        return `${str} - полиндром`;
    } else {
        return `${str} не является полиндромом`;
    }
}

console.log(isPalindrome("221122"));

// Задача 6
// Напиши функцию random(min, max), которая возвращает случайное число от min до max.
// Подсказка - используй Math.random() и какие-нибудь методы округления (Math.round, Math.floor, Math.ceil)

// Задача 7
// Напиши функцию charCount(str, char), которая возвращает число вхождений символа.

// Задача 8
// Напиши функцию универсального калькулятора calculate(a, b, operator)
// calculate(3, 2, '*'); ---> 6
// calculate(6, 41, '+'); ---> 47
// не забудь обработать деление на 0 (в этом случае выброси ошибку - throw new Error('невозможная операция'))

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
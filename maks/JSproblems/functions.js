/*
    Базовый набор задач с использованием функций
    Для решения создай файл functions-solution.js в своей папке 
    по пути YOUR_NAME/js-problems/functions-solution.js
**/

// Задача 1
// Напиши функцию square(num), которая возвращает квадрат числа
function square(num) {
    return num**2;
};

// Задача 2
// Напиши функцию  isEven(n) - должна возвращать true, если число чётное.
function isEven(n) {
    if (n % 2 === 0) {
        return true;
    } else return false;
};

// Задача 3
// Напиши функцию min(a, b), которая возвращает наименьшее из двух чисел.
function min(a,b) {
    if ( a > b) {
        return b;
    } else {
        return a;
    };
};

// Задача 4
// Напиши функцию inRange(num, min, max), которая проверяет, лежит ли число в диапазоне.
function inRange(num, min, max) {
    if ( num >= min && num <= max) {
        return true;
    };
};

// Задача 5
// Напиши функцию isPalindrome(str), которая возвращает true, если строка читается одинаково в обе стороны.
function isPalindrome(str) {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] === str[str.length - i - 1]) {
            continue;
        } else return false;
    };
    return true;
};

// Задача 6
// Напиши функцию random(min, max), которая возвращает случайное число от min до max.
// Подсказка - используй Math.random() и какие-нибудь методы округления (Math.round, Math.floor, Math.ceil)
function random(min, max) {
    let res = Math.floor(Math.random() * (max - min)) + min;
    return res;
};

// Задача 7
// Напиши функцию charCount(str, char), которая возвращает число вхождений символа.
function charCount(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count += 1;
        };
    };
    return count;
};

// Задача 8
// Напиши функцию универсального калькулятора calculate(a, b, operator)
// calculate(3, 2, '*'); ---> 6
// calculate(6, 41, '+'); ---> 47
// не забудь обработать деление на 0 (в этом случае выброси ошибку - throw new Error('невозможная операция'))
function calculate(a, b, operator) {
    let res = 0;
    switch(operator) {
        case '*':
            res = a * b;
            break;
        case '+':
            res = a + b;
            break;
        case '-':
            res = a - b;
            break;
        case '/':
            if (b) {
                res = a / b;
            } else return false;
    };
    return res;
};

// Задача 9
// Напиши функцию map(fn, array), которая принимает на вход функцию и массив,
// и обрабатывает каждый элемент массива этой функцией, возвращая новый массив.
// Пример:
// function square(x) { return x * x; } // возведение в квадрат
// console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
// console.log(map(square, [])); // []

function map(fn, array) {
    const res = [];
    for (let i = 0; i < array.length; i++) {
        res.push(fn(array[i]));
    };
    return res;
};

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
function properCouneter(obj) {
    let i = 0;
    for (let key in obj) {
        i += 1;
    };
    return i;
};

// подсказка: надо использовать специальный цикл для объектов for (let key in obj) {}

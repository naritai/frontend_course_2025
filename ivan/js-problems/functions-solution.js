/*
    Базовый набор задач с использованием функций
    Для решения создай файл functions-solution.js в своей папке 
    по пути YOUR_NAME/js-problems/functions-solution.js
**/

// Задача 1
// Напиши функцию square(num), которая возвращает квадрат числа.
function square(num) {
    let squaredNumber = num ** 2;
    return squaredNumber;
}
squareNum(3);

// Задача 2
// Напиши функцию  isEven(n) - должна возвращать true, если число чётное.

function isEven(n) {
    let someNumber = n % 2 == 0;
    return someNumber;
}
isEven(4)

// Задача 3
// Напиши функцию min(a, b), которая возвращает наименьшее из двух чисел.

function min(a, b) {
    let isMin = a < b ? a : b;
    return isMin;
}
min(3, 2)

// Задача 4
// Напиши функцию inRange(num, min, max), которая проверяет, лежит ли число в диапазоне.
function inRange(num, min, max) {
    let isRanged = num >= min && num <= max ? true : false;
    return isRanged;
}
inRange(10, 5, 11);

// Задача 5
// Напиши функцию isPalindrome(str), которая возвращает true, если строка читается одинаково в обе стороны.



// Задача 6
// Напиши функцию random(min, max), которая возвращает случайное число от min до max.
// Подсказка - используй Math.random() и какие-нибудь методы округления (Math.round, Math.floor, Math.ceil)
function random(min, max) {
    //я беру рандомное число от 0 - 1 (не включая 1)
    //далее мне надо как-то получить число в диапазоне от 5 - 10
    // я беру "макс значение - мин значение", но тогда получится что я умножу на рандом и значение будет на 1 меньше, поэтому прибавляю 1
    // а далее просто прибавляю min значение, чтобы получился диапазон от min до max
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}
random(5, 10);

// Задача 7
// Напиши функцию charCount(str, char), которая возвращает число вхождений символа.

function charCount(str, char) {

    //решил прикольнуться и сделать расчет с учетом "а" или "А"
    let lowStr = str.toLowerCase(); //привожу str к нижнему регистру
    let lowChar = char.toLowerCase(); // тоже самое делаю с char
    let countChar = 0; // делаю счётчик

    for (let i = 0; i < lowStr.length; i += 1) { //прохожусь по каждому символу
        if (lowStr[i] === lowChar) { //если символ = char - записываю в счётчик
            countChar += 1;
        }
    }
    return countChar;
}

charCount('орео', 'О');

// Задача 8
// Напиши функцию универсального калькулятора calculate(a, b, operator)
// calculate(3, 2, '*'); ---> 6
// calculate(6, 41, '+'); ---> 47
// не забудь обработать деление на 0 (в этом случае выброси ошибку - throw new Error('невозможная операция'))

function calculate(a, b, operator) {
    let plus = '+';
    let minus = '-';
    let multiply = '*';
    let divide = '/';

    let result = 0;

    if (operator === plus) {
        result = a + b;
    } else if (operator === minus) {
        result = a - b;
    } else if (operator === multiply) {
        result = a * b;
    } else if (operator === divide) {
        if ((a === 0 && b === 0) || a === 0) {
            return console.log('невозможная операция');
        } else {
            result = a / b;
        }
    }
    return result;
}

calculate(1, 2, '+')

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

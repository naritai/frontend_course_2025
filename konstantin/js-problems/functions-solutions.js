// Задача 1
// Напиши функцию square(num), которая возвращает квадрат числа.

function square(num) {
    return num * num;
}




// Задача 2
// Напиши функцию  isEven(n) - должна возвращать true, если число чётное.

function isEven(n) {
    if (n % 2 === 0) {
        return true;
    } else {
        return false; 
    }
}




// Задача 3
// Напиши функцию min(a, b), которая возвращает наименьшее из двух чисел.

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}




// Задача 4
// Напиши функцию inRange(num, min, max), которая проверяет, лежит ли число в диапазоне.

function inRange(num, min, max) {
    if (num >= min && num <= max) {
        console.log(num, 'is IN this range');
    } else {
        console.log(num, 'is NOT in range');
    }
}




// Задача 5
// Напиши функцию isPalindrome(str), которая возвращает true, если строка читается одинаково в обе стороны.

function isPalindrome(str) {
    let str1 = str.split('').reverse().join('');
    if (str === str1) {
        return true;
    } else {
        return false;
    }
}




// Задача 6
// Напиши функцию random(min, max), которая возвращает случайное число от min до max.
// Подсказка - используй Math.random() и какие-нибудь методы округления (Math.round, Math.floor, Math.ceil)

function random(min, max) {
    return Math.round(Math.random());
}



// Задача 7
// Напиши функцию charCount(str, char), которая возвращает число вхождений символа.


function charCount(str, char) {
    let valueNumber = 0;
    for (let i = 0; i < str.length; i++) {
        const value = str[i];

        if (value === char) {
            valueNumber += 1;
        }
    }

    return valueNumber; 
}




// Задача 8
// Напиши функцию универсального калькулятора calculate(a, b, operator)
// calculate(3, 2, '*'); ---> 6
// calculate(6, 41, '+'); ---> 47
// не забудь обработать деление на 0 (в этом случае выброси ошибку - throw new Error('невозможная операция'))


function calculate(a, b, operator) {
    if (operator === '+') {
        return a + b;
    }
    
    else if (operator === '-') {
        return a - b;
    }

    else if (operator === '*') {
        return a * b;
    }

    else if (operator === '/') {
        if (b === 0) {
            return 'Error: Impossible Operation';
        } else {
            return a / b;
        }
    }

    else if (operator === '**') {
        return a ** b;
    }

    else if (operator === '%') {
        return ((a % b) + b) % b;
    }
}




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

function map(fn, array) {
    array.forEach(fn => {
        return newArray = array.map();
    });
}   // одно из неправильных решений

// правильное решение:

function map(fn, array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        result.push(fn(arrayElement));
    }
    return result;
}




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

function count(obj) {
    const keyLength = [];
    for (let key in obj) {
        keyLength.push(obj[key]);
    }
    return keyLength.length
}
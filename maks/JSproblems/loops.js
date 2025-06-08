/*
    Базовый набор задач на использование циклов
    Для решения создай файл loops-solution.js в своей папке 
    по пути YOUR_NAME/js-problems/loops-solution.js
**/

// Задача 1
// Используя цикл for, выведи в консоль числа от 1 до 10 включительно.
// Используя while, выведи числа от 1 до 5.

for (let i = 1; i <= 10; i++) {
  console.log(i);
};
let i = 1
while (i < 6) {
  console.log(i);
  i++
};

// Задача 2
// Используя цикл for, выведи только чётные числа от 2 до 20.
// Используя цикл while, выведи только чётные числа от 2 до 20.

for (let i = 2; i < 21; i = i+2) {
  console.log(i);
};

let i = 2;
while (i <= 20) {
  if (i % 2 === 0) {
    console.log(i);
  };
  i++;
};

// Задача 3
// Используя цикл for, найди сумму чисел от 1 до 100.
// Используя цикл while, найди сумму чисел от 1 до 100.

let sum;
for (let i = 0; i <= 100; i++) {
  sum += i;
};
console.log(sum);
let sum1 = 0;
let i = 1;
while (i <= 100) {
  sum += i;
  i++;
};

// Задача 4
// Для строки "hello" выведи каждый символ отдельно.
let word = "hello";
for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
};

// Задача 5
// Выведи элементы массива по одному
const arr = [1, 2, 3, 4, 5, "a", "b", "c", true, false, null];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Задача 6
// Выведи "Hello" минимум один раз, даже если условие false.
// Подсказка - используй do while цикл https://learn.javascript.ru/while-for#tsikl-dowhile
let i = false;
do {
  console.log("Hello");
} while (i);

// Задача 7
// Выведи числа от N до 1, где N — число от пользователя.
// Доп задание - напиши функцию, которая будет принимать параметр N от пользователя
// и будет выводить числа от N до 1

let N = prompt("Введите число", 1);
for (let i = N; i >= 1; i--) {
  alert(i);
}

// Задача 8
// Вычисли факториал числа n (например, 5! = 120).
// факториал числа 5, например, это - 1 * 2 * 3 * 4 * 5

let sum = 1;
let n = prompt('', 1);
for (let i = 1; i <= n; i++) {
  sum *= i;
}
console.log(sum);

// Задача 9
// Из строки "javascript" выведи только гласные.
let vowels = "aieuo";
let word = "javascript";
for (let i = 0; i < word.length; i++) {
  if (vowels.includes(word[i])) {
    console.log(word[i]);
  };
};


// Задача 10
// Найди сумму всех чётных чисел от 1 до 100.
let sum = 0;
for (let i = 0; i <= 100; i = i + 2) {
  sum += i;
}
console.log(sum);

// Задача 11
// Выведи все элементы двумерного массива.
// Подсказка - вложенные циклы
const matrix = [
  [1, 2],
  [3, 4],
];

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j ++) {
    console.log(matrix[i][j]);
  }
}
// Задача 12
// Найди наибольшее число в массиве numbers.
const numbers = [5, 3, 9, 1, 12, 30, 4, 6, 8, 3];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    };
};
console.log(max);

// Задача 13
// Выведи числа от 1 до 10, кроме 5.
for (let i = 0; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i);
};

// Задача 14
// Подсчитай, сколько раз символ "а" встречается в строке.
const str = "banana it is the almost beautiful fruit! ahaha!";
let sum = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === 'a') sum += 1;
};
console.log(sum);

// Задача 15
// Переверни строку "hello" в "olleh".
let word = 'hello';
let clone = '';
for (let i = word.length - 1; i >= 0; i--) {
  clone += word[i];
}
console.log(clone);

// Задача 16
// Подсказка - у строк есть метод .repeat(CHAR) где CHAR твой символ в виде строки
// Выведи пирамидку из 5 строк:
// *
// **
// ***
// ****
// *****

for (let i = 1; i <= 5; i++) {
  console.log('*'.repeat(i));
};

// Задача 17
// Выведи только уникальные значения из массива doubles.
const doubles = [1, 2, 2, 3, 3, 4];
let buff = [];
for (let i = 0; i < doubles.length; i++) {
  if (buff.includes(doubles[i])) {
    continue;
  } else buff.push(doubles[i]);
}
console.log(buff);

// Задача 18
// Найди второе максимальное число в массиве maxSecond.
// const maxSecond = [10, 20, 30, 40];
let arr = [10, 20, 30, 40];

function findMax(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

const firstMax = findMax(arr);
console.log('Первый максимум:', firstMax);

const index = arr.indexOf(firstMax);
if (index > -1) {
  arr.splice(index, 1);
}

const secondMax = findMax(arr);
console.log('Второй максимум:', secondMax);

// Задача 19
// Найди все дубликаты в массиве test и собери их в новый массив doubles2
const test = [1, 2, 2, 3, 4, 4];
const doubles2 = [];

for (let i = 0; i < test.length; i++) {
  if (test.indexOf(test[i], i + 1) > -1 && doubles2.indexOf(test[i]) === -1) {
    doubles2.push(test[i]);
  };
};
console.log(doubles2);

// Задача 20
// Выведи общие элементы двух массивов.
let a1 = [1, 2, 3];
let a2 = [2, 3, 4];
for (let i = 0; i < a1.length; i++) {
  for (let j = 0; j < a2.length; j++) {
    if (a1[i] === a2[j]) console.log(a1[i]);
  };
};

// Задача 21
// Определи, является ли число N простым.
// Вспомни, что такое простое число и подумай
// Напиши функцию для этого

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      console.log(`${n} - не простое число`);
      return false;
    }
  }

  console.log(`${n} - простое число`);
  return true;
};

isPrime(7); // ?
isPrime(31); // ?
isPrime(54); // ?
isPrime(33); // ?
isPrime(83); // ?

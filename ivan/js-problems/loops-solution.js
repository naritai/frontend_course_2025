/*
    Базовый набор задач на использование циклов
    Для решения создай файл loops-solution.js в своей папке 
    по пути YOUR_NAME/js-problems/loops-solution.js
**/

// Задача 1
// Используя цикл for, выведи в консоль числа от 1 до 10 включительно.
let i = 1;
for (i; i <= 10; i += 1) {
  console.log(i);
}
// Используя while, выведи числа от 1 до 5.
while(i < 10) {
  i += 1;
  console.log(i);
}

// Задача 2
// Используя цикл for, выведи только чётные числа от 2 до 20.
for (task2; task2 <= 20; task += 2) {
  console.log(task2);
}

let task2 = 2;
for (task2; task2 <= 20; task2 += 1) {
  if (task2 % 2 == 1) continue;
  console.log(task2);
}


// Используя цикл while, выведи только чётные числа от 2 до 20.
while (task2 < 20) {
  task2 += 2;
  console.log(task2);
}

while (task2 < 20) {
  task2 += 1;
  if(task2 % 2 == 1) continue;
  console.log(task2);
}

// Задача 3
// Используя цикл for, найди сумму чисел от 1 до 100.
function task3For(){
  let task3 = 1;
  count3 = 0;

  for (task3; task3 < 100; task3 += 1) {
    count3 = task3 + count3;
  }
  return count;
}
task3For();
// Используя цикл while, найди сумму чисел от 1 до 100.
function task3While() {
  let i = 1;
  let sum = 0;
  while(i <= 100) {
    sum += i;
    i += 1;
  }
  return sum;
}

task3While()

// Задача 4
// Для строки "hello" выведи каждый символ отдельно.

let word = "hello"
for (let j = 0; j < word.length; j += 1) {
  console.log(word[j]);
}

// Задача 5
// Выведи элементы массива по одному
const arr = [1, 2, 3, 4, 5, "a", "b", "c", true, false, null];
let count5 = 0

for(count5; count5 < arr.length; count5 += 1) {
  console.log(arr[count5]);
}

// Задача 6
// Выведи "Hello" минимум один раз, даже если условие false.
// Подсказка - используй do while цикл https://learn.javascript.ru/while-for#tsikl-dowhile

// Задача 7
// Выведи числа от N до 1, где N — число от пользователя.
let questionNumber = prompt('Введи число', '');
console.log(questionNumber);
// Доп задание - напиши функцию, которая будет принимать параметр N от пользователя
// и будет выводить числа от N до 1

// Задача 8
// Вычисли факториал числа n (например, 5! = 120).
// факториал числа 5, например, это - 1 * 2 * 3 * 4 * 5

function factorial(number) {
  let result = 1
  for(let i = 1; i <= number; i += 1){
    result = result * i;
  }
  return result;
}
factorial(5);

// Задача 9
// Из строки "javascript" выведи только гласные.
let strJS = 'javascript';
console.log(strJS[1], strJS[3], strJS[7]);

// Задача 10
// Найди сумму всех чётных чисел от 1 до 100.
let sum = 0;
for(let k = 0; k <= 100; k += 1){
  sum = sum + k;
}

// Задача 11
// Выведи все элементы двумерного массива.
// Подсказка - вложенные циклы
const matrix = [
  [1, 2],
  [3, 4],
];

// Задача 12
// Найди наибольшее число в массиве numbers.
const numbers = [5, 3, 9, 1, 12, 30, 4, 6, 8, 3];
const maxNumber = Math.max(...numbers);
console.log(maxNumber);


// Задача 13
// Выведи числа от 1 до 10, кроме 5.

for(let i = 1; i <= 10; i += 1) {
  if(i == 5) {
    continue;
  }
  console.log(i);
}

// Задача 14
// Подсчитай, сколько раз символ "а" встречается в строке.
const str = "banana it is the almost beautiful fruit! ahaha!";
let char = 'a';
let countA = 0;
for (let i = 0; i < str.length; i += 1){
  if(str[i] == char){
    countA += 1;
  }
}
console.log(countA);

// Задача 15
// Переверни строку "hello" в "olleh".

let nWord = 'hello';
let splitWord = nWord.split('');
splitWord.reverse();
let newSplitedWord = splitWord.join('');
console.log(newSplitedWord);



// Задача 16
// Подсказка - у строк есть метод .repeat(CHAR) где CHAR твой символ в виде строки
// Выведи пирамидку из 5 строк:
// *
// **
// ***
// ****
// *****

let strStar = '*';
for(i = 1; i <= 5; i += 1) {

  let repeatedStar = strStar.repeat(i);
  console.log(repeatedStar);

}
// Задача 17
// Выведи только уникальные значения из массива doubles.
const doubles = [1, 2, 2, 3, 3, 4];
console.log(doubles[0], doubles[5]);

// Задача 18
// Найди второе максимальное число в массиве maxSecond.
// const maxSecond = [10, 20, 30, 40];

// Задача 19
// Найди все дубликаты в массиве test и собери их в новый массив doubles2
const test = [1, 2, 2, 3, 4, 4];

// Задача 20
// Выведи общие элементы двух массивов.
// let a1 = [1, 2, 3];
// let a2 = [2, 3, 4];

// Задача 21
// Определи, является ли число N простым.
// Вспомни, что такое простое число и подумай
// Напиши функцию для этого

function isPrime(n) {
  // твое решение тут
  // используй цикл
}

isPrime(7); // ?
isPrime(31); // ?
isPrime(54); // ?
isPrime(33); // ?
isPrime(83); // ?

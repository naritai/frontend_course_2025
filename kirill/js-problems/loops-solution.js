/*
    Базовый набор задач на использование циклов
    Для решения создай файл loops-solution.js в своей папке 
    по пути YOUR_NAME/js-problems/loops-solution.js
**/

// Задача 1
// Используя цикл for, выведи в консоль числа от 1 до 10 включительно.
// Используя while, выведи числа от 1 до 5.
//решение

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let count = 1; // Инициализируем счетчик

while (count <= 5) { // Пока счетчик меньше или равен 5
  console.log(count); // Выводим текущее значение
  count++; // Увеличиваем счетчик на 1
}



// Задача 2
// Используя цикл for, выведи только чётные числа от 2 до 20.
// Используя цикл while, выведи только чётные числа от 2 до 20.
//решение

for (let i = 2; i <=20; i++){
    if(i % 2 == 0){
        console.log(i);
    } 
}

let number = 2;
while (number <= 20) {
  if (number % 2 === 0) {
    console.log(number);
  }
  number++;
}



// Задача 3
// Используя цикл for, найди сумму чисел от 1 до 100.
// Используя цикл while, найди сумму чисел от 1 до 100.
//решение

let sumNumbers = 0;

for (let i = 1; i <=100; i++) {
    sumNumbers += 1;
}

console.log(sumNumbers);


let sumNumbers2 = 0;
let number2 = 1;
while (number2 <= 100) {
  sumNumbers2 += number2;
  number2++;
}

console.log(sumNumbers2);



// Задача 4
// Для строки "hello" выведи каждый символ отдельно.
//решение

const string = "hello";
for (let i = 0; i < string.length; i++) {
  console.log(string[i]);
}

// Задача 5
// Выведи элементы массива по одному
const arr = [1, 2, 3, 4, 5, "a", "b", "c", true, false, null];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Задача 6
// Выведи "Hello" минимум один раз, даже если условие false.
// Подсказка - используй do while цикл https://learn.javascript.ru/while-for#tsikl-dowhile
//решение

let condition = false; // Условие, которое изначально ложно

do {
  console.log("Hello");
} while (condition);


// Задача 7
// Выведи числа от N до 1, где N — число от пользователя.
// Доп задание - напиши функцию, которая будет принимать параметр N от пользователя
// и будет выводить числа от N до 1
//решение

function printNumbersDown(n) {
  
  while (n >= 1) {
    console.log(n);
    n--;
  }
}


let N = +prompt("Введите число N:");

if (!isNaN(N)) {
  printNumbersDown(N);
} else {
  console.log("Пожалуйста, введите число.");
}

// Задача 8
// Вычисли факториал числа n (например, 5! = 120).
// факториал числа 5, например, это - 1 * 2 * 3 * 4 * 5
//пометка Факториал — это математическое понятие, которое обозначает произведение всех натуральных чисел от 1 до заданного числа. 

// Определение
// Факториал числа n обозначается как n! (произносится «эн факториал»). 

// Свойства
// Факториал нуля равен единице — 0! = 1. 

// Факториал единицы тоже равен единице — 1! = 1. 

// Факториал определён только для целых неотрицательных чисел — нельзя вычислить факториал отрицательного или дробного
// решение

function factorial (n){
    if (n < 0) {
        return "Псс... Парень, у отрицательного числа нельзя вычислить факториал!";
    } else if (n === 0) {
        return 1; 
    } else {
        let result = 1;
        for(let i = 1; i <= n; i++){
            result *= i;
        }  
        return result;
    }
}


let number3 = +prompt("И шо? Какое число?");

if(!isNaN(number3)) {
    const result = factorial(number3);
    console.log(`Факториал ${number3} инфа сотка = ${result}`);
} else {
    console.log("Ты шо? Не можешь ввести число??");
}



// Задача 9
// Из строки "javascript" выведи только гласные.
// решение

  const string2 = "javascript";
  const vovels = "aeiou";

  for (let i = 0; i < string2.length; i++) {
      const char = string2[i];
      if (vovels.includes(char)) {
        console.log(char);
      }
  }

// Задача 10
// Найди сумму всех чётных чисел от 1 до 100.
// решение 

  let sumEvenNumbers = 0;

  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0){
        sumEvenNumbers +=i;
    }
  }

  console.log(sumEvenNumbers);

// Задача 11
// Выведи все элементы двумерного массива.
// Подсказка - вложенные циклы
const matrix = [
  [1, 2],
  [3, 4],
];
//решение

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log (matrix[i][j]);
  }
}

// Задача 12
// Найди наибольшее число в массиве numbers.
const numbers = [5, 3, 9, 1, 12, 30, 4, 6, 8, 3];
let maxNumbers = numbers[0];

 for (let i = 0; i < numbers.length; i++){
  if(numbers[i] > maxNumbers){
    maxNumbers = numbers[i]
  }
 }

 console.log(maxNumbers);

// Задача 13
// Выведи числа от 1 до 10, кроме 5.
// решение

for (let i = 1; i <=10; i++) {
  if (i === 5){
    continue;
  }
  console.log(i);
}

// Задача 14
// Подсчитай, сколько раз символ "а" встречается в строке.
const str = "banana it is the almost beautiful fruit! ahaha!";
let countA = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "a") {
    countA += 1;
  }
}

console.log(countA);

// Задача 15
// Переверни строку "hello" в "olleh".
// решение 

const string3 = "hello";
const gnirts = ""

for (let i = string3.length -1; i >= 0; i--) {
  gnirts += string3[i];
  
}

console.log(gnirts);

// Задача 16
// Подсказка - у строк есть метод .repeat(CHAR) где CHAR твой символ в виде строки
// Выведи пирамидку из 5 строк:
// *
// **
// ***
// ****
// *****
// решение


for (let i = 1; i <=5; i++) {
  console.log("*".repeat(i));
}


// Задача 17
// Выведи только уникальные значения из массива doubles.
const doubles = [1, 2, 2, 3, 3, 4];
const set_doubles = [];

for (let i = 0; i < doubles.length; i++) {
  if(!set_doubles.includes(doubles[i])){
    set_doubles.push(doubles[i]);
  }
}

console.log(set_doubles);


// Задача 18
// Найди второе максимальное число в массиве maxSecond.
const maxSecond = [10, 20, 30, 40];
// решение


function second_max(arr) {

  let max_1 = maxSecond[0];
  let index_max_1 = 0;
  let max_2 = maxSecond[0];

  for (let i = 1; i < maxSecond.length; i++) {
    if(maxSecond[i] > max_1) {
      max_1 = maxSecond[i];
      index_max_1 = i;
    }
  }

  maxSecond.splice(index_max_1, 1);


  for (let j = 1; j < arr.length; j++) {
    if(arr[j] > max_2) {
      max_2 = arr[j];
    }
  }

return max_2;
}

const secondMax = second_max(maxSecond);
console.log(secondMax);


// Задача 19
// Найди все дубликаты в массиве test и собери их в новый массив doubles2
const test = [1, 2, 2, 3, 4, 4];
// решение

function tvoe_duplo(arr) {
  const duplo = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplo.includes(arr[i])) {
        duplo.push(arr[i]);
      }
    }
  }

  return duplo;
}

const doubles2 = tvoe_duplo(test);
console.log(doubles2);


// Задача 20
// Выведи общие элементы двух массивов.
let a1 = [1, 2, 3];
let a2 = [2, 3, 4];
// решение

function common_elements (arr1, arr2) {
  const set_arr1_arr2 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !set_arr1_arr2.includes(arr1[i])) {
      set_arr1_arr2.push(arr1[i]);
    }
  }
  return set_arr1_arr2;
}

const set_a1_a2 = common_elements(a1, a2);
console.log(set_a1_a2);


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

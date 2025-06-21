// Задача 1
// Используя цикл for, выведи в консоль числа от 1 до 10 включительно.
// Используя while, выведи числа от 1 до 5.

let i = 1

for (i = 1; i < 11; i++) {
    alert(i);
}


while (i < 6) {
    alert(i);
    i++;
}




// Задача 2
// Используя цикл for, выведи только чётные числа от 2 до 20.
// Используя цикл while, выведи только чётные числа от 2 до 20.

let i = 2;

for (i; i < 20; i++) {
    if (i % 2 !== 0) {
        continue;
    } alert(i);
}

while (i < 20) {
    alert(i);
    i++;
    if (i % 2 !== 0) {
        continue;
    }
}




// Задача 3
// Используя цикл for, найди сумму чисел от 1 до 100.
// Используя цикл while, найди сумму чисел от 1 до 100.

let sum = 0;
for (let i = 1; i < 100; i++) {
    sum += i;
    alert(sum);
}




// Задача 4
// Для строки "hello" выведи каждый символ отдельно.

let str = 'hello';
for (let i = 0; i < str.length; i++) {
    alert(str[i]);




// Задача 5
// Выведи элементы массива по одному
const arr = [1, 2, 3, 4, 5, "a", "b", "c", true, false, null];

for (let i = 0; i < arr.length; i++) {
    alert(arr[i]);
}




// Задача 6
// Выведи "Hello" минимум один раз, даже если условие false.
// Подсказка - используй do while цикл https://learn.javascript.ru/while-for#tsikl-dowhile

let str2 = 'Hello';
do {
    alert(str);
} while (false);




// Задача 7
// Выведи числа от N до 1, где N — число от пользователя.
// Доп задание - напиши функцию, которая будет принимать параметр N от пользователя
// и будет выводить числа от N до 1

const N = prompt('Enter your number:','');
for (let i = N; i < 1; i++) {
    alert(N);
}


function showNumber(N) {
    for (let i = N; i < 1; i++) {
    alert(i);
    }  
}




// Задача 8
// Вычисли факториал числа n (например, 5! = 120).
// факториал числа 5, например, это - 1 * 2 * 3 * 4 * 5

let n = 1;

for (let i = n; i < n; i++) {
    n = n * (n-1);
}






// Задача 9
// Из строки "javascript" выведи только гласные.

let str3 = 'javascript';
let vowels = 'aeiouy';
let result = '';

for (let i = 0; i < str3.length; i++) {
    let char = str3[i];
    if (vowels.includes(char)) {
        result += char;
    }
}

alert(result);




// Задача 10
// Найди сумму всех чётных чисел от 1 до 100.

let sum = 0;

for (let i = 1; i < 100; i++) {
    if (i % 2 === 0) {
        sum = sum + i;
    } else {
        continue;
    }
}

alert(sum) // incorrect

// correct version: 

let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum = sum + i;
    } else {
        continue;
    }
}




// Задача 11
// Выведи все элементы двумерного массива.
// Подсказка - вложенные циклы
const matrix = [
  [1, 2],
  [3, 4],
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}




// Задача 12
// Найди наибольшее число в массиве numbers.
const numbers = [5, 3, 9, 1, 12, 30, 4, 6, 8, 3];

let maxNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}

console.log(maxNumber);




// Задача 13
// Выведи числа от 1 до 10, кроме 5.

for (let i = 1; i < 11; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}




// Задача 14
// Подсчитай, сколько раз символ "а" встречается в строке.
const str = "banana it is the almost beautiful fruit! ahaha!";

let countA = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
        countA += 1;
    }
}

console.log(countA);




// Задача 15
// Переверни строку "hello" в "olleh".

let str = 'olleh';
let reversedStr = '';
for (let i = str.length -1; i >= 0; i--) {
    reversedStr += str[i]
}

console.log(reversedStr);




// Задача 16
// Подсказка - у строк есть метод .repeat(CHAR) где CHAR твой символ в виде строки
// Выведи пирамидку из 5 строк:
// *
// **
// ***
// ****
// *****

let char = '*';
for (let i = 1; i < 6; i++) {
    console.log(char.repeat(i));
}




// Задача 17
// Выведи только уникальные значения из массива doubles.
const doubles = [1, 2, 2, 3, 3, 4];
const uniqueValue = [];
for (let i = 0; i < doubles.length; i++) {
    const value = doubles[i];
    if (!uniqueValue.includes(value)) {
        uniqueValue.push(value);
    }
}

console.log(uniqueValue);




// Задача 18
// Найди второе максимальное число в массиве maxSecond.

const maxSecond = [10, 20, 30, 40];
let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < maxSecond.length; i++) {
  const num = maxSecond[i];

  if (num > max) {
    secondMax = max;
    max = num;
  } else if (num > secondMax && num !== max) {
    secondMax = num;
  }
}
console.log(secondMax);     // сам полностью решить не смог. попросил объяснения у chatgpt. не понял -Infinity, но без него никак,
                            // если я правильно понимаю. по крайней мере если через цикл решать




// Задача 19
// Найди все дубликаты в массиве test и собери их в новый массив doubles2
const test = [1, 2, 2, 3, 4, 4];
const doubles2 = [];

for (let i = 0; i < test.length; i++) {
    const num = test[i];
    doubles2.push(num);

    if (doubles2.includes(num)) {
        continue;
    }
}

console.log(doubles2); // wrong solution 

const doubles2 = [1, 2, 2, 3, 4, 4].filter((e, i, a) => a.indexOf(e) != i); // один из верных вариантов




// Задача 20
// Выведи общие элементы двух массивов.
let a1 = [1, 2, 3];
let a2 = [2, 3, 4];

for (let i = 0; i < a1.length; i++) {
    const num1 = a1[i];
    for (let j = 0; j < a2.length; j++) {
        const num2 = a2[j];
        if (num1 === num2) {
            console.log(num1);
        }
    }
}




// Задача 21
// Определи, является ли число N простым.
// Вспомни, что такое простое число и подумай
// Напиши функцию для этого

isPrime(7); // ?
isPrime(31); // ?
isPrime(54); // ?
isPrime(33); // ?
isPrime(83); // ?

function isPrime(n) {
    if (n % 2 !== 0 && n / n === 1 && n / 1 === n) {
        console.log(n,'is prime');
    } else {
        console.log(n,'is not prime');
    }
}   // сам не додумался, как решить через цикл


function isPrime(n) {
  if (n < 2) {
      console.log(n,'is not prime');
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log(n,'is not prime');
    }
  }
  console.log(n,'is prime');
}
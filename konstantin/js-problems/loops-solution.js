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

for (let str3; )

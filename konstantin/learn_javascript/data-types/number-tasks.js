// Сумма пользовательских чисел
// важность: 5
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

// Запустить демо

// P.S. Есть «подводный камень» при работе с типами.

let a = +prompt('Number 1:');
let b = +prompt('Number 2:');
let sum = a + b;
alert(sum);




// Почему 6.35.toFixed(1) == 6.3?
// важность: 4
// Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.

// Например:

// alert( 1.35.toFixed(1) ); // 1.4
// Но почему в примере ниже 6.35 округляется до 6.3?
По причине потери точности, которая в данном случае уменьшает число.

// alert( 6.35.toFixed(1) ); // 6.3
// Как правильно округлить 6.35? 
console.log(Math.round(6.35 * 10) / 10)




// Ввод числового значения
// важность: 5
// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

// Функция должна возвращать числовое значение.

// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

переменная для ввода промпт. 
цикл while: условие - пока false. if true - return введенное в промпт. if промпт = null\undefined - return null

function readNumber() {
   do {
    let enter = prompt('Enter number:')
   } while (!enter)
        if (+enter) {
        return enter;
    }
        else if (enter === null && enter === undefined) {
            return null;
    }
}   // неправильно

function readNumber() {
    let enter = prompt('Enter number:');
    while (typeof(enter) === String) {
        prompt('Enter number:');
    }
        if (typeof(enter) === Number) {
            return +enter;
        }

        else if (enter === null && enter === undefined) {
            return null;
        }
}   // неправильно

function readNumber() {
    let enter;
   do {
    enter = prompt('Enter number:');
   } while (!isFinite(enter));

    if (enter === null  || enter === '') {
        return null;
    }

    return +enter;
}

alert('Number is: ' + readNumber()) // правильно




// Бесконечный цикл по ошибке
// важность: 4
// Этот цикл – бесконечный. Он никогда не завершится, почему?

// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }
Т.к. условия, что i = 0 и i != 10 === if(true)  // неправильно

Потому, что учитывая погрешности - i не будет равно 10.
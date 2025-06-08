// 2 задание
'use strict';

let name = prompt('Какое «официальное» название JavaScript?', '');

if (name == 'ECMAScript') {
    alert('Верно');
} else {
    alert('Неверно');
}

// 3 задание

'use strict';
let numb = Number(prompt('Введите число',''));
    if (numb > 0) { 
         alert('1');
} else if (numb < 0) {
    alert('-1');
} else {
    alert('0');
}

// 4 задание

let result;
result = a + b < 4 ? 'Мало' : 'Много';
alert(result);

// 5 задание

let message;
message = login === 'Сотрудник' ? 'Привет' : 
login == 'Директор' ?  'Здравствуйте' : 
login == '' ? 'Нет логина' : '';
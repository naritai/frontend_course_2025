// 7 задание
'use strict';
let age = prompt('Введите возраст','');
let rightAge = false;
if ((age >= 14) && (age <= 90)) {
rightAge = true;
}
alert(rightAge);

// 8 задание
'use strict';
let login = prompt('Кто там','');
if (login === 'Админ') {
    let pass = prompt('Пароль?','');
    if (pass === 'Я главный') {
        alert('Здравствуйте!');
    } else if (pass === '' || pass === null) {
        alert('Отменено');
    }
        else  {
        alert('Неверный пароль');
    }
} else if (login === '' || login === null) {
        alert('Отменено');
} else {
    alert('Я вас не знаю');
}

// 9 задание
'use strict';
let num1 = 10,
    num2 = 20,
    result;
result ??= num1 ?? num2;
alert(result);


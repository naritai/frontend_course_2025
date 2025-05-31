/*
    Базовый набор задач на использование логических операторов: &&, ||, !
    Для решения создай файл logical-op-solution.js в своей папке 
    по пути YOUR_NAME/js-problems/logical-op-solution.js
**/

// Задача 1
// Если возраст больше или равен 18, выведи "Доступ разрешен", иначе — "Доступ запрещен".
const age = 20;

if ( age >= 18 ) {
  console.log("Доступ разрешен")
} else console.log("Доступ запрещен");

// Задача 2
// Если логин равен "admin" и пароль "1234", выведи "Добро пожаловать".
const login = "admin";
const password = "1234";

if ( login === "admin" && password === "1234") {
  console.log("Добро пожаловать")
};

// Задача 3
// Если число от 10 до 50 включительно, выведи "OK".
const num = 35;

if ( num >= 10 && num <= 50) {
  console.log("OK")
};

// Задача 4
// Если today равно "суббота" или "воскресенье", выведи "Выходной".
const today = "воскресенье";

if ( today === "воскресенье" && today === "суббота") {
  console.log("Выходной")
};

// Задача 5
// Если имя не пустое И email содержит "@", выведи "Данные корректны".
const name = "Иван";
const email = "ivan@example.com";

if (name !== undifined && email.includes("@")) {
  console.log("Данные корректны")
};

// Задача 6
// Если первое число больше второго и меньше третьего, выведи "В диапазоне".
const a = 5,
  b = 3,
  c = 10;

if ( a > 2 && a < 3) {
  console.log("В диапазоне")
};

// Задача 7
// Если погода хорошая ИЛИ сегодня выходной, и у тебя есть свободное время — выведи "Можно идти гулять".
const isGoodWeather = true;
const isWeekend = false;
const hasFreeTime = true;

if ((isGoodWeather === true || isWeekend === true) && hasFreeTime === true) {
  console.log("Можно идти гулять")
};

// Задача 8
// Если имя входит в список допущенных, выведи "Вход разрешен".
// Подсказка: используй метод массива .includes()
const allowedUsers = ["Иван", "Мария", "Олег"];
const user = "Мария";

if (user in allowedUsers) {
  console.log("Вход разрешен")
};

// Задача 9
// Если переменная truthy — выведи "Истинное значение".
const val = "0";

if (!val == true) {
  console.log("Истинное значение")
};

// Задача 10
// Выведи "Премиум", если user1.isPremium true, иначе — "Обычный".
const user1 = { isPremium: false };

if (user1.isPremium === true) {
  console.log("Премиум")
} else console.log('Обычный');

// Задача 11
// Если переменная x равна true, установить y = 100.
let x = true;
let y = 0;

if (x === true) {
  y = 100
};

// Задача 12
// Если пользователь не забанен, подписан и либо активен, либо оплатил подписку — выведи "Доступ разрешен".
const isBanned = false;
const isSubscribed = true;
const isActive = false;
const hasPaid = true;

if (isBanned  && isSubscribed === true && (isActive === true || hasPaid === true)) {
  console.log("Доступ разрешен")
};

// Задача 13
// Если сегодня будний день, и погода плохая, и ты не заболел — выведи "Идём на работу".
const isWeekday = true;
const badWeather = true;
const isSick = false;

if (isWeekday === true && badWeather === true && isSick ) {
  console.log("Идём на работу")
};

// Задача 14
// Студент допускается к экзамену, если у него:
// - больше 75% посещаемости ИЛИ
// - оценка по контрольной >= 80 И при этом хотя бы 60% посещаемости
const attendance = 0.65; // доля
const testScore = 85;

if (attendance > 0.75 || (testScore >= 80 && attendance >= 0.6)) {
  console.log("Допущен")
} else console.log("Не допущен");

// Задача 15
// Ученик получает награду, если:
// - у него оценка выше 90
// - он не опоздал более 3 раз
// - он был активен на всех занятиях
const grade = 95;
const lateDays = 2;
const activeInClass = true;

if (grade > 90 && lateDays <= 3 && activeInClass === true) {
  console.log("Достоен награды")
} else console.log("Безделье — мать пороков, жи ec");

// Задача 16
// Для получения скидки клиент должен быть:
// - зарегистрирован более года
// - и (потратил более 1000 или является VIP)

const isVip = false;
const yearsRegistered = 2;
const totalSpent = 1200;

if (yearsRegistered > 1 && (totalSpent > 1000 || isVip === true)) {
  console.log('Скидку ему')
} else console.log('Ты не достоин скидки');

// Задача 17
// Если задана дата, и она не null, и не пустая строка — выведи её.
const date = "2024-12-01";

function isDate(date) {
  let year = +date.slice(0,4);
  let month = +date.slice(5,7);
  let day = +date.slice(8);
  if (!year && !month && !day) {
    return date
  } else return "Неправильно"
}
console.log(isDate(date))

// Задача 18
// Подсказка - для проверки в строке любого символа используй метод строк
// (string.includes(CHAR) где CHAR - искомый символ в виде строки
// Пользователь считается зарегистрированным, если у него есть:
// - имя
// - email с "@"
// - пароль длиной не менее 6 символов
const name2 = "Катя";
const email2 = "katya@mail.ru";
const password2 = "123456";

if (!name2 && email2.includes("@") && password2.length >= 6) {
  console.log('Добро пожаловать!')
};

// Задача 18
// Если заказ:
// - не отменён
// - оплачен
// - либо отправлен, либо в процессе сборки

const isCanceled = false;
const isPaid = true;
const status = "assembling"; // "shipped", "assembling"

if (isCanceled  && isPaid === true && (status === "assembling" || status === "shipped")) {
  console.log("Ваш заказ в работе")
} else console.log("Заказ отменен или не существует");

// Задача 19
// Игра завершается, если:
// - игрок умер ИЛИ
// - у него закончилось время И
// - не включён режим "бессмертие"
const isDead = false;
const timeLeft = 0;
const isGodMode = false;

if (isDead === true || (timeLeft === 0 && isGodMode )) {
  console.log("GAME OVER LOOSER")
} else console.log("GOOD LUCK");

// Задача 20
// Если пользователь:
// - работает удалённо
// - и/или из другой страны
// - и не под VPN — выведи предупреждение безопасности
const isRemote = true;
const isForeign = false;
const usesVPN = false;

if ((isRemote === true || isForeign === true) && usesVPN ) {
  console.log('ПЕРДУПРЕЖДЕНИЕ!')
};

// Задача 21
// Если хотя бы одно из полей name, email, или phone не заполнено — выведи "Заполните все поля".

let name3 = "Оля";
let email3 = "";
let phone3 = "89991234567";
function fillFields(name, email, phone) {
  if (!name ) name3 = prompt('Введите имя') || name3;
  if (!email ) email3 = prompt('Введите email') || email3;
  if (!phone ) phone3 = prompt('Введите телефон') || phone3;
};
for (let i = 0; i < 2; i++) {
  if (!name3  || !email3  || !phone3 ) {
    console.log('Заполните все поля');
    fillFields(name3, email3, phone3);
  } else {
    console.log("Всё верно!");
    break;
 };
};
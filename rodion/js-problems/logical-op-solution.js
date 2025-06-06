/*
    Базовый набор задач на использование логических операторов: &&, ||, !
    Для решения создай файл logical-op-solution.js в своей папке 
    по пути YOUR_NAME/js/logical-op-solution.js
**/

// Задача 1
// Если возраст больше или равен 18, выведи "Доступ разрешен", иначе — "Доступ запрещен".
const age = 20;
console.log(age >= 18 ? "Доступ разрешен" : "Доступ запрещен");
// Задача 2
// Если логин равен "admin" и пароль "1234", выведи "Добро пожаловать".
const login = "admin";
const password = "1234";
console.log(login === "admin" && password === "1234" ? "Добро пожаловать" : "Входа не будет(");
// Задача 3
// Если число от 10 до 50 включительно, выведи "OK".
const num = 35;
console.log(num >= 10 && num <= 50 ? "OK" : "Не подходит братик");
// Задача 4
// Если today равно "суббота" или "воскресенье", выведи "Выходной".
const today = "воскресенье";
console.log(today === "суббота" || today === "воскресенье" ? "Выходной" : "Работа(");
// Задача 5
// Если имя не пустое И email содержит "@", выведи "Данные корректны".
const name = "Иван";
const email = "ivan@example.com";
console.log(name && email.includes("@") ? "Данные корректны" : "Не");
// Задача 6
// Если первое число больше второго и меньше третьего, выведи "В диапазоне".
const a = 5,
  b = 3,
  c = 10;
console.log(a > b && a < c ? "В диапазоне" : "Не не не");
// Задача 7
// Если погода хорошая ИЛИ сегодня выходной, и у тебя есть свободное время — выведи "Можно идти гулять".
const isGoodWeather = true;
const isWeekend = false;
const hasFreeTime = true;
console.log((isGoodWeather || isWeekend) && hasFreeTime ? "Можно идти гулять" : "Сиди дома пей пиво");
// Задача 8
// Если имя входит в список допущенных, выведи "Вход разрешен".
// Подсказка: используй метод массива .includes()
const allowedUsers = ["Иван", "Мария", "Олег"];
const user = "Мария";
console.log(allowedUsers.includes(user) ? "Вход разрешен" : "Ты кто?");
// Задача 9
// Если переменная truthy — выведи "Истинное значение".
const val = "0";
console.log(val ? "Истинное значение" : "Чо это");
// Задача 10
// Выведи "Премиум", если user1.isPremium true, иначе — "Обычный".
const user1 = { isPremium: false };
console.log(user1.isPremium ? "Премиум" : "Обычный");
// Задача 11
// Если переменная x равна true, установить y = 100.
let x = true;
let y = 0;
if (x) y = 100;
// Задача 12
// Если пользователь не забанен, подписан и либо активен, либо оплатил подписку — выведи "Доступ разрешен".
const isBanned = false;
const isSubscribed = true;
const isActive = false;
const hasPaid = true;
console.log(!isBanned && isSubscribed && (isActive || hasPaid) ? "Доступ разрешен" : "Доступ запрещен");
// Задача 13
// Если сегодня будний день, и погода плохая, и ты не заболел — выведи "Идём на работу".
const isWeekday = true;
const badWeather = true;
const isSick = false;
console.log(isWeekday && badWeather && !isSick ? "Идём на работу" : "Пей пиво");
// Задача 14
// Студент допускается к экзамену, если у него:
// - больше 75% посещаемости ИЛИ
// - оценка по контрольной >= 80 И при этом хотя бы 60% посещаемости

const attendance = 0.65; // доля
const testScore = 85;
console.log(attendance > 0.75 || (testScore >= 80 && attendance >= 0.6) ? "Допущен к экзамену" : "Не допущен");
// Задача 15
// Ученик получает награду, если:
// - у него оценка выше 90
// - он не опоздал более 3 раз
// - он был активен на всех занятиях

const grade = 95;
const lateDays = 2;
const activeInClass = true;
console.log(grade > 90 && lateDays <= 3 && activeInClass ? "На базу кеш" : "Хер те с маслом");
// Задача 16
// Для получения скидки клиент должен быть:
// - зарегистрирован более года
// - и (потратил более 1000 или является VIP)

const isVip = false;
const yearsRegistered = 2;
const totalSpent = 1200;
console.log(yearsRegistered > 1 && (totalSpent > 1000 || isVip) ? "Скидка миллионеру" : "Бомж");
// Задача 17
// Если задана дата, и она не null, и не пустая строка — выведи её.

const date = "2024-12-01";
if (date && date !== "") console.log(date);
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
console.log(name2 && email2.includes("@") && password2.length >= 6 ? "Ты тот самый" : "Не избранный");

// Задача 18
// Если заказ:
// - не отменён
// - оплачен
// - либо отправлен, либо в процессе сборки

const isCanceled = false;
const isPaid = true;
const status = "assembling"; // "shipped", "assembling"


console.log(
  !isCanceled && isPaid && (status === "shipped" || status === "assembling") 
    ? "Заказ выполнен" 
    : "Заказ не выполнен"
);


// Задача 19
// Игра завершается, если:
// - игрок умер ИЛИ
// - у него закончилось время И
// - не включён режим "бессмертие"

const isDead = false;
const timeLeft = 0;
const isGodMode = false;

console.log(
  (isDead || timeLeft <= 0) && !isGodMode 
    ? "Ты сдох" 
    : "Еле но живой"
);

// Задача 20
// Если пользователь:
// - работает удалённо
// - и/или из другой страны
// - и не под VPN — выведи предупреждение безопасности

const isRemote = true;
const isForeign = false;
const usesVPN = false;

// тут я осознал что разумный и начал делать через if else

if ((isRemote || isForeign) && !usesVPN) {
    console.log("Предупреждение безопасности");
} else {
    console.log("Все путем");
}

// Задача 21
// Если хотя бы одно из полей name, email, или phone не заполнено — выведи "Заполните все поля".

const name3 = "Оля";
const email3 = "";
const phone3 = "89991234567";


if (!name3 || !email3 || !phone3) {
    console.log("Заполните все поля");
} else {
    console.log("Ты красавчик");
}
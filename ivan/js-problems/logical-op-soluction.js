/*
    Базовый набор задач на использование логических операторов: &&, ||, !
    Для решения создай файл logical-op-solution.js в своей папке 
    по пути YOUR_NAME/js-problems/logical-op-solution.js
**/

// Задача 1
// Если возраст больше или равен 18, выведи "Доступ разрешен", иначе — "Доступ запрещен".

const age = 20;
if (age >= 18) {
  console.log('Доступ разрешен');
} else {
  console.log('Доступ запрещен');
}


// Задача 2
// Если логин равен "admin" и пароль "1234", выведи "Добро пожаловать".
const login = "admin";
const password = "1234";

if (login == "admin" && password == "1234") {
  console.log('Добро пожаловать');
} else {
  console.log('Stop being sleepy, u enter wrong login or pass');
}

// Задача 3
// Если число от 10 до 50 включительно, выведи "OK".
const num = 35;

if (num >= 10 && num <= 50) {
  console.log("ОК");
} else {
  console.log("NO OK");
}

// Задача 4
// Если today равно "суббота" или "воскресенье", выведи "Выходной".
const today = "воскресенье";

if (today == 'воскресенье' || today == 'суббота') {
  console.log('Выходной');
} else {
  console.log('No выходной, работай!');
}

// Задача 5
// Если имя не пустое И email содержит "@", выведи "Данные корректны".
const name = "Иван";
const email = "ivan@example.com";

if (name !== '' && email.includes('@')) {
  console.log('Данные корректны');
} else {
  console.log('Данные не корректны');
}

// indexOf('@') !== -1 //-1 это отсутствие символа, поэтому используется отрицание, но includes - проще, однако не работает в IE11 :D

// Задача 6
// Если первое число больше второго и меньше третьего, выведи "В диапазоне".
const a = 5,
  b = 3,
  c = 10;

  if(a > b && a < c) {
    console.log('В диапазоне');
  } else {
    console.log('Не в диапазоне');
  }

// Задача 7
// Если погода хорошая ИЛИ сегодня выходной, и у тебя есть свободное время — выведи "Можно идти гулять".
const isGoodWeather = true;
const isWeekend = false;
const hasFreeTime = true;

if ((isGoodWeather === true || isWeekend === true) && hasFreeTime === true) {
  console.log("Можно идти гулять");
} else {
  console.log("А что мужики, что мы начальника что-ли подведём? За работу!");
}

// Задача 8
// Если имя входит в список допущенных, выведи "Вход разрешен".
// Подсказка: используй метод массива .includes()
const allowedUsers = ["Иван", "Мария", "Олег"];
const user = "Мария";

if (allowedUsers.includes(user)) {
  console.log('Вход разрешен');
} else {
  console.log('Вход воспрещен!');
}


// Задача 9
// Если переменная truthy — выведи "Истинное значение".
const val = "0";

console.log(Boolean(val) != false ? 'Истинное значение' : 'Значение не истинно');

// Задача 10
// Выведи "Премиум", если user1.isPremium true, иначе — "Обычный".
const user1 = { isPremium: false };

console.log(user1.isPremium ? 'Премиум' : 'Обычный');


// Задача 11
// Если переменная x равна true, установить y = 100.
let x = true;
let y = 0;

console.log(x ? y = 100 : y);


// Задача 12
// Если пользователь не забанен, подписан и либо активен, либо оплатил подписку — выведи "Доступ разрешен".
const isBanned = false;
const isSubscribed = true;
const isActive = false;
const hasPaid = true;

userCheck = (!isBanned && isSubscribed) && (isActive || hasPaid);
console.log( userCheck ? 'Доступ разрешён' : 'Доступ отклонён');


// Задача 13
// Если сегодня будний день, и погода плохая, и ты не заболел — выведи "Идём на работу".
const isWeekday = true;
const badWeather = true;
const isSick = false;

let goToWork = isWeekday &&  badWeather && !isSick ? 'Идём на работу' : 'Забей, сиди дома!';
console.log(goToWork);


// Задача 14
// Студент допускается к экзамену, если у него:
// - больше 75% посещаемости ИЛИ
// - оценка по контрольной >= 80 И при этом хотя бы 60% посещаемости

const attendance = 0.65; // доля
const testScore = 85;

function examAccess (checkAttendance, checkTestScore){
  console.log((checkAttendance >= 0.75 || checkTestScore >= 80 && checkAttendance >= 0.6) ? 'Студент получил допуск' : 'Студент не допущен');
}

examAccess(attendance, testScore)
// решил через функцию сделать, чтобы разнообразить и можно было вводить различные параметры


// Задача 15
// Ученик получает награду, если:
// - у него оценка выше 90
// - он не опоздал более 3 раз
// - он был активен на всех занятиях

const grade = 95;
const lateDays = 2;
const activeInClass = true;

function getReward (checkGrade, checkLateDays, checkActiveInClass) {
  console.log(checkGrade > 90 && checkLateDays < 3 && activeInClass ? 'Ученик удостоен награды' : 'Ученик где-то не дожал');
}

getReward(grade, lateDays, activeInClass);



// Задача 16
// Для получения скидки клиент должен быть:
// - зарегистрирован более года
// - и (потратил более 1000 или является VIP)


const yearsRegistered = 2;
const totalSpent = 1200;
const isVip = false;

function checkClient (checkYearsRegistered, checkTotalSpent, checkVipStatus){
  let isMember = checkYearsRegistered > 1 && (checkTotalSpent > 1000 || checkVipStatus);
  console.log(isMember);
}

checkClient (yearsRegistered, totalSpent, isVip);
//вообще можно и не выводить сообщение, просто будет true или false в зависимости от переменных


// Задача 17
// Если задана дата, и она не null, и не пустая строка — выведи её.

const date = "2024-12-01";
if (date != null && date != '') {
  console.log(date);
}



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

function registrationStatus(checkName, checkCharEmail, checkPass) {
  let isRegistered = checkName != '' && checkCharEmail.includes('@') && Number(checkPass) > 6;
  console.log(isRegistered);
}

registrationStatus(name2, email2, password2);

// Задача 18
// Если заказ:
// - не отменён
// - оплачен
// - либо отправлен, либо в процессе сборки

const isCanceled = false;
const isPaid = true;
const statusOrder = "assembling"; // "shipped", "assembling"

function orderStatus (checkIsCanceled, checkIsPaid, checkStatusOrder) {
  let isReady = !checkIsCanceled && checkIsPaid && (checkStatusOrder === 'assembling' || checkStatus === 'shipped');
  console.log(isReady);
}

orderStatus(isCanceled, isPaid, statusOrder);


// Задача 19
// Игра завершается, если:
// - игрок умер ИЛИ
// - у него закончилось время И
// - не включён режим "бессмертие"

const isDead = false;
const timeLeft = 0;
const isGodMode = false;

function gameStatusOver (checkIsDead, checkTimeLeft, checkIsGodMode) {
  let isGameOver = checkIsDead || (checkTimeLeft === 0 && !checkIsGodMode);
  console.log(isGameOver);
}

gameStatusOver(isDead, timeLeft, isGodMode);

// Задача 20
// Если пользователь:
// - работает удалённо
// - и/или из другой страны
// - и не под VPN — выведи предупреждение безопасности

const isRemote = true;
const isForeign = false;
const usesVPN = false;

function alertSecurity (checkIsRemote, checkIsForeign, checkUsesVPN) {
  alertSignal = (checkIsRemote || checkIsForeign) && !checkUsesVPN;
  console.log(alertSignal);
}

alertSecurity(isRemote, isForeign, usesVPN);

// Задача 21
// Если хотя бы одно из полей name, email, или phone не заполнено — выведи "Заполните все поля".

const name3 = "Оля";
const email3 = "";
const phone3 = "89991234567";

let isFielded = name3 != '' && email3 != '' && phone3 != '' ? true : 'Заполните поля';

console.log(isFielded);

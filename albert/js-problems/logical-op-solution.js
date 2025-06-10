// Задача 1
// Если возраст больше или равен 18, выведи "Доступ разрешен", иначе — "Доступ запрещен".
const age = 20;


//Решение 
const age = 20;
if (age >= 18) {
  console.log("Доступ разрешён")
} else {
  console.log("Доступ запрещён")
}

// Задача 2
// Если логин равен "admin" и пароль "1234", выведи "Добро пожаловать".
const login = "admin";
const password = "1234";

//Решение
const login = "admin";
const password = "1234";
if (login === "admin" && password === "1234") {
console.log("Добро пожаловать");
}


// Задача 3
// Если число от 10 до 50 включительно, выведи "OK".
const num = 35;

//Решение
const num = 35;
if (num >= 10 && num <= 50) {
  console.log("OK");
}


// Задача 4
// Если today равно "суббота" или "воскресенье", выведи "Выходной".
const today = "воскресенье";        

//Решение
const today = "воскресенье";
if (today === "суббота" || today === "воскресенье") {
  console.log("Выходной");
}

// Задача 5
// Если имя не пустое И email содержит "@", выведи "Данные корректны".
const name = "Иван";
const email = "ivan@example.com";

//Решение
const name = "Иван";
const email = "ivan@example.com";
if (name && email.includes("@")) {
  console.log("Данные корректны");
}


// Задача 6
// Если первое число больше второго и меньше третьего, выведи "В диапазоне".
const a = 5,
  b = 3,
  c = 10;

  //Решение
const a = 5,
  b = 3,
  c = 10;
if (a > b && a < c) {
  console.log("В диапазоне");
}


// Задача 7
// Если погода хорошая ИЛИ сегодня выходной, и у тебя есть свободное время — выведи "Можно идти гулять".
const isGoodWeather = true;
const isWeekend = false;
const hasFreeTime = true;

//Решение
const isGoodWeather = true;
const isWeekend = false;
const hasFreeTime = true;
if ((isGoodWeather || isWeekend) && hasFreeTime) {
  console.log("Можно идти гулять");
}

// Задача 8
// Если имя входит в список допущенных, выведи "Вход разрешен".
// Подсказка: используй метод массива .includes()
const allowedUsers = ["Иван", "Мария", "Олег"];
const user = "Мария";


// Решение 
const allowedUsers = ["Иван", "Мария", "Олег"];
const user = "Мария";
if (allowedUsers.includes(user)) {
  console.log("Вход разрешен");
}

// Задача 9
// Если переменная truthy — выведи "Истинное значение".
const val = "0";


//Решение
const val = "0";
if (val) {
  console.log("Истинное значение");
}

// Задача 10
// Выведи "Премиум", если user1.isPremium true, иначе — "Обычный".
const user1 = { isPremium: false };


//Решение
const user1 = { isPremium: false };
console.log(user1.isPremium ? "Премиум" : "Обычный");

// Задача 11
// Если переменная x равна true, установить y = 100.
let x = true;
let y = 0;


//Решение
let x = true;
let y = 0;
if (x) {
  y = 100;
}

// Задача 12
// Если пользователь не забанен, подписан и либо активен, либо оплатил подписку — выведи "Доступ разрешен".
const isBanned = false;
const isSubscribed = true;
const isActive = false;
const hasPaid = true;


//Решение
const isBanned = false;
const isSubscribed = true;
const isActive = false;
const hasPaid = true;
if (!isBanned && isSubscribed && (isActive || hasPaid)) {
  console.log("Доступ разрешен");
}


// Задача 13
// Если сегодня будний день, и погода плохая, и ты не заболел — выведи "Идём на работу".
const isWeekday = true;
const badWeather = true;
const isSick = false;


//Решение
const isWeekday = true;
const badWeather = true;
const isSick = false;
if (isWeekday && badWeather && !isSick) {
  console.log("Идём на работу");
}


// Задача 14
// Студент допускается к экзамену, если у него:
// - больше 75% посещаемости ИЛИ
// - оценка по контрольной >= 80 И при этом хотя бы 60% посещаемости

const attendance = 0.65; // доля
const testScore = 85;


//Решение
const attendance = 0.65; // доля
const testScore = 85;
if (attendance > 0.75 || (testScore >= 80 && attendance >= 0.6)) {
  console.log("Допущен к экзамену");
}


// Задача 15
// Ученик получает награду, если:
// - у него оценка выше 90
// - он не опоздал более 3 раз
// - он был активен на всех занятиях

const grade = 95;
const lateDays = 2;
const activeInClass = true;


//Решение
const grade = 95;
const lateDays = 2;
const activeInClass = true;
if (grade > 90 && lateDays <= 3 && activeInClass) {
  console.log("Награда");
}

// Задача 16
// Для получения скидки клиент должен быть:
// - зарегистрирован более года
// - и (потратил более 1000 или является VIP)

const isVip = false;
const yearsRegistered = 2;
const totalSpent = 1200;


//Решение
const isVip = false;
const yearsRegistered = 2;
const totalSpent = 1200;
if (yearsRegistered > 1 && (totalSpent > 1000 || isVip)) {
  console.log("Скидка предоставлена");
}

// Задача 17
// Если задана дата, и она не null, и не пустая строка — выведи её.

const date = "2024-12-01";


//Решение
const date = "2024-12-01";
if (date && date !== null && date !== "") {
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


//Решение
const name2 = "Катя";
const email2 = "katya@mail.ru";
const password2 = "123456";
if (name2 && email2.includes("@") && password2.length >= 6) {
  console.log("Пользователь зарегистрирован");
}

// Задача 18
// Если заказ:
// - не отменён
// - оплачен
// - либо отправлен, либо в процессе сборки

const isCanceled = false;
const isPaid = true;
const status = "assembling"; // "shipped", "assembling"


//Решение
const isCanceled = false;
const isPaid = true;
const status = "assembling"; // "shipped", "assembling"
if (!isCanceled && isPaid && (status === "shipped" || status === "assembling")) {
  console.log("Заказ в обработке");
}


// Задача 19
// Игра завершается, если:
// - игрок умер ИЛИ
// - у него закончилось время И
// - не включён режим "бессмертие"

const isDead = false;
const timeLeft = 0;
const isGodMode = false;


//Решение
const isDead = false;
const timeLeft = 0;
const isGodMode = false;
if (isDead || (timeLeft <= 0 && !isGodMode)) {
  console.log("Игра окончена");
}


// Задача 20
// Если пользователь:
// - работает удалённо
// - и/или из другой страны
// - и не под VPN — выведи предупреждение безопасности

const isRemote = true;
const isForeign = false;
const usesVPN = false;


//Решение
const isRemote = true;
const isForeign = false;
const usesVPN = false;
if ((isRemote || isForeign) && !usesVPN) {
  console.log("Предупреждение безопасности");
}

// Задача 21
// Если хотя бы одно из полей name, email, или phone не заполнено — выведи "Заполните все поля".

const name3 = "Оля";
const email3 = "";
const phone3 = "89991234567";

//Решение
const name3 = "Оля";
const email3 = "";
const phone3 = "89991234567";
if (!name3 || !email3 || !phone3) {
  console.log("Заполните все поля");
}
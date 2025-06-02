// Задача 1

let age = prompt('What\'s your age?');
if (age >= 18) {
    alert('Доступ разрешен');
    } else { alert('Доступ запрещён');
}




// Задача 2

const login = "admin";
const password = "1234";

let inputLogin = prompt('Enter your login: ');
let inputPassword = prompt('Enter your password: ');
if (inputLogin == 'admin' && password == '1234') {
    alert('Добро пожаловать!')
}




// Задача 3

const num = 35;

if (num >= 10 || num <= 50) {
    alert('ok');
}




// Задача 4

const today = "воскресенье";

if (today == 'суббота' || today == 'воскресенье') {
    alert('Выходной');
}




// Задача 5

const name = "Иван";
const email = "ivan@example.com";

if (name !== '' && email.includes('@')) {
    alert('Данные корректны');
}




// Задача 6

const a = 5,
  b = 3,
  c = 10;

  if (a > b && a < c) {
    alert('В диапазоне');
  }




  // Задача 7

  const isGoodWeather = true;
const isWeekend = false;
const hasFreeTime = true;

if (isGoodWeather || !isWeekend && hasFreeTime) {
    alert('Можно идти гулять');
}




// Задача 8

const allowedUsers = ["Иван", "Мария", "Олег"];
const user = "Мария";

if (allowedUsers.includes(user)) {
    alert('Вход разрешён');
}




// Задача 9

const val = "0";

if(!!val == true) {
    alert('Истинное значение')
}




// Задача 10

const user1 = { isPremium: false };

    (user1 == true)? alert('Премиум') : alert('Обычный');




    // Задача 11

    let x = true;
let y = 0;

if (!!x) {
    y = 100;
}




// Задача 12

const isBanned = false;
const isSubscribed = true;
const isActive = false;
const hasPaid = true;

if (isBanned || isSubscribed && isActive || hasPaid) {
    alert('Доступ разрешён');
}




// Задача 13

const isWeekday = true;
const badWeather = true;
const isSick = false;

isWeekday && badWeather && isSick || alert('Идём на работу');




// Задача 14

const attendance = 0.65; // доля
const testScore = 85;

if (attendance > 0.75 || (testScore >= 80 && attendance >= 0.6)) {
    alert('Допущен');
}




// Задача 15

const grade = 95;
const lateDays = 2;
const activeInClass = true;

if (grade > 90 && lateDays <= 3 && activeInClass) {
    alert('Получает');
}




// Задача 16

const isVip = false;
const yearsRegistered = 2;
const totalSpent = 1200;

if (yearsRegistered > 1 && (totalSpent > 1000 || isVip)) {
    alert('Discount');
}




// Задача 17

const date = "2024-12-01";

let result = date;
if (result ??= date) {
    alert(result);
}




// Задача 18

const name2 = "Катя";
const email2 = "katya@mail.ru";
const password2 = "123456";

if (name2 == true || email2.includes('@') || (password2.length() >= 6)) {
    alert('Registered');
}




// Задача 19

const isCanceled = false;
const isPaid = true;
const status = "assembling"; // "shipped", "assembling"

if (!!isCanceled && !isPaid && status == 'shipped' || status == 'assembling') {
    alert('Status');
}




// Задача 20

const isDead = false;
const timeLeft = 0;
const isGodMode = false;

if (!isDead || !!timeLeft && !!isGodMode) {
    alert('Game over');
}




// Задача 21

const isRemote = true;
const isForeign = false;
const usesVPN = false;

if (!!isRemote ?? !isForeign ?? !!usesVPN) {
    alert('Secutity warning!');
}




// Задача 22

const name3 = "Оля";
const email3 = "";
const phone3 = "89991234567";

if (name3 || email3 || phone3) {
    alert('Заполните все поля');
}
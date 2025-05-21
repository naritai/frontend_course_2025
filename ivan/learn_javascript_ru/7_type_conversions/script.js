"use strict"

let findWrongAnswer = false;
alert(typeof findWrongAnswer); // выведет тип данных boolean

findWrongAnswer = String(findWrongAnswer);
alert(typeof findWrongAnswer); //выведет тип данных string

let string = "345"; // создал тип данных string
let number = Number(string); // преобразовал в тип данных number
alert(typeof number); // выведет тип данных number

alert(Boolean(1)); // выведет true
alert(Boolean(0)); // выведет false

alert(Boolean("Hi there")); //выведет true
alert(Boolean('')); //выведет false

alert(Number('hi there')); //выведет NaN
alert(Number(true)); // выведет true
alert(Number(false)); // выведет false

// значения - null, indefined, 0, NaN, "" = false
// всё остальное = true
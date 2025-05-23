"use strict"
let name = "Ilya";

alert( `hello ${1}` ); // скрипт выведет hello 1

alert( `hello ${"name"}` ); // скрипт выведет hello Ilya

alert( `hello ${name}` ); // скрипт выведет undefined

// решение неверное - оказался не внимательным и поспешил....

let name1 = "Ilya";

alert( `hello ${1}` ); // скрипт выведет hello 1

alert( `hello ${"name1"}` ); // скрипт выведет hello name

alert( `hello ${name1}` ); // скрипт выведет hello Ilya
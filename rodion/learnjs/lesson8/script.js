// Задание логические операции 1 важность 5
/*
Что выведет код ниже?

alert( null || 2 || undefined );

Так как если первое значение null то берем второе так как 2 это true
(Да так и есть, ответ 2)
*/

// Задание 2 важность 3
/*
Что выведет код ниже?

alert( alert(1) || 2 || alert(3) );
2 

(Ответ: сначала 1, затем 2.

alert( alert(1) || 2 || alert(3) );
Вызов alert не возвращает значения, или, иначе говоря, возвращает undefined.

Первый оператор ИЛИ || выполнит первый alert(1).
Получит undefined и пойдёт дальше, ко второму операнду в поисках истинного значения.
Так как второй операнд 2 является истинным, то вычисления завершатся, результатом undefined || 2 будет 2, которое будет выведено внешним alert( .... ).
Второй оператор || не будет выполнен, выполнение до alert(3) не дойдёт, поэтому 3 выведено не будет.)


До сих пор не понял почему сначала 1(
*/

// Задание 3 важность 5
/*

Что выведет код ниже?

alert( 1 && null && 2 );

Думаю выведет 1, так как дальше идет null а дальше мы не считаем

(Перепутал с или, получается ответ null так как первое ложное)

*/

// Задание 4 важность 3
/*

Что выведет код ниже?

alert( alert(1) && alert(2) );

Думаю код выведет ошибку типо undifine 

(Вывело undefined но перед этим еще 1, до сих пор не понял почему)

*/

// Задание 5 важность 5
/*

Что выведет код ниже?

alert( null || 2 && 3 || 4 );

Думаю код выведет 3 так как между 2 и 3 во втором будет 3, а это первое истинное

*/

//Задание 6 важность

// Тут я понял что важность 3 делать не надо(
/*


Задание "Вопрос об if" Важность 5

Какие из перечисленных ниже alert выполнятся?

Какие конкретно значения будут результатами выражений в условиях if(...)?

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

Думаю выполнится толькко 3, так как -1 && 1 это 1, и 1 это true


(Выполнится первое тоже, так как Результат -1 || 0 = -1, в логическом контексте true)
*/

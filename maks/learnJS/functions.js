// 2
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

// 3
function min(a,b) {
    return a < b ? a : b;
}
min(3,5)

// 4
'use strict';
function pow(x, n) {
    let res = x ** n;
    return (res);
}
let x = prompt('x?', 0);
let n = prompt('n?', 0);
if (n >= 1 && n % 1 === 0) {
    alert(pow(x, n));
} else {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
}


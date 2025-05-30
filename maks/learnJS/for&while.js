// 4
for (let i = 2; i <= 10; i = i+2){
    alert(i);
}

// 5
while (i < 3) {
    alert ( `number ${i}!` );
    i++;
}

// 6
let i = 0;
do {
    i = prompt("Введите число", 0);
} while (i <= 100 && i);

// 7
let n = prompt('',0);
nextPrime:
for (let i = 1; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) continue nextPrime;
    }
    alert(i);
}

// 1
let user = {
    name: "John",
    surname: "Smith",

}
user.name = "Pete";
delete user.name;
console.log(user);

// 2
function isEmpty(obj) {
    for (let key in schedule) {
        return false;
    }
    return true;
}

// 3
let res = 0;
for (let key in salaries) {
    res += salaries[key];
}
alert(res);

// 4
function multiplyNumeric(obj) {
    for (let prop in obj) {
        typeof(obj[prop]) === Number ? obj[prop] *= 2 : obj[prop];
    }
}
// 2 решение
function multiplyNumeric(obj) {
    for (let prop in obj) {
        Number(obj[prop]) === obj[prop] ? obj[prop] = obj[prop] * 2 : obj[prop];
    }
};
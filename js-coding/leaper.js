function leapYear(year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}
// const isLeapYear = leapYear(2541)
// console.log(isLeapYear);

function leapYear2(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
}
const leapY = leapYear2(2024);
console.log(leapY);



console.log(Math.round(Math.random() * 10));
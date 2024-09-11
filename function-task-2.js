function passByBal(num) {
    if (num % 2 !== 0) {
        return num * 2;
    }
    else {
        return num / 2
    }
}
const add1 = passByBal(5)
console.log('Odd number ->', add1);

const add2 = passByBal(3)
console.log('Event Number ->', add2);
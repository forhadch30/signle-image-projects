let sum = 0;
let num = 81;
while (num <= 131) {
    if (num % 2 !== 0) {
        sum = sum + num;
        console.log(sum);
    }
    num++;
}
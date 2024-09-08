// let num = 1;
// let sum = 1;
// while (num <= 9) {
//     console.log(num);
//     sum = sum * num;
//     console.log(sum);
//     num++;
// }

// for (let i = 1; i <= 30; i++) {
//     if (i % 5 === 0 || i % 3 === 0) {
//         console.log(i);
//     }
// }
// for (let i = 1; i <= 30; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//         console.log(i);
//     }
// }
let total = 0
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        total += i
        console.log('total:', total);
    }
}
console.log('total of the number :', total);
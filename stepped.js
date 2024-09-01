const price = 2000;
const age = 62;
// 20 % discount
if (price >= 2000) {
    const discount = price * 20 / 100;
    const payAmount = price - discount
    console.log(payAmount);
    // console.log(payAmount);
}
else if (age >= 40) {
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
let a = 2;
if (a < 8) {
    console.log('less then 8');
}
else if(a == 8){
    console.log('equal to 8');
}
else{
    console.log('getter then 8');
}

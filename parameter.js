function number(something) {
    const result = something * something;
    console.log(result);
}
// number(12)

function add(num1, num2) {
    console.log(num1 + num2);
}
// add(12, 23, 34)


function sec(pere) {
    const size = pere.length;
    console.log(pere, size);
    if (size % 2 === 0) {
        console.log('size event');
    }
    else {
        console.log('size odd');
    }
}
sec('Dhaka');
sec('kakaksrk');
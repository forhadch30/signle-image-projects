const phones = [
    { name: 'walton', price: 12000, camera: '12mp', color: 'black' },
    { name: 'Samsung', price: 180000, camera: '12mp', color: 'White' },
    { name: 'Xoami', price: 200000, camera: '12mp', color: 'Green' },
    { name: 'Oppo', price: 150000, camera: '12mp', color: 'Orange' },
    { name: 'Nokia', price: 190000, camera: '12mp', color: 'Blue' },
    { name: 'Apple', price: 100000, camera: '12mp', color: 'Purple' }
]
function getAvg(phone) {
    let maxPrice = phone[0]
    for (const phon of phones) {
        if (phon.name > maxPrice.name) {
            maxPrice = phon;
        }
    }
    return maxPrice;
}
const total = getAvg(phones);
// console.log(total);


function add(num1, num2) {
    return num1 + num2
}
function add(num1, num2) {
    return num1 / num2
}
function add(num1, num2) {
    return num1 * num2
}
function add(num1, num2) {
    return num1 - num2
}

function sum(a, b, tray) {
    if (tray === 'add') {
        const total = add(a, b);
        return total
    }
}
const result = sum(10,20,'add');
console.log(result);
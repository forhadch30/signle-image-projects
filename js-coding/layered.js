// function layeredDiscountTotal(quantity) {
//     const first100Price = 100;
//     const second100Price = 90;
//     const above200Price = 70;

//     if (quantity <= 100) {
//         const total = quantity * first100Price;
//         return total
//     }
//     else if (quantity <= 200) {
//         const first100Total = 100 * first100Price;
//         const remainingQuantity = quantity - 100;
//         const remainingTotal = remainingQuantity * second100Price;
//         const total = first100Total + remainingTotal;
//         return total;
//     }
//     else {
//         const first100Total = 100 * first100Price;
//         const second100Total = 100 * second100Price;
//         const remainingQuantity = quantity - 200;
//         const remainingTotal = remainingQuantity * above200Price;
//         const total = first100Total + second100Total + remainingTotal;
//         return total;
//     }
// }


// const discount = layeredDiscountTotal(100);
// console.log(discount);


function remainingQuantity(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if (quantity <= 100) {
        const first = quantity * first100Price;
        return first
    }
    else if (quantity <= 200) {
        const first100Total = 100 * first100Price;
        const remain = quantity - 100;
        const totalQu = remain * second100Price;
        const total = first100Total + totalQu;
        return total;
    }
    else {
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const totalQuantity = remainingQuantity * above200Price;
        const total =  first100Total + second100Total + totalQuantity;
        return total
    }
}

const remain = remainingQuantity(201);
console.log(remain);
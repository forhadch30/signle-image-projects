const numbers = [12000, 130000, 4000, 5000, 60000, 80000]
function getMax(number) {
    let max = number[0]
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
const result = getMax(numbers);
console.log('Max Number ->', result);
const numbers = [12000, 130000, 4000, 5000, 60000, 80000];
function getMin(number) {
    let min = number[0];
    for (const num of numbers) {
        if (num < min) {
            min = num
        }
    }
    return min;

}
const result = getMin(numbers);
console.log('min number ->', result);
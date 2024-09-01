var array = [75.25, 65, 80, 35.45, 99.50];
var some = array.reduce((n, f) => n + f, 0)
var total = some / array.length;
var average = parseFloat(total.toFixed(3));
console.log(average);
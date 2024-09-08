const string = 'bangle deash is very nice for the my cuntry';
// const splits = string.split();
// console.log(splits);
// const revers = splits.reverse()
// console.log(revers);
let reverse = ''
for (const letter of string) {
    reverse = letter + reverse;
}
console.log(reverse);
for (let i = 0; i < string.length; i++) {
    console.log(i);
    console.log(string[i]);
}

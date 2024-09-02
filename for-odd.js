let num = 0;
for (let i = 61; i <= 100; i++) {
    console.log(i);
    if (i % 2 === 1) {
        num = num + i
        console.log('hello odd',i);
    }
}
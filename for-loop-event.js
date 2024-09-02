let num = 0;
for (let i = 78; i <= 98; i++) {
    console.log(i);
    if (i % 2 === 0) {
        num = num + i;
        console.log("hello Event :", i);
    }
}
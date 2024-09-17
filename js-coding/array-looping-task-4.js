const statement = 'I am a hard working person';
let sente = '';
for (let letter of statement) {
    sente = letter + sente.concat();
}
console.log(sente);
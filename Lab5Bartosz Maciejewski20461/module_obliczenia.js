const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Inicjalizacja zmiennych a i b
let a;
let b;

rl.question("a= ", (answerA) => {
    a = parseFloat(answerA); // Przypisanie wartości wprowadzonej przez użytkownika

    rl.question("b= ", (answerB) => {
        b = parseFloat(answerB); // Przypisanie wartości wprowadzonej przez użytkownika

        console.log("a:", a);
        console.log("b:", b);

        // Wywołanie obliczeń po uzyskaniu obu odpowiedzi
        let obl = require('./obliczeniaR');
        console.log('a + b =', obl.dodawanie(a, b));
        console.log('a - b =', obl.odejmowanie(a, b));
        console.log('a * b =', obl.mnozenie(a, b));
        console.log('a / b =', obl.dzielenie(a, b));
        console.log('a % b =', obl.modulo(a, b));

        console.log('');
        console.log('Obiektowo:');
        console.log('');

        let Obl = require('./obliczeniaO');
        let obl2 = new Obl(a, b);
        console.log('a + b =', obl2.dodawanie());
        console.log('a - b =', obl2.odejmowanie());
        console.log('a * b =', obl2.mnozenie());
        console.log('a / b =', obl2.dzielenie());
        console.log('a % b =', obl2.modulo());

        // Zamknięcie interfejsu po uzyskaniu obu odpowiedzi
        rl.close();
    });
});

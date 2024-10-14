const validator = require('validator');
const http = require('http');
const path = require("path");
const v8 = require("v8");
const hostname = '127.0.0.1';
const port = 8888;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello, from Node.js server!\n');
});

server.listen(port, hostname, () => {
    const email = 'example@example.com';
    const invalidEmail = 'invalid-email.com';

    // Użycie validatora do sprawdzenia poprawności e-maili
    const isEmailValid = validator.isEmail(email); // Sprawdza poprawność e-maila
    const isInvalidEmailValid = validator.isEmail(invalidEmail);

    console.log(v8.getHeapStatistics());
    console.log(path.basename(__filename));
    console.log(path.join(__dirname, 'uploads', 'images'));
    
    // Wyświetlenie wyników w konsoli
    console.log(`Is "${email}" a valid email? ${isEmailValid}`); // true
    console.log(`Is "${invalidEmail}" a valid email? ${isInvalidEmailValid}`); // false
    console.log('Modul ten jest validatorem, czyli sprawdza czy dany lancuch znakow jest dana rzecza');
    console.log('Powyzej podalem przyklad sprawdzajacy czy podany lancuch znakow jest adresem email');
    console.log('Modul ten rowniez zawiera takie opcje jak: isAfter(str [, options]), ktora sprawdza czy string jest data ktora wystepuje po danej innej dacie');
    console.log('equals (str, comparison) ktora sprawdza czy string jest rowny danemu stringowi comparison');
    console.log('isCreditCard(str [, options]) sprawdza czy String jest numerem karty kredytowej');
    console.log('isDate(str [, options]) sprawdza czy String jest Data');
    console.log('isIP(str [, version]) sprawdza czy string jest adresem IP wersji 4 lub 6');
    console.log('isInt(str [, options]) sprawdza czy lancuch znakow jest integerem');
    console.log('isMobilePhone(str [, locale [, options]]) sprawdza czy lancuch znakow jest numerem telefonu');
    console.log('isStrongPassword(str [, options]) Sprawdza czy lancuch znakow jest silnym haslem');

    console.log(`Server running at http://${hostname}:${port}/`);
});


let currency = require('./currency1');
console.log('50 zl odpowiada następującej ilości dolarów amerykańskich:');
console.log(currency.zlotyTousDolar(50));
console.log('30 dolarów amerykańskich odpowiada następującej ilości zlotych:');
console.log(currency.usDolarToZloty(30));

console.log('50 zl odpowiada następującej ilości euro:');
console.log(currency.zlotyToEuro(50));
console.log('30 euro odpowiada następującej ilości zlotych:');
console.log(currency.euroToZloty(30));

console.log('50 zl odpowiada następującej ilości funtow:');
console.log(currency.zlotyTofunt(50));
console.log('30 funtow odpowiada następującej ilości zlotych:');
console.log(currency.funtToZloty(30));


console.log('50 zl odpowiada następującej ilości rubli:');
console.log(currency.zlotyTorubel(50));
console.log('30 rubli odpowiada następującej ilości zlotych:');
console.log(currency.rubelToZloty(30));


console.log('50 zl odpowiada następującej ilości juanow:');
console.log(currency.zlotyTojuan(50));
console.log('30 juanow odpowiada następującej ilości zlotych:');
console.log(currency.juanToZloty(30));




console.log('');
console.log('Obiektowo:');
console.log('');
let Currency=require('./currency2');
let euro = 4.35;
let usDolar=4.02;
let juan=0.56;
let funt=5.22;
let rubel =0.041;
let currency2 = new Currency(euro,usDolar,juan,funt,rubel);
console.log('50 zl odpowiada następującej ilości dolarów amerykańskich:');
console.log(currency2.zlotyTousDolar(50));
console.log('30 dolarów amerykańskich odpowiada następującej ilości zlotych:');
console.log(currency2.usDolarToZloty(30));

console.log('50 zl odpowiada następującej ilości euro:');
console.log(currency2.zlotyToEuro(50));
console.log('30 euro odpowiada następującej ilości zlotych:');
console.log(currency2.euroToZloty(30));

console.log('50 zl odpowiada następującej ilości funtow:');
console.log(currency2.zlotyToFunt(50));
console.log('30 funtow odpowiada następującej ilości zlotych:');
console.log(currency2.funtToZloty(30));


console.log('50 zl odpowiada następującej ilości rubli:');
console.log(currency2.zlotyToRubel(50));
console.log('30 rubli odpowiada następującej ilości zlotych:');
console.log(currency2.rubelToZloty(30));


console.log('50 zl odpowiada następującej ilości juanow:');
console.log(currency2.zlotyToJuan(50));
console.log('30 juanow odpowiada następującej ilości zlotych:');
console.log(currency2.juanToZloty(30));
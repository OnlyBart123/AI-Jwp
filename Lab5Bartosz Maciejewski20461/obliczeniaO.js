let Obliczenia = function(a,b) {
    this.a = a;
    this.b = b;
    }
    Obliczenia.prototype.dodawanie = function() {
    return Math.round(this.a+this.b);
    }
    Obliczenia.prototype.odejmowanie = function() {
        return Math.round(this.a-this.b);
        }
    Obliczenia.prototype.mnozenie = function() {
        return Math.round(this.a*this.b);
        }
    Obliczenia.prototype.dzielenie = function() {
        return Math.round(this.a/this.b);
    }
    Obliczenia.prototype.modulo = function() {
        return Math.round(this.a%this.b);
        }
    module.exports = exports = Obliczenia;
    
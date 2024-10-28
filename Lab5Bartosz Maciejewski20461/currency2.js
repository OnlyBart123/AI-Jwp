let Currency = function(euro,usDolar,juan,funt,rubel) {
    this.euro = euro;
    this.usDolar=usDolar;
    this.juan=juan;
    this.funt=funt;
    this.rubel = rubel;
    }
    Currency.prototype.roundTwoDecimals = function(amount) {
    return Math.round(amount * 100) / 100;
    }
    Currency.prototype.zlotyToEuro = function(zloty) {
    return this.roundTwoDecimals(zloty * this.euro);
    }
    Currency.prototype.euroToZloty = function(eu) {
    return this.roundTwoDecimals(eu / this.euro);
    }

     Currency.prototype.zlotyTousDolar = function(zloty) {
    return this.roundTwoDecimals(zloty * this.usDolar);
    }
    Currency.prototype.usDolarToZloty = function(us) {
    return this.roundTwoDecimals(us / this.usDolar);
    }

    Currency.prototype.zlotyToJuan = function(zloty) {
        return this.roundTwoDecimals(zloty * this.juan);
        }
        Currency.prototype.juanToZloty = function(ju) {
        return this.roundTwoDecimals(ju / this.juan);
        }
    
    Currency.prototype.zlotyToFunt = function(zloty) {
    return this.roundTwoDecimals(zloty * this.funt);
    }
    Currency.prototype.funtToZloty = function(fu) {
    return this.roundTwoDecimals(fu / this.funt);
    }

    Currency.prototype.zlotyToRubel = function(zloty) {
    return this.roundTwoDecimals(zloty * this.rubel);
    }
    Currency.prototype.rubelToZloty = function(ru) {
    return this.roundTwoDecimals(ru / this.rubel);
    }
    module.exports = exports = Currency;
    
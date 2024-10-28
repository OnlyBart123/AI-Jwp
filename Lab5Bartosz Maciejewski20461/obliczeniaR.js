

function roundTwoDecimals(amount) {
return Math.round(amount * 100) / 100;
}
exports.dodawanie = function(a,b) {
return roundTwoDecimals(a+b);
}
exports.odejmowanie = function(a,b) {
return roundTwoDecimals(a-b);
}

exports.mnozenie = function(a,b) {
    return roundTwoDecimals(a*b);
    }
    exports.dzielenie = function(a,b) {
    return roundTwoDecimals(a / b);
    }

exports.modulo = function(a,b) {
        return roundTwoDecimals(a%b);
        }
        
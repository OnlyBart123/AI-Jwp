
let euro = 4.35;
let usDolar=4.02;
let juan=0.56;
let funt=5.22;
let rubel =0.041;
function roundTwoDecimals(amount) {
return Math.round(amount * 100) / 100;
}
exports.zlotyToEuro = function(zloty) {
return roundTwoDecimals(zloty * euro);
}
exports.euroToZloty = function(wal) {
return roundTwoDecimals(wal / euro);
}

exports.zlotyTousDolar = function(zloty) {
    return roundTwoDecimals(zloty * usDolar);
    }
    exports.usDolarToZloty = function(wal) {
    return roundTwoDecimals(wal / usDolar);
    }

exports.zlotyTojuan = function(zloty) {
        return roundTwoDecimals(zloty * juan);
        }
        exports.juanToZloty = function(wal) {
        return roundTwoDecimals(wal / juan);
        }

exports.zlotyTofunt = function(zloty) {
        return roundTwoDecimals(zloty * funt);
        }
        exports.funtToZloty = function(wal) {
        return roundTwoDecimals(wal / funt);
        }

exports.zlotyTorubel = function(zloty) {
        return roundTwoDecimals(zloty * rubel);
        }
        exports.rubelToZloty = function(wal) {
        return roundTwoDecimals(wal / rubel);
        }


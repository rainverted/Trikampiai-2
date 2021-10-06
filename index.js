var Trikampis = /** @class */ (function () {
    function Trikampis(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Trikampis.prototype.spausdintiDuomenis = function () {
        console.log("Trikampio krastines a:" + this.a + ", b:" + this.b + ", c:" + this.c);
        console.log("Trikampio perimetras " + this.perimetras());
    };
    Trikampis.prototype.perimetras = function () {
        return this.a * this.b * this.c;
    };
    return Trikampis;
}());
var trikampis1 = new Trikampis(10, 5, 5);
trikampis1.spausdintiDuomenis();

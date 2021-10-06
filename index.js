var Trikampis = /** @class */ (function () {
    function Trikampis(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Trikampis.prototype.spausdintiDuomenis = function () {
        console.log("Trikampio krastines cm - a:" + this.a + ", b:" + this.b + ", c:" + this.c);
        console.log("Trikampio perimetras - " + this.perimetras());
        console.log("Trikampis egzistuoja - " + this.arGaliEgzistuoti() + ".");
        console.log("----------");
    };
    Trikampis.prototype.perimetras = function () {
        return this.a + this.b + this.c;
    };
    Trikampis.prototype.arGaliEgzistuoti = function () {
        if (this.a + this.b > this.c ||
            this.c + this.b > this.a ||
            this.a + this.c > this.b) {
        }
        return true;
    };
    return Trikampis;
}());
var trikampis1 = new Trikampis(10, 5, 5);
var trikampis2 = new Trikampis(22, 15, 25);
trikampis1.spausdintiDuomenis();
trikampis2.spausdintiDuomenis();

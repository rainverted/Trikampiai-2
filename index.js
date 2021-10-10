class Trikampis {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    spausdintiDuomenis() {
        console.log(`Trikampio krastines (cm) - a:${this.a}, b:${this.b}, c:${this.c}`);
        console.log(`Trikampio perimetras (cm) - ${this.perimetras()}`);
        console.log(`Trikampis egzistuoja - ${this.arGaliEgzistuoti()}.`);
        console.log(`----------`);
    }
    perimetras() {
        return this.a + this.b + this.c;
    }
    arGaliEgzistuoti() {
        if (this.a + this.b > this.c &&
            this.c + this.b > this.a &&
            this.a + this.c > this.b) {
            return true;
        }
        return false;
    }
    get arStatus() {
        const a2 = this.a * this.a;
        const b2 = this.b * this.b;
        const c2 = this.c * this.c;
        return a2 + b2 === c2 ||
            a2 + c2 === b2 ||
            b2 + c2 === a2;
    }
    get arTrikampisEgzistuoja() {
        return this.a + this.b > this.c &&
            this.b + this.c > this.a &&
            this.a + this.c > this.b;
    }
}
const trikampiai = [new Trikampis(3, 4, 5)];
trikampiai.push(new Trikampis(6, 3, 8));
const trikampis1 = new Trikampis(10, 50, 5);
const trikampis2 = new Trikampis(22, 15, 25);
trikampis1.spausdintiDuomenis();
trikampis2.spausdintiDuomenis();

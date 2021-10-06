class Trikampis {
   public a: number;
   public b: number;
   public c: number;

    public constructor (a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public spausdintiDuomenis(): void {
        console.log(`Trikampio krastines cm - a:${this.a}, b:${this.b}, c:${this.c}`);
        console.log(`Trikampio perimetras - ${this.perimetras()}`);
        console.log(`Trikampis egzistuoja - ${this.arGaliEgzistuoti()}.`)  
        console.log(`----------`);
          
    }

    public perimetras(): number {
        return this.a + this.b + this.c;
    }

    public arGaliEgzistuoti(): boolean{
        if (this.a + this.b > this.c ||
            this.c + this.b > this.a ||
            this.a + this.c > this.b) {
            }
            return true;
    }
}

const trikampis1 = new Trikampis(10, 5, 5);
const trikampis2 = new Trikampis(22, 15, 25);

trikampis1.spausdintiDuomenis();
trikampis2.spausdintiDuomenis();
   
 
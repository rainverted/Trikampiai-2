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
        console.log(`Trikampio krastines a:${this.a}, b:${this.b}, c:${this.c}`);
        console.log(`Trikampio perimetras ${this.perimetras()}`);
        
    }

    public perimetras(): number{
        return this.a * this.b * this.c;
    }
}

const trikampis1 = new Trikampis(10, 5, 5);
trikampis1.spausdintiDuomenis();
   
 
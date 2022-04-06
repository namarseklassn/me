class Car {
    constructor(marka, kol, kon) {
        this.marka = marka;
        this.kol = kol;
        this.kon = kon;
    }
    print(){
        if(this.kol<6){
            console.log('легковая');
        } else{
            console.log('грузовая');
        }
    }
    
}
class Gruzovik extends Car{
    constructor(marka,kol,kon,gruz){
        super(marka,kol,kon);
        this.gruz=gruz;
    }
    print() {
        console.log(`${this.marka} кол-во цилиндров: ${this.kol}, мощность: ${this.kon}, грузоподъемность: ${this.kon}`)
    }
}
let mers=new Gruzovik('Мерс -',6,250,2000);
mers.print();
let ford=new Gruzovik('Форд -',4,120,1500);
ford.print();
let hundai=new Gruzovik('Хундай -',8,300,4000);
hundai.print();
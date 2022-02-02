// function Pokupatel (fam, name, otch, adres, nombCard, nombBank) {
//     this.sekname = fam;
//     this.frname = name;
//     this.trname = otch;
//     this.adr = adres;
//     this.card = nombCard;
//     this.Bank = nombBank;
//     this.delete1 = function(){
//         this.card = this.card.filter(c1=>c1.card > card)
//     }
//     this.delete2 = function(){
//         this.card = this.card.filter(c2=>c2.card < card)
//     }
// }
// const pok1 = new Pokupatel ('mili', 'name1', 'otch1', 111333, 154);
// const pok2 = new Pokupatel ('cali', 'name2', 'otch2', 333111, 254);
// const pok3 = new Pokupatel ('amili', 'name3', 'otch3', 131313, 114);
// const pok4 = new Pokupatel ('yamli', 'name4', 'otch4', 313131, 114);
// const pok5 = new Pokupatel ('astrili', 'name5', 'otch5', 113313, 254);
// const pokupateli = [pok1,pok2,pok3,pok4,pok5];
// const sortByName = pokupateli.sort ((n1,n2) => {
//      if (n1.sekname>n2.sekname){
//          return 1;
//      } else if(n1.sekname<n2.sekname){
//          return -1;
//      }
//      return 0;
//  })
// console.log(sortByName);
// // ______________________________
// let a = prompt ('первыый номер')
// Pokupatel.delete1()
// let e = prompt ('второй номер')
// Pokupatel.delete2()


function Fish(name, color, predator, size,speed) {
    this.name = name;
    this.color = color;
    this.predator = predator;
    this.size = size;
    this.speed = speed;
    this.print = function () {
       console.log(`Имя: ${this.name} - 
       Цвет: ${this.color} - 
       Опасный: ${this.predator} - 
       Размер: ${this.size} - 
       Скорость: ${this.speed} `)
}
}
function aquarium (fishes=[]) {
    this.fishes = fishes;
    this.add = function (fish) {
        this.fishes.push(fish);
    };
    this.show = function (){
        this.fishes.forEach(f=>f.print())
    };
    // this.delFish = function () {
    //     this.fishes = this.fishes.
    // }
};
const f1 = new Fish ('karas', 'green', 'no', 120, 15);  
const f2 = new Fish ('piranya', 'yellow', 'yes', 220, 46);
const f3 = new Fish ('okun', 'white', 'no', 100, 33);
const f4 = new Fish ('kasatka', 'grey', 'yes', 115, 9);
const f5 = new Fish ('malek', 'red', 'yes', 169, 22);
const allFish = [f1,f2,f3,f4,f5];
const f6 = new Fish ('kit', 'purple', 'no', 300, 12);
let a =  prompt('name');
let e = allFish.forEach((f) => {
    if (a === f) {
        console.log('you kill ' + a);
    } else {console.log(('you safe live ' + a));
}
})

console.log(e);
aquarium.add(f6) //добавл рыбу
aquarium.show(); //вывел рыб






function Train (city, nomber,time) {
    this.cityq = city,
    this.nomberq = nomber,
    this.timeq = time,
    this.Poryadok = function() {}
} 
const tr1 = new Train ('Minsk', 4212, [1200, 2100,1700,2300,2350]);
const tr2 = new Train ('Pinsk', 121113, [1600,1700,1555, 1750,2416]);
const tr3 = new Train ('Moskow', 7214, [0900,2211,2418,1233,1122]);
const tr4 = new Train ('Ufa', 215, [2000,1234,2145,2356,0715]);
const train = [tr1,tr2,tr3,tr4];
const poryad = train.sort ((t1, t2) => {
    return t1.nomberq - t2.nomberq;
});
console.log(poryad);
// ---------------------
let vvod = prompt ('номер поезда')
const requestNumber = 2;
const requestTrain = tain.find(t => t.nomberq === requestNumber)
const sortedByDestination = train.sort ((t1,t2) => {
    if (t1.destination >t2.destination) {
        return 1;
    } else if (t1.destination < t2.destination) {
            return -1;
        }
        return 0;

})
console.log(requestTrain);
console.log(sortedByDestination);
// if (vvod = '4212') {console.log (vvod = tr1)} 
// if (vvod = '121113') {console.log (vvod = tr2)};
// if (vvod = '7214') {console.log (vvod = tr3)};
// if (vvod = '215') {console.log (vvod = tr4)};
// if (vvod != tr1 &&
//     vvod != tr2 &&
//     vvod != tr3 &&
//     vvod != tr4 ) {console.log (vvod = 'Нет такого номера')};
// ---------------------
const trainSort = [tr1[2],tr2[2],tr3[2],tr4[2]];
const porGor = trainSort.sort((p1,p2) => {
    return p1.timeq-p2.timeq;
});
console.log(porGor);
// let arr = [5, 97, -58, -50, 68, -41, -22, -7, -64, 88, -51, 13, -13, -11, -50, -80, -13, 100, -70, -40, -98, 3, 20, -30, -30, -9, 46, 39, 89, 86, 38, 77, 64, -69, -37, 60, 73, 70, -33, 54, -29, 14, 15, 88, 65, -11, -10, 44, 15, 71, -88, 57, -26, 66, -87, 46, 46, 13, 65, -67, 56, 99, -97, -31, -98, -3, -74, 70, 45, -50, 78, 57, 100, 77, -85, -24, -89, -38, 26, -45, 55, -53, -43, -7, 90, -53, 17, -47, -93, 66, 33, 66, 78, 55, 34, -9, 63, -74, 87, 37];
// 3
// let e =arr.filter (e,i => i%2==0)
// console.log(e);

// 5
// arr = arr.sort();
// arr.forEach((e,i) => {
//     if(i<arr.length -2 && arr[i] ==arr[i+1]
//         console.log('да');
// })
function Student (Fam, Imya, Grupa, Ocenka) {
    this.fml=Fam,
    this.im=Imya,
    this.nomb=Grupa,
    this.usp=Ocenka,
    this.print = function () {
        console.log(`${this.fml} - ${this.nomb}`);
    };
    this.isPerfect = function () {
        return this.usp.every (r=>r>=20)
    }
    this.middleRating = function (){
        return this.usp.reduce((r1, r2) => r1 + r2)/this.usp.length;
}
}
const st1 = new Student('mikh', 'zhenya', 10 ,[20,22,30,24,25]);
const st2 = new Student('masl', 'kolya', 11 ,[10,2,13,4,5]);
const st3 = new Student('kulin', 'sasha', 12 ,[1,20,3,4,5]);
const st4 = new Student('mikulin', 'nick', 13 ,[1,20,23,14,5]);
const st5 = new Student('maslo', 'oleg', 14 ,[1,2,13,4,5]);
const st6 = new Student('makar', 'pups', 15 ,[11,22,3,4,5]);
const st7 = new Student('zlob', 'koko', 16 ,[21,22,23,24,25]);
const students = [st1,st2,st3,st4,st5,st6,st7];
const best = students.filter (s=> s.isPerfect())
best.forEach(s=>s.print())
const sortedStudents = students.sort( (s1, s2) => s1.middleRating() - s2.middleRating());
console.log(sortedStudents);
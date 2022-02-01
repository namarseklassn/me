function Book (mans, names, ages, strs) {
    this.man = mans;
    this.name = names;
    this.age = ages;
    this.str = strs;
    this.vivod = function() {console.log(`${this.man} - ${this.age}`)};
}
const bk1 = new Book ('avt1', 'nazv1', 1995, 1324);
const bk2 = new Book ('avt2', 'nazv1', 1996, 4145);
const bk3 = new Book ('avt3', 'nazv1', 2095, 1154);
const bk4 = new Book ('avt4', 'nazv1', 1795, 754);
const bk5 = new Book ('avt5', 'nazv1', 1945, 3547);
const books = [bk1,bk2,bk3,bk4,bk5];

books.forEach( b=> b.vivod());
// ___________________________
// let del = prompt ('удалите книгу по автору');
// const delB = function() {
//     if (del = (books.find(b => b.man))) {delete this.man}
//     else {console.log('eror');}
// }
// console.log(delB);
const searchMan = 'avt1';
const findByAvt = books.find(b=>b.man === searchMan);
// __
books.push (new Book('avt6', 'nazv6', 195, 124))
console.log(books);
// __
const findInd = books.findIndex(b =>b.age === 1945)
delete books[findInd]
// ___________________________
const sortAvt = books.sort ((av1, av2) => av1.man - av2.man);
const sortStran = books.sort ((s1, s2) => s1.str - s2.str);
console.log(sortAvt);
console.log(sortStran);


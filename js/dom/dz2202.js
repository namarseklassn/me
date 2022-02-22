let arr = [[1, 2, 3], [4, 5], [6]]
let a1 = arr[0].reduce((q1,q2)=>q1+q2)
let a2 =arr[1].reduce((q1,q2)=>q1+q2)
let a3 =arr[2].reduce((q1,q2)=>q1+q2)
let sum = a1+a2+a3
console.log(sum);
console.log('____1ready_______')
let user = {
firstName : 'eugeni',
lastName : 'mikhnovets',
year : '1995',
get fullName (){
    return this.firstName +' '+ this.lastName
},
get age (){
    let d1 = new Date();
    let d2 = new Date(1995,10,24);
    let userYear = (d1.getTime()-d2.getTime())/1000/60/60/24/365;
    return userYear.toFixed(0)
}
}
console.log(user.fullName)
console.log(user.age + ' лет')
let users = [];
users.u1 = {
    age:13,
    name:'Nana',
}
users.u2 = {
    age:23,
    name:'Pana',
}
users.u3 = {
    age:11,
    name:'Qana',
}
users.u4 = {
    age:33,
    name:'Sana',
}
users.u5 = {
    age:3,
    name:'Tana',
}
users.u10 = {
    age:11,
    name:'Wana',
}
users.u6 = {
    age:14,
    name:'Rana',
}
users.u7 = {
    age:13,
    name:'Jana',
}
users.u8 = {
    age:27,
    name:'Fana',
}
users.u9 = {
    age:15,
    name:'Gana',
}
let filUsers = [];
if (users.u1.age>20) {
    filUsers.push(users.u1)
};
if (users.u2.age>20) {
    filUsers.push(users.u2)
};
if (users.u3.age>20) {
    filUsers.push(users.u3)
};
if (users.u4.age>20) {
    filUsers.push(users.u4)
};
if (users.u5.age>20) {
    filUsers.push(users.u5)
};
if (users.u6.age>20) {
    filUsers.push(users.u6)
};
if (users.u7.age>20) {
    filUsers.push(users.u7)
};
if (users.u8.age>20) {
    filUsers.push(users.u8)
};
if (users.u9.age>20) {
    filUsers.push(users.u9)
};
if (users.u10.age>20) {
    filUsers.push(users.u10)
};
console.log(filUsers.sort().reverse())
console.log('______с_горем_по_полам,но_2ready____')
let shape = {
    name:draw,
    color:gray
}
let circle={
    radius:15
};
let rectangle={asd};

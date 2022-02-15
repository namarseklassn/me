let user ={
    name:'Иван',
    age: '30',
    isAdmin: true,
};
let clone = {};
for(let me in user){
    clone[me] = user[me]
}
clone.isAdmin = false;
console.log (clone.isAdmin)
// _____________
let user1 = {
    age:30,
}
Object.defineProperty(user1, 'name',{
    value:'John',
    writable:false,
});
user1.name ="ivan";
console.log(user1.name)
let guest = new Object();
guest.name = 'Eugen';
let user = new Object();
user.age = 15,
user.city = 'Moscow';
Object.setPrototypeOf(user,guest);
console.log(user);
console.log(guest)
let AuthUser = {
    psaaword: 123,
    email: 'me@gmail.com',
}
let Admin = {
    isAdmin: false,
}
Object.setPrototypeOf(Admin,AuthUser);

console.log(Admin);
console.log(AuthUser);
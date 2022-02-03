// const request = new XMLHttpRequest();
 
// request.open('GET', 'https://jsonplaceholder.typicode.com/users');
 
// request.onload = function() {
//     console.log('Onload');
//     const result = request.response;
 
//     const object = JSON.parse(result);
//     const a = object.map (user => {
//         return {
//             email: user.email,
//             phone: user.phone.replaceAll ('.', '-').replaceAll (' ','').replaceAll ('x','-')
//         }
//     }).filter (user =>  user.phone.includes('0'))
//     .map (user =>{
//         const pos = user.email.indexOf('@');
//         user.email = user.email.slice (pos+1);
//         return user
//     })
//     const b = object.map (user => {
//         return +user.address.geo.lng + +user.address.geo.lat;
//     }).reduce ((ad1, ad2) => ad1 + ad2)
// console.log(b);
//  console.log(a);
// }
 
// request.send();
// console.log('Done');
const request = new XMLHttpRequest();
 
request.open('GET', 'https://jsonplaceholder.typicode.com/photos');
 
request.onload = function() {
    console.log('Onload');
    const result = request.response;
 
    const object = JSON.parse(result);
    const a = object
    .map( url => url.thumbnailUrl)
    .filter(u=> {
                const q = +u.slice(-1);
                return q % 2 === 0                    
        })
    console.log(a);
}
 
request.send();
console.log('Done');

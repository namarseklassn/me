// const request = new XMLHttpRequest();
 
// request.open('GET', 'https://jsonplaceholder.typicode.com/users');
 
// request.onload = function() {
//     console.log('Onload');
//     const result = request.response;
 
//     const object = JSON.parse(result);
//     const a = object.map(user=>{
//         return {
//             id:user.id,
//             name: user.name.toUpperCase(),
//             phone: user.phone.replaceAll ('.','-')
//             .replaceAll (' ','-')
//             .replaceAll (' ','')
//             .replaceAll ('(','')
//             .replaceAll (')','-')
//             .replaceAll ('x',''),
//             location:{
//                 street: user.address.street,
//                 index: user.address.zipcode,
//                 number: user.address.suite,
//             },
//                 }
//     })
//     .map(user=>{
//         const pos = user.name.indexOf(' ');
//         user.name = user.name.slice(pos+1);
//         return user
//     });
    
// const q = object.map(address=> {address.sute 
//     const posN = address.suite.indexOf(' ');
//     address.suite = address.suite.slice(posN+1);
//     return address
// })
//     // const sum = object.map(user=>{ 
//     //     if(user.phone % 2 ===0) { 
//     //         reduce((a1,a2)=>a1.phone + a2.phone)
//     //     }
//     //     return sum
//     //     })
// object.forEach((e,i) => {
// let code = e.address.zipcode.replaceAll('-','');
// code = math.ceil(Number.parseInt(code)/2);
// user.address    
// });
// // console.log (sortByName)
// // console.log(sum);
// console.log(a);
// console.log(q);
// }
 
// request.send();
// console.log('Done');
const request = new XMLHttpRequest();
 
request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
 
request.onload = function() {
    console.log('Onload');
    const result = request.response;
 
    const object = JSON.parse(result);
    const a = object.map( posts => {
        return {
            userId:posts.userId,
           title: posts.title.slice(0, 24),
            body: posts.body.split(' ')
            .map(a=>a[0]
            .toUpperCase() + a.slice(1)
            .join(' ')
            .split('\n')
            .toUpperCase() + a.slice(1)
            .join(' '),
            
        }
    })
    delete posts.userId
    console.log(a);
}
 
request.send();
console.log('Done');

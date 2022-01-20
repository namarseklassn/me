// let arr = [12,25,134,132,1,221,34,445];
// let r =0;
// // arr.forEach((q, index) =>{
// //     r+=q
// // });
// console.log(r);
// let max =arr[0];
// let min =arr[0];
// arr.forEach((q) =>{
//     if(max<q){
//         max=q
//     }
//         if(min>q) {
//             min=q
//         }
//     });
//     // console.log(r/arr.length);

// console.log(max, min);

let arr = ['миНск','брЕСТ','МоСкВа'];

let i = arr.map(a => a[0].toUpperCase() + a.slice(1).toLowerCase())
console.log(i);
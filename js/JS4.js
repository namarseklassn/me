//найти кол-во чисел в массиве, которые делятся на 3, но не нделятся на 7
// let arr = [];
// for ( let i=1; i<=1000000;i++) {
//     if(i%0 && i%7 !=0){
//         arr.push(i)
//     }
// }
// console.log(arr.length);
 //найти сумму и произведение элементов массива
//  let arr = [1, 3, 5, 3452345, 233, 234, 1];
//  let s = 0;
//  let p = 1;
//  for ( let i=0; i<arr.length;i++){
//      s+= arr[i];
//      p*= arr[i];
//  }
//  console.log(s,p);
 //найти наибольший элемент массива
//let arr = [1, 3, 5, 3452345, 233, 234, 1];
//   let max =arr.pop();
//   for ( let i=0; i<arr.length;i++){
//      if(max<arr[i]) {
//          max = arr[i];
//      }
//   }
//   console.log(max);
//найти сумму макс и мин массивов
// let arr = [1, 3, 5, 3452345, 233, 234, 1];
// let max =arr.pop();    
// let max = min;
//    for ( let i=0; i<arr.length;i++){
//       if(max<arr[i]) {
//           max = arr[i];
//       }
//       if (min>arr[i]){
//           min=arr[i]
//       }
//    }
//    console.log(min+max);
//найти сумму цифр
// let str = 'adkjsgfhlv12341234audalvnjcxk'
// let a =str.split('');
// let s= 0;
//  for( let i=0; i < a.length;i++){
//      if( Number.isInteger(+a[i])){
//          s+= +a[i];
//      }
//  }
//  console.log(s);
//сделать названия городов с большой буквы
let str = 'брест кобрин пинск'
let ai = str.split(' ');
for ( let i=0; i<ai.length;i++){
    let a = ai[i];
    a = a[0].toUpperCase() + a.slice(1);
    ai[i]=a;
}
str = ai.join(' ');
console.log(str);




// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://msheiko.github.io/js/dz/F1021/json/1.json'); 
// xhr.send();
// xhr.onload = function() {
//     console.log('Onload');
//     const result = xhr.response;
//     const object = JSON.parse(result);
//     object.images.forEach (img => {
//         img.image = img.image.split('/').pop()
//     });
//     object.images.forEach(px => {
//         px.width = Number.parseInt(px.width)
//     });
//     object.images.forEach(px => {
//         px.height = Number.parseInt(px.height)
//     });
//     object.images.forEach(id=> {
//         delete id.imageId
//     });
//     const res = [];
//     object.images.forEach(img =>{
//         if(res.some(i=>i.image === img.image)){
//             res.push(img)
//         }
//     })
//     console.log(res)
    
// };
// xhr.onerror = function() {
//   console.error("Запрос не удался");
// };



// _____________даты_____

let date = new Date (1995,10,24);
let dateN = new Date ();
let dateM = new Date (0,0,0,0,0,0,1000000000)
date = (date.getTime() - dateN);
// date.setMilliseconds(now.getMilliseconds() + 1000000000)
let newDate = dateN.getTime()+1000000000000;
let d = new Date (newDate)
console.log(d);
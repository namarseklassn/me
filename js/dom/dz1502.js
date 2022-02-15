let day = new Date ();
console.log('год ' + day.getFullYear());
let month = new Date ();
console.log('месяц ' + month.getMonth());
let year = new Date ();
console.log('день ' + year.getDate());
let week = new Date ();
console.log('день недели ' + week.getDay());
console.log('_________________')
let nextDayWeek = new Date (2005,2,10)
console.log('день былой недели ' + nextDayWeek.getDay());
console.log('_________________')
let days = new Date (1970,0,1);
let kollDay = (days.getTime() + day.getTime())/1000/60/60/24;
let kollDay3 = Math.round(kollDay)
console.log('насчитал ' + kollDay3 + ' дней');
console.log('_________________')
let days4 = new Date (1988,2,1);
let newData = new Date (2015,2,8);
let kollDay4 = (days4.getTime() + newData.getTime())/1000/60/60;
console.log('насчитал ' + kollDay4 + ' часов');
console.log('_________________')
let sec1 = new Date();
let sec2 = new Date(2022,1,15,23,59,59,999);
let secItog =((sec2.getTime()-sec1.getTime())/1000);
let sec = Math.ceil(secItog);
console.log('насчитал ' + sec + ' секунд');
console.log('_________________')
let arr = [1,2,3,1,2,5,6,3];
let resurs = [];
arr = arr.forEach(r=>{
    if (!resurs.some(e=>e.arr === r.arr )){
        resurs.push(r)
    }
})
console.log (resurs)
console.log('_________________')
console.log('пропуск')
console.log('_________________')
let arr1 = [1, 3, 5];
let arr2 = [1, 2, 3, 4, 5, 6];
arr2 = arr2.forEach(e=>{
    if(e.arr1 === e.arr2) {
        delete e
    }
})
console.log(arr2)
console.log('_________________')
console.log('дальше я глуп')
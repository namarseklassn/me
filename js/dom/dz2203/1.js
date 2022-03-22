let buttonAdd = document.querySelector('#f');
let buttonNext = document.querySelector('#s');
let tbody = document.querySelector('tbody');
buttonAdd.addEventListener('click',(event)=>{
    event.preventDefault();
    let newbody = document.createElement('tbody');
    tbody.append(newbody);
})
fetch("https://randomuser.me/api/")
.then((response)=>response)
.then((data)=>{
console.log(data);

})

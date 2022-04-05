const table = document.querySelector('table');
fetch('https://api.instantwebtools.net/v1/airlines',{
    method:'GET',
    body:JSON.stringify(),
        headers: {
            'Content-Type': 'application/json'
        },
})
.then((response)=>{
    console.log(response);
    return response.json()
})
.then ((data)=>
console.log (data))
 const fly = {
     number:'id',
     name:'name',
     country:'country'
 }
 table.forEach()

})

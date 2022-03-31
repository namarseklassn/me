const form = document.forms[0];
const button = document.querySelector('button');
const div = document.querySelector('div');
const sendd = document.querySelector('#send');
const section = document.querySelector('#send')
form.addEventListener('submit', function(event){
    const message = {
        time: new Date(),
        text:this.elements.inp.value,
        author:'mikhnovets',
    }
    console.log(message);
    fetch('http://192.168.0.200:3000/messages',{
        method:'POST',
        body:JSON.stringify(message),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => {
        console.log(response);
        return response.json()
    })
    .then(data => {
        console.log(data);
    })
        
    event.preventDefault();
});

 




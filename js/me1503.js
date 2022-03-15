const form = document.forms[0];
const firstNameInput = document.body.querySelector('#validationCustom01')
firstNameInput.addEventListener('input',function (){
    if(this.value.length >3){
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
        this.nextElementSibling.className = 'valid-feedback';
        this.nextElementSibling.textContent = 'GOOD'
    } else{
        this.classList.add('is-invalid');
        this.classList.remove('is-valid');
        this.nextElementSibling.className = 'invalid-feedback';
        this.nextElementSibling.textContent = 'BAD'
    }
})
const lastNameInput = document.body.querySelector('#validationCustom02')
lastNameInput.addEventListener('input',function(){
    if(!this.value.includes(' ')){
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
        this.nextElementSibling.className = 'valid-feedback';
        this.nextElementSibling.textContent = 'GOOD'
    } else{
        this.classList.add('is-invalid');
        this.classList.remove('is-valid');
        this.nextElementSibling.className = 'invalid-feedback';
        this.nextElementSibling.textContent = 'BAD'
    }
})
const zip = document.body.querySelector('#validationCustom05')
zip.addEventListener('input',function(){
    if(! Number.isNaN(this.value) && !Number.isNaN(Number.parseFloat(this.value))){
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
        this.nextElementSibling.className = 'valid-feedback';
        this.nextElementSibling.textContent = 'GOOD'
    } else{
        this.classList.add('is-invalid');
        this.classList.remove('is-valid');
        this.nextElementSibling.className = 'invalid-feedback';
        this.nextElementSibling.textContent = 'BAD'
    }
})
const submit = document.body.querySelector('button');
submit.addEventListener('submit',function(){
    if(state.nextElementSibling.textContent = 'BAD'){
    submit.disabled = true;
} else{
    submit.disabled = false;
}
})
const state = document.body.querySelector('#validationCustom04');
const select = document.body.querySelector('select');
state.addEventListener('input',function(){
    if(this.value.textContent='Choose...'){
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
        this.nextElementSibling.className = 'valid-feedback';
        this.nextElementSibling.textContent = 'GOOD'
    } else{
        this.classList.add('is-invalid');
        this.classList.remove('is-valid');
        this.nextElementSibling.className = 'invalid-feedback';
        this.nextElementSibling.textContent = 'BAD'
    }
})
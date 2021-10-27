import { isValid } from './utils';
import './style.css';

const form = document.querySelector('#form'),
    input = form.querySelector('#question-input'),
    submitBtn = form.querySelector('#submit')
    
    

    form.addEventListener('submit', submitFormHandler)
    input.addEventListener('input', () => {
        submitBtn.disabled = !isValid(input.value)
    })


    function submitFormHandler(e) { 
        e.preventDefault()

       if(isValid(input.value)) {
        const question = {
            text: input.value.trim(),
            date: new Date().toJSON()
        }
        submitBtn.disabled = true;
        console.log('Question', question);
            input.value = ''
            input.className = ''
            submitBtn.disabled = false

    }
    
   
     }
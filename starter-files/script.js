// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
const button = document.getElementById('button');
const answer = document.getElementById('answer');
const input = document.getElementById('input');

const fetchAnswer = () =>{
    fetch(API_ENDPOINT)
    .then((data) => data.json())
    .then(data => {
        answer.innerText = (input.value == "")? "":data.answer;
        setTimeout(() => {
        answer.innerText = "";
}, 5000);
    })
    .catch((err) => {
        
    });
}

button.addEventListener('click',fetchAnswer)




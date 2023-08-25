const inputNameEl = document.querySelector('#name-input');
const spanNameEl = document.querySelector('#name-output');

inputNameEl.addEventListener('input', getInputName);

function getInputName(event) {
    if (event.currentTarget.value !== '') {
       return spanNameEl.textContent = event.currentTarget.value
    } 
    spanNameEl.textContent = 'Anonymous'   
}
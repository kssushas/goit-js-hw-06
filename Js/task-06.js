const input = document.querySelector('#validation-input');
const getNum = parseInt(input.getAttribute('data-length'));
input.addEventListener('blur', onBlurInput);

function onBlurInput(event) {
    
    event.currentTarget.value.length === getNum
        ? input.classList.add('valid')
        : input.classList.add('invalid')

}
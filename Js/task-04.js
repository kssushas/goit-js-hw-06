const decrementBtn = document.querySelector('[data-action = decrement]');
const incrementBtn = document.querySelector("[data-action = increment]");
const spanEl = document.querySelector("#value");
let numberSpanEl = parseInt(spanEl.textContent);

decrementBtn.addEventListener('click', decrementOnSpan);
incrementBtn.addEventListener('click', incrementOnSpan);

function decrementOnSpan(params) {
    spanEl.textContent = numberSpanEl -= 1
}
function incrementOnSpan(params) {
   spanEl.textContent = numberSpanEl += 1
}



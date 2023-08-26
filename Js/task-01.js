const listEl = document.querySelectorAll('.item');
const h2El = document.querySelectorAll('h2');

console.log('Number of categories:', listEl.length);

listEl.forEach((li,index) => {
    console.log('Category: ', h2El[index].textContent);
    const liEl = li.querySelectorAll('li');
    console.log('Elements: ', liEl.length);
});

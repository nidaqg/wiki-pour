let newBtn = document.querySelector('#newRecipe');


newBtn.addEventListener('click', async function (event) {
    event.preventDefault();
    document.location.replace('/newrecipe');
})
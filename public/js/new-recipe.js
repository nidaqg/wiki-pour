let newPost = document.querySelector('#createCard');

newPost.addEventListener('click', async function (event){
event.preventDefault();

const cocktail_name = document.querySelector('#recipe-name').value.trim();
const instructions = document.querySelector('#recipe-content').value.trim();

const response = await fetch(`/api/cocktail`, {
    method: 'POST',
    body: JSON.stringify({cocktail_name,instructions}),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert('Failed to publish!');
  }

});
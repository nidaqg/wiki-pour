let newPost = document.querySelector('#createCard');

newPost.addEventListener('click', async function (event){
event.preventDefault();

const cocktail_name = document.querySelector('#recipe-name').value.trim();
const content = document.querySelector('#recipe-content').value.trim();

const response = await fetch(`/api`, {
    method: 'POST',
    body: JSON.stringify({cocktail_name,content}),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert('Failed to publish!');
  }

});
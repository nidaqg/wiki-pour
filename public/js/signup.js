//function to handle sign in form
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#signupUsername').value.trim();
    const email = document.querySelector('#signupEmail').value.trim();
    const password = document.querySelector('#signupPassword').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };

//function to handle go to login page

const goToLogin = async (event) => {
    event.preventDefault();
    document.location.replace('/login');
};


//add eventlisteners to buttons
  document
  .querySelector('#signup')
  .addEventListener('click', signupFormHandler); 

  document
  .querySelector('#loginInstead')
  .addEventListener('click', goToLogin);
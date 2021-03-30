//function to handle the login form
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const email = document.querySelector('#user-email').value.trim();
    const password = document.querySelector('#user-password').value.trim();
  
    if (email && password) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
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


  //add eventlisteners to both submit buttons
  document
    .querySelector('#login')
    .addEventListener('click', loginFormHandler);

    document
    .querySelector('#signup')
    .addEventListener('click', signupFormHandler); 
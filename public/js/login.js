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


//function to handle go to login page
const goToSignup = async (event) => {
  event.preventDefault();
  document.location.replace('/signup');
};


//add eventlisteners to submit buttons
document
.querySelector('#signupInstead')
.addEventListener('click', goToSignup); 

document
.querySelector('#login')
.addEventListener('click', loginFormHandler);

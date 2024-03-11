const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Here, you would typically perform validation against the backend
  // and handle the authentication process

  // For demonstration purposes, let's assume the correct credentials are:
  // Username: cherry
  // Password: charan

  if (username === 'charan' && password === 'cherry') {
    // Successful login
    alert('Login successful!');
    // Redirect to the desired page or perform any other necessary actions
  } else {
    // Incorrect login
    errorMessage.textContent = 'Invalid username or password plz check the login details.';
  }
});
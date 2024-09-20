document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      // This is where you'd typically send a request to your server to validate credentials
      // For demonstration, we'll use a simple check
      if (username === 'demo' && password === 'password') {
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to next page
      } else {
        alert('username atau sandi anda salah. Please try again.');
      }
    });
  });
   
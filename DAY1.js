document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = form.querySelector('input[type="text"]').value;
      const email = form.querySelector('input[type="email"]').value;
      alert(`Thank you, ${name}! We'll keep you updated at ${email}.`);
      form.reset();
    });
  });
  

emailjs.init('jBLQN3A33tENiHuno'); // Replace with your real public key

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs.sendForm('service_cong7aq', 'template_yeh9e3i', this)
    .then(function (response) {
      console.log('SUCCESS!', response.status, response.text);
      document.getElementById('status-message').innerText = "Message sent!";
    }, function (error) {
      console.log('FAILED...', error);
      document.getElementById('status-message').innerText = "Failed to send. Try again.";
    });

  this.reset();
});

document.getElementById('menu').addEventListener('click', function () {
  document.getElementById('nav-links').classList.toggle('show');
});

// Select all elements with the "reveal" class
const revealElements = document.querySelectorAll('.reveal');

// Create the Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');     // Add animation class
      observer.unobserve(entry.target);         // Only animate once
    }
  });
}, {
  threshold: 0.2 // Trigger when 20% of the element is visible
});

// Start observing each reveal element
revealElements.forEach(el => observer.observe(el));


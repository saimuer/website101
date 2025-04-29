// Subscribe feature
function subscribe() {
    const email = document.getElementById('emailInput').value;
    if (email.includes('@')) {
      alert('Thanks for subscribing!');
    } else {
      alert('Please enter a valid email address.');
    }
  }
  
  // Contact form storage
  document.getElementById('contactForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const contact = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };
    localStorage.setItem('contact', JSON.stringify(contact));
    alert('Message sent!');
    this.reset();
  });
  
  // Cart logic
  function addToCart(plan) {
    sessionStorage.setItem('plan', plan);
    document.getElementById('cart').textContent = plan;
  }
  
  function clearCart() {
    sessionStorage.removeItem('plan');
    document.getElementById('cart').textContent = '';
  }
  
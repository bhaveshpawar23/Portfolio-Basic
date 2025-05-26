window.addEventListener('DOMContentLoaded', function() {
  const content = document.getElementById('main-content');
  if (content) {
    content.classList.add('animate-in');
  }
});
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.logo')?.classList.add('animate-in');
  document.querySelector('.navbar')?.classList.add('animate-in');
  document.querySelector('.home-img')?.classList.add('animate-in');
  document.querySelector('.home-info')?.classList.add('animate-in');
  document.querySelector('#main-content button')?.classList.add('animate-in');
});
const hamburger = document.getElementById('hamburger-menu');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
  hamburger.classList.toggle('open');
});

// Optional: Close navbar when a link is clicked (for better UX)
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    hamburger.classList.remove('open');
  });
});
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('footer')?.classList.add('footer-animate');
});


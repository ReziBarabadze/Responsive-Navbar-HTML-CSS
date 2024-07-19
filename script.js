const toggleBtn = document.querySelector('.toggle_btn');
const navbar = document.querySelector('.header .navbar');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  navbar.classList.toggle('active');
})
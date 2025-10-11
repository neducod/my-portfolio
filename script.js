const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});



window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  


  AOS.init({
    duration: 1000, // animation duration in milliseconds
    easing: 'ease-in-out', // animation easing
    once: true, // whether animation should happen only once - while scrolling down
  });





const form = document.getElementById('contactForm');
const toast = document.getElementById('toast');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // prevent default redirect
    const data = new FormData(form);

    try {
        const res = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
            toast.textContent = "✅ Message sent successfully!";
            toast.classList.add('show');
            form.reset();
            setTimeout(() => toast.classList.remove('show'), 4000);
        } else {
            toast.textContent = "❌ Something went wrong.";
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 4000);
        }
    } catch (err) {
        toast.textContent = "❌ Network error.";
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 4000);
    }
});

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







const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});




/*

const gradientText = document.querySelector(".gradient-text");

gradientText.innerHTML = gradientText.innerText
  .split("")
  .map((ltr, idx) => {
    return `<span class="ltr" style="--delay: ${idx * 100}ms">${ltr}</span>`;
  })
  .join("");

console.log(gradientText);

const ltrs = document.querySelectorAll(".gradient-text .ltr");

ltrs.forEach((ltr) => {
  ltr.addEventListener("animationend", () => {
    ltr.classList.add("show");
  });
});


*/





(function(){
  const rotator = document.getElementById('rot');
  const items = Array.from(rotator.querySelectorAll('span'));
  let idx = 0;
  const visibleMs = 2500; // how long each text stays visible
  const transitionMs = 400; // must match CSS transition

  // show first immediately
  items.forEach((s, i) => s.classList.remove('show'));
  items[idx].classList.add('show');

  setInterval(() => {
    items[idx].classList.remove('show');
    idx = (idx + 1) % items.length;
    // small timeout to allow exit transition before entering (optional)
    setTimeout(() => items[idx].classList.add('show'), 50);
  }, visibleMs + transitionMs);
})();
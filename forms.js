const form = document.getElementById('contactForm');
    const formContainer = document.getElementById('contactContainer');
    const thankYouCard = document.getElementById('thankYouCard');
    const stayBtn = document.getElementById('stayBtn');

    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          formContainer.style.display = 'none';
          thankYouCard.style.display = 'block';
        } else {
          alert('Oops! There was a problem submitting your form.');
        }
      } catch (error) {
        alert('Network error. Please try again later.');
      }
    });

    // Reset view when clicking "Stay on Portfolio"
    stayBtn.addEventListener('click', function() {
      thankYouCard.style.display = 'none';
      formContainer.style.display = 'block';
      form.reset();
    });



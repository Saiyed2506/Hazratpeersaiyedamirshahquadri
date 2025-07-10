const langToggleBtn = document.getElementById('lang-toggle');

langToggleBtn.addEventListener('click', () => {
  // Toggle between English and Urdu by replacing text content or loading Urdu page
  if (langToggleBtn.textContent === 'اردو') {
    alert('Urdu language version is coming soon!');
    // Here you can redirect or load Urdu content
  } else {
    // back to English
  }
});

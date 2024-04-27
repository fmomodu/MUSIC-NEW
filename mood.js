document.addEventListener('DOMContentLoaded', function() {
  const moodBtns = document.querySelectorAll('.mood-btn');

  moodBtns.forEach(btn => {
    btn.addEventListener('click', function(event) {
      event.preventDefault();

      // Store the selected mood in sessionStorage
      sessionStorage.setItem('selectedMood', this.dataset.mood);

      // Redirect to the loading page
      window.location.href = 'loading2.html';
    });
  });
});

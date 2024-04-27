document.addEventListener('DOMContentLoaded', function() {
  console.log("DOMContentLoaded event fired"); // Check if DOMContentLoaded event is fired

  const yesButton = document.getElementById('yesBtn');
  const noButton = document.getElementById('noBtn');

  console.log("Yes button:", yesButton); // Check if the yesButton variable is correctly assigned
  console.log("No button:", noButton); // Check if the noButton variable is correctly assigned

  // Event listener for the "Yes" button
  yesButton.addEventListener('click', function() {
    console.log("Yes button clicked"); // Check if the click event for the "Yes" button is triggered
    // Redirect to the mood selection page
    window.location.href = 'mood.html';
  });

  // Event listener for the "No" button
  noButton.addEventListener('click', function() {
    console.log("No button clicked"); // Check if the click event for the "No" button is triggered
    // Redirect to the liked songs page
    window.location.href = 'endplaylist.html';
  });
});

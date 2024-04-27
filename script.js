function showLoadingPage(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const firstNameInput = document.getElementById('fname');
  const lastNameInput = document.getElementById('lname');

  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;

  // Option 1: Pass form values as query parameters
  const url = `loading.html?fname=${encodeURIComponent(firstName)}&lname=${encodeURIComponent(lastName)}`;
  window.location.href = url;

  // Option 2: Store form values in localStorage (or sessionStorage)
  // localStorage.setItem('firstName', firstName);
  // localStorage.setItem('lastName', lastName);
  // window.location.href = 'loading.html';
}

// Get references to the form and input fields
const form = document.getElementById('myForm');
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');

// Add an event listener to the form's submit event
form.addEventListener('submit', showLoadingPage);

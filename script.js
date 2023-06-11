// script.js
document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault();
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    var message = document.getElementById('messageInput').value;

    // Perform form validation or data submission logic here

    // Clear form fields after submission
    document.getElementById('nameInput').value = '';
    document.getElementById('emailInput').value = '';
    document.getElementById('messageInput').value = '';

    alert('Thank you for your message!');
});

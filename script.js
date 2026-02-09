let button = document.getElementById('contactme');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let body = document.querySelector('body')

button.addEventListener('click', function() {
 alert('my name is ' + nameInput.value + ' ' + emailInput.value) 
 body.style.backgroundColor = 'brown'
});
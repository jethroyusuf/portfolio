// let button = document.getElementById('contactme');
// let nameInput = document.getElementById('name');
// let emailInput = document.getElementById('email');
// let body = document.querySelector('body')

// button.addEventListener('click', function() {
//  alert('my name is ' + nameInput.value + ' ' + emailInput.value) 
//  body.style.backgroundColor = 'brown'
// });


// alert message for email, name and message input
let button = document.getElementById('contactme');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let messageInput = document.getElementById('message');

button.addEventListener('click', function(){
    alert('My name is ' + nameInput.value + '\n' + 'And my email is ' + emailInput.value  + '\n' + 'This is my message. ' + messageInput.value)
});


// Activating the Hamburger 
const hamburger = document.querySelector('.nav-hamburger')
const navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

//to remove the menu and hamburger when you click any of the links
document.querySelectorAll('.nav-link').forEach(function(n) {    //can also be written as .forEach(n => n.addEventListener ('click')).....   
    n.addEventListener('click', function(){
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    })
})
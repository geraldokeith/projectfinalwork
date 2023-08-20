const sideMenu = document.querySelector("aside")
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")
const themeToggler = document.querySelector(".theme-toggler")

// Show Sidebar
menuBtn.addEventListener('click', ()=>{
    sideMenu.style.display = 'block';
}
)
// Close Sidebar
closeBtn.addEventListener('click', ()=>{
    sideMenu.style.display = 'none';
})

//Change Theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
}
)


// var usernameEl = document.getElementById('username');
// var emailEl = document.getElementById('email');
// var passwordEl = document.getElementById('password');
// var confirmPasswordEl = document.getElementById('confirm-password');

// var form = document.getElementById('signup');

// var showError = function(input, message) {
//     var formField = input.parentElement;

//     formField.classList.remove('success');
//     formField.classList.add('error');

//     var error = formField.querySelector('small');
//     error.textContent = message;
// };


// var showSuccess = function(input) {
//     var formField = input.parentElement;

//     formField.classList.remove('error');
//     formField.classList.add('success');

//     var error = formField.querySelector('small');
//     error.textContent = '';
// };



// var isEmailValid = function(email) {
//     var re = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
//     return re.test(email); 
// };


// var isPasswordSecure = function(password) {
//     var re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
//     return re.test(password);
// };


// var isRequired = function(value) {
//     if (value === '')
//         return false;
//     else
//         return true;
// };

// var isBetween = function(length, min, max) { 
//     if(length < min || length > max)
//         return false;
//     else
//         return true;
// };

// var checkUsername = function() {
    
//     var valid = false;
    
//     var min = 6,
//         max = 25;
    
//     var username = usernameEl.value.trim();
    
//     if (!isRequired(username)) {
//         showError(usernameEl, 'Username cannot be blank.'); 
//     }    
//     else if (!isBetween(username.length, min, max)) {
//         showError(usernameEl, 'Username must be between 6 and 25 characters.') 
//     } 
//     else {
//         showSuccess(usernameEl); 
//         valid = true;
//     }
//     return valid;
// };


// var checkEmail = function() {
//     var valid = false; 
//     var email = emailEl.value.trim(); 

//     if (!isRequired(email)) 
//     {
//         showError(emailEl, 'Email cannot be blank.'); 
//     } 
//     else if (!isEmailValid(email)) 
//     {
//         showError(emailEl, 'Email is not valid.');  
//     }
//     else 
//     { 
//         showSuccess(emailEl); 
//         valid = true;
//     }
//     return valid;
// };


// var checkPassword = function() {
    
//     var valid = false;
    
//     var password = passwordEl.value.trim();
    
//     if (!isRequired(password)) 
//     {
//         showError(passwordEl, 'Password cannot be blank.');  
//     } 
//     else if (!isPasswordSecure(password)) 
//     {
//         showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)'); 
//     } 
//     else 
//     {
//         showSuccess(passwordEl); 
//         valid = true;
//     }
//     return valid;
// };

// var checkConfirmPassword = function() {
    
//     var valid = false;  
    
//     var confirmPassword = confirmPasswordEl.value.trim(); 
//     var password = passwordEl.value.trim();
    
//     if (!isRequired(confirmPassword)) 
//     {
//     showError(confirmPasswordEl, 'Please enter the password again'); 
//     } 
//     else if (password !== confirmPassword) 
//     {
//     showError(confirmPasswordEl, 'The password does not match'); 
//     } 
//     else 
//     {
//     showSuccess(confirmPasswordEl); 
//     valid = true;
//     }
//     return valid; 
// };

// form.addEventListener('submit', function (e) 
// {
//     e.preventDefault();
    
//     var isUsernameValid = checkUsername(); 
//     var isEmailValid = checkEmail(); 
//     var isPasswordValid = checkPassword(); 
//     var isConfirmPasswordValid = checkConfirmPassword();
    
//     var isFormvalid = isUsernameValid 
//     && isEmailValid 
//     && isPasswordValid 
//     && isConfirmPasswordValid;
//     if (isFormvalid) 
//     {
//         var username = usernameEl.value.trim();
//         alert(username + ', You Have Successfully Submitted The Form!');
//     }
// });


// const debounce = (fn, delay = 500) => {
//     let timeoutId; 
//     return (...args) => {
//     if (timeoutId) {
//         clearTimeout(timeoutId);
//     }
//     timeoutId = setTimeout(() => {
//         fn.apply(null, args) 
//     }, delay);
// };
// };

// form.addEventListener('input', debounce(function (e) 
// { 
//     switch (e.target.id) 
//     { 
//     case 'username':
//         checkUsername();
//     break; 
//     case 'email':
//         checkEmail();
//     break; 
//     case 'password':
//         checkPassword();
//     break; 
//     case 'confirm-password':
//         checkConfirmPassword(); 
//     break;
//     }
// }));




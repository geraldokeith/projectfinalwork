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


// form validation
// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const lastname = document.getElementById('lastname');
// const email = document.getElementById('email');
// const telphoneInput = document.getElementById("telphone");


// const password = document.getElementById('password');
// const cpassword = document.getElementById('cpassword');

// form.addEventListener('submit', (event) =>{
//     event.preventDefault();

//     Validate();
// })

// const sendData = (usernameVal, sRate, Count) => {
//     if(sRate === Count){
//         swal("Hello " + usernameVal , "You are Registered", "success");
//     }
// }

// const SuccessMsg = (usernameVal) => {
//     let formContr = document.getElementsByClassName('form-control');
//     var Count = formContr.length - 1;
//     for(var i = 0; i < formContr.length; i++){
//         if(formContr[i].className === "form-control success"){
//             var sRate = 0 + i;
//             console.log(sRate);
//             sendData(usernameVal, sRate, Count);
//         }
//         else{
//             return false;
//         }
//     }
// }


// const isEmail = (emailVal) =>{
//     var atSymbol = emailVal.indexOf('@');
//     if(atSymbol < 1) return false;
//     var dot = emailVal.lastIndexOf('.');
//     if(dot <= atSymbol + 2) return false;
//     if(dot === emailVal.length -1) return false;
//     return true;
// }

// function Validate(){
//     const usernameVal = username.value.trim();
//     const lastnameVal = lastname.value.trim();
//     const emailVal = email.value.trim();
//     const telphoneValue = telphoneInput.value.trim();
//     const passwordVal = password.value.trim();
//     const cpasswordVal = cpassword.value.trim();

//     //username
//     if(usernameVal === ""){
//         setErrorMsg(username, 'first name cannot be blank');
//     }
//     else if(usernameVal.length <=2){
//         setErrorMsg(username, 'min 3 char');
//     }
//     else{
//         setSuccessMsg(username);
//     }

//     //last name

//     if(lastnameVal === ""){
//         setErrorMsg(lastname, 'last name cannot be blank');
//     }
//     else if(lastnameVal.length <=2){
//         setErrorMsg(lastname, 'min 3 char');
//     }
//     else{
//         setSuccessMsg(lastname);
//     }

//     //email
//     if(emailVal === ""){
//         setErrorMsg(email, 'email cannot be blank');
//     }
//     else if(!isEmail(emailVal)){
//         setErrorMsg(email, 'email is not valid');
//     }
//     else{
//         setSuccessMsg(email);
//     }
//     // telphone
//     if (telphoneValue.length < 10) {
//         setErrorMessage("Telephone must be at least 10 characters.");
//         setInvalid();
//         return false;
//       } else {
//         setValid();
//         return true;
//       }
//       // Function to display error message and set error style
// function setErrorMessage(message) {
//     const small = telphoneInput.parentElement.querySelector("small");
//     small.innerText = message;
//   }
  
//   function setInvalid() {
//     const formControl = telphoneInput.parentElement;
//     formControl.className = "form-control error";
//   }
  
//   // Function to set valid style
//   function setValid() {
//     const formControl = telphoneInput.parentElement;
//     formControl.className = "form-control success";
//   }
  
//   // Event listener for form submission
//   form.addEventListener("submit", function (event) {
//     event.preventDefault();
    
//     // Validate the telephone input
//     const istelphoneValid = validatetelphone();
  
//     // If all inputs are valid, submit the form
//     if (istelphoneValid) {
//       alert("Form submitted successfully!");
//       // You can submit the form to the server here.
//     }
//   });
//     //password
//     if(passwordVal === ""){
//         setErrorMsg(password, 'password cannot be blank');
//     }
//     else if(passwordVal.length <= 7){
//         setErrorMsg(password, 'min 8 char');
//     }
//     else{
//         setSuccessMsg(password);
//     }

//     //confirm password
//     if(cpasswordVal === ""){
//         setErrorMsg(cpassword, 'confirm password cannot be blank');
//     }
//     else if(passwordVal != cpasswordVal){
//         setErrorMsg(cpassword, 'Not Matched!');
//     }
//     else{
//         setSuccessMsg(cpassword);
//     }
//     SuccessMsg(usernameVal);


// }

// function setErrorMsg(input, errormsgs){
//     const formControl = input.parentElement;
//     const small = formControl.querySelector('small');
//     formControl.className = "form-control error";
//     small.innerText = errormsgs;
// }

// function setSuccessMsg(input){
//     const formControl = input.parentElement;
//     formControl.className = "form-control success";
// }
var usernameEl = document.getElementById('username');
var emailEl = document.getElementById('email');
var passwordEl = document.getElementById('password');
var confirmPasswordEl = document.getElementById('confirm-password');

var form = document.getElementById('signup');

var showError = function(input, message) {
    var formField = input.parentElement;

    formField.classList.remove('success');
    formField.classList.add('error');

    var error = formField.querySelector('small');
    error.textContent = message;
};


var showSuccess = function(input) {
    var formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    var error = formField.querySelector('small');
    error.textContent = '';
};



var isEmailValid = function(email) {
    var re = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    return re.test(email); 
};


var isPasswordSecure = function(password) {
    var re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};


var isRequired = function(value) {
    if (value === '')
        return false;
    else
        return true;
};

var isBetween = function(length, min, max) { 
    if(length < min || length > max)
        return false;
    else
        return true;
};

var checkUsername = function() {
    
    var valid = false;
    
    var min = 6,
        max = 25;
    
    var username = usernameEl.value.trim();
    
    if (!isRequired(username)) {
        showError(usernameEl, 'Username cannot be blank.'); 
    }    
    else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, 'Username must be between 6 and 25 characters.') 
    } 
    else {
        showSuccess(usernameEl); 
        valid = true;
    }
    return valid;
};


var checkEmail = function() {
    var valid = false; 
    var email = emailEl.value.trim(); 

    if (!isRequired(email)) 
    {
        showError(emailEl, 'Email cannot be blank.'); 
    } 
    else if (!isEmailValid(email)) 
    {
        showError(emailEl, 'Email is not valid.');  
    }
    else 
    { 
        showSuccess(emailEl); 
        valid = true;
    }
    return valid;
};


var checkPassword = function() {
    
    var valid = false;
    
    var password = passwordEl.value.trim();
    
    if (!isRequired(password)) 
    {
        showError(passwordEl, 'Password cannot be blank.');  
    } 
    else if (!isPasswordSecure(password)) 
    {
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)'); 
    } 
    else 
    {
        showSuccess(passwordEl); 
        valid = true;
    }
    return valid;
};

var checkConfirmPassword = function() {
    
    var valid = false;  
    
    var confirmPassword = confirmPasswordEl.value.trim(); 
    var password = passwordEl.value.trim();
    
    if (!isRequired(confirmPassword)) 
    {
    showError(confirmPasswordEl, 'Please enter the password again'); 
    } 
    else if (password !== confirmPassword) 
    {
    showError(confirmPasswordEl, 'The password does not match'); 
    } 
    else 
    {
    showSuccess(confirmPasswordEl); 
    valid = true;
    }
    return valid; 
};

form.addEventListener('submit', function (e) 
{
    e.preventDefault();
    
    var isUsernameValid = checkUsername(); 
    var isEmailValid = checkEmail(); 
    var isPasswordValid = checkPassword(); 
    var isConfirmPasswordValid = checkConfirmPassword();
    
    var isFormvalid = isUsernameValid 
    && isEmailValid 
    && isPasswordValid 
    && isConfirmPasswordValid;
    if (isFormvalid) 
    {
        var username = usernameEl.value.trim();
        alert(username + ', You Have Successfully Submitted The Form!');
    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId; 
    return (...args) => {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
        fn.apply(null, args) 
    }, delay);
};
};

form.addEventListener('input', debounce(function (e) 
{ 
    switch (e.target.id) 
    { 
    case 'username':
        checkUsername();
    break; 
    case 'email':
        checkEmail();
    break; 
    case 'password':
        checkPassword();
    break; 
    case 'confirm-password':
        checkConfirmPassword(); 
    break;
    }
}));
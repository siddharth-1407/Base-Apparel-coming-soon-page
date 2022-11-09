
const submitBtn = document.getElementById('submit');
const errorIcon = document.getElementById('icon-error');
const errorText = document.getElementById('error-text');

const validate = (e) => {
    e.preventDefault();
    const emailAddress = document.getElementById('email');
    if(emailAddress.value === ""){
        errorIcon.style.display = "block"; // displays error icon
        emailAddress.focus();
        return false;
    }
    if(!emailIsValid(emailAddress.value)){
        errorIcon.style.display = "block"; // displays error icon
        errorText.style.display = "block"; // displays error text
        emailAddress.focus();
        emailAddress.classList.add('focused'); //displays red border if email is invalid
        return false;
    }

    errorIcon.style.display = "none";
    errorText.style.display = "none";
    emailAddress.classList.remove('focused');
    console.log('email is valid');
    return true; //email gets submited 
}
const emailIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
}

submitBtn.addEventListener('click', validate);
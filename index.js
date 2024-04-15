function handleSignupFormSubmit(e) {
    e.preventDefault();
}

    
    const signupForm = document.getElementById('signupForm');

    const submitButton = document.getElementById('submit');
    
    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Form submission event listener triggered!');
    
        const formData = new FormData(signupForm);
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const email = formData.get('email');
        const password = formData.get('password');

        console.log('firstName', firstName);
        console.log('lastName', lastName);
        console.log('password', password);
        console.log('email', email);

        const firstNameErrorMessage = validateFirstName(firstName);
        const lastNameErrorMessage = validateLastName(lastName);
    
        const emailErrorMessage = validateEmail(email);
        const passwordErrorMessage = validatePassword(password);

        const firstNameErrorMessageElement = document.getElementById('first-name-message');
        firstNameErrorMessageElement.innerText = firstNameErrorMessage;

        const lastNameErrorMessageElement = document.getElementById('last-name-message');
        lastNameErrorMessageElement.innerText = lastNameErrorMessage;
    
        const emailErrorMessageElement = document.getElementById('email-message');
        emailErrorMessageElement.innerText = emailErrorMessage;
    
        const passwordErrorMessageElement = document.getElementById('password-message');
        passwordErrorMessageElement.innerText = passwordErrorMessage;
    });

    function validateFirstName(firstName) {
        if (!firstName) {
            return 'First Name is required';
        }
        return '';
    }

    function validateLastName(lastName) {
        if(!lastName) {
            return 'Last Name is required';
        }
        return '';
    }
    
    function validateEmail(email) {
        if (!email) return 'Email is required';
    
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!isValidEmail.test(email)) {
            return 'Please enter a valid email';
        }
        return '';
    }
    
    function validatePassword(password) {
        const minLength = 10;
    
        if (!password) {
            return 'Password is required';
        }
    
        if (password.length < minLength) {
            return `Please enter a password that is at least ${minLength} characters long`;
        }
    
        const hasCapitalLetter = /[A-Z]/;
        if (!hasCapitalLetter.test(password)) {
            return 'Please use at least one capital letter';
        }
    
        const hasNumber = /\d/;
        if (!hasNumber.test(password)) {
            return 'Please use at least one number';
        }
    
        return '';
    }


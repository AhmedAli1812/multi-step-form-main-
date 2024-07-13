function validateForm() {
    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    
    // Get error message elements
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');
    
    // Initialize form validity
    let isFormValid = true;
    
    // Validate Name
    if (name.value.trim() === '') {
        name.classList.add('error');
        nameError.style.display = 'block';
        isFormValid = false;
    } else {
        name.classList.remove('error');
        nameError.style.display = 'none';
    }
    
    // Validate Email
    if (email.value.trim() === '') {
        email.classList.add('error');
        emailError.style.display = 'block';
        isFormValid = false;
    } else {
        email.classList.remove('error');
        emailError.style.display = 'none';
    }
    
    // Validate Phone
    if (phone.value.trim() === '') {
        phone.classList.add('error');
        phoneError.style.display = 'block';
        isFormValid = false;
    } else {
        phone.classList.remove('error');
        phoneError.style.display = 'none';
    }
    
    // If form is valid, you can submit it or proceed to the next step
    if (isFormValid) {
        window.location.href = "/select.html";
        // You can add your form submission logic here
    }
}
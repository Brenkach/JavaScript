// Функція для перемикання між формами
function showForm(formType) {
    const registrationFormContainer = document.getElementById('registration-form-container');
    const loginFormContainer = document.getElementById('login-form-container');
    const registrationTab = document.getElementById('registration-tab');
    const loginTab = document.getElementById('login-tab');
  
    if (formType === 'registration') {
      registrationFormContainer.style.display = 'block';
      loginFormContainer.style.display = 'none';
      registrationTab.classList.add('active');
      loginTab.classList.remove('active');
    } else {
      registrationFormContainer.style.display = 'none';
      loginFormContainer.style.display = 'block';
      loginTab.classList.add('active');
      registrationTab.classList.remove('active');
    }
  }
  
  // Валідація форми реєстрації
  function validateRegistrationForm(event) {
    event.preventDefault(); // Запобігаємо відправленню форми
  
    let isValid = true;
  
    // Перевірка First Name
    const firstName = document.getElementById('first-name');
    const firstNameError = document.getElementById('first-name-error');
    if (firstName.value.length < 3 || firstName.value.length > 15) {
      firstName.classList.add('invalid');
      firstNameError.textContent = 'First Name must be between 3 and 15 characters.';
      isValid = false;
    } else {
      firstName.classList.remove('invalid');
      firstName.classList.add('valid');
      firstNameError.textContent = '';
    }
  
    // Перевірка Last Name
    const lastName = document.getElementById('last-name');
    const lastNameError = document.getElementById('last-name-error');
    if (lastName.value.length < 3 || lastName.value.length > 15) {
      lastName.classList.add('invalid');
      lastNameError.textContent = 'Last Name must be between 3 and 15 characters.';
      isValid = false;
    } else {
      lastName.classList.remove('invalid');
      lastName.classList.add('valid');
      lastNameError.textContent = '';
    }
  
    // Перевірка Email
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email.value)) {
      email.classList.add('invalid');
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    } else {
      email.classList.remove('invalid');
      email.classList.add('valid');
      emailError.textContent = '';
    }
  
    // Перевірка пароля
    const password = document.getElementById('password');
    const passwordError = document.getElementById('password-error');
    if (password.value.length < 6) {
      password.classList.add('invalid');
      passwordError.textContent = 'Password must be at least 6 characters.';
      isValid = false;
    } else {
      password.classList.remove('invalid');
      password.classList.add('valid');
      passwordError.textContent = '';
    }
  
    // Перевірка підтвердження пароля
    const confirmPassword = document.getElementById('confirm-password');
    const confirmPasswordError = document.getElementById('confirm-password-error');
    if (confirmPassword.value !== password.value) {
      confirmPassword.classList.add('invalid');
      confirmPasswordError.textContent = 'Passwords do not match.';
      isValid = false;
    } else {
      confirmPassword.classList.remove('invalid');
      confirmPassword.classList.add('valid');
      confirmPasswordError.textContent = '';
    }
  
    // Перевірка телефону
    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phone-error');
    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phone.value)) {
      phone.classList.add('invalid');
      phoneError.textContent = 'Phone number must be in the format +380XXXXXXXXX.';
      isValid = false;
    } else {
      phone.classList.remove('invalid');
      phone.classList.add('valid');
      phoneError.textContent = '';
    }
  
    // Перевірка дати народження
    const birthdate = document.getElementById('birthdate');
    const birthdateError = document.getElementById('birthdate-error');
    const birthDateValue = new Date(birthdate.value);
    const today = new Date();
    const age = today.getFullYear() - birthDateValue.getFullYear();
    if (age < 12 || birthDateValue > today) {
      birthdate.classList.add('invalid');
      birthdateError.textContent = 'You must be at least 12 years old.';
      isValid = false;
    } else {
      birthdate.classList.remove('invalid');
      birthdate.classList.add('valid');
      birthdateError.textContent = '';
    }
  
    // Перевірка статі
    const sex = document.getElementById('sex');
    const sexError = document.getElementById('sex-error');
    if (sex.value === '') {
      sex.classList.add('invalid');
      sexError.textContent = 'Please select your gender.';
      isValid = false;
    } else {
      sex.classList.remove('invalid');
      sex.classList.add('valid');
      sexError.textContent = '';
    }
  
    // Перевірка країни
    const country = document.getElementById('country');
    const countryError = document.getElementById('country-error');
    if (country.value === '') {
      country.classList.add('invalid');
      countryError.textContent = 'Please select your country.';
      isValid = false;
    } else {
      country.classList.remove('invalid');
      country.classList.add('valid');
      countryError.textContent = '';
    }
  
    // Перевірка міста
    const city = document.getElementById('city');
    const cityError = document.getElementById('city-error');
    if (city.value === '') {
      city.classList.add('invalid');
      cityError.textContent = 'Please select your city.';
      isValid = false;
    } else {
      city.classList.remove('invalid');
      city.classList.add('valid');
      cityError.textContent = '';
    }
  
    // Якщо все валідно
    if (isValid) {
      alert('Реєстрація пройшла успішно!');
      // Очистити форму після успішної реєстрації
      document.getElementById('registration-form').reset();
    }
  }
  
  // Заповнення міста залежно від країни
  function populateCities() {
    const country = document.getElementById('country').value;
    const citySelect = document.getElementById('city');
    citySelect.innerHTML = '<option value="">Select City</option>'; // Скидаємо місто
  
    if (country === 'ukraine') {
      const cities = ['Kyiv', 'Lviv', 'Odessa'];
      cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
      });
    }
  }
  
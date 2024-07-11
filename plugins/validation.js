// plugins/validation.js

export default ({ app }, inject) => {
  // Validation functions
  const validateUsername = (username) => {
    const regex = /^[a-zA-Z0-9]{8,30}$/;
    return regex.test(username);
  };

  const validatePassword = (password) => {
    const regex = /^[a-zA-Z0-9]{8,30}$/;
    return regex.test(password);
  };

  const validatePhone = (phone) => {
    const regex = /^0[0-9]{9}$/;
    return regex.test(phone);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  inject('validate', {
    username: validateUsername,
    password: validatePassword,
    phone: validatePhone,
    email: validateEmail,
  });

};

// plugins/validation.js



// plugins/validation.js

export default ({ app }, inject) => {
  // Validation functions
  const validateUsername = (username) => {
    const regex = /^[a-zA-Z0-9]{8,30}$/;
    return regex.test(username);
  };
  const validateshopname = (shopname) => {
    const regex = /^[a-zA-Z0-9]{8,30}$/;
    return regex.test(shopname);
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
    const thaiRegex = /[ก-ฮ]/; // ตรวจสอบว่ามีตัวอักษรภาษาไทยหรือไม่
    return regex.test(email) && !thaiRegex.test(email);
  };

  const validateName = (name) => {
    const regex = /^[a-zA-Z\s]{2,50}$/;
    return regex.test(name);
  };
  const validatefirstName = (firstName) => {
    const regex = /^[a-zA-Z\s]{2,50}$/;
    return regex.test(firstName);
  };
  const validatelastName = (lastName) => {
    const regex = /^[a-zA-Z\s]{2,50}$/;
    return regex.test(lastName);
  };
  const validateOtherContact = (otherContact) => {
    // Add your validation logic here
    return otherContact.length > 0; // Example validation
  };

  const validateIdCard = (idCard) => {
    const regex = /^[0-9]{13}$/;
    return regex.test(idCard);
  };
  const validateidCardBack = (idCardBack) => {
    const regex = /^[a-zA-Z0-9-]+$/; // ตรวจสอบให้มีตัวอักษรภาษาอังกฤษ ตัวเลข และเครื่องหมาย
    return regex.test(idCardBack);
  };
  const validateImageUrl = (imageUrl) => {
    const regex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif))$/i;
    return regex.test(imageUrl);
  };

  inject('validate', {
    username: validateUsername,
    password: validatePassword,
    shopname: validateshopname,
    phone: validatePhone,
    email: validateEmail,
    name: validateName,
    firstName: validatefirstName,
    lastName: validatelastName,
    otherContact: validateOtherContact,
    idCard: validateIdCard,
    idCardBack: validateidCardBack,
    imageUrl: validateImageUrl,
  });
};

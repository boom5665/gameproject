export default ({ app }, inject) => {
  // Validation functions
  const validateUsername = (username) => {
    const regex = /^[a-zA-Z0-9]{8,30}$/;
    return regex.test(username);
  };
  const validateShopname = (shopname) => { // แก้ไขชื่อฟังก์ชันเป็น CamelCase
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
  const validatePROMPTPAYNumber = (PROMPTPAYNumber) => {
    const regex = /^(0[0-9]{9}|[0-9]{13})$/;
    return regex.test(PROMPTPAYNumber);
  };
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const thaiRegex = /[ก-ฮ]/; // ตรวจสอบว่ามีตัวอักษรภาษาไทยหรือไม่
    return regex.test(email) && !thaiRegex.test(email);
  };
  const validateName = (name) => {
    const regex = /^(?!\s)[\s\S]{1,100}(?<!\s)$/;
    return regex.test(name);
  };
  const validateFirstName = (firstName) => { // แก้ไขชื่อฟังก์ชันเป็น CamelCase
    const regex = /^[a-zA-Zก-ฮะ-์\s]{2,30}$/u;
    return regex.test(firstName);
  };
  const validateLastName = (lastName) => { // แก้ไขชื่อฟังก์ชันเป็น CamelCase
    const regex = /^[a-zA-Zก-ฮะ-์\s]{2,30}$/u;
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
  const validateIdCardBack = (idCardBack) => { // แก้ไขชื่อฟังก์ชันเป็น CamelCase
    const regex = /^[A-Z]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9]{2}$/; // ตรวจสอบรูปแบบพร้อมขีด
    return regex.test(idCardBack);
  };

  const validateImageUrl = (imageUrl) => {
    const regex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif))$/i;
    return regex.test(imageUrl);
  };
  const validateFileSize = (file, maxSizeMB) => {
    const maxSize = maxSizeMB * 1024 * 1024; // แปลง MB เป็น bytes
    return file.size <= maxSize;
  };
  inject('validate', {
    username: validateUsername,
    password: validatePassword,
    shopname: validateShopname,
    PROMPTPAYNumber: validatePROMPTPAYNumber,
    phone: validatePhone,
    email: validateEmail,
    name: validateName,
    firstName: validateFirstName,
    lastName: validateLastName,
    otherContact: validateOtherContact,
    idCard: validateIdCard,
    idCardBack: validateIdCardBack,
    imageUrl: validateImageUrl,
    file: validateFileSize,
  });
};

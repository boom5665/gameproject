// plugins/errorHandler.js

export default ({ app }, inject) => {
  inject('handleError', (error) => {
    if (error.response && error.response.data) {
      const errorData = error.response.data;

      if (errorData.code === 50001) {
        alert("กรุณากรอกยูสเซอร์เนมไม่ต่ำกว่า 4 ตัวอักษรและไม่เกิน 12 ตัวอักษร");
      } else if (errorData.code === 3001) {
        alert("พบข้อมูลผู้ใช้ซ้ำ กรุณาลองใหม่อีกครั้ง");
      } else if (errorData.code === 3012) {
        alert("พบเลขบัตรประชาชนซ้ำ ไม่สามารถอัพเดตได้กรุณาเปลี่ยนเลขบัตรประชาชน");
      } else if (errorData.code === 3013) {
        alert("เบอร์นี้มีผู้ใช้งานแล้ว");
      } else if (errorData.code === 3011) {
        alert("พบอีเมลซ้ำ ไม่สามารถอัพเดตได้กรุณาเปลี่ยนอีเมล");
      } else if (errorData.code === 50002) {
        alert("กรุณากรอกเบอร์โทรให้ตรงตามรูปแบบ");
      } else {
        alert("ลงทะเบียนไม่สำเร็จ โปรดตรวจสอบข้อมูลที่คุณป้อนแล้วลองอีกครั้ง");
      }
    } else {
      console.error("Error:", error.message);
      alert("ลงทะเบียนไม่สำเร็จ โปรดตรวจสอบข้อมูลที่คุณป้อนแล้วลองอีกครั้ง");
    }
  });
};

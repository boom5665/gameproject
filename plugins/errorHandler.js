export default ({ app }, inject) => {
  inject('handleError', (error) => {
    if (error.response && error.response.data) {
      const errorData = error.response.data;
      const statusCode = error.response.status;

      // ตรวจสอบรหัสสถานะ (status code) ก่อน
      if (statusCode === 404) {
        alert("ไม่พบ URL ที่ร้องขอ");
      } else if (statusCode === 406) {
        alert(errorData.msg.th);
      } else {
        // ตรวจสอบรหัสข้อผิดพลาด (error code) ที่กำหนดในข้อมูลตอบกลับ
        switch (errorData.code) {
          case 50001:
            alert("กรุณากรอกยูสเซอร์เนมไม่ต่ำกว่า 4 ตัวอักษรและไม่เกิน 12 ตัวอักษร");
            break;
          case 3001:
            alert("พบข้อมูลผู้ใช้ซ้ำ กรุณาลองใหม่อีกครั้ง");
            break;
          case 3008:
            alert("ไม่พบไฟล์");
            break;
          case 3012:
            alert("พบเลขบัตรประชาชนซ้ำ ไม่สามารถอัพเดตได้กรุณาเปลี่ยนเลขบัตรประชาชน");
            break;
          case 3013:
            alert("เบอร์นี้มีผู้ใช้งานแล้ว");
            break;
          case 3011:
            alert("พบอีเมลซ้ำ ไม่สามารถอัพเดตได้กรุณาเปลี่ยนอีเมล");
            break;
          case 10008:
            alert(errorData.msg.th);
            break;
          case 50002:
            alert("กรุณากรอกเบอร์โทรให้ตรงตามรูปแบบ");
            break;
          default:
            alert("โปรดตรวจสอบข้อมูลที่คุณป้อนแล้วลองอีกครั้ง");
        }
      }
    } else {
      console.error("Error:", error.message);
      alert("โปรดตรวจสอบข้อมูลที่คุณป้อนแล้วลองอีกครั้ง");
    }
  });
};

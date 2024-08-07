import Swal from 'sweetalert2';

export default ({ app }, inject) => {
  inject('handleResponse', async (response) => {
    console.log(response.data.code);
    switch (response.data.code) {
      case 200:
        Swal.fire({
          title: "เข้าสู่ระบบสำเร็จ",
          icon: 'success',
          timer: 1000, // หน่วงเวลา 1.5 วินาที
          timerProgressBar: true,
          showConfirmButton: false // ไม่แสดงปุ่ม OK
        }).then(() => {
          app.router.push("/"); // รีไดเรคไปยังหน้า index
        });
        break;
      case 70001:
        Swal.fire({
          title: "ไม่สามารถบันทึกรูปภาพสินค้าได้",
          icon: 'error',
          timer: 1000, // หน่วงเวลา 1.5 วินาที
          timerProgressBar: true,
          showConfirmButton: false // ไม่แสดงปุ่ม OK
        }).then(() => {
          app.router.push("/MarketMyAdd"); // รีไดเรคไปยังหน้า index
        });
        break;
      default:
        Swal.fire({
          title: "เกิดข้อผิดพลาด",
          text: "โปรดตรวจสอบข้อมูลที่คุณป้อนแล้วลองอีกครั้ง",
          icon: 'error',
          confirmButtonText: 'OK',
        });
    }
  });

  inject('handleError', (error) => {
    if (error.response && error.response.data) {
      const errorData = error.response.data;
      const statusCode = error.response.status;

      if (statusCode === 404) {
        Swal.fire({
          title: "ไม่พบ URL ที่ร้องขอ",
          icon: 'error',
          confirmButtonText: 'OK',
        });
      } else if (statusCode === 406) {
        Swal.fire({
          title: errorData.msg.th,
          icon: 'error',
          confirmButtonText: 'OK',
        });
      } else {
        switch (errorData.code) {
          case 70001:
            Swal.fire({
              title: "ไม่สามารถบันทึกรูปภาพสินค้าได้",
              icon: 'error',
              confirmButtonText: 'OK',
            });
            break;
          case 50001:
            Swal.fire({
              title: "กรุณากรอกยูสเซอร์เนมไม่ต่ำกว่า 4 ตัวอักษรและไม่เกิน 12 ตัวอักษร",
              icon: 'error',
              confirmButtonText: 'OK',
            });
            break;
          case 3001:
            Swal.fire({
              title: "พบข้อมูลผู้ใช้ซ้ำ กรุณาลองใหม่อีกครั้ง",
              icon: 'error',
              confirmButtonText: 'OK',
            });
            break;
          case 3008:
            Swal.fire({
              title: "ไม่พบไฟล์",
              icon: 'error',
              confirmButtonText: 'OK',
            });
            break;
          case 3012:
            Swal.fire({
              title: "พบเลขบัตรประชาชนซ้ำ ไม่สามารถอัพเดตได้กรุณาเปลี่ยนเลขบัตรประชาชน",
              icon: 'error',
              confirmButtonText: 'OK',
            });
            break;
          case 3013:
            Swal.fire({
              title: "เบอร์นี้มีผู้ใช้งานแล้ว",
              icon: 'error',
              confirmButtonText: 'OK',
            });
            break;
          case 3011:
            Swal.fire({
              title: "พบอีเมลซ้ำ ไม่สามารถอัพเดตได้กรุณาเปลี่ยนอีเมล",
              icon: 'error',
              confirmButtonText: 'OK',
            });
            break;
          case 10008:
            Swal.fire({
              title: errorData.msg.th,
              icon: 'error',
              confirmButtonText: 'OK',
            });
            break;
          case 50002:
            Swal.fire({
              title: "กรุณากรอกเบอร์โทรให้ตรงตามรูปแบบ",
              icon: 'error',
              confirmButtonText: 'OK',
            });
            break;
          default:
            Swal.fire({
              title: "โปรดตรวจสอบข้อมูลที่คุณป้อนแล้วลองอีกครั้ง",
              icon: 'error',
              confirmButtonText: 'OK',
            });
        }
      }
    } else {
      console.error("Error:", error.message);
      Swal.fire({
        title: "โปรดตรวจสอบข้อมูลที่คุณป้อนแล้วลองอีกครั้ง",
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  });
};

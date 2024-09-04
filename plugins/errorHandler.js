import Swal from 'sweetalert2';

export default ({ app }, inject) => {
  inject('handleResponse', async (response) => {
    console.log(response.data.code);
    switch (response.data.code) {
      case 200:
        Swal.fire({
          title: "เข้าสู่ระบบสำเร็จ",
          icon: 'success',
          timer: 1000, // หน่วงเวลา 1 วินาที
          timerProgressBar: true,
          showConfirmButton: false // ไม่แสดงปุ่ม OK
        }).then(() => {
          const hasRefreshed = localStorage.getItem("hasRefreshedMarketMyshop");

          // รีไดเรคไปยังหน้า index ก่อน
          app.router.push("/");

          // ถ้ายังไม่ได้รีเฟรช
          if (hasRefreshed) {
            // ตั้งค่าสถานะว่าได้รีเฟรชหน้าแล้ว
            localStorage.setItem("hasRefreshedMarketMyshop", "true");

            // หน่วงเวลาเล็กน้อยก่อนรีเฟรชหน้าเว็บ
            setTimeout(() => {
              window.location.reload();
            }, 500); // หน่วงเวลา 1.5 วินาที
          }
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
          case 82005:
            Swal.fire({
              title: "ใส่รูปแบบของเวลาไม่ถูกต้อง",
              icon: 'error',
              confirmButtonText: 'OK',
            });
            break;
          case 82002:
            Swal.fire({
              title: "ไม่สามารถอัพเดตสถานะสินค้าให้เป็น Wait Comfirm ได้",
              icon: 'error',
              confirmButtonText: 'OK',
            });
            break;
          case 80013:
            Swal.fire({
              title: "เจ้าของร้านค้าไม่สามารถจองสินค้าของตัวเองได้",
              icon: 'error',
              timer: 3000, // หน่วงเวลา 2 วินาที
              timerProgressBar: true,
              showConfirmButton: false, // ไม่แสดงปุ่ม OK
            }).then(() => {
              window.location.href = "/";
            });

            break;
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
          case 80002:
            Swal.fire({
              title: "สินค้าไม่เพียงพอต่อการจอง",
              icon: 'error',
              timer: 2000, // หน่วงเวลา 2 วินาที
              timerProgressBar: true,
              showConfirmButton: false, // ไม่แสดงปุ่ม OK
            }).then(() => {
              window.location.href = "/";
            });
            break;
          case 3014:
            Swal.fire({
              title: "ไม่พบไฟล์",
              icon: 'error',
              timer: 2000, // หน่วงเวลา 2 วินาที
              timerProgressBar: true,
              showConfirmButton: false, // ไม่แสดงปุ่ม OK
            });
            break;
          case 82004:
            Swal.fire({
              title: "ข้อมูลการชำระเงินไม่ถูกต้อง",
              icon: 'error',
              confirmButtonText: 'OK',
            });
            break;
          case 82003:
            Swal.fire({
              title: "ไม่สามารถค้นหา Id ของ Paytransaction ได้",
              icon: 'error',
              confirmButtonText: 'OK',
            });
            break;
          case 3001:
            Swal.fire({
              title: "พบข้อมูลผู้ใช้ซ้ำ",
              icon: 'error',
              confirmButtonText: 'OK',
            });
            break;
          case 70016:
            Swal.fire({
              title: "ห้ามมีรูปภาพเกิน 6 รูป",
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
          case 70022:
            Swal.fire({
              title: "ชื่อสินค้านี้มีแล้ว",
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
      Swal.fire({
        title: "โปรดตรวจสอบข้อมูลที่คุณป้อนแล้วลองอีกครั้ง",
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  });
};

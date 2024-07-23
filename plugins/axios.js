// plugins/axios.js

export default function ({ $axios, redirect }) {
  // ตั้งค่า Axios interceptor เพื่อเพิ่ม header สำหรับการจัดการคำขอ
  $axios.onRequest(config => {
    // ตั้งค่า header 'Content-Type' เป็น application/json
    config.headers.common['Content-Type'] = 'application/json';

    // ดึง token จาก localStorage
    const token = localStorage.getItem('authToken');
    if (token) {
      // เพิ่ม header 'Authorization' ถ้ามี token
      config.headers.common['Authorization'] = `Bearer ${token}`;
    }

    return config;
  });

  // จัดการกับ error ที่เกิดจากการส่งคำขอ
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 500) {
      // รีไดเรคไปยังหน้าขอโทษเมื่อเกิดข้อผิดพลาด 500
      redirect('/sorry');
    } else if (code === 401) {
      // รีไดเรคไปยังหน้าล็อกอินเมื่อเกิดข้อผิดพลาด 401 (Unauthorized)
      redirect('/login');
    } else if (code === 403) {
      // รีไดเรคไปยังหน้าที่ไม่อนุญาตเมื่อเกิดข้อผิดพลาด 403 (Forbidden)
      redirect('/forbidden');
    }
  });
}

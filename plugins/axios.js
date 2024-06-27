// plugins/axios.js

export default function ({ $axios, redirect }) {
  // ตั้งค่า Axios interceptor เพื่อเพิ่ม header สำหรับการจัดการ CORS
  $axios.onRequest(config => {
    // ตั้งค่า header 'Access-Control-Allow-Origin' เพื่ออนุญาตให้รับคำขอจากทุกๆ โดเมน
    config.headers.common['Access-Control-Allow-Origin'] = '*';
    // ตั้งค่า header 'Content-Type' เป็น application/json
    config.headers.common['Content-Type'] = 'application/json';
    return config;
  });

  // จัดการกับ error ที่เกิดจากการส่งคำขอ
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 500) {
      redirect('/sorry');
    }
  });
}

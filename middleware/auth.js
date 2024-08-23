// middleware/auth.js
// Middleware example
export default async function ({ route, redirect, req, store }) {
  if (process.client) {
    try {
      const token = localStorage.getItem('authToken')
      if (token) {
        await store.dispatch('setAuthToken', token)
      }
      handleRedirect(token, route.path.toLowerCase(), redirect, store)
    } catch (error) {
      console.error('Error accessing localStorage:', error)
      return redirect('/')
    }
  } else if (process.server) {
    const cookies = req.headers.cookie || ''
    const token = cookies.split(';').find(c => c.trim().startsWith('authToken='))?.split('=')[1]
    if (token) {
      await store.dispatch('setAuthToken', token)
    }
    handleRedirect(token, route.path.toLowerCase(), redirect, store)
  }
}



function handleRedirect(token, path, redirect, store) {
  const allowedPaths = ['/', '/logregister', '/logforget', '/reset'];

  function isPathAllowed(url) {
    if (process.client) {
      const urlObject = new URL(url, window.location.origin); // สร้าง URL object เพื่อให้แยก path ได้ง่าย
      const path = urlObject.pathname; // ดึง path จาก URL
      return allowedPaths.includes(path); // ตรวจสอบว่า path อยู่ในรายการที่อนุญาตหรือไม่
    }
    return false; // ถ้าไม่ใช่ฝั่งลูกค้า
  }

  // ดึงค่า state จาก Vuex
  const { authToken } = store.state;

  // ใช้ switch สำหรับตรวจสอบเงื่อนไข
  switch (true) {
    case path === '/reset': {
      // อนุญาตให้เข้าถึง path `/reset` เสมอ
      console.log('Path is /reset, allowing access');
      break;
    }

    case authToken && path === '/login': {
      console.log('Token present and at /login, redirecting to /');
      return redirect('/');
    }

    case !authToken && !isPathAllowed(path) && path !== '/login': {
      console.log('No token and not allowed path, redirecting to /login');
      return redirect('/login');
    }

    default:
      // ไม่มีการรีไดเรกต์
      break;
  }
}





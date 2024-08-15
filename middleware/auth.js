// middleware/auth.js
export default async function ({ route, redirect, req, store }) {
  if (process.client) {
    try {
      // ดึงค่า authToken จาก localStorage
      const token = localStorage.getItem('authToken');
      // ตั้งค่า authToken ใน Vuex
      await store.dispatch('setAuthToken', token);
      await store.dispatch('setLogin', token ? true : false); // ตั้งค่า login ตามสถานะของ token
      await store.dispatch('setNologin', token ? false : true); // ตั้งค่า nologin ตามสถานะของ token

      handleRedirect(token, route.path.toLowerCase(), redirect, store);
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      return redirect('/');
    }
  } else if (process.server) {
    // ดึงค่า authToken จาก cookie บนเซิร์ฟเวอร์
    const token = req.headers.cookie && req.headers.cookie.split(';').find(c => c.trim().startsWith('authToken='));
    const tokenValue = token ? token.split('=')[1] : null;
    // ตั้งค่า authToken ใน Vuex
    await store.dispatch('setAuthToken', tokenValue);
    await store.dispatch('setLogin', tokenValue ? true : false);
    await store.dispatch('setNologin', tokenValue ? false : true);

    handleRedirect(tokenValue, route.path.toLowerCase(), redirect, store);
  }
}

function handleRedirect(token, path, redirect, store) {
  const allowedPaths = [
    '/', '/logregister', '/logforget',
  ];

  // ดึงค่า state จาก Vuex
  const { login, nologin, hasRedirected } = store.state;
  console.log('Current state:', { login, nologin, hasRedirected });
  console.log('Token:', token);
  console.log('Current path:', path);
  console.log('Allowed paths:', allowedPaths);

  // ถ้า hasRedirected เป็น false
  if (!hasRedirected) {
    // ถ้า login แล้ว
    if (login) {
      if (token && path === '/login') {
        console.log('Token present and at /login, redirecting to /');
        store.dispatch('setHasRedirected', true);
        return redirect('/');
      }
    }

    // ตรวจสอบเงื่อนไขเมื่อไม่ได้ login
    if (!login) {
      if (nologin) {
        if (!token && !allowedPaths.includes(path) && path !== '/login') {
          console.log('No token and not allowed path, redirecting to /login');
          store.dispatch('setHasRedirected', false);
          return redirect('/');
        }
      }
    }
  } else {
    // เมื่อ page ถูก refresh หรือ URL ถูกพิมพ์ใหม่ ให้ redirect ไปที่หน้าแรก
    console.log('Page refreshed or URL typed, redirecting to /');
    store.dispatch('setHasRedirected', false);
    return redirect('/');
  }
}

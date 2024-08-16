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
  const allowedPaths = [
    '/', '/logregister', '/logforget',
  ];

  // ดึงค่า state จาก Vuex
  const { } = store.state;
  console.log(store.state);

  console.log('Token:', store.state.authToken);
  console.log('Current path:', path);
  console.log('Allowed paths:', allowedPaths);

  // ใช้ switch สำหรับตรวจสอบเงื่อนไข
  switch (true) {
    case store.state.authToken && path === '/login': {
      console.log('Token present and at /login, redirecting to /');
      return redirect('/');
    }

    case !store.state.authToken && !allowedPaths.includes(path) && path !== '/login': {
      console.log('No token and not allowed path, redirecting to /login');
      return redirect('/login');
    }

    default:
      // ไม่มีการรีไดเรกต์
      break;
  }
}


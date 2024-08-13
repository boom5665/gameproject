let hasRedirected = false;

export default function ({ route, redirect, req }) {
  if (process.client) {
    try {
      const token = localStorage.getItem('authToken');
      handleRedirect(token, route.path.toLowerCase(), redirect);
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      return redirect('/');
    }
  } else if (process.server) {
    const token = req.headers.cookie && req.headers.cookie.split(';').find(c => c.trim().startsWith('authToken='));
    const tokenValue = token ? token.split('=')[1] : null;
    handleRedirect(tokenValue, route.path.toLowerCase(), redirect);
  }
}

function handleRedirect(token, path, redirect) {
  const allowedPaths = [
    '/', '/logregister', '/logforget',
  ];

  if (!hasRedirected) {
    if (!token && !allowedPaths.includes(path) && path !== '/login') {
      console.log('No token, redirecting to /login');
      hasRedirected = false;
      return redirect('/login');
    }

    if (token && path === '/login') {
      console.log('Token present, redirecting to /');
      hasRedirected = true;
      return redirect('/');
    }

    // if (token && !allowedPaths.includes(path)) {
    //   console.log('Token present, but path not allowed, redirecting to /');
    //   hasRedirected = true;
    //   return redirect('/');
    // }
  } else {
    // เมื่อ refresh หน้าหรือพิมพ์ URL ใดๆ ให้กลับไปหน้า home
    console.log('Page refreshed or URL typed, redirecting to /');
    hasRedirected = false;
    return redirect('/');
  }


}

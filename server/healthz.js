// server/healthz.js (Nuxt 2)
module.exports = (req, res, next) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.statusCode = 405; res.end('Method Not Allowed'); return;
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('ok');
};

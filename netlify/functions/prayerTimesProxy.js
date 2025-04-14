const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = createProxyMiddleware({
  target: 'https://mawaqit.net', // Target website
  changeOrigin: true,
  pathRewrite: {
    '^/.netlify/functions/prayer-times': '/fr/w/amt-mosquee-as-sahaba-thonon-les-bains-74200-france?showOnly5PrayerTimes=0',
  },
  onProxyRes: (proxyRes) => {
    // Remove X-Frame-Options header to allow embedding
    delete proxyRes.headers['x-frame-options'];
  },
});

exports.handler = async (event, context) => {
  return new Promise((resolve, reject) => {
    proxy(event, context, (err) => {
      if (err) {
        reject({
          statusCode: 500,
          body: 'Proxy error: ' + err.message,
        });
      } else {
        resolve({
          statusCode: 200,
          body: 'Proxy working',
        });
      }
    });
  });
};
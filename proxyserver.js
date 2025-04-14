const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy configuration
app.use(
  '/prayer-times',
  createProxyMiddleware({
    target: 'https://mawaqit.net', // Target website
    changeOrigin: true,
    pathRewrite: {
      '^/prayer-times': '/fr/w/amt-mosquee-as-sahaba-thonon-les-bains-74200-france?showOnly5PrayerTimes=0',
    },
    onProxyRes: (proxyRes) => {
      // Remove X-Frame-Options header to allow embedding
      delete proxyRes.headers['x-frame-options'];
    },
  })
);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
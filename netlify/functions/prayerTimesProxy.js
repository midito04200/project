import { createProxyMiddleware } from 'http-proxy-middleware';

const proxy = createProxyMiddleware({
  target: 'https://mawaqit.net', // Target website
  changeOrigin: true,
  pathRewrite: {
    '^/.netlify/functions/prayer-times': '', // Remove the Netlify function prefix
  },
  onProxyRes: (proxyRes) => {
    // Remove X-Frame-Options header to allow embedding
    delete proxyRes.headers['x-frame-options'];
  },
});

export const handler = (event) => {
  return new Promise((resolve, reject) => {
    const req = {
      method: event.httpMethod,
      url: event.path.replace('/.netlify/functions/prayer-times', ''), // Ensure correct path
      headers: event.headers,
      body: event.body,
    };

    const res = {
      setHeader: (name, value) => {
        headers = headers || {};
        headers[name] = value;
      },
      end: (body) => {
        resolve({
          statusCode: this.statusCode || 200,
          headers: headers || {},
          body,
        });
      },
      statusCode: 200,
    };

    proxy(req, res, (err) => {
      if (err) {
        reject({
          statusCode: 500,
          body: 'Proxy error: ' + err.message,
        });
      }
    });
  });
};
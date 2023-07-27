const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.join(__dirname, '/src'),
    },
  },
  devServer:{
    port: 4000,
    proxy: {
      "/api": {
        target: 'http://localhost:1234',
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api"
        }
      },
    }
  }
};

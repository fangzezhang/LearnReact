const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.join(__dirname, '/src'),
    },
  },
  devServer:{
    proxy: {
      "/api": {
        target: 'http://localhost:1234',
        pathRewrite: {
          "^/api": "/api"
        }
      },
    }
  }
};

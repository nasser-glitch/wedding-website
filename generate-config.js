const fs = require('fs');
const config = `window.WEDDING_CONFIG = {
  firebase: {
    apiKey: "${process.env.FIREBASE_API_KEY}",
    authDomain: "${process.env.FIREBASE_AUTH_DOMAIN}",
    projectId: "${process.env.FIREBASE_PROJECT_ID}",
    storageBucket: "${process.env.FIREBASE_STORAGE_BUCKET}",
    messagingSenderId: "${process.env.FIREBASE_MESSAGING_SENDER_ID}",
    appId: "${process.env.FIREBASE_APP_ID}"
  },
  adminHash: "${process.env.ADMIN_HASH}"
};`;
fs.writeFileSync('config.js', config);
console.log('config.js generated');

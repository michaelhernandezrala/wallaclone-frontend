const { default: storage } = require('../utils/storage');
const { default: client, setAuthorizationHeader } = require('./client');

const login = (credentials, checked) => {
  return client.post('/api/login', credentials).then(({ token }) => {
    setAuthorizationHeader(token);
    console.log('checked', checked);
    console.log(token);
    if (checked) {
      console.log('storage');
      storage.set('auth', token);
    }
  });
};

module.exports = login;

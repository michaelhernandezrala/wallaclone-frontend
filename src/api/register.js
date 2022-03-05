const { default: client } = require('./client');

const register = (credentials) => {
  console.log('credentials', credentials);
  return client.post('/api/register', credentials);
};

module.exports = register;

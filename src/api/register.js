const { default: client } = require('./client');

const register = (credentials) => {
  return client.post('/api/register', credentials);
};

module.exports = register;

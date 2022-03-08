import storage from '../utils/storage';
import client from './client';
import { setAuthorizationHeader } from './client';

const login = (credentials, checked) => {
  return client.post('/api/login', credentials).then((response) => {
    if (response.ok) {
      console.log(response);
      setAuthorizationHeader(response.token);
      console.log('checked', checked);
      console.log('token', response.token);
      if (checked) {
        storage.set('auth', response.token);
      }
    } else {
      return response;
    }
  });
};

export default login;

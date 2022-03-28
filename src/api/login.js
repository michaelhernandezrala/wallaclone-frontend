import storage from '../utils/storage';
import client from './client';
import { setAuthorizationHeader } from './client';

const login = (credentials, checked) => {
  return client.post('/api/login', credentials).then((response) => {
    if (response.ok) {
      setAuthorizationHeader(response.token);
      if (checked) {
        storage.set('auth', response.token);
      }
    }
    return response;
  });
};

export default login;

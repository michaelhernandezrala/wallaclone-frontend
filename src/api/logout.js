import storage from '../utils/storage';
import { removeAuthorizationHeader } from './client';

const logout = () => {
  removeAuthorizationHeader();
  storage.remove('auth');
};

export default logout;

import { IAuth } from '@types';
import { StorageService } from './StorageService';

class AuthService {
  auth: IAuth | undefined;

  constructor() {
    this.auth = StorageService.getItem('auth');
  }

  hasAuth = () => !!this.auth;

  getAxiosHeader = () => {
    if (!this.auth) return undefined;
    return { Authorization: `Bearer ${this.auth.accessToken}` };
  };

  getRefreshData = () => {
    if (!this.auth) return undefined;
    return { refreshToken: this.auth.refreshToken };
  };

  saveAuth = (auth: IAuth) => {
    StorageService.setItem('auth', auth);
    this.auth = auth;
  };

  removeAuth = () => {
    StorageService.removeItem('auth');
    this.auth = undefined;
  };
}

export default new AuthService();

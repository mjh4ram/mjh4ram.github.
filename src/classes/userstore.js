import { extendObservable } from 'mobx';

class UserStore {
  constructor() {
    extendObservable(this, {
      isLoggedIn: '',
      username: '',
      token: ''
    })
  }
}

export default new UserStore();

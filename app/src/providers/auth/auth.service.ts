import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs/Rx';

import { IUser } from '../../model/interfaces/user.model';

@Injectable()
export class AuthenticationService {
  private _currentUser = new BehaviorSubject<IUser|null>(null);
  currentUser = this._currentUser.asObservable();

  constructor(private http: HttpClient, private storage: Storage) {}

  getUserFromStorage(): Promise<IUser> {
    return this.storage.get('localUser')
      .then((user) => { this._currentUser.next(user); return user; }) // TODO il faudrait vérifier que les identifiants stockés soient corrects mais osef...
      .catch(err => console.log('error retrieving stored local user', err));
  }

  retrieveUserFromStorage(): Promise<IUser> {
    return this.storage.get('localUser').catch(err => console.log('error retrieving stored local user', err));
  }

  /**
   * Called on app startup, will check local storage for an existing user
   */
  checkLocalStorage() {
    this.storage.ready().then(() => this.getUserFromStorage());
  }

  login(email: string, password: string) {
    return this.http.post<IUser>('http://localhost:3000/login', { email: email, password: password })
      .map(user => {
        console.log('login response: ', user);
        this.storage.set('localUser', user);
        this._currentUser.next(user);
        return user;
      });
  }

  logout() {
    // remove user from local storage to log user out
    if (this._currentUser.getValue()) {
      if(!!this._currentUser.getValue()._id)
        this.storage.remove('localUser');
      this._currentUser.next(null);
    }
  }

  isUserRegistered(): boolean {
    return !!this._currentUser.getValue() && !!this._currentUser.getValue()._id;
  }

  isUserLogged() {
    return !!this._currentUser.getValue();
  }

  getCurrentUserValue() {
    return this._currentUser.getValue();
  }

  createTempLocalUser(name: string) {
    this._currentUser.next({ nickname: name });
    return this._currentUser.getValue();
  }
}

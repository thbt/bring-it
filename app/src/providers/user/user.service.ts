import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { AuthUserInterface } from "../../model/interfaces/auth-user.model";
import "rxjs/add/operator/catch";
import { HttpClient } from "@angular/common/http";
import { UserInterface } from "../../model/interfaces/user.model";
import { User } from "../../model/classes/user.class";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserService {

  private userURL: string;
  private _connectedUser: User = null;

  constructor(public http: HttpClient) {
  }

  /**
   * Method called to get an user by id.
   * @param {string} id
   * @returns {Observable<AuthUserInterface>}
   */
  getUserById(id: string): Observable<AuthUserInterface> {
    const url: string = `${this.userURL}/${id}`;

    //TODO add options for get request

    return this.http.get(url)
      .map(res => res)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /**
   * Method called to get an user by id.
   * @param {string} id
   * @returns {Observable<AuthUserInterface>}
   */
  getUserByEmailAndPassword(email: string, password: string): Observable<AuthUserInterface> {
    const url: string = this.userURL;
    const message = {email: email, password: password};


    return this.http.post(url, message)
      .map(res => res)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /**
   * Method made to create an user.
   * @param {Object} body
   * @returns {Observable<AuthUserInterface>}
   */
  postUser(user: AuthUserInterface): Observable<any> {
    const url: string = this.userURL;

    // TODO check if headers are correct
    let headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(url, user)
      .map((res: Response) => res)
  }

  /**
   * Method made  to update a created user.
   * @param {Object} body
   * @returns {Observable<AuthUserInterface>}
   */
  updateUser(user: AuthUserInterface): Observable<AuthUserInterface> {
    const url: string = `${this.userURL}/${user.uuid}`;
    // TODO check if headers are correct
    let headers = new Headers({'Content-Type': 'application/json'});

    this.http.put(url, user)
    return this.http.put(url, user)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /**
   * Method made to delete a created user.
   * @param {Object} body
   * @returns {Observable<AuthUserInterface>}
   */
  deleteUser(user: AuthUserInterface): Observable<AuthUserInterface> {
    const url: string = `${this.userURL}/${user.uuid}`;

    // TODO check if headers are correct
    let headers = new Headers({'Content-Type': 'application/json'});


    return this.http.delete(url)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  get connectedUser(): User {
    return this._connectedUser;
  }

  set connectedUser(value: User) {
    this._connectedUser = value;
  }

}

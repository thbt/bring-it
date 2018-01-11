import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AuthUserInterface } from "../../model/interfaces/auth-user.model";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserService {
  private loginURL: string = "http://thibaut-roy.fr:3000/login"
  private userURL: string = "http://thibaut-roy.fr:3000/users";

  constructor(public http: HttpClient) {}

  /**
   * Method made to create an user.
   * @param {Object} body
   * @returns {Observable<AuthUserInterface>}
   */
  post(user: AuthUserInterface) {
    return this.http.post(this.userURL, user);
  }


  /**
   * Method called to get an user by id.
   * @param {string} id
   * @returns {Observable<AuthUserInterface>}
   */
  getById(id: string) {
    return this.http.get<AuthUserInterface>(`${this.userURL}/${id}`);
  }

  /**
   * Method called to get an user by id.
   * @param {string} id
   * @returns {Observable<AuthUserInterface>}
   */
  getUserByEmailAndPassword(email: string, password: string) {
    const url: string = this.loginURL;
    const message = {email: email, password: password};

    return this.http.post<AuthUserInterface>(url, message);
  }

  /**
   * Method made  to update a created user.
   * @param {Object} body
   * @returns {Observable<AuthUserInterface>}
   */
  updateUser(user: AuthUserInterface) {
    const url: string = `${this.userURL}/${user._id}`;

    this.http.put(url, user)
    return this.http.put<AuthUserInterface>(url, user);
  }

  /**
   * Method made to delete a created user.
   * @param {Object} body
   * @returns {Observable<AuthUserInterface>}
   */
  deleteUser(user: AuthUserInterface) {
    const url: string = `${this.userURL}/${user._id}`;

    return this.http.delete<AuthUserInterface>(url);
  }
}

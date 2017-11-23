import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {AuthUser} from "../../model/auth-user.model";
import "rxjs/add/operator/catch";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserService {

  private userURL: string;

  constructor(public http: Http) {
  }

  /**
   * Method called to get an user by id.
   * @param {string} id
   * @returns {Observable<AuthUser>}
   */
  getUserById(id: string): Observable<AuthUser> {
    const url: string = `${this.userURL}/${id}`;

    //TODO add options for get request
    let options = new RequestOptions();

    return this.http.get(url, options)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /**
   * Method made to create an user.
   * @param {Object} body
   * @returns {Observable<AuthUser>}
   */
  postUser(user: AuthUser): Observable<AuthUser> {
    const url: string = this.userURL;

    // TODO check if headers are correct
    let headers = new Headers({'Content-Type': 'application/json'});

    //TODO add options for post request
    let options = new RequestOptions();

    return this.http.post(url, user, options)
      .map((res: Response) => res.json())
  }

  /**
   * Method made  to update a created user.
   * @param {Object} body
   * @returns {Observable<AuthUser>}
   */
  updateUser(user: AuthUser): Observable<AuthUser> {
    const url: string = `${this.userURL}/${user.id}`;
    // TODO check if headers are correct
    let headers = new Headers({'Content-Type': 'application/json'});

    //TODO add options for put request
    let options = new RequestOptions();
    this.http.put(url, user, options)
    return this.http.put(url, user, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /**
   * Method made to delete a created user.
   * @param {Object} body
   * @returns {Observable<AuthUser>}
   */
  deleteUser(user: AuthUser): Observable<AuthUser> {
    const url: string = `${this.userURL}/${user.id}`;

    // TODO check if headers are correct
    let headers = new Headers({'Content-Type': 'application/json'});

    //TODO add options for delete request
    let options = new RequestOptions();

    return this.http.delete(url, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


}

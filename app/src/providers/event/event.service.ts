import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { IBringItEvent } from "../../model/interfaces/event.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import { HttpClient } from "@angular/common/http";
import { BringItEvent } from "../../model/classes/event.class";

/*
  Generated class for the EventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventService {

  //TODO insert constance in eventURL variable
  private _eventURL: string = "http://localhost:3000/events";

  //TODO Define what is the URL that will be shared with others
  // By clicking on that link, people should directly come  on the wishlist page
  private _sharedURL: string = "http://localhost:3000/"
  private _currentEvent: BringItEvent = null;


  constructor(private http: HttpClient) {
  }

  /**
   * Method called to get event by id.
   * @param {string} id
   * @returns {Observable<IBringItEvent>}
   */
  getById(id: string) {
    return this.http.get<IBringItEvent>(this._eventURL + '/' + id);
  }

  /**
   * Method called to get event by user uuid.
   * @param {string} id
   * @returns {Observable<IBringItEvent>}
   */
  getByUserId(userId: string) {
    return this.http.get<IBringItEvent[]>('http://localhost:3000/users/' + userId + '/events');
  }

  /**
   * Method made to create an event.
   * @param {Object} body
   * @returns {Observable<IBringItEvent>}
   */
  post(event: IBringItEvent) {
    return this.http.post<IBringItEvent>(this._eventURL, event);
  }

  /**
   * Method made  to update a created event.
   * @param {Object} body
   * @returns {Observable<IBringItEvent>}
   */
  put(event: IBringItEvent) {
    return this.http.put<IBringItEvent>(this._eventURL + '/' + event._id, event);
  }

  /**
   * Method made to delete a created event.
   * @param {Object} body
   * @returns {Observable<BringItEventInterface>}
   */
  deleteEvent(event: IBringItEvent): Observable<IBringItEvent> {
    const url: string = `${this._eventURL}/${event._id}`;
    return this.http.delete(url)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  get currentEvent(): BringItEvent {
    return this._currentEvent;
  }

  set currentEvent(value: BringItEvent) {
    this._currentEvent = value;
  }


  get eventURL(): string {
    return this._eventURL;
  }

  set eventURL(value: string) {
    this._eventURL = value;
  }

  get sharedURL(): string {
    return this._sharedURL;
  }

  set sharedURL(value: string) {
    this._sharedURL = value;
  }
}

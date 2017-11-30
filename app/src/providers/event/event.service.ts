import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BringItEventInterface } from "../../model/interfaces/event.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import { HttpClient, HttpParams } from "@angular/common/http";
import { BringItEvent } from "../../model/classes/event.class";
import { RequestOptions } from "@angular/http";
import { map } from "rxjs/operator/map";

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
   * Method called to get event by uuid.
   * @param {string} id
   * @returns {Observable<BringItEventInterface>}
   */
  getEventByUuid(uuid: string): Observable<BringItEventInterface> {
    const url: string = `${this._eventURL}/${uuid}`;
    return this.http.get(url)
      .map(res => res)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /**
   * Method called to get event by user uuid.
   * @param {string} id
   * @returns {Observable<BringItEventInterface>}
   */
  getEventsByUserUuid(userUuid: string): Observable<BringItEventInterface[]> {
    const url: string = this._eventURL + '/search';
    return this.http.get(url, {
      params: new HttpParams().set('hostId', userUuid)
    })
      .map(res => res)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /**
   * Method made to create an event.
   * @param {Object} body
   * @returns {Observable<BringItEventInterface>}
   */
  postEvent(event: BringItEventInterface): Observable<any> {
    const url: string = this._eventURL;

    return this.http.post(url, event)
      .map((res: Response) => res)
  }

  /**
   * Method made  to update a created event.
   * @param {Object} body
   * @returns {Observable<BringItEventInterface>}
   */
  updateEvent(event: BringItEventInterface): Observable<BringItEventInterface> {
    const url: string = `${this._eventURL}/${event.uuid}`;
    this.http.put(url, event)
    return this.http.put(url, event)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /**
   * Method made to delete a created event.
   * @param {Object} body
   * @returns {Observable<BringItEventInterface>}
   */
  deleteEvent(event: BringItEventInterface): Observable<BringItEventInterface> {
    const url: string = `${this._eventURL}/${event.uuid}`;
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

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BringItEventInterface } from "../../model/interfaces/event.model";
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
  private eventURL: string = "http://localhost:3000/events";
  private _currentEvent: BringItEvent = null;

  constructor(private http: HttpClient) {
  }

  /**
   * Method called to get event by id.
   * @param {string} id
   * @returns {Observable<BringItEventInterface>}
   */
  getEventByUuid(uuid: string): Observable<BringItEventInterface> {
    const url: string = `${this.eventURL}/${uuid}`;
    return this.http.get(url)
      .map(res => res)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /**
   * Method made to create an event.
   * @param {Object} body
   * @returns {Observable<BringItEventInterface>}
   */
  postEvent(event: BringItEventInterface): Observable<any> {
    const url: string = this.eventURL;

    // TODO check if headers are correct
    //let headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(url, event)
      .map((res: Response) => res.json())
  }

  /**
   * Method made  to update a created event.
   * @param {Object} body
   * @returns {Observable<BringItEventInterface>}
   */
  updateEvent(event: BringItEventInterface): Observable<BringItEventInterface> {
    const url: string = `${this.eventURL}/${event.uuid}`;
    // TODO check if headers are correct
    let headers = new Headers({'Content-Type': 'application/json'});

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
    const url: string = `${this.eventURL}/${event.uuid}`;

    // TODO check if headers are correct
    let headers = new Headers({'Content-Type': 'application/json'});


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


}

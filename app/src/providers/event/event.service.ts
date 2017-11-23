import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {BringItEvent} from "../../model/event.model";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";

/*
  Generated class for the EventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventService {

  //TODO insert constance in eventURL variable
  private eventURL: string;

  constructor(private http: Http) {
  }

  /**
   * Method called to get event by id.
   * @param {string} id
   * @returns {Observable<BringItEvent>}
   */
  getEventById(id: string): Observable<BringItEvent> {
    const url: string = `${this.eventURL}/${id}`;
    return this.http.get(url)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /**
   * Method made to create an event.
   * @param {Object} body
   * @returns {Observable<BringItEvent>}
   */
  postEvent(event: BringItEvent): Observable<BringItEvent> {
    const url: string = this.eventURL;

    // TODO check if headers are correct
    let headers = new Headers({'Content-Type': 'application/json'});

    //TODO add options for post request
    let options = new RequestOptions();

    return this.http.post(url, event, options)
      .map((res: Response) => res.json())
  }

  /**
   * Method made  to update a created event.
   * @param {Object} body
   * @returns {Observable<BringItEvent>}
   */
  updateEvent(event: BringItEvent): Observable<BringItEvent> {
    const url: string = `${this.eventURL}/${event.id}`;
    // TODO check if headers are correct
    let headers = new Headers({'Content-Type': 'application/json'});

    //TODO add options for post request
    let options = new RequestOptions();
    this.http.put(url, event, options)
    return this.http.put(url, event, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  /**
   * Method made to delete a created event.
   * @param {Object} body
   * @returns {Observable<BringItEvent>}
   */
  deleteEvent(event: BringItEvent): Observable<BringItEvent> {
    const url: string = `${this.eventURL}/${event.id}`;

    // TODO check if headers are correct
    let headers = new Headers({'Content-Type': 'application/json'});

    //TODO add options for post request
    let options = new RequestOptions();

    return this.http.delete(url)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}

import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, ViewController } from 'ionic-angular';
import { EventService } from "../../providers/event/event.service";
import { AuthenticationService } from "../../providers/auth/auth.service";
import { User } from "../../model/classes/user.class";

import { IBringItEvent } from '../../model/interfaces/event.model';

@IonicPage({
  name: 'events',
  segment: 'events',
  defaultHistory: ['login']
})
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  public events: IBringItEvent[];

  constructor(
    private viewCtrl: ViewController,
    private navCtrl: NavController,
    private eventService: EventService,
    private authService: AuthenticationService,
    private alertCtrl: AlertController
  ) {
    this.events = [];
    this.viewCtrl.didEnter.subscribe(() => this.updateEvents());
    this.authService.currentUser.subscribe(() => this.updateEvents());
  }

  updateEvents() {
    if(this.authService.isUserRegistered()) {
      this.eventService.getByUserId(this.authService.getCurrentUserValue()._id).subscribe(
        res => this.events = res,
        err => console.log(err));
    }
  }

  /**
   * Action made when user clicks on an event
   * @param {BringItEvent} event
   */
  selectEvent(event: IBringItEvent) {
    this.navCtrl.push('event-page', { id: event._id });
  }

  newEvent() {
    this.navCtrl.push('add-event');
  }
}

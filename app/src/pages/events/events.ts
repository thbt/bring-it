import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BringItEvent } from "../../model/classes/event.class";
import { EventService } from "../../providers/event/event.service";
import { UserService } from "../../providers/user/user.service";
import { User } from "../../model/classes/user.class";
import { BringItEventInterface } from "../../model/interfaces/event.model";
import { WishlistPage } from "../wishlist/wishlist";
import { BringItItemInterface } from "../../model/interfaces/item.model";
import { BringItItem } from "../../model/classes/item.class";

interface Event {
  title: string;
  date: Date;
}

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  private events: BringItEvent[];
  private connectedUser: User;

  constructor(private navCtrl: NavController,
              private  navParams: NavParams,
              private eventService: EventService,
              private userService: UserService) {
    this.events = [];
    this.displayEvents();
  }

  /**
   * Method to display user events.
   */
  displayEvents() {
    if (this.userService.connectedUser != null) {
      this.eventService.getEventsByUserUuid(this.userService.connectedUser.uuid).subscribe(
        response => {
          let events: BringItEvent[] = [];
          events = this.events;
          console.log(response)
          response.forEach(function (event) {
            events.push(BringItEvent.fromBringItEventInterface(event));
          });
          this.events = events;
        },
        error => {
          console.log(error);
        },
        () => {
          console.log("User events are displayed")
        }
      )
    }
  }

  /**
   * Action made when user clicks on an event
   * @param {BringItEvent} event
   */
  onClickOnEventItem(event: BringItEvent) {
    this.eventService.currentEvent = event;
    this.navCtrl.push(WishlistPage);
  }
}

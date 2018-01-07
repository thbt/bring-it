import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { EventService } from "../../providers/event/event.service";
import { AuthenticationService } from '../../providers/auth/auth.service';

import { BringItEvent } from "../../model/classes/event.class";
import { IUser } from '../../model/interfaces/user.model';

/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'add-event',
  segment: 'events/new',
  defaultHistory: ['events']

})
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {
  optionsCollapsed = true;
  event = new BringItEvent(null, null, null);
  currentUser: IUser | null;

  constructor(
    private navCtrl: NavController,
    private eventService: EventService,
    private authService: AuthenticationService,
  ) {
    this.authService.currentUser.subscribe(
      user => {
        this.currentUser = user;
        if(this.currentUser)
          this.event.hostId = this.currentUser._id;
      },
      err => console.log(err));

    // let temporaryUser = new AuthUser('', '', '');
    // this.eventService.currentEvent != null ? this.event = this.eventService.currentEvent : this.event = new BringItEvent('', '', temporaryUser.id);
    // if (this.userService.connectedUser != null) this.event.hostId = this.userService.connectedUser.id;
  }

  ionViewCanEnter() {
    return this.authService.isUserLogged();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

  createEvent() {
    console.log(this.currentUser, this.event);
    if (!!this.event.hostId) console.log('hhh');

    // First, event is saved in service
    this.eventService.post(this.event).subscribe(
      response => {
        console.log(response);
        this.navCtrl.setRoot('events');
        this.navCtrl.push('event-page', { id: response._id });
      },
      error => console.log(error));

    // Second,  if user is authenticated in app, let's post event and redirect him through wishlist page
    //if (this.userService.connectedUser != null)
    //  this.navCtrl.push(WishlistPage);

    // if he's not, post the event but redirect him through login page
    //else this.navCtrl.push(LoginPage);
  }
}

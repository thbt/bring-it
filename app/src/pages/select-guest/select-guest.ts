import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventService } from '../../providers/event/event.service';

import { IGuest } from '../../model/interfaces/guest.model';
import { IBringItEvent } from '../../model/interfaces/event.model';
import { AuthenticationService } from '../../providers/auth/auth.service';

/**
 * Generated class for the SelectUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage({
  name: 'select-guest',
  segment: 'events/:id/select-guest'
})
@Component({
  selector: 'page-select-guest',
  templateUrl: 'select-guest.html',
})
export class SelectGuestPage {
  event: IBringItEvent;
  guests = new Array<IGuest>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private eventService: EventService,
    private authService: AuthenticationService
  ) {
    this.eventService.getById(this.navParams.get('id')).subscribe(event => {
      this.event = event;
      this.guests = event.guests.filter(g => !g.userId);
    }, console.log);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectUserPage');
  }

  newGuest(name: string) {
    if (this.authService.isUserLogged())
      this.event.guests.push({name: name, userId: this.authService.getCurrentUserValue()._id});
    else
      this.event.guests.push({ name: this.authService.createTempLocalUser(name).nickname });

    this.eventService.put(this.event).subscribe(
      event => this.navCtrl.push('event-page', { id: event._id }),
      console.log
    );
  }

  selectGuest(index: number) {
    if (this.authService.isUserLogged())
      this.event.guests[index].userId = this.authService.getCurrentUserValue()._id;
    else
      this.authService.createTempLocalUser(this.event.guests[index].name);

    this.eventService.put(this.event).subscribe(
      event => this.navCtrl.push('event-page', { id: event._id }),
      console.log
    );
  }
}

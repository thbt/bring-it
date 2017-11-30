import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WishlistPage } from "../wishlist/wishlist";
import { EventsPage } from '../events/events';
import { AddEventPage } from '../add-event/add-event';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goto(page: string) {
    switch(page) {
      case 'wishlist': this.navCtrl.push(WishlistPage); break;
      case 'events': this.navCtrl.push(EventsPage); break;
      case 'add-event': this.navCtrl.push(AddEventPage); break;
      default: break;
    }
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WishlistPage } from "../wishlist/wishlist";
import { EventsPage } from '../events/events';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  wishlistClicked() {
    this.navCtrl.push(WishlistPage);
  }

  eventsClicked() {
    this.navCtrl.push(EventsPage);
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WishlistPage } from "../wishlist/wishlist";
import { EventsPage } from '../events/events';
import { AddEventPage } from '../add-event/add-event';
import { LoginPage } from "../login/login";
import { RegisterPage } from "../register/register";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goto(page: string) {
    switch (page) {
      case 'wishlist':
        this.navCtrl.push(WishlistPage);
        break;
      case 'events':
        this.navCtrl.push(EventsPage);
        break;
      case 'add-event':
        this.navCtrl.push(AddEventPage);
        break;
      case 'login':
        this.navCtrl.push(LoginPage);
        break;
      case 'register':
        this.navCtrl.push(RegisterPage);
        break;
      default:
        break;
    }
  }
}

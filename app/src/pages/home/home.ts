import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WishlistPage} from "../wishlist/wishlist";

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


}

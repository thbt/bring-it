import { Component } from '@angular/core';
import { UserService } from "../../providers/user/user.service";
import { EventService } from "../../providers/event/event.service";
import { NavController, ViewController } from "ionic-angular";
import { AddEventPage } from "../../pages/add-event/add-event";
import { PopoverController } from 'ionic-angular';
import { LoginPage } from "../../pages/login/login";

/**
 * Generated class for the AccountComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'account',
  templateUrl: 'account.html'
})
export class AccountComponent {

  text: string;

  constructor(public popoverCtrl: PopoverController) {
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
}

@Component({
  template: `
    <ion-list>
      <ion-list-header>Options</ion-list-header>
      <button ion-item (click)="onLogOut()">Sign Out</button>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(private viewCtrl: ViewController,
              private eventService: EventService,
              private  userService: UserService,
              private navCtrl: NavController) {
  }

  onLogOut() {
    this.viewCtrl.dismiss();
    this.navCtrl.push(LoginPage);
    this.userService.connectedUser = null;
    this.eventService.currentEvent = null;
  }
}

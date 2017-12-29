import { Component } from '@angular/core';
import { UserService } from "../../providers/user/user.service";
import { EventService } from "../../providers/event/event.service";
import { NavController, ViewController } from "ionic-angular";
import { AddEventPage } from "../../pages/add-event/add-event";
import { PopoverController } from 'ionic-angular';

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
      <button ion-item (click)="onLogOut()">sign out</button>
    </ion-list>
  `
})
class PopoverPage {
  constructor(private viewCtrl: ViewController,
              private eventService: EventService,
              private  userService: UserService,
              private navCtrl: NavController) {
  }

  onLogOut() {
    this.viewCtrl.dismiss();
    this.navCtrl.push(AddEventPage)
      .then(() => {
        // All previous pages are removed from the stack because user is disconnected;
        this.navCtrl.popAll();
      });
    ;
    //TODO remove comments
   // this.userService.connectedUser = null;
   // this.eventService.currentEvent = null;
  }
}

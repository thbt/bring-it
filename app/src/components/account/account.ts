import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { AccountPopoverComponent } from "../account-popover/account-popover";

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
  constructor(public popoverCtrl: PopoverController) {}

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(AccountPopoverComponent);
    popover.present({ ev: myEvent });
  }
}

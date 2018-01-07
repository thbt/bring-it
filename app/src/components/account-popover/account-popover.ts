import { NavController, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { AuthenticationService } from '../../providers/auth/auth.service';
import { IUser } from '../../model/interfaces/user.model';

/**
 * Generated class for the AccountPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'account-popover',
  templateUrl: 'account-popover.html'
})
export class AccountPopoverComponent {
  connectedUser: IUser | null = null;

  constructor(
    private viewCtrl: ViewController,
    private navCtrl: NavController,
    private authService: AuthenticationService
  ) {
    this.viewCtrl.didEnter.subscribe(() =>
      this.authService.currentUser.subscribe(
        user => this.connectedUser = user,
        err => console.log('error retrieving the user:', err)));
  }

  logout() {
    this.viewCtrl.dismiss();
    this.authService.logout();
  }

  login() {
    this.viewCtrl.dismiss();
    this.navCtrl.push('login');
  }

  register() {
    this.viewCtrl.dismiss();
    this.navCtrl.push('register');
  }
}

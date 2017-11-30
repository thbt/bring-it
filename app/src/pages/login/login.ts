import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  inputEmail: string = '';
  inputPassword: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  /**
   * Method called when user sends login information
   * TODO Implement method
   */
  onSubmit() {
  }

  /**
   * Method called when user clicks on the facebook button
   * TODO Implement method
   */
  onContinueWithFacebook(){
  }
}

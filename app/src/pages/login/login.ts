import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from "../../providers/user/user.service";
import { RegisterPage } from "../register/register";
//import { Logger } from "@ionic/app-scripts/dist/logger/logger";
import { AuthUser } from "../../model/classes/auth-user.class";
import { User } from "../../model/classes/user.class";
import { EventService } from "../../providers/event/event.service";
import { EventsPage } from "../events/events";
import { WishlistPage } from "../wishlist/wishlist";
import { AddEventPage } from "../add-event/add-event";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
  errorMessage: string = '';
  loginForm: FormGroup;


  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private eventService: EventService) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  /**
   * Method called when user sends login information
   * TODO Implement method
   */
  onSubmit() {
    this.userService.getUserByEmailAndPassword(this.inputEmail, this.inputPassword).subscribe(
      response => {
        let user: User = new User("");
        user = AuthUser.fromAuthUserInterface(response).toUser();
        this.userService.connectedUser = user;
      },
      error => {
        this.errorMessage = "Wrong email or wrong password."
        console.log(error);
      },
      () => {
        // if the user is not in the middle of an event modification, he's redirected to the first page( EventsPage)
        this.errorMessage = '';
        if (this.eventService.currentEvent == null) this.navCtrl.push(AddEventPage);
        else if (this.eventService.currentEvent != null) {
          this.eventService.currentEvent.hostId = this.userService.connectedUser.uuid;
          this.navCtrl.push(WishlistPage);
        }
      }
    )
  }

  /**
   * Method called when user clicks on the facebook button
   * TODO Implement method
   */
  onContinueWithFacebook() {
  }

  /**
   * Method called when user clicks on a link to create an account
   */
  onCreateNewAccount() {
    this.navCtrl.push(RegisterPage);
  }
}

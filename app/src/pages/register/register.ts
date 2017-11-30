import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { matchOtherValidator } from "./match-other-validator";
import { UserService } from "../../providers/user/user.service";
import { AuthUserInterface } from "../../model/interfaces/auth-user.model";
import { WishlistPage } from "../wishlist/wishlist";
import { AuthUser } from "../../model/classes/auth-user.class";
import { User } from "../../model/classes/user.class";
import { AddEventPage } from "../add-event/add-event";
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  inputEmail: string;
  inputPassword: string;
  inputConfirmationPassword: string;
  inputNickname: string;
  registerForm: FormGroup;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private formBuilder: FormBuilder,
              private userService: UserService) {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      nickname: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      confirmation_password: ['', [
        Validators.required,
        matchOtherValidator('password')
      ]]

    })
    ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  /**
   * Method called when user clicks on the confirm button to set up his account
   */
  createAccount() {
    const userI: AuthUserInterface = {
      uuid: '',
      nickname: this.inputNickname,
      email: this.inputEmail,
      profilePicture: '',
      password: this.inputConfirmationPassword,
      credentials: ''
    }
    this.userService.postUser(userI).subscribe(response => {

      },
      error => {
        console.log(error);
      },
      () => {
        console.log("User has been created")
        const user = new User(userI.nickname, userI.email);
        this.userService.connectedUser = user;
        this.navCtrl.push(AddEventPage);
      })
  }

}

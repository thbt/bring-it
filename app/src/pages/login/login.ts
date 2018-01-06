import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IonicPage, NavController } from 'ionic-angular';

import { AuthenticationService } from "../../providers/auth/auth.service";

@IonicPage({
  name: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  errorMessage = '';
  loginForm: FormGroup;

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.authService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value).subscribe(
      response => this.navCtrl.pop(),
      error => {
        this.errorMessage = "Wrong email or wrong password."
        console.log(error);
      });
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
    this.navCtrl.push('register');
  }
}

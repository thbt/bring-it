import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from "@angular/forms";

import { UserService } from "../../providers/user/user.service";
import { AuthenticationService } from '../../providers/auth/auth.service';

import { AuthUserInterface } from "../../model/interfaces/auth-user.model";


@IonicPage({
  name: 'register'
})
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  registerForm: FormGroup;

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthenticationService
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      nickname: ['', Validators.required],
      passwords: formBuilder.group({
        password: ['', Validators.required],
        confirm: ['', Validators.required]
      }, { validator: this.areEqual })
    });

    console.log(this.registerForm.get('passwords.password'));
  }

  areEqual(c: AbstractControl): ValidationErrors | null {
    const keys: string[] = Object.keys(c.value);
    for (const i in keys) {
      if (i !== '0' && c.value[keys[+i - 1]] !== c.value[keys[i]]) {
        return { areEqual: true };
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
    const newUser: AuthUserInterface = {
      nickname: this.registerForm.controls.nickname.value,
      email: this.registerForm.controls.email.value,
      profilePicture: '',
      password: this.registerForm.get('passwords.password').value,
      credentials: ''
    }

    this.userService.post(newUser).subscribe(
      response => this.authService.login(newUser.email, newUser.password).subscribe(res => this.navCtrl.popToRoot()),
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          console.log(`Backend returned code ${err.status}, body was:`);
          console.log(JSON.parse(err.error));
        }
      });
  }

  facebookAuth() {
    console.log('TODO');
  }
}

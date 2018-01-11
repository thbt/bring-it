import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { EventsPage } from "../pages/events/events";
import { AuthenticationService } from '../providers/auth/auth.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = EventsPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    private authService: AuthenticationService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      this.authService.checkLocalStorage();
    });
  }
}


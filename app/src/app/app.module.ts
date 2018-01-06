import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserService } from '../providers/user/user.service';
import { WishlistPageModule } from "../pages/wishlist/wishlist.module";
import { EventService } from '../providers/event/event.service';
import { EventsPageModule } from '../pages/events/events.module';
import { AddEventPageModule } from '../pages/add-event/add-event.module';
import { LoginPageModule } from "../pages/login/login.module";
import { RegisterPageModule } from "../pages/register/register.module";
import { HttpClientModule } from "@angular/common/http";
import { SocialSharing } from '@ionic-native/social-sharing';
import { AuthenticationService } from '../providers/auth/auth.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    WishlistPageModule,
    EventsPageModule,
    AddEventPageModule,
    LoginPageModule,
    HttpClientModule,
    RegisterPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    EventService,
    AuthenticationService,
    SocialSharing,
  ]
})
export class AppModule {
}

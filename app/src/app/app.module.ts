import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserService } from '../providers/user/user.service';
import { WishlistPageModule } from "../pages/wishlist/wishlist.module";
import { EventService } from '../providers/event/event.service';
import { EventsPageModule } from '../pages/events/events.module';
import { AddEventPageModule } from '../pages/add-event/add-event.module';
import { LoginPageModule } from "../pages/login/login.module";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    WishlistPageModule,
    EventsPageModule,
    AddEventPageModule,
    LoginPageModule,
    HttpModule,
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
  ]
})
export class AppModule {
}

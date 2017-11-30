import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventService } from "../../providers/event/event.service";
import { UserService } from "../../providers/user/user.service";
import { LoginPage } from "../login/login";
import { BringItEvent } from "../../model/classes/event.class";
import { AuthUser } from "../../model/classes/auth-user.class";
import { WishlistPage } from "../wishlist/wishlist";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {
  optionsCollapsed = true;
  event: BringItEvent;
  eventForm: FormGroup;


  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private eventService: EventService,
              private formBuilder: FormBuilder,
              private userService: UserService) {
    this.eventForm = this.formBuilder.group({
      eventName: ['', Validators.compose([Validators.required])],
      eventType: ['', Validators.compose([Validators.required])],
      eventTheme: [''],
      eventDate: [''],
      eventLocation: [''],
      eventDescription: ['']
    })
    let temporaryUser = new AuthUser('', '', '');
    this.eventService.currentEvent != null ?
      this.event = this.eventService.currentEvent : this.event = new BringItEvent('', '', temporaryUser.uuid);

    if (this.userService.connectedUser != null) this.event.hostId = this.userService.connectedUser.uuid;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }


  /**
   * Method called when user clicks on the "Create Event" button
   */
  onCreateEvent() {
    // First, event is saved in service
    this.eventService.currentEvent = this.event;
    this.eventService.postEvent(this.event.toBringItEventInterface()).subscribe(response => {

      },
      error => {
        console.log(error);
      },
      () => {
        console.log(" Event has ben created");

        // Second,  if user is authenticated in app, let's post event and redirect him through wishlist page
        if (this.userService.connectedUser != null)
          this.navCtrl.push(WishlistPage);

        // if he's not, post the event but redirect him through login page
        else this.navCtrl.push(LoginPage);

      })


  }
}

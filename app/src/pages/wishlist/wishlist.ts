import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BringItItemInterface } from '../../model/interfaces/item.model';
import { EventService } from '../../providers/event/event.service';
import { UserInterface } from "../../model/interfaces/user.model";
import { UserService } from "../../providers/user/user.service";
import { BringItItem } from "../../model/classes/item.class";
import { SocialSharing } from '@ionic-native/social-sharing';
import { User } from "../../model/classes/user.class";
import { EventsPage } from "../events/events";

/**
 * Generated class for the WishlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html',
})
export class WishlistPage {
  newItemName: string = '';
  suggestions: BringItItem[];
  items: BringItItem[];
  connectedUser: User;
  isUserEventOwner: boolean;


  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private eventService: EventService,
              private userService: UserService,
              private socialSharing: SocialSharing) {
    this.connectedUser = new User('');
    this.items = [];
    this.suggestions = [];
    if (this.eventService.currentEvent != null) {
      this.suggestions = this.eventService.currentEvent.suggestions;
      this.items = this.eventService.currentEvent.items;
    }
    if (this.userService.connectedUser != null) {
      this.connectedUser = this.userService.connectedUser;
      if (this.userService.connectedUser.uuid == this.eventService.currentEvent.hostId) this.isUserEventOwner = true;

    }

    //If the wishlist is empty, automatically provides one item to the list
    if (this.items.length == 0) this.items.push(new BringItItem("Pain"));


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WishlistPage');
  }

  /**
   * Method called when the user clicks on the "+" button.
   * It adds a new item on the list.
   */
  onAddNewItem() {
    // If the new item is not added by the creator of the event, then it goes in the suggestion list
    if (this.eventService.currentEvent.hostId != this.userService.connectedUser.uuid) {
      this.suggestions.push(new BringItItem(this.newItemName))
      this.updateEvent();
    }
    // Otherwise, it goes in the official item list
    else if (this.eventService.currentEvent.hostId == this.userService.connectedUser.uuid) {
      this.items.push(new BringItItem(this.newItemName));
      this.updateEvent();
    }
  }

  /**
   * Method called when the user clicks on the "share" button to share his event
   */
  onShareEvent() {
    // Check if sharing via email is supported
    this.socialSharing.share(this.eventService.sharedURL).then(() => {
      // Sharing via email is possible
    }).catch(() => {
      // Sharing via email is not possible
    });
  }

  /**
   * Method called when the user clicks on the home button to go on the events page
   */
  onGoToEventsPage() {
    this.navCtrl.push(EventsPage);
  }

  /**
   * Method called each time an element is modified on the event
   */
  updateEvent() {
    if (this.eventService.currentEvent != null) {
      this.eventService.currentEvent.suggestions = this.suggestions;
      this.eventService.currentEvent.items = this.items;
      this.eventService.updateEvent(this.eventService.currentEvent.toBringItEventInterface()).subscribe(
        response => {
          console.log("Event has been updated");
        }
      ),
        error => {
          console.log(error);
        },
        () => {

        }
    }

  }
}

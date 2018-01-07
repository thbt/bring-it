import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { AuthenticationService } from '../../providers/auth/auth.service';
import { EventService } from '../../providers/event/event.service';

import { IBringItEvent } from '../../model/interfaces/event.model';
import { IUser } from '../../model/interfaces/user.model';
import { BringItItem } from "../../model/classes/item.class";

import { SocialSharing } from '@ionic-native/social-sharing';
import { EventsPage } from "../events/events";

@IonicPage({
  name: 'event-page',
  segment: 'events/:id',
  defaultHistory: ['select-guest']
})
@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html',
})
export class WishlistPage {
  loading = true;
  event: IBringItEvent;
  newItemName = '';
  currentUser: IUser | null;
  suggestions = Array<BringItItem>();
  items = Array<BringItItem>();

  collapseSuggestions: boolean = false;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private viewCtrl: ViewController,
    private eventService: EventService,
    private authService: AuthenticationService,
    private socialSharing: SocialSharing,
    private alertCtrl: AlertController
  ) {
    if (!this.navParams.get('id')) {
      console.log('eventId was not sent, popping the view.');
      this.navCtrl.pop();
    }

    this.viewCtrl.didEnter.subscribe(() =>
      this.eventService.getById(this.navParams.get('id')).subscribe(
        res => {
          this.event = res;

          this.authService.retrieveUserFromStorage()
            .then(user => {
              if(!!user) {
                // user in local storage, verify it is linked to an event guest
                if (this.event.guests.findIndex(g => g.userId === user._id) < 0)
                  this.navCtrl.push('select-guest', {id: this.navParams.get('id')});
                else
                  this.loading = false;
              } else if (!!this.authService.getCurrentUserValue() &&
                         this.event.guests.findIndex(g => g.name === this.authService.getCurrentUserValue().nickname) > -1) {
                // unauthentified user in memory linked to event's guest
                this.loading = false;
              } else {
                // no user in local storage or in memory
                this.navCtrl.push('select-guest', {id: this.navParams.get('id')});
              }
            }).catch((err) => {
              console.log(err);
              // couldn't retrieve user; so let's check memory
              // unauthentified user in memory linked to event's guest
              if (this.event.guests.findIndex(g => g.name === this.authService.getCurrentUserValue().nickname) > -1)
                this.loading = false;
            });
        },
        err => console.log(err)));

    this.authService.currentUser.subscribe(
      user => this.currentUser = user,
      err => console.log(err));
  }


  /**
   * Method called when the user clicks on the "+" button.
   * It adds a new item on the list.
   */
  addItem() {
    let newItem = new BringItItem(this.newItemName);
    newItem.suggestedBy = this.currentUser.nickname;
    newItem.upvoters.push(this.currentUser.nickname);

    // If the new item is not added by the creator of the event, then it goes in the suggestion list
    if (this.currentUser && this.event.hostId != this.currentUser._id) {
      this.event.suggestions.push(newItem.toBringItItemInterface());
      this.updateEvent();
    } else {
      this.event.items.push(newItem.toBringItItemInterface());
      this.updateEvent();
    }
  }

  upvoteItem(itemIndex: number, isSuggestion: boolean) {
    let item = isSuggestion ? this.event.suggestions[itemIndex] : this.event.items[itemIndex];

    if(item.upvoters.indexOf(this.currentUser.nickname) > -1)
      item.upvoters = item.upvoters.filter(i => i !== this.currentUser.nickname);
    else
      item.upvoters.push(this.currentUser.nickname);

    item.downvoters = item.downvoters.filter(i => i !== this.currentUser.nickname);

    if (isSuggestion)
      this.event.suggestions[itemIndex] = item;
    else
      this.event.items[itemIndex] = item;

    this.updateEvent();
  }

  downvoteItem(itemIndex: number, isSuggestion: boolean) {
    let item = isSuggestion ? this.event.suggestions[itemIndex] : this.event.items[itemIndex];

    if(item.downvoters.indexOf(this.currentUser.nickname) > -1)
      item.downvoters = item.downvoters.filter(i => i !== this.currentUser.nickname);
    else
      item.downvoters.push(this.currentUser.nickname);

    item.upvoters = item.upvoters.filter(i => i !== this.currentUser.nickname);

    if (isSuggestion)
      this.event.suggestions[itemIndex] = item;
    else
      this.event.items[itemIndex] = item;

    this.updateEvent();
  }

  selectSuggestion(itemIndex: number) {
    let item = this.event.suggestions[itemIndex];

    if(this.currentUser && this.currentUser._id == this.event.hostId) {
      this.event.items.push(item);
      this.event.suggestions.splice(itemIndex, 1);
    }

    this.updateEvent();
  }

  selectItem(itemIndex: number) { // TODO fix issue ?
    let item = this.event.items[itemIndex];

    if(item.broughtBy.indexOf(this.currentUser.nickname) > -1) {
      item.broughtBy = item.broughtBy.filter(i => i !== this.currentUser.nickname);
    } else {
      item.broughtBy.push(this.currentUser.nickname);
    }

    this.updateEvent();
  }

  /**
   * Method called when the user clicks on the "share" button to share his event
   */
  shareEvent() {
    // Check if sharing via email is supported
    this.socialSharing.share(this.eventService.sharedURL).then(() => {
      console.log('todo');
      // Sharing via email is possible
    }).catch(() => {
      console.log('todo');
      // Sharing via email is not possible
    });
  }

  /**
   * Method called when the user clicks on the home button to go on the events page
   */
  goToHome() {
    this.navCtrl.push('events');
    this.navCtrl.setRoot(EventsPage);
  }

  /**
   * Method called each time an element is modified on the event
   */
  updateEvent() {
    if (this.event) {
      this.eventService.put(this.event).subscribe(
        res => this.event = res,
        err => console.log(err));
    }
  }
}

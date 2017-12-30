import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BringItItem } from '../../model/item.model';
import { EventService } from '../../providers/event/event.service';

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
  // TODO Remove mock data
  mockBringitItems: BringItItem[] = [];

  newItemName: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private eventService: EventService) {
    this.mockBringitItems.push({
      id: "0",
      name: "Vin rouge",
      thumbsUp: 5,
      thumbsDown: 4,
      quantity: 1,
      broughtBy: [],
      voters: []
    });

    this.mockBringitItems.push({
      id: "1",
      name: "Pain",
      thumbsUp: 5,
      thumbsDown: 4,
      quantity: 1,
      broughtBy: [],
      voters: []
    });

    this.mockBringitItems.push({
      id: "2",
      name: "Rhum blanc",
      thumbsUp: 1,
      thumbsDown: 2,
      quantity: 1,
      broughtBy: [],
      voters: []
    });

    this.mockBringitItems.push({
      id: "3",
      name: "Tequila",
      thumbsUp: 2,
      thumbsDown: 8,
      quantity: 1,
      broughtBy: [],
      voters: []
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WishlistPage');
  }

  /**
   * Method called when user clicks on the "+" button of an item.
   * TODO Implementation
   */
  onSelectItemToBring(): void {
  }

  /**
   * Method called when user clicks on the like button of an item.
   * TODO Implementation
   */
  upvoteItem(itemId: string): void {
    this.mockBringitItems.find(i => i.id === itemId).thumbsUp += 1;
  }

   /**
   * Method called when user clicks on the dislike button of an item.
   * TODO Implementation
   */
  downvoteItem(itemId: string): void {
    this.mockBringitItems.find(i => i.id === itemId).thumbsDown += 1;
  }

  /**
   *
   * TODO use service
   */
  addItem() {
    this.mockBringitItems.push({
      id: this.mockBringitItems.length.toString(),
      name: this.newItemName,
      thumbsUp: 1,
      thumbsDown: 0,
      quantity: 1,
      broughtBy: [],
      voters: []
    });

    this.newItemName = null;

  }
}

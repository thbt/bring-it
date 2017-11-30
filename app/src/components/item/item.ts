import { Component, Input } from '@angular/core';
//import { Logger } from "@ionic/app-scripts/dist/logger/logger";
import { User } from "../../model/classes/user.class";
import { BringItItem } from "../../model/classes/item.class";
import { EventService } from "../../providers/event/event.service";

/**
 * Generated class for the ItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'item',
  templateUrl: 'item.html'
})
export class ItemComponent {
  @Input() item: BringItItem;
  @Input() connectedUser: User;
  private isLiked: boolean = false;
  private isDisliked: boolean = false;
  private selected: boolean = false;

  constructor(private eventService: EventService) {
    console.log('Hello ItemComponent Component');
  }

  /**
   * Method called when the user selects/unselects an item to bring
   */
  onSelectItem() {
    if (this.selected == true) {
      console.log("Item selected");
      this.item.broughtBy.push(this.connectedUser.uuid);
    }
    else {
      //Logger.info("Item unselected");
      const index = this.item.broughtBy.indexOf(this.connectedUser.uuid);
      if (index > -1) this.item.broughtBy.splice(index);
    }
    this.updateEvent();
  }

  /**
   * Method called when user clicks on the "like" button
   */
  upvote() {
    console.log("Item liked")
    if (this.isLiked == true && this.isDisliked == false) {
      this.isLiked = false;
      this.item.thumbsUp = this.item.thumbsUp - 1;
    }
    else if (this.isLiked == false && this.isDisliked == false) {
      this.isLiked = true;
      this.item.thumbsUp = this.item.thumbsUp + 1;
    }
    else if (this.isLiked == false && this.isDisliked == true) {
      this.isDisliked = false;
      this.item.thumbsDown = this.item.thumbsDown - 1;
      this.isLiked = true;
      this.item.thumbsUp = this.item.thumbsUp + 1;
    }
    this.updateEvent();
  }

  /**
   * Method called when user clicks on the "dislike" button
   */
  downvote() {
    console.log("Item disliked")
    if (this.isDisliked == true && this.isLiked == false) {
      this.isDisliked = false;
      this.item.thumbsDown = this.item.thumbsDown - 1;
    }
    else if (this.isDisliked == false && this.isLiked == false) {
      this.isDisliked = true;
      this.item.thumbsDown = this.item.thumbsDown + 1;
    }
    else if (this.isDisliked == false && this.isLiked == true) {
      this.isLiked = false;
      this.item.thumbsUp = this.item.thumbsUp - 1;
      this.isDisliked = true;
      this.item.thumbsDown = this.item.thumbsDown + 1;
    }
    this.updateEvent();
  }

  /**
   * Method called each time an element is modified on the event
   */
  updateEvent() {
    if (this.eventService.currentEvent != null) {
      const index: number = this.eventService.currentEvent.items.findIndex(item => item.uuid == this.item.uuid);
      this.eventService.currentEvent.items[index] = this.item;
      this.eventService.updateEvent(this.eventService.currentEvent.toBringItEventInterface()).subscribe(
        response => {
          console.log("An item has been updated");
        }
      )
    }

  }

}

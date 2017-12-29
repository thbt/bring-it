import {Component} from '@angular/core';
import {BringItItemInterface} from "../../model/interfaces/item.model";

/**
 * Generated class for the ItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'items',
  templateUrl: 'item.html'
})
export class ItemComponent {

  //TODO Remove mock data
  mockBringitItems: BringItItemInterface[] = [];

  constructor() {

  }

  /**
   * Method called when user clicks on the "+" button of an item.
   */
  //TODO Implement class method.
  onSelectItemToBring(): void {
  }

  /**
   * Method called when user clicks on the like button of an item.
   */
  // TODO Implement class method.
  onLikeItem(): void {

  }

  /**
   * Method called when user clicks on the dislike button of an item.
   */
  // TODO Implement class method.
  onDislikeItem(): void {
  }
}

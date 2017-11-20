import {Component} from '@angular/core';
import {BringItItem} from "../../model/item.model";

/**
 * Generated class for the ItemsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'items',
  templateUrl: 'items.html'
})
export class ItemsComponent {
  
  //TODO Remove mock data
  mockBringitItems: BringItItem[] = [];

  constructor() {
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

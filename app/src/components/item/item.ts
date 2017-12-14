import { Component, Input } from '@angular/core';
import { BringItItem } from '../../model/item.model';

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
  @Input() item: BringItItem

  constructor() {
    console.log('Hello ItemComponent Component');
  }

  upvote() {

  }

  downvote() {

  }

}

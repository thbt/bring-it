import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output() onUpvoted = new EventEmitter<boolean>();
  @Output() onDownvoted = new EventEmitter<boolean>();

  constructor() {
    console.log('Hello ItemComponent Component');
  }

}

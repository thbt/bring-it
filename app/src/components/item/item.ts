import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BringItItem } from "../../model/classes/item.class";

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
  @Input() isSelected: boolean;

  @Output() onUpvote = new EventEmitter();
  @Output() onDownvote = new EventEmitter();
  @Output() onSelect = new EventEmitter();

  constructor() {}
}

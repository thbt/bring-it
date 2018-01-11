import { Component, Output, Input, EventEmitter } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { IBringItItem } from '../../model/interfaces/item.model';

/**
 * Generated class for the ItemDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsComponent {
  @Output() delete = new EventEmitter();
  @Output() modify = new EventEmitter();

  @Input() item: IBringItItem | null;

  text: string;

  constructor(private viewCtrl: ViewController) {
    console.log('Hello ItemDetailsComponent Component');
    this.text = 'Hello World';
  }

  close() {
    this.viewCtrl.dismiss();
  }

}

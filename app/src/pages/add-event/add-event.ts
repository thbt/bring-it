import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BringItEvent } from './../../model/event.model';

/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {
  optionsCollapsed = true;
  event: BringItEvent;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.event = {
      id: '-1',
      title: '',
      type: '',
      isOver: false,
      hostId: '1',
      guestsId: [],
      suggestions: [],
      items: [],
      date: null,
      location: '',
      description: ''
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

  createEvent() {
    // TODO
  }
}

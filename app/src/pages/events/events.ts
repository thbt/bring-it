import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

interface Event {
  title: string;
  date: Date;
}

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  events: Event[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // TODO remove mock data
    this.events = [{title:"BBQ @ Thibaut's", date: new Date(2017, 5, 30)}];
  }
}

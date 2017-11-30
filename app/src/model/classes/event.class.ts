import { BringItEventInterface } from "../interfaces/event.model";
import { UUID } from 'angular2-uuid';
import { BringItItem } from "./item.class";
import { AuthUser } from "./auth-user.class";

export class BringItEvent implements BringItEventInterface {
  private _theme: string;
  private _date: Date;
  private _location: string;
  private _description: string;
  private _uuid: string;
  private _title: string;
  private _type: string;
  private _isOver: boolean;
  private _hostId: string;
  private _suggestions: BringItItem[];
  private _items: BringItItem[];

  constructor(title: string, type: string, hostUserUuid: string) {
    this.uuid = UUID.UUID();
    this.title = title;
    this.type = type;
    this.hostId = hostUserUuid;
    this.isOver = false;
    this.items = [];
    this.suggestions = [];
  }

  toBringItEventInterface(): BringItEventInterface {
    return {
      uuid: this.uuid,
      title: this.title,
      type: this.type,
      isOver: this.isOver,
      hostId: this.hostId,
      suggestions: this.suggestions.map(suggestion => suggestion.toBringItItemInterface()),
      items: this.items.map(item => item.toBringItItemInterface()),
      theme: this.theme,
      date: this.date,
      location: this.location,
      description: this.description
    }
  }

  static fromBringItEventInterface(bringItEventInterface: BringItEventInterface): BringItEvent {
    let event = new BringItEvent('', '', '');
    event.uuid = bringItEventInterface.uuid;
    event.type = bringItEventInterface.type;
    event.title = bringItEventInterface.title;
    event.hostId = bringItEventInterface.hostId;
    event.isOver = bringItEventInterface.isOver;
    event.theme = bringItEventInterface.theme;
    event.date = bringItEventInterface.date;
    event.description = bringItEventInterface.description;
    event.location = bringItEventInterface.location;
    event.items = bringItEventInterface.items.map(item => BringItItem.fromBringItItemInterface(item));
    event.suggestions = bringItEventInterface.suggestions.map(suggestion => BringItItem.fromBringItItemInterface(suggestion));

    return event;
  }

  get uuid(): string {
    return this._uuid;
  }


  set uuid(value: string) {
    this._uuid = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get isOver(): boolean {
    return this._isOver;
  }

  set isOver(value: boolean) {
    this._isOver = value;
  }

  get hostId(): string {
    return this._hostId;
  }

  set hostId(value: string) {
    this._hostId = value;
  }

  get suggestions(): BringItItem[] {
    return this._suggestions;
  }

  set suggestions(value: BringItItem[]) {
    this._suggestions = value;
  }

  get items(): BringItItem[] {
    return this._items;
  }

  set items(value: BringItItem[]) {
    this._items = value;
  }

  get theme(): string {
    return this._theme;
  }

  set theme(value: string) {
    this._theme = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

}

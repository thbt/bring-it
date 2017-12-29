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

  constructor(title: string, type: string, hostUser: AuthUser) {
    this._uuid = UUID.UUID();
    this._title = title;
    this._type = type;
    this._hostId = hostUser.uuid;
  }

  toBringItEventInterface(): BringItEventInterface {
    return {
      uuid: this.uuid,
      title: this.title,
      type: this.type,
      isOver: this.isOver,
      hostId: this._hostId,
      suggestions: this.suggestions.map(suggestion => suggestion.toBringItItemInterface()),
      items: this.items.map(item => item.toBringItItemInterface()),
      theme: this.theme,
      date: this._date,
      location: this._location,
      description: this._description
    }
  }

  get uuid(): string {
    return this._uuid;
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

import { BringItItemInterface } from "../interfaces/item.model";
import { UUID } from "angular2-uuid";

export class BringItItem implements BringItItemInterface {
  private _picture: string;
  private _details: string;
  private _suggestedBy: string;
  private _uuid: string;
  private _name: string;
  private _thumbsUp: number;
  private _thumbsDown: number;
  private _quantity: number;
  private _broughtBy: string[];
  private _voters: string[];

  constructor(name: string) {
    this.uuid = UUID.UUID();
    this.name = name;
    this.quantity = 1;
    this.thumbsUp = 0;
    this.thumbsDown = 0;
    this.broughtBy = [];
    this.voters = [];
    this.suggestedBy = null;
    this.details = '';
    this.picture = '';
  }

  static fromBringItItemInterface(bringItEventInterface: BringItItemInterface): BringItItem {
    let item = new BringItItem('');
    item.uuid = bringItEventInterface.uuid;
    item.name = bringItEventInterface.name;
    item.quantity = bringItEventInterface.quantity;
    item.thumbsDown = bringItEventInterface.thumbsDown;
    item.thumbsUp = bringItEventInterface.thumbsUp;
    item.broughtBy = bringItEventInterface.broughtBy;
    item.quantity = bringItEventInterface.quantity;
    item.voters = bringItEventInterface.voters;
    item.picture = bringItEventInterface.picture;
    item.details = bringItEventInterface.details;

    return item;
  }

  toBringItItemInterface(): BringItItemInterface {
    return {
      uuid: this.uuid,
      name: this.name,
      thumbsUp: this.thumbsUp,
      thumbsDown: this.thumbsDown,
      quantity: this.quantity,
      broughtBy: this.broughtBy,
      voters: this.voters,
      picture: this.picture,
      details: this.details,
      suggestedBy: this.suggestedBy
    }
  }

  get uuid(): string {
    return this._uuid;
  }

  set uuid(value: string) {
    this._uuid = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get thumbsUp(): number {
    return this._thumbsUp;
  }

  set thumbsUp(value: number) {
    this._thumbsUp = value;
  }

  get thumbsDown(): number {
    return this._thumbsDown;
  }

  set thumbsDown(value: number) {
    this._thumbsDown = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  get broughtBy(): string[] {
    return this._broughtBy;
  }

  set broughtBy(value: string[]) {
    this._broughtBy = value;
  }

  get voters(): string[] {
    return this._voters;
  }

  set voters(value: string[]) {
    this._voters = value;
  }

  get picture(): string {
    return this._picture;
  }

  set picture(value: string) {
    this._picture = value;
  }

  get details(): string {
    return this._details;
  }

  set details(value: string) {
    this._details = value;
  }

  get suggestedBy(): string {
    return this._suggestedBy;
  }

  set suggestedBy(value: string) {
    this._suggestedBy = value;
  }
}

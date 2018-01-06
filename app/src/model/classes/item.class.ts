import { IBringItItem } from "../interfaces/item.model";

export class BringItItem implements IBringItItem {
  picture: string;
  details: string;
  name: string;
  quantity: number;
  suggestedBy: string;
  broughtBy: string[];
  upvoters: string[];
  downvoters: string[];

  constructor(name: string) {
    this.name = name;
    this.quantity = 1;
    this.upvoters = [];
    this.downvoters = [];
    this.broughtBy = [];
    this.suggestedBy = null;
    this.details = '';
    this.picture = '';
  }

  static fromBringItItemInterface(bringItEventInterface: IBringItItem): BringItItem {
    let item = new BringItItem('');
    item.name = bringItEventInterface.name;
    item.quantity = bringItEventInterface.quantity;
    item.upvoters = bringItEventInterface.upvoters;
    item.downvoters = bringItEventInterface.downvoters;
    item.broughtBy = bringItEventInterface.broughtBy;
    item.quantity = bringItEventInterface.quantity;
    item.picture = bringItEventInterface.picture;
    item.details = bringItEventInterface.details;

    return item;
  }

  toBringItItemInterface(): IBringItItem {
    return {
      name: this.name,
      upvoters: this.upvoters,
      downvoters: this.downvoters,
      quantity: this.quantity,
      broughtBy: this.broughtBy,
      picture: this.picture,
      details: this.details,
      suggestedBy: this.suggestedBy
    }
  }
}

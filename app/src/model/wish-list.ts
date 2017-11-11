import {Item} from "./wish-list-item";

export abstract class WishList {
  id: string;
  itemsList : Array<Item>;
}

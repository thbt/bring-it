import {WishListItem} from "./wish-list-item";

export abstract class WishList {
  id: string;
  itemList : WishListItem[];
}

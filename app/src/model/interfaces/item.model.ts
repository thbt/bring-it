// import {UserInterface} from "./user.model";

export interface IBringItItem {
  name: string;
  quantity: number;
  broughtBy: string[]; // user ids
  upvoters: string[]; // user ids
  downvoters: string[]; // user ids
  picture: string; // URL or base64 encoded image)
  details: string;
  suggestedBy: string; //user id
}

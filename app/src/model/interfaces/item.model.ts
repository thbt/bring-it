import {UserInterface} from "./user.model";

export interface BringItItemInterface {
  uuid: string;
  name: string;
  thumbsUp: number;
  thumbsDown: number;
  quantity: number;
  broughtBy: string[]; // user ids
  voters: string[]; // user ids
  picture: string; // URL or base64 encoded image)
  details: string;
  suggestedBy: string; //user id
}

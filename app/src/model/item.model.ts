import {User} from "./user.model";

export interface BringItItem {
  id: string;
  name: string;
  thumbsUp: number;
  thumbsDown: number;
  quantity: number;
  broughtBy: User[];
  voters: User[];
  picture?: string; // URL or base64 encoded image)
  details?: string;
  suggestedBy?: User;
}

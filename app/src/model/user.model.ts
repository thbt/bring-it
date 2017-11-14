import { BringItEvent } from "./event.model";

export interface User {
  id: string; // note pour plus tard : utiliser "0" comme id si le local user n'est pas enregistré
  nickname: string;
  invitations: BringItEvent[];
  hostedEvents: BringItEvent[];
  password?: string;
  email?: string;
  profilePicture?: string; // url ou base64-encoded string
}

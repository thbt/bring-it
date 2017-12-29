export interface UserInterface {
  uuid: string; // note pour plus tard : utiliser "0" comme id si le local user n'est pas enregistré
  nickname: string;
  email: string;
  profilePicture: string; // url ou base64-encoded string
}

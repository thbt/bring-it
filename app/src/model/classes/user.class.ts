import { UUID } from "angular2-uuid";
import { UserInterface } from "../interfaces/user.model";

export class User implements UserInterface {
  private _uuid: string;
  private _nickname: string;
  private _email: string;
  private _profilePicture: string;

  constructor(nickname: string, email: string = '', profilePicture: string = '') {
    this.uuid = UUID.UUID();
    this.nickname = nickname;
    this.email = email;
    this.profilePicture = profilePicture;
  }

  toUserInterface(): UserInterface {
    return {
      uuid: this.uuid,
      nickname: this.nickname,
      email: this.email,
      profilePicture: this.profilePicture
    }
  }

  get uuid(): string {
    return this._uuid;
  }

  set uuid(value: string) {
    this._uuid = value;
  }

  get nickname(): string {
    return this._nickname;
  }

  set nickname(value: string) {
    this._nickname = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get profilePicture(): string {
    return this._profilePicture;
  }

  set profilePicture(value: string) {
    this._profilePicture = value;
  }
}

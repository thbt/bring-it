import { AuthUserInterface } from "../interfaces/auth-user.model";
import { UUID } from "angular2-uuid";
import { User } from "./user.class";

export class AuthUser implements AuthUserInterface {

  private _email: string;
  private _profilePicture: string;
  private _password: string;
  private _uuid: string;
  private _nickname: string;
  private _credentials: string;

  constructor(nickname: string, email: string, password: string, credentials: string = '', profilePicture: string = '') {
    this.uuid = UUID.UUID();
    this.email = email;
    this.password = password;
    this.nickname = nickname;
    this.credentials = credentials;
    this.profilePicture = profilePicture;
  }

  toUser(): User {
    let user = new User("");
    user.uuid = this.uuid;
    user.email = this.email;
    user.nickname = this.nickname;
    user.profilePicture = this.profilePicture;

    return user;
  }

  toAuthUserInterface(): AuthUserInterface {
    return {
      uuid: this.uuid,
      nickname: this.nickname,
      email: this.email,
      password: this._password,
      profilePicture: this.profilePicture,
      credentials: this.credentials
    }
  }

  static fromAuthUserInterface(authUserI: AuthUserInterface): AuthUser {
    let authUser = new AuthUser('', '', '');
    authUser.email = authUserI.email;
    authUser.nickname = authUserI.nickname;
    authUser.uuid = authUserI.uuid;
    authUser.password = authUserI.password;
    authUser.credentials = authUserI.credentials;
    authUser.profilePicture = authUserI.profilePicture;

    return authUser;
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


  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
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

  get credentials(): string {
    return this._credentials;
  }

  set credentials(value: string) {
    this._credentials = value;
  }
}

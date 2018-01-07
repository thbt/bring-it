import { AuthUserInterface } from "../interfaces/auth-user.model";
import { User } from "./user.class";

export class AuthUser implements AuthUserInterface {
  private __id: string;
  private _email: string;
  private _profilePicture: string;
  private _password: string;
  private _nickname: string;
  private _credentials: string;

  constructor(nickname: string, email: string, password: string, credentials: string = '', profilePicture: string = '') {
    this.email = email;
    this.password = password;
    this.nickname = nickname;
    this.credentials = credentials;
    this.profilePicture = profilePicture;
  }

  toUser(): User {
    let user = new User('', '');
    user.email = this.email;
    user.nickname = this.nickname;
    user.profilePicture = this.profilePicture;

    return user;
  }

  toAuthUserInterface(): AuthUserInterface {
    return {
      _id: this.__id,
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
    authUser.id = authUserI._id;
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

  get id(): string {
    return this.__id;
  }

  set id(value: string) {
    this.__id = value;
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

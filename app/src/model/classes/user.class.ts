import { IUser } from "../interfaces/user.model";

export class User implements IUser {
  _id: string;
  nickname: string;
  email: string;
  profilePicture: string;

  constructor(nickname: string, email: string, profilePicture: string = '') {
    this.nickname = nickname;
    this.email = email;
    this.profilePicture = profilePicture;
  }

  toUserInterface(): IUser {
    return {
      _id: this._id,
      nickname: this.nickname,
      email: this.email,
      profilePicture: this.profilePicture
    }
  }

  static fromUserI(value: IUser): User {
    let user = new User('', '');
    user._id = value._id;
    user.nickname = value.nickname;
    user.email = value.email;
    user.profilePicture = value.profilePicture;

    return user;
  }

  get id() {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
}

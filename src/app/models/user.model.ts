export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  emailId: string;
  password: string;
  age?: number;
  profileIconUrl: string;
  gallery?: string[];
  skills?: string[];
  createdAt: string;
  updatedAt: string;
}

export class User implements IUser {
  _id: string;
  firstName: string;
  lastName: string;
  emailId: string;
  password: string;
  age?: number;
  profileIconUrl: string;
  gallery?: string[];
  skills?: string[];
  createdAt: string;
  updatedAt: string;

  constructor(user: IUser) {
    this._id = user._id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.emailId = user.emailId;
    this.password = user.password;
    this.age = user.age;
    this.profileIconUrl = user.profileIconUrl;
    this.gallery = user.gallery || [];
    this.skills = user.skills || [];
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}

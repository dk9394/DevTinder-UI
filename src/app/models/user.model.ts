import { IApiResponse } from './auth.model';

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  emailId: string;
  password: string;
  age?: number;
  gender?: string;
  about?: string;
  profileIconUrl: string;
  gallery?: string[];
  skills?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface IUserResponse extends IApiResponse<IUser> {}

export interface IFeedsResponse extends IApiResponse<IUser[]> {}

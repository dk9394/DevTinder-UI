import { IApiResponse } from './auth.model';

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

export interface IFeedsResponse extends IApiResponse<IUser[]> {}

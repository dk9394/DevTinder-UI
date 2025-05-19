import { IUser } from './user.model';

export interface IApiResponse<T> {
  message: string;
  userMessage: string;
  data: T;
  status: number;
}

export interface ILoginCredentials {
  emailId: string;
  password: string;
}

export interface ILoginResponse extends IApiResponse<IUser> {
  expiresAt: string;
}

export interface ISignupData {
  firstName: string;
  lastName: string;
  emailId: string;
  password: string;
}

export interface ISignupResponse extends IApiResponse<IUser> {}

export interface ILogoutResponse {
  message: string;
  userMessage: string;
  status: number;
}

import { IUser } from './user.model';

export interface ILoginCredentials {
  emailId: string;
  password: string;
}

export interface ILoginResponse {
  message: string;
  userMessage: string;
  data: IUser;
  status: number;
  expiresAt: string;
}

export interface ISignupData {
  firstName: string;
  lastName: string;
  emailId: string;
  password: string;
}

export interface ISignupResponse {
  message: string;
  userMessage: string;
  data: IUser;
  status: number;
}

export interface ILogoutResponse {
  message: string;
  userMessage: string;
  status: number;
}

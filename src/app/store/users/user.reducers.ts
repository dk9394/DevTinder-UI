import { createReducer, on } from '@ngrx/store';

import { IUser } from 'src/app/models/user.model';
import {
  addUserFailure,
  addUserSuccess,
  removeUserFailure,
  removeUserSuccess,
} from './user.actions';

export enum UserStatus {
  Pending = 'pending',
  Success = 'success',
  Failed = 'failed',
}

export interface UserState {
  user: IUser | null;
  message: string | null;
  status: UserStatus;
}

export const initialState: UserState = {
  user: null,
  message: null,
  status: UserStatus.Pending,
};

export const userReducer = createReducer(
  initialState,
  on(addUserSuccess, (state, { data, message }) => ({
    ...state,
    user: { ...data },
    message,
    status: UserStatus.Success,
  })),
  on(addUserFailure, (state, { message }) => ({
    ...state,
    user: null,
    message,
    status: UserStatus.Failed,
  })),
  on(removeUserSuccess, (state, { message }) => ({
    ...state,
    user: null,
    message: message,
    status: UserStatus.Success,
  })),
  on(removeUserFailure, (state, { message }) => ({
    ...state,
    user: null,
    message: message,
    status: UserStatus.Failed,
  }))
);

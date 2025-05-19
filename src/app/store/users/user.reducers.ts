import { createReducer, on } from '@ngrx/store';

import { IUser } from 'src/app/models/user.model';
import {
  addUserFailure,
  addUserSuccess,
  removeUserFailure,
  removeUserSuccess,
} from './user.actions';
import { SliceStatus } from '../state.interfaces';

export interface UserState {
  user: IUser | null;
  message: string | null;
  status: SliceStatus;
}

const initialState: UserState = {
  user: null,
  message: null,
  status: SliceStatus.Pending,
};

export const userReducer = createReducer(
  initialState,
  on(addUserSuccess, (state, { data, message }) => ({
    ...state,
    user: { ...data },
    message,
    status: SliceStatus.Success,
  })),
  on(addUserFailure, (state, { message }) => ({
    ...state,
    user: null,
    message,
    status: SliceStatus.Failed,
  })),
  on(removeUserSuccess, (state, { message }) => ({
    ...state,
    user: null,
    message: message,
    status: SliceStatus.Success,
  })),
  on(removeUserFailure, (state, { message }) => ({
    ...state,
    user: null,
    message: message,
    status: SliceStatus.Failed,
  }))
);

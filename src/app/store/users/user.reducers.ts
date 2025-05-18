import { ILoginResponse } from './../../models/auth.model';
import { createReducer, on } from '@ngrx/store';
import { IUser } from 'src/app/models/user.model';
import { addUserFailure, addUserSuccess } from './user.actions';

export interface UserState {
  user: IUser | null;
  error: string | null;
  // message?: string;
  // userMessage?: string;
  // status?: number;
  // expiresAt?: string;
}

export const initialState: UserState = {
  user: null,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(addUserSuccess, (state, { user }) => ({
    ...state,
    user,
    error: null,
  })),
  on(addUserFailure, (state, { error }) => ({
    ...state,
    user: null,
    error: error,
  }))
);

import { createAction, props } from '@ngrx/store';
import { ILoginCredentials } from 'src/app/models/auth.model';
import { IUser } from 'src/app/models/user.model';

const ADD_USER = '[USER] Add loggedIn User';
const ADD_USER_SUCCESS = '[USER] Add loggedIn User Success';
const ADD_USER_FAILURE = '[USER] Add loggedIn User Failure';

export const addUser = createAction(
  ADD_USER,
  props<{ userCredentials: ILoginCredentials }>()
);

export const addUserSuccess = createAction(
  ADD_USER_SUCCESS,
  props<{ user: IUser }>()
);

export const addUserFailure = createAction(
  ADD_USER_FAILURE,
  props<{ error: string }>()
);

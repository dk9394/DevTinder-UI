import { createAction, props } from '@ngrx/store';

import { ILoginCredentials } from 'src/app/models/auth.model';
import { IUser } from 'src/app/models/user.model';

const LOGIN_USER = '[USER] Login User';
const ADD_USER_SUCCESS = '[USER] Add loggedIn User Success';
const ADD_USER_FAILURE = '[USER] Add loggedIn User Failure';

const LOGOUT_USER = '[USER] Logout User';
const REMOVE_USER_SUCCESS = '[USER] Remove loggedIn User Success';
const REMOVE_USER_FAILURE = '[USER] Remove loggedIn User Failure';

export const loginUser = createAction(
  LOGIN_USER,
  props<{ userCredentials: ILoginCredentials }>()
);

export const addUserSuccess = createAction(
  ADD_USER_SUCCESS,
  props<{ data: IUser; message: string }>()
);

export const addUserFailure = createAction(
  ADD_USER_FAILURE,
  props<{ message: string }>()
);

export const logoutUser = createAction(LOGOUT_USER);

export const removeUserSuccess = createAction(
  REMOVE_USER_SUCCESS,
  props<{ message: string }>()
);

export const removeUserFailure = createAction(
  REMOVE_USER_FAILURE,
  props<{ message: string }>()
);

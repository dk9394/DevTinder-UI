import { createAction, props } from '@ngrx/store';

import { IUser } from 'src/app/models/user.model';

const ADD_PROFILE = '[Profile] Add Profile';
const ADD_PROFILE_SUCCESS = '[Profile] Add Profile Success';
const ADD_PROFILE_FAILURE = '[Profile] Add Profile Failure';

export const addProfile = createAction(ADD_PROFILE);
export const addProfileSuccess = createAction(
  ADD_PROFILE_SUCCESS,
  props<{ data: IUser; message: string }>()
);
export const addProfileFailure = createAction(
  ADD_PROFILE_FAILURE,
  props<{ message: string }>()
);

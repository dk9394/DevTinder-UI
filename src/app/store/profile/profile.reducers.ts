import { createReducer, on } from '@ngrx/store';

import { IUser } from 'src/app/models/user.model';
import { SliceStatus } from '../state.interfaces';
import { addProfileFailure, addProfileSuccess } from './profile.actions';

export interface ProfileState {
  profile: IUser | null;
  message: string | null;
  status: SliceStatus;
}

const initialState: ProfileState = {
  profile: null,
  message: null,
  status: SliceStatus.Pending,
};

export const profileReducers = createReducer(
  initialState,
  on(addProfileSuccess, (state, { data, message }) => ({
    ...state,
    profile: { ...data },
    message,
    status: SliceStatus.Success,
  })),
  on(addProfileFailure, (state, { message }) => ({
    ...state,
    profile: null,
    message,
    status: SliceStatus.Failed,
  }))
);

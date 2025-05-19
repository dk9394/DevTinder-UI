import { createReducer, on } from '@ngrx/store';

import { IUser } from 'src/app/models/user.model';
import { addFeedsFailure, addFeedsSuccess } from './feed.actions';
import { SliceStatus } from '../state.interfaces';

export interface FeedsState {
  feeds: IUser[];
  message: string | null;
  status: SliceStatus;
}

const initialState: FeedsState = {
  feeds: [],
  message: null,
  status: SliceStatus.Pending,
};

export const feedsReducer = createReducer(
  initialState,
  on(addFeedsSuccess, (state, { feeds, message }) => ({
    ...state,
    feeds: [...feeds],
    message,
    status: SliceStatus.Success,
  })),
  on(addFeedsFailure, (state, { message }) => ({
    ...state,
    feeds: [],
    message,
    status: SliceStatus.Failed,
  }))
);

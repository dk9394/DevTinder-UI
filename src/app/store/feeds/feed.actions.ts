import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/models/user.model';

export const ADD_FEEDS = '[FEEDS] add feeds';
export const ADD_FEEDS_SUCCESS = '[FEEDS] add feeds success';
export const ADD_FEEDS_FAILURE = '[FEEDS] add feeds failure';

export const addFeeds = createAction(ADD_FEEDS);
export const addFeedsSuccess = createAction(
  ADD_FEEDS_SUCCESS,
  props<{ feeds: IUser[]; message: string }>()
);
export const addFeedsFailure = createAction(
  ADD_FEEDS_FAILURE,
  props<{ message: string }>()
);

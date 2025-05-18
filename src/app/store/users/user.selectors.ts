import { createSelector } from '@ngrx/store';
import { UserState } from './user.reducers';

export const selectUser = (state: UserState) => state.user;
export const loggedInUser = createSelector(selectUser, (user) => user);

import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';

export const selectUser = (state: AppState) => state.user;
export const loggedInUser = createSelector(selectUser, (user) => user);

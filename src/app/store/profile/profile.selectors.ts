import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';

export const selectprofile = (state: AppState) => state.profile;
export const selectMyProfile = createSelector(
  selectprofile,
  (profile) => profile.profile
);

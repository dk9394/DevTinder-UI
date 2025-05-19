import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';

export const selectFeedsState = (state: AppState) => state.feeds;
export const selectFeeds = createSelector(
  selectFeedsState,
  (feeds) => feeds.feeds
);

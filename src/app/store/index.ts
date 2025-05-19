import { feedEffects } from './feeds/feed.effects';
import { feedsReducer } from './feeds/feed.reducers';
import { UserEffects } from './users/user.effects';
import { userReducer } from './users/user.reducers';

export const appReducers = {
  user: userReducer,
  feeds: feedsReducer,
};

export const appEffects = [UserEffects, feedEffects];

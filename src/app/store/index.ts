import { feedEffects } from './feeds/feed.effects';
import { feedsReducer } from './feeds/feed.reducers';
import { ProfileEffects } from './profile/profile.effects';
import { profileReducers } from './profile/profile.reducers';
import { UserEffects } from './users/user.effects';
import { userReducer } from './users/user.reducers';

export const appReducers = {
  user: userReducer,
  feeds: feedsReducer,
  profile: profileReducers,
};

export const appEffects = [UserEffects, feedEffects, ProfileEffects];

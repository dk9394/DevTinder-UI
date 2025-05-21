import { FeedsState } from './feeds/feed.reducers';
import { ProfileState } from './profile/profile.reducers';
import { UserState } from './users/user.reducers';

export interface AppState {
  user: UserState;
  feeds: FeedsState;
  profile: ProfileState;
}

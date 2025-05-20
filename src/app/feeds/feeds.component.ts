import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../store/app.state';
import { addFeeds } from '../store/feeds/feed.actions';
import { IUser } from '../models/user.model';
import { selectFeeds } from '../store/feeds/feed.selectors';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
})
export class FeedsComponent implements OnInit {
  feeds: IUser[] = [];

  currentUserIndex: number = 0;

  feed!: IUser;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(addFeeds());
    this.store.select(selectFeeds).subscribe((feeds: IUser[]) => {
      this.feeds = feeds;
      this.setFeed();
    });
  }

  setNextFeed(): void {
    this.currentUserIndex++;
    this.setFeed();
  }

  private setFeed() {
    this.feed = this.setDefaultUser(this.feeds[this.currentUserIndex]);
  }

  private setDefaultUser(feed: IUser) {
    const newUser = {
      ...feed,
      age: feed?.age || 30,
      gender: feed?.gender || 'male',
      about: feed?.about || 'I am 10 years experienced frontend engineer.',
      skills: feed?.skills?.length
        ? feed?.skills
        : ['JavaScript', 'Angular', 'NodeJS', 'TypeScript'],
    };
    return newUser;
  }
}

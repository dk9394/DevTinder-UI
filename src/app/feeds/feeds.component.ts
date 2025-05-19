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
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(addFeeds());
    this.store.select(selectFeeds).subscribe((feeds: IUser[]) => {
      this.feeds = feeds;
      console.log('Feeds', this.feeds);
    });
  }
}

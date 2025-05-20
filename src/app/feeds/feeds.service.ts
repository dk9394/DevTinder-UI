import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../services/api.service';
import { IFeedsResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class FeedsService {
  page: number = 1;
  limit: number = 6;

  private get _feeds() {
    return '/feeds';
  }

  private feedsEndpoints = {
    feeds: this._feeds + '',
  };

  constructor(private apiService: ApiService) {}

  fetchFeeds(): Observable<IFeedsResponse> {
    return this.apiService.get(this.feedsEndpoints.feeds, {
      params: { page: this.page, limit: this.limit },
    });
  }
}

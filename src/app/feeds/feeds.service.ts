import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../services/api.service';
import { IFeedsResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class FeedsService {
  private get _feeds() {
    return '/feeds';
  }

  private feedsEndpoints = {
    feeds: this._feeds + '',
  };

  constructor(private apiService: ApiService) {}

  fetchFeeds(): Observable<IFeedsResponse> {
    return this.apiService.get(this.feedsEndpoints.feeds);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { IUserResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private get _profile() {
    return '/profile';
  }

  private profileEndpoints = {
    profile: this._profile + '',
  };

  constructor(private apiService: ApiService) {}

  fetchProfile(): Observable<IUserResponse> {
    return this.apiService.get<IUserResponse>(this.profileEndpoints.profile);
  }
}

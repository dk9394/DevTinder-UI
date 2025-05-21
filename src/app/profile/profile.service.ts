import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { IProfileResponse } from '../models/user.model';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private get _profile() {
    return '/profile';
  }

  private profileEndpoints = {
    profile: this._profile + '',
  };

  constructor(private apiService: ApiService) {}

  fetchProfile(): Observable<IProfileResponse> {
    return this.apiService.get<IProfileResponse>(this.profileEndpoints.profile);
  }
}

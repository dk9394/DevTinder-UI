import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import {
  ILoginCredentials,
  ILoginResponse,
  ILogoutResponse,
  ISignupData,
  ISignupResponse,
} from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  get _auth() {
    return '/auth';
  }

  private authEndpoints = {
    login: this._auth + '/login',
    signup: this._auth + '/signup',
    logout: this._auth + '/logout',
  };

  constructor(private apiService: ApiService) {}

  login(payload: ILoginCredentials): Observable<ILoginResponse> {
    return this.apiService.post(this.authEndpoints.login, payload);
  }

  register(payload: ISignupData): Observable<ISignupResponse> {
    return this.apiService.post(this.authEndpoints.signup, payload);
  }

  logout(): Observable<ILogoutResponse> {
    return this.apiService.post(this.authEndpoints.logout, {});
  }
}

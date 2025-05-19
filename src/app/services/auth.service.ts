import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { ApiService } from './api.service';
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
  private _TOKEN: string | null = null;

  private _isAuthorizedUser$ = new BehaviorSubject<boolean>(false);

  get isAuthorizedUser(): Observable<boolean> {
    return this._isAuthorizedUser$.asObservable();
  }

  private get _auth() {
    return '/auth';
  }

  private authEndpoints = {
    login: this._auth + '/login',
    signup: this._auth + '/signup',
    logout: this._auth + '/logout',
  };

  constructor(private apiService: ApiService) {}

  login(payload: ILoginCredentials): Observable<ILoginResponse> {
    return this.apiService
      .post<ILoginResponse>(this.authEndpoints.login, payload)
      .pipe(tap(() => this.setUserStatus()));
  }

  register(payload: ISignupData): Observable<ISignupResponse> {
    return this.apiService.post<ISignupResponse>(
      this.authEndpoints.signup,
      payload
    );
  }

  logout(): Observable<ILogoutResponse> {
    return this.apiService
      .post<ISignupResponse>(this.authEndpoints.logout, {})
      .pipe(
        tap(() => {
          this.setUserStatus();
        })
      );
  }

  getToken(): string | null {
    return this._TOKEN;
  }

  setUserStatus(): void {
    const authToken = this.getTokenFromCookie('token');
    this._isAuthorizedUser$.next(!!authToken);
    this.setToken(authToken);
  }

  private setToken(token: string | null): void {
    this._TOKEN = token;
  }

  private getTokenFromCookie(cookieName: string): string | null {
    const name = cookieName + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let c of ca) {
      c = c.trim();
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiURL: string = environment.api;

  constructor(private http: HttpClient) {}

  get<T>(endpoint: string, options = {}): Observable<T> {
    return this.http.get<T>(this.setUrl(endpoint), options);
  }

  post<T>(endpoint: string, payload: unknown, options = {}): Observable<T> {
    return this.http.post<T>(this.setUrl(endpoint), payload, options);
  }

  put<T>(endpoint: string, payload: unknown, options = {}): Observable<T> {
    return this.http.put<T>(this.setUrl(endpoint), payload, options);
  }

  patch<T>(endpoint: string, payload: unknown, options = {}): Observable<T> {
    return this.http.patch<T>(this.setUrl(endpoint), payload, options);
  }

  delete<T>(endpoint: string, options = {}): Observable<T> {
    return this.http.delete<T>(this.setUrl(endpoint), options);
  }

  private setUrl(endpoint: string): string {
    if (!endpoint) {
      return this.apiURL;
    }
    return this.apiURL + endpoint;
  }
}

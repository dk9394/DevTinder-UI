import {
  HttpClient,
  HttpContext,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

interface IHttpOptions {
  headers?: HttpHeaders;
  context?: HttpContext;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiURL: string = environment.api;

  constructor(private http: HttpClient) {}

  get<T>(endpoint: string, options: IHttpOptions = {}): Observable<T> {
    return this.http.get<T>(
      this.setUrl(endpoint)
      // this.setHttpMethodOptions(options)
    );
  }

  post<T>(
    endpoint: string,
    payload: unknown,
    options: IHttpOptions = {}
  ): Observable<T> {
    return this.http.post<T>(
      this.setUrl(endpoint),
      payload
      // this.setHttpMethodOptions(options)
    );
  }

  put<T>(
    endpoint: string,
    payload: unknown,
    options: IHttpOptions = {}
  ): Observable<T> {
    return this.http.put<T>(
      this.setUrl(endpoint),
      payload
      // this.setHttpMethodOptions(options)
    );
  }

  patch<T>(
    endpoint: string,
    payload: unknown,
    options: IHttpOptions = {}
  ): Observable<T> {
    return this.http.patch<T>(
      this.setUrl(endpoint),
      payload
      // this.setHttpMethodOptions(options)
    );
  }

  delete<T>(endpoint: string, options: IHttpOptions = {}): Observable<T> {
    return this.http.delete<T>(
      this.setUrl(endpoint)
      // this.setHttpMethodOptions(options)
    );
  }

  private setHttpMethodOptions(options: IHttpOptions = {}): IHttpOptions {
    const finalOptions: IHttpOptions = {};

    Object.keys(options).forEach((key) => {
      switch (key) {
        case 'headers': {
          finalOptions.headers = new HttpHeaders({ ...options.headers });
          break;
        }
        case 'params': {
          finalOptions.params = new HttpParams({ ...options.params });
          break;
        }
        case 'context': {
          // finalOptions.context = new HttpContext({ ...options.context });
          break;
        }
        case 'observe': {
          finalOptions.observe = options.observe;
          break;
        }
        case 'reportProgress': {
          finalOptions.reportProgress = options.reportProgress;
          break;
        }
        case 'responseType': {
          finalOptions.responseType = options.responseType;
          break;
        }
        case 'withCredentials': {
          finalOptions.withCredentials = options.withCredentials;
          break;
        }
      }
    });

    return finalOptions;
  }

  private setUrl(endpoint: string): string {
    if (!endpoint) {
      return this.apiURL;
    }
    return this.apiURL + endpoint;
  }
}

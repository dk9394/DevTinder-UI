import {
  HttpClient,
  HttpContext,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  apiURL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  get<T>(endpoint: string, options: IHttpOptions = {}): Observable<T> {
    return this.http.get<T>(
      this.setUrl(endpoint),
      this.setHttpMethodOptions(options)
    );
  }

  post<T>(
    endpoint: string,
    payload: unknown,
    options: IHttpOptions = {}
  ): Observable<T> {
    return this.http.post<T>(
      this.setUrl(endpoint),
      payload,
      this.setHttpMethodOptions(options)
    );
  }

  put<T>(
    endpoint: string,
    payload: unknown,
    options: IHttpOptions = {}
  ): Observable<T> {
    return this.http.put<T>(
      this.setUrl(endpoint),
      payload,
      this.setHttpMethodOptions(options)
    );
  }

  patch<T>(
    endpoint: string,
    payload: unknown,
    options: IHttpOptions = {}
  ): Observable<T> {
    return this.http.patch<T>(
      this.setUrl(endpoint),
      payload,
      this.setHttpMethodOptions(options)
    );
  }

  delete<T>(endpoint: string, options: IHttpOptions = {}): Observable<T> {
    return this.http.delete<T>(
      this.setUrl(endpoint),
      this.setHttpMethodOptions(options)
    );
  }

  private setHttpMethodOptions(options: IHttpOptions = {}): IHttpOptions {
    const finalOptions: IHttpOptions = {};

    finalOptions.headers = new HttpHeaders({ ...options.headers });
    // finalOptions.context = new HttpContext({...options.context});
    finalOptions.observe = options.observe;
    finalOptions.params = new HttpParams({ ...options.params });
    finalOptions.reportProgress = options.reportProgress;
    finalOptions.responseType = options.responseType;
    finalOptions.withCredentials = options.withCredentials;

    return finalOptions;
  }

  private setUrl(endpoint: string): string {
    if (!endpoint) {
      return this.apiURL;
    }
    return this.apiURL + endpoint;
  }
}

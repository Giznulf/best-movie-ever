import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  private readonly _apiUrl = 'assets/';

  get(endAddress: string): Observable<any> {
    return this.http.get(`${this._apiUrl}${endAddress}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { State } from '../shared/state';
import { baseurl } from '../shared/baseurl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatelistService {

  constructor(private http: HttpClient) { }

  getstatelist(abcd: string): Observable<State[]> {
    return this.http.get<State[]>(abcd);
  }
}

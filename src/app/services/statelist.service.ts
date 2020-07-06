import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { State } from '../shared/state';
import { baseurl } from '../shared/baseurl';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatelistService {

  constructor(private http: HttpClient) { }

  getstatelist(abcd: string): Observable<State[]> {
    return this.http.get<State[]>(baseurl+'/countries/'+abcd+'/confirmed');
  }

  getstate(abcd: string, uid: string): Observable<State> {
    return this.http.get<State>(baseurl+'/countries/'+abcd+'/confirmed/?uid='+uid)
    .pipe(map(data=>data[0]));    
  }
}

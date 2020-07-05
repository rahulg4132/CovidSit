import { Injectable } from '@angular/core';
import {baseurl} from '../shared/baseurl';
import {Globe} from '../shared/globe';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient) { }

  getglobal(): Observable<Globe> {
    return this.http.get<Globe>(baseurl);
  }
  
}

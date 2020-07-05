import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Globe } from '../shared/globe';
import { baseurl } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class CountrywiseService {

  constructor(private http: HttpClient) { }

  getCountryDetails(abcd: string): Observable<Globe> {
    return this.http.get<Globe>(baseurl+'/countries/'+abcd);
  }
}

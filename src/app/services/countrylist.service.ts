import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country, CountryArr } from '../shared/country';
import { baseurl } from '../shared/baseurl';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountrylistService {

  constructor(private http: HttpClient) { }
  
  getcountrylist(): Observable<CountryArr>{
    return this.http.get<CountryArr>(baseurl+'/countries')
    .pipe(map(countries=>countries));
  }
}

import { Component, OnInit } from '@angular/core';
import { CountrylistService } from '../services/countrylist.service';
import { Country, CountryArr } from '../shared/country';
import {FormControl, FormGroup, FormControlName} from '@angular/forms';
import { StatelistService } from '../services/statelist.service';
import { State } from '../shared/state';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  countryarr: CountryArr;
  countries: Country[];  

  constructor(private countrylist: CountrylistService, private statelist: StatelistService) { }

  form = new FormGroup({
    selectedcountry: new FormControl('India'),
  });

  ngOnInit() {
    this.countrylist.getcountrylist()
    .subscribe((data)=>{
      this.countryarr=data;      
      this.countries=this.countryarr.countries;       
    });            
  }  
  
  
}

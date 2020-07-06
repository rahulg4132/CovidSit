import { Component, OnInit } from '@angular/core';
import { CountrylistService } from '../services/countrylist.service';
import { Country, CountryArr } from '../shared/country';
import {FormControl, FormGroup, FormControlName} from '@angular/forms';
import { StatelistService } from '../services/statelist.service';
import { State } from '../shared/state';
import { CountrywiseService } from '../services/countrywise.service';
import { Globe } from '../shared/globe';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  countryarr: CountryArr;
  countries: Country[];  
  selcountry: Globe;
  states: State[];
  stat: State;

  constructor(private countrylist: CountrylistService, private statelist: StatelistService, private countrywise: CountrywiseService) {}
  
  ngOnInit() {
    this.countrylist.getcountrylist()
    .subscribe((data)=>{
      this.countryarr=data;      
      this.countries=this.countryarr.countries;       
    });    

    this.form.get("selectedcountry").valueChanges
    .subscribe(val=>{
      this.countrywise.getCountryDetails(val)
      .subscribe(data=>this.selcountry=data);

      this.stat=null;
      this.states=null;

      this.statelist.getstatelist(val)
      .subscribe((data)=>{
        this.states=data;        
      });      
    });

    this.form.get("selectedprovince").valueChanges
    .subscribe(val=>{
      this.stat=this.states.filter(function(item){
        return item.uid==val;
      })[0];      
    });

  }  
  
  form = new FormGroup({
    selectedcountry: new FormControl(''),  
    selectedprovince: new FormControl('')
  });


}

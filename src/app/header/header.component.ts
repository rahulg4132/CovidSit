import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../services/global.service';
import { Globe } from '../shared/globe';
import {ValDet} from '../shared/valdet';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  globe: Globe;
  gconfirm: number;
  grecover: number;
  gdeath: number;
  gactive: number;

  constructor(private global: GlobalService) { }
  
  ngOnInit() {  
    return this.global.getglobal()
    .subscribe(data=>{
      this.globe=data;
      this.gconfirm=data.confirmed.value;
      this.grecover=data.recovered.value;
      this.gdeath=data.deaths.value;
      this.gactive=this.gconfirm-this.grecover-this.gdeath;
    });
  }
  
}

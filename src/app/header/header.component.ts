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
  gconfirm: ValDet;
  grecover: ValDet;
  gdeath: ValDet;

  constructor(private global: GlobalService) { }
  
  ngOnInit() {  
    return this.global.getglobal()
    .subscribe(data=>{
      this.globe=data;
      this.gconfirm=data.confirmed;
      this.grecover=data.recovered;
      this.gdeath=data.deaths;
    });
  }
  
}

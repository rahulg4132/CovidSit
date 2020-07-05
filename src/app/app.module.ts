import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CountUpModule} from 'ngx-countup';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { GlobalService } from './services/global.service';
import { baseurl } from './shared/baseurl';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CountUpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [  
    GlobalService,
    {provide: 'baseURL', useValue: baseurl}  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {CountUpModule} from 'ngx-countup';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import 'hammerjs';
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
    BrowserAnimationsModule,
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
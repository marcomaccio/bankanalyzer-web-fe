import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent }       from './app.component';
import { AppRoutingModule }   from './app-routing.module';

import { DashboardComponent }           from './dashboard/dashboard.component';
import { BankAccountDetailsComponent }  from './bank-account-details/bank-account-details.component';
import { BankAccountListComponent }     from './bank-account-list/bank-account-list.component';

import {BankAccountService}             from "./bank-account.service";

import 'hammerjs';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    BankAccountDetailsComponent,
    BankAccountListComponent
  ],
  providers: [
    BankAccountService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

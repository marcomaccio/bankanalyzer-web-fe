import { Injectable } from '@angular/core';
import { Headers, Http, ConnectionBackend } from "@angular/http";

import 'rxjs/add/operator/toPromise';

import { BankAccount }   from './bank-account';

@Injectable()
export class BankAccountService {

  private bankAccountsUrl = 'http://localhost:8008/api/bankaccounts';  // URL to web api

  constructor(private http: Http) { }

  getBankAccounts(): Promise<BankAccount[]>{
    return this.http.get(this.bankAccountsUrl)
      .toPromise()
      .then( response => response.json() as BankAccount[])
      .catch(this.handleError)

  }

  getBankAccount(iban: string): Promise<BankAccount>{
    //build the url to contact
    const url = `${this.bankAccountsUrl}/${iban}`;

    return this.http.get(url)
      .toPromise()
      .then( response => response.json().data as BankAccount)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);      // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

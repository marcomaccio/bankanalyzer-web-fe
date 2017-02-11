import {Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location }               from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { BankAccount }            from '../bank-account';
import { BankAccountService }     from "../bank-account.service";

@Component({
  selector:     'app-bank-account-details',
  templateUrl:  './bank-account-details.component.html',
  styleUrls:    ['./bank-account-details.component.css']
})
export class BankAccountDetailsComponent implements OnInit {

  constructor(
    private bankAccountService: BankAccountService,
    private route:              ActivatedRoute,
    private location:           Location
  ) {}

  @Input()
  bankAccount: BankAccount;

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.bankAccountService.getBankAccount(params['iban']))
      .subscribe(bankAccount => this.bankAccount = bankAccount);
  }

}

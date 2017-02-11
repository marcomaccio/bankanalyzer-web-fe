import { Component, OnInit  } from '@angular/core';

import {BankAccount         } from "../bank-account";
import { BankAccountService } from '../bank-account.service';

@Component({
  selector:     'app-dashboard',
  templateUrl:  './dashboard.component.html',
  styleUrls:    ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bankAccounts: BankAccount[] = [];

  constructor(private bankAccountService : BankAccountService) {}

  ngOnInit(): void {
    this.bankAccountService.getBankAccounts().then(bankAccounts => this.bankAccounts = bankAccounts);
  }

}

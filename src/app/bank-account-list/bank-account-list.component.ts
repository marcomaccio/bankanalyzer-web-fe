import { Component, OnInit } from '@angular/core';

import { BankAccount }        from "../bank-account";
import { BankAccountService } from "../bank-account.service";

@Component({
  selector:     'app-bank-account-list',
  templateUrl:  './bank-account-list.component.html',
  styleUrls:    ['./bank-account-list.component.css']
})
export class BankAccountListComponent implements OnInit {

  bankAccounts: BankAccount[];
  selectedBankAccount: BankAccount;

  constructor(private bankAccountService: BankAccountService) { }

  getBankAccounts(): void {
    this.bankAccountService.getBankAccounts().then(bankAccounts => this.bankAccounts = bankAccounts);
  }

  ngOnInit(): void {
    this.getBankAccounts();
  }

  onSelect(bankAccount: BankAccount): void {
    this.selectedBankAccount = bankAccount;
  }

}

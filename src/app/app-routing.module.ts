import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';

import { DashboardComponent }           from './dashboard/dashboard.component';
import { BankAccountListComponent }     from "./bank-account-list/bank-account-list.component";
import { BankAccountDetailsComponent }  from "./bank-account-details/bank-account-details.component";

const routes: Routes = [
  { path: '',                     redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',            component: DashboardComponent },
  { path: 'bankaccounts',         component: BankAccountListComponent },
  { path: 'bankaccounts/:iban',   component: BankAccountDetailsComponent },
  // { path: 'transactions/:iban',   component: TransactionListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

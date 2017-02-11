import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Transaction }        from '../transaction';


@Component({
  selector:     'app-transaction-list',
  templateUrl:  './transaction-list.component.html',
  styleUrls:    ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

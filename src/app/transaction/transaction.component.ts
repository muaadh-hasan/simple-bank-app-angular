import { ApiService } from './../shared/api.service';
import { Transaction } from './../models/Transaction';
import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactions: Transaction[] = [];

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.getAllTransaction();
  }

  public getAllTransaction() {
    this.apiService.getAllTransactions().subscribe(
      res => {
        this.transactions = res;
      },
      err => {
        alert("An error has occurred;")
      }
    );
  }

}

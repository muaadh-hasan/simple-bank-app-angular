import { Router } from '@angular/router';
import { Transaction } from './../models/Transaction';
import { ApiService } from './../shared/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addTransaction',
  templateUrl: './addTransaction.component.html',
  styleUrls: ['./addTransaction.component.css']
})
export class AddTransactionComponent implements OnInit {


   transactionModel: Transaction = {
     type: '',
     date: '',
     amount: 0
   }

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

  public addTransaction() {
    this.apiService.addTransAction(this.transactionModel).subscribe(
      res => {
        location.replace("http://localhost:4200/transaction");
      },
      err => {
        alert("An error has occurred;")
      }
    );
  }

}

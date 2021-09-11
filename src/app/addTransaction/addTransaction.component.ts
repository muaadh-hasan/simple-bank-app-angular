import { CreditCard } from './../models/CreditCard';
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



  CreditModel : CreditCard = {
    nameOfCard: '',
    date: '',
    securityCode: '',
    cardNumber: 0,
    customerId: 0
  }


  transactionModel: Transaction = {
    type: "CASH",
    date: '',
    amount: 0
  }

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

  public addTransaction() {
    // alert(this.transactionModel.amount + this.transactionModel.type + this.transactionModel.date);
    this.apiService.addTransAction(this.transactionModel,this.CreditModel).subscribe(
      res => {
        location.replace("http:/localhost:8082/transactions");
      },
      err => {
        alert("An error has occurred;")
      }
    );
  }

}

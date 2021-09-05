import { ApiService } from './../shared/api.service';
import { Customer } from './../models/Customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addCustomer',
  templateUrl: './addCustomer.component.html',
  styleUrls: ['./addCustomer.component.css']
})
export class AddCustomerComponent implements OnInit {


  customerModel: Customer = {
    name: '',
    gender: '',
    numberOfTransaction: 0,
    address: ''
  };

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

  // addCustomer():void{
  //   alert(this.model.name +  this.model.address + this.model.gender );
  // }

  public addCustomer() {
    this.apiService.addCustomer(this.customerModel).subscribe(
      res => {
        location.replace("");
      },
      err => {
        alert("An error has occurred;")
      }
    );
  }

}

import { ApiService } from './../shared/api.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/Customer';



const COUNTRIES: Customer[] = [];


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


  customers: Customer[] = [];

  constructor(private apiService:ApiService) {

   }

  ngOnInit() {
    this.getAllCustomers();
  }

  public getAllCustomers() {
    this.apiService.getAllCustomers().subscribe(
      res => {
        this.customers = res;
      },
      err => {
        alert("An error has occurred;")
      }
    );
  }

}

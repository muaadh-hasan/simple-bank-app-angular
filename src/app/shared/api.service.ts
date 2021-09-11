import { CreditCard } from './../models/CreditCard';
import { transition } from '@angular/animations';
import { Transaction } from './../models/Transaction';
import { Customer } from './../models/Customer';
import { CustomerComponent } from './../customer/customer.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {




  private BASE_URL = "http://localhost:8082";
  private ALL_CUSTOMERS_URL = `${this.BASE_URL}\\customers\\all`;
  private ADD_CUSTOMER_URL = `${this.BASE_URL}\\customers\\add\\`;
  private ALL_TRANSACTION_URL = `${this.BASE_URL}\\transactions\\all`;
  private ADD_TRANSACTION_URL = `${this.BASE_URL}\\transactions\\add\\`;
  private ADD_CreditCard_URL = `${this.BASE_URL}\\CreditCard\\add\\`;

constructor(private http: HttpClient) { }

getAllTransactions() {
  return this.http.get<Transaction[]>(this.ALL_TRANSACTION_URL);
}

getAllCustomers(): Observable<Customer[]> {
  return this.http.get<Customer[]>(this.ALL_CUSTOMERS_URL);
}

addCustomer(customer:Customer): Observable<Customer> {
  return this.http.post<Customer>(this.ADD_CUSTOMER_URL,customer);
}

addTransAction(transition:Transaction,creditCard:CreditCard): Observable<Transaction> {
  if(transition.type=="CASH"){
    return this.http.post<Transaction>(this.ADD_TRANSACTION_URL,transition);
  }else{
    this.http.post<CreditCard>(this.ADD_CreditCard_URL,creditCard);
    return this.http.post<Transaction>(this.ADD_TRANSACTION_URL,transition);
  }


}

}

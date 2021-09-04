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

constructor(private http: HttpClient) { }

getAllCustomers(): Observable<Customer[]> {
  return this.http.get<Customer[]>(this.ALL_CUSTOMERS_URL);
}

}

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CustomerComponent } from './customer/customer.component';
import { TransactionComponent } from './transaction/transaction.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddCustomerComponent } from './addCustomer/addCustomer.component';
import { AddTransactionComponent } from './addTransaction/addTransaction.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const appRoutes :Routes = [
  {
    path:'customer',
    component:CustomerComponent
  },
  {
    path:'transaction',
    component:TransactionComponent
  },
  {
    path:'addCustomer',
    component:AddCustomerComponent
  },
  {
    path:'addTransaction',
    component:AddTransactionComponent
  },
  {
    path:'',
    component:CustomerComponent,
    pathMatch:'full'
  },
  // {
  //   path:'**',
  //   component:NotFoundComponent
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CustomerComponent,
    TransactionComponent,
      AddCustomerComponent,
      AddTransactionComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true}),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

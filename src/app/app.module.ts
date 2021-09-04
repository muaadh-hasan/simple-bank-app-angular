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
    TransactionComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

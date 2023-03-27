import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionHistoryComponentComponent } from './transaction-history-component/transaction-history-component.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { BalanceComponent } from './balance/balance.component';
import { TransfermoneyComponent } from './transfermoney/transfermoney.component';
import { BaseComponent } from './base/base.component';
import { SearchPipe } from './pipes/search.pipe';
import { DeleteconfirmComponent } from './deleteconfirm/deleteconfirm.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    DashboardComponent,
    TransactionHistoryComponentComponent,
    PageNotFoundComponentComponent,
    HomeComponent,
    BalanceComponent,
    TransfermoneyComponent,
    BaseComponent,
    SearchPipe,
    DeleteconfirmComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

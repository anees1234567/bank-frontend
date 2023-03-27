import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { TransactionHistoryComponentComponent } from './transaction-history-component/transaction-history-component.component';

const routes: Routes = [

{  path:"",component:LoginComponentComponent},
{ path:'register',component:RegisterComponentComponent},
{path:"dashboard",component:BaseComponent},
{path:"transaction",component:TransactionHistoryComponentComponent},
{path:"**",component:PageNotFoundComponentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

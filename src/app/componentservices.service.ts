import { Injectable } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransfermoneyComponent } from './transfermoney/transfermoney.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentservicesService {

  constructor(private dashboard:DashboardComponent,private transfermoney:TransfermoneyComponent ) { }



}

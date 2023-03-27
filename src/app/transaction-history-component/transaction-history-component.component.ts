import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-transaction-history-component',
  templateUrl: './transaction-history-component.component.html',
  styleUrls: ['./transaction-history-component.component.css']
})


export class TransactionHistoryComponentComponent implements OnInit{
  transactions:any;
  searchterm:string=""
  
   

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.transactionhistory().subscribe((result:any)=>{
        
       
       
      this.transactions=result.transaction
      console.log(result);
      
      console.log(result.transaction);
       })
     }

     search(){
      console.log(this.searchterm);
      
     }
  }



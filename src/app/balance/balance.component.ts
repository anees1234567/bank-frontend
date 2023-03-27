import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
  animations: [
    trigger('spin', [
      state('inactive', style({
        transform: 'rotate(0deg)'
      })),
      state('active', style({
        transform: 'rotate(360deg)'
      })),
      transition('inactive => active', animate('2s linear')),
      
    ])
  ]
})
export class BalanceComponent implements OnInit {

  userbalance:number=0;
  currentAcno:any;
  constructor(private api:ApiService){}

    
 

  ngOnInit(): void {
    console.log("balance component work");
    this.currentAcno=JSON.parse(localStorage.getItem("currentAcno")||"")
    this.api.getBalance(this.currentAcno).subscribe((result:any)=>{
      console.log(result);
      this.userbalance=result.balance
      console.log(this.userbalance);
      
    })
      
  }

  isRefreshing: boolean = false;

  refresh() {
    this.isRefreshing = true;
    setTimeout(() => {

      this.isRefreshing = false;
      
       this.api.getBalance(this.currentAcno).subscribe((result:any)=>{
      console.log(result);
      this.userbalance=result.balance
      console.log(this.userbalance);
      
    })


    }, 1000);
  }

  
  
    
    
   
   
   

  
 
 
  

 


}

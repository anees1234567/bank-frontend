import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit{
  isbalance:boolean=false
  formdisplay:boolean=false
  balanceclosebutton:boolean=false
  
  

 
  constructor(private api:ApiService){}
  
  ngOnInit(): void {
    this.isbalance=false; 
  }

  balancecheck(){
    this.isbalance=true;
    this.balanceclosebutton=true
  }

  

  showForm(){
    this.formdisplay=true
  }

  transferclose(){
    console.log("hiii");
    
    this.formdisplay=false
  }

  closeform(){
    this.formdisplay=false
  }

  balanceclose(){
    this.isbalance=false;
    this.balanceclosebutton=false
  }


  }

  
   

 


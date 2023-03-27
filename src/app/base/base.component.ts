import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit{


  constructor(private baserouter:Router, private api:ApiService){}
  
  ishome:boolean=false
  isdashboard:boolean=false
  deleteconformstatus:boolean=false
  logoutstatus:Boolean=false
  deletemsg:string="";

  ngOnInit(): void {

        // check user logined or not
        if(!localStorage.getItem('token')){
          alert('Please Login')
          // redirect to login page
          this.baserouter.navigateByUrl('')
        }
    this.ishome=true;
    
  
  }

  displayhome(){
      this.ishome=true;
      this.isdashboard=false;
     
  }

  displaydash(){
       this.ishome=false;
      this.isdashboard=true;
  }

   // logout()
   logout(){
    // remove login details from local storage
    localStorage.removeItem('token')
    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentAcno')
    this.logoutstatus=true
    // redirect to login page 
    this.baserouter.navigateByUrl('')

   
  }

delete(){
  this.deleteconformstatus=true
}

deletecancel(){
  this.deleteconformstatus=false
}

deletefromparent(){
  this.api.deleteaccount().subscribe(
    (result:any)=>{
      this.deletemsg=result.message
      console.log(this.deletemsg);
      

     // remove login details from local storage
    localStorage.removeItem('token')
    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentAcno')
    this.logoutstatus=true
    // redirect to login page 
    this.baserouter.navigateByUrl('')
    },

    (result:any)=>{
      this.deletemsg=result.error.message
    }
  )
}









//   displaytransaction(){
//       this.istransaction=true
//       this.isbalance=false
//       this.istransfer=false
//       this.ishome=false;
//    }
//   displaybalance(){
//       this.isbalance=true
//       this.istransfer=false
//       this.ishome=false;
//       this.istransaction=false
//  }
//  displaytransfermoney(){
//   this.istransfer=true
//   this.ishome=false;
//   this.istransaction=false
//   this.isbalance=false
//  }



}

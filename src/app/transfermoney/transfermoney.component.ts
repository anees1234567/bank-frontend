import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';




@Component({
  selector: 'app-transfermoney',
  templateUrl: './transfermoney.component.html',
  styleUrls: ['./transfermoney.component.css']
})


export class TransfermoneyComponent {

  constructor(private formbuilder:FormBuilder,private api:ApiService){}

  fundtransfersuccess:Boolean=false
  fundtransfererror:Boolean=false
  errormsg:any;

  depositform=this.formbuilder.group({

    toacno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
    password:['',[Validators.required,Validators.minLength(8)]],
 })




 deposit(){

  let toacno=this.depositform.value.toacno
  let amount=this.depositform.value.amount
  let password=this.depositform.value.password
  console.log("inside the deposit form in ts");

  if(this.depositform.valid){
  
  this.api.fundtransfer(toacno,password,amount).subscribe((result:any)=>{
    
    
    if(result){
      
      this.fundtransfersuccess=true;
    }
  },
    (error)=>{

       this.errormsg=error.error.message
       this.fundtransfererror=true
        this.depositform.reset()
    }
    
  )
 }else{
  alert("form is not valid")
  
 }

   

}

}

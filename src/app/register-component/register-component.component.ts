import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent {  
  registerstatus:boolean=false

   registerform=this.formbuilder.group({

      username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
      password:['',[Validators.required,Validators.minLength(8)]],
      conformpassword:['',[Validators.required,Validators.minLength(8)]]


   })

      constructor(private api:ApiService,private formbuilder:FormBuilder,private registerRouter:Router){}

   register(){



        let uname=this.registerform.value.username
        let acno=this.registerform.value.acno
        let password=this.registerform.value.password
        let conformpassword= this.registerform.value.conformpassword
    if(this.registerform.valid){
        if(password==conformpassword){
          this.api.register(acno, uname, password).subscribe(
             (result: any) => {
              // Handle the successful response here
              this.registerstatus=true;
              
              setTimeout(()=>{this.registerRouter.navigateByUrl('')},3000)
              
            },
            (error) => {
              // Handle the error response here
             
              alert(error.message); 
              this.registerform.reset()

            }
           );
          


          }
          else{
            alert('password is not confirmed')
          }
        }
       
   else{
     alert("invalid form")
 }

   }
}

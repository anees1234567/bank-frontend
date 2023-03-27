import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  loginform=this.formbuilder.group({

    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    password:['',[Validators.required,Validators.minLength(8)]],
 })

      constructor(private formbuilder:FormBuilder,private api:ApiService,private loginRouter:Router){

      }
      sucessmessage:Boolean=false
       errormsg:any
       
      login(){

        let acno=this.loginform.value.acno
        let password=this.loginform.value.password

          if(this.loginform.valid){
            
            this.api.login(acno,password).subscribe((result:any)=>{
              result.currentUsername;
              result.currentacno;
              localStorage.setItem("currentUser", result.currentUsername)
              localStorage.setItem("currentAcno", result.currentacno)
              localStorage.setItem("token",result.token)


              this.sucessmessage=true;
              setTimeout(()=>{
                this.loginRouter.navigateByUrl('dashboard')
              },3000);
          },(result:any)=>{
            this.errormsg=result.error.message
          }
          
          )}
          else{
            alert('invalid form')
          }




      }

}

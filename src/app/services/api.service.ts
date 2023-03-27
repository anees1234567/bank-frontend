import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const options={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  balance_fetch_result:any;

  constructor(private http:HttpClient) { }

        register(acno:any,username:any,password:any){
          const body={
            acno,
            username,
            password
          }
        
        return this.http.post('http://localhost:3000/register',body)
        
        }


        login(acno:any,password:any){
           const body={
            acno,
            password
           }
           return this.http.post('http://localhost:3000/login',body)
        }


// append token
appendtoken(){
  const token=localStorage.getItem('token')

  // create request header
  let headers=new HttpHeaders()
  if(token){
    headers=headers.append('verify-token',token)
    options.headers=headers

  }
   
  return options
}



        getBalance(acno:any){
          return this.http.get('http://localhost:3000/getbalance/'+acno,this.appendtoken())
        }


        fundtransfer(toacno:any,pswd:any,amount:any){
            const body={
                  toacno,
                  pswd,
                  amount
            }

            console.log(body);
            console.log("inside the api request file");
            
            

          return this.http.post('http://localhost:3000/fundtransfer',body,this.appendtoken())
        }



        transactionhistory(){

         return this.http.get('http://localhost:3000/transactionhistory',this.appendtoken())

        }

        deleteaccount(){

          return this.http.delete('http://localhost:3000/delete-account',this.appendtoken())
 
         }





       






      }
  


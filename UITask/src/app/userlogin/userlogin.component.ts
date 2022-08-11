import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
})
export class UserloginComponent implements OnInit {
  public loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
 

  ngOnInit(): void {
    this.loginForm =this.formBuilder.group({
      Username:[''],
      Password:['']
   })
  }

  login(){
    this.http.get<any>("http://localhost:3000/registeruser")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.Username === this.loginForm.value.Username && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login Success!!");
        this.loginForm.reset();
        this.router.navigate(['udashboard'])
      }
      else
      {
        alert("user not found");
      }
     },
     err=>
     {
        alert("Something went wrong!!")
      })
  
  }

}

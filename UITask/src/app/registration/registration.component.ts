import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public registerform !:FormGroup;
  constructor(private FormBuilder : FormBuilder, private http : HttpClient, private router: Router) { }


  ngOnInit(): void {
    this.registerform=this.FormBuilder.group({
      Username:[''],
      Email:[''],
      Mobile:[''],
      password:[''],

    })
  }
  registerup(){
   this.http.post<any>("http://localhost:3000/registeruser",this.registerform.value)
    .subscribe(res=>{
      alert("Register Successfully");
      this.registerform.reset();
      this.router.navigate(['userlogin']);
   },err=>{
     alert("Something went wrong")
   })
  }
  }



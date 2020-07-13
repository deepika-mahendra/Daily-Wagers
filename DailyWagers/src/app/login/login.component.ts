import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators,ReactiveFormsModule} from '@angular/forms'

import {MatSnackBar} from '@angular/material/snack-bar';
//import { SharedService } from './login.service';
import { Router } from '@angular/router';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  signupForm:FormGroup;
  loginForm:FormGroup;
  constructor(private fb:FormBuilder ,
     private _snackBar: MatSnackBar,
     private  loginService:LoginService,
     private router :Router) { }

  ngOnInit(): void {
     this.createSignupForm();
     this.createLoginForm();
  }
  createLoginForm(){
    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
    })
  }
  createSignupForm(){
    this.signupForm = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      // confirmPassword:['',Validators.required],
      contact:['',Validators.required],
      role:['',Validators.required]
    })
  }
  signup(){
    this.signupForm.value.role="user";
    this.loginService.createUser( this.signupForm.value).subscribe(data=>{
      this._snackBar.open('signup Successful', 'Success', {
        duration: 2000,
      });
      
    
      console.log(data);
  
    },
   err=>console.log(err)) ; 
  }
  
  login(){
    this.loginService.loginUser( this.loginForm.value).subscribe(data=>{
      this._snackBar.open('login Successful', 'Success', {
        duration: 2000,
      });
      
      this.router.navigate(['admin/home']);
      console.log(data);
  
    },
   err=>console.log(err)) ; 
   }

   
   }



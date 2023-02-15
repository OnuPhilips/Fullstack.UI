import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import validateForm from '../helpers/validateform';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "bi-eye-slash-fill";
  signupForm! : FormGroup;

  constructor(private fb : FormBuilder){}
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      username: ['',Validators.required],
      email: ['',Validators.required],
      password: ['', Validators.required]
    })
    
  }


  hideShowPassword(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "bi-eye-fill" : this.eyeIcon = "bi-eye-slash-fill";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSignup() {
    if(this.signupForm.valid) {

      console.log(this.signupForm.value)
      // Perform Logic for Sign up 
    }else {

      // throw the error using toaster and the required field
      validateForm.validateAllFormFields(this.signupForm);
     
    }
  }

}

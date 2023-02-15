import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import validateForm from '../helpers/validateform';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "bi-eye-slash-fill";
  loginForm! : FormGroup;


  constructor(private fb : FormBuilder){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['', Validators.required]
    })
  }

  hideShowPassword(){
      this.isText = !this.isText;
      this.isText ? this.eyeIcon = "bi-eye-fill" : this.eyeIcon = "bi-eye-slash-fill";
      this.isText ? this.type = "text" : this.type = "password";
  }

  onSubmit() {
    if(this.loginForm.valid) {

      console.log(this.loginForm.value)
      // Send the obj to the database
    }else {

      // throw the error using toaster and the required field
      validateForm.validateAllFormFields(this.loginForm);
      //alert('Your form is invalid');
    }
  }

  
}

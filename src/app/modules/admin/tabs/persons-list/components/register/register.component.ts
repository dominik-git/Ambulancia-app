import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../../core/services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private firebaseService: AuthService) { }

  public signUpForm = new FormGroup({
    firstName: new FormControl('',  Validators.required),
    lastName: new FormControl('',  Validators.required),
    dob: new FormControl('',  Validators.required),
    gender: new FormControl('',  Validators.required),
    phone: new FormControl('',  Validators.required),
    email: new FormControl('',  Validators.required),
    password: new FormControl('',  Validators.required),
  });


  onSubmit(){
     this.firebaseService.signUp(this.signUpForm.getRawValue());
  }

  ngOnInit() {
  }

}

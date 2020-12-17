import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private firebaseService: AuthService) { }

  public signUpForm = new FormGroup({
    email: new FormControl('',  Validators.required),
    password: new FormControl('',  Validators.required),

  });

  signup(formData: FormData){
    this.firebaseService.signUp(formData["email"], formData["password"]);
  }

  ngOnInit() {
  }

}

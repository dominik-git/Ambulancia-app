import {Component, Inject, OnInit, Optional} from '@angular/core';
import {AuthService} from "../../../../../core/services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PatientResourceServiceService} from "../../../../../core/services/patient-resource-service.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public isUpdateMode: boolean = false;
  public signUpForm: FormGroup;
  constructor(
    private patientResourceServiceService: PatientResourceServiceService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  ngOnInit() {
      this.signUpForm = new FormGroup({
        firstName: new FormControl('',  Validators.required),
        lastName: new FormControl('',  Validators.required),
        dob: new FormControl('',  Validators.required),
        gender: new FormControl('',  Validators.required),
        phone: new FormControl('',  Validators.required),
        email: new FormControl('',  Validators.required),
        password: new FormControl('',  Validators.required),
        id: new FormControl(),
    });
    if(this.data){
      this.isUpdateMode = true;
      this.signUpForm.patchValue(this.data);
      const date = new Date(this.data.dob.seconds * 1000);
      this.signUpForm.get('dob').setValue(date);
    }else {
      this.isUpdateMode = false;
    }
  }

  onSubmit(){
    if(this.isUpdateMode){
      console.log(this.signUpForm.getRawValue());
      this.patientResourceServiceService.updatePatient(this.signUpForm.getRawValue());
    } else{
      this.patientResourceServiceService.signUp(this.signUpForm.getRawValue());
    }

  }

}

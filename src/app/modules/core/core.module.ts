import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpinnerComponent} from "./spinner/spinner.component";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";


@NgModule({
  declarations: [SpinnerComponent,LoginComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule

  ],
  exports:[
    CommonModule,
    AngularFirestoreModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    SpinnerComponent,
  ]
})
export class CoreModule { }

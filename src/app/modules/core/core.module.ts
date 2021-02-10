import { NgModule } from '@angular/core';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./tabs/login/login.component";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {CommonModule} from "@angular/common";
import {SpinnerComponent} from "./components/spinner/spinner.component";
import {MatRadioModule} from "@angular/material/radio";
import {ToastrModule} from "ngx-toastr";
import {MatToolbarModule} from "@angular/material/toolbar";

import {MatCardModule} from "@angular/material/card";
import { FooterComponent } from './components/footer/footer.component';
import {MatDialogModule} from "@angular/material/dialog";
import {HttpClientModule} from "@angular/common/http";
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import {MatSelectModule} from "@angular/material/select";
import {NgxMatMomentModule} from "@angular-material-components/moment-adapter";
import {MatCheckboxModule} from "@angular/material/checkbox";


@NgModule({
  declarations: [SpinnerComponent,LoginComponent, FooterComponent],
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
    MatFormFieldModule,
    MatRadioModule,
    ToastrModule.forRoot(),
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    MatSelectModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxMatMomentModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule
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
    MatRadioModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule,
    FooterComponent,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxMatMomentModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class CoreModule { }

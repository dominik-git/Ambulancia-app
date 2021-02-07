import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UserRoutingModule} from "./user-routing.module";
import {CoreModule} from "../core/core.module";
import {UserComponent} from "./user.component";
import {HomeComponent} from "./tabs/home/home.component";
import {OrderComponent} from "./tabs/order/order.component";
import { CreateOrderComponent } from './tabs/order/components/create-order/create-order.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {NgxMatDatetimePickerModule, NgxMatTimepickerModule} from "@angular-material-components/datetime-picker";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";
import {NgxMatMomentModule} from "@angular-material-components/moment-adapter";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [OrderComponent, HomeComponent, UserComponent, CreateOrderComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    CoreModule,
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
  providers: [
    MatDatepickerModule,
  ]
})
export class UserModule { }

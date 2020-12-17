import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { PersonsListComponent } from './persons-list/persons-list.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminComponent} from "./admin.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {CoreModule} from "../core/core.module";
import {SignupComponent} from "./signup/signup.component";



@NgModule({
  declarations: [OrderComponent, PersonsListComponent,AdminComponent,SignupComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule
  ]
})
export class AdminModule { }

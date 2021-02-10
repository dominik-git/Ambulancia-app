import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UserRoutingModule} from "./user-routing.module";
import {CoreModule} from "../core/core.module";
import {UserComponent} from "./user.component";
import {HomeComponent} from "./tabs/home/home.component";
import {OrderComponent} from "./tabs/order/order.component";
import { CreateOrderComponent } from './tabs/order/components/create-order/create-order.component';
import {MatDatepickerModule} from "@angular/material/datepicker";

@NgModule({
  declarations: [OrderComponent, HomeComponent, UserComponent, CreateOrderComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    CoreModule,
  ],
  providers: [
    MatDatepickerModule,
  ]
})
export class UserModule { }

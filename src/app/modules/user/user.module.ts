import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import {UserRoutingModule} from "./user-routing.module";
import { UserComponent } from './user.component';
import {CoreModule} from "../core/core.module";

@NgModule({
  declarations: [OrderComponent, HomeComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    CoreModule
  ]
})
export class UserModule { }

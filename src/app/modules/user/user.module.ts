import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UserRoutingModule} from "./user-routing.module";
import {CoreModule} from "../core/core.module";
import {UserComponent} from "./user.component";
import {HomeComponent} from "./tabs/home/home.component";
import {OrderComponent} from "./tabs/order/order.component";

@NgModule({
  declarations: [OrderComponent, HomeComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    CoreModule
  ]
})
export class UserModule { }

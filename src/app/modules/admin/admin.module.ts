import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsListComponent } from './tabs/persons-list/persons-list.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminComponent} from "./admin.component";
import {CoreModule} from "../core/core.module";
import {SignupComponent} from "./tabs/signup/signup.component";
import {OrderComponent} from "./tabs/order/order.component";



@NgModule({
  declarations: [OrderComponent, PersonsListComponent,AdminComponent,SignupComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule
  ]
})
export class AdminModule { }

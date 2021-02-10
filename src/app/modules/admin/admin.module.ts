import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonsListComponent} from './tabs/persons-list/persons-list.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminComponent} from "./admin.component";
import {CoreModule} from "../core/core.module";
import {OrderComponent} from "./tabs/order/order.component";
import {ListComponent} from './tabs/persons-list/components/list/list.component';
import {RegisterComponent} from "./tabs/persons-list/components/register/register.component";
import {MatRadioModule} from "@angular/material/radio";
import {MatToolbarModule} from "@angular/material/toolbar";
import { HomeComponent } from './tabs/home/home.component';
import { UpdateModalComponent } from './tabs/persons-list/components/update-modal/update-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import { CreateOrderComponent } from './tabs/persons-list/components/create-order/create-order.component';
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {NgxMatDatetimePickerModule} from "@angular-material-components/datetime-picker";


@NgModule({
  declarations: [OrderComponent, PersonsListComponent, AdminComponent, RegisterComponent, ListComponent, HomeComponent, UpdateModalComponent, CreateOrderComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    MatSelectModule,
    FormsModule,
    NgxMatDatetimePickerModule,
  ]
})
export class AdminModule {
}

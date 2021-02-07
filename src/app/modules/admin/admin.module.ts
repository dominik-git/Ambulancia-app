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


@NgModule({
  declarations: [OrderComponent, PersonsListComponent, AdminComponent, RegisterComponent, ListComponent, HomeComponent, UpdateModalComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        CoreModule,
    ]
})
export class AdminModule {
}

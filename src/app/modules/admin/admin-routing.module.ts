import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AdminComponent} from "./admin.component";
import {HomeComponent} from "../admin/tabs/home/home.component";
import {OrderComponent} from "./tabs/order/order.component";
import {PersonsListComponent} from "./tabs/persons-list/persons-list.component";
import {ListComponent} from "./tabs/persons-list/components/list/list.component";
import {RegisterComponent} from "./tabs/persons-list/components/register/register.component";


const routes: Routes = [
  {
    path: '', component: AdminComponent,
    pathMatch:'prefix',
    children:[
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home', component: HomeComponent,
      },
      {
        path: 'orders', component: OrderComponent,
      },
      {
        path: 'patients', component: PersonsListComponent,
        children:[
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          {path: 'list', component: ListComponent},
          {path: 'create', component: RegisterComponent},
        ]
      }


    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}

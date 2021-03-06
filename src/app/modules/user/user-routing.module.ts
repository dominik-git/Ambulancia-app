import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UserComponent} from "./user.component";
import {HomeComponent} from "./tabs/home/home.component";
import {OrderComponent} from "./tabs/order/order.component";


const routes: Routes = [
  {
    path: '', component: UserComponent,
    pathMatch: 'prefix',
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {
        path: 'home', component: HomeComponent,
      },
      {
        path: 'orders', component: OrderComponent,
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {

}

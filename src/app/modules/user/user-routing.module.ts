import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../core/login/login.component";
import {SignupComponent} from "../admin/signup/signup.component";
import {AuthGuard} from "../../auth/auth.guard";

import {NgModule} from "@angular/core";
import {UserComponent} from "./user.component";
import {HomeComponent} from "./home/home.component";
import {OrderComponent} from "./order/order.component";


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

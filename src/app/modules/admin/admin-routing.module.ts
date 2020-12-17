import {RouterModule, Routes} from "@angular/router";
import {SignupComponent} from "./signup/signup.component";
import {NgModule} from "@angular/core";
import {AdminComponent} from "./admin.component";
import {HomeComponent} from "../user/home/home.component";
import {OrderComponent} from "./order/order.component";


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
        path: 'signup', component: SignupComponent,
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

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./tabs/home/home.component";
import {AuthGuard} from "./auth/auth.guard";
import {LoginComponent} from "./modules/core/login/login.component";
import {SignupComponent} from "./modules/admin/signup/signup.component";


// const routes: Routes = [
//   { path: "", redirectTo: "/login", pathMatch: "full" },
//   { path: 'login', component: LoginComponent },
//   { path: 'signup', component: SignupComponent },
//   { path: 'home', canActivate:[AuthGuard], data: {roles: ["user", "admin"]} ,component: HomeComponent, },
//   { path: 'persons', component: PersonsListComponent },
//   { path: 'orders', component: OrderComponent },
//   { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
// ];
const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {path: 'login', component: LoginComponent},
  {
    path: 'admin', canActivate: [AuthGuard], data: {roles: ["admin"]},
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'user', canActivate: [AuthGuard], data: {roles: ["user"]},
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

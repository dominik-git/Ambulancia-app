import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonsListComponent} from "./tabs/persons-list/persons-list.component";
import {OrderComponent} from "./tabs/order/order.component";
import {PageNotFoundComponent} from "./tabs/page-not-found/page-not-found.component";
import {HomeComponent} from "./tabs/home/home.component";


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'persons', component: PersonsListComponent },
  { path: 'orders', component: OrderComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

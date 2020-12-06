import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonsListComponent} from "./components/persons-list/persons-list.component";
import {OrderComponent} from "./components/order/order.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {HomeComponent} from "./components/home/home.component";


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

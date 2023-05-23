import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivityComponent} from "./components/activity/activity.component";
import {IndustrialOrderComponent} from "./components/industrial-order/industrial-order.component";
import {LicenceAreaComponent} from "./components/licence-area/licence-area.component";
import {OrderSubscriberComponent} from "./components/order-subscriber/order-subscriber.component";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";




const routes: Routes = [
  {path: "activity" , component:ActivityComponent} ,
  {path: "order" , component:IndustrialOrderComponent} ,
  {path: "licence" , component : LicenceAreaComponent} ,
  {path: "subscriber" , component :OrderSubscriberComponent},
  {path: "industrial" , component :IndustrialOrderComponent},
  {path: "login" , component :LoginComponent},


  {path: "", redirectTo: "/login", pathMatch: "full"}

];




@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes) ,
    CommonModule
  ] ,
  exports : [RouterModule]
})
export class AppRouterModule { }

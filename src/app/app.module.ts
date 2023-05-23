import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActivityComponent } from './components/activity/activity.component';
import { IndustrialOrderComponent } from './components/industrial-order/industrial-order.component';
import { LicenceAreaComponent } from './components/licence-area/licence-area.component';
import { OrderSubscriberComponent } from './components/order-subscriber/order-subscriber.component';
import { RealStateOrderComponent } from './components/real-state-order/real-state-order.component';
import {AppRouterModule} from "./app-router.module";
import {HttpClientModule} from "@angular/common/http";
import {NotificationService} from "./notification/service/notification.service";
import {ActivityService} from "./service/activity.service";
import {IndustrialOrderService} from "./service/industrial-order.service";
import {LicenceAreaService} from "./service/licence-area.service";
import {OrderSubscriberService} from "./service/order-subscriber.service";
import {RealStateOrderService} from "./service/real-state-order.service";
import {NotificationModule} from "./notification/notification.module";
import {ToastContainerDirective, ToastrModule} from "ngx-toastr";
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    IndustrialOrderComponent,
    LicenceAreaComponent,
    OrderSubscriberComponent,
    RealStateOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    NotificationModule,
    ToastrModule.forRoot(),
    ToastContainerDirective,
    NgOptimizedImage,
    FormsModule,


  ],
  providers: [NotificationService , ActivityService , IndustrialOrderService , LicenceAreaService , OrderSubscriberService , RealStateOrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

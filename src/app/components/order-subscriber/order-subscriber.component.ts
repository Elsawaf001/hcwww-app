import {Component, EventEmitter, Input, Output} from '@angular/core';
import {OrderSubscriber} from "../../model/order-subscriber";
import {Subscription} from "rxjs";
import {OrderSubscriberService} from "../../service/order-subscriber.service";
import {NotificationService} from "../../notification/service/notification.service";
import {NotificationType} from "../../notification/service/notification-type";

@Component({
  selector: 'app-order-subscriber',
  templateUrl: './order-subscriber.component.html',
  styleUrls: ['./order-subscriber.component.css']
})
export class OrderSubscriberComponent {
showTable: boolean = false;
selectedSubscriber : OrderSubscriber | undefined;


@Output() onSave: EventEmitter<number> = new EventEmitter<number>();
  subscribersDataSource : OrderSubscriber[] = [];

  private subscriptions:Subscription[] = [];
  opened: boolean = false;




  constructor(private service : OrderSubscriberService , private notificationService : NotificationService) {
  }







  getAllSubscribers(){
    this.subscriptions.push( this.service.getAll().subscribe({
      next: (response ) =>{
        response.forEach(subscriber => this.subscribersDataSource.push(subscriber));
        localStorage.setItem('orderSubscribers',JSON.stringify(response));
      } ,
      error: err => this.sendNotification( NotificationType.error, err.error.message)
    }))

  }



  private sendNotification(notificationType: NotificationType, message: string) {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(notificationType, "Communication with server Failed");
    }

  }


  ngOnInit(): void {
    this.getAllSubscribers()

  }


}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Activity} from "../../model/activity";
import {ActivityService} from "../../service/activity.service";
import {Subscription} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit{
  showTable : boolean = false;
  selectedActivity : Activity | undefined ;


  @Output() onSave: EventEmitter<number> = new EventEmitter<number>();


  activityDataSource : Activity[] = [];
  private subscriptions:Subscription[] = [];



  constructor(private activityService : ActivityService , private toastrService : ToastrService) {
  }



  getAllActivities(){
    this.subscriptions.push(
      this.activityService.getAllActivities().subscribe(
        {
          next : (response : Activity[]) => {
            response.forEach(activity => this.activityDataSource.push(activity))
            localStorage.setItem('activities' , JSON.stringify(response))
            // this.toastrService.success("تم تحميل الانشطة بنجاح")
          } ,
          error : (err : HttpErrorResponse) => {
            this.toastrService.error(err.error.message , "فشل تحميل الانشطة")
          }
        }
      )
    )
  }

  ngOnInit(): void {
    this.getAllActivities();
  }

}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Activity} from "../../model/activity";
import {Subscription} from "rxjs";
import {LicenceArea} from "../../model/licence-area";
import {LicenceAreaService} from "../../service/licence-area.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-licence-area',
  templateUrl: './licence-area.component.html',
  styleUrls: ['./licence-area.component.css']
})
export class LicenceAreaComponent implements OnInit{
  showTable : boolean = false;
  selectedLicense : LicenceArea | undefined ;


  @Output() onSave: EventEmitter<number> = new EventEmitter<number>();

  licences : LicenceArea[] = [];

  private subscriptions:Subscription[] = [];


constructor(private service : LicenceAreaService , private toasterService : ToastrService) {
}


getAllLicences(){
  this.subscriptions.push(
    this.service.getAll().subscribe(
      {
        next : (response : LicenceArea[]) =>{
          response.forEach(area => this.licences.push(area))
          console.log(response)

        } ,
        error : err => this.toasterService.error(err.error.message)
      }
    )
  )
}


  ngOnInit(): void {
  this.getAllLicences()
  }

}

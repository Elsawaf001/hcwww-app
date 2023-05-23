import {Component, OnInit} from '@angular/core';
import {IndustrialOrderService} from "../../service/industrial-order.service";
import {ToastrService} from "ngx-toastr";
import {IndustrialOrder} from "../../model/industrial-order";

@Component({
  selector: 'app-industrial-order',
  templateUrl: './industrial-order.component.html',
  styleUrls: ['./industrial-order.component.css']
})
export class IndustrialOrderComponent implements OnInit{
  showSuccess : boolean = false ;

  subscriberId:number = 0;


  activityTypeId:number =0;
  licenceAreaId:number=0;

  representativeName!:string;
  facilityDirectorName!:string;
  notes!:string;
  cost!:number;
  constructor(private service : IndustrialOrderService , private toaster : ToastrService) {
  }

  setSubscriberId(id:number){
    this.subscriberId=id;
    console.log(id);
  }

  setActivityId(id:number){
    this.activityTypeId = id;
    console.log("activity id is" + this.activityTypeId)
  }

  setLicenceAreaId(id:number){
    this.licenceAreaId = id;
    console.log("li ID"+ this.licenceAreaId)
  }


  onSubmit(){


if ( !this.subscriberId || !this.activityTypeId || !this.licenceAreaId ){
  this.toaster.error("لم يتم ملئ جميع البيانات")
}
else {
  const formData : FormData = new FormData();
  formData.append("subscriberId",this.subscriberId.toString())
  formData.append("activityTypeId",this.activityTypeId.toString())
  formData.append("licenceAreaId",this.licenceAreaId.toString())
  if (this.representativeName)
  {formData.append("representativeName",this.representativeName)}
  else {formData.append("representativeName","")}

if (this.facilityDirectorName)
{formData.append("facilityDirectorName",this.facilityDirectorName)}
else{formData.append("facilityDirectorName","")}

if (this.notes){formData.append("notes",this.notes)}
else{formData.append("notes","")}


  if (this.cost){formData.append("cost",this.cost.toString())}
  else {formData.append("cost","")}




this.service.createIndustrialOrder(formData).subscribe(
  {
    next: response => {
      this.toaster.success( "تم أنشاء طلب رقم " + response.id + "بنجاح")
      this.showSuccess = true ;
      this.onSuccess(response);
    },
    error : err => {
      this.toaster.error(err.error.message())

    }
  }
)
  // console.log(formData.getAll("representativeName"))
}



  }

  ngOnInit(): void {
  }


  onSuccess(response : IndustrialOrder){
this.responseId = response.id;
this.responseSubscriber = response.orderSubscriber.name;
  }

  responseId : number = 0 ;
  responseSubscriber : string ='';

}

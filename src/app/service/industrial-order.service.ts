import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IndustrialOrder} from "../model/industrial-order";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IndustrialOrderService {

  private host : string = `${environment.apiUrl}/app` ;

  constructor(private http : HttpClient) { }


  createIndustrialOrder(formData : FormData): Observable<IndustrialOrder> {

    const url = `${this.host}/industrial`;

    const headers = new HttpHeaders(); // no need to set the Content-Type header

    return this.http.post<IndustrialOrder>(url, formData, { headers: headers }); // send the POST request with the FormData object and headers
  }
}

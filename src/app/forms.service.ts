import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private http:HttpClient) { }







  //get data
  info():Observable<any>{
    return this.http.get("http://localhost:5555/data")
  }

  //add data

}

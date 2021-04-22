import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Structure } from '../app/str';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  data = this.fb.group({
    id: ['', [Validators.required, Validators.minLength(1)]],
    name: ['', [Validators.required, Validators.minLength(4)]],
    salary: ['', [Validators.required, Validators.maxLength(10)]],
    age: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]]
  })


  /*data = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(2)]),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    salary: new FormControl('', [Validators.required, Validators.minLength(6)]),
    age: new FormControl('', [Validators.required, Validators.minLength(2)])
  });*/

  url = "http://localhost:5555/data/";




  content: any;



  //get data
  info(): Observable<any> {
    return this.http.get("http://localhost:5555/data")
  }

  //add data
  add(temp: Structure) {
    return this.http.post("http://localhost:5555/data", temp);
  }

  //edit
  edit(info: Structure, id: number) {
    return this.http.put(`${this.url}/${id}`, info);
  }


  //delete
  delete(id: any): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  ngOnInit() {
    this.data;
  }

}

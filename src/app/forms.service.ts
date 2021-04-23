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
    user: ['', Validators.required],
    id: ['', [Validators.required, Validators.minLength(1), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    name: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z]*')]],
    blood:['',Validators.required],
    salary: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    age: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    address: this.fb.group({
      street: ['', [Validators.required]],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    })
  });

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

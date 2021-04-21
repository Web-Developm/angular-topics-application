import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor() { }

  data = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    salary: new FormControl(''),
    age: new FormControl('')
  })
}

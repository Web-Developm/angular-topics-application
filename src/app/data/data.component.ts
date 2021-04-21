import { Component, OnInit } from '@angular/core';
import {FormsService} from '../forms.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import {Structure} from '../str';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  providers:[FormsService]
})
export class DataComponent implements OnInit {

  constructor(private fs:FormsService, private http:HttpClient) { }

  public items!:Structure[];



  get()
  {
    this.fs.info().subscribe(
      data=>{
        this.items=data;
        console.log(data);
      }
    )
  }


  ngOnInit(): void {
    this.get();
  }

}

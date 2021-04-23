import { Component, OnInit } from '@angular/core';
import { FormsService } from '../forms.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { Structure } from '../str';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  providers: [FormsService]
})
export class DataComponent implements OnInit {

  constructor(private fs: FormsService, private http: HttpClient) { }

  title = "Data";
  color = "#fea82f";

  sur = "Mr";

  public items!: Structure[];



  get() {
    this.fs.info().subscribe(
      data => {
        this.items = data;
        console.log(data);
      }
    )
  }



  check = (index: any): any => {
    let test = this.items[index];

    if (test.age > 18) {
      alert("Not eligible")
    }

    else {
      alert("Not eligible");
    }
  }


  ngOnInit(): void {
    this.get();
  }

}

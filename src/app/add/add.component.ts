import { Component, OnInit } from '@angular/core';
import { FormsService } from '../forms.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Structure } from '../str';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [FormsService]
})
export class AddComponent implements OnInit {

  constructor(private fs: FormsService) { }

  public data: FormGroup = this.fs.data;

  add() {
    if(this.data.valid==true)
    {
      let temp = new Structure();

      temp.id = this.data.controls['id'].value;
      temp.name = this.data.controls['name'].value;
      temp.salary = this.data.controls['salary'].value;
      temp.age = this.data.controls['age'].value;

      this.fs.add(temp).subscribe(
        data => {
          console.log(data);
          alert("Successfully added");
        }
      )
      this.data.reset();
    }
    else{
      alert("Please fill the fields");
    }

  }







  ngOnInit(): void {
    console.log(this.data.valid);
  }

}

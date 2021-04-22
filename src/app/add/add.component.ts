import { Component, OnInit } from '@angular/core';
import { FormsService } from '../forms.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
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







  ngOnInit(): void {
    console.log(this.fs.data.value);
  }



}

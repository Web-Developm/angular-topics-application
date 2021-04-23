import { Component, OnInit, Input } from '@angular/core';
import { FormsService } from '../forms.service';
import { FormGroup, Validators, FormControl, FormGroupName } from '@angular/forms';
import { Structure } from '../str';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [FormsService]
})
export class AddComponent implements OnInit {

  @Input() item!: string;

  constructor(private fs: FormsService) { }

  public data: FormGroup = this.fs.data;

  add() {

    let temp = new Structure();

    temp.user = this.data.controls['user'].value;
    temp.id = this.data.controls['id'].value;
    temp.name = this.data.controls['name'].value;
    temp.email = this.data.controls['email'].value;
    temp.blood = this.data.controls['blood'].value;
    temp.salary = this.data.controls['salary'].value;
    temp.age = this.data.controls['age'].value;
    temp.street = this.data.get('address.street')?.value;
    temp.city = this.data.get('address.city')?.value;
    temp.state = this.data.get('address.state')?.value;
    temp.zip = this.data.get('address.zip')?.value;

    this.fs.add(temp).subscribe(
      data => {
        console.log(data);
        alert("Successfully added");
        console.log(this.data.value);
      }
    )
    this.data.reset();
  }

  /*get skill() {
    return this.fs.skill();
  }

  addskill() {
    this.fs.addskill();
  }*/

  validation(val: string) {
    return (this.data.controls.address as FormGroup).get(val);
  }

  color="green";







  ngOnInit(): void {
    this.fs.setValidation();
  }



}

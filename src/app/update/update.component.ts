import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Structure } from '../str';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private fs: FormsService) { }

  title = "Update";
  color = "#c67ace";

  public items!: Structure[];

  public data: FormGroup = this.fs.data;

  get() {
    this.fs.info().subscribe(
      data => {
        this.items = data;
        console.log(data);
      }
    )
  }



  update1(info: any, index: any) {

    let temp = confirm("Are confirm update the value");

    if (temp == true) {
      this.data.patchValue({
        user: info.user,
        id: info.id,
        name: info.name,
        email: info.email,
        salary: info.salary,
        age: info.age,
        address: {
          street: info.street,
          city: info.street,
          state: info.street,
          zip: info.street
        }


      });
    }

    else {
      alert("Stop");
    }

  }

  update2() {

    let info = new Structure;
    info.id = this.data.controls['id'].value;
    info.name = this.data.controls['name'].value;
    info.salary = this.data.controls['salary'].value;
    info.age = this.data.controls['age'].value;
    info.street = this.data.get('address.street')?.value;
    info.city = this.data.get('address.city')?.value;
    info.state = this.data.get('address.state')?.value;
    info.zip = this.data.get('address.zip')?.value;

    let id = Number(info.id);

    this.fs.edit(info, id).subscribe(
      data => {
        console.log(data);
        alert("Successfully updated");
        this.get();
      }
    )

    this.data.reset();

  }


  ngOnInit(): void {
    this.get();
  }

}

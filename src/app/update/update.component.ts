import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Structure} from '../str';
import {FormsService} from '../forms.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private fs:FormsService) { }

  public items!:Structure[];
  public data:FormGroup=this.fs.data;



  get()
  {
    this.fs.info().subscribe(
      data=>{
        this.items=data;
        console.log(data);
      }
    )
  }

  update1(info:any,index:any)
  {
    this.data.setValue({
      id:info.id,
      name:info.name,
      salary:info.salary,
      age:info.age
    });
  }

  update2()
  {
    let info=new Structure;
    info.id=this.data.controls['id'].value;
    info.name=this.data.controls['name'].value;
    info.salary=this.data.controls['salary'].value;
    info.age=this.data.controls['age'].value;

    let id=Number(info.id);

    this.fs.edit(info,id).subscribe(
      data=>{
        console.log(data);
        this.get();
      }
    )

    this.data.reset();


  }



  ngOnInit(): void {
    this.get();
  }

}

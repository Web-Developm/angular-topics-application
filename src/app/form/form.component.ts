import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  data1=this.fb.group({
    name:this.fb.control(''),
    phone:this.fb.control('')
  });

  data2=this.fb.group({
    email:this.fb.control(''),
    address:this.fb.control('')
  })

  display():void{
    console.log(this.data1.value);
    console.log(this.data2.value);
    alert("Successfull");
    this.data1.reset();
    this.data2.reset();
  }



  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormsService } from '../forms.service';
import { FormControl, FormGroup } from '@angular/forms';
import { fstat } from 'node:fs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [FormsService]
})
export class AddComponent implements OnInit {

  constructor(private fs: FormsService) { }

  public data: FormGroup = this.fs.data;

  ngOnInit(): void {
  }

}

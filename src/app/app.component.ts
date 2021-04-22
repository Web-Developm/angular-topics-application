import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsService } from '../app/forms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curd Application';
  item = "add";
  today: number = Date.now();

  public content = this.fs.content;

  operation = [
    {
      name: "add"
    },
    {
      name: "data"
    },
    {
      name: "update"
    },
    {
      name: "delete"
    }
  ]



  constructor(private fs: FormsService) {

  }
}

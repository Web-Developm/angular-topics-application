import { Component, OnInit } from '@angular/core';
import { FormsService } from '../forms.service';
import { Structure } from '../str';
import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private fs: FormsService, private http: HttpClient) { }

  public items!: Structure[];

  get() {
    this.fs.info().subscribe(
      data => {
        this.items = data;
        console.log(data);
      }
    )
  }

  delete(id: any) {
    this.fs.delete(id).subscribe(
      data => {
        console.log(data);
        this.get();
      }
    )
  }

  ngOnInit(): void {
    this.get();
  }

}

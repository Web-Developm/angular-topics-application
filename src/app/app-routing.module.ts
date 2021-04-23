import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from '../app/add/add.component';
import { DataComponent } from '../app/data/data.component';
import { UpdateComponent } from '../app/update/update.component';
import { DeleteComponent } from '../app/delete/delete.component';
import { FormComponent } from '../app/form/form.component';


const routes: Routes = [
  {
    path: 'add', component: AddComponent
  },

  {
    path: "data", component: DataComponent
  },

  {
    path: 'update', component: UpdateComponent
  },

  {
    path: 'delete', component: DeleteComponent
  },

  {
    path: 'form', component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const route = [AddComponent, DataComponent, UpdateComponent, DeleteComponent, FormComponent]

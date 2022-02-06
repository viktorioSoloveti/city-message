import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewHeaderComponent } from './view-header.component';

@NgModule({
  imports:[
    RouterModule
  ],
  declarations: [
    ViewHeaderComponent
  ],
  exports: [
    ViewHeaderComponent
  ]
})
export class ViewHeaderModule{ }
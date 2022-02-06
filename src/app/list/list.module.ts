import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ViewHeaderComponent } from '../view-header/view-header.component';
import { ViewHeaderModule } from '../view-header/view-header.module';


@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent,
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    ViewHeaderModule
  ]
})
export class ListModule { }

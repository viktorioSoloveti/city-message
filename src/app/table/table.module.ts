import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { TableItemComponent } from './table-item/table-item.component';
import { ViewHeaderComponent } from '../view-header/view-header.component';
import { ViewHeaderModule } from '../view-header/view-header.module';


@NgModule({
  declarations: [
    TableComponent,
    TableItemComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    ViewHeaderModule
  ]
})
export class TableModule { }

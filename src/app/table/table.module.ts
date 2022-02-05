import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { TableItemComponent } from './table-item/table-item.component';


@NgModule({
  declarations: [
    TableComponent,
    TableItemComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule
  ]
})
export class TableModule { }

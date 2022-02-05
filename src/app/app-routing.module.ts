import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule) }, 
  { path: 'table', loadChildren: () => import('./table/table.module').then(m => m.TableModule) },
  { path: '', loadChildren: () => import('./list/list.module').then(m => m.ListModule)},
  { path: 'create', loadChildren: () => import('./create/create.module').then(m => m.CreateModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

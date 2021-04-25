import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewservicePage } from './newservice.page';

const routes: Routes = [
  {
    path: '',
    component: NewservicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewservicePageRoutingModule {}

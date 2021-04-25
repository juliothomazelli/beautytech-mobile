import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewservicePageRoutingModule } from './newservice-routing.module';

import { NewservicePage } from './newservice.page';
import { InputNumber } from '../pipes/inputnumber';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewservicePageRoutingModule
  ],
  declarations: [
    NewservicePage,
    InputNumber
  ]
})
export class NewservicePageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';

import { AddEventPage } from './add-event';

@NgModule({
  declarations: [
    AddEventPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEventPage),
    ComponentsModule,
  ],
})
export class AddEventPageModule {}

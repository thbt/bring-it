import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectGuestPage } from './select-guest';

@NgModule({
  declarations: [
    SelectGuestPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectGuestPage),
  ],
})
export class SelectGuestPageModule {}

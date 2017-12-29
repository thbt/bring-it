import {NgModule} from '@angular/core';
import {ItemComponent} from './item/item';
import {IonicPageModule} from "ionic-angular";
import { AccountComponent } from './account/account';

@NgModule({
  declarations: [ItemComponent,
    AccountComponent],
  imports: [IonicPageModule.forChild(ItemComponent),
  ],
  exports: [ItemComponent,
    AccountComponent]
})
export class ComponentsModule {
}

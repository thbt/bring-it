import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { ItemComponent } from './item/item';
import { AccountComponent } from './account/account';
import { AccountPopoverComponent } from './account-popover/account-popover';

@NgModule({
  declarations: [
    ItemComponent,
    AccountComponent,
    AccountPopoverComponent

  ],
  entryComponents: [AccountPopoverComponent],
  imports: [IonicPageModule.forChild(ItemComponent),
  ],
  exports: [
    ItemComponent,
    AccountComponent,
    AccountPopoverComponent
  ]
})
export class ComponentsModule {
}

import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { ItemComponent } from './item/item';
import { AccountComponent } from './account/account';
import { AccountPopoverComponent } from './account-popover/account-popover';
import { ItemDetailsComponent } from './item-details/item-details';

@NgModule({
  declarations: [
    ItemComponent,
    AccountComponent,
    AccountPopoverComponent,
    ItemDetailsComponent

  ],
  entryComponents: [AccountPopoverComponent, ItemDetailsComponent],
  imports: [IonicPageModule.forChild(ItemComponent),
  ],
  exports: [
    ItemComponent,
    AccountComponent,
    AccountPopoverComponent,
    ItemDetailsComponent
  ]
})
export class ComponentsModule {
}

import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { ItemComponent } from './item/item';
import { AccountComponent, PopoverPage } from './account/account';

@NgModule({
  declarations: [
    ItemComponent,
    AccountComponent,
    PopoverPage

  ],
  entryComponents: [PopoverPage],
  imports: [IonicPageModule.forChild(ItemComponent),
  ],
  exports: [
    ItemComponent,
    AccountComponent,
    PopoverPage
  ]
})
export class ComponentsModule {
}

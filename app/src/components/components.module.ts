import {NgModule} from '@angular/core';
import {ItemsComponent} from './items/items';
import {IonicPageModule} from "ionic-angular";

@NgModule({
  declarations: [ItemsComponent],
  imports: [IonicPageModule.forChild(ItemsComponent),
  ],
  exports: [ItemsComponent]
})
export class ComponentsModule {
}

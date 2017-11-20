import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {WishlistPage} from './wishlist';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    WishlistPage,
  ],
  imports: [
    IonicPageModule.forChild(WishlistPage),
    ComponentsModule
  ],
})
export class WishlistPageModule {
}

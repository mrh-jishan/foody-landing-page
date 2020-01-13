import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FoodItemComponent} from './food-item.component';


@NgModule({
  declarations: [
    FoodItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FoodItemComponent
  ],
  entryComponents: [
    FoodItemComponent
  ]
})
export class FoodItemModule {
}

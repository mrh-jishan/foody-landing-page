import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KitchenListComponent} from './kitchen-list.component';
import {KitchenCardModule} from '../kitchen-card/kitchen-card.module';


@NgModule({
  declarations: [KitchenListComponent],
  imports: [
    CommonModule,
    KitchenCardModule,
  ],
  exports: [
    KitchenListComponent
  ]
})
export class KitchenListModule {
}

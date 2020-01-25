import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SecureRoutingModule} from './secure-routing.module';
import {SecureComponent} from './secure.component';
import {ProfileComponent} from './profile/profile.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {OrderCartComponent} from './order-cart/order-cart.component';
import {OrderListComponent} from './order-list/order-list.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {SwiperModule} from '../common/swiper/swiper.module';
import {KitchenListModule} from '../common/kitchen-list/kitchen-list.module';
import { FoodListComponent } from './food-list/food-list.component';
import { AddKitchenComponent } from './add-kitchen/add-kitchen.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    SecureComponent,
    ProfileComponent,
    DashboardComponent,
    OrderCartComponent,
    OrderListComponent,
    ChangePasswordComponent,
    FoodListComponent,
    AddKitchenComponent
  ],
  imports: [
    CommonModule,
    SecureRoutingModule,
    SwiperModule,
    KitchenListModule,
    ReactiveFormsModule
  ]
})
export class SecureModule {
}

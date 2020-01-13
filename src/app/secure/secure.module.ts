import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SecureRoutingModule} from './secure-routing.module';
import {SecureComponent} from './secure.component';
import {ProfileComponent} from './profile/profile.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { OrderCartComponent } from './order-cart/order-cart.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FoodItemComponent } from './food-item/food-item.component';


@NgModule({
  declarations: [
    SecureComponent,
    ProfileComponent,
    DashboardComponent,
    OrderCartComponent,
    OrderListComponent,
    ChangePasswordComponent,
    FoodItemComponent
  ],
  imports: [
    CommonModule,
    SecureRoutingModule
  ]
})
export class SecureModule {
}

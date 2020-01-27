import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SecureComponent} from './secure.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './profile/profile.component';
import {OrderCartComponent} from './order-cart/order-cart.component';
import {OrderListComponent} from './order-list/order-list.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {FoodListComponent} from './food-list/food-list.component';
import {AddKitchenComponent} from './add-kitchen/add-kitchen.component';
import {MyKitchenComponent} from './my-kitchen/my-kitchen.component';
import {MyFoodComponent} from './my-food/my-food.component';
import {AddFoodComponent} from './add-food/add-food.component';


const routes: Routes = [
  {
    path: '',
    // pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: '',
    component: SecureComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'dashboard/:kitchen_id/foods',
        component: FoodListComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'order-cart',
        component: OrderCartComponent
      },
      {
        path: 'order-list',
        component: OrderListComponent
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent
      },
      {
        path: 'add-kitchen',
        component: AddKitchenComponent
      },
      {
        path: 'my-kitchen',
        component: MyKitchenComponent
      },
      {
        path: 'my-kitchen/:id/food',
        component: MyFoodComponent
      }, {
        path: 'my-kitchen/:id/add-food',
        component: AddFoodComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule {
}

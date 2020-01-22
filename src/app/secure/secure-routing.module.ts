import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SecureComponent} from './secure.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './profile/profile.component';
import {OrderCartComponent} from './order-cart/order-cart.component';
import {OrderListComponent} from './order-list/order-list.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {FoodListComponent} from './food-list/food-list.component';


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
        path: ':kitchen_id/foods',
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

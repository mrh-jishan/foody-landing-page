import {Component, OnInit} from '@angular/core';
import {FoodListService} from '../../service/food-list.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Kitchen, Tag} from '../../service/model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  kitchens$: Observable<Kitchen[]>;

  constructor(private foodListService: FoodListService,
              private router: Router) {
    this.fetch_food_list();
  }

  ngOnInit() {
  }

  fetch_food_list() {
    this.kitchens$ = this.foodListService.kitchen_list().pipe(
      map((res: any) => {
        return res.data.kitchens.map((kitchen: Kitchen) => ({
          id: kitchen.id,
          user_id: kitchen.user_id,
          name: kitchen.name,
          title: kitchen.title,
          description: kitchen.description,
          tags: kitchen.tags.map((tag: Tag) => ({name: tag.name})),
          kitchen_address: {
            address: kitchen.kitchen_address.address,
            city: kitchen.kitchen_address.city,
            state: kitchen.kitchen_address.state,
            zip_code: kitchen.kitchen_address.zip_code,
          },
          user: {
            id: kitchen.user.id,
            first_name: kitchen.user.first_name,
            last_name: kitchen.user.last_name,
            gender: kitchen.user.gender,
            email: kitchen.user.email,
            email_confirmed: kitchen.user.email_confirmed,
            role: kitchen.user.role,
          }
        }));
      }));
  }

  goToFoodList(kitchen) {
    this.router.navigateByUrl(`secure/dashboard/${kitchen.id}/foods`)
      .then(() => console.log('Go to food page for', kitchen));
  }
}

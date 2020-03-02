import {Component, OnInit} from '@angular/core';
import {KitchenService} from '../../service/kitchen.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Kitchen, Tag} from '../../service/model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-kitchen',
  templateUrl: './my-kitchen.component.html',
  styleUrls: ['./my-kitchen.component.scss']
})
export class MyKitchenComponent implements OnInit {

  kitchens$: Observable<Kitchen[]>;

  constructor(private kitchenService: KitchenService, private router: Router) {
    this.load_kitchen();
  }

  ngOnInit() {
  }

  load_kitchen() {
    this.kitchens$ = this.kitchenService.my_kitchen()
      .pipe(
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
        })
      );
  }

  goToFood(kitchen: Kitchen) {
    this.router.navigateByUrl(`secure/my-kitchen/${kitchen.id}/food`)
      .then(() => console.log('go to food.'));
  }

}

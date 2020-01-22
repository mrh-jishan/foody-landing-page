import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-kitchen-list',
  templateUrl: './kitchen-list.component.html',
  styleUrls: ['./kitchen-list.component.scss']
})
export class KitchenListComponent implements OnInit {

  kitchenList$ = [{
    id: 1,
    name: 'test',
    price: 100
  }, {
    id: 2,
    name: 'test',
    price: 100
  }, {
    id: 3,
    name: 'test',
    price: 100
  }];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToFoodList(kitchen) {
    this.router.navigateByUrl(`secure/dashboard/${kitchen.id}/foods`)
      .then(() => console.log('Go to food page for', kitchen));
  }

}

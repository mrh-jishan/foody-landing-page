import {Component, OnInit} from '@angular/core';
import {FoodListService} from '../../service/food-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  foodList$ = Array(8);

  constructor(private foodListService: FoodListService) {
    this.fetch_food_list();
  }

  ngOnInit() {
  }

  fetch_food_list() {
    this.foodListService.kitchen_list().subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }

  addToCard(food) {

  }

}

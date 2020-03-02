import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FOOD_CATEGORY} from '../../service/constant';

@Component({
  selector: 'app-my-food',
  templateUrl: './my-food.component.html',
  styleUrls: ['./my-food.component.scss']
})
export class MyFoodComponent implements OnInit {

  kitchen: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.kitchen = this.route.snapshot.data.foods;
  }

  getFoodCategory(id) {
    const category = FOOD_CATEGORY.find(value => value.key === id);
    return category === undefined ? '' : category.value;
  }

}

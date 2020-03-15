import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  kitchen: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.kitchen = this.route.snapshot.data.kitchen;
  }

  add(itemCount) {
    itemCount.value = Number(itemCount.value) + 1;
  }

  rem(itemCount) {
    if (Number(itemCount.value) <= 1) {
      itemCount.value = 1;
    } else {
      itemCount.value = Number(itemCount.value) - 1;
    }
  }

  addToCart(total, food) {
    console.log(total, food);
  }

}

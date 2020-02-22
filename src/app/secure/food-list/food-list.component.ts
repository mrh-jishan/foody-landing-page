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
    this.kitchen = this.route.snapshot.data.foods.data.kitchen;
  }

}

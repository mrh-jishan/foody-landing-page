import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

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
}

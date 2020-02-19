import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {pipe} from 'rxjs';
import {map} from 'rxjs/operators';

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
    this.kitchen = this.route.snapshot.data.foods.data.kitchen;
  }


  goToFoodMenu() {
    return this.route.paramMap.pipe(map((paramMap: any) => paramMap.params.id));
  }
}

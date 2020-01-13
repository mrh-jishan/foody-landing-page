import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {FoodListService} from '../../service/food-list.service';
import {ModalDialogService} from 'ngx-modal-dialog';
import {FoodItemComponent} from '../../common/food-item/food-item.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  foodList$ = Array(8);

  constructor(private foodListService: FoodListService,
              private modalService: ModalDialogService,
              private viewRef: ViewContainerRef) {
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
    this.modalService.openDialog(this.viewRef, {
      data: food,
      title: 'TEST FOOD',
      childComponent: FoodItemComponent,
      actionButtons: [{text: 'Close'}]
    });
  }

}

import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {FoodListService} from '../../service/food-list.service';
import {ModalDialogService} from 'ngx-modal-dialog';
import {FoodItemComponent} from '../../common/food-item/food-item.component';
import {noop} from 'rxjs';
import {tap} from 'rxjs/operators';
import {DASHBOARD_PATH, LOCAL_STORAGE_TOKEN_KEY} from '../../service/constant';

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
  }

  ngOnInit() {
    this.fetch_food_list();
  }

  fetch_food_list() {
    this.foodListService.kitchen_list().pipe(tap((res: any) => {
      console.log(res);
    })).subscribe(noop, err => {
      console.log(err);
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

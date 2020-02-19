import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DASHBOARD_PATH, STATES_BANGLADESH} from '../../service/constant';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalDialogService} from 'ngx-modal-dialog';
import {MessageModalComponent} from '../../common/message-modal/message-modal.component';
import {FoodService} from '../../service/food.service';
import {map, switchMap, tap} from 'rxjs/operators';
import {noop} from 'rxjs';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})
export class AddFoodComponent implements OnInit {

  foodForm: FormGroup;
  states = STATES_BANGLADESH;

  constructor(private foodService: FoodService,
              private router: Router,
              private route: ActivatedRoute,
              private modalService: ModalDialogService,
              private viewRef: ViewContainerRef,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.foodForm = this.fb.group({

      name: ['name', Validators.compose([Validators.required])],
      category: ['category', Validators.compose([Validators.required])],
      description: ['dscp', Validators.compose([Validators.required])],
      reciepe: ['test', Validators.compose([Validators.required])],
      price: ['20', Validators.compose([Validators.required])],
      ingredients_attributes: this.fb.array([])
    });
  }

  addIngredient() {
    const ingredients = this.foodForm.get('ingredients_attributes') as FormArray;
    ingredients.push(this.fb.group({
      name: ['', Validators.compose([Validators.required])]
    }));
  }

  get ingredients() {
    return this.foodForm.get('ingredients_attributes') as FormArray;
  }

  removeIngredient(i: number) {
    const ingredients = this.foodForm.get('ingredients_attributes') as FormArray;
    ingredients.removeAt(i);
  }

  add_food() {
    this.route.paramMap.pipe(
      switchMap((paramMap: any) => {
        return this.foodService.add_food({
          food: this.foodForm.value
        }, paramMap.params.id)
          .pipe(tap((food: any) => {
            return food;
          }));
      }),
      tap((res: any) => {
        console.log('food: ', res);
      })
    ).subscribe(noop, err => {
      this.openNewDialog('Sorry! Something went wrong.');
    });

    // this.openNewDialog('Kitchen added successfully', true);
    // this.foodService.add_food({food: this.foodForm.value}, paramMap.params.id).pipe(tap((food: any) => {
    //   console.log('RES', paramMap);
    //   return food;
    //   // this.openNewDialog('Kitchen added successfully', true);
    // }));

    // this.foodService.add_food({food: this.foodForm.value}, 1).pipe(tap((res: any) => {
    //   console.log('RES', res);
    //   // this.openNewDialog('Kitchen added successfully', true);
    // })).subscribe(noop, err => {
    //   this.openNewDialog('Sorry! Something went wrong.');
    // });
  }


  openNewDialog(message, success = false) {
    this.modalService.openDialog(this.viewRef, {
      data: message,
      title: 'Message',
      childComponent: MessageModalComponent,
      settings: {contentClass: 'modal-content w-350'},
      actionButtons: [{
        text: 'Ok',
        onAction: () => {
          if (success) {
            this.router.navigateByUrl(DASHBOARD_PATH).then(() => console.log('redirect to dashboard'));
          } else {
            return true;
          }
        }
      }]
    });
  }
}

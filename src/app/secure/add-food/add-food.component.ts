import {AfterViewInit, Component, OnInit, ViewContainerRef} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FOOD_CATEGORY} from '../../service/constant';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalDialogService} from 'ngx-modal-dialog';
import {MessageModalComponent} from '../../common/message-modal/message-modal.component';
import {FoodService} from '../../service/food.service';
import {switchMap, tap} from 'rxjs/operators';
import {noop} from 'rxjs';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})
export class AddFoodComponent implements OnInit, AfterViewInit {

  foodForm: FormGroup;
  foodCategory = FOOD_CATEGORY;

  constructor(private foodService: FoodService,
              private router: Router,
              private route: ActivatedRoute,
              private modalService: ModalDialogService,
              private viewRef: ViewContainerRef,
              private fb: FormBuilder,
              private location: Location) {
  }

  ngOnInit() {
    this.foodForm = this.fb.group({

      name: ['', Validators.compose([Validators.required])],
      category: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      reciepe: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required])],
      ingredients_attributes: this.fb.array([], Validators.required)
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
        this.openNewDialog('Food added successfully', true);
      })
    ).subscribe(noop, err => {
      this.openNewDialog('Sorry! Something went wrong.');
    });
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
            this.location.back();
          } else {
            return true;
          }
        }
      }]
    });
  }

  ngAfterViewInit(): void {
    this.addIngredient();
  }
}

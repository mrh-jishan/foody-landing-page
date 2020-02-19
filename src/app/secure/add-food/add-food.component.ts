import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DASHBOARD_PATH, STATES_BANGLADESH} from '../../service/constant';
import {Router} from '@angular/router';
import {ModalDialogService} from 'ngx-modal-dialog';
import {MessageModalComponent} from '../../common/message-modal/message-modal.component';
import {FoodService} from '../../service/food.service';

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
              private modalService: ModalDialogService,
              private viewRef: ViewContainerRef,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.foodForm = this.fb.group({

      name: ['', Validators.compose([Validators.required])],
      title: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      kitchen_address_attributes: this.fb.group({
        address: ['', Validators.compose([Validators.required])],
        city: ['', Validators.compose([Validators.required])],
        state: ['', Validators.compose([Validators.required])],
        zip_code: 4300
      }),
      tags_attributes: this.fb.array([])
    });
  }

  addTags() {
    const tags = this.foodForm.get('tags_attributes') as FormArray;
    tags.push(this.fb.group({
      name: ['', Validators.compose([Validators.required])]
    }));
  }

  get tags() {
    return this.foodForm.get('tags_attributes') as FormArray;
  }

  get address() {
    return this.foodForm.get('kitchen_address_attributes') as FormGroup;
  }

  removeTag(i: number) {
    const tags = this.foodForm.get('tags_attributes') as FormArray;
    tags.removeAt(i);
  }

  add_food() {
    // this.kitchenService.add_kitchen({kitchen: this.kitchenForm.value}).pipe(tap((res: any) => {
    //   this.openNewDialog('Kitchen added successfully', true);
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

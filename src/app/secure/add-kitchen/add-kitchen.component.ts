import {AfterViewInit, Component, OnInit, ViewContainerRef} from '@angular/core';
import {KitchenService} from '../../service/kitchen.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DASHBOARD_PATH, STATES_BANGLADESH} from '../../service/constant';
import {noop} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {MessageModalComponent} from '../../common/message-modal/message-modal.component';
import {ModalDialogService} from 'ngx-modal-dialog';

@Component({
  selector: 'app-add-kitchen',
  templateUrl: './add-kitchen.component.html',
  styleUrls: ['./add-kitchen.component.scss']
})
export class AddKitchenComponent implements OnInit, AfterViewInit {

  kitchenForm: FormGroup;
  states = STATES_BANGLADESH;

  constructor(private kitchenService: KitchenService,
              private router: Router,
              private modalService: ModalDialogService,
              private viewRef: ViewContainerRef,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.kitchenForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      title: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(30)])],
      kitchen_address_attributes: this.fb.group({
        address: ['', Validators.compose([Validators.required])],
        city: ['', Validators.compose([Validators.required])],
        state: ['', Validators.compose([Validators.required])],
        zip_code: ['', Validators.compose([Validators.required])]
      }),
      tags_attributes: this.fb.array([], Validators.required)
    });
  }

  addTags() {
    const tags = this.kitchenForm.get('tags_attributes') as FormArray;
    tags.push(this.fb.group({
      name: ['', Validators.compose([Validators.required])]
    }));
  }

  get tags() {
    return this.kitchenForm.get('tags_attributes') as FormArray;
  }

  get address() {
    return this.kitchenForm.get('kitchen_address_attributes') as FormGroup;
  }

  removeTag(i: number) {
    const tags = this.kitchenForm.get('tags_attributes') as FormArray;
    tags.removeAt(i);
  }

  add_kitchen() {
    this.kitchenService.add_kitchen({kitchen: this.kitchenForm.value}).pipe(tap((res: any) => {
      this.openNewDialog('Kitchen added successfully', true);
    })).subscribe(noop, err => {
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
            this.router.navigateByUrl(DASHBOARD_PATH).then(() => console.log('redirect to dashboard'));
          } else {
            return true;
          }
        }
      }]
    });
  }

  ngAfterViewInit(): void {
    this.addTags();
  }
}

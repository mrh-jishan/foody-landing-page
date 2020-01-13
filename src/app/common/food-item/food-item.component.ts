import {Component, ComponentRef, OnInit, ViewEncapsulation} from '@angular/core';
import {IModalDialog, IModalDialogOptions} from 'ngx-modal-dialog';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FoodItemComponent implements OnInit, IModalDialog {

  constructor() {
  }

  ngOnInit() {
  }

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<string>>) {
    console.log(options);
    console.log(reference);
  }

}

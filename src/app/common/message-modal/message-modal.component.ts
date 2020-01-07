import {Component, ComponentRef, OnInit, ViewEncapsulation} from '@angular/core';
import {IModalDialog, IModalDialogOptions} from 'ngx-modal-dialog';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MessageModalComponent implements OnInit, IModalDialog {
  message: string;

  constructor() {
  }

  dialogInit(reference: ComponentRef<IModalDialog>,
             options: Partial<IModalDialogOptions<string>>) {
    this.message = options.data;
  }

  ngOnInit() {
  }

}

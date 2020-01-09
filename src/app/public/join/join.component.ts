import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {tap} from 'rxjs/operators';
import {noop} from 'rxjs';
import {Router} from '@angular/router';
import {LOGIN_PATH} from '../../service/constant';
import {MessageModalComponent} from '../../common/message-modal/message-modal.component';
import {ModalDialogService} from 'ngx-modal-dialog';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

  joinForm: FormGroup;
  public gender = 'male';

  constructor(private router: Router,
              private fb: FormBuilder,
              private auth: AuthService,
              private modalService: ModalDialogService,
              private viewRef: ViewContainerRef) {
  }

  ngOnInit() {
    this.joinForm = this.fb.group({
      fName: ['', Validators.compose([Validators.required, Validators.min(6)])],
      lName: ['', Validators.compose([Validators.required, Validators.min(6)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.min(6)])],
      gender: [this.gender, Validators.compose([Validators.required])],
      role: ['customer', Validators.compose([Validators.required])],
      terms: [false, Validators.compose([Validators.requiredTrue])]
    });
  }

  onGenderChange(value) {
    this.gender = value;
    this.joinForm.patchValue({gender: value});
  }

  joinUs() {
    const value = this.joinForm.value;
    const body = {
      user: {
        first_name: value.fName,
        last_name: value.lName,
        password: value.password,
        gender: value.gender,
        email: value.email.toLowerCase(),
        role: value.role
      }
    };

    this.auth.join(body).pipe(tap(user => {
      this.router.navigateByUrl(LOGIN_PATH).then(t => console.log('redirect to login path'));
    })).subscribe(noop, (err: any) => {
      console.log(err);
      this.openNewDialog(err.error.data);
    });
  }

  openNewDialog(message) {
    this.modalService.openDialog(this.viewRef, {
      data: message,
      title: 'Message',
      childComponent: MessageModalComponent,
      actionButtons: [{text: 'Close'}],
      settings: {contentClass: 'modal-content w-350'}
    });
  }
}

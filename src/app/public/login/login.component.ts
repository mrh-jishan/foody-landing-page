import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {noop} from 'rxjs';
import {ModalDialogService} from 'ngx-modal-dialog';
import {MessageModalComponent} from '../../common/message-modal/message-modal.component';
import {tap} from 'rxjs/operators';
import {DASHBOARD_PATH, LOCAL_STORAGE_TOKEN_KEY} from '../../service/constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFrom: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder,
              private auth: AuthService,
              private modalService: ModalDialogService,
              private viewRef: ViewContainerRef) {
  }

  ngOnInit() {
    this.loginFrom = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  login() {
    const value = this.loginFrom.value;
    const body = {
      auth: {
        password: value.password,
        email: value.email.toLowerCase()
      }
    };
    this.auth.login(body).pipe(tap((user: any) => {
      this.auth.update_user(user.data.user);
      this.router.navigateByUrl(DASHBOARD_PATH).then(r => localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, user.data.token));
    })).subscribe(noop, (err) => {
      this.openNewDialog(err.error.message);
    });
  }


  openNewDialog(message) {
    this.modalService.openDialog(this.viewRef, {
      data: message,
      title: 'Message',
      childComponent: MessageModalComponent,
      actionButtons: [{text: 'Ok'}],
      settings: {contentClass: 'modal-content w-350'}
    });
  }
}
